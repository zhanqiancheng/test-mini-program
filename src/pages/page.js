import store from '@/store'

const appLaunching = new Promise(resolve => {
  const unwatch = store.watch(
    state => state.isLaunched,
    value => {
      resolve()
      unwatch()
    }
  )
})

/**
 * appLaunching：app启动完成
 * isHideLong：页面离开了很久
 */
const mixin = {
  data () {
    return {
      lastHideTime: NaN,
      isHideLong: false,
      hideDuration: 0
    }
  },
  mounted () {
    this.appLaunching = appLaunching
  },
  onShow () {
    const duration = Date.now() - this.lastHideTime
    this.hideDuration = duration
    this.isHideLong = duration > 30000
  },
  onHide () {
    this.lastHideTime = Date.now()
  },
  onUnload () {
    Object.assign(this.$data, this.$options.data())
  }
}

export default mixin
