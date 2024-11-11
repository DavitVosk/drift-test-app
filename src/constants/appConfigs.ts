import {DRIFT_WEBSITE} from './links';

export const APP_IDENTITY = {
  name: 'Drift App',
  uri: DRIFT_WEBSITE,
};

enum WalletAdapterNetwork {
  Mainnet = 'mainnet-beta',
  Testnet = 'testnet',
  Devnet = 'devnet',
}

export const RPC_ENDPOINT = WalletAdapterNetwork.Devnet;

export const STORAGE_KEY = 'app-cache';

export const tokenBalanceThreshold = 20;
