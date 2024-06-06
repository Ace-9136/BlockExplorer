import { useState } from 'react';
import getBlockbyNumber from '../components/getBlockbyNumber';

function BlockInfo() {
  const [inputBlock, setInputBlock] = useState('');
  const [blockResult, setBlockResult] = useState(null); // Set initial state to null

  const handleBlockBox = (event) => {
    setInputBlock(event.target.value);
    setBlockResult('Please wait...'); // Update result with a loading message
  };

  const handleBlockResult = async () => {
    try {
      const blockData = await getBlockbyNumber(inputBlock);
      setBlockResult(blockData);
    } catch (error) {
      console.error('Error fetching block data:', error);
      setBlockResult('An error occurred. Please try again.'); // Update result with error message
    }
  };

  return (
    <div style={{
      background: "linear-gradient(to left, #003973, #000000)",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      borderTop: "5px solid cyan",
    }}>
      <h1 style={{ color: "cyan", textAlign: "center" }}>Block Info</h1>
      <br />
      <input
        type="text"
        value={inputBlock}
        onChange={handleBlockBox}
        placeholder='Paste the Block Number here'
      />
      <button onClick={handleBlockResult}>Click to know brief Block Info</button>
      <br />
      {blockResult && ( // Conditionally render result only if blockResult is not null
        <table style={{ border: '2px solid cyan', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Base Fee Per Gas</th>
              <th style={{ border: '2px solid cyan', padding: '8px', paddingLeft: '150px' }}>Number of transactions in the block</th>
              <th style={{ border: '2px solid cyan', padding: '12px' }}>Gas Limit</th>
              <th style={{ border: '2px solid cyan', padding: '12px' }}>Gas Used</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Block Filled Percent</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Block Mined At</th>
              <th style={{ border: '2px solid cyan', padding: '8px' }}>Total Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{parseFloat(blockResult.baseFeePerGas).toFixed(8)}</td>
              <td style={{ border: '2px solid cyan', padding: '8px', paddingLeft: '150px' }}>{blockResult.txnCount}</td>
              <td style={{ border: '2px solid cyan', padding: '12px' }}>{blockResult.gasLimit}</td>
              <td style={{ border: '2px solid cyan', padding: '12px' }}>{blockResult.gasUsed}</td>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{blockResult.blockFilledPecent}</td>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{new Date(blockResult.timestamp * 1000).toString()}</td>
              <td style={{ border: '2px solid cyan', padding: '8px' }}>{blockResult.totalDifficulty}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BlockInfo;
