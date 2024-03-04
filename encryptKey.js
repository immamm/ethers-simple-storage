const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJson = await wallet.encrypt(
    process.env.PRIVATE_KEY,
    process.env.PRIVATE_KEY_PASSWORD
  );
  console.log(encryptedJson);
  fs.writeFileSync("./.encryptKey.json", encryptedJson);
}

main()
  .then(() => process.exit(1))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
