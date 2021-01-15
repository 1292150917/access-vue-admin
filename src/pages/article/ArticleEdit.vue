<template>
  <div class="page-content">
    <div class="form">
      <el-row style="display: flex">
        <el-input 
          v-model="form.title" 
          placeholder="输入标题" 
          style="flex: 1"
        />
        <el-select v-model="value" placeholder="请选择分类" 
           style="width: 200px; margin-left: 10px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-row>

      <quill-editor
        class="editor"
        ref="quillEditor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />

      <el-upload 
        class="upload-demo" 
        action="" 
        :before-upload='beforeUpload' 
        :data="uploadData" 
        :headers="headers"
        :on-success='upScuccess'
        ref="upload" 
        style="display:none"
      >
        <el-button 
          type="primary" 
          id="imgInput" 
          v-loading.fullscreen.lock="fullscreenLoading" 
          element-loading-text="插入中,请稍候"
        >
          点击上传
        </el-button>
      </el-upload>

      <el-row style="margin-top: 20px">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-row>

      <el-button type="primary" style="margin-top: 15px" @click="submit()">发布</el-button>
    </div>
  </div>
</template>

<script>
  import Quill from 'quill'
  import { quillEditor } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import '@/config/quill/quill.scss'

  // 工具栏配置
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],     // toggled buttons
    ['blockquote', 'code-block'],
  
    [{'header': 1}, {'header': 2}],                // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                        // text direction
  
    [{'size': ['small', false, 'large', 'huge']}], // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
  
    [{'color': []}, {'background': []}],           // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['link', 'image', 'video'],
    ['clean']                                      // remove formatting button
  ]
  
  export default {
    components: {
      quillEditor
    },
    data () {
      return {
        uploadData: {},
        content: '',
        headers: {
          Authorization: ''
        },
        editorOption: {
          placeholder: ''
        },
        form: {
          title: '',
          cover: ''
        },
        options: [{
          value: '选项1',
          label: 'Vue'
        }, {
          value: '选项2',
          label: 'React'
        }],
        value: '',
        fullscreenLoading: false,
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    mounted() {
      let quill = this.$refs.quillEditor.quill
      // 监听工具栏图片点击
      quill.getModule('toolbar').addHandler('image', this.imgHandler)
    },
    methods: {
      imgHandler(state) {
        let quill = this.$refs.quillEditor.quill

        this.addRange = quill.getSelection()
        if (state) {
          let fileInput = document.getElementById('imgInput')
          fileInput.click() // 加一个触发事件
        }
        this.uploadType = 'image'
      },
      submit() {

      },
      beforeUpload() {

      },
      upScuccess(e) {
        let { path } = e.data
        let url = '' + path
        let quill = this.$refs.quillEditor.quill
        let selection = quill.getSelection()

        // 获取光标的位置
        let cursorIndex = selection ? selection.index : 0
        // 插入图片到编辑器
        quill.insertEmbed(cursorIndex, 'image', url)
        // 调整光标到最后
        quill.setSelection(cursorIndex+1)
      },
      onEditorBlur(quill) {
        
      },
      onEditorFocus(quill) {
        
      },
      onEditorReady(quill) {
        
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    computed: {
      editor() {
        return this.$refs.quillEditor.quill
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-content {

    .form {
      max-width: 750px;

      .editor {
        margin-top: 15px;

        .ql-editor {
          min-height: 500px;
        }
      }

      /deep/ .el-upload--picture-card {
        width: 220px;
        height: 140px;
      }
    }
  }
</style>