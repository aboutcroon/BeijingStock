<template>
    <div class="container" style="padding: 32px">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <div style="display: flex">
          <div class="container-com">
            <FormItem label="姓名" label-width="95px" prop="legal_person_name">
              <Input v-model="formValidate.legal_person_name" placeholder="请输入姓名" style="width: 200px" size="large"></Input>
            </FormItem>
            <FormItem label="证件类型" label-width="95px" prop="legal_person_cer_type">
              <Select v-model="formValidate.legal_person_cer_type" placeholder="身份证" style="width: 200px" size="large">
                <Option v-for="item in legal_person_cer_type_name" :value="item.label">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="电子邮箱" label-width="95px" prop="legal_person_email">
              <Input v-model="formValidate.legal_person_email" placeholder="请输入电子邮箱" style="width: 200px" size="large"></Input>
            </FormItem>
          </div>
          <div class="container-com">
            <FormItem label="手机" label-width="95px" prop="legal_person_mobile">
              <Input v-model="formValidate.legal_person_mobile" placeholder="请输入手机号" style="width: 200px" size="large"></Input>
            </FormItem>
            <FormItem label="证件号码" label-width="95px" prop="legal_person_cert_number">
              <Input v-model="formValidate.legal_person_cert_number" placeholder="请输入证件号码" style="width: 200px" size="large"></Input>
            </FormItem>
            <FormItem label="传真" label-width="95px" prop="legal_person_fax">
              <Input v-model="formValidate.legal_person_fax" placeholder="例:010-45787" style="width: 200px" size="large"></Input>
            </FormItem>
          </div>
          <div class="container-com">
            <FormItem label="电话" label-width="95px" prop="legal_person_phone">
              <Input v-model="formValidate.legal_person_phone" placeholder="例:0997-456475" style="width: 200px" size="large"></Input>
            </FormItem>
          </div>
        </div>
        <div class="container-card">
          <FormItem label="通讯地址" label-width="95px" prop="legal_person_address">
            <Input v-model="formValidate.legal_person_address" placeholder="例:北京市海淀区中关村北大街151号(北京大学西门)" style="width: calc(8vw + 400px)" size="large"></Input>
          </FormItem>
        </div>
      </Form>
    </div>
</template>

<script>
  export default {
    name: 'legal-rep',
    props: {
      data_list: Object
    },
    data () {
      return {
        formValidate: {
          legal_person_name: '',
          legal_person_mobile: '',
          legal_person_cer_type: '',
          legal_person_cert_number: '',
          legal_person_phone: '',
          legal_person_address: '',
          legal_person_email: '',
          legal_person_fax: ''
        },
        legal_person_cer_type_name: [{label: '身份证'}, {label: '护照'}, {label: '士兵证'}, {label: '港澳居民来往通行证'}, {label: '户口本'}, {label: '外国护照'}, {label: '其他'}, {label: '文职证'}, {label: '警官证'}, {label: '台胞证'}, {label: '回乡证'}, {label: '解放军文职干部证'}, {label: '武警文职干部证'}, {label: '重号身份证'}, {label: '香港居民身份证'}, {label: '外国人永久居住证'}, {label: '澳门居民身份证'}],
        ruleValidate: {
          legal_person_name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          legal_person_mobile: [
            { required: true, message: '手机号不能为空', trigger: 'blur' }
          ],
          legal_person_cert_number: [
            { required: true, message: '证件号码不能为空', trigger: 'blur' }
          ],
          legal_person_address: [
            { required: true, message: '通讯地址不能为空', trigger: 'blur' }
          ],
          legal_person_email: [
            { required: true, message: '电子邮箱不能为空', trigger: 'blur' }
          ],
        }
      }
    },
    created() {
      var tempData = this.data_list.step_one
      this.formValidate = tempData
    },
    methods: {
      beforeDestroy() {
        this.$emit('handleBaseThree', this.formValidate)
      }
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
      justify-content: space-between;
      margin-top: -15px;
      flex-direction: column;
      margin-right: calc(8vw);
    }
    .container-card {
      display: flex;
    }
  }
</style>
