import { useUXUYStore } from '@/stores/uxuy';
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk';

const { ethereum } = new WalletTgSdk();

export async function connectWallet() {
    useUXUYStore().setLoading(true)
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
        useUXUYStore().setAccount(accounts[0])
        return accounts[0];
    } catch (error) {
        console.error('Failed to connect wallet:', error);
    } finally {
        useUXUYStore().setLoading(false)
    }
}

// Get the current chain ID
export async function getChainId() {
    try {
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log('Current chain ID:', chainId);
        return chainId;
    } catch (error) {
        console.error('Failed to get chain ID:', error);
    }
}

// Get the current address
export async function getAccounts() {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log('Current address:', accounts[0]);
        return accounts[0];
    } catch (error) {
        console.error('Failed to get address:', error);
    }
}