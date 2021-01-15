<template>
  <div class="wrap">
    <div
      class="message"
      :class="item.type"
      v-for="item in notices"
      :key="item._name"
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
              _name
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
        }
      }
    };
</script>

<style scoped>
  .wrap {
    position: fixed;
    top: 50px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-50%);
  }

  .message {
    --borderWidth: 3px;
    min-width: 240px;
    max-width: 500px;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0 0 8px #ddd;
    overflow: hidden;
  }

  .content {
    padding: 8px;
    line-height: 1.3;
  }

  .message.info {
    border-left: var(--borderWidth) solid #909399;
    background: #f4f4f5;
  }

  .message.success {
    border-left: var(--borderWidth) solid #67c23a;
    background: #f0f9eb;
  }

  .message.error {
    border-left: var(--borderWidth) solid #f56c6c;
    background: #fef0f0;
  }

  .message.warning {
    border-left: var(--borderWidth) solid #e6a23c;
    background: #fdf6ec;
  }
</style>
