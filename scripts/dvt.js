const { ethers } = require("ethers");
const dotenv = require("dotenv");

//load env variables
dotenv.config();

const { RPC_URL, DEPLOYER_PRIVATE_KEY, ATTACKER_PRIVATE_KEY, DVT_ADDRESS } = process.env;
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const deployer = new ethers.Wallet(DEPLOYER_PRIVATE_KEY).connect(provider);
const attacker = new ethers.Wallet(ATTACKER_PRIVATE_KEY).connect(provider)

const tokenAbi =
  require("../out/DamnValuableToken.sol/DamnValuableToken.json").abi;

const token = new ethers.Contract(DVT_ADDRESS, tokenAbi, provider);

// Send 1 ether to an ens name.
const tx = deployer.sendTransaction({
    to: attacker.address,
    value: ethers.utils.parseEther("0.2")
});


