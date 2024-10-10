<script setup lang="ts">
import { MainButton, useWebAppPopup } from "vue-tg";
import { useConnect, useChainId, useAccount, useDisconnect } from "@wagmi/vue";
import { signMessage } from "@wagmi/vue/actions";
import { config } from "@/wagmi";

const chainId = useChainId();

const { showAlert } = useWebAppPopup();

const { connectors, connect } = useConnect();
const { address, isConnected } = useAccount();
const { disconnect } = useDisconnect();

const sign = async () => {
  return signMessage(config, { message: "Hello!" });
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">Hello telegram!</h1>
    <h3>You have successfully joined the project</h3>
    <div v-if="!isConnected" class="btns">
      <button
        v-for="connector in connectors"
        @click="connect({ connector, chainId })"
        class="btn"
      >
        {{ connector.name }}
      </button>
    </div>
    <div v-else class="sign-block">
      <span class="green addr">{{ address }}</span>
      <button @click="sign" class="btn">Sign Message</button>
    </div>

    <button v-if="isConnected" class="btn red" @click="() => disconnect()">
      Disconnect
    </button>
    <MainButton text="Hello" @click="() => showAlert('Hello!')" />
  </div>
</template>

<style scoped>
.sign-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.addr {
  font-size: 12px;
  text-align: center;
}
.btns {
  display: flex;
  align-items: center;
  gap: 4px;
}
.btn {
  margin-top: 24px;
  border-radius: 10px;
  color: white;
  transition: 0.2s linear;
  background: hsla(160, 100%, 37%, 1);
  padding: 8px 24px;
}
.red {
  background: rgb(211, 40, 6);
}
h1 {
  font-weight: 500;
  font-size: 1.2rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1rem;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 2.6rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  .addr {
    font-size: 14px;
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
