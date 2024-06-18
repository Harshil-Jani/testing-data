// For Regtest Mode Only
const network = {
    url: "http://127.0.0.1:18443/wallet/cormorant",
    username: "Harshil-Jani",
    password: "N0KjUIdsrwyu2KfK4ign1Rf-PLovHDt9ctWQC366iFk",
    headers: new Headers()
};

network.headers.set('Authorization', 'Basic ' + btoa(network.username + ":" + network.password));
network.headers.set('Content-Type', 'text/plain');

// TODO : Can be set to custom based on network type (Eg : Mainnet with Mempool URL)

module.exports = network;