<template>
  <div>
    <base-info v-if="stepInside === 1" @handleBaseOne="handleBaseOne" :data_list="data_list"></base-info>
    <co-info v-if="stepInside === 2" @handleBaseTwo="handleBaseTwo" :data_list="data_list"></co-info>
    <legal-rep v-if="stepInside === 3" @handleBaseThree="handleBaseThree" :data_list="data_list"></legal-rep>
    <handle-person v-if="stepInside === 4" @handleBaseFour="handleBaseFour" :data_list="data_list"></handle-person>
  </div>
</template>

<script>
  import BaseInfo from './base-info/base-info'
  import CoInfo from './co-info/co-info'
  import LegalRep from './legal-rep/legal-rep'
  import HandlePerson from './handle-person/handle-person'
  export default {
    name: 'base',
    props: {
      stepInside: Number,
      data_list: Object
    },
    components: {
      BaseInfo,
      CoInfo,
      LegalRep,
      HandlePerson
    },
    data() {
      return {
        baseOne: {},
        baseTwo: {},
        baseThree: {},
        baseFour: {},
        step_one: {}
      }
    },
    methods: {
      handleBaseOne(dataBaseOne) {
        this.baseOne = dataBaseOne
      },
      handleBaseTwo(dataBaseTwo) {
        this.baseTwo = dataBaseTwo
      },
      handleBaseThree(dataBaseThree) {
        this.baseThree = dataBaseThree
      },
      handleBaseFour(dataBaseFour) {
        this.baseFour = dataBaseFour
      }
    },
    beforeDestroy() {
      this.step_one = { ...this.baseOne, ...this.baseTwo, ...this.baseThree, ...this.baseFour }
      this.$emit('handleBase', this.step_one)
    }
  }
</script>

<style scoped>

</style>
