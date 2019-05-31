<template>
        <div class="ui segment">
            <h1 v-html="subtitle"></h1>
            <table class="ui selectable celled table">
                <tr class="positive">
                    <th>市场活动</th>
                    <th>产生例子数</th>
                    <th>已经在跟进</th>
                    <th>出席体验</th>
                    <th>签约数量</th>
                    <th>签约金额</th>
                </tr>
                <tr v-for="s of stat">
                    <td>{{s['campaign']}}</td>
                    <td>{{s['产生例子数']}}</td>
                    <td>{{s['已经在跟进']}}</td>
                    <td>{{s['出席体验']}}</td>
                    <td>{{s['签约数量']}}</td>
                    <td>{{s['签约金额']}}</td>
                </tr>
            <table>
        </div>
 </template>

<script> 
    export default {
        props: {
            //loading进度
            stat: {
                type: Array,
                default: []
            },
            subtitle:{
                type:String,
                default:""
            }
        },
        data:function(){
            return {
            }
        },
        computed:{

        },
        methods:{
        
        },
        created:function(){

        }
    }
</script>
<style scoped>
  h1 {
      text-align:center;
  }
</style>