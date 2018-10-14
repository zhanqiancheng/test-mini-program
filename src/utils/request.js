import wx from 'wx'
import Fly from 'flyio'

const fly = new Fly()

fly.interceptors.request.use((request) => {
  wx.showNavigationBarLoading()
  request.headers['session-token'] = wx.getStorageSync('skey')
  return request
})

fly.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve()
  }
)
/**
 * 消息过滤
 */
const msgFiltering = (datas) => {
  let errors = datas.errors
  let messages = []
  // errors有返回对应信息
  if (typeof errors === 'object' && !Array.isArray(errors) && errors !== null) {
    for (let name in errors) {
      messages.push(errors[name])
    }
    return messages
  } else {
    return datas.msg
  }
}

/**
 * 异步请求方法封装
 */
const request = ({ type, params, url, showError }) => {
  return new Promise((resolve, reject) => {
    type = type || 'get'
    params = params || null
    showError = typeof showError !== 'undefined' ? showError : true
    fly[type](url, params).then((response) => {
      if (typeof response === 'string') {
        response = JSON.parse(response)
      }

      if (response.status_code && response.status_code !== 200) {
        let msg = msgFiltering(response)
        msg = Array.isArray(msg) ? msg.join('，') : msg
        if (showError) {
          wx.showToast({
            title: msg || '请求错误',
            icon: 'none',
            duration: 2000
          })
        }
        return reject(response, msg)
      }
      return resolve(response)
    }).catch((e) => {
      let message = e && e.message ? url + '：' + e.message : '请求错误'
      console.log(message)
      return reject()
    })
  })
}

export default request
