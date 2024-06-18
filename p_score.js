const walletAddressType = "P2WSH" // fetch from the caravan wallet configuration

// Function to call the Bitcoin JSON-RPC API
async function getReceivedByAddress(address, minConf = 6) {
    const url = "http://127.0.0.1:18443/wallet/cormorant";
    const username = "Harshil-Jani";
    const password = "N0KjUIdsrwyu2KfK4ign1Rf-PLovHDt9ctWQC366iFk";
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    headers.set('Content-Type', 'text/plain');

    const body = JSON.stringify({
        jsonrpc: "1.0",
        id: "curltext",
        method: "getreceivedbyaddress",
        params: [address, minConf]
    });

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    });

    const data = await response.json();
    return data.result;
}

function io_score(transaction) {
    let num_input = transaction.vin.length;
    let num_output = transaction.vout.length;

    let score;
    if (num_input == 1) {
        if (num_output == 1) {
            // Sweep
            score = 1 / 2;
        } else if (num_output == 2) {
            // Simple Spend
            score = 4 / 9;
        } else {
            // Fractions
            score = (2 / 3) - (1 / num_output);
        }
    } else {
        if (num_output == 1) {
            // Consolidation
            score = (1 / num_input);
        } else {
            // Coin Join
            score = ((0.75 * num_output) + (0.25 * (num_input - 1))) / (num_input + num_output);
        }
    }

    let self = true;
    transaction.vout.forEach(async output => {
        let address = output.scriptPubKey.address;
        let a = await getReceivedByAddress(address);
        if(a===null){
            // Not a self payment
            self = false;
        }
    })
    if(self){
        return score*1.5;
    }
    return score;
}

function reuse_factor(utxos) {
    let reused_amount = 0;
    let total_amount = 0;
    utxos.forEach(utxo => {
        if (utxo.reused) {
            reused_amount += utxo.amount;
        }
        total_amount += utxo.amount;
    })
    return reused_amount / total_amount;
}

function address_type_factor(transactions) {
    let P2WSH = 0;
    let P2PKH = 0;
    let P2SH = 0;
    let atf = 1;
    transactions.forEach(transaction => {
        transaction.vout.forEach(output => {
            let address = output.scriptPubKey.address;
            if (address.startsWith("bc")) {
                //Bech 32 Native Segwit (P2WSH) or Taproot
                P2WSH += 1;
            } else if (address.startsWith("1")) {
                // Legacy (P2PKH)
                P2PKH += 1;
            } else {
                // Segwith (P2SH)
                P2SH += 1;
            }
        })
    });
    if (walletAddressType == "P2WSH" && (P2WSH != 0 && (P2SH != 0 || P2PKH != 0))) {
        atf = 1 / (P2WSH + 1);
    } else if (walletAddressType == "P2PKH" && (P2PKH != 0 && (P2SH != 0 || P2WSH != 0))) {
        atf = 1 / (P2PKH + 1);
    } else if (walletAddressType == "P2SH" && (P2SH != 0 && (P2WSH != 0 || P2PKH != 0))) {
        atf = 1 / (P2SH + 1);
    } else {
        atf = 1;
    }
    return atf;
}

function utxo_spread_factor(utxos) {
    // Step 1: Extract amounts
    const amounts = utxos.map(utxo => utxo.amount);

    // Step 2: Calculate mean (μ)
    const mean = amounts.reduce((sum, amount) => sum + amount, 0) / amounts.length;

    // Step 3: Calculate standard deviation (σ)
    const variance = amounts.reduce((sum, amount) => sum + Math.pow(amount - mean, 2), 0) / amounts.length;
    const stdDev = Math.sqrt(variance);

    // Step 4: Compute z-scores
    const updatedUtxos = utxos.map(utxo => {
        const zScore = (utxo.amount - mean) / stdDev;
        return { ...utxo, z_score: zScore };
    });
    return stdDev / (stdDev + 1);
}

function utxo_set_length_weight(utxos) {
    let utxo_set_length = utxos.length;
    let weight;
    if (utxo_set_length >= 50) {
        weight = 0;
    } else if (utxo_set_length >= 25 && utxo_set_length <= 49) {
        weight = 0.25;
    } else if (utxo_set_length >= 15 && utxo_set_length <= 24) {
        weight = 0.5;
    } else if (utxo_set_length >= 5 && utxo_set_length <= 14) {
        weight = 0.75;
    } else {
        weight = 1;
    }
    return weight;
}

function combined_utxo_factor(utxos) {
    let W = utxo_set_length_weight(utxos);
    let USF = utxo_spread_factor(utxos);
    return (USF - 0.1) + (W - 0.5);
}

function privacy_score (transactions, utxos) {
    let privacy_score = transactions.reduce((sum, tx) => sum + io_score(tx), 0) / transactions.length;
    privacy_score = (privacy_score * (1 - (0.5 * reuse_factor(utxos)))) + (0.10 * (1 - reuse_factor(utxos)));
    privacy_score = privacy_score * (1-address_type_factor(transactions));
    privacy_score = privacy_score + 0.1 * combined_utxo_factor(utxos)
    return privacy_score
}

console.log(privacy_score(transactions,utxos));
