import axios from 'axios'
// import {mui} from 'mui'
// import router from '../router/index'
// import store from '../store/index'
import Qs from 'qs'

const errorMessage = '加载失败, 请稍后再试'
// 成功状态码
const SUCCESS_CODE = 0
// 认证失败
const AUTH_ERROR_CODE = 401
// 应用未安装
const APP_NOT_INSTALL_CODE = 801

// axios.defaults.baseURL = 'http://119.8.117.37:5920'
axios.defaults.baseURL = 'http://api.inferer.xyz'
axios.defaults.timeout = 10000
axios.defaults.responseType = 'json'
axios.interceptors.request.use(config => {
  // config.headers['Auth-Token'] = store.getters.user.token
  return config
}, error => {
//   Message.error({
//     message: errorMessage
//   })

  // mui.alert("6666！", '温馨提示', '确定', function() {
  //   plus.webview.currentWebview().close();
  // }, 'div');

// mui.alert("6666！", '温馨提示', '确定', function() {
// 	mui.back();
// }, 'div');

  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  return data
}, error => {
  return Promise.reject(error)
})

function handle (promise, next) {
  promise.then((res) => successCallback(res, next))
    .catch((error) => failureCallback(error, next))
}

function checkResponseCode (data, next) {
  // console.log("checkResponseCode data.code " + data.code)
  switch (data.code) {
    // 应用未安装
    case APP_NOT_INSTALL_CODE:
    //   router.push('/install')
      return false
    // 认证失败
    case AUTH_ERROR_CODE:
    //   router.push('/user/login')
      return false
  }
  if (data.code !== SUCCESS_CODE) {
    console.log("checkResponseCode callback now")
    next(data.data, data.code, data.message)
    return false
  }

  return true
}

function successCallback (res, next) {
  if (!checkResponseCode(res.data, next)) {
    return
  }
  if (!next) {
    return
  }
  next(res.data.data, res.data.code, res.data.message)
}

function failureCallback (error, next) {
  console.log("failureCallback error " + error)
  next(error, -1, "接口调用失败")
}

export default {
  get (uri, params, next) {
    console.log("get = " + uri);
    const promise = axios.get(uri, {params})
    handle(promise, next)
  },

  batchGet (uriGroup, next) {
    const requests = []
    for (let item of uriGroup) {
      let params = {}
      if (item.params !== undefined) {
        params = item.params
      }
      requests.push(axios.get(item.uri, {params}))
    }

    console.log("batchGet start");

    axios.all(requests).then(axios.spread(function (...res) {
      // console.log("batchGet start 1 res = " + res);
      const result = []
      for (let item of res) {
        // console.log("batchGet start 2 item = " + item);
        if (!checkResponseCode(item.data, next)) {
          // console.log("batchGet start 3 item = " + item);
          return
        }
        // console.log("batchGet item.data.data = " + item.data.data);
        result.push(item.data.data)
      }

      // console.log("batchGet result = " + JSON.stringify(result));

      next(...result)
    })).catch((error) => failureCallback(error, next))
  },

  post (uri, data, next) {
    const promise = axios.post(uri, Qs.stringify(data), {
      headers: {
        post: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    })
    handle(promise, next)
  }
}