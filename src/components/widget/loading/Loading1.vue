<template>
  <div class="loading1">
    <div class="lc-loading">
      <div class="dot-elastic"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-pulse"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-flashing"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-collision"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-revolution"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-carousel"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-typing"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-windmill"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-bricks"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-floating"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-fire"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-spin"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-falling"></div>
    </div>

    <div class="lc-loading">
      <div class="dot-stretching"></div>
    </div>
</div>
</template>

<script>
export default {
  name: "Loading1",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
  $theme-color: #44A0FF;

  .loading1 {
    display: flex;
    flex-wrap: wrap;

    .lc-loading {
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 0 20px 20px 0;
      border: 1px solid #ddd;
    }

    .filter-contrast {
      filter: contrast(5);
      background-color: white;
    }

    .dot-elastic {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      animation: dotElastic 1s infinite linear;
    }
    .dot-elastic::before,
    .dot-elastic::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-elastic::before {
      left: -15px;
      animation: dotElasticBefore 1s infinite linear;
    }
    .dot-elastic::after {
      left: 15px;
      animation: dotElasticAfter 1s infinite linear;
    }
    @keyframes dotElasticBefore {
      0% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(1, 1.5);
      }
      50% {
        transform: scale(1, 0.67);
      }
      75% {
        transform: scale(1, 1);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    @keyframes dotElastic {
      0% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1, 1.5);
      }
      75% {
        transform: scale(1, 1);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    @keyframes dotElasticAfter {
      0% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1, 0.67);
      }
      75% {
        transform: scale(1, 1.5);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    .dot-pulse {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
        10014px 0 0 0 $theme-color;
      animation: dotPulse 1.5s infinite linear;
    }
    @keyframes dotPulse {
      0% {
        box-shadow: 9984px 0 0 -5px $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 2px $theme-color;
      }
      25% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 2px $theme-color,
          10014px 0 0 0 $theme-color;
      }
      50% {
        box-shadow: 9984px 0 0 2px $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 -5px $theme-color;
      }
      75% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 -5px $theme-color,
          10014px 0 0 0 $theme-color;
      }
      100% {
        box-shadow: 9984px 0 0 -5px $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 2px $theme-color;
      }
    }
    .dot-flashing {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      animation: dotFlashing 1s infinite linear alternate;
      animation-delay: 0.5s;
    }
    .dot-flashing::before,
    .dot-flashing::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-flashing::before {
      left: -15px;
      animation: dotFlashing 1s infinite alternate;
      animation-delay: 0s;
    }
    .dot-flashing::after {
      left: 15px;
      animation: dotFlashing 1s infinite alternate;
      animation-delay: 1s;
    }
    @keyframes dotFlashing {
      0% {
        background-color: $theme-color;
      }
      100% {
        background-color: #ebe6ff;
      }
    }
    .dot-collision {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-collision::before,
    .dot-collision::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-collision::before {
      left: -10px;
      animation: dotCollisionBefore 2s infinite ease-in;
    }
    .dot-collision::after {
      left: 10px;
      animation: dotCollisionAfter 2s infinite ease-in;
      animation-delay: 1s;
    }
    @keyframes dotCollisionBefore {
      0%,
      50%,
      75%,
      100% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-15px);
      }
    }
    @keyframes dotCollisionAfter {
      0%,
      50%,
      75%,
      100% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(15px);
      }
    }
    .dot-revolution {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-revolution::before,
    .dot-revolution::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-revolution::before {
      left: 0;
      top: -15px;
      transform-origin: 5px 20px;
      animation: dotRevolution 1.4s linear infinite;
    }
    .dot-revolution::after {
      left: 0;
      top: -30px;
      transform-origin: 5px 35px;
      animation: dotRevolution 1s linear infinite;
    }
    @keyframes dotRevolution {
      0% {
        transform: rotateZ(0deg) translate3d(0, 0, 0);
      }
      100% {
        transform: rotateZ(360deg) translate3d(0, 0, 0);
      }
    }
    .dot-carousel {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
        10014px 0 0 0 $theme-color;
      animation: dotCarousel 1.5s infinite linear;
    }
    @keyframes dotCarousel {
      0% {
        box-shadow: 9984px 0 0 -1px $theme-color, 9999px 0 0 1px $theme-color,
          10014px 0 0 -1px $theme-color;
      }
      50% {
        box-shadow: 10014px 0 0 -1px $theme-color, 9984px 0 0 -1px $theme-color,
          9999px 0 0 1px $theme-color;
      }
      100% {
        box-shadow: 9999px 0 0 1px $theme-color, 10014px 0 0 -1px $theme-color,
          9984px 0 0 -1px $theme-color;
      }
    }
    .dot-typing {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
        10014px 0 0 0 $theme-color;
      animation: dotTyping 1.5s infinite linear;
    }
    @keyframes dotTyping {
      0% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 0 $theme-color;
      }
      16.667% {
        box-shadow: 9984px -10px 0 0 $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 0 $theme-color;
      }
      33.333% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 0 $theme-color;
      }
      50% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px -10px 0 0 $theme-color,
          10014px 0 0 0 $theme-color;
      }
      66.667% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 0 $theme-color;
      }
      83.333% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
          10014px -10px 0 0 $theme-color;
      }
      100% {
        box-shadow: 9984px 0 0 0 $theme-color, 9999px 0 0 0 $theme-color,
          10014px 0 0 0 $theme-color;
      }
    }
    .dot-windmill {
      position: relative;
      top: -15px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      transform-origin: 5px 20px;
      animation: dotWindmill 2s infinite linear;
    }
    .dot-windmill::before,
    .dot-windmill::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-windmill::before {
      left: -12.99px;
      top: 22.5px;
    }
    .dot-windmill::after {
      left: 12.99px;
      top: 22.5px;
    }
    @keyframes dotWindmill {
      0% {
        transform: rotateZ(0deg) translate3d(0, 0, 0);
      }
      100% {
        transform: rotateZ(720deg) translate3d(0, 0, 0);
      }
    }
    .dot-bricks {
      position: relative;
      top: 8px;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      box-shadow: 9991px -16px 0 0 $theme-color, 9991px 0 0 0 $theme-color,
        10007px 0 0 0 $theme-color;
      animation: dotBricks 2s infinite ease;
    }
    @keyframes dotBricks {
      0% {
        box-shadow: 9991px -16px 0 0 $theme-color, 9991px 0 0 0 $theme-color,
          10007px 0 0 0 $theme-color;
      }
      8.333% {
        box-shadow: 10007px -16px 0 0 $theme-color, 9991px 0 0 0 $theme-color,
          10007px 0 0 0 $theme-color;
      }
      16.667% {
        box-shadow: 10007px -16px 0 0 $theme-color, 9991px -16px 0 0 $theme-color,
          10007px 0 0 0 $theme-color;
      }
      25% {
        box-shadow: 10007px -16px 0 0 $theme-color, 9991px -16px 0 0 $theme-color,
          9991px 0 0 0 $theme-color;
      }
      33.333% {
        box-shadow: 10007px 0 0 0 $theme-color, 9991px -16px 0 0 $theme-color,
          9991px 0 0 0 $theme-color;
      }
      41.667% {
        box-shadow: 10007px 0 0 0 $theme-color, 10007px -16px 0 0 $theme-color,
          9991px 0 0 0 $theme-color;
      }
      50% {
        box-shadow: 10007px 0 0 0 $theme-color, 10007px -16px 0 0 $theme-color,
          9991px -16px 0 0 $theme-color;
      }
      58.333% {
        box-shadow: 9991px 0 0 0 $theme-color, 10007px -16px 0 0 $theme-color,
          9991px -16px 0 0 $theme-color;
      }
      66.666% {
        box-shadow: 9991px 0 0 0 $theme-color, 10007px 0 0 0 $theme-color,
          9991px -16px 0 0 $theme-color;
      }
      75% {
        box-shadow: 9991px 0 0 0 $theme-color, 10007px 0 0 0 $theme-color,
          10007px -16px 0 0 $theme-color;
      }
      83.333% {
        box-shadow: 9991px -16px 0 0 $theme-color, 10007px 0 0 0 $theme-color,
          10007px -16px 0 0 $theme-color;
      }
      91.667% {
        box-shadow: 9991px -16px 0 0 $theme-color, 9991px 0 0 0 $theme-color,
          10007px -16px 0 0 $theme-color;
      }
      100% {
        box-shadow: 9991px -16px 0 0 $theme-color, 9991px 0 0 0 $theme-color,
          10007px 0 0 0 $theme-color;
      }
    }
    .dot-floating {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      animation: dotFloating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
    }
    .dot-floating::before,
    .dot-floating::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-floating::before {
      left: -12px;
      animation: dotFloatingBefore 3s infinite ease-in-out;
    }
    .dot-floating::after {
      left: -24px;
      animation: dotFloatingAfter 3s infinite cubic-bezier(0.4, 0, 1, 1);
    }
    @keyframes dotFloating {
      0% {
        left: calc(-50% - 5px);
      }
      75% {
        left: calc(50% + 105px);
      }
      100% {
        left: calc(50% + 105px);
      }
    }
    @keyframes dotFloatingBefore {
      0% {
        left: -50px;
      }
      50% {
        left: -12px;
      }
      75% {
        left: -50px;
      }
      100% {
        left: -50px;
      }
    }
    @keyframes dotFloatingAfter {
      0% {
        left: -100px;
      }
      50% {
        left: -24px;
      }
      75% {
        left: -100px;
      }
      100% {
        left: -100px;
      }
    }
    .dot-fire {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      box-shadow: 9999px -15px 0 0;
      animation: dotFire 1s infinite linear;
    }
    .dot-fire::before,
    .dot-fire::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-fire::before {
      box-shadow: 9999px -5px 0 0;
      animation: dotFireBefore 1s infinite linear;
    }
    .dot-fire::after {
      box-shadow: 9999px 15px 0 0;
      animation: dotFireAfter 1s infinite linear;
    }
    @keyframes dotFire {
      0% {
        box-shadow: 9999px -15px 0 -3px;
      }
      1%,
      50% {
        box-shadow: 9999px 15px 0 -5px;
      }
      100% {
        box-shadow: 9999px -5px 0 2px;
      }
    }
    @keyframes dotFireBefore {
      0% {
        box-shadow: 9999px -5px 0 2px;
      }
      50% {
        box-shadow: 9999px -15px 0 -3px;
      }
      51%,
      100% {
        box-shadow: 9999px 15px 0 -5px;
      }
    }
    @keyframes dotFireAfter {
      1% {
        box-shadow: 9999px 15px 0 -5px;
      }
      50% {
        box-shadow: 9999px -5px 0 2px;
      }
      100%,
      0% {
        box-shadow: 9999px -15px 0 -3px;
      }
    }
    .dot-spin {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: transparent;
      color: transparent;
      box-shadow: 0 -18px 0 0 $theme-color, 12.72984px -12.72984px 0 0 $theme-color,
        18px 0 0 0 $theme-color, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
        0 18px 0 0 rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
        -18px 0 0 0 rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
      animation: dotSpin 1.5s infinite linear;
    }
    @keyframes dotSpin {
      0%,
      100% {
        box-shadow: 0 -18px 0 0 $theme-color, 12.72984px -12.72984px 0 0 $theme-color,
          18px 0 0 0 $theme-color, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          0 18px 0 -5px rgba(152, 128, 255, 0),
          -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          -18px 0 0 -5px rgba(152, 128, 255, 0),
          -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
      }
      12.5% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
          12.72984px -12.72984px 0 0 $theme-color, 18px 0 0 0 $theme-color,
          12.72984px 12.72984px 0 0 $theme-color, 0 18px 0 -5px rgba(152, 128, 255, 0),
          -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          -18px 0 0 -5px rgba(152, 128, 255, 0),
          -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
      }
      25% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
          12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 $theme-color,
          12.72984px 12.72984px 0 0 $theme-color, 0 18px 0 0 $theme-color,
          -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          -18px 0 0 -5px rgba(152, 128, 255, 0),
          -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
      }
      37.5% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
          12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
          18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 $theme-color,
          0 18px 0 0 $theme-color, -12.72984px 12.72984px 0 0 $theme-color,
          -18px 0 0 -5px rgba(152, 128, 255, 0),
          -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
      }
      50% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
          12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
          18px 0 0 -5px rgba(152, 128, 255, 0),
          12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 $theme-color,
          -12.72984px 12.72984px 0 0 $theme-color, -18px 0 0 0 $theme-color,
          -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
      }
      62.5% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
          12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
          18px 0 0 -5px rgba(152, 128, 255, 0),
          12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 $theme-color,
          -18px 0 0 0 $theme-color, -12.72984px -12.72984px 0 0 $theme-color;
      }
      75% {
        box-shadow: 0 -18px 0 0 $theme-color,
          12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
          18px 0 0 -5px rgba(152, 128, 255, 0),
          12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          0 18px 0 -5px rgba(152, 128, 255, 0),
          -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          -18px 0 0 0 $theme-color, -12.72984px -12.72984px 0 0 $theme-color;
      }
      87.5% {
        box-shadow: 0 -18px 0 0 $theme-color, 12.72984px -12.72984px 0 0 $theme-color,
          18px 0 0 -5px rgba(152, 128, 255, 0),
          12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          0 18px 0 -5px rgba(152, 128, 255, 0),
          -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
          -18px 0 0 -5px rgba(152, 128, 255, 0),
          -12.72984px -12.72984px 0 0 $theme-color;
      }
    }
    .dot-falling {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      box-shadow: 9999px 0 0 0 $theme-color;
      animation: dotFalling 1s infinite linear;
      animation-delay: 0.1s;
    }
    .dot-falling::before,
    .dot-falling::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-falling::before {
      animation: dotFallingBefore 1s infinite linear;
      animation-delay: 0s;
    }
    .dot-falling::after {
      animation: dotFallingAfter 1s infinite linear;
      animation-delay: 0.2s;
    }
    @keyframes dotFalling {
      0% {
        box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
      }
      25%,
      50%,
      75% {
        box-shadow: 9999px 0 0 0 $theme-color;
      }
      100% {
        box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
      }
    }
    @keyframes dotFallingBefore {
      0% {
        box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
      }
      25%,
      50%,
      75% {
        box-shadow: 9984px 0 0 0 $theme-color;
      }
      100% {
        box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
      }
    }
    @keyframes dotFallingAfter {
      0% {
        box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
      }
      25%,
      50%,
      75% {
        box-shadow: 10014px 0 0 0 $theme-color;
      }
      100% {
        box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
      }
    }
    .dot-stretching {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
      animation: dotStretching 2s infinite ease-in;
      transform: scale(1.25, 1.25);
    }
    .dot-stretching::before,
    .dot-stretching::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $theme-color;
      color: $theme-color;
    }
    .dot-stretching::before {
      animation: dotStretchingBefore 2s infinite ease-in;
    }
    .dot-stretching::after {
      animation: dotStretchingAfter 2s infinite ease-in;
    }
    @keyframes dotStretching {
      0% {
        transform: scale(1.25, 1.25);
      }
      50%,
      60% {
        transform: scale(0.8, 0.8);
      }
      100% {
        transform: scale(1.25, 1.25);
      }
    }
    @keyframes dotStretchingBefore {
      0% {
        transform: translate(0) scale(0.7, 0.7);
      }
      50%,
      60% {
        transform: translate(-20px) scale(1, 1);
      }
      100% {
        transform: translate(0) scale(0.7, 0.7);
      }
    }
    @keyframes dotStretchingAfter {
      0% {
        transform: translate(0) scale(0.7, 0.7);
      }
      50%,
      60% {
        transform: translate(20px) scale(1, 1);
      }
      100% {
        transform: translate(0) scale(0.7, 0.7);
      }
    }
  }
</style>
