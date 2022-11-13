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
const fs = require("fs-extra");

async function main() {
    // http://127.0.0.1:7545
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet(
        "ccd2903f9d9db2ae7ba669034c475b603a75ba7b62c3432d9d9247daca3f8b6a", 
        provider
    );
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...");
    debugger
    const contract = await contractFactory.deploy(); //Stop here! Wait contract to deploy
    console.log(contract);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});

// à comprendre après
