import { useUXUYStore } from '@/stores/uxuy';
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk';

const { ethereum } = new WalletTgSdk();

export async function connectUXUY() {
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

export async function disconnectUXUY() {
    try {
        ethereum.request({ method: 'sing_message' })
        ethereum.disconnect();
        console.log('Current address:', '');
    } catch (error) {
        console.error('Failed to get address:', error);
    } finally {
        useUXUYStore().setAccount('')
    }
}

export const signMessageUXUY = async (address: string) => {
    const signMessage = 'Hello UXUY Wallet'
    useUXUYStore().setLoading(true)
    try {
        await ethereum.request({
            method: 'personal_sign',
            params: [signMessage, address],
        })

    } catch (error) {
        console.error('Message signing failed:', error)

    }
    useUXUYStore().setLoading(false)
}