<template>
  <div>
    <el-table
      class="chief-table"
      :data="tableData.slice((pageNum - 1) * pageSize, pageNum * pageSize)"
      style="width: 100%"
      :row-style="common.rowStyle"
      :cell-style="cellStyle"
      empty-text="暂无数据，请点击新增">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="cer_type"
        label="证件类型">
      </el-table-column>
      <el-table-column
        prop="cert_number"
        label="证件号">
      </el-table-column>
      <el-table-column
        prop="birth_date"
        label="出生日期">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="is_legal_person"
        label="法人代表标识"
        width="135px">
      </el-table-column>
      <el-table-column
        prop="post"
        label="职务">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话">
      </el-table-column>
    </el-table>
    <p class="boya-page">
      <el-pagination
        @size-change="onpage"
        @current-change="onchange"
        :current-page="pageNum"
        :page-sizes="[5, 7]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        style="margin-top: -100px; margin-left: -300px;">
      </el-pagination>
    </p>
    <el-drawer
      :visible.sync="drawer"
      custom-class="boya-drawer"
      direction="rtl"
      :with-header="false"
      :append-to-body="false"
      :modal-append-to-body="false"
      size="28%"
      style="min-width: 392px"
      :before-close="handleClose"
    >
      <div class="drawer-title">
        <span class="icon iconfont iconadd1"></span>
        <span>新增用户</span>
      </div>
      <Tabs :animated="false" class="drawer-tabs">
        <Tab-pane label="填写信息">
          <new-user @drawerChange="drawerChange" @createUser="createUser"></new-user>
        </Tab-pane>
      </Tabs>
    </el-drawer>
  </div>
</template>

<script>
  import NewUser from './new-user/new-user'
  export default {
    name: 'chief-admin',
    components: {
      NewUser
    },
    data() {
      return {
        tableData: [],
        pageNum: 1,
        pageSize: 5,
        total: 0,
        drawer: false
      }
    },
    created() {
      this.selectGet()
    },
    methods: {
      onchange(pageNum) {
        this.pageNum = pageNum
      },
      onpage(pageSize) {
        this.pageSize = pageSize
      },
      handleClose() {
        this.drawer = false
      },
      drawerChange() {
        this.drawer = false
      },
      childDrawer() {
        this.drawer = true
      },
      createUser(formItem) {
        this.tableData.push(formItem)
        this.total = this.tableData.length
      }
    },
    beforeDestroy() {
      this.$emit('handleChief', this.tableData)
    }
  }
</script>

<style lang="scss" scoped>

</style>
