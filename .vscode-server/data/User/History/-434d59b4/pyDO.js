// synchronous [solidity] : solidity is a sychronous language => its just goes one line after another
// asynchronous [javascript] : can run some piece of code at the same time

// cooking

// Synchronous
// 1. Put popcorn in microwave  -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asychronus
// 1. Put popcorn in microwave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise
// Pending
// Fulfilled
// Rejected

const ethers = require("ethers");

async function main() {
    // http://127.0.0.1:7545
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet("31161f71a3dc8c8e065b1359b5f3765fb0a6991f9803d254898ecef390fdaa98", provider);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});

// à comprendre après
