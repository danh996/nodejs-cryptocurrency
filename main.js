let BlockChain = require("./blockchain/blockChain");

let blockChain = new BlockChain();

let hash = require("object-hash");

let PROOF = 156;

let validaProof = (proof) => {
    let guessHash = hash(proof);
    console.log("Hashing: ", guessHash);
    return guessHash == hash(PROOF);
}

let proofOfWork = () => {
    let proof = 0;
    while(true){
        if(!validaProof(proof)){
            proof++
        } else {
            break;
        }
    }
    return proof;
}

if(proofOfWork == PROOF){
    blockChain.addNewTransaction("danh", "nguyen", 10);
    let prevHash = blockChain.lastBlock().hash ? blockChain.lastBlock().hash : null;
    blockChain.addNewBlock();
}

console.log("Chain: ", blockChain.chain);