
// 全局配置

// 左面板
const list = [
    {
        title: "输入型组件",
        config: [{
            // 组件的自定义配置
            __config__: {
                label: '回显框',
                labelWidth: '100px',
                showLabel: true,
                changeTag: true,
                tag: 'el-input',
                tagIcon: 'input',
                defaultValue: undefined,
                required: true,
                layout: 'colFormItem',
                span: 24,
                document: 'https://element.eleme.cn/#/zh-CN/component/input',
                // 正则校验规则
                regList: []
            },
            // 组件的插槽属性
            __slot__: {
                prepend: '',
                append: ''
            },
            // 其余的为可直接写在组件标签上的属性
            ':disabled': true
        },
        {
            // 组件的自定义配置
            __config__: {
                label: '单行文本',
                labelWidth: '100px',
                showLabel: true,
                changeTag: true,
                tag: 'el-input',
                tagIcon: 'input',
                defaultValue: undefined,
                required: true,
                layout: 'colFormItem',
                span: 24,
                document: 'https://element.eleme.cn/#/zh-CN/component/input',
                // 正则校验规则
                regList: []
            },
            // 组件的插槽属性
            __slot__: {
                prepend: '',
                append: ''
            },
            // 其余的为可直接写在组件标签上的属性
            placeholder: '请输入',

            clearable: true,




        }, {
            // 组件的自定义配置
            __config__: {
                label: '数字框',
                labelWidth: '100px',
                showLabel: true,
                changeTag: true,
                tag: 'el-input',
                tagIcon: 'input',
                defaultValue: undefined,
                required: true,
                layout: 'colFormItem',
                type: "number",
                span: 24,
                document: 'https://element.eleme.cn/#/zh-CN/component/input',
                // 正则校验规则
                regList: []
            },
            // 组件的插槽属性
            __slot__: {
                prepend: '',
                append: ''
            },
            type: "number",
            // 其余的为可直接写在组件标签上的属性
            placeholder: '请输入',

            clearable: true,



        },
        {
            __config__: {
                label: '多行文本',
                labelWidth: '100px',
                showLabel: true,
                tag: 'el-input',
                tagIcon: 'textarea',
                defaultValue: undefined,
                required: true,
                layout: 'colFormItem',
                span: 24,
                regList: [],
                changeTag: true,
                document: 'https://element.eleme.cn/#/zh-CN/component/input'
            },
            type: 'textarea',
            placeholder: '请输入',
            autosize: {
                minRows: 4,
                maxRows: 4
            },
        },
        {
            __config__: {
                label: '密码',
                showLabel: true,
                labelWidth: '100px',
                changeTag: true,
                tag: 'el-input',
                defaultValue: undefined,
                layout: 'colFormItem',
                span: 24,
                required: true,
                regList: [],
                document: 'https://element.eleme.cn/#/zh-CN/component/input'
            },
            __slot__: {
                prepend: '',
                append: ''
            },
            placeholder: '请输入',
            ':show-password': true,
            tagIcon: 'password',
            clearable: true,
        },
        {
            __config__: {
                label: '计数器',
                showLabel: true,
                changeTag: true,
                labelWidth: '100px',
                tag: 'el-input-number',
                tagIcon: 'number',
                defaultValue: undefined,
                span: 24,
                layout: 'colFormItem',
                required: true,
                regList: [],
                document: 'https://element.eleme.cn/#/zh-CN/component/input-number'
            },
            ":min": 0,
            ":max": 99,
            ":step": 1,
            ':step-strictly': false,
            'controls-position': '',
        },
            // {
            //     __config__: {
            //         label: '编辑器',
            //         showLabel: true,
            //         changeTag: true,
            //         labelWidth: '100px',
            //         tag: 'tinymce',
            //         tagIcon: 'rich-text',
            //         defaultValue: null,
            //         span: 24,
            //         layout: 'colFormItem',
            //         required: true,
            //         regList: [],
            //         document: 'http://tinymce.ax-z.cn'
            //     },
            //     placeholder: '请输入',
            //     height: 300, // 编辑器高度
            //     branding: false // 隐藏右下角品牌烙印
            // }
        ]
    },
    {
        title: "选择型组件",
        config: [
            {
                __config__: {
                    label: '下拉选择',
                    showLabel: true,
                    labelWidth: '100px',
                    tag: 'el-select',
                    tagIcon: 'select',
                    layout: 'colFormItem',
                    span: 24,
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/select'
                },
                __slot__: {
                    options: [{
                        label: '选项一',
                        value: 1
                    }, {
                        label: '选项二',
                        value: 2
                    }]
                },
                placeholder: '请选择',

                clearable: true,

                filterable: false,
                multiple: false
            },
            // {
            //     __config__: {
            //         label: '级联选择',
            //         url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList',
            //         method: 'get',
            //         dataPath: 'list',
            //         dataConsumer: 'options',
            //         showLabel: true,
            //         labelWidth: '100px',
            //         tag: 'el-cascader',
            //         tagIcon: 'cascader',
            //         layout: 'colFormItem',
            //         defaultValue: [],
            //         dataType: 'dynamic',
            //         span: 24,
            //         required: true,
            //         regList: [],
            //         changeTag: true,
            //         document: 'https://element.eleme.cn/#/zh-CN/component/cascader'
            //     },
            //     options: [{
            //         id: 1,
            //         value: 1,
            //         label: '选项1',
            //         children: [{
            //             id: 2,
            //             value: 2,
            //             label: '选项1-1'
            //         }]
            //     }],
            //     placeholder: '请选择',

            //     props: {
            //         props: {
            //             multiple: false,
            //             label: 'label',
            //             value: 'value',
            //             children: 'children'
            //         }
            //     },
            //     clearable: true,
            //     filterable: false,
            //     separator: '/'
            // },
            {
                __config__: {
                    label: '单选框组',
                    labelWidth: '100px',
                    showLabel: true,
                    tag: 'el-radio-group',
                    tagIcon: 'radio',
                    changeTag: true,
                    defaultValue: undefined,
                    layout: 'colFormItem',
                    span: 24,
                    optionType: 'default',
                    regList: [],
                    required: true,
                    border: false,
                    document: 'https://element.eleme.cn/#/zh-CN/component/radio'
                },
                __slot__: {
                    options: [{
                        label: '选项一',
                        value: 1
                    }, {
                        label: '选项二',
                        value: 2
                    }]
                },
                value: '',
                size: 'medium',

            },
            {
                __config__: {
                    label: '多选框组',
                    tag: 'el-checkbox-group',
                    tagIcon: 'checkbox',
                    defaultValue: [],
                    span: 24,
                    showLabel: true,
                    labelWidth: '100px',
                    layout: 'colFormItem',
                    optionType: 'default',
                    required: true,
                    regList: [],
                    changeTag: true,
                    border: false,
                    document: 'https://element.eleme.cn/#/zh-CN/component/checkbox'
                },
                __slot__: {
                    options: [{
                        label: '选项一',
                        value: 1
                    }, {
                        label: '选项二',
                        value: 2
                    }]
                },
                size: 'medium',
                value: [],
                // min: null,
                // max: null,

            },
            {
                __config__: {
                    label: '开关',
                    tag: 'el-switch',
                    tagIcon: 'switch',
                    defaultValue: false,
                    span: 24,
                    showLabel: true,
                    labelWidth: '100px',
                    layout: 'colFormItem',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/switch'
                },

                'active-text': '',
                'inactive-text': '',
                'active-color': null,
                'inactive-color': null,
                'active-value': true,
                'inactive-value': false
            },
            {
                __config__: {
                    label: '滑块',
                    tag: 'el-slider',
                    tagIcon: 'slider',
                    defaultValue: null,
                    span: 24,
                    showLabel: true,
                    layout: 'colFormItem',
                    labelWidth: '100px',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/slider'
                },
                ':min': 0,
                ':max': 100,
                ':show-stops': false,
            },
            {
                __config__: {
                    label: '时间选择',
                    tag: 'el-time-picker',
                    tagIcon: 'time',
                    defaultValue: null,
                    span: 24,
                    showLabel: true,
                    layout: 'colFormItem',
                    labelWidth: '100px',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/time-picker'
                },
                placeholder: '请选择',
                clearable: true,
                format: 'HH:mm:ss',
                'value-format': 'HH:mm:ss'
            },
            {
                __config__: {
                    label: '时间范围',
                    tag: 'el-time-picker',
                    tagIcon: 'time-range',
                    span: 24,
                    showLabel: true,
                    labelWidth: '100px',
                    layout: 'colFormItem',
                    defaultValue: null,
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/time-picker'
                },
                clearable: true,
                ':is-range': true,
                'range-separator': '至',
                'start-placeholder': '开始时间',
                'end-placeholder': '结束时间',
                format: 'HH:mm:ss',
                'value-format': 'HH:mm:ss'
            },
            {
                __config__: {
                    label: '日期选择',
                    tag: 'el-date-picker',
                    tagIcon: 'date',
                    defaultValue: null,
                    showLabel: true,
                    labelWidth: '100px',
                    span: 24,
                    layout: 'colFormItem',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
                },
                placeholder: '请选择',
                type: 'date',
                clearable: true,
                format: 'yyyy-MM-dd',
                'value-format': 'yyyy-MM-dd',
                ":readonly": false
            },
            {
                __config__: {
                    label: '日期范围',
                    tag: 'el-date-picker',
                    tagIcon: 'date-range',
                    defaultValue: null,
                    span: 24,
                    showLabel: true,
                    labelWidth: '100px',
                    required: true,
                    layout: 'colFormItem',
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
                },
                type: 'daterange',
                'range-separator': '至',
                'start-placeholder': '开始日期',
                'end-placeholder': '结束日期',
                clearable: true,
                format: 'yyyy-MM-dd',
                'value-format': 'yyyy-MM-dd',
                ":readonly": false
            },
            {
                __config__: {
                    label: '日期时间选择',
                    tag: 'el-date-picker',
                    tagIcon: 'date',
                    defaultValue: null,
                    showLabel: true,
                    labelWidth: '100px',
                    span: 24,
                    layout: 'colFormItem',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
                },
                placeholder: '请选择',
                type: 'datetime',
                clearable: true,
            },
            {
                __config__: {
                    label: '日期时间范围',
                    tag: 'el-date-picker',
                    tagIcon: 'date-range',
                    defaultValue: null,
                    span: 24,
                    showLabel: true,
                    labelWidth: '100px',
                    required: true,
                    layout: 'colFormItem',
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
                },
                type: 'datetimerange',
                'range-separator': '至',
                'start-placeholder': '开始日期',
                'end-placeholder': '结束日期',
                clearable: true,
                ":readonly": false
            },
            {
                __config__: {
                    label: '评分',
                    tag: 'el-rate',
                    tagIcon: 'rate',
                    defaultValue: 0,
                    span: 24,
                    showLabel: true,
                    labelWidth: '100px',
                    layout: 'colFormItem',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/rate'
                },
                style: {},
                ":max": 5,
                ':allow-half': false,
                ':show-text': false,
                ':show-score': false,
            },
            {
                __config__: {
                    label: '颜色选择',
                    tag: 'el-color-picker',
                    tagIcon: 'color',
                    span: 24,
                    defaultValue: null,
                    showLabel: true,
                    labelWidth: '100px',
                    layout: 'colFormItem',
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: 'https://element.eleme.cn/#/zh-CN/component/color-picker'
                },
                'show-alpha': false,
                'color-format': '',
                size: 'medium'
            },
            {
                __config__: {
                    label: '上传',
                    tag: 'el-upload',
                    tagIcon: 'upload',
                    layout: 'colFormItem',
                    defaultValue: null,
                    showLabel: true,
                    labelWidth: '100px',
                    required: true,
                    span: 24,
                    showTip: false,
                    buttonText: '点击上传',
                    regList: [],
                    changeTag: true,
                    fileSize: 2,
                    size: null,
                    sizeUnit: 'MB',
                    document: 'https://element.eleme.cn/#/zh-CN/component/upload'
                },
                __slot__: {
                    'list-type': true
                },
                action: 'https://jsonplaceholder.typicode.com/posts/',
                accept: '',
                name: 'file',
                'auto-upload': true,
                'list-type': 'text',
                multiple: false
            }
        ]
    }
]
export default list