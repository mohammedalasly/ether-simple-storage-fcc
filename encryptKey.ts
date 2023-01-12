//Encrypt our private key and store our encrypted key locally
// const ethers = require("ethers");
// const fs = require("fs-extra");
// require("dotenv").config();

/* TYPE Script compatible*/
import { ethers } from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"

async function main() {
    /*creat a wallet and encryptedkey*/
    /*adding "!" tell typescript this wil not be undefined*/
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!)
    // encrypt function return "encryptedJsonKey" we stroe locally
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD!,
        process.env.PRIVATE_KEY!
    )
    console.log(encryptedJsonKey)
    /*then save the encrypted key to a new file "encryptedKey.json" */
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
