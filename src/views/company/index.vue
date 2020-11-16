<template>
  <div class="right_cont">
    <div class="center">
      <div class="cont-up">
        <div class="container">
          <p class="rectangle" />
          <p style="margin-top:1.5rem; margin-bottom:.5rem; margin-left: 12px; font-size: 16px; font-family: PingFangSC-Medium; font-weight: 500; color: rgba(35,45,90,1); line-height: 22px;"><span>股份有限公司登记托管申请</span></p>
        </div>
      </div>

      <div class="cont-down">
        <div class="cont-left">
          <div style="height: 300px;">
            <el-steps direction="vertical" :active="active" finish-status="process">
              <el-step title="第1步：基本信息" icon="el-icon-circle-check"></el-step>
              <el-step title="第2步：董监高信息" icon="el-icon-circle-check"></el-step>
              <el-step title="第3步：上传附件并提交" icon="el-icon-circle-check"></el-step>
            </el-steps>
          </div>
        </div>

        <div class="cont-right">
          <div class="cont-container">
            <div class="cont-middle">
              <div class="circle">
                <svg t="1597803114683" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1258" width="16" height="16"><path d="M512 55.632c246.639 0 446.655 200.016 446.655 446.656 0 246.639-200.016 446.654-446.656 446.654-246.639 0-446.654-200.017-446.654-446.654 0-246.64 200.016-446.656 446.654-446.656z m0 239.97c-114.13 0-206.686 92.555-206.686 206.686S397.87 708.973 512 708.973c114.13 0 206.687-92.556 206.687-206.685S626.13 295.6 511.999 295.6z m0-182.433c-214.867 0-389.12 174.252-389.12 389.119S297.134 891.406 512 891.406c214.867 0 389.118-174.252 389.118-389.118S726.868 113.168 512 113.168z" p-id="1259" fill="#13227a"></path></svg>
              </div>
              <div class="text" v-show="step === 1 && stepInside === 1">
                公司基本信息(1/4)
              </div>
              <div class="text" v-show="step === 1 && stepInside === 2">
                托管信息(2/4)
              </div>
              <div class="text" v-show="step === 1 && stepInside === 3">
                法定代表人信息(3/4)
              </div>
              <div class="text" v-show="step === 1 && stepInside === 4">
                经办人信息(4/4)
              </div>
              <div class="text" v-show="step === 2">
                工商局提供数据
              </div>
              <div class="text" v-show="step === 3">
                提交附件
              </div>
            </div>
            <div class="button" v-if="step === 2">
              <Button class="sync" style="background: rgba(235,235,242,1);">同步工商数据</Button>
              <Button class="create" @click="handleDrawer">新增</Button>
            </div>
          </div>

          <div class="compo boya-scrollbar" ref="comp">
            <base-in v-if="step === 1" @handleBase="handleBase" :stepInside="stepInside" :data_list="data_list" ref="base"></base-in>
            <chief-admin v-if="step === 2" @handleChief="handleChief" ref="chief"></chief-admin>
            <upload-file v-if="step === 3" @handleLoad="handleLoad" ref="upload"></upload-file>
          </div>

          <div class="btn">
            <el-button class="btn-inner" style="background: rgba(235,235,242,1); border: rgba(235,235,242,1)" @click="last">上一项</el-button>
            <el-button class="btn-inner" style="margin-right: 49px" @click="nextBase" v-if="step === 1 && stepInside !== 4">下一项</el-button>
            <el-button class="btn-next" style="margin-right: 49px" @click="next" v-if="step === 2 || stepInside === 4">确认无误，下一步</el-button>
            <el-button class="btn-next" style="margin-right: 49px" @click="handleSubmit" v-if="step === 3">确认无误，提交</el-button>
          </div>
        </div>
      </div>

      <Modal v-model="dialogVisible" width="448px">
        <p class="image-container">
          <img class="image" src="../../assets/img/submit@2x.png" alt="删除">
        </p>
        <div class="text-container">
          <p class="textUp">数据正在上链，极速审批中....</p>
          <p class="textDown">
        <span style="display: flex; justify-content: center">
          请稍后查询
        </span>
          </p>
        </div>
        <div slot="footer" class="footer">
          <Button class="buttonDia" style="margin-left: 57px" @click="cancel">取消</Button>
          <Button class="buttonDia" style="margin-right: 57px; background: rgba(60,56,132,1); color: rgba(255,255,255,1)" @click="submit" :loading="loading">
            <span v-if="!loading">确定</span>
            <span v-else>提交中</span>
          </Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
  import BaseIn from './base-in/base-in'
  import ChiefAdmin from './chief-admin/chief-admin'
  import UploadFile from './upload-file/upload-file'
  import FormCard from '../../components/formDetail/Card/card'
  export default {
    name: 'company',
    components: {
      BaseIn,
      ChiefAdmin,
      UploadFile,
      FormCard
    },
    data() {
      return {
        data_list: {
          step_one: {},
          step_two: [],
          step_three: {}
        },
        active: 0,
        step: 1,
        stepInside: 1,
        dialogVisible: false,
        loading: false
      }
    },
    methods: {
      nextBase() {
        this.stepInside ++
      },
      next() {
        if (this.stepInside === 4){
          this.step = 2
          this.active = 1
          this.stepInside = 1
          this.$refs.comp.style.background = '#ffffff'
        } else {
          this.step = 3
          this.active = 2
        }
      },
      last() {
        if (this.step === 1 && this.stepInside > 1) {
          this.stepInside --
        }
        if (this.step === 2) {
          this.step = 1
          this.stepInside = 4
          this.active = 0
          this.$refs.comp.style.background = 'rgba(249,249,252,1)'
        }
        if (this.step === 3) {
          this.step = 2
          this.active = 1
        }
      },
      handleDrawer() {
        this.$refs.chief.childDrawer()
      },
      handleSubmit() {
        this.dialogVisible = true
      },
      cancel() {
        this.dialogVisible = false
      },
      handleBase(dataObj) {
        this.data_list.step_one = dataObj
      },
      handleChief(dataArr) {
        this.data_list.step_two = dataArr
      },
      handleLoad(dataObj) {
        this.data_list.step_three = dataObj
      },
      submit() {
        var param = {
          data_list: [this.data_list]
        }
        this.loading = true
        this.http.chiefupload(param).then(res => {
          this.dialogVisible = false
          this.loading = false
          if (res.data.code == '0') {
            this.$Message.success('提交成功!')
          } else {
            this.http.messageFun('error', res.data.msg)
          }
        })
      }
    }
  }
</script>

<style lang="scss">

  .right_cont {
    padding: 0;
    .center {
      /*margin: 10px;*/
      padding-top: .1rem;
      /*padding-bottom: 1rem;*/
      background: #fff;
      min-height: 31rem;
      padding-right: 22px;
      .cont-up {
        width: 96%;
        margin-bottom: 44px;
        margin-left: 17px;
        p {
          margin-top: 1rem;
        }
        .container {
          display: flex;
          align-items: center;
          .rectangle {
            width: 4px;
            height: 20px;
            background: rgba(135,148,174,1);
          }
        }
      }

      .cont-down {
        display: flex;
        height: calc(100vh - 70px);
        .cont-left {
          width: calc(100vw - 1016px);
          height: calc(100vh - 200px);
          /*padding: calc(100vh - 872px) calc(100vw - 1422px);*/
          margin-left: 32px;
          margin-right: 12px;
          display: flex;
          align-items: center;
          .el-step__icon-inner[class*=el-icon]:not(.is-status){
            color: #3B3783;
          }
        }

        .cont-right {
          width: calc(100vw - 570px);
          height: calc(100vh - 200px);
          /*margin-right: calc(100vw - 1410px);*/
          .cont-container {
            display: flex;
            align-items: center;
            .cont-middle {
              margin-left: -300px;
              .circle {
                display: inline-block;
                margin-left: 310px;
                .icon {
                  width: 22px;
                  height: 22px;
                  border-radius: 50%;
                  margin-left: 4px;
                  margin-top: 4px;
                }
              }
              .text {
                /*display: inline-block;*/
                width: 150px;
                height: 16px;
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(35,45,90,1);
                margin-left: 340px;
                margin-bottom: 30px;
                margin-top: calc(-3vh);
              }
            }
            .button {
              margin-top: -10px;
              margin-left: calc(100vw - 1070px);
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              display: flex;
              .sync {
                min-width: 122px;
                /*width: 122px;*/
                height: 42px;
                background: rgba(235,235,242,1);
                color: rgba(59,56,132,1);
                border-radius: 8px;
                margin-left: 40px;
              }
              .create {
                width: 102px;
                height: 42px;
                border: 1px solid rgba(135,148,174,1);
                border-radius: 8px;
                color: rgba(135,148,174,1);
                margin-left: 15px;
              }
            }
          }

          .compo {
            overflow-y: scroll;
            overflow-x: auto;
            height: 100%;
            width: calc(100vw - 570px);
            background: rgba(249,249,252,1);
            border-radius: 10px;
          }

          .btn {
            height: 97px;
            float: right;
            .btn-inner {
              width: 102px;
              height: 42px;
              border: 1px solid rgba(135,148,174,1);
              border-radius: 8px;
              margin-top: 19px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
            }
            .btn-next {
              min-width: 152px;
              /*width: 152px;*/
              height: 42px;
              background: rgba(60,56,132,1);
              border-radius: 8px;
              color: rgba(255,254,255,1);
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
            }
          }
        }
      }

    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    margin-top: 42px;
    margin-bottom: 26px;
  }
  .image {
    width: 151px;
    height: 103px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .textUp {
    width:186px;
    height:32px;
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(86,84,102,1);
    line-height: 28px;
    margin-bottom: 5px;
  }
  .textDown {
    width:186px;
    height:32px;
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(86,84,102,1);
    line-height: 20px;
    margin-left: -10px;
    margin-bottom: 10px;
  }

  .footer {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .buttonDia {
    width: 112px;
    height: 42px;
    border-radius: 8px;
    border: 1px solid rgba(135,148,174,1);
    font-size: 14px;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: rgba(135,148,174,1);
    line-height: 20px;
  }
  .ivu-modal-footer {
    border-top: none;
  }

</style>
