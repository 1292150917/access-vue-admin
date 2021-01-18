/*
 * @Author: your name
 * @Date: 2020-11-12 19:49:03
 * @LastEditTime: 2020-11-17 17:43:53
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\src\daveView\components\render\slots\el-input.js
 */
export default {
  default(h, conf, key, is) {
    if (is) {
      return `<span>${conf.butName}</span>`
    }
    return <span>{conf.butName}</span>
  }
}