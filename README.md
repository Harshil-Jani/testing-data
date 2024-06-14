`bitcoin-cli -regtest -rpcwallet=<walletname> listtransactions`

- `Dataset1.json` - Listed Transactions from Wallet-1
- `Dataset2.json` - Listed Transactions from Wallet-2

`./tx.sh`

- `tx.sh` - Bash Script to convert txids into JSON Array of raw transaction objects.

- `tx1.json` - Raw Transaction Data from Wallet-1
- `tx2.json` - Raw Transaction Data from Wallet-2

`bitcoin-cli -regtest -rpcwallet=<walletname> listunspent`

- `UTXO1.json` - UTXO present in Wallet-1
- `UTXO2.json` - UTXO present in Wallet-2
