<template>
  <div class="container" style="padding: 32px">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="注册号/统一社会信用代码" label-width="190px" prop="uscc" style="display: flex; align-items: center; margin-top: -15px; margin-bottom: 23px;">
        <Input v-model="formValidate.uscc" style="width: 445px" size="large"></Input>
        <Button
          style="width: 102px;
                 height: 38px;
                 background: rgba(235,235,242,1);
                 border-radius: 8px;
                 font-size: 14px;
                 font-family: PingFang SC;
                 font-weight: 500;
                 color: rgba(59,56,132,1)"
          @click="searchFor"
        >查询</Button>
      </FormItem>
      <div style="display: flex">
        <div class="container-com">
          <FormItem label="公司全称" label-width="95px" prop="full_org_name">
            <Input v-model="formValidate.full_org_name" placeholder="请输入公司的全称" style="width: 200px" size="large"></Input>
          </FormItem>
          <FormItem label="证件类型" label-width="95px" prop="cer_type">
            <Select v-model="formValidate.cer_type" placeholder="营业执照（注册号）" style="width: 200px" size="large">
              <Option v-for="item in cer_type_name" :value="item.label">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="原证件类型" label-width="95px" prop="original_cer_type">
            <Select v-model="formValidate.original_cer_type" placeholder="营业执照（注册号）" style="width: 200px" size="large">
              <Option v-for="item in original_cer_type_name" :value="item.label">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="行业分类" label-width="95px" prop="industry_type">
            <Select v-model="formValidate.industry_type" placeholder="农林牧渔" style="width: 200px" size="large">
              <Option v-for="item in industry_type_name" :value="item.label">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="注册地址" label-width="95px" prop="registered_address">
            <Input v-model="formValidate.registered_address" placeholder="请输入注册地址" style="width: 200px" size="large"></Input>
          </FormItem>
        </div>
        <div class="container-com">
          <FormItem label="公司简称" label-width="95px" prop="short_org_name">
            <Input v-model="formValidate.short_org_name" placeholder="请输入公司的简称" style="width: 200px" size="large"></Input>
          </FormItem>
          <FormItem label="证件号码" label-width="95px" prop="cert_number">
            <Input v-model="formValidate.cert_number" placeholder="请输入证件号码" style="width: 200px" size="large"></Input>
          </FormItem>
          <FormItem label="原证件号码" label-width="95px" prop="original_cer_number">
            <Input v-model="formValidate.original_cer_number" placeholder="请输入原证件号码" style="width: 200px" size="large"></Input>
          </FormItem>
          <FormItem label="是否涉及质押、冻结" label-width="95px" prop="is_pledge">
            <Select v-model="formValidate.is_pledge" placeholder="否" style="width: 200px" size="large">
              <Option v-for="item in is_pledge_name" :value="item.label">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="所在区县" label-width="95px" prop="in_county">
            <Select v-model="formValidate.in_county" placeholder="请选择" style="width: 200px" size="large">
              <Option v-for="item in in_county_name" :value="item.label">{{ item.label }}</Option>
            </Select>
          </FormItem>
        </div>
        <div class="container-com">
          <FormItem label="英文名称" label-width="95px" prop="engName">
            <Input v-model="formValidate.e_org_name" placeholder="请输入英文名称" style="width: 200px" size="large"></Input>
          </FormItem>
          <FormItem label="公司成立日期" label-width="95px" prop="org_c_time">
            <DatePicker type="date" placeholder="选择日期" v-model="formValidate.org_c_time" style="width: 200px" size="large"></DatePicker>
          </FormItem>
          <FormItem label="注册资本" label-width="95px" prop="registered_assets">
            <Input v-model="formValidate.registered_assets" placeholder="XXX万元" style="width: 200px" size="large"></Input>
          </FormItem>
        </div>
      </div>
      <div class="container-card">
        <FormItem label="经营范围" label-width="95px" prop="business_scope">
          <Input v-model="formValidate.business_scope" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="简单的介绍您的公司的经营范围500字左右(必填)" style="width: calc(10.5vw + 700px)"></Input>
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'baseInfo',
    props: {
      data_list: Object
    },
    data () {
      return {
        formValidate: {
          uscc: '',
          full_org_name: '',
          short_org_name: '',
          e_org_name: '',
          cer_type: '',
          cert_number: '',
          original_cer_type: '',
          original_cer_number: '',
          org_c_time: '',
          registered_assets: '',
          industry_type: '',
          is_pledge: '',
          registered_address: '',
          in_county: '',
          business_scope: ''
        },
        cer_type_name: [{label: '营业执照（注册号）'}, {label: '行政机关'}, {label: '组织机构代码证'}, {label: '行政机关'}, {label: '社会团体'}, {label: '军队'}, {label: '武警'}, {label: '律师执业许可证'}, {label: '基金会'}, {label: '营业执照（社会统一信用代码）'}],
        original_cer_type_name: [{label: '营业执照（注册号）'}, {label: '行政机关'}, {label: '组织机构代码证'}, {label: '行政机关'}, {label: '社会团体'}, {label: '军队'}, {label: '武警'}, {label: '律师执业许可证'}, {label: '基金会'}, {label: '营业执照（社会统一信用代码）'}],
        industry_type_name: [{label: '农'}, {label: '林'}, {label: '牧'}, {label: '鱼'}],
        is_pledge_name: [{label: '是'}, {label: '否'}],
        in_county_name: [{label: '东城区'}, {label: '西城区'}, {label: '朝阳区'}, {label: '丰台区'}, {label: '石景山区'}, {label: '海淀区'}, {label: '门头沟区'}, {label: '房山区'}, {label: '大兴区'}, {label: '昌平区'}, {label: '顺义区'}, {label: '延庆区'}, {label: '怀柔区'}, {label: '密云区'}, {label: '平谷区'}],
        ruleValidate: {
          uscc: [
            { required: false, message: '注册号/统一社会信用代码不能为空', trigger: 'blur' }
          ],
          full_org_name: [
            { required: true, message: '公司全称不能为空', trigger: 'blur' },
          ],
          short_org_name: [
            { required: true, message: '公司简称不能为空', trigger: 'blur' }
          ],
          e_org_name: [
            { required: false, message: '英文名称不能为空', trigger: 'blur' }
          ],
          cer_type: [
            { required: true, message: '证件类型不能为空', trigger: 'blur' }
          ],
          cert_number: [
            { required: true, message: '证件号码不能为空', trigger: 'blur' }
          ],
          org_c_time: [
            { required: true, message: '公司成立日期不能为空', trigger: 'blur', pattern: /.+/ }
          ],
          registered_assets: [
            { required: true, message: '注册资本不能为空', trigger: 'blur' }
          ],
          original_cer_type: [
            { required: false, message: '原证件类型不能为空', trigger: 'blur' }
          ],
          original_cer_number: [
            { required: false, message: '原证件号码不能为空', trigger: 'blur' }
          ],
          industry_type: [
            { required: true, message: '行业分类不能为空', trigger: 'blur' }
          ],
          is_pledge: [
            { required: true, trigger: 'blur' }
          ],
          registered_address: [
            { required: true, message: '注册地址不能为空', trigger: 'blur' }
          ],
          in_county: [
            { required: true, message: '所在区县不能为空', trigger: 'blur' }
          ],
          business_scope: [
            { required: true, message: '经营范围不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      var tempData = this.data_list.step_one
      this.formValidate = tempData
    },
    methods: {
      searchFor() {
        this.http.fetchdata({uscc: this.formValidate.uscc}).then(res => {
          if (res.data.code == '0') {
            this.formValidate = res.data.data
            this.data_list.step_one = res.data.data
          } else {
            this.http.messageFun('error',res.data.msg)
          }
        })
      }
    },
    beforeDestroy() {
      this.$emit('handleBaseOne', this.formValidate)
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    font-family: PingFang SC;
    font-size: 16px;
    font-weight: 500;
    color: rgba(85,84,102,1);
    line-height: 16px;
    .container-com {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: calc(8vw);
    }
    .container-card {
      display: flex;
    }
  }

</style>
