/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-08 11:16:09
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-18 10:04:03
 */
import { renderapply } from '../../utils/index'
var dataList, listQuery, addQuery, queryList, methods, created, RandomPage
function install() {
  RandomPage = 'queryPage' + Math.floor(Math.random() * 100)
  dataList = []
  listQuery = []
  addQuery = []
  queryList = []
  methods = ''
  created = ''
  return true
}
function renderFormItem(s, type) {
  var { tag } = s.__tag__.__config__
  var attr = renderapply(s.__tag__)
  if (type === 'query') {
    if (tag !== 'el-select') {
      return (`<el-input v-model="form.${s.exitKey || s.key}" placeholder="请输入" :clearable="true"></el-input>`)
    }
  }
  return (`<${tag} v-model="form.${s.exitKey || s.key}" ${attr}>${slotsFun(s)}</${tag}>`)
}
function slotsFun(s) {
  var v = ''
  try {
    var requireEl = require(`./slots/${s.__tag__.__config__.tag}`)
    if (s && s.__config__ && (s.__config__.activeNames === 'table') && s.__config__.children) {
      v += requireEl.default['children'] ? requireEl.default['children'](s.__config__.children) : ''
    } else if (s && s.__config__ && (s.__config__.activeNames === 'ajax')) {
      v += requireEl.default['ajax'] ? requireEl.default['ajax'](s) : ''
    }
  } catch (error) {
    error
  }
  return v
}
function dialogJS(props, s, type) {
  var v = {
    "data": `
       form: {},`,
    "methods": `${props.dow === 'spa' ? '' : `
      dialogCanel(){
        this.dialogVisible = false
        this.getList()
      },`}
      onSubmit() {
        var url = this.form.${props.kpi} ? '${props.update}' : '${props.add}';
        var method = this.form.${props.kpi} ? '${props.updateUrlMethod}' : '${props.addUrlMethod}';
        ${props.dow === 'spa' ? 'this.request' : 'this.$parent.request'}({
          url,
          method,
          data: this.form,
        }).then(() => {
          this.dialogVisible = false;
          this.getList()
          ${type === 'componentsJs' ? 'this.$emit("cancel",true)' : ''}
        });
      },
    `
  }[s]
  return v
}
// 单页面js
function singlePage(props) {
  var v = `${props.dow === 'spa' ? '' : `import crudDialog from './dialog'`}
 export default {
   data() {
     return {
       formInline: {},
       dialogVisible: false,
       dlalogTitle:"",${props.dow === 'spa' ? '' : `
       message:{},`}
       radioIndex:'',${dialogJS(props, 'data')}
       tableData: [],
       ${dataList.join(',\n')}
     };
   },
   created() {
     this.getList();${created}
   },
   mounted() {
   },
   components:{${props.dow === 'spa' ? '' : `crudDialog,`}
   },
   watch:{
     pageDate:{
       deep:true,
       handler(){
         this.getList()
       }
     }
   },
   methods: {${methods}
     /** 删除按钮操作 */
     handleDelete() {
       var item = this.tableData[this.radioIndex];
       this.$confirm("是否确认删除数据项?", "警告", {
         confirmButtonText: "确定",
         cancelButtonText: "取消",
         type: "warning",
       })
         .then(() => {
           this.request({
             url: "${props.delete}",
             method: "${props.deleteUrlMethod}",
             data: {
               ${props.kpi}:item.${props.kpi}
             },
           }).then(() => {
             this.dialogVisible = false;
             this.getList();
           });
         })
         .then(() => {
         });
     },
     handleRowClick(row){
       this.radioIndex = row.$index
     },
     tableRowClassName ({row, rowIndex}) {
        row.$index = rowIndex;
     },
     request({ url, method, data }) {
       return new Promise((resolve, reject) => {
         this.$api({
           url,
           method,
           data,
         })
           .then((res) => {
             resolve(res.data);
           })
           .then((res) => {
             reject(res);
           });
       });
     },${props.page ? `
     handleSizeChange(val){
       this.pageDate.${props.page.pageSize} = val;
     },
     handleCurrentChange(val){
       this.pageDate.${props.page.page} = val;
     },` : ''}
     /** 查询操作 */
     inquireQuery(){${props.page ? `
       this.pageDate.${props.page.page} = 1;` : ''}
       this.queryList()
     },
     /** table的修改 */
     updateTable() {
       var item = this.tableData[this.radioIndex];
       this.dlalogTitle = "修改";
       ${props.dow === 'spa' ? `this.form = item;` : `this.message = item;`}
       this.dialogVisible = true;
     },
     /** 新增 */
     establish() {
       this.dlalogTitle = "新增";
       this.form = {};
       this.dialogVisible = true;
     },
     queryList() {
       this.getList();
     },
     getList() {
       this.request({
         url: "${props.queryList}",
         method: "${props.queryListUrlMethod}",
         data: {
           ...this.formInline,${props.page ? `
           ...this.pageDate` : ''}
         },
       }).then((res) => {
         this.dialogVisible = false;
         this.tableData = res.${props.data};
       });
     },${dialogJS(props, 'methods')}
   }
   // end
 };`
  return v
}
install.prototype.initRender = function (props) {
  props.tableData.map(_s => {
    if (_s.__config__ && _s.__config__.children) {
      var _data = []
      _s.__config__.children.map(_sv => {
        _data.push(`        { value:"${_sv.name}" , label:"${_sv.key}"}`)
      })
      dataList.push(`${_s.key}GetList:[\n${_data.join(',\n')}\n      ]`)
    } else if (_s.__config__ && _s.__config__.queryAjax) {
      dataList.push(`${_s.key}GetList:[]`)
      created += `this.${_s.key}GetList();`
      methods += `
      ${_s.key}GetList() {
        this.request({
          url: "${_s.__config__.queryAjax.url}",
          method: "${_s.__config__.queryAjax.method}",
          data: ${_s.__config__.queryAjax.dataMr ? _s.__config__.queryAjax.dataMr : "{}"},
        }).then((res) => {
          this.${_s.key}GetList = res.${_s.__config__.queryAjax.dataKey};
        });
      },`
    }
    if (_s.queryList) {
      listQuery.push(_s)
    }
    if (_s.add) {
      addQuery.push(_s)
    }
    if (_s.query) {
      queryList.push(_s)
    }
  })
  // 添加分页的数据
  if (props.page) {
    var { page, pageSize, total } = props.page
    dataList.push(`pageDate:{
        ${page}:1,
        ${pageSize}:10,
        ${total}:0
      }`)
  }
  console.log(props, )
  return `
<template>
  <div class="${RandomPage}">${queryList.length !== 0 && props.queryType ?
      (`
      <!-- 搜索条件 -->
      <el-form :inline="true" :model="formInline" class="${RandomPage}-form-inline">
      ${queryList.map(s => {
        return `
        <el-form-item label="${s.msg || s.key}">
          ${renderFormItem(s, 'query')}
        </el-form-item>`
      }).join('')}
        <el-form-item>
          <el-button type="primary" size="small" @click="inquireQuery"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
      `) :
      ''
    }
    ${props.addType ? '<el-button class="addbut" type="primary" icon="el-icon-plus" @click="establish" size="small" >新增</el-button>' : ''}
    ${props.updateType ? '<el-button class="addbut" type="warning" icon="el-icon-edit" @click="updateTable" size="small" >修改</el-button>' : ''}
    ${props.deleteType ? '<el-button class="addbut" icon="el-icon-delete" @click="handleDelete" size="small" >删除</el-button>' : ''}
    <!-- table列表 -->
    <el-table @row-click="handleRowClick" :row-class-name="tableRowClassName" :data="tableData" border style="width: 100%">
    <el-table-column label="单选"  width="50px">
      <template slot-scope="scope">
         <el-radio v-model="radioIndex" :label="scope.$index">&nbsp;</el-radio>
      </template>
    </el-table-column>${listQuery.map(s => {
      return (`
        <el-table-column prop="${s.key}" label="${s.msg || s.key}"> </el-table-column>`)
    }).join('')}
    </el-table>${props.page ? `
    <div class="pagination">
      <el-pagination
        :page-sizes="[10, 30, 50, 100 , 300 , 500 , 1000]"
        :page-size="pageDate.${props.page.pageSize}"
        :current-page="pageDate.${props.page.page}"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageDate.${props.page.total}"
      >
      </el-pagination>
    </div>` : ''}
    
    <!-- 新增/修改弹框 -->
    <el-dialog :title="dlalogTitle" append-to-body :visible.sync="dialogVisible" width="800px">
    ${props.dow === 'spa' ? this.dialog(props) : '<div is="crud-dialog" @cancel="dialogCanel" :message="message"></div>'
    } </el-dialog>
  </div>
</template>
<script>
${singlePage(props)}
</script>
<style>
.${RandomPage} .pagination {
  text-align: center;
  margin-top: 10px;
}
.${RandomPage} .addbut {
  margin-top: 20px;
  margin-bottom: 20px;
}
.${RandomPage}-form-inline .el-form-item {
  margin-right: 30px;
}
</style>
    `
}
// 页面组件化子弹框
install.prototype.dialog = function (props) {
  var v = `
  <template>
      <div>
        <el-form ref="form" :model="form" label-width="80px">${addQuery.map(s => {
    return `<el-form-item label="${s.msg || s.key}">
              ${renderFormItem(s, 'add')}
            </el-form-item>
            `
  }).join('')}
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="${props.dow === 'spa' ? 'dialogVisible = false' : "$emit('cancel', false)"}">取消</el-button>
            </el-form-item>
        </el-form>
      </div>
  </template>`
  return v
}
// 页面组件化js
install.prototype.dialogJs = function (props) {
  var v = `
<script>
  export default {
    data(){
      return{
        form:{}
      }
    },
    props:['message'],
    watch:{
      message:{
        handler(){
          this.form = this.message
        }
      }
    },
    methods:{${dialogJS(props, 'methods', 'componentsJs')}
    }
  }
</script>`
  return v
}
export default install