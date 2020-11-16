
<template>
  <div class="right_cont">
    <div class="boya-view">
      <el-table
        class="boya-table"
        :data="tableData"
        style="width: 100%;clear:both;margin-top:20px;margin-bottom: 137px;"
        :row-style="common.rowStyle"
        empty-text="暂无数据，请刷新">
        <el-table-column prop="name" width="185" label="附件名称" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <i :href="scope.row.url" >
              <el-tooltip class="item" effect="dark" content="下载" placement="top-start">
                <span class="icon iconfont icondownload"></span>
              </el-tooltip>
            </i>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    inject: ['reload'],
    name: 'user_download',
    data() {
      return {
        tableData: [],
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.getUserData()
        const data = {
          excel_url: this.$route.query.excel_url,
          id_back_url: this.$route.query.id_back_url,
          id_front_url: this.$route.query.id_front_url,
          license_url: this.$route.query.license_url,
          logo_url: this.$route.query.logo_url,
        }
        this.tableData = []
        this.tableData.push({
          name: '股东名称',
          url: data.excel_url,
        })
        this.tableData.push({
          name: '经办人身份证正面',
          url: data.id_front_url,
        })
        this.tableData.push({
          name: '经办人身份证背面',
          url: data.id_back_url,
        })
        this.tableData.push({
          name: '营业执照',
          url: data.license_url,
        })
        this.tableData.push({
          name: '企业logo',
          url: data.logo_url,
        })
      },
      getUserData() {
        const param = {
          uscc: this.$route.query.uscc
        }
        this.http.fetchdata(param).then(res => {
          console.log(res)
//          if (res.data.code === 0) {
//            this.formTotal = res.data.data.record_count
//            let list = res.data.data.record_list
//            let newData = []
//            for(let item of list) {
//              var json = {
//                audit_type: item.audit_type,
//                u_time: item.u_time,
//                audit_status: item.audit_status,
//                latest_hash: item.latest_hash,
//                uscc: item.uscc,
//                state1: true,
//              }
//              newData.push(json)
//            }
//            this.formTableData = newData
//          } else {
//            this.http.messageFun('error', res.data.msg)
//          }
        })
      }
    }
  }
</script>

<style lang="less">
</style>
