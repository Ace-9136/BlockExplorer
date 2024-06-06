import { useState, useEffect } from 'react';
import getBalance from '../components/getBalance';
import Web3 from 'web3';
import "../App.css"

const api_key = import.meta.env.VITE_API_KEY;

function WelcomePage() {
  const [gasPrice, setGasPrice] = useState('Loading');
  const [blockNumber, setBlockNumber] = useState('Loading');
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [transfersOut, setTransfersOut] = useState('');
  useEffect(() => {
    const web3 = new Web3(new Web3.providers.HttpProvider(api_key));

    const fetchData = async () => {
      try {
        const gasPrice = await web3.eth.getGasPrice();
        const blockNum = await web3.eth.getBlockNumber();
        const showGas = web3.utils.fromWei(gasPrice, "gwei");

        setBlockNumber(blockNum.toString());
        setGasPrice(showGas);
      } catch (error) {
        console.error('Error fetching data from Web3:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setBalance('Please wait fetching balance');
  }
  const handleClick = async () => {
    const bal = await getBalance(address);
    setBalance(bal.balanceInEth);
    setTransfersOut(bal.transfersOut.toString());
  }

  return (
    <div style={{
      background: "linear-gradient(to left, #003973, #000000)",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      borderTop: "5px solid cyan",
    }}> 
      <h1 style={{ color: "cyan", textAlign: "center" }}>
        Welcome to Ethereum Block Explorer
      </h1>
      <p>
        Gas Price is: <strong>{gasPrice} Gwei</strong>
      </p>
      <p>
        Latest Mined Block Number is: <strong>{blockNumber}</strong>
      </p>
      <br />
        <h2 style={{ color: "cyan"}}color='cyan'>Let&apos;s get the balance of an address </h2>  
      <p>
        Go to <a style={{ color: 'white', textDecoration:"underline" }} href="https://etherscan.io" target="_blank" rel="noopener noreferrer" >Etherscan.io</a> to pick any address and paste it below<br /><br />
      <input type="text" value={address} onChange={handleAddressChange} placeholder='Paste the Ethereum address here' />
      <br />
      <button onClick={handleClick}>Get Balance</button> <br /><br/>
        The balance of the <br/>address {address} is : {balance} ETH <br/>and this address has sent {transfersOut} transactions out
      </p>
    </div>
  );
}

export default WelcomePage;
