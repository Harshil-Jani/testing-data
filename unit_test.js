// Privacy Scoring (p_score.js)
const sampleTransactions = require('./sampleTransactions');
const transactions = require('./tx2.json');
const { io_score } = require("./p_score")

const runTests = () => {
    console.log('Running tests...');

    // Test case for sweep transaction
    const sweepSpendScore = io_score(sampleTransactions.sweepSelfSpend);
    console.assert(sweepSpendScore === 0.75, "sweepSpendScore test case failed");

    // Test case for simple spend transaction
    const simpleSpendScore = io_score(sampleTransactions.simpleSelfSpend);
    console.assert(simpleSpendScore === 2/3, "simpleSpendScore test case failed");

    // Test case for coin-join transaction
    const coinJoinScore = io_score(sampleTransactions.simpleSelfSpend);
    console.assert(coinJoinScore === 2/3, "coinJoinScore test case failed");

    console.log('All tests passed!');
};
