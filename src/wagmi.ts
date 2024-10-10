import { http, createConfig, createStorage } from '@wagmi/vue'
import { mainnet } from '@wagmi/vue/chains'
import { codexFieldWallet } from "codexfield-wallet-connector";

export const config = createConfig({
    chains: [mainnet],
    connectors: [
        codexFieldWallet({
            projectId: '68e316d8d77888d08e5fe7730105953b',
            debug: false,
        }),
    ],
    storage: createStorage({ storage: localStorage, key: 'vite-vue' }),
    transports: {
        [mainnet.id]: http(),
    },
})

declare module '@wagmi/vue' {
    interface Register {
        config: typeof config
    }
}