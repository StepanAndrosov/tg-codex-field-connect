import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUXUYStore = defineStore('counter', () => {
  const uxuyAccount = ref('')
  const uxuyLoading = ref(false)

  function setAccount(account: string) {
    uxuyAccount.value = account
  }
  function setLoading(loading: boolean) {
    uxuyLoading.value = loading
  }

  return { uxuyAccount, uxuyLoading, setAccount, setLoading }
})
