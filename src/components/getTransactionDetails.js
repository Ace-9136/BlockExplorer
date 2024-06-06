import Web3 from 'web3'; 
const api_key = import.meta.env.VITE_API_KEY;

const getTransactionDetails = async (txhash) =>{
    const web3 = new Web3(new Web3.providers.HttpProvider(api_key));
    const res = await web3.eth.getTransaction(txhash);
    const sender = res.from;
    const receiver = res.to;
    const inBlock = Number(res.blockNumber.toString());
    const inBlockHash = Number(res.blockHash.toString());
    const maxFeePerGas = Number(res.maxFeePerGas.toString());
    const nonce = Number(res.nonce.toString());
    const indexInBlock = Number(res.transactionIndex.toString());
    const amountInETH = web3.utils.fromWei(res.value,'ether');
    const txHashObj = {
        sender:sender,
        receiver:receiver,
        inBlock:inBlock,
        inBlockHash:inBlockHash,
        maxFeePerGas:maxFeePerGas,
        nonce:nonce,
        indexInBlock:indexInBlock,
        amountInETH:amountInETH
    }
    return txHashObj;
}
export default getTransactionDetails;