## 目录 
```bash
+-- src
|   +-- api                  #api放在此目录
|   +-- components           #组件目录
|   +-- pages                #页面目录
|   |   +-- home             #首页
|   |   +-- category         #分类页
|   |   +-- integral         #积分商城
|   |   +-- shopping         #购物车页
|   |   +-- mine             #我的  
|   |   +-- ....
|   |   +-- page.js          #通用mixin
|   +-- store                #vuex
|   |   +-- modules          #各页面的store放在此目录
|   |   +-- actions.js
|   |   +-- getters.js
|   |   +-- index.js
|   |   +-- mutation-types.js
|   |   +-- mutations.js
|   +-- styles
|   +-- utils
|   |   +-- checkLogin.js     #登录工具
|   |   +-- index.js          #通用工具函数
|   |   +-- request.js        #基于fly.js封装的异步请求方法
|   |   +-- wx.js
|   +-- app.json              #小程序配置
|   +-- App.vue
|   +-- main.js
|   +-- pages.js              #各页面的配置，每个页面都需要在此配置
+-- static
|   +-- fonts                 #字体文件
|   +-- icons                 #用于tabBar的图标
|   +-- img
|   +-- libs                  #第三方原生组件
|   |   +-- vant              #vant weapp组件
```

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
