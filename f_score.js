const network = require("./network.js");
// const transactions = require("./Dataset1.json");
// Obtain the transaction hex to decode it
async function getTxHex(txid) {
    const body = JSON.stringify({
        jsonrpc: "1.0",
        id: "curltext",
        method: "gettransaction",
        params: [txid]
    });

    const response = await fetch(network.url, {
        method: 'POST',
        headers: network.headers,
        body: body
    });
    const data = await response.json();
    return data.result.hex;
}

// Fetch the fee-rate for the transaction made
async function getFeeRateForTransaction(transaction) {
    let hex = await getTxHex(transaction.txid);
    const body = JSON.stringify({
        jsonrpc: "1.0",
        id: "curltext",
        method: "decoderawtransaction",
        params: [hex]
    });

    const response = await fetch(network.url, {
        method: 'POST',
        headers: network.headers,
        body: body
    });
    const data = await response.json();
    let fees = -transaction.fee;
    let weight = data.result.weight;
    return (fees / weight) * (10 ** 8);
}

// Function to call the Mempool block fee rates
async function getFeeRatePercentileForTransaction(timestamp, feeRate) {
    const url = "https://mempool.space/api/v1/mining/blocks/fee-rates/all";
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    const response = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

    const data = await response.json();

    // Find the closest entry by timestamp
    let closestEntry = null;
    let closestDifference = Infinity;

    data.forEach(item => {
        const difference = Math.abs(item.timestamp - timestamp);
        if (difference < closestDifference) {
            closestDifference = difference;
            closestEntry = item;
        }
    });

    switch (true) {
        case feeRate < closestEntry.avgFee_10:
            return 1;
        case feeRate < closestEntry.avgFee_25:
            return 0.9;
        case feeRate < closestEntry.avgFee_50:
            return 0.75;
        case feeRate < closestEntry.avgFee_75:
            return 0.5;
        case feeRate < closestEntry.avgFee_90:
            return 0.25;
        case feeRate < closestEntry.avgFee_100:
            return 0.1;
        default:
            return 0;
    }
}

function feeScoring(transactions) {
    transactions.forEach(async tx => {
        if (tx.category == "send") {
            let fee_rate = await getFeeRateForTransaction(tx);
            console.log(fee_rate + " sats/vByte");
            let RFS = await getFeeRatePercentileForTransaction(tx.blocktime, fee_rate);
            console.log(RFS);
        }
    });
}

function feestoAmountPercentScore(transactions) {
    let FAPS = 0;
    let tx_count = 0;
    transactions.forEach(tx => {
        if (tx.category === "send") {
            FAPS += (tx.fee / tx.amount);
            tx_count++;
        }
    });
    console.log(FAPS / tx_count);
}
