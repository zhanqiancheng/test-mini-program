import wx from './wx'
import store from '@/store'
import api from '@/api'

const fetchUser = () => api.getUser().then(({ data }) => {
  store.dispatch('setLoginState', true)
  store.dispatch('setUser', data.userInfo)
  return data
})

export async function login (params = {}) {
  const { encryptedData, iv } = params
  const code = await new Promise(resolve => {
    wx.login({
      success (res) { resolve(res.code) }
    })
  })

  try {
    const response = await api.login({
      code,
      encryptedData,
      iv
    })
    wx.setStorageSync('skey', response.data.sessionToken)
    return fetchUser()
  } catch (err) {
    wx.showToast({
      title: '登录失败，请重试',
      icon: 'none',
      duration: 2000
    })
  }
  return null
}

export async function checkLogin () {
  const hasSkey = wx.getStorageSync('skey')
  // 保证session不过期
  const checkSession = await new Promise(resolve => {
    wx.checkSession({
      success () { resolve(true) },
      fail () { resolve(false) }
    })
  })
  if (hasSkey && checkSession) {
    return fetchUser()
  } else {
    const userInfo = await new Promise(resolve => {
      wx.getUserInfo({
        fail () { resolve(null) },
        success: resolve
      })
    })
    if (userInfo) {
      return login(userInfo)
    } else {
      // wx.navigateTo({
      //   url: '/pages/authorization/index'
      // })
    }
  }
  return null
}
