<template>
  <div class="page-content">
    <div class="content">
      <ul class="offset">
        <li 
          class="widget-item" 
          v-for="(item, index) in widgetList" :key="index"
        >
          <div class="cover">
            <img :src="item.cover"/>
          </div>
          <div class="info">
            <p class="title">{{item.title}}</p>
            <p class="brief">{{item.brief}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: { 
      
    },
    data () {
      return {
        widgetList: [
          {
            title: '双三角形合体',
            widget: 'ImageHover1',
            cover: require('@img/widget/ImageHover1.png'),
            brief: ''
          },
          {
            title: '正逆向旋转缩放',
            widget: 'ImageHover2',
            cover: require('@img/widget/ImageHover2.png'),
            brief: ''
          },
          {
            title: '四边框伸缩',
            widget: 'ImageHover3',
            cover: require('@img/widget/ImageHover3.png'),
            brief: ''
          },
          {
            title: '多种Loading效果',
            widget: 'Loading1',
            cover: require('@img/widget/loading.png'),
            brief: ''
          },
          {
            title: '多层边框按钮',
            widget: 'Button1',
            cover: require('@img/widget/button1.png'),
            brief: ''
          },
          {
            title: '运动边框按钮2',
            widget: 'Button2',
            cover: require('@img/widget/button2.png'),
            brief: ''
          },
          {
            title: '运动边框按钮',
            widget: 'Button3',
            cover: require('@img/widget/button3.png'),
            brief: ''
          },
          {
            title: '回顶部按钮（箭头动画）',
            widget: 'ScrollTop1',
            cover: require('@img/widget/scroll_top1.png'),
            brief: ''
          }
        ]
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  .page-content {
    background: #F5F7F9 !important;
    padding: 0 !important;

    .content {
      margin-top: 10px;

      .offset {
        width: calc(100% + 17px);
        display: flex;
        flex-wrap: wrap;

        .widget-item {
          width: calc(20% - 17px);
          // height: 27vh;
          height: 250px;
          margin: 0 17px 17px 0;
          box-sizing: border-box;
          border-radius: 4px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          
          .cover {
            width: 100%;
            height: 80%;
            overflow: hidden;
            cursor: pointer;
            position: relative;

            &::before {
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 100;
              background: rgba(0,0,0,.4);
              opacity: 0;
              transition: all .3s;
            }

            &:hover::before {
              opacity: 1;
            }

            &:hover img{
              transform: scale(1.3) rotate(10deg);
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: all .5s;
            }
          }

          .info {
            padding: 15px 8px;

            .title {
              color: #555;
              font-size: 16px;
              font-weight: 500;;
              line-height: 22px;
              cursor: pointer;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;

              &:hover {
                color: $theme-color;
              }
            }

            .brief {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .page-content {
      .content {
        .offset {
          .widget-item {
            width: calc(25% - 17px);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .page-content {
      .content {
        .offset {
          li {
            width: calc(33.333% - 17px);
          }
        }
      }
    }
  }
</style>
