<style lang="less">
  @import 'home.less';
</style>
<template>
  <div class="right_cont home-container" style="margin-top:5px">
    <el-row class="home-row">
      <el-col :span="14">
        <div class="home-block" style="height: 264px;padding: 25px;">
          <el-row>
            <el-col :span="12">
              <div style="height: 40px;">
                <div class="hair">
                  <img :src="imguser">
                </div>
                <div style="display: inline-block; padding-left: 10px;">
                  <div style="font-size: 16px;">
                    {{ user_name }}
                  </div>
                  <div>
                    <div class="type-tag" :class="isYiji?'type-tag-yiji':'type-tag-jianguan'">
                      {{ user_type }}
                    </div>
                  </div>
                </div>
                <Button class="btn-switch" style="margin: 6px 0 0 21px;" @click="modal1 = true">用户类型变更</Button>
              </div>
              <div lass="home-hello" style="font-size: 14px;margin: 14px 0 7px">
                您好，
              </div>
              <div class="home-hello" style="font-size: 30px;margin-bottom: 32px;">
                祝您开心每一天
              </div>
              <div class="home-text home-text-hasicon" v-show="node_name.length > 0">
                <div class="home-div-icon" style="background-color: #B65752"> </div>
                {{ node_name }}
              </div>
              <div class="home-text home-text-hasicon" v-show="organization.length > 0">
                <div class="home-div-icon" style="background-color: #52B1B6"> </div>
                {{ organization }}
              </div>
            </el-col>
            <el-col :span="12">
              <div style="height: 214px;float: right">
                <img src="../../assets/img/img@1x.png" srcset="../../assets/img/img@2x.png 2x,../../assets/img/img@3x.png 3x"/>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="home-block" style="height: 264px;padding: 20px;">
          <div class="home-title">
            <span class="icon iconfont iconContractcall" style="font-size: 12px"></span><span>合约调用情况</span>
          </div>
          <div style="padding: 0 23px;margin-top: 10px;">
            <ContractPie style="height: 200px;" />
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <el-col class="home-block home-block-card">
          <el-col :span="10" style="line-height: 58px;">
            <img class="home-card-icon" src="../../assets/img/Line.png" srcset="../../assets/img/Line@2x.png 2x"/>
          </el-col>
          <el-col :span="14" class="home-card-text">
            <p class="home-card-title">所有业务数据</p>
            <p class="home-card-value">{{ all_data_count }}</p>
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="4">
        <el-col class="home-block home-block-card">
          <el-col :span="10" style="line-height: 58px;">
            <img class="home-card-icon" src="../../assets/img/Line.png" srcset="../../assets/img/Line@2x.png 2x"/>
          </el-col>
          <el-col :span="14" class="home-card-text">
            <p class="home-card-title">存查证业务数据</p>
            <p class="home-card-value">{{ evidence_count }}</p>
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="4">
        <el-col class="home-block home-block-card">
          <el-col :span="10" style="line-height: 58px;">
            <img class="home-card-icon" src="../../assets/img/Line.png" srcset="../../assets/img/Line@2x.png 2x"/>
          </el-col>
          <el-col :span="14" class="home-card-text">
            <p class="home-card-title">合约部署数量</p>
            <p class="home-card-value">{{ contract_count }}</p>
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="4">
        <el-col class="home-block home-block-card">
          <el-col :span="10" style="line-height: 58px;">
            <img class="home-card-icon" src="../../assets/img/Line.png" srcset="../../assets/img/Line@2x.png 2x"/>
          </el-col>
          <el-col :span="14" class="home-card-text">
            <p class="home-card-title">合约调用数量</p>
            <p class="home-card-value">{{ contract_used_count }}</p>
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="4">
        <el-col class="home-block home-block-card">
          <el-col :span="10" style="line-height: 58px;">
            <img class="home-card-icon" src="../../assets/img/Line.png" srcset="../../assets/img/Line@2x.png 2x"/>
          </el-col>
          <el-col :span="14" class="home-card-text">
            <p class="home-card-title">合约调用频率</p>
            <p class="home-card-value">{{ contract_used_frequency }}</p>
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="4">
        <el-col class="home-block home-block-card">
          <el-col :span="10" style="line-height: 58px;">
            <img class="home-card-icon" src="../../assets/img/Line.png" srcset="../../assets/img/Line@2x.png 2x"/>
          </el-col>
          <el-col :span="14" class="home-card-text">
            <p class="home-card-title">用户数</p>
            <p class="home-card-value">{{ all_user_count }}</p>
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="16">
        <div class="home-block" style="padding: 20px; height: 425px;">
          <div class="home-title">
            <span class="icon iconfont iconNodecirculation"></span><span>节点数据流转图</span>
          </div>
          <div style="width:470px;margin: 49px auto 0">
            <img :src="fixurl" style="width:100%;">
          </div>
          <div class="home-block-RT">
            <div class="data-card-main" style="display: inline-block;">
              <div class="data-card-title data-card-red">今日新增存证数</div>
              <div class="data-card-text">{{evidence}}条</div>
            </div>
            <div class="data-card-main" style="display: inline-block;margin-left: 36px;">
              <div class="data-card-title data-card-blue">今日新增用证数</div>
              <div class="data-card-text">{{card}}条</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="home-block" style="height: 425px;">
          <el-tabs type="border-card" stretch class="home-block-tabs">
            <el-tab-pane label="存证动态">
              <superslide v-if="tables.length" :options="options" class="picMarquee-top">
                <div class="bd">
                  <ul class="picList">
                    <li v-for="item in tables" :key="item.key" class="file">
                      <div class="home-slide-li" >
                        <div class="home-slide-block" >
                          <div style="height: 40px;line-height: 40px;">
                            <div style="display: inline-block;width: 40px;height: 40px;text-align: center;vertical-align: middle">
                              <!--<span class="icon iconfont iconDefaultavatar"></span>-->
                              <!-- 使用默认头像 -->
                              <img src="../../assets/img/geren_profile.png" style="height: 40px;width: 40px;">
                            </div>
                            <span style="vertical-align: top;margin-left: 12px;">{{ item.owner }}</span>
                            <span style="float: right">{{ item.timestamp }}前</span>
                          </div>
                          <div style="line-height: 20px;margin-top: 10px;">
                            <span>在</span>
                            <span>计算节点A</span>
                            <span>存储</span>
                            <span style="color: #BF495A">区块</span>
                            <span style="color: #BF495A">#{{ item.block_number_int }}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </superslide>
            </el-tab-pane>
            <el-tab-pane label="查证动态">
              <superslide v-if="Verify.length" :options="options" class="picMarquee-top">
                <div class="bd">
                  <ul class="picList">
                    <li v-for="item in Verify" :key="item.key" class="file">
                      <div class="home-slide-li" >
                        <div class="home-slide-block" >
                          <div style="height: 40px;line-height: 40px;">
                            <div style="display: inline-block;width: 40px;height: 40px;text-align: center;vertical-align: middle">
                              <span class="icon iconfont iconDefaultavatar"></span>

                              <!--<img src="../../assets/img/u180.png" style="height: 40px;width: 40px;">-->
                            </div>
                            <span style="vertical-align: top;margin-left: 12px;">{{ item.owner }}</span>
                            <span style="float: right">{{ item.timestamp }}前</span>
                          </div>
                          <div style="line-height: 20px;margin-top: 10px;">
                            <span>在</span>
                            <span>计算节点A</span>
                            <span>存储</span>
                            <span style="color: #BF495A">区块</span>
                            <span style="color: #BF495A">#{{ item.block_number_int }}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </superslide>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="home-block" style="padding: 20px;">
          <el-table
            class="boya-table"
            :data="tableData2"
            style="width: 98%;clear:both;margin:auto;margin-top:20px;margin-bottom: 57px;"
            :row-style="common.rowStyle"
            :cell-style="cellStyle"
            empty-text="暂无数据，请重新查询">
            <el-table-column prop="num" width="80" label="序号"  show-overflow-tooltip/>
            <el-table-column prop="node_name" label="节点名" width="200"  show-overflow-tooltip/>
            <el-table-column prop="node_type" label="节点类型"  show-overflow-tooltip/>
            <el-table-column prop="block_number" label="区块号"  show-overflow-tooltip/>
            <el-table-column prop="node_status" width="400" label="节点状态"  show-overflow-tooltip/>
            <el-table-column prop="c_time" width="180" label="加入时间"  show-overflow-tooltip/>
          </el-table>
          <p class="boya-page">
            <el-pagination
              @size-change="onpage"
              @current-change="onchang"
              :current-page="pageNum2"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="pageSize2"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totals2">
            </el-pagination>
          </p>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="home-block" style="padding: 20px;height: 425px;">
          <div class="home-title">
            <span class="icon iconfont iconNodestorage"></span><span>节点存储概览图</span>
          </div>
          <div style="margin: 20px auto 0">
            <p v-show="tips" style="padding:1rem">{{ msg }}</p>
            <Data style="height: 345px;" />
          </div>
          <div class="home-block-RT">
            <div class="home-main-input">
              <Input v-model="searchKey">
              <Button slot="append" style="color: #fff" @click="topquery">搜索</Button>
              </Input>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="home-block" style="padding: 20px;height: 425px;">
          <div class="home-title">
            <span class="icon iconfont iconNodestorage"></span><span>各单位存证数据排行</span>
          </div>
          <div style="margin: 20px auto 0">

            <el-table
              class="boya-table"
              :data="list"
              style="width: 98%;clear:both;margin:auto;margin-top:20px;margin-bottom: 57px;"
              :row-style="common.rowStyle"
              empty-text="暂无数据，请存证">
              <el-table-column prop="numdatas" label="排名"  show-overflow-tooltip/>
              <el-table-column prop="username" label="企业名称"  show-overflow-tooltip/>
              <el-table-column prop="num" label="存证数量"  show-overflow-tooltip/>
              <el-table-column prop="pk" label="周环比"  show-overflow-tooltip/>
            </el-table>
            <p class="boya-page" style="width: calc(100% - 40px)">
              <el-pagination
                @current-change="onchang3"
                :current-page="pageNum3"
                layout="total, prev, pager, next, jumper"
                :total="totals3">
              </el-pagination>
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="home-block" style="padding: 20px;height: 425px;">
          <div class="home-title">
            <span class="icon iconfont iconNodestorage"></span><span>用证搜索关键词</span>
          </div>
          <div style="margin: 20px auto 0">
            <Say style="height: 328px;" />
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="home-block" style="padding: 20px;height: 425px;">
          <div class="home-title">
            <span class="icon iconfont iconNodestorage"></span><span>合约调用趋势</span>
          </div>
          <div style="margin: 20px auto 0">
            <ContractLine style="height: 328px;" />
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="home-block" style="padding: 20px;height: 425px;">
          <div class="home-title">
            <span class="icon iconfont iconNodestorage"></span><span>合约调用情况</span>
          </div>
          <div style="margin: 20px auto 0">
            <ContractPie style="height: 328px;" />
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="home-block home-block-bottom" style="padding: 20px;height: 425px;">
          <div class="home-title">
            <span class="icon iconfont iconNodestorage"></span><span>近一周活跃用户趋势表</span>
          </div>
          <div style="margin: 20px auto 0">
            <Week />
          </div>
        </div>
      </el-col>
    </el-row>
    <Modal v-model="modal1" width="900" class="home-modal">
      <div class="home-identity-modal">
        <div style="margin-bottom: 64px;" class="home-modal-title" >请选择登录身份</div>
        <div>
          <div class="home-identity-block" style="margin-right: 125px;">
            <img v-show="vertical === '1'" src="../../assets/img/计算几点节点用户_选中@1x.png"
                 srcset="../../assets/img/计算几点节点用户_选中@2x.png 2x,../../assets/img/计算几点节点用户_选中@3x.png 3x"/>
            <img v-show="vertical === '2'" src="../../assets/img/计算节点用户_未选中@1x.png"
                 srcset="../../assets/img/计算节点用户_未选中@2x.png 2x,../../assets/img/计算节点用户_未选中@3x.png 3x"/>
            <div @click="vertical = '1'" style="margin-top: 56px;" class="home-modal-text">
              <span class="icon iconfont iconactivated" :class="vertical === '1'?'is-selected':''" style="margin-right: 10px;"></span><span>监管节点用户</span>
            </div>
          </div>
          <div class="home-identity-block" >
            <img v-show="vertical === '2'" src="../../assets/img/监管节点用户_选中@1x.png"
                 srcset="../../assets/img/监管节点用户_选中@2x.png 2x,../../assets/img/监管节点用户_选中@3x.png 3x"/>
            <img v-show="vertical === '1'" src="../../assets/img/监管节点用户_未选中@1x.png"
                 srcset="../../assets/img/监管节点用户_未选中@2x.png 2x,../../assets/img/监管节点用户_未选中@3x.png 3x"/>
            <div @click="vertical = '2'" style="margin-top: 56px;" class="home-modal-text">
              <span class="icon iconfont iconactivated " :class="vertical === '2'?'is-selected':''" style="margin-right: 10px;"></span><span>计算节点用户</span>
            </div>
          </div>
          <div style="margin-top: 110px;">
            <div class="main-btn-container" style="margin: 0 auto; width: 102px;">
              <Button class="btn-reset" :loading="loading" @click="change">
                <span v-if="!loading">开始使用</span>
                <span v-else>切换中</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    <div class="right_cont" style="margin-top:5px">
      <!--<div class="top_cont">-->
        <!--<el-row>-->
          <!--<el-col :span="15">-->
            <!--<el-col class="hair"><img :src="imguser"></el-col>-->
            <!--<el-col :span="20" style="margin-left:2rem">-->
              <!--<p class="every">{{ user_name }},祝你开心每一天</p>-->
              <!--<Button type="primary" style="border-radius: 14px;padding:3px 14px 3px 16px;margin-top:5px;font-size:12px;" @click="modal1 = true">用户类型变更</Button>-->
            <!--</el-col>-->
            <!--<el-col :span="20" style="margin-left:2rem">-->
              <!--<p class="people"><span>{{ user_type }}</span><span>|</span><span>{{ node_name }}{{ organization }}</span></p>-->
            <!--</el-col>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
      <!--<div class="bottom_cont">-->
        <!--<div class="noun">-->
          <!--<el-row :gutter="10">-->
            <!--<el-col :span="10">-->
              <!--<div class="cont_center">-->
                <!--<p style="font-size: 14px;padding:0.7rem 1rem 1rem">各单位存证数据排行</p>-->
              <!--</div>-->
              <!--<div class="record" style="height:22.5rem">-->
                <!--<Noun />-->
              <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="14" style="float:right;">-->
              <!--<div class="cont_center">-->
                <!--<p style="font-size: 14px;padding:0.7rem 1rem 1rem">用证搜索关键词</p>-->
              <!--</div>-->
              <!--<div class="record">-->
                <!--<Say style="height: 328px;" />-->
              <!--</div>-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</div>-->
        <!--<div class="noun">-->
          <!--<el-row :gutter="10">-->
            <!--<el-col :span="10">-->
              <!--<div class="cont_center">-->
                <!--<p style="font-size: 14px;padding:0.7rem 1rem 1rem">合约调用趋势</p>-->
              <!--</div>-->
              <!--<div class="record" style="height:22.5rem">-->
                <!--<ContractLine style="height: 328px;" />-->
              <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="14" style="float:right;">-->
              <!--<div class="cont_center">-->
                <!--<p style="font-size: 14px;padding:0.7rem 1rem 1rem">合约调用情况</p>-->
              <!--</div>-->
              <!--<div class="record">-->
                <!--<ContractPie style="height: 328px;" />-->
              <!--</div>-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</div>-->

        <!--<div class="week">-->
          <!--<div class="cont_center">-->
            <!--<p style="font-size: 14px;padding:0.7rem 1rem 1rem">近一周活跃用户趋势表</p>-->
          <!--</div>-->
          <!--<Week />-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>

</template>

<script>
import Data from './data/data'
import Noun from './data/noun'
import Say from './data/say'
import Week from './data/week'
import ContractPie from './data/contract-used-pie'
import ContractLine from './data/contract-line'
import Transfer from '../../api/transfer.js'
export default {
  name: 'Home',
  components: {
    Data,
    Noun,
    Say,
    Week,
    ContractPie,
    ContractLine
  },
  computed: {
    isYiji() {
      let value = sessionStorage.getItem('key')
      return JSON.parse(value) === 2
    },
  },
  data() {
    return {
      hackReset: true,
      effect: 'topMarquee',
      vis: 6,
      interTime: 50,
      opp: false,
      pnLoop: true,
      mouseOverStop: false,
      options: { mainCell: '.bd ul', autoPlay: true, effect: 'topMarquee', vis: 8, interTime: 50 },
      tips: false,
      existing: false,
      verifys: false,
      msg: '',
      existingmsg: '',
      verifymsg: '',
      // tab数据
      all_data_count: '',
      all_user_count: '',
      contract_count: '',
      contract_used_count: '',
      contract_used_frequency: '',
      evidence_count: '',
      // 默认单选
      vertical: '1',
      user_name: '',
      username: '',
      node_name: '',
      organization: '',
      cont: '',
      select1: 'day',
      // 对话框
      modal1: false,
      loading: false,
      user_type: '',
      successed_cnt: '',
      evidence: '',
      card: '',
      all_cnt: '',
      user_total: '',
      yesterday_user: '',
      //  词云
      cloud: [],
      lately: '',
      //  下一页
      pageNum: '1',
      list: [],
      node: '',
      pre_day_cnt: '',
      today_cnt: '',
      sum_cnt: '',
      teamdata: '',
      imguser: '',
      tables: [],
      Verify: [],
      // tableData: [],
      //节点列表
      pageNum2: 1,
      pageSize2:10,
      totals2:'',
      tableData2: [],
      cellStyle: this.common.cellStyle('node_status',{
        '开发中': 1,
        '正常': 0,
        '异常': 2,
      },4 ),
      searchKey: '',

      pageNum3: 1,
      totals3:'',

      pageNums: 1,
      pageSize: 7,
      manage_page: 1,
      manage_Size: 7,
      tab_back: require('../../assets/img/u4179.png'),
      fixurl: require('../../assets/img/circulation@3x.png')
    }
  },
  watch: {
    effect(val) {
      console.log('effect:' + val)
      this.options.effect = val
      // this.hackResetFun()
    },
    vis(val) {
      console.log('vis:' + val)
      this.options.vis = val
      // this.hackResetFun()
    },
    interTime(val) {
      console.log('interTime:' + val)
      this.options.interTime = val
      // this.hackResetFun()
    },
    opp(val) {
      console.log('opp:' + val)
      this.options.opp = val
      // this.hackResetFun()
    },
    mouseOverStop(val) {
      console.log('mouseOverStop:' + val)
      this.options.mouseOverStop = val
      // this.hackResetFun()
    },
    pnLoop(val) {
      console.log('pnLoop:' + val)
      this.options.pnLoop = val
      // this.hackResetFun()
    }
  },
  mounted() {
    //  展示用户信息
    this.data()
    this.num()
    this.getNodeData()
    this.getSubuserRank()
    // this.task()
    // window.onresize = () => {
    //   this.$refs.myChange.my() // 调用子组件的功能 - 图表伸缩响应
    // }
  },
  methods: {
    // 分页
    onchang(pageNum) {
      this.pageNums = pageNum
      this.num()
    },
    manage_onchang(pageNum) {
      this.manage_page = pageNum
      this.num()
    },
    // 获取用户信息
    data() {
      this.http.userinfo().then(res => {
        // console.log(res)
        if (res.data.code == '0') {
          this.user_name = res.data.data.user_name
          this.user_type = res.data.data.user_type
          this.node_name = res.data.data.node_name
          this.organization = res.data.data.organization
          this.imguser = res.data.data.avatar
          this.vertical = res.data.data.user_type_int.toString()
          this.teamdata = res.data.data.e_time.substr(0, 10)
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      // 统计数据
      this.http.operaterdata().then(res => {
        // console.log(res)
        if (res.status == '200') {
          this.sum_cnt = res.data.data.sum_cnt
          this.today_cnt = res.data.data.today_cnt
          this.pre_day_cnt = res.data.data.pre_day_cnt
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      // 区块链数据
      this.http.contractstatistics().then(res => {
          console.log(res)
        if (res.status == '200') {
          this.all_data_count = res.data.data.all_data_count
          this.all_user_count = res.data.data.all_user_count
          this.contract_count = res.data.data.contract_count
          this.contract_used_count = res.data.data.contract_used_count
          this.contract_used_frequency = res.data.data.contract_used_frequency
          this.evidence_count = res.data.data.evidence_count
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      // 节点数据流转
      this.http.nodedata().then(res => {
        if (res.status == '200') {
          this.evidence = res.data.data.today_upload_cnt
          this.card = res.data.data.today_download_cnt
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      //  用证搜索关键词
      this.http.cloudsearchkeys().then(res => {
        // console.log(res)
        if (res.status == '200') {
          var echardata = res.data.data.rank_data_list
          // console.log(echardata)
          var echartable = []
          for (var y in echardata) {
            if (echardata[y] != null) {
              var json = {
                name: echardata[y].name,
                value: echardata[y].value,
                textStyle: echardata[y].textStyle
              }
              echartable.push(json)
            }
          }
          this.cloud = echartable
          Transfer.$emit('say', this.cloud)// 提交中转站
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      //  用户数量统计
      this.http.usercount().then(res => {
        // console.log(res)
        if (res.data.code == '0') {
          var data = res.data.data
          this.user_total = res.data.data.user_total
          Transfer.$emit('weekday', data) // 提交中转站

          this.yesterday_user = res.data.data.yesterday_user
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      //  近一周活跃折线图
      this.http.useractivity().then(res => {
        // console.log(res)
        if (res.data.code == '0') {
          this.lately = res.data.data
          Transfer.$emit('latelys', this.lately)// 提交中转站
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      var param = {
        'data_type':'1',
        'interval_days':'1',
        'x_num':'7',
      }
      //  近一周合约调用趋势
      this.http.echartbrokenline(param).then(res => {
        console.log(res)
        if (res.data.code == '0') {
          this.lately = res.data.data
          Transfer.$emit('contract_line', this.lately)// 提交中转站
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      //  合约调用情况
      this.http.piechart().then(res => {
        if (res.data.code == '0') {
          this.pie_contract = res.data.data
          Transfer.$emit('pie_contract', this.pie_contract)// 提交中转站
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
    },
    // 点击变更按钮状态
    change() {
      this.loading = true
      // this.modal_loading = true
      setTimeout(() => {
        this.http.userchange({ new_user_type: this.vertical }).then(res => {
          // console.log(res)
          if (res.data.code == '0') {
            console.log(res)
            var data = res.data.data.new_user_type
            this.modal1 = false
            // console.log(typeof (data))
            sessionStorage.setItem('key', JSON.stringify(data))
            this.$Message.success('更改用户成功')
            this.$router.go(0)
          } else {
            this.http.messageFun('error', res.data.msg)
          }
          this.loading = false
        })
        // this.modal_loading = false
      }, 2000)
    },
    numadd() {
      this.pageNum == this.pageNum++
      this.getSubuserRank()
    },
    num() {
      // 存证动态
      var param = {
        pagination: this.pageNums,
        limit: this.pageSize
      }
      // console.log(param)
      this.http.uploadevidences().then(res => {
        // console.log(res)
        if (res.data.code == '0') {
          var upload_block_list = res.data.data.upload_block_list
          var showdata = []
          for (var i in upload_block_list) {
            if (upload_block_list[i] != null) {
              var tell = this.time.timestampToTime(upload_block_list[i].timestamp * 1000, 'DT1')
              upload_block_list[i].timestamp = this.time.timeDifference(tell, 'DT5')
              var name = ''
              if (upload_block_list[i].owner.length > 10) {
                name = upload_block_list[i].owner.substr(0, 10) + '...'
              } else {
                name = upload_block_list[i].owner
              }
              var json = {
                owner: name,
                workname: '存储',
                block_number_int: '#' + upload_block_list[i].block_number_int,
                timestamp: upload_block_list[i].timestamp
              }
              showdata.push(json)
            }
          }
          this.tables = showdata
        } else {
          this.existing = true
          this.existingmsg = res.data.msg
          // this.http.messageFun('error', res.data.msg)
        }
      })
      //   查证状态
      // var params = {
      //   pagination: this.manage_page,
      //   limit: this.manage_Size
      // };
      this.http.downloadevidences().then(res => {
        if (res.data.code == '0') {
          var down_block_list = res.data.data.down_block_list
          var Verifydata = []
          for (var t in down_block_list) {
            if (down_block_list[t] != null) {
              var tells = this.time.timestampToTime(down_block_list[t].timestamp * 1000, 'DT1')
              down_block_list[t].timestamp = this.time.timeDifference(tells, 'DT5')
              var name = ''
              if (down_block_list[t].owner.length > 20) {
                name = down_block_list[t].owner.substr(0, 20) + '...'
              } else {
                name = down_block_list[t].owner
              }
              var jsons = {
                name: name,
                workname: '存储',
                num: '#' + down_block_list[t].block_number_int,
                vtime: down_block_list[t].timestamp
              }
              Verifydata.push(jsons)
            }
          }
          this.Verify = Verifydata
        } else {
          this.verifys = true
          this.verifymsg = res.data.msg
        }
      })
      //  节点存储概览图
      this.http.nodeechartsdata({ months_num: '3' }).then(res => {
        // console.log(res)
        if (res.data.code == '0') {
          this.node = res.data.data.option
          Transfer.$emit('data', this.node)// 提交中转站
        } else if (res.data.code == '2009') {
          this.tips = true
          this.msg = res.data.msg
          this.node = res.data.data.option
          Transfer.$emit('data', this.node)// 提交中转站
          // this.http.messageFun('error',res.data.msg)
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })

      var value = Transfer.Tips
      var phone = Transfer.phone
      if (value) {
        var num = parseInt(value.substr(0, value.length - 1))
      } else {
      }
      if (num < 31) {
        this.hometips = '还有' + value + '系统到期，请提前联系管理员：' + phone
        this.$message({
          showClose: true,
          message: this.hometips,
          type: 'warning',
          duration: 0
        })
      }
    },
    //    各单位存证数据排行
    onchang3(pageNum) {
      this.pageNum3 = pageNum
      this.getSubuserRank()
    },
    getSubuserRank() {
      this.http.subuserrank({ pagination: this.pageNum3, limit: '5' }).then(res => {
        if (res.status == '200') {
          var weekdata = res.data.data.week_change_data_list
          this.totals3 = res.data.data.all_cnt
          var weektable = []
          var numdata = (this.pageNum - 1) * 10
          var nums = 1
          for (var y in weekdata) {
            if (weekdata[y] != null) {
              // console.log(weekdata[y].name.length)
              var name = ''
              if (weekdata[y].name == null) {
                name = weekdata[y].name
              } else {
                if (weekdata[y].name.length > 4) {
                  name = weekdata[y].name.substring(0, 4) + '...'
                } else {
                  name = weekdata[y].name
                }
              }
              var json = {
                numdatas: numdata + nums,
                username: weekdata[y].name,
                name: name,
                num: weekdata[y].cnt,
                pk: weekdata[y].change_data
              }
              nums++
              weektable.push(json)
            }
          }
          this.list = weektable
//          Transfer.$emit('noun', this.list)// 提交中转站
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
    },
    // 获取节点列表
    onchang(pageNum) {
      this.pageNum2 = pageNum
      this.getNodeData()
    },
    onpage(pageSize) {
      this.pageSize2 = pageSize
      this.getNodeData()
    },
    getNodeData() {
      var param = {
        'pagination': this.pageNum2,
        'limit': this.pageSize2
      }
      this.http.nodes(param).then(res => {
        console.log(res)
        if (res.data.code == '0') {
          this.totals2 = res.data.data.all_cnt
          var list = res.data.data.node_list
          var newdata = []
          var num = (this.pageNum - 1) * 10
          var nums = 1
          var user_type = ''
          for (var item of list) {
            if (item != null) {
              var json = {
                num: num + nums,
                node_name: item.node_name,
                node_type: item.node_type,
                block_number: item.block_number,
                node_status: item.node_status,
                c_time: item.c_time.substr(0, 10)
              }
              nums++
              newdata.push(json)
            }
          }
          this.tableData2 = newdata
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
    },
    // 搜索
    topquery() {
      this.http.search({ search_word: this.searchKey }).then(res => {
        if (res.status == '200') {
          var isnum = /^\d+$/.test(this.cont)
          if (this.cont.slice(0, 2) == '0x') {
            this.$router.push({
              name: 'details', // 跳转的页面
              params: {
                'detailsdata': this.cont // 我们要传递的参数
              }
            })
          } else if (isnum == true) {
            // console.log(res)
            var data = res.data.data.value
            // console.log(data)
            this.$router.push({
              name: 'block', // 跳转的页面
              params: {
                'blockdata': data // 我们要传递的参数
              }
            })
          } else {
            // console.log(res)
            this.$router.push({
              name: 'data_census', // 跳转的页面
              params: {
                'censusdata': this.cont // 我们要传递的参数
              }
            })
          }
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
    }
  }
}
</script>

<style lang="less">
  .table{
    margin-bottom: 1rem;
    span{
      display: inline-block;
      width: 27%;
      font-size:13px;
    }
    span:first-child{
      /*background:#314659;*/
      width: 22%;
      margin-right: 1rem;
      border-radius: 50%;
      /*text-align: center;*/
      /*color:#fff*/
      margin-left:5%
    }
  }
  body .el-table th.gutter{
    display: table-cell!important;
  }
</style>
