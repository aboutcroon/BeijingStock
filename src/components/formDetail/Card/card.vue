<template>
  <div class="form-card">
    <!-- 可以替换成iconfont -->
    <div class="form-card-icon">
      <span class="icon iconfont2 iconCompleted active" v-if="option.isPassed === 0"></span>
      <span class="icon iconfont2 iconFillingin_num1 active" v-if="option.isPassed === 1"></span>
      <span class="icon iconfont2 iconFillingin_num2 active" v-if="option.isPassed === 2"></span>
      <span class="icon iconfont2 iconFillingin_num3 active" v-if="option.isPassed === 3"></span>
      <span class="icon iconfont2 iconunfilled disable" v-if="option.isPassed === 4"></span>
    </div>
    <div class="form-card-title " :class="option.isPassed === 4?'disable':'active'">{{ option.title }}</div>
    <div class="form-card-info">{{ option.msg1 }}</div>
    <div class="form-card-info">{{ option.msg2 }}</div>
  </div>
</template>
<script>
  export default {
    props: {
      option: {
        type: Object,
        default: () => {
          return {
            title: '提交登记托管申请',
            msg1: '',
            msg2: '',
            isPassed: 0
          }
        }
      },
    }
  }
</script>
<style lang="scss">
  .form-card {
    position: relative;
    width: 310px;
    padding: 43px 0 0 45px;
    height: 150px;

    .form-card-icon {
      position: absolute;
      left: 2px;
      top: 38px;
      height: 37px;
      width: 37px;
      padding: 5px 5px;
      background-color: #fff;

      .icon {
        font-size: 27px;
        line-height: 27px;
      }

    }
    .active {
      color: #3B3783;
    }

    .disable {
      color: #833740;
    }

    .form-card-title {
      height:30px;
      font-size:16px;
      font-weight:600;
      line-height:30px;
    }

    .form-card-info {
      height:22px;
      font-size:14px;
      font-weight:500;
      color:#8794AE;
      line-height:22px;
    }
  }
</style>
