<template>
  <div ref="pie" />
</template>

<script>
  import echarts from 'echarts'
  import Transfer from '../../../api/transfer.js'
  export default {
    name: 'ContractPie',
    data() {
      return {
        pie: null, // 统计图对象
        week_user_activity_list: [],
        date_list: []
      }
    },
    mounted() {
      var that = this
      Transfer.$on('pie_contract', function (data) {
        console.log(data)
        that.date_list = data.data
        let option = {
          title: {
            text: '合约调用情况',
            show:false,
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },

          legend: {
            type: "scroll",
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
          },
          series: [
            {
              type: 'pie',
              radius: '65%',
              center: ['50%', '45%'],
              label: {
                show: false,
//                formatter: '{b} : {c} ({d}%)'
              },
              selectedMode: 'single',
              data: that.date_list ,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };

        // 绑定位置
        that.$nextTick(() => {
          that.pie = echarts.init(that.$refs.pie)
          that.pie.setOption(option)
          // on(window, 'resize', this.resize)
        })
      })
    },
    methods: {
      resize() {
        this.line.resize()
      }
    }
  }
</script>

<style lang="less">
  .ivu-card-body{
    padding:0!important;
  }
</style>
