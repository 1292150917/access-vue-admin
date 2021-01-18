/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-08 09:23:11
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-09 17:21:34
 */
export default {
    data() {
        return {
            rowtype: ["any", "number", "string", "object"],
            formzdgloptions: [
                {
                    name: "性别",
                    children: [
                        {
                            name: "男",
                            key: "1",
                        },
                        {
                            name: "女",
                            key: "2",
                        },
                        {
                            name: "位置",
                            key: "0",
                        },
                    ],
                },
                {
                    name: "是/否",
                    children: [
                        {
                            name: "是",
                            key: "1",
                        },
                        {
                            name: "否",
                            key: "2",
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        // 通用字段配置
        jsonkc(e) {
            return {
                img: {
                    name: "图片",
                    tag: {
                        __name__: "上传",
                        __type__: 'string'
                    }
                },
                id: {
                    name: "id",
                    tag: {
                        __name__: "回显框",
                        __type__: 'string'
                    }
                },
                userid: {
                    name: "用户id",
                    tag: {
                        __name__: "回显框",
                        __type__: 'string'
                    }
                },
                name: {
                    name: "名称",
                    tag: {
                        __name__: "单行文本",
                        __type__: 'string'
                    }
                },
                mobile: {
                    name: "手机号",
                    tag: {
                        __name__: "数字框",
                        __type__: 'string'
                    }
                },
                password: {
                    name: "密码",
                    tag: {
                        __name__: "密码",
                        __type__: 'string'
                    }
                },
                content: {
                    name: "内容",
                    tag: {
                        __name__: "多行文本",
                        __type__: 'string'
                    }
                },
                create_time: {
                    name: "开始时间",
                    tag: {
                        __name__: "时间选择",
                        __type__: 'string'
                    }
                },
                update_time: {
                    name: "更新时间",
                    tag: {
                        __name__: "时间选择",
                        __type__: 'string'
                    }
                },
            }[e];
        },
    }
}