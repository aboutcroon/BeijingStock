<style lang="less">
  @import './detail.less';
</style>
<template>
  <div class="boya-detail">
    <el-row style="margin:10px;" :gutter="20">
      <el-col :span="16">
        <div class="detail-title">交易详情</div>
        <div class="detail-container">
          <p class="test-title" style="margin-top: 5px;">交易哈希</p>
          <p style="margin-bottom: 12px"><input id="danhao" v-model="transaction_hash" type="text" style="width:64%"><svg-icon icon-class="复制_copy21" @click="copy" /></p>
          <p class="test-title">交易时间</p>
          <p><span>{{ timestamp }}</span> <span>{{ min }}</span></p>
          <el-divider> </el-divider>
          <div class="detail-info">
            <div class="detail-info-tag tag-yellow">区块哈希</div><Span>{{ block_hash }}</Span>
          </div>
          <div class="detail-info">
            <div class="detail-info-tag tag-green">发送地址</div><Span>{{ account_from }}</Span>
          </div>
          <div class="detail-info">
            <div class="detail-info-tag tag-red">接收地址</div><Span>{{ account_to }}</Span>
          </div>
          <div class="detail-info">
            <div class="detail-info-tag tag-grey">发送序号</div><Span>{{ nonce_int }}</Span>
          </div>
        </div>
      </el-col>
      <el-col :span="8" style="float: right;padding-right:0">
        <div class="detail-title">节点信息</div>
        <div class="detail-container" style="background: #fff;height:18.9rem;padding-top:0.8rem;">
          <el-table
            class="boya-table"
            :data="tableDatas"
            style="width: 100%;clear:both;"
            :row-style="common.rowStyle"
            empty-text="暂无数据，请重新查询">
            <el-table-column prop="type" width="100" label="节点类型"  show-overflow-tooltip/>
            <el-table-column prop="workname" label="节点名称" show-overflow-tooltip/>

          </el-table>

          <p class="boya-page" style="position: relative; bottom: 0; margin-top: 15px;">
            <el-pagination
              @current-change="onchang"
              :current-page="pageNum"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="pageSize"
              layout="prev, pager, next, jumper"
              :total="num">
            </el-pagination>
          </p>
          <!--<p style="text-align: right"><Page :total="num" :current="pageNum" :page-size="pageSize" show-elevator size="small" style="margin-top: 1rem" @on-change="onchang" /></p>-->
        </div>
      </el-col>
    </el-row>
    <div class="bottom-table">
      <div class="detail-title">交易数据</div>
      <div class="detail-container">
        <div class="detail-data-block" style="margin-bottom: 20px;">
          <div class="detail-data-title">上链数据(原始)</div>
          <span>{{ input }}</span>
        </div>
        <div class="detail-data-block"  style="margin-bottom: 20px;">
          <div class="detail-data-title">上链数据(UTF-8)</div>
          <span>{{ input_decode }}</span>
        </div>
        <div class="detail-data-block">
          <div class="detail-data-title">上链数据(格式化)</div>
          <el-table
            class="boya-table"
            :data="tableData"
            style="width: 100%;clear:both;"
            :row-style="common.rowStyleGrey"
            :header-cell-style="{background:'#EEF0F4'}"
            empty-text="暂无数据，请重新查询">
            <el-table-column prop="name1" label="一级字段名称" width="200" show-overflow-tooltip/>
            <el-table-column prop="record" label="上链数据" show-overflow-tooltip/>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      num: 0,
      pageNum: 1,
      pageSize: 5,
      transaction_hash: '',
      block_hash: '',
      account_from: '',
      account_to: '',
      timestamp: '',
      min: '',
      nonce_int: '',
      input: '',
      input_decode: '',
      pagination: 1,
      tableDatas: [],
      tableData: []
    }
  },
  mounted() {
    this.getParams()
    this.node()
  },
  methods: {
    // 分页
    onchang(pageNum) {
      this.pageNum = pageNum
      this.node()
    },
    // 复制
    copy() {
      document.getElementById('danhao').select() // 选择对象
      document.execCommand('Copy') // 执行浏览器复制命令
      alert('复制成功')
    },
    getParams() {
      // 跳转页面传值
      var detail = this.$route.query.detailsdata
      // console.log(detail)
      // 交易详情
      this.http.transactioninfo({ transaction_hash: detail }).then(res => {
        // console.log(res)
        if (res.data.code == '0') {
          this.transaction_hash = res.data.data.transaction_hash
          this.block_hash = res.data.data.block_hash
          this.account_to = res.data.data.account_to
          this.account_from = res.data.data.account_from
          this.timestamp = this.time.timestampToTime(res.data.data.timestamp * 1000, 'DT2')
          this.min = this.time.timestampToTime(res.data.data.timestamp * 1000, 'DT1').substr(10, 16)
          this.nonce_int = res.data.data.nonce_int
          this.input = res.data.data.input
          // var obj = JSON.parse(this.input_decode);
          // var obj = .replace("\\","")
          // console.log(obj)
          this.input_decode = JSON.parse(res.data.data.input_decode)

          var data = []
          for (var key in this.input_decode) {
            // console.log(typeof(JSON.stringify(obj[key])))
            if (typeof (this.input_decode[key]) === 'object') {
              this.input_decode[key] = JSON.stringify(this.input_decode[key])
            }
            // console.log(JSON.stringify(obj[key]))
            var json = {
              name1: key,
              record: this.input_decode[key]
            }
            data.push(json)
          }
          this.tableData = data
          // console.log(obj)
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
      // 上链
      this.http.checkevidenceupload({ transaction_hash: detail }).then(res => {
        // console.log(res)
      })
    },
    node() {
      // 节点信息
      this.http.nodes({ pagination: this.pageNum, limit: this.pageSize }).then(res => {
        // console.log(res)
        if (res.status == '200') {
          var list = res.data.data.node_list
          this.num = res.data.data.all_cnt
          // console.log(list)
          var newdata = []
          for (var index of list) {
            if (index != null) {
              var json = {
                type: index.node_type,
                workname: index.node_name
              }
              newdata.push(json)
            }
          }
          this.tableDatas = newdata
        } else {
          this.http.messageFun('error', res.data.msg)
        }
      })
    }
  }
}
</script>

<style lang="less">
  #danhao{
    border: 0;
    margin-right:1rem;
  }
</style>
