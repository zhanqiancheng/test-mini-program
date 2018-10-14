<template>
  <div class="gp-button-mask">
    <button v-if="isShowUserButton" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo"></button>
    <form v-if="isShowFormButton" report-submit @submit="handleSubmit">
      <button formType="submit"></button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { login } from '@/utils/checkLogin'

export default {
  props: {
    // 包括获取formID按钮(type: 'form')和登录按钮(type: 'userInfo')
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState({
      isLogin: 'isLogin'
    }),
    // 当没有传type指定显示哪个类别按钮时，默认根据登录状态显示
    isShowFormButton () {
      if (this.type !== null) {
        return this.type === 'form' && this.isLogin
      } else {
        return this.isLogin
      }
    },
    isShowUserButton () {
      if (this.type !== null) {
        return this.type === 'userInfo'
      } else {
        return !this.isLogin
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'cacheFormId'
    ]),
    handleSubmit (evt) {
      const formId = evt.target.formId
      this.cacheFormId(formId)
      this.$emit('change')
    },
    onGotUserInfo (e) {
      if (!e.target.userInfo) {
        this.navigateBack()
        return false
      }
      login(e.target)
    }
  }
}
</script>
