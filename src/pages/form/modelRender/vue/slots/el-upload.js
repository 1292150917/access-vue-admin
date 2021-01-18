/*
 * @Author: your name
 * @Date: 2020-11-11 21:09:15
 * @LastEditTime: 2020-11-15 18:19:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\src\daveView\components\render\slots\el-select.js
 */
var key = {
    'text': function (h, conf, _, is) {
        if (is) {

            return `<el-button size="small" type="primary">${conf.__config__.buttonText}</el-button>`
        }
        return <el-button size="small" type="primary">{conf.__config__.buttonText}</el-button>
    },
    'picture': function (h, conf, _, is) {
        if (is) {

            return `<el-button size="small" type="primary">${conf.__config__.buttonText}</el-button>`
        }
        return <el-button size="small" type="primary">{conf.__config__.buttonText}</el-button>
    },
    'picture-card': function (h, conf, _, is) {
        conf
        if (is) {
            return `<i class="el-icon-plus"></i>`
        }
        return <i class="el-icon-plus"></i>
    },
}
export default {
    "list-type"(h, conf, _, is) {
        return key[conf['list-type']](h, conf, _, is)
    }
}