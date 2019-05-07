<template>
    <div id="PanelExcel" class="ui segment total"  >
            <div class="ui two column stackable grid">
                <div class="column center aligned">
                        <Tag color="error">超过4小时未及时跟进中心负排名</Tag>
                        <table class="ui celled table">
                            <thead>
                                <tr class="positive">
                                    <th>排名</th>
                                    <th>中心</th>
                                    <th>人数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="r of handle_rank_down">
                                    <td>{{$index+1}}</td>
                                    <td>{{r['中心']}}</td>
                                    <td>{{r['人数']}}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                <div class="column center aligned">
                    <Tag color="success">4小时内及时跟进中心正排名</Tag>
                        <table class="ui celled table">
                            <thead>
                                <tr class="positive">
                                    <th>排名</th>
                                    <th>中心</th>
                                    <th>人数</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr v-for="r of handle_rank">
                                    <td>{{$index+1}}</td>
                                    <td>{{r['中心']}}</td>
                                    <td>{{r['人数']}}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

 </template>

<script> 
   import Tag from 'src/tag';
    export default {
        components:{
            Tag
        },
        props: {
            //loading进度
            handle_rank_down: {
                type: Array,
                default: []
            },
            handle_rank: {
                type: Array,
                default: []
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
  tr > th{
    font-size: 0.5em!important;

  }
</style>