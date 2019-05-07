<template>
        <div class="ui segment">
            <table class="ui selectable celled table">
                <tr class="positive">
                    <th>会员数</th>
                    <th>非会员数</th>
                    <th>期末截止活跃会员数</th>
                </tr>
                <tr>
                    <td>{{stat['会员']}}</td>
                    <td>{{stat['非会员']}}</td>
                    <td>{{stat['期末截止活跃会员数']}}</td>
                </tr>
            <table>
        </div>
 </template>

<script> 
    export default {
        props: {
            //loading进度
            stat: {
                type: Object,
                default: {}
            },

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
  
</style>