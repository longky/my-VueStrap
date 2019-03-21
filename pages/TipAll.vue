<template>
   <div>
        <component :select="select" :is="task"></component>
   </div>
</template>

<script>
import MustDo from './components/MustDo.vue';
import Preparations from './components/Preparations.vue';
export default {
	  data(){
		return  { 
            task:"must-do",
			select: {
                start: false,
                loading_pic:"https://bbk.800app.com/uploadfile/staticresource/238592/279833/loading.gif",
				acl: "",
            }
            
		}
	  },
      components:{
           MustDo,
           Preparations
      },
	  computed:{
            isadmin:function(){
                if(this.select.acl.indexOf('系统管理员')!=-1
                  ||this.select.acl.indexOf('运营顾问')!=-1
                  ||(this.select.acl.indexOf('中心运营总监')!=-1&&this.select.gym_selected&&this.select.gym_selected.split("|")[2]==1)
                ){
                    return true;
                }
                return false;
            },
	  },
      methods: {
        getAcl:function(){
            var self=this;
            //sql_quanxian=sql_quanxian.replace('iduser',281584);
            this.$axios.get(url_jsonp,{
                params:{sql1:sql_quanxian}
            })
            .then(function(res){
                if(res.status==200 && res.data.info[0].rec.constructor !=String){
                    self.select.acl = res.data.info[0].rec[0].crm_jiandang;
                }  
            },function(res){
                console.error(res)    ;
            });
        }
      },
      created: function () {
           this.getAcl();
      }
  } 

</script>
<style>
</style>
