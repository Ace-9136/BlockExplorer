import { useState } from 'react';
import getTransactionDetails from '../components/getTransactionDetails';

function TransactionInfo() {
  const [txHashBox, setTxHashTo] = useState("");
  const [txHashDetails, setTxHashDetails] = useState(null);

  const handleTxBox = (event) => {
    setTxHashTo(event.target.value);
    setTxHashDetails('Please wait');  
  };

  const handleTxBoxClick = async () => {
    const txDetails = await getTransactionDetails(txHashBox);
    setTxHashDetails(txDetails);
  };

  return (
    <div
        style={{
          background: "linear-gradient(to left, #003973, #000000)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          borderTop: "5px solid cyan",
        }}
      >
        <h1 style={{ color: "cyan", align : "center"}} >Transaction Hash Info</h1>
        <input type="text" value={txHashBox} onChange={handleTxBox} placeholder='Paste theTransaction Hash here' />
        <button onClick={handleTxBoxClick}>Click to know Transaction hash Block Info</button> <br />
        {txHashDetails && (<table style={{ border: '2px solid cyan', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Address of Sender</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Address of receiver</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Amount sent by Sender</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Block Number of the given txnHash</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Price Per Gas at the time of Txn</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>nonce</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Position of transaction in the Txn array</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.sender}</td>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.receiver}</td>
              <td style={{ border: '2px solid cyan', padding: '12px' }}>{txHashDetails.amountInETH} ETH</td>
              <td style={{ border: '2px solid cyan', padding: '12px' }}>{txHashDetails.inBlock}</td>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.maxFeePerGas}</td>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.nonce}</td>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.indexInBlock}</td>
            </tr>
          </tbody>
        </table>)
        }
      </div>
  );
}
export default TransactionInfo;
