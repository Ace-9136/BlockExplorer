//const address = "0x0Fd40853B3B8c7805158b862B76B35A2a27B596A";
//const ContractAddress = "0x07a27472f5C3B6e494c865aDd34C4e1c8C14EB2e";


//const contract = new web3.eth.Contract(abi.abi , ContractAddress)
import Web3 from 'web3'; // Import Web3 correctly

const api_key = import.meta.env.VITE_API_KEY;
async function GetBalance() {
const web3 = new Web3(new Web3.providers.HttpProvider(api_key));
const x = await web3.eth.getGasPrice();
const gasin = web3.utils.fromWei(x , 'gwei')
 console.log(gasin)
    
  }
  GetBalance();
//export default GetBalance;