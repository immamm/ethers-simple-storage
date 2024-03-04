// const ethers = require("ethers")
// const fs = require("fs-extra")
// const readFileSync = require("jsonfile")
// require("dotenv").config()
// async function main() {
//     const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
//     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
//     const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
//     const binary = fs.readFileSync(
//         "./SimpleStorage_sol_SimpleStorage.bin",
//         "utf8",
//     )
//     const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
//     console.log("deploying, pls wait")
//     const contract = await contractFactory.deploy()
//     await contract.waitForDeployment(1)
//     const currentFavNo = await contract.retrieve()
//     console.log(`currentFavNo ${currentFavNo.toString()}`)
//     const transactionResponse = await contract.store("7")
//     const transactionReceipt = await transactionResponse.wait()
//     const updateFavNo = await contract.retrieve(
//         console.log(`updated favno is: ${updateFavNo}`),
//     )
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error)
//         process.exit(1)
//     })

const ethers = require("ethers")
const fs = require("fs-extra")
const readFileSync = require("jsonfile")
require("dotenv").config()

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf8",
    )
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("deploying, pls wait")
    const contract = await contractFactory.deploy()
    await contract.waitForDeployment(1)
    const currentFavNo = await contract.retrieve()
    console.log(`currentFavNo ${currentFavNo.toString()}`)
    const transactionResponse = await contract.store("7")
    const transactionReceipt = await transactionResponse.wait()
    console.log(transactionReceipt)
    const myContractDeployedAddress = await contract.getAddress()
    console.log(myContractDeployedAddress)
    const updateFavNo = await contract.retrieve()
    console.log(`updated favno is: ${updateFavNo}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
