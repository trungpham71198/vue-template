import { defineStore, acceptHMRUpdate } from 'pinia'

interface IUser {
  email: string
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const info = ref<IUser | null>(null)

  const setInfo = (user: IUser) => {
    info.value = user
  }

  const setIsLoggedIn = (value: boolean) => {
    isLoggedIn.value = value
  }

  return {
    isLoggedIn,
    info,
    setInfo,
    setIsLoggedIn,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
