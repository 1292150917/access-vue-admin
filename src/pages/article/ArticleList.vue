<template>
  <div class="page-content">
    <div class="open-head-btn" @click="headShow = !headShow"></div>

    <el-row class="head" :style="{height: headShow ? '38px' : 0}">
      <el-input v-model="form.title"
        placeholder="请输入标题" 
        style="max-width: 500px"
        @keyup.enter.native="search"
      >
      </el-input>
      <el-button 
        type="primary" 
        style="margin-left: 0px" 
        icon="el-icon-search"
      >
        查询
      </el-button>
    </el-row>

    <div class="article-list">
      <div class="item" v-for="(item, index) in articleList.concat(articleList)" :key="index">
        <div class="left">
          <h1 class="title">{{item.title}}</h1>
          <p class="des">{{item.des}}</p>
          <div class="outer">
            <div>
              <i class="iconfont">&#xe64c;</i>
              <span>56</span>
            </div>
            <div>
              <i class="iconfont">&#xe665;</i>
              <span>26</span>
            </div>
            <div>
              <i class="iconfont">&#xe65b;</i>
              <span>
                2020-07-13
              </span>
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="item.cover"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headShow: false,
        form: {
          title: '',
          cover: ''
        },
        articleList: [
          {
            title: '写给开发者的一封信',
            des: '你好，亲爱的开发者（准开发者），很高兴你能使用到我们新上线的开发者社区。从立项到现在已经经历了两年的时间，7 月 28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转Developer。',
            cover: 'https://www.qiniu.lingchen.kim/white-wooden-table-with-chairs-3597114.jpg'
          },
          {
            title: 'Vue Seo 页面优化之 Nuxt 服务器渲染',
            des: 'Vue Seo 服务器渲染的坑 Nuxt，分享一下我从创建到部署远程服务器的相关经验。',
            cover: 'https://www.qiniu.lingchen.kim/adult-books-business-coffee-374016.jpg'
          },
          {
            title: '相同特性组件的一种优化思路',
            des: '本文介绍了面对大量特性相同组件的代码组织问题的一种思路，主要应用了以下知识点：require.context、render函数以及functional组件。',
            cover: 'https://www.qiniu.lingchen.kim/FtaF6XbAXnsjRreIN-dlQaywt5ML'
          },
          {
            title: '脱离 Table 组件的 Render 苦海',
            des: '在具体开发过程中，有些使用变扭的地方（和无关），比如 Table 组件的自定义列实现复杂，可展开 Table 不想单独建一个 vue 文件等。 在项目开发过程中发现的小技巧分享给大家，可提高代码编写效率与可维护性。',
            cover: 'https://www.qiniu.lingchen.kim/Fvp72xdJ8rIYseGlp-oNB2nHk3nm'
          },
        ]
      };
    },
    mounted() {
    },
    methods: {
      search() {

      },
    }
  };
</script>

<style lang="scss" scoped>
  .page-content {
    height: 100%;
    background: #fff;
    padding: 20px;

    .head {
      overflow: hidden;
      transition: height .3s;
    }

    .article-list {
      .item {
        padding: 18px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        position: relative;

        &:last-of-type {
          border: 0;
        }

        .left {
          max-width: 43%;

          .title {
            color: #333333;
            font-size: 18px;
            font-weight: 500;
            display: inline-block;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:hover {
              color: $theme-color;
              cursor: pointer;
            }
          }

          .des {
            color: #515a6e;
            font-size: 14px;
            line-height: 22px;
            margin: 10px 0 30px 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }

          .date {
            margin-top: 10px;
            color: #515a6e;
            font-size: 13px;
          }

          .outer {
            display: flex;
            position: absolute;
            left: 0;
            bottom: 18px;

            >div {
              margin-right: 15px;
              padding-right: 15px;
              border-right: 1px solid #ddd;

              i {
                color: #515a6e;
                font-size: 16px;
                position: relative;
                top: 1px;
              }

              span {
                color: #515a6e;
                font-size: 12px;
                margin-left: 3px;
              }

              &:last-of-type {
                border: 0;
              }
            }
          }
        }

        .right {

          img {
            width: 200px;
            height: 120px;
            border-radius: 3px;
          }
        }
      }
    }
  }
</style>