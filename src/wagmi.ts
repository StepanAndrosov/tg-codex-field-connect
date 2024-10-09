import { http, createConfig, createStorage } from '@wagmi/vue'
import { bscTestnet } from '@wagmi/vue/chains'
import { codexFieldWallet } from "codexfield-wallet-connector";

export const config = createConfig({
    chains: [bscTestnet],
    connectors: [
        codexFieldWallet({
            projectId: '68e316d8d77888d08e5fe7730105953b',
            debug: false,
            returnUrl: "https://415d-1-53-156-140.ngrok-free.app",
        }),
    ],
    storage: createStorage({ storage: localStorage, key: 'vite-vue' }),
    transports: {
        [bscTestnet.id]: http(),
    },
})

declare module '@wagmi/vue' {
    interface Register {
        config: typeof config
    }
}