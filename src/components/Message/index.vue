<template>
  <div class="wrap" ref="wrap">
    <div
      class="message"
      :class="`${item.type} ${item.mid}`"
      v-for="item in notices"
      :key="item._name"
      ref="msg"
    >
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
  // 默认选项
  const DefaultOptions = {
    duration: 1500,
    type: "info",
    content: "这是一条提示信息！"
  };

  let mid = 0;

  export default {
    data() {
      return {
        notices: []
      };
    },
    methods: {
      add(notice = {}) {
        // name标识 用于移除弹窗
        let _name = this.getName();
        // 合并选项
        notice = Object.assign(
          {
            _name,
            mid: `mid${mid}`
          },
          DefaultOptions,
          notice
        );

        this.notices.push(notice);

        setTimeout(() => {
          this.removeNotice(_name);
        }, notice.duration);
      },
      getName() {
        return "msg_" + mid++;
      },
      removeNotice(_name) {
        let index = this.notices.findIndex(item => item._name === _name);
        this.notices.splice(index, 1);

        // let el = this.$refs.msg[index]
        // let elBottom = 15
        // let elHeight = el.offsetHeight

        // if(index > 0) {
        //   elHeight += elBottom
        // }

        // el.style.cssText = `margin-top: -${elHeight}px; opacity: 0`;

        // setTimeout(() => {
        //   this.notices.splice(index, 1);
        // }, 500)
      }
    }
  };
</script>

<style lang="scss" scoped>
  .wrap {
    position: fixed;
    z-index: 2000;
    top: 30px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-50%);

    .message {
      min-width: 380px;
      max-width: 500px;
      margin-bottom: 15px;
      border-radius: 3px;
      overflow: hidden;
      border: 1px solid;
      opacity: 0;
      transition: all .5s;
      animation: slide-in .5s ease .1s forwards;

      .content {
        font-size: 12px;
        padding: 15px 20px;
        box-sizing: border-box;
      }

      &.info {
        color: #909399;
        background: #EDF2FC;
        border-color: #EBEEF5;
      }

      &.success {
        color: #67C23A;
        background: #F0F9EB;
        border-color: #e1f3d8;
      }

      &.error {
        color: #F56C6C;
        background: #FEF0F0;
        border-color: #fde2e2;
      }

      &.warning {
        color: #E6A23C;
        background: #FDF6EC;
        border-color: #faecd8;
      }
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(0);
    }

    to {
      opacity: 1;
      transform: translateY(30px);
    }
  }
</style>
