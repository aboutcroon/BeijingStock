<template>
  <div class="boya-user" style="margin:34px 20px; min-height: calc(100vh - 222px)">
    <div class="back1"> </div>
    <div class="user-card2">
      <el-tabs v-model="tabPosition" @tab-click="tabClick">
        <el-tab-pane label="初始登记审批" name="1">
          <div class="boya-view" style="min-height: calc(100vh - 510px)">
            <!-- <el-row style="width: 100%;padding-top: 20px">
              <el-col :span="24">
                <el-col class="main-filter-container" >
                  <span class="icon iconfont iconfilter filter-button " @click="showFormFilter = !showFormFilter"><span>筛选</span></span>
                </el-col>
                <el-col class="main-input-container" >
                  <el-col class="normal-input">
                    <span class="icon iconfont iconIcon-search "></span>
                    <Input v-model="formItem.keyword" clearable placeholder="请输入搜索内容" class="search-input" />
                  </el-col>
                </el-col>
                <el-col class="main-btn-container single-btn" >
                  <Button class="btn-search" @click="getFormData(1)">查询</Button>
                </el-col>
              </el-col>
            </el-row> -->
            <collapse-transition :collapseData="formCollapseData" :showFilter="showFormFilter" :formData="formItem" @collapseFun="formCollapseFun" style="width:100%;padding-top: 20px"/>
            <el-table
              class="boya-table"
              :data="formTableData"
              style="width: 100%;clear:both;margin-top:0px;margin-bottom: 137px;"
              :row-style="common.rowStyle"
              empty-text="暂无数据，请重新查询">
              <el-table-column prop="audit_type" label="申请信息" show-overflow-tooltip></el-table-column>
              <el-table-column prop="u_time" label="时间" show-overflow-tooltip></el-table-column>
              <el-table-column prop="audit_status" label="状态" show-overflow-tooltip></el-table-column>
              <el-table-column prop="latest_hash" label="哈希" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-tooltip v-if="scope.row.state1" class="item" effect="dark" content="查看" placement="top-start">
                    <span class="icon iconfont iconrenwu" @click="$router.push('form-detail-admin')"></span>
                  </el-tooltip>
                  <el-tooltip v-if="scope.row.state1" class="item" effect="dark" content="审核" placement="top-start">
                    <span class="icon iconfont iconrenwu" @click="$router.push('audit')"></span>
                  </el-tooltip>
                  <el-tooltip v-if="scope.row.state2" class="item" effect="dark" content="下载" placement="top-start">
                    <span class="icon iconfont iconrenwu" @click="doDownload(scope.$index, scope.row)" >下载</span>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
            <p class="boya-page">
              <el-pagination
                @size-change="pnFormPage"
                @current-change="pnFormChange"
                :current-page="formItem.pageNum"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="formItem.limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="formTotal">
              </el-pagination>
            </p>
          </div>
        </el-tab-pane >
        <el-tab-pane  label="托管产品登记" name="2">
          <div class="boya-view" style="min-height: calc(100vh - 510px)">
            <!-- <el-row style="width: 100%;padding-top: 20px">
              <el-col :span="24">
                <el-col class="main-filter-container" >
                  <span class="icon iconfont iconfilter filter-button " @click="showTaskFilter = !showTaskFilter"><span>筛选</span></span>
                </el-col>
                <el-col class="main-input-container" >
                  <el-col class="normal-input">
                    <span class="icon iconfont iconIcon-search "></span>
                    <Input v-model="taskItem.keyword" clearable placeholder="请输入搜索内容" class="search-input" />
                  </el-col>
                </el-col>
                <el-col class="main-btn-container single-btn" >
                  <Button class="btn-search" @click="getTaskData(1)">查询</Button>
                </el-col>
              </el-col>
            </el-row> -->
            <collapse-transition :collapseData="taskCollapseData" :showFilter="showTaskFilter" :formData="taskItem" @collapseFun="taskCollapseFun" style="width:100%;padding-top: 20px"/>
            <el-table
              class="boya-table"
              :data="taskTableData"
              style="width: 100%;clear:both;margin-top:0px;margin-bottom: 137px;"
              :row-style="common.rowStyle"
              empty-text="暂无数据，请重新查询">
              <el-table-column prop="info" label="申请信息" show-overflow-tooltip></el-table-column>
              <el-table-column prop="block" label="时间" show-overflow-tooltip></el-table-column>
              <el-table-column prop="node" label="状态" show-overflow-tooltip></el-table-column>
              <el-table-column prop="name" label="哈希" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-tooltip v-if="scope.row.state1" class="item" effect="dark" content="办理" placement="top-start">
                    <span class="icon iconfont iconrenwu">办理</span>
                  </el-tooltip>
                  <el-tooltip v-if="scope.row.state2" class="item" effect="dark" content="下载" placement="top-start">
                    <span class="icon iconfont iconrenwu" @click="doDownload(scope.$index, scope.row)" >下载</span>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
            <p class="boya-page">
              <el-pagination
                @size-change="pnTaskPage"
                @current-change="pnTaskChange"
                :current-page="taskItem.pageNum"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="taskItem.limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="taskTotal">
              </el-pagination>
            </p>
          </div>
        </el-tab-pane >
      </el-tabs>
    </div>
    <div class="user-card1">
      <div class="top_head">
        <div class="img-head">
          <img src="../../assets/img/super_admin.png">
          <!--<img v-if="imageUrl" :src="imageUrl">-->
        </div>
        <div class="card1-btn-text" style="margin-top:14px">{{user_name}}</div>
        <el-upload
          v-show="false"
          ref="upload"
          class="upload-demo"
          action="/beaas/api/avatar_up/"
          :on-preview="handlePreview"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          style="margin-top:26px">
          <div class="card1-btn-text"  @click="submitUpload">上传logo</div>
        </el-upload>
      </div>
      <div class="card1-main">
        <div class="card1-title">单位注册地址</div>
        <div class="card1-text">{{address}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import collapseTransition from '@/components/collapse'// 筛选
  export default {
    name: 'admin',
    components: {
      collapseTransition,
    },
    computed: {
      getPermission(){
        return sessionStorage.getItem('key')
      }
    },
    data () {
      return {
        formTotal: 0,
        taskTotal: 0,
        formItem:{
          keyword: '',
          limit: 10,
          pagination: 0,
          type: '',
        },
        taskItem:{
          keyword: '',
          limit: 10,
          pagination: 0,
          type: '',
        },
        formTableData: [],
        taskTableData: [],
        showFormFilter: false,
        showTaskFilter: false,
        formCollapseData:[],
        taskCollapseData:[],
        // 显示信息
        user_name: '管理员用户',
        address: '北京市海淀区西二旗辉煌国际39号',
        //标签页
        tabPosition:'1',
      }
    },
    mounted(){
      this.getFormData(1)
      this.getTaskData()
    },
    methods: {
      // 页面跳转函数
      pnFormChange(pagination){
        this.formItem.pagination = pagination
        this.getFormData()
      },
      pnFormPage(pageSize){
        this.formItem.limit = pageSize
        this.getFormData()
      },
      pnTaskChange(pagination){
        this.taskItem.pagination = pagination
        this.selectGet()
      },
      pnTaskPage(pageSize){
        this.taskItem.limit = pageSize
        this.selectGet()
      },
      // 上传头像
      handlePreview(file) {
        console.log(file);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = ['image/jpeg','image/png','image/gif'].includes(file.type);  //包含类型
        if (!isJPG) {
          this.$message.error('上传头像图片不属于 JPG 、PNG、GIF格式!');
        }
        return isJPG ;
      },
      // 标签页切换
      tabClick() {

      },
      // 获取申请单数据
      getFormData(index) {
        if (index) {
          this.formItem.pagination = 1
        }
        const param = this.formItem
        this.http.recordlist(param).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.formTotal = res.data.data.record_count
            let list = res.data.data.record_list
            let newData = []
            for(let item of list) {
              var json = {
                audit_type: item.audit_type,
                u_time: this.time.timestampToTime(item.u_time * 1000, 'DT1') ,
                audit_status: item.audit_status,
                latest_hash: item.latest_hash,
                uscc: item.uscc,
                state1: true,
              }
              newData.push(json)
            }
            this.formTableData = newData
          } else {
            this.http.messageFun('error', res.data.msg)
          }
        })
      },
      // 获取代办任务数据
      getTaskData(index) {
        this.taskTableData.push({
          info: '111',
          node: '222',
          block: '333',
          name: '444',
          id: '1',
          state1: true,
          state2: false,
        })
        this.taskTableData.push({
          info: '111',
          node: '222',
          block: '333',
          name: '444',
          id: '2',
          state1: false,
          state2: true,
        })
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      /** 筛选调用的方法 **/
      formCollapseFun(type, value) {
        this.formItem[type] = value
        this.formItem.pagination = 1
        this.selectGet()
      },
      taskCollapseFun(type, value) {
        this.taskItem[type] = value
        this.taskItem.pagination = 1
        this.selectGet()
      },
      // 跳转下载页
      doDownload(index, row) {
        this.$router.push({
          name: 'user_download',
          query: {
            'id': row.id
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import './index.less';
</style>
<style scope="scope">
#tab-1,#tab-2{
  font-size: 18px;
  color:#9CA8BF;
}
.el-tabs__item.is-top.is-active{
  color:#555466 !important;
}
.el-tabs__active-bar{
  background-color:#3B3783;
}
</style>
