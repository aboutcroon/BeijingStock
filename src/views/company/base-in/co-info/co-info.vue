<template>
  <div class="container" style="padding: 32px">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <div style="display: flex">
        <div class="container-com">
          <FormItem label="总股本" label-width="95px" prop="general_capital">
            <Input v-model="formValidate.general_capital" placeholder="XXXX股" style="width: 200px" size="large"></Input>
          </FormItem>
        </div>
        <div class="container-com">
          <FormItem label="每股面值" label-width="95px" prop="par_value">
            <Input v-model="formValidate.par_value" placeholder="XXXX元" style="width: 200px" size="large"></Input>
          </FormItem>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'coInfo',
    props: {
      data_list: Object
    },
    data () {
      return {
        formValidate: {
          general_capital: '',
          par_value: ''
        },
        ruleValidate: {
          general_capital: [
            { required: true, message: '总股本不能为空', trigger: 'blur' }
          ],
          par_value: [
            { required: true, message: '每股面值不能为空', trigger: 'blur' }
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
        this.$emit('handleBaseTwo', this.formValidate)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    font-family: PingFang SC;
    font-size: 16px;
    font-weight: 500;
    color: rgba(85, 84, 102, 1);
    line-height: 16px;
    .container-com {
      display: flex;
      margin-top: -15px;
      flex-direction: column;
      justify-content: space-between;
      margin-right: calc(8vw);
    }
  }

</style>
