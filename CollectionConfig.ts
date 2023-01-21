import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Utopiots',
  tokenName: 'Utopiots',
  tokenSymbol: 'UTOPS',
  hiddenMetadataUri: 'ipfs://QmfTHYhBVLY5wqHvAGtk8kXjZWNSbrShm62mAwccMHtB3C.json',
  maxSupply: 450,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.0125,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.0175,
    maxMintAmountPerTx: 50,
  },
  contractAddress: '0x93A39675ad890D1F443bfb650967Eb4209689373',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
