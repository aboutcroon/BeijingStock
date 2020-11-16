<template>
  <div class="container" style="padding: 32px">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <div style="display: flex">
        <div class="container-com">
          <FormItem label="经办人" label-width="95px" prop="operator_person_name">
            <Input v-model="formValidate.operator_person_name" placeholder="请输入经办人名称" style="width: 200px" size="large"></Input>
          </FormItem>
          <FormItem label="证件类型" label-width="95px" prop="operator_person_cer_type">
            <Select v-model="formValidate.operator_person_cer_type" placeholder="身份证" style="width: 200px" size="large">
              <Option v-for="item in operator_person_cer_type_name" :value="item.label">{{ item.label }}</Option>
            </Select>
          </FormItem>
        </div>
        <div class="container-com">
          <FormItem label="证件号码" label-width="95px" prop="operator_person_cert_number">
            <Input v-model="formValidate.operator_person_cert_number" placeholder="请输入证件号码" style="width: 200px" size="large"></Input>
          </FormItem>
        </div>
        <div class="container-com">
          <FormItem label="手机" label-width="95px" prop="operator_person_phone">
            <Input v-model="formValidate.operator_person_phone" placeholder="例:0997-456475" style="width: 200px" size="large"></Input>
          </FormItem>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'handle-person',
    props: {
      data_list: Object
    },
    data () {
      return {
        formValidate: {
          operator_person_name: '',
          operator_person_cer_type: '',
          operator_person_cert_number: '',
          operator_person_phone: ''
        },
        operator_person_cer_type_name: [{label: '身份证'}, {label: '护照'}, {label: '士兵证'}, {label: '港澳居民来往通行证'}, {label: '户口本'}, {label: '外国护照'}, {label: '其他'}, {label: '文职证'}, {label: '警官证'}, {label: '台胞证'}, {label: '回乡证'}, {label: '解放军文职干部证'}, {label: '武警文职干部证'}, {label: '重号身份证'}, {label: '香港居民身份证'}, {label: '外国人永久居住证'}, {label: '澳门居民身份证'}],
        ruleValidate: {
          operator_person_name: [
            { required: true, message: '经办人名称不能为空', trigger: 'blur' }
          ],
          operator_person_cert_number: [
            { required: true, message: '证件号码不能为空', trigger: 'blur' }
          ],
          operator_person_phone: [
            { required: true, message: '手机号不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      var tempData = this.data_list.step_one
      this.formValidate = tempData
    },
    methods: {
      beforeDestroy() {
        this.$emit('handleBaseFour', this.formValidate)
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
      justify-content: flex-end;
      margin-top: -15px;
      flex-direction: column;
      margin-right: calc(8vw);
    }
  }
</style>
