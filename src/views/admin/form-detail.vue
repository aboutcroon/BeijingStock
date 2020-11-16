
<template>
  <div class="boya-view boya-form-detail">
    <div class="view-title" style="margin-top: 20px">他的申请单</div>
    <div class="flex-container" style="margin-top: 50px">
      <div class="flex-left">
        <div class="vertical-divider"></div>
        <div class="card-list boya-scrollbar">
          <from-card
            v-for="i in 4"
            :key="i"
            :option="tableData[i - 1]"
          ></from-card>
        </div>

      </div>
      <div class="flex-right">
        <div style=" display: block">
          <div style="height: 45px;">
            <span class="icon iconfont2 iconxuanzhong" style="font-size: 22px"></span>
            <span style="margin-left: 10px;">XXX企业登记托管申请信息存证记录</span>
          </div>
          <div class="form-detail-container" style="">
            <div class="form-detail boya-scrollbar">
              <div class="form-detail-describe">存证ID</div>
              <div class="form-detail-info">0x3d8529d40089f5e113620924d9c6618ec1e3c637f7b926e5695ce321302ccbf8</div>
              <div class="form-detail-describe">存证时间</div>
              <div class="form-detail-info">2020-12-11 14:13:23</div>
              <div class="form-detail-title">节点信息</div>
              <div class="form-detail-describe">监管节点</div>
              <div class="form-detail-info">北股交监管节点</div>
              <div class="form-detail-info">证监会监管节点</div>
              <div class="form-detail-title">存证内容</div>
              <div class="form-detail-describe">1.公司基本信息</div>
              <div class="form-detail-info">统一社会信用码：92520627MA6FQNX06C</div>
              <div class="form-detail-info">公司全称：国家电网有限责任公司</div>
              <div class="form-detail-info">经营范围：技术开发、技术转让、技术咨询、技术服务；销售自行开发的产品、电子产品、计算机、软件及辅助设备、仪器仪表、通讯设备、电话充值卡；技术检测；租赁机械设备（不含汽车租赁）；工程勘察设计；维修机械设备；数据处理（数据处…</div>
              <div class="form-detail-describe">2.托管信息</div>
              <div class="form-detail-info">统一社会信用码：92520627MA6FQNX06C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FromCard from '@/components/formDetail/Card/card' // 折线图组件1
  export default {
    inject: ['reload'],
    name: 'user_form_detail',
    components: {
      FromCard
    },
    data() {
      return {
        tableData: [{
          title: '提交登记托管申请',
          msg1: '提交时间：2017-04-01  14:00:25',
          msg2: '提交时间：2017-04-01  14:00:25',
          isPassed: 0
        },{
          title: '柜员初审',
          msg1: '提交时间：2017-04-01  14:00:25',
          msg2: '提交时间：2017-04-01  14:00:25',
          isPassed: 0
        },{
          title: '中心柜员初审',
          msg1: '提交时间：2017-04-01  14:00:25',
          msg2: '提交时间：2017-04-01  14:00:25',
          isPassed: 4
        },{
          title: '中心柜员复审',
          msg1: '提交时间：2017-04-01  14:00:25',
          msg2: '提交时间：2017-04-01  14:00:25',
          isPassed: 0
        },],
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.tableData.push({
          name: '股东名称',
          url: '',
        })
        this.tableData.push({
          name: '经办人身份证正面',
          url: '',
        })
        this.tableData.push({
          name: '经办人身份证背面',
          url: '',
        })
        this.tableData.push({
          name: '营业执照',
          url: '',
        })
        this.tableData.push({
          name: '企业logo',
          url: '',
        })
      },
    }
  }
</script>

<style lang="less">
  .boya-form-detail {
    .flex-container {
      display: flex;
      justify-content: space-between;
      height: calc(100vh - 294px);

      .flex-left {
        position: relative;
        width: 325px;
        padding: 0 10px 0 0;
        height: calc(100vh - 294px);
        display: inline-flex;

        .card-list {
          display: block;
          height: calc(100vh - 294px);
          overflow-y: auto;
          overflow-x: hidden;
        }
      }
      .flex-right {
        min-width: 258px;
        height: calc(100vh - 294px);
        display: inline-flex;
        flex-grow: 1;

        .form-detail-container{
          height: calc(100vh - 350px);
          background-color: #F9F9FC;
          padding: 30px 25px 30px 35px;
          .form-detail {
            height: calc(100vh - 410px);
            padding-right: 40px;
            overflow-y: auto;
            overflow-x: hidden;

            .form-detail-title {
              margin-top: 32px;
              font-size:16px;
              color: #232C5A;
              line-height:22px;
            }
            .form-detail-describe {
              margin-top: 14px;
              font-size:12px;
              font-weight:400;
              color: #9DA8BF;
              line-height:17px;
            }
            .form-detail-info {
              font-size:14px;
              font-weight:500;
              color: #8C8B9D;
              line-height:24px;
            }
          }
        }
      }
    }
    .vertical-divider {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 20px;
      width: 1px;
      background-color: #C8D0E0;
    }
  }

</style>
