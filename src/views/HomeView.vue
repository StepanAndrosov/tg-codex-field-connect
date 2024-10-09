<script setup lang="ts">
import { MainButton, useWebAppPopup } from 'vue-tg';
import { useConnect, useChainId } from '@wagmi/vue';

const chainId = useChainId();

const { showAlert } = useWebAppPopup();

const { connectors, connect } = useConnect();
</script>

<template>
  <div class="greetings">
    <h1 class="green">Hello telegram!</h1>
    <h3>You have successfully joined the project</h3>
    <div class="btns">
      <button
        v-for="connector in connectors"
        @click="connect({ connector, chainId })"
        class="btn"
      >
        {{ connector.name }}
      </button>
    </div>

    <MainButton text="Hello" @click="() => showAlert('Hello!')" />
  </div>
</template>

<style scoped>
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
  background: #0b63f6;
  padding: 8px 24px;
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
