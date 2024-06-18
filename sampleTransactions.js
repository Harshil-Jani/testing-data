const sampleTransactions = {
    sweepSelfSpend: {
        "txid": "aee2b119be3235d92973bd057f35494466474727c6a677295eeb2ea30e05ac04",
        "hash": "4b0f0a59c374cb27df4e5b30241b69403cb346cdb420fcbc03dd5227d25fcf47",
        "version": 1,
        "size": 243,
        "vsize": 132,
        "weight": 525,
        "locktime": 0,
        "vin": [
            {
                "txid": "9738a1692d8469928344955795fdd97136b89cfa1aa54e5cb3ec5fc956c65b97",
                "vout": 0,
                "scriptSig": {
                    "asm": "",
                    "hex": ""
                },
                "txinwitness": [
                    "",
                    "3045022100bfc2fe3b4b12b141bb5a32bf83732321e5c61f183334bd051269589d160ddc0502207e2e5f40a486a4ea1f31d4781f79f008027251764945b78a7ab3878d892cf30301",
                    "51210230c0d345a22fb39c1f07ff49767cc974aaa21c6efda968d2a66079a97b6162b021038d794d40988c2e1fb631e27f5e25dc9703467cac713070969898e29bcab7228e52ae"
                ],
                "sequence": 4294967295
            }
        ],
        "vout": [
            {
                "value": 0.00234736,
                "n": 0,
                "scriptPubKey": {
                    "asm": "0 763f11eaddfbefd78045b2ca91b07e8501c64c040ce69dad66951e74172ea5ef",
                    "desc": "addr(bcrt1qwcl3r6kal0ha0qz9kt9frvr7s5quvnqypnnfmttxj508g9ew5hhs5elqz5)#ev476qw2",
                    "hex": "0020763f11eaddfbefd78045b2ca91b07e8501c64c040ce69dad66951e74172ea5ef",
                    "address": "bcrt1qwcl3r6kal0ha0qz9kt9frvr7s5quvnqypnnfmttxj508g9ew5hhs5elqz5",
                    "type": "witness_v0_scripthash"
                }
            }
        ]
    },
    simpleSelfSpend: {
        "txid": "6a6e80246c542d22e32dceaf5275b3fe8eee354add4eeeb6e697a5bf8ecd28d4",
        "hash": "fa7ff1fa76cc35b499e0272df22dd5a1fb9d3a4d1efdd5db8ada3289e3fef30e",
        "version": 2,
        "size": 205,
        "vsize": 154,
        "weight": 616,
        "locktime": 1136,
        "vin": [
            {
                "txid": "ea6b8dbf7d0ca54ca10df0306696ca715c2655106cd12cd5258819be1eff6be6",
                "vout": 0,
                "scriptSig": {
                    "asm": "",
                    "hex": ""
                },
                "txinwitness": [
                    "8a9d01e6924e2dd2ed2a590151b45cfe9635345c84e1db8c36577ad3eb72085d35c5cec9bd23efdfbb2e851499dd7e6f7693650b1d0868de5eefdfd07609c2a4"
                ],
                "sequence": 4294967293
            }
        ],
        "vout": [
            {
                "value": 5.0,
                "n": 0,
                "scriptPubKey": {
                    "asm": "0 26c7d90f6f7029c63bfb92b5f35838b9919f0e09781715a46c0e1d861a1b1862",
                    "desc": "addr(bcrt1qymrajrm0wq5uvwlmj26lxkpchxge7rsf0qt3tfrvpcwcvxsmrp3qq60fu7)#szq6selt",
                    "hex": "002026c7d90f6f7029c63bfb92b5f35838b9919f0e09781715a46c0e1d861a1b1862",
                    "address": "bcrt1qymrajrm0wq5uvwlmj26lxkpchxge7rsf0qt3tfrvpcwcvxsmrp3qq60fu7",
                    "type": "witness_v0_scripthash"
                }
            },
            {
                "value": 12.9984371,
                "n": 1,
                "scriptPubKey": {
                    "asm": "1 67d4dbb2b886601811cfaa36dc5645c8b4ff9f0aaad5e3c422044d94d12da34f",
                    "desc": "rawtr(67d4dbb2b886601811cfaa36dc5645c8b4ff9f0aaad5e3c422044d94d12da34f)#jmguzhqp",
                    "hex": "512067d4dbb2b886601811cfaa36dc5645c8b4ff9f0aaad5e3c422044d94d12da34f",
                    "address": "bcrt1pvl2dhv4csespsyw04gmdc4j9ez60l8c24t2783pzq3xef5fd5d8sdxfpwt",
                    "type": "witness_v1_taproot"
                }
            }
        ]
    },
    coinJoin: {
        "txid": "1f55379604d8bced0368a8e4709e6d0c87eec4d763e4189287ebfc827a35b27a",
        "hash": "d272e5492cf067d398b91732a8294049f7fe2322b998bb7aff4e08172a54ac7e",
        "version": 1,
        "size": 474,
        "vsize": 252,
        "weight": 1008,
        "locktime": 0,
        "vin": [
            {
                "txid": "c939e274f208a571c132cf8343d6216a9a91b589086dcb8ae66784379ac4e63e",
                "vout": 0,
                "scriptSig": {
                    "asm": "",
                    "hex": ""
                },
                "txinwitness": [
                    "",
                    "3045022100cd71cd5e93665b2e17f1d233b91439baf4f9fe704772c965c7deb3339cf8be6b02202c563d42a2a03e07342e2736460ae75bdaacaa8ed80d467ed160863e6f54396901",
                    "5121020accb1668346b74e96498f4c40c0bdfc4bf9416b89b1ba0ae9a3b4149e2c86982103442077c5b072abed1ea0dc7a9f7dfdcb287676a50954bbcdd7c569a619f36b5252ae"
                ],
                "sequence": 4294967295
            },
            {
                "txid": "c939e274f208a571c132cf8343d6216a9a91b589086dcb8ae66784379ac4e63e",
                "vout": 1,
                "scriptSig": {
                    "asm": "",
                    "hex": ""
                },
                "txinwitness": [
                    "",
                    "3045022100c4d082e2ded69fc0caa64637ef75fb7c5b945b3792f69ae42b364ba6667a27dc02200c2d44d39c184f217c424f239f3fc69b991ffe4e125e3a5b83ec4e0aa0d67f0801",
                    "512102fad7abde032032af97a9420a72e492aa7fed8ad6004021ab36d1fc6c122889dd2103915fa6cdc081b0beef14abddfdc6053663f84b1bd35cf5afbffaa7c3cbd7d80352ae"
                ],
                "sequence": 4294967295
            }
        ],
        "vout": [
            {
                "value": 0.2,
                "n": 0,
                "scriptPubKey": {
                    "asm": "0 ce9f9593467296ddddb6f3bff3279b211af530aefb2739d3bcfc537ef38ac377",
                    "desc": "addr(bcrt1qe60ety6xw2tdmhdk7wllxfumyyd02v9wlvnnn5aul3fhauu2cdmsdccjxa)#zqds26kt",
                    "hex": "0020ce9f9593467296ddddb6f3bff3279b211af530aefb2739d3bcfc537ef38ac377",
                    "address": "bcrt1qe60ety6xw2tdmhdk7wllxfumyyd02v9wlvnnn5aul3fhauu2cdmsdccjxa",
                    "type": "witness_v0_scripthash"
                }
            },
            {
                "value": 16.85193827,
                "n": 1,
                "scriptPubKey": {
                    "asm": "0 f0729b5bf8b134436cb5849e88a9c07db52fcedf838b816d023c14e3df320d90",
                    "desc": "addr(bcrt1q7pefkklcky6yxm94sj0g32wq0k6jlnklsw9czmgz8s2w8hejpkgqshd9m6)#amauws44",
                    "hex": "0020f0729b5bf8b134436cb5849e88a9c07db52fcedf838b816d023c14e3df320d90",
                    "address": "bcrt1q7pefkklcky6yxm94sj0g32wq0k6jlnklsw9czmgz8s2w8hejpkgqshd9m6",
                    "type": "witness_v0_scripthash"
                }
            }
        ]
    },
}

module.exports = sampleTransactions;