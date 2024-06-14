#!/bin/bash

# Define variables for the rpcwallet and the Dataset1 file
RPCWALLET="cormorant"
DATASET_FILE="Dataset1.json"

# Extract the txids from the Dataset file using jq
# The Dataset file contains the transactions from the wallet
txids=$(jq -r '.[] | .txid' "$DATASET_FILE")

raw_txn=()

# Loop through each txid and get the transaction details
for txid in $txids
do
    # Get transaction details using bitcoin-cli
    transaction_detail=$(bitcoin-cli -regtest -rpcwallet="$RPCWALLET" gettransaction $txid)
    # Extract the hex value using jq
    hex_value=$(echo "$transaction_detail" | jq -r '.hex')
    # Add the hex value to the array
    txn_hex=$(bitcoin-cli -regtest -rpcwallet="$RPCWALLET" decoderawtransaction $hex_value)
    raw_txn+=("$txn_hex")
done

joined_txns=$(IFS=,; echo "[${raw_txn[*]}]")
echo "$joined_txns"
