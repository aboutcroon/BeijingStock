<template>
  <div>
    <el-table
      class="upload-table"
      :data="tableData"
      style="width: 100%"
      stripe
      :row-style="common.rowStyle"
      :cell-style="cellStyle"
    >
      <el-table-column
        prop="fileName"
        label="附件名称">
      </el-table-column>
      <el-table-column
        label="操作"
        prop="operation"
        width="620"
      >
        <template slot-scope="scope" style="display: flex">
          <el-upload
            ref="upload"
            class="upload-demo"
            action="/bjotc/api/upload_file/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="handleSucc"
            :before-upload="beforeAvatarUpload"
            multiple
            :data="param"
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList"
            accept=".xlsx, image/*"
            style="display: inline-block"
          >
            <div style="display: inline-block; margin-right: 25px;" v-if="scope.row.showIcon">
              <svg t="1597670435760" class="icon" @click="paramChange(scope.$index, scope.row)" style="margin-bottom: -3px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7140" width="16" height="16"><path d="M1019.52 890.64c-4.67 24.766-33.723 25.597-53.113 26.173-120.497 0.384-241.186 0-361.81 0V1024h-72.184c-177.257-32.956-354.9-63.48-532.349-95.22V95.348C178.602 63.352 357.139 32.252 535.549 0h69.111v95.348c116.466 0 232.867 0 349.269-0.32a105.33 105.33 0 0 1 58.424 11.455 111.474 111.474 0 0 1 11.391 60.216q-0.896 310.105 0 619.827a555.643 555.643 0 0 1-3.967 104.115zM423.692 309.21c-26.365 1.28-52.793 2.943-79.094 4.863-19.646 48.89-42.619 96.564-57.913 147.181-14.334-47.738-33.276-93.684-50.617-140.27q-38.396 2.112-76.79 4.543c27.004 60.985 55.736 121.073 81.909 182.378-30.844 59.512-59.705 119.857-89.589 179.753 25.597 1.088 51.194 2.176 76.79 2.56 18.11-47.418 40.7-93.045 56.441-141.295a1439.18 1439.18 0 0 0 58.041 149.55c28.029 1.983 55.93 3.711 84.022 5.439-31.996-66.68-64.76-132.911-96.82-199.591q47.354-97.332 93.876-195.048z m564.793-178.154H604.532v71.415h93.109v83.19h-92.98v47.673h93.108v83.19H604.66v47.61h93.109v83.19H604.66v47.674h93.109v83.19H604.66v47.61h93.109v83.189H604.66v71.415h383.952V131.056z m-81.397 154.732h-162.86v-83.19h162.86v83.19z m0 130.992h-162.86v-83.19h162.86z m0 130.992h-162.86v-83.19h162.86v83.19z m0 130.927h-162.86v-83.19h162.86z m0 130.992h-162.86V726.5h162.86z" p-id="7141" fill="#186d09"></path></svg>
              <el-button size="small" type="text" @click="paramChange(scope.$index, scope.row)">excel模版上传</el-button>
            </div>
            <div v-if="scope.row.showIconPho">
              <svg t="1597669630661" class="icon" @click="paramChange(scope.$index, scope.row)" style="margin-bottom: -3px;" viewBox="0 0 1426 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6950" width="16" height="16"><path d="M253.667556 347.306667A437.873778 437.873778 0 0 1 773.12 9.784889a438.101333 438.101333 0 0 1 337.521778 337.521778 316.359111 316.359111 0 1 1-63.886222 626.176h-170.382223a59.619556 59.619556 0 0 1-7.395555 0H317.610667A316.302222 316.302222 0 0 1 253.724444 347.306667z m428.373333-43.292445a52.167111 52.167111 0 0 0-35.84 14.108445L494.592 469.731556a51.712 51.712 0 1 0 72.533333 72.590222l63.544889-63.601778v257.137778a51.996444 51.996444 0 0 0 51.484445 47.388444c1.422222 0 2.958222 0 4.380444-0.170666a51.484444 51.484444 0 0 0 47.104-47.104v-256.568889l63.544889 63.544889c9.784889 12.515556 25.031111 20.138667 40.96 20.138666a51.996444 51.996444 0 0 0 30.72-10.069333 51.029333 51.029333 0 0 0 20.309333-33.962667 50.403556 50.403556 0 0 0-15.985777-46.08l-2.332445-2.616889-152.576-151.893333a52.736 52.736 0 0 0-36.238222-14.449778z" p-id="6951" fill="#13227a"></path></svg>
              <el-button size="small" type="text" @click="paramChange(scope.$index, scope.row)">上传图片</el-button>
            </div>
          </el-upload>
          <div style="display: inline-block; margin-right: 25px;" v-if="scope.row.showIcon">
            <svg t="1597670435760" class="icon" style="margin-bottom: -3px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7140" width="16" height="16"><path d="M1019.52 890.64c-4.67 24.766-33.723 25.597-53.113 26.173-120.497 0.384-241.186 0-361.81 0V1024h-72.184c-177.257-32.956-354.9-63.48-532.349-95.22V95.348C178.602 63.352 357.139 32.252 535.549 0h69.111v95.348c116.466 0 232.867 0 349.269-0.32a105.33 105.33 0 0 1 58.424 11.455 111.474 111.474 0 0 1 11.391 60.216q-0.896 310.105 0 619.827a555.643 555.643 0 0 1-3.967 104.115zM423.692 309.21c-26.365 1.28-52.793 2.943-79.094 4.863-19.646 48.89-42.619 96.564-57.913 147.181-14.334-47.738-33.276-93.684-50.617-140.27q-38.396 2.112-76.79 4.543c27.004 60.985 55.736 121.073 81.909 182.378-30.844 59.512-59.705 119.857-89.589 179.753 25.597 1.088 51.194 2.176 76.79 2.56 18.11-47.418 40.7-93.045 56.441-141.295a1439.18 1439.18 0 0 0 58.041 149.55c28.029 1.983 55.93 3.711 84.022 5.439-31.996-66.68-64.76-132.911-96.82-199.591q47.354-97.332 93.876-195.048z m564.793-178.154H604.532v71.415h93.109v83.19h-92.98v47.673h93.108v83.19H604.66v47.61h93.109v83.19H604.66v47.674h93.109v83.19H604.66v47.61h93.109v83.189H604.66v71.415h383.952V131.056z m-81.397 154.732h-162.86v-83.19h162.86v83.19z m0 130.992h-162.86v-83.19h162.86z m0 130.992h-162.86v-83.19h162.86v83.19z m0 130.927h-162.86v-83.19h162.86z m0 130.992h-162.86V726.5h162.86z" p-id="7141" fill="#186d09"></path></svg>
            <el-button size="small" type="text"><a href="/" download="file.xlsx" ref="download">excel模版下载</a></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'upload-file',
    data() {
      return {
        fileList: [],
        tableData: [{
          fileName: '股东名称',
          fileType: 'stock_edger',
          showIcon: true,
          showIconPho: false
        }, {
          fileName: '经办人身份证正面',
          fileType: 'id_front_file',
          showIcon: false,
          showIconPho: true
        }, {
          fileName: '经办人身份证背面',
          fileType: 'id_back_file',
          showIcon: false,
          showIconPho: true
        }, {
          fileName: '营业执照',
          fileType: 'license_file',
          showIcon: false,
          showIconPho: true
        }, {
          fileName: '企业logo',
          fileType: 'org_logo',
          showIcon: false,
          showIconPho: true
        }],
        file_type: {
          stock_edger: {},
          id_front_file: {},
          id_back_file: {},
          license_file: {},
          org_logo: {}
        },
        param: {
          file_type: ''
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      paramChange(index, row) {
        this.param.file_type = row.fileType
      },
      handleSucc(response) {
        this.$message.success('上传成功')
        this.file_type[this.param.file_type] = response.data[this.param.file_type]
        this.$refs.download.setAttribute('href', response.data.stock_edger.file_url)
        this.$emit('handleLoad', this.file_type)
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 1
        if(!isLt2M) {
          this.$message.error('上传文件大小不能超过 1MB!')
        }
      }
    }
  }
</script>

<style scoped>

</style>
