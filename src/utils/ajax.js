import axios from "axios";
import {baseUrl} from "./config.js"
import {
  Message
} from "element-ui";
import router from '../router'
let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
let isLogin = false;

//请求拦截器
axios.interceptors.request.use(
  config => {
    config.cancelToken = source.token; // 全局添加cancelToken

    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
      promiseArr[config.url]("操作取消");
      promiseArr[config.url] = cancel;
    } else {
      promiseArr[config.url] = cancel;
    }

    // 拼接域名
    config.url = baseUrl + config.url

    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = localStorage.getItem('token')
    let worktab = JSON.parse(localStorage.getItem('worktab'))

    if (token) {
      config.headers.Authorization = 'Bearer ' + token
      
      // 传递路由名称，用于获取权限
      let {current} = worktab.worktab
      let {status} = current.params
      let route = ''

      if(status) {
        route = current.name + '@'+ status
      }else {
        route = current.name
      }
      
      config.headers.route = route
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    let {
      code,
      msg
    } = response.data;

    // token失效
    if (code === 101) {
      // source.cancel(); // 取消其他正在进行的请求
      isLogin = false;
      localStorage.removeItem('token')
      router.replace('/login')

      return response
    }else {
      isLogin = true
    }

    // 如果请求出现错误，则抛出错误提示
    if (code !== 1) {
      Message.error(msg)
    }

    if (response) {
      return response;
    } else {
      //业务响应返回码处理
      if (response.data.retCode !== "0") {
        Message.error(response.data.retInfo);
        return Promise.reject(response.data.retData);
      } else {
        return response;
      }
    }
  },
  err => {
    if(!isLogin) {
      router.replace('/login')
      return
    }
    
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          err.message = "未授权，请重新登录！";
          break;
        case 403:
          err.message = "拒绝访问";
          break;
        case 404:
          err.message = "请求错误,未找到该资源！";
          break;
        case 405:
          err.message = "请求方法未允许";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        case 501:
          err.message = "网络未实现";
          break;
        case 502:
          err.message = "网络错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网络超时";
          break;
        case 505:
          err.message = "http版本不支持该请求";
          break;
        default:
          err.message = `连接错误${err.response.status}`;
      }
    } else {
      err.message = "连接到服务器失败";
    }

    if (err && err.response) { 
      Message.error(err.message);
    }
    
    return Promise.reject(err);
  }
);

// axios.defaults.baseURL = '/api'
axios.defaults.timeout = 30000;

//get请求方式
function get(config) {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url,
      method: "get",
      params: config.data
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

//post请求方式
function post(config) {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url,
      method: "post",
      data: config.data
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

function downloadPost(config) {
  return new Promise((resolve, reject) => {
    axios({
        url: config.url,
        method: "post",
        data: config.data,
        responseType: "blob"
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//put请求方式
function put(config) {
  return new Promise((resolve, reject) => {
    axios({
        url: config.url,
        method: "put",
        data: config.data
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//deleteh请求方式
function deleted(config) {
  return new Promise((resolve, reject) => {
    axios({
        url: config.url,
        method: "delete",
        params: config.data
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default {
  get,
  post,
  downloadPost,
  put,
  deleted
};
