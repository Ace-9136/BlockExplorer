import Web3 from 'web3'; // Import Web3 correctly
const api_key = import.meta.env.VITE_API_KEY;

const getBlockbyNumber = async (blockNum) => {
  const web3 = new Web3(new Web3.providers.HttpProvider(api_key));
  const blockData = await web3.eth.getBlock(blockNum, true);

  console.log(blockData);
  const numberOfTxns = blockData.transactions.length;
  const getFeeInWei = Number(blockData.baseFeePerGas.toString()); 
  const gasInGwei = Number(getFeeInWei.toString());

  const timestamp = Number(blockData.timestamp.toString());
  const totalDifficulty = Number(blockData.totalDifficulty.toString()); 
  const BlockGasLimit = Number(blockData.gasLimit.toString()); 

  const BlockSpaceUsed = Number(blockData.gasUsed.toString());
  const blockFilledPecent = (BlockSpaceUsed * 100) / BlockGasLimit;

  const BlockDataObj = {
    baseFeePerGas: gasInGwei,
    txnCount: numberOfTxns,
    gasLimit: BlockGasLimit,
    gasUsed: BlockSpaceUsed,
    blockFilledPecent: `${blockFilledPecent}%`,
    timestamp: timestamp,
    totalDifficulty: totalDifficulty,
  };
  console.log(BlockDataObj);

  return BlockDataObj;
};

export default getBlockbyNumber;
