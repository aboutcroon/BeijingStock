<template>
  <div style="height: 100%">
    <div class="drawer-main" style="max-height: calc(100% - 90px);overflow-y: auto">
      <Form :model="formItem" label-position="top" :rules="ruleValidate" ref="formRef">
        <Form-item label="姓名" prop="name">
          <Input v-model="formItem.name" placeholder="请输入法人代表"></Input>
        </Form-item>
        <Form-item label="证件类型" prop="cer_type">
          <Select v-model="formItem.cer_type" placeholder="请选择用户">
            <Option v-for="item in cer_type" :value="item">{{ item }}</Option>
          </Select>
        </Form-item>
        <Form-item label="证件号码" prop="cert_number">
          <Input v-model="formItem.cert_number" placeholder="请输入法人证件号码"/>
        </Form-item>
        <Form-item label="出生日期" prop="birth_date">
          <Input v-model="formItem.birth_date" placeholder="请输入出生日期"></Input>
        </Form-item>
        <Form-item label="性别" prop="gender">
          <Select v-model="formItem.gender" placeholder="男">
            <Option v-for="item in gender" :value="item">{{ item }}</Option>
          </Select>
        </Form-item>
        <Form-item label="法定代表人标识" prop="gender">
          <Select v-model="formItem.is_legal_person" placeholder="是">
            <Option v-for="item in is_legal_person" :value="item">{{ item }}</Option>
          </Select>
        </Form-item>
        <Form-item label="职务" prop="post">
          <Input v-model="formItem.post" placeholder="请输入职务"/>
        </Form-item>
        <Form-item label="联系电话" prop="phone">
          <Input v-model="formItem.phone" placeholder="请输入联系电话"/>
        </Form-item>
      </Form>

    </div>
    <div class="drawer-bottom-btn" style="width: 100%">
      <div class="drawer-btn-container user-btn" style="width: 102px;">
        <Button class="btn-search" :loading="loading" @click="handleSubmit">
          <span v-if="!loading">确定</span>
          <span v-else>提交中</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewUser',
    data() {
      return {
        loading: false,
        formItem: {
          name: '',
          cer_type: '',
          cert_number: '',
          birth_date: '',
          gender: '',
          is_legal_person: '',
          post: '',
          phone: ''
        },
        cer_type: ['身份证', '护照', '士兵证', '港澳居民来往通行证'],
        gender: ['男', '女'],
        is_legal_person: ['是', '否'],
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          cer_type: [
            { required: true, message: '证件类型不能为空', trigger: 'blur' }
          ],
          cert_number: [
            { required: true, message: '证件号码不能为空', trigger: 'blur' },
          ],
          birth_date: [
            { required: true, message: '出生日期不能为空', trigger: 'blur' },
          ],
          gender: [
            { required: true, message: '性别不能为空', trigger: 'blur' }
          ],
          is_legal_person: [
            { required: true, message: '法定代表人标识不能为空', trigger: 'blur' }
          ],
          post: [
            { required: true, message: '职务不能为空', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '联系电话不能为空', trigger: 'blur' },
          ],
        }
      }
    },
    methods: {
      // 存证提示
      handleSubmit() {
        if (this.formItem.name == '') {
          this.$Message.warning('用户姓名为空')
        } else if (this.formItem.cert_number == '') {
          this.$Message.warning('证件号码为空')
        } else if (this.formItem.cer_type == '') {
          this.$Message.warning('证件类型为空')
        } else if (this.formItem.birth_date == '') {
          this.$Message.warning('出生日期为空')
        } else if (this.formItem.gender == '') {
          this.$Message.warning('性别为空')
        } else if (this.formItem.is_legal_person == '') {
          this.$Message.warning('法定代表人标识为空')
        } else if (this.formItem.post == '') {
          this.$Message.warning('职务为空')
        } else if (this.formItem.phone == '') {
          this.$Message.warning('联系电话为空')
        } else {
          this.loading = true

          this.$Message.success('新增用户成功!')
          this.$emit('drawerChange')
          this.$emit('createUser', this.formItem)
          this.loading = false
          this.reload()
        }
      }
    }
  }
</script>

<style lang="css">
  .cont p{
    margin-top: 1rem;
  }
  .boya-drawer .drawer-main .ivu-form-item {
    margin-bottom: 26px;
  }
</style>
