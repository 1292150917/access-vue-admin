<template>
  <div class='page-content'>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="请输入用户名搜索"></el-input>
      </el-col>
      <el-button>搜索</el-button>
    </el-row>
    <tao-table :data="logList" style="margin-top: 15px">
      <el-table-column label="用户名" prop="username"/>
      <el-table-column label="ip地址" prop="ip"/>
      <el-table-column label="浏览器" prop="browser"/>
      <el-table-column label="请求耗时" prop="status"/>
      <el-table-column label="日期" prop="create_time"/>
    </tao-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logList: [
          {
            username: '中小鱼',
            sex: 0,
            ip: '143.133.312.563',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14'
          },{
            username: '何小荷',
            sex: 1,
            ip: '131.133.313.424',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar2.jpg')
          },{
            username: '誶誶淰',
            sex: 0,
            ip: '127.133.313.132',
            browser: 'chrome',
            status: 0,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar3.jpg')
          },{
            username: '发呆草',
            sex: 0,
            ip: '143.133.313.456',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar4.jpg')
          },{
            username: '甜筒',
            sex: 1,
            ip: '127.133.567.675',
            browser: 'chrome',
            status: 0,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar5.jpg')
          },{
            username: '冷月呆呆',
            sex: 1,
            ip: '127.133.145.545',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar6.jpg')
          },{
            username: '唐不苦',
            sex: 1,
            ip: '156.133.313.756',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar7.jpg')
          },{
            username: '笑很甜',
            sex: 0,
            ip: '131.133.234.424',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar8.jpg')
          },{
            username: '青隐篱',
            sex: 0,
            ip: '167.133.355.534',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar9.jpg')
          },{
            username: '有你一生',
            sex: 0,
            ip: '234.133.545.533',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar10.jpg')
          },
          {
            username: '中小鱼',
            sex: 0,
            ip: '245.567.313.890',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14'
          },{
            username: '何小荷',
            sex: 1,
            ip: '235.789.313.345',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar2.jpg')
          },{
            username: '誶誶淰',
            sex: 0,
            ip: '214.133.313.543',
            browser: 'chrome',
            status: 0,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar3.jpg')
          },{
            username: '发呆草',
            sex: 0,
            ip: '567.756.313.123',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar4.jpg')
          },{
            username: '甜筒',
            sex: 1,
            ip: '564.133.313.645',
            browser: 'chrome',
            status: 0,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar5.jpg')
          },{
            username: '冷月呆呆',
            sex: 1,
            ip: '587.133.313.422',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar6.jpg')
          },{
            username: '唐不苦',
            sex: 1,
            ip: '571.133.313.423',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar7.jpg')
          },{
            username: '甜筒',
            sex: 1,
            ip: '587.133.313.422',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar6.jpg')
          },{
            username: '青隐篱',
            sex: 1,
            ip: '571.133.313.423',
            browser: 'chrome',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar7.jpg')
          }
        ]
      };
    },
    mounted() {},
    methods: {},
  }
</script>

<style lang='scss' scoped>
  .page-content {
    width: 100%;
    height: 100%;
  }
</style>