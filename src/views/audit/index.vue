
<template>
  <div class="boya-view boya-form-detail">
    <div class="view-title" style="margin-top: 20px">登记托管信息</div>
    <div class="flex-container1" style="margin-top: 10px;margin-left:10px; ">
      <div class="flex-right">
        <div style=" display: block;width:100%;">
          <div style class="s-title">
            <div class="circle">
              <div class="circle-inner"></div>
            </div>
            <span style="margin-left: 10px;font-size:16px;">基础信息</span>
          </div>
          <card :data="test"></card>
          <div class="form-detail-container1">
            <div class="form-detail boya-scrollbar">
              <div class="form-detail-title">描述</div>
              <div class="form-detail-info">公司bai概况：这里面可以包括注册时间，注册资du本，公司性质，技术zhi力量，规模，员工人数，员工素质等;</div>
              <div class="form-detail-info">2、公司发展状况:公司的发展速度,有何成绩,有何荣誉称号等;</div>
              <div class="form-detail-info">3、公司文化:公司的目标,理念,宗旨,使命,愿景,寄语等;</div>
              <div class="form-detail-info">5、销售业绩及网络:销售量,各地销售点等;</div>
              <div class="form-detail-info">6、售后服务:主要是公司售后服务的承诺。</div>
            </div>
          </div>
          <div class="flex-center">
            <div>
              <div style class="s-title">
                <div class="circle">
                  <div class="circle-inner"></div>
                </div>
                <span style="margin-left: 10px;font-size:16px;">托管信息</span>
              </div>
              <card :data="test1"></card>
            </div>
            <div style="margin-left:32px;">
              <div style class="s-title">
                <div class="circle">
                  <div class="circle-inner"></div>
                </div>
                <span style="margin-left: 10px;font-size:16px;">法定代表人</span>
              </div>
              <card :data="test2"></card>
            </div>
          </div>
          <div class="view-title" style="margin-top: 20px;margin-left: -8px;">董监高信息</div>
          <el-table
            class="boya-table"
            :data="tableData"
            style="width: 100%;clear:both;margin-top:20px;margin-bottom: 30px;"
            :row-style="common.rowStyle"
            empty-text="暂无数据，请重新查询"
          >
            <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="type" label="证件类型" show-overflow-tooltip></el-table-column>
            <el-table-column prop="number" label="证件号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="date" label="出生日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="sex" label="性别" show-overflow-tooltip width="60"></el-table-column>
            <el-table-column
              prop="tag"
              label="法定代表人标识"
              show-overflow-tooltip
              width="120"
              align="center"
            ></el-table-column>
            <el-table-column prop="job" label="职务" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tel" label="联系电话" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="查看" placement="top-start">
                  <span class="icon iconfont iconrenwu"></span>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>

          <div class="view-title" style="margin-top: 20px;margin-left: -8px;">附件信息</div>
          <el-table
            class="boya-table"
            :data="tableData1"
            style="width: 100%;clear:both;margin-top:20px;margin-bottom: 30px;"
            :row-style="common.rowStyle"
            empty-text="暂无数据，请重新查询"
          >
            <el-table-column prop="name" label="附件名称" show-overflow-tooltip width="182px"></el-table-column>
            <el-table-column label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="查看" placement="top-start">
                  <span class="icon iconfont iconrenwu"></span>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
          <div
            class="view-title"
            style="margin-top: 20px;margin-bottom:14px;margin-left: -8px;"
          >审批信息</div>
          <div class>
            <div>
              <div style class="s-title">
                <div class="circle">
                  <div class="circle-inner"></div>
                </div>
                <span style="margin-left: 10px;font-size:16px;">初审信息</span>
              </div>
              <div class="company-info">
                <div class="item">
                  <p class="des">审核状态</p>
                  <p class="info sucess">通过</p>
                </div>
              </div>
              <div class="form-detail-container1">
                <div class="form-detail boya-scrollbar" style>
                  <div class="form-detail-title">审核意见</div>
                  <div
                    class="form-detail-info"
                  >州工程机械有限公司向我局提交了《市公路应急抢险和机械化养护中心项目使用林地现状调查表》及相关材料，按照《森林法》、《森林法实施条例》和国家林业局《建设项目使用林地审核审批管理办法》等有关法律法规和文件规定，我局对该项目使用林地相关材料进行……;</div>
                </div>
              </div>
            </div>
            <div>
              <div style class="s-title">
                <div class="circle">
                  <div class="circle-inner"></div>
                </div>
                <span style="margin-left: 10px;font-size:16px;">中心柜员审批</span>
              </div>
              <div class="company-info">
                <div class="item">
                  <p class="des">审核状态</p>
                  <p class="info sucess">通过</p>
                </div>
              </div>
              <div class="form-detail-container1">
                <div class="form-detail boya-scrollbar" style>
                  <div class="form-detail-title">审核意见</div>
                  <div
                    class="form-detail-info"
                  >州工程机械有限公司向我局提交了《市公路应急抢险和机械化养护中心项目使用林地现状调查表》及相关材料，按照《森林法》、《森林法实施条例》和国家林业局《建设项目使用林地审核审批管理办法》等有关法律法规和文件规定，我局对该项目使用林地相关材料进行……;</div>
                </div>
              </div>
            </div>

            <div>
              <div style class="s-title">
                <div class="circle">
                  <div class="circle-inner"></div>
                </div>
                <span style="margin-left: 10px;font-size:16px;">中心柜员复核</span>
              </div>
              <div>
                <p class="p-class">审核状态</p>
                <el-select v-model="value" placeholder="通过" style="margin-bottom:10px;width:240px;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <div class="form-detail-container1" style="">
                  <div class="form-detail boya-scrollbar" style>
                    <div class="form-detail-title">审核意见</div>
                    <div
                      class="form-detail-info"
                    >请输入您的意见</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FromCard from "@/components/formDetail/Card/card"; // 折线图组件1
import card from "./smallCard.vue"; // 折线图组件1
export default {
  inject: ["reload"],
  name: "audit",
  components: {
    FromCard,
    card,
  },
  data() {
    return {
      options: [
        {
          value: "success",
          label: "通过",
        },
        {
          value: "error",
          label: "未通过",
        },
      ],
      value: "",
      tableData1: [
        {
          name: "股东名称",
        },
        {
          name: "经办人身份证正面",
        },
        {
          name: "经办人身份证背面",
        },
        {
          name: "营业执照",
        },
        {
          name: "企业logo",
        },
      ],
      test: [
        { des: "统一注册码", info: "BJ326794729347" },
        { des: "统一注册码", info: "BJ326794729347" },
        { des: "统一注册码", info: "BJ326794729347" },
        { des: "统一注册码", info: "BJ326794729347" },
      ],
      test1: [{ des: "总股本", info: "100000998股" }],
      test2: [
        { des: "姓名", info: "彭绍祖" },
        { des: "证件类型", info: "身份证" },
      ],
      tableData: [
        {
          name: "李小平",
          type: "身份证",
          number: "13018319961018080000",
          date: "1996,10,18",
          sex: "男",
          tag: "是",
          job: "职务名称",
          tel: "13933040639",
        },
        {
          name: "李小平",
          type: "身份证",
          number: "13018319961018080000",
          date: "1996,10,18",
          sex: "男",
          tag: "是",
          job: "职务名称",
          tel: "13933040639",
        },
        {
          name: "李小平",
          type: "身份证",
          number: "13018319961018080000",
          date: "1996,10,18",
          sex: "男",
          tag: "是",
          job: "职务名称",
          tel: "13933040639",
        },
        {
          name: "李小平",
          type: "身份证",
          number: "13018319961018080000",
          date: "1996,10,18",
          sex: "男",
          tag: "是",
          job: "职务名称",
          tel: "13933040639",
        },
      ],
    }
  },
  created() {
    // this.getData();
  },
  methods: {
    getData() {
      this.tableData.push({
        name: "股东名称",
        url: "",
      });
      this.tableData.push({
        name: "经办人身份证正面",
        url: "",
      });
      this.tableData.push({
        name: "经办人身份证背面",
        url: "",
      });
      this.tableData.push({
        name: "营业执照",
        url: "",
      });
      this.tableData.push({
        name: "企业logo",
        url: "",
      });
    },
  },
};
</script>

<style lang="less" scope="scope">
.p-class {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(85, 84, 102, 1);
  line-height: 16px;
  margin: 12px 0px;
}
.flex-center {
  display: flex;
  margin-top: 20px;
}

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

.s-title {
  display: flex;
  align-items: center;
}
.circle {
  width: 14px;
  height: 14px;
  border: 1px solid #3c3884;
  border-radius: 50%;
  .circle-inner {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3c3884;
    margin-left: 2px;
    margin-top: 2px;
  }
}
.boya-form-detail {
  .flex-container1 {
    display: flex;
    justify-content: space-between;

    .flex-left {
      position: relative;
      width: 325px;
      padding: 0 10px 0 0;
      // height: calc(100vh - 294px);
      display: inline-flex;

      .card-list {
        display: block;
        // height: calc(100vh - 294px);
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
    .flex-right {
      min-width: 258px;
      // height: calc(100vh - 294px);
      display: inline-flex;
      flex-grow: 1;

      .form-detail-container1 {
        // height: calc(100vh - 350px);
        // height: 243px;margin-bottom:20px;
        margin-bottom: 20px;
        background-color: rgba(238, 240, 244, 1);
        padding: 30px 25px 30px 35px;
        border-left: 6px solid rgba(221, 223, 228, 1);
        .form-detail {
          // height: calc(100vh - 410px);
          padding-right: 40px;
          overflow-y: auto;
          overflow-x: hidden;

          .form-detail-title {
            // margin-top: 32px;
            margin-bottom: 6px;
            font-size: 16px;
            color: #232c5a;
            line-height: 22px;
          }
          .form-detail-describe {
            margin-top: 14px;
            font-size: 12px;
            font-weight: 400;
            color: #9da8bf;
            line-height: 17px;
          }
          .form-detail-info {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(152, 153, 155, 1);
            line-height: 32px;
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
    background-color: #c8d0e0;
  }
}
</style>
