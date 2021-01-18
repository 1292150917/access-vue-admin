/*
 * @Author: your name
 * @Date: 2020-11-11 20:41:27
 * @LastEditTime: 2020-12-14 14:59:41
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\src\utils\index.js
 */
// 去除私有属性
import { rule_private } from './rule'
export function privatelyOwnedWipe(props) {
    var key = {}
    Object.keys(props).map(s => {
        if (!(rule_private.test(s))) {
            key[s] = props[s]
        }
    })
    return key
}
// 深拷贝
export function deepClone(target) {
    // 定义一个变量
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = []; // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
            // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
            result = null;
            // 判断如果当前的值是一个RegExp对象的话，直接赋值    
        } else if (target.constructor === RegExp) {
            result = target;
        } else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {};
            for (let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target;
    }
    // 返回最终结果
    return result;
}
// render使用的字节操作
export function renderConfig(props) {
    var attrs = { ...privatelyOwnedWipe(props) };
    attrs.style ? attrs.style = renderString(attrs.style) : ''
    attrs[':autosize'] ? attrs[':autosize'] = renderStringObj(attrs.autosize) : ''
    delete attrs.autosize
    return attrs
}

// render出对象格式的数据

export function renderStringObj(params) {
    var style = [];
    if (!params) {
        return;
    }
    Object.keys(params).map((s) => {
        style.push(`${s}:${params[s]}`);
    });
    return `{${style.join(",")}}`;
}

// render的数组特殊处理
export function renderString(params) {
    var style = [];
    if (!params) {
        return;
    }
    Object.keys(params).map((s) => {
        style.push(`${s}:${params[s]}`);
    });
    return style.join(";");
}

// render的 = 特殊处理
export function renderStringEqual(params) {
    var style = [];
    if (!params) {
        return;
    }
    Object.keys(params).map((s) => {
        style.push(`${s}="${params[s]}"`);
    });
    return style.join(" ");
}


/**
 * @name: 
 * @test: test font
 * @msg: 去除一些空的数据
 * @param {*} key key值 
 * @param {*} value 进来的源数据
 * @return {*}
 */
export function renderToEmpty(key, value) {
    if (value === undefined || value === null) {
        return false
    }
    return true
}
// 拿到左边所有元素json
export function elList(el) {
    var list = []
    el.map(s => {
        list.push(...s.config)
    })
    return list
}

// 额外加：的
export function isColon(e) {
    var v = {
        clearable: true,
        multiple: true,
        'auto-upload': true
    }[e]
    return v ? ':' + e : e
}

// renderapply的数组特殊处理
export function renderapply(params) {
    // var raw = deepClone(params)
    params = renderConfig(params)
    var style = [];
    if (!params) {
        return;
    }
    Object.keys(params).map((s) => {
        style.push(`${isColon(s)}="${params[s]}"`);
        return
        // 判断原数据跟当前数据是否一值
        // var daveTo = elList(daveConfig).filter(_s => {
        //     if (_s.__config__ && _s.__config__.tag === raw.__config__.tag) {
        //         return _s
        //     }
        // })
        // // 判断数据不为空 并且数据经过对比 为修改过的
        // if (!daveTo[0] || (renderToEmpty(s, params[s]) && renderConfig(daveTo[0])[s] !== params[s])) {
        //     style.push(`${s}="${params[s]}"`);
        // }
    });
    return style.join(" ");
}