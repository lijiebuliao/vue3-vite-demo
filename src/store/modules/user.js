const userStore = defineStore('user', {
  state: () => {
      return {
          userInfo: {}
      }
  },
  actions: {
      setUserInfo(userInfo) {
          this.userInfo = userInfo
      }
  }
})
export default userStore;