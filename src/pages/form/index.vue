<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-07 11:58:59
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-18 10:18:25
-->
<template>
  <div>
    <div class="curd">
      <el-divider content-position="center">数据来源 - JSON串</el-divider>
      <!-- <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="GET" value="GET"></el-option>
          <el-option label="POST" value="POST"></el-option>
          <el-option label="PUT" value="PUT"></el-option>
          <el-option label="PATCH" value="PATCH"></el-option>
          <el-option label="DELETE" value="DELETE"></el-option>
          <el-option label="COPY" value="COPY"></el-option>
          <el-option label="HEAD" value="HEAD"></el-option>
          <el-option label="OPTIONS" value="OPTIONS"></el-option>
          <el-option label="LINK" value="LINK"></el-option>
          <el-option label="UNLINK" value="UNLINK"></el-option>
          <el-option label="PURGE" value="PURGE"></el-option>
          <el-option label="LOCK" value="LOCK"></el-option>
          <el-option label="UNLOCK" value="UNLOCK"></el-option>
          <el-option label="PROPFIND" value="PROPFIND"></el-option>
          <el-option label="VIEW" value="VIEW"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-tabs style="margin-top: 10px" v-model="activeName">
        <el-tab-pane label="Header" name="Header"> </el-tab-pane>
        <el-tab-pane label="body" name="body"></el-tab-pane>
        <el-tab-pane label="query" name="query"></el-tab-pane>
        <el-tab-pane label="mockjs" name="mockjs"></el-tab-pane>
        <el-tab-pane label="按字段生成" name="mockjs1"></el-tab-pane>
      </el-tabs> -->
      <div v-if="activeName === 'mockjs'">
        <textarea v-model="mockjsValue" name=""></textarea>
      </div>
      <!-- <el-table border v-else class="tables" stripe :data="tables">
        <el-table-column prop="Key" label="Key">
          <template slot-scope="scope">
            <span style="margin-left: 10px"
              ><input
                @change="tablesFilter"
                type="text"
                placeholder="请输入key"
                v-model="scope.row.Key"
            /></span> </template
        ></el-table-column>
        <el-table-column prop="Value" label="Value">
          <template slot-scope="scope">
            <span style="margin-left: 10px"
              ><input
                type="text"
                placeholder="请输入value"
                v-model="scope.row.Value"
            /></span> </template
        ></el-table-column>
        <el-table-column prop="Description" label="Description">
          <template slot-scope="scope">
            <span style="margin-left: 10px"
              ><input type="text" v-model="scope.row.Description"
            /></span>
          </template> </el-table-column
      ></el-table> -->
      <div class="curd-code">
        <div>
          <el-input placeholder="code" v-model="code">
            <template slot="prepend">状态字段</template>
          </el-input>
        </div>
        <div>
          <el-input placeholder="data" v-model="data">
            <template slot="prepend">数据字段</template>
          </el-input>
        </div>
      </div>
      <el-button type="primary" @click="goOne" style="margin-top: 30px"
        >开始用例</el-button
      >
      <el-divider content-position="center">配置字段</el-divider>
      <div class="select-xz">
        生成所需功能：
        <el-checkbox v-model="adds">新增</el-checkbox>
        <el-checkbox v-model="updates">修改</el-checkbox>
        <el-checkbox v-model="deletes">删除</el-checkbox>
        <el-checkbox v-model="querys">查询</el-checkbox>
      </div>
      <div class="select-xz">
        生成是否分页：
        <el-radio v-model="isPage" label="0">不分页</el-radio>
        <el-radio v-model="isPage" label="1">分页</el-radio>
        <el-row v-if="isPage === '1'" style="margin-top: 10px" :gutter="20">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <el-input placeholder="data" v-model="page.page">
                <template slot="prepend">页码字段</template>
              </el-input>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <el-input placeholder="data" v-model="page.pageSize">
                <template slot="prepend">页码数量字段</template>
              </el-input>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <el-input placeholder="data" v-model="page.total">
                <template slot="prepend">分页总数字段</template>
              </el-input>
            </div></el-col
          >
        </el-row>
      </div>
      <!-- 主键选择 -->
      <div style="color: red; font-weight: 800; font-size: 14px">
        <el-popover
          placement="top-start"
          title="主键"
          width="320"
          trigger="hover"
          content="删除，修改所需要发送的唯一字段，例如删除我需要发送“ID”给后端，修改需要带“ID”告诉后端我修改的那一条，那么此处就应该选择“ID”"
        >
          <span slot="reference">主键选择：</span>
        </el-popover>
        <el-select filterable size="mini" v-model="kpi">
          <el-option
            :value="item.key"
            :label="item.key"
            v-for="(item, index) in tableData"
            :key="index"
          ></el-option>
        </el-select>
        <el-popover
          placement="top-start"
          title="出参配置"
          width="320"
          trigger="hover"
          content="出参配置，前端向后端发送的字符，选择生成统一是“_”作为中间件转换。例如 id_s  可被转换为idS"
        >
          <span slot="reference" style="margin-left: 10px">出参配置：</span>
        </el-popover>
        <el-select filterable size="mini" v-model="theGinseng">
          <el-option
            :value="item"
            :label="item"
            v-for="(item, index) in theGinsengValue"
            :key="index"
          ></el-option>
        </el-select>
      </div>
      <el-table class="tables" :data="tableData">
        <el-table-column width="80">
          <template slot="header">
            <span style="margin-right: 5px">全选</span
            ><el-checkbox
              @change="simulationCheckbox($event, 'all')"
            ></el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox
              v-model="scope.row.all"
              @change="simulationCheckbox($event, scope.$index)"
            ></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="key" label="字段key"></el-table-column>
        <el-table-column prop="msg" label="字段描述">
          <template slot-scope="scope">
            <input
              type="text"
              placeholder="请输入名称"
              v-model="scope.row.msg"
            />
          </template>
        </el-table-column>
        <el-table-column label="出参字段">
          <template slot-scope="scope">
            <input
              type="text"
              placeholder="请输入出参字段"
              v-model="scope.row.exitKey"
            />
          </template>
        </el-table-column>
        <el-table-column prop="key" label="字段类型">
          <template slot-scope="scope">
            <el-select v-model="scope.row.type" filterable placeholder="请选择">
              <el-option
                v-for="item in rowtype"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="key" label="字段组件">
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.model"
              filterable
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in rowmodel"
                :key="index"
                :label="item.__config__.label"
                :value="item.__config__.label"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="字典管理">
          <template slot-scope="scope">
            <el-button type="text" @click="showgroupClick(scope.row)"
              >关联接口或数据</el-button
            ></template
          >
        </el-table-column>
        <el-table-column prop="address" label="新增" width="75px" v-if="adds">
          <template slot="header">
            <span style="margin-right: 5px">新增</span
            ><el-checkbox
              @change="simulationCheckbox($event, 'add')"
            ></el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.add"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="address" width="75px" v-if="updates">
          <template slot="header">
            <span style="margin-right: 5px">修改</span
            ><el-checkbox
              @change="simulationCheckbox($event, 'update')"
            ></el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.update"></el-checkbox> </template
        ></el-table-column>
        <el-table-column prop="address" width="75px" v-if="deletes">
          <template slot="header">
            <span style="margin-right: 5px">删除</span
            ><el-checkbox
              @change="simulationCheckbox($event, 'delete')"
            ></el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.delete"></el-checkbox> </template
        ></el-table-column>
        <el-table-column prop="address" width="75px" v-if="querys">
          <template slot="header">
            <span style="margin-right: 5px">查询</span
            ><el-checkbox
              @change="simulationCheckbox($event, 'query')"
            ></el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.query"></el-checkbox> </template
        ></el-table-column>
        <el-table-column prop="address" width="75px" v-if="querys">
          <template slot="header">
            <span style="margin-right: 5px">必填</span
            ><el-checkbox
              @change="simulationCheckbox($event, 'query')"
            ></el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.query"></el-checkbox> </template
        ></el-table-column>
        <el-table-column prop="address">
          <template slot="header">
            <span style="margin-right: 5px">列表展示</span
            ><el-checkbox
              @change="simulationCheckbox($event, 'queryList')"
            ></el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.queryList"></el-checkbox> </template
        ></el-table-column>
      </el-table>
      <div class="port-code">
        <div>
          <el-input placeholder="/API/ADD" v-model="addUrl">
            <template slot="prepend">新增接口</template>
            <el-select
              v-model="addUrlMethod"
              filterable
              slot="append"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in methodList"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-input>
        </div>
        <div>
          <el-input placeholder="/API/delete" v-model="deleteUrl">
            <template slot="prepend">删除接口</template>
            <el-select
              v-model="deleteUrlMethod"
              filterable
              slot="append"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in methodList"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-input>
        </div>
        <div>
          <el-input placeholder="/API/update" v-model="updateUrl">
            <template slot="prepend">修改接口</template>
            <el-select
              v-model="updateUrlMethod"
              filterable
              slot="append"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in methodList"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-input>
        </div>
        <div>
          <el-input placeholder="/API/query" v-model="queryUrl">
            <template slot="prepend">查询接口</template>
            <el-select
              v-model="queryUrlMethod"
              filterable
              slot="append"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in methodList"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-input>
        </div>
        <div>
          <el-input placeholder="/API/queryList" v-model="queryListUrl">
            <template slot="prepend">查询列表</template>
            <el-select
              v-model="queryListUrlMethod"
              filterable
              slot="append"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in methodList"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-input>
        </div>
      </div>
      <el-button type="primary" @click="goTwo('')" style="margin-top: 30px"
        >生成代码</el-button
      >
      <el-button type="primary" @click="preview()" style="margin-top: 30px"
        >预览代码</el-button
      >
      <el-button type="primary" @click="dowClick('')" style="margin-top: 30px"
        >下载代码</el-button
      >
      <el-select style="margin-left: 10px" v-model="dow">
        <el-option value="spa" label="单页面"></el-option>
        <el-option value="viewModel" label="页面组件化"></el-option>
        <el-option value="api组件化" label="api组件化"></el-option>
        <el-option value="全部组件化" label="全部组件化"></el-option>
      </el-select>
      <el-divider content-position="center">代码预览</el-divider>
      <pre class="hljs vue"><code class="vue" v-html="html"></code></pre>
      <el-drawer :visible.sync="showgroup" direction="rtl">
        <el-tabs v-model="activeNames" class="curd-form-tabs">
          <el-tab-pane label="基础字典" name="table">
            <div>
              <div>
                默认字典：<el-select
                  v-model="formzdgl"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in formzdgloptions"
                    :key="index"
                    :label="item.name"
                    :value="item.children"
                  >
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-table class="tables" :data="drawerTable">
                  <el-table-column type="selection" width="55">
                  </el-table-column>
                  <el-table-column label="字段描述">
                    <template slot-scope="scope">
                      <input
                        @change="drawerTable.push({ key: '', name: '' })"
                        type="text"
                        placeholder="请输入名称"
                        v-model="scope.row.name"
                      />
                    </template>
                  </el-table-column>
                  <el-table-column label="字段id">
                    <template slot-scope="scope">
                      <input
                        type="text"
                        placeholder="发送的key"
                        v-model="scope.row.key"
                      />
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="接口数据" name="ajax">
            <div style="width: 92%">
              <el-input placeholder="/API/query" v-model="queryAjax.url">
                <template slot="prepend">接口地址</template>
                <el-select
                  v-model="queryAjax.method"
                  filterable
                  slot="append"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in methodList"
                    :key="index"
                    :label="item"
                    :value="item"
                  ></el-option>
                </el-select>
              </el-input>
              <el-row :gutter="20" style="margin-top: 10px">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="data" v-model="queryAjax.codeKey">
                      <template slot="prepend">状态字段</template>
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="data" v-model="queryAjax.dataKey">
                      <template slot="prepend">数据字段</template>
                    </el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20" class="rowtextarea" style="margin-top: 10px">
                <el-col :span="24">
                  <div class="grid-content bg-purple">
                    <el-input
                      placeholder="需要data默认的数据 JSON格式的"
                      type="textarea"
                      v-model="queryAjax.dataMr"
                    ></el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="margin-top: 10px">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="data" v-model="queryAjax.labelKay">
                      <template slot="prepend">标签字段</template>
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="data" v-model="queryAjax.valueKey">
                      <template slot="prepend">值的字段</template>
                    </el-input>
                  </div>
                </el-col>
              </el-row>
              <p class="ajaxal">
                假如后端的数据结构为如下数据： 那么配置应该为
                <br />
                状态字段：code <br />
                数据字段：data <br />
                标签字段：name <br />
                值的字段：id <br />
                <code>
                  <pre>
                    
      {
        code:200,
        data:[
          {
            id:"1",
            name:"小王",
            ......,
          },
          {
            id:"2",
            name:"小张""，
            ......,
          },
        ]
      }
                  </pre>
                </code>
                <br />
              </p>
            </div>
          </el-tab-pane>
        </el-tabs>
        <br />
        <el-button
          @click="drawerGo"
          type="primary"
          style="margin-top: 30px; margin-left: 30px"
          >确认使用</el-button
        >
      </el-drawer>
    </div>
    <!-- 预览代码 -->
    <el-dialog
      title="代码效果"
      class="dmxg"
      :visible.sync="dialogVisible"
      width="95%"
    >
      <div>
        <div class="proview">
          <div></div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import config from "./config";
import miminsConfg from "./mixins/config";
import elementJs from "./modelRender/vue/element";
import axios from "axios";
import Vue from "vue";
import JSZip from "jszip";
import { saveAs } from "file-saver";
export default {
  data() {
    return {
      activeNames: "table",
      input3: "",
      isPage: "0",
      page: {
        page: "page",
        pageSize: "pageSize",
        total: "total",
      },
      kpi: "",
      drawerTable: [{}],
      dow: "spa",
      dialogVisible: false,
      theGinseng: "",
      theGinsengValue: ["默认", "小驼峰", "大驼峰"],
      input1: "",
      methodList: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "COPY",
        "HEAD",
        "OPTIONS",
        "LINK",
        "UNLINK",
        "PURGE",
        "LOCK",
        "UNLOCK",
        "PROPFIND",
        "VIEW",
      ],
      formzdgl: [],
      adds: true,
      querys: true,
      html: "",
      showItem: {},
      updates: true,
      addUrl: "",
      queryAjax: {
        url: "",
        method: "POST",
        codeKey: "code",
        dataKey: "data",
        labelKay: "name",
        valueKey: "id",
      },
      updateUrl: "",
      queryUrl: "",
      queryListUrl: "",
      deleteUrl: "",
      addUrlMethod: "POST",
      ylhtml: "",
      queryListUrlMethod: "POST",
      updateUrlMethod: "POST",
      queryUrlMethod: "POST",
      deleteUrlMethod: "POST",
      rowmodel: [],
      deletes: true,
      showgroup: false,
      select: "",
      mockjsValue: `{"data":{"status":200,"data":[{"id":1,"name":"测试","content":"fwe","userid":"312","del_flag":"N","create_time":"2020-11-03 09:47:40","update_time":"2020-11-03 09:47:40","remark1":null,"remark2":null},{"id":2,"name":"我们一起","content":"哈哈","userid":"27692885","del_flag":"N","create_time":"2020-11-03 22:20:36","update_time":"2020-11-03 22:20:36","remark1":null,"remark2":null},{"id":3,"name":"我们一起w","content":"问问","userid":"27692885","del_flag":"N","create_time":"2020-11-03 22:22:06","update_time":"2020-11-03 22:22:06","remark1":null,"remark2":null},{"id":4,"name":"我们一起w","content":"www","userid":"27692885","del_flag":"N","create_time":"2020-11-03 22:22:56","update_time":"2020-11-03 22:22:56","remark1":null,"remark2":null},{"id":5,"name":null,"content":null,"userid":"27692885","del_flag":"N","create_time":"2020-11-03 22:23:14","update_time":"2020-11-03 22:23:14","remark1":null,"remark2":null},{"id":6,"name":"22222","content":null,"userid":"27692885","del_flag":"N","create_time":"2020-11-03 22:29:39","update_time":"2020-11-03 22:29:39","remark1":null,"remark2":null},{"id":7,"name":"二级密码忘了怎么办","content":"兑换不了矿机","userid":"76826855","del_flag":"N","create_time":"2020-11-18 17:20:53","update_time":"2020-11-18 17:20:53","remark1":null,"remark2":null},{"id":8,"name":"认证上传照片，没反应","content":"怎么办","userid":"11884934","del_flag":"N","create_time":"2020-12-06 20:21:13","update_time":"2020-12-06 20:21:13","remark1":null,"remark2":null},{"id":9,"name":"为什么认证不了","content":"认证不了，一直提交不了","userid":"64852234","del_flag":"N","create_time":"2020-12-07 11:04:36","update_time":"2020-12-07 11:04:36","remark1":null,"remark2":null}]}}`,
      code: "code",
      data: "data.data",
      activeName: "mockjs",
      HeaderValue: [{ Key: "", Value: "", Description: "" }],
      bodyValue: [{ Key: "", Value: "", Description: "" }],
      queryValue: [{ Key: "", Value: "", Description: "" }],
      tables: [],
      tableData: [],
    };
  },
  watch: {
    dialogVisible(is) {
      if (is) {
        this.$nextTick(() => {
          this.goTwo((res) => {
            var bodyEl = document.querySelector(".dmxg .el-dialog__body >div");
            bodyEl.innerHTML = '<div class="proview"></div>';
            var todoItem = Vue.extend(res);
            todoItem.prototype.$api = axios;
            new todoItem({ el: ".proview" });
          });
        });
      }
    },
    theGinseng(v) {
      switch (v) {
        case "小驼峰":
          this.tableData.map((s) => {
            s.exitKey = s.exitKey.replace(/_(\w)/g, function (c) {
              return c[1].toUpperCase();
            });
          });
          break;
        case "大驼峰":
          this.tableData.map((s) => {
            s.exitKey = s.exitKey.replace(/_(\w)/g, function (c) {
              var _v = c[1].toUpperCase();
              return _v;
            });
            var test = RegExp(s.exitKey[0]);
            s.exitKey = s.exitKey.replace(test, function (v) {
              return v.toUpperCase();
            });
          });
          break;
        case "默认":
          this.tableData.map((s) => {
            s.exitKey = s.key;
          });
          break;
        default:
          break;
      }
    },
    mockjsValue: {
      immediate: true,
      handler(e) {
        if (e) {
          try {
            var v = eval(`(${this.mockjsValue})`);
            this.mockjsValue = JSON.stringify(v, null, 4);
          } catch (error) {
            error;
          }
        }
        return;
      },
    },
    activeName(e) {
      if (e === "mockjs") {
        return false;
      }
      this.tables = this[`${e}Value`];
      this.tablesFilter();
    },
    formzdgl(e) {
      if (e) {
        this.drawerTable = JSON.parse(JSON.stringify(e));
        this.drawerTable.push({});
      }
    },
  },
  mixins: [miminsConfg],
  components: {},
  mounted() {
    var list = [];
    config.map((_s) => {
      list.push(..._s.config);
    });
    this.rowmodel = list;
  },
  methods: {
    checkAllChange(res) {
      this.tableData.map((s) => {
        s.all = res;
      });
    },
    async dowClick() {
      var zip = new JSZip();
      var db = new elementJs();
      var html = db.initRender(this.goDate());
      var s = await zip.generateAsync({ type: "blob" });
      if (this.dow !== "spa") {
        var dialog = db.dialog(this.goDate());
        var dialogJs = db.dialogJs(this.goDate());
        zip.file("index.vue", html);
        zip.file("dialog.vue", `${dialog}\n${dialogJs}`);
        saveAs(s, "component");
      } else {
        this.goTwo();
        var aTag = document.createElement("a");
        var blob = new Blob([this.ylhtml]);
        aTag.download = "index.vue";
        aTag.href = URL.createObjectURL(blob);
        aTag.click();
        URL.revokeObjectURL(blob);
      }
      // console.log(html);
      // this.goTwo();
      // var aTag = document.createElement("a");
      // var blob = new Blob([this.ylhtml]);
      // aTag.download = "a.vue";
      // aTag.href = URL.createObjectURL(blob);
      // aTag.click();
      // URL.revokeObjectURL(blob);
    },
    drawerGo() {
      var __config__ = {};
      if (this.activeNames !== "ajax") {
        var drawerTable = JSON.parse(
          JSON.stringify(this.drawerTable.filter((s) => s.name))
        );
        __config__ = {
          children: drawerTable,
          formzdgl: this.formzdgl,
          activeNames: this.activeNames,
        };
      } else {
        // 请求部分
        if (
          this.queryAjax.dataMr &&
          this.queryAjax.dataMr.indexOf("{") === -1
        ) {
          return this.$message("请输入正确的JSON");
        }
        __config__ = {
          queryAjax: this.queryAjax,
          formzdgl: this.formzdgl,
          activeNames: this.activeNames,
        };
      }
      this.showItem.__config__ = __config__;
      this.is_showgroup();
    },
    showgroupClick(item) {
      this.showItem = item;
      this.is_showgroup();
    },
    // 清空以及赋值默认值
    empty(e) {
      this.drawerTable = e ? e.children : [];
      this.formzdgl = e ? e.formzdgl : "";
      this.activeNames = e ? e.activeNames : "table";
    },
    is_showgroup() {
      this.showgroup = !this.showgroup;
      if (this.showgroup && this.showItem.__config__) {
        this.empty(this.showItem.__config__);
      } else {
        this.empty();
      }
    },
    simulationCheckbox(res, v) {
      var _l = ["add", "update", "query", "queryList", "delete"];
      if (v === "all") {
        this.tableData.map((s) => {
          s.all = res;
          _l.map((_v) => {
            s[_v] = s.all;
          });
        });
        return;
      } else if (typeof v === "number") {
        this.tableData[v].all = res;
        _l.map((_v) => {
          this.tableData[v][_v] = res;
        });
        return;
      }
      this.tableData.map((s) => {
        s[v] = res;
      });
    },
    render(e) {
      var jsone = JSON.parse(e);
      var elValue = jsone;
      try {
        this.data.split(".").map((_s) => {
          elValue = elValue[_s];
        });
        this.tableData = this.applyVnode(elValue[0] ? elValue[0] : elValue);
      } catch (error) {
        alert("数据格式不正确，请检查console");
        console.log(error);
      }
    },
    applyVnode(el) {
      var elValue = [];
      Object.keys(el).map((_s) => {
        elValue.push({
          key: _s,
          add: false,
          update: false,
          all: false,
          query: false,
          delete: false,
          exitKey: _s,
          queryList: false,
          type: this.jsonkc(_s) ? this.jsonkc(_s).tag.__type__ : "any",
          msg: this.jsonkc(_s) ? this.jsonkc(_s).name : "",
          model: this.jsonkc(_s) ? this.jsonkc(_s).tag.__name__ : "单行文本",
        });
      });
      return elValue;
    },
    goOne() {
      this.render(this.mockjsValue);
    },
    preview() {
      if (this.isRenderHtml()) {
        return;
      }
      this.dialogVisible = true;
    },
    isRenderHtml() {
      if (this.kpi === "") {
        this.$message({
          message: "请选择主键",
          type: "warning",
        });
        return true;
      }
      return false;
    },
    goDate() {
      this.tableData.map((s) => {
        var _v = this.rowmodel.filter((_s) => _s.__config__.label === s.model);
        s.__tag__ = _v[0];
      });
      var data = {
        add: this.addUrl,
        code: this.code,
        update: this.updateUrl,
        delete: this.deleteUrl,
        query: this.queryUrl,
        queryList: this.queryListUrl,
        data: this.data,
        addType: this.adds,
        updateType: this.updates,
        deleteType: this.deletes,
        queryType: this.querys,
        dow: this.dow,
        addUrlMethod: this.addUrlMethod,
        updateUrlMethod: this.updateUrlMethod,
        page: this.isPage === "1" ? this.page : false,
        queryUrlMethod: this.queryUrlMethod,
        deleteUrlMethod: this.deleteUrlMethod,
        kpi: this.kpi,
        queryListUrlMethod: this.queryListUrlMethod,
        tableData: this.tableData,
      };
      return data;
    },
    goTwo(callback) {
      if (this.isRenderHtml()) {
        return;
      }
      var db = new elementJs();
      var html = db.initRender(this.goDate());
      var scripts = "";
      var templates = "";
      this.ylhtml = html;
      // 获取script
      scripts = html.replace(/\n/g, "").match(/data\(\)(.+?)\/\/ end/g);
      scripts = scripts[0].replace(/\/\/ end/, "");
      templates = html
        .replace(/\n/g, "")
        .match(/<template>(.*)<\/template>/)[1];
      scripts = eval(`({${scripts}})`);
      html = html.replace(/</g, "&lt;");
      html = html.replace(/>/g, "&gt;");
      this.html = html;
      callback
        ? callback({
            template: templates,
            ...scripts,
          })
        : "";
      this.$nextTick(() => {
        var pres = document.querySelectorAll("pre>code");
        window.hljs.highlightBlock(pres[0]);
      });
    },

    tablesFilter() {
      if (this.tables[this.tables.length - 1].Key) {
        this.tables.push({ Key: "", Value: "", Description: "" });
      }
    },
  },
};
</script>
<style>
.curd .el-select .el-input {
  width: 130px;
}
.curd .input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
<style lang="scss" scopen>
.proview .el-pagination {
  text-align: center;
  margin-top: 10px;
}
.proview .addbut {
  margin-bottom: 20px;
}
.proview .el-form-item {
  margin-right: 30px;
}
.rowtextarea {
  textarea {
    height: 60px !important;
  }
}
.ajaxal {
  font-size: 12px;
  line-height: 21px;
  color: #9a9fda;
  margin-top: 10px;
  pre {
    background: #000;
    margin-top: 10px;
  }
}
.curd {
    background: #fff;
    padding: 26px;
  .hljs {
    font-size: 14px;
  }
  .curd-form-tabs {
    margin-left: 30px;
  }
  .port-code > div {
    margin-top: 20px;
  }
  .select-xz {
    font-size: 15px;
    margin-bottom: 20px;
  }
  .curd-code {
    width: 100%;
    input {
      width: 90%;
    }
    > div {
      width: 33.3%;
      display: inline-block;
      margin-top: 10px;
    }
  }
  textarea {
    width: 100%;
    height: 300px;
  }
  .tables input {
    border: 0;
    height: 35px;
    text-indent: 10px;
    width: 100%;
  }
}
</style>