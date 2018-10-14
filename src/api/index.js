import request from '@/utils/request'

const isDev = process.env.NODE_ENV === 'development'
const baseUrlApi = isDev
  ? 'https://test.xxx.com/'
  : 'https://xxx.com/'

const url = {
  user: `${baseUrlApi}user`,
  login: `${baseUrlApi}session`
}

const api = {
  login: (params) => request({
    type: 'get',
    url: url.login,
    params
  }),

  getUser: () => request({
    type: 'get',
    url: url.user
  })
}

export default api
