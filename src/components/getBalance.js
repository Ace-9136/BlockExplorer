import Web3 from 'web3'; // Import Web3 correctly

const api_key = import.meta.env.VITE_API_KEY;
const getBalance = async (address) => {
    
    const web3 = new Web3(new Web3.providers.HttpProvider(api_key));
    const fetchBalance =  await web3.eth.getBalance(address);
    const txnDetails = {};
    txnDetails.transfersOut = await web3.eth.getTransactionCount(address);
    txnDetails.balanceInEth = web3.utils.fromWei(fetchBalance,'ether');
    return txnDetails;
}

export default getBalance;