module.exports = [
  {
    path: 'pages/home/index',
    config: {
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
      // 设置依赖第三方原生组件
      usingComponents: {
        'van-button': '/static/libs/vant/button/index',
        'van-notify': '/static/libs/vant/notify/index',
        'van-tabs': '/static/libs/vant/tabs/index',
        'van-tab': '/static/libs/vant/tab/index',
        'van-steps': '/static/libs/vant/steps/index'
      }
    }
  },
  {
    path: 'pages/category/index',
    config: {
      navigationBarTitleText: '分类'
    }
  },
  {
    path: 'pages/integral/index',
    config: {
      navigationBarTitleText: '积分商城'
    }
  },
  {
    path: 'pages/shopping/index',
    config: {
      navigationBarTitleText: '购物车'
    }
  },
  {
    path: 'pages/mine/index',
    config: {
      navigationBarTitleText: '我的'
    }
  }
]
