/*
 * @Author: your name
 * @Date: 2020-11-14 16:48:56
 * @LastEditTime: 2020-11-16 21:48:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\src\daveView\components\render\slots\el-checkbox-group.js
 */
export default {
    options(h, conf, _, is) {
        const list = []
        conf.__slot__.options.forEach(item => {
            if (conf.__config__.optionType === 'button') {
                if (is) {
                    list.push(`<el-checkbox-button label=${item.value}>${item.label}</el-checkbox-button>`)
                } else {
                    list.push(<el-checkbox-button label={item.value}>{item.label}</el-checkbox-button>)
                }
            } else {
                if(is){
                    list.push(`<el-checkbox label=${item.value} ${conf.border ? `border=${conf.border}` : ''}>${item.label}</el-checkbox>`)
                }else{
                    list.push(<el-checkbox label={item.value} border={conf.border}>{item.label}</el-checkbox>)
                }
            }
        })
        return list
    }
}