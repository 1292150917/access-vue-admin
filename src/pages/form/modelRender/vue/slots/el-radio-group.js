/*
 * @Author: your name
 * @Date: 2020-11-11 21:09:15
 * @LastEditTime: 2020-11-15 18:18:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\src\daveView\components\render\slots\el-select.js
 */
export default {
    options(h, conf,_,is) {
        const list = []
        conf.__slot__.options.forEach(item => {
            if(is){
                list.push(`<el-radio label=${item.value}>${item.label}</el-radio>`)
            }else{
                list.push(<el-radio label={item.value}>{item.label}</el-radio>)
            }
        })
        return list
    }
}