<template>
  <div class="export" @click="modal1 = true">
    <span class="icon iconfont iconexport"></span>
    <Modal
      v-model="modal1"
      title="确定框"
      @on-ok="installContract"
      @on-cancel="cancel">
      确定要导出数据么
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'ExportExcel',
    props: {
      count: Number,
      valueList: Array,
      tHeader: Array,
      filterVal: Array,
      filename: String,
      getData: Function
    },
    data() {
      return {
        modal1: false,
        autoWidth: true,
        bookType: 'xlsx',
        needExport: false,
      }
    },
    watch: {
      valueList(valueList) {
        if(this.needExport && valueList.length > 0) {
          this.handleDownload()
          this.needExport = false
        }
      }
    },
    computed: {

    },
    mounted() {
    },
    methods: {
      cancel() {
        this.modal1 = false
      },
      installContract() {
        this.needExport = true
        this.$emit('exportfun', '')
        this.modal1 = false
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = this.tHeader
          const filterVal = this.filterVal
          const list = this.valueList
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename,
            autoWidth: this.autoWidth,
            bookType: this.bookType
          })
          this.downloadLoading = false
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          return v[j]
        }))
      }
    }
  }
</script>

<style scoped>

</style>
