
<template>
  <div class="company-info">
    <div class="item" v-for="(item,index) in data" :key="index">
      <p class="des">{{item.des}}</p>
      <p class="info">{{item.info}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props:['data'],
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="less">
.company-info {
  display: flex;
  margin: 14px 0;
  .item {
    width: 183px;
    height: 65px;
    background: rgba(242, 242, 247, 1);
    border-radius: 8px;
    margin-right: 20px;
    padding: 10px 25px;
    .des {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(209, 216, 229, 1);
      line-height: 20px;
    }
    .info {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(129, 128, 147, 1);
      line-height: 22px;
    }
    .sucess {
      color: rgba(33, 191, 116, 1);
    }
  }
}
</style>
