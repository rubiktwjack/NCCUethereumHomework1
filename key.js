// npm-library
const Wallet = require("ethereumjs-wallet");
const keccak256 = require("js-sha3").keccak256;

// keypair
const wallet = Wallet.generate();

/***** Quesent 1 *****/
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey.toString("hex"));

// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString("hex"));

// address
let address = wallet.getAddressString();
console.log("address:", address);

/***** Quesent 2 *****/
/***** address *****/

// step 2:  public_key_hash = Keccak-256(public_key)
//Your code
const pubKey_hash = keccak256(pubKey);
//console.log(pubKey_hash);

// step 3:  address = ‘0x’ + last 20 bytes of public_key_hash
//Your code
address = "0x" + pubKey_hash.slice(-40).toString("hex");
console.log("address:", address);

/***** Quesent 3 *****/
const keystore = wallet.toV3("nccu");
console.log(keystore);
