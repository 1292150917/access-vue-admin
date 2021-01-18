/*
 * @Author: your name
 * @Date: 2020-11-11 21:09:15
 * @LastEditTime: 2020-12-11 15:12:53
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\src\daveView\components\render\slots\el-select.js
 */
export default {
    options(h, conf, _, is) {
        const list = []
        conf.__slot__.options.forEach(item => {
            if (is) {
                list.push(`<el-option label="${item.label}" value=${item.value} ${item.disabled ? ':disabled=true' : ''}></el-option>`)
            } else {
                list.push(<el-option label={item.label} value={item.value} disabled={item.disabled}></el-option>)
            }
        })
        return list
    },
    ajax(conf){
        return `\n             <el-option v-for="(item,index) in ${conf.key}GetList" :key="index" label="${conf.__config__.queryAjax.labelKay}" value="${conf.__config__.queryAjax.dataKey}"></el-option>`
    },
    children(conf){
        var list = []
        conf.forEach(item => {
            list.push(`\n                 <el-option label="${item.name}" value="${item.key}"></el-option>`)
        })
        return list.join('')
    }
}