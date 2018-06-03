import wallet from "ethereumjs-wallet";

export function getWalletAddress(){
    const myWallet = wallet.generate();
    // console.log(`Address: ${myWallet.getAddressString()}`);
    // console.log(`Private Key: ${myWallet.getPrivateKeyString()}`);

    var ret = [];
    ret.publicKey = myWallet.getAddressString();
    ret.privateKey = myWallet.toV3String(process.env.PRV_SECRET);
    return ret;
}