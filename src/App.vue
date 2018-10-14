<script>
import { checkLogin } from '@/utils/checkLogin'
import { mapActions } from 'vuex'
import wx from '@/utils/wx'

export default {
  mpType: 'app',
  onLaunch (options) {
    const { path, scene } = options
    const isIPhoneX = this.checkIsIPhoneX()
    // 检测登录
    checkLogin().finally(this.setLaunched)
    this.setIPhoneX(isIPhoneX)
  },
  methods: {
    ...mapActions([
      'setLaunched',
      'setIPhoneX'
    ]),
    checkIsIPhoneX () {
      const info = wx.getSystemInfoSync()
      const model = info.model || ''
      
      if (model.indexOf('iPhone X') > -1) {
        return true
      } else {
        const iPhoneGenReg = /<iPhone(\d*)/
        const match = iPhoneGenReg.exec(model)
        return match ? match[1] > 10 : false
      }
    }
  }
}
</script>

<style lang="scss">
  @import './styles/index.scss';
</style>
