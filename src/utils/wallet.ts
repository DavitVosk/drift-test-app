import {PublicKey, PublicKeyInitData} from '@solana/web3.js';
import {toUint8Array} from 'js-base64';
import {
  Account as AuthorizedAccount,
  AuthorizationResult,
  Base64EncodedAddress,
} from '@solana-mobile/mobile-wallet-adapter-protocol';
import {Account, Authorization} from '@src/contexts/Auth';

export const getPublicKeyFromAddress = (
  address: Base64EncodedAddress,
): PublicKey => {
  const publicKeyByteArray = toUint8Array(address);
  return new PublicKey(publicKeyByteArray);
};

export const getAuthorizationFromAuthorizationResult = (
  authorizationResult: AuthorizationResult,
  previouslySelectedAccount?: Account,
): Authorization => {
  let selectedAccount: Account;
  if (
    previouslySelectedAccount == null ||
    !authorizationResult.accounts.some(
      ({address}) => address === previouslySelectedAccount.address,
    )
  ) {
    const firstAccount = authorizationResult.accounts[0];
    selectedAccount = getAccountFromAuthorizedAccount(firstAccount);
  } else {
    selectedAccount = previouslySelectedAccount;
  }
  return {
    accounts: authorizationResult.accounts.map(getAccountFromAuthorizedAccount),
    authToken: authorizationResult.auth_token,
    selectedAccount,
  };
};

export const getAccountFromAuthorizedAccount = (
  account: AuthorizedAccount,
): Account => {
  return {
    ...account,
    publicKey: getPublicKeyFromAddress(account.address),
  };
};

export const cacheReviver = (key: string, value: PublicKeyInitData) => {
  if (key === 'publicKey') {
    return new PublicKey(value);
  } else {
    return value;
  }
};
