/*
 * @Author: your name
 * @Date: 2020-11-12 19:49:03
 * @LastEditTime: 2020-11-14 11:04:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\src\daveView\components\render\slots\el-input.js
 */
export default {
  prepend(h, conf, key,is) {
    if (is) {
      return `<div slot="prepend">${conf.__slot__[key]}</div>`
    }
    return <div slot="prepend">{conf.__slot__[key]}</div>
  },
  append(h, conf, key, is) {
    if (is) {
      return `<div slot="append">${conf.__slot__[key]}</div>`
    }
    return <div slot="append">{conf.__slot__[key]}</div>
  }
}