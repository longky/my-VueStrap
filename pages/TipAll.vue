<template>
   <div>
        <component :select="select" :is="task"></component>
        <modal v-for="indx of indexes" :show.sync="indx.warn" effect="fade" >
            <div slot="title" class="modal-title">
                <span class="glyphicon glyphicon-info-sign text-danger"></span>
                <b  class="text-danger" v-text="indx.title"></b> 
            </div>
            <div slot="modal-body" class="modal-body">
                <template v-for="item of indx.items" >
                  <p v-if="item.label" style="padding-left:10%">
                    <Tag color="success" v-if="item.label=='月销售冠军'">Success</Tag>
                    <Tag color="error"   v-if="item.label!='月销售冠军'&&item.standard-item.value>0">Warning</Tag>
                    <Tag color="success" v-if="item.label!='月销售冠军'&&item.standard-item.value<0">Success</Tag>
                    &nbsp;&nbsp;{{item.label}}
                    <code>{{item.label=='月销售冠军'?item.value:item.value+'%'}}</code>
                    <b v-if="item.label=='月销售冠军'">￥</b> 
                    <b v-if="item.label!='月销售冠军'&&item.standard-item.value>0">低于标准</b> 
                    <b v-if="item.label!='月销售冠军'&&item.standard-item.value<0">>达到标准</b> 
                    <Tag color="default">{{item.label=='月销售冠军'?item.standard:item.standard+'%'}}</Tag>
                  </p>
                  <br v-else/>
                </template>
            </div>
            <div slot="modal-footer" >
               <p class="text-center">
                <button type="button" class="btn btn-danger btn-block" @click="updateWarn(indx)">知道了，不再提示</button>
               </p> 
                <!-- <button type="button" class="btn btn-danger" @click="indx.warn=false;">忽略</button> -->
            </div>
        </modal>
        <alert :show.sync="audit_tip_show" placement="top" type="warning" width="600px" dismissable>
            <div class="ui">
                <span class="glyphicon glyphicon-info-sign"></span>
                <strong>开业筹备进度待审提醒</strong>
                <div class="ui">
                    <div v-for="t of tipForAudit">
                        <p><label></label>“{{t.gym}}” 有完成进度待审核,请及时处理！<a class="text text-danger" :href="url_transfer(t.code)" target="_blank">转到审核</a></p>
                    </div>
                </div>
            </div>
        </alert>
   </div>
</template>

<script>
import MustDo from './components/MustDo.vue';
import Preparations from './components/Preparations.vue';
import modal from '@/src/Modal.vue';
import Tag from 'src/tag';
import alert from '@/src/Alert.vue';
export default {
	  data(){
		return  { 
            task:"Must-do",
			select: {
                start: false,
                loading_pic:"https://bbk.800app.com/uploadfile/staticresource/238592/279833/loading.gif",
				acl: "",
                iduser:"",
                username:"",
                idgym:"",
                codes:"",
                code:"",
                ispreparing:undefined,
                dtenrol:undefined
            },
            indexes: [{warn:false,title:"",items:[]},{warn:false,title:"",items:[]},{warn:false,title:"",items:[]},{warn:false,title:"",items:[]},{warn:false,title:"",items:[]}],
            tipForAudit:[],
            audit_tip_show:false
            
		}
	  },
      components:{
           MustDo,
           Preparations,
           modal,
           Tag,
           alert
      },
	  computed:{
            isadmin:function(){
                if(this.select.acl.indexOf('系统管理员')!=-1
                  ||this.select.acl.indexOf('运营顾问')!=-1
                ){
                    return true;
                }
                return false;
            },
	  },
      watch: {
            "select.codes":{
                handler(newValue, oldValue) {
                    var self=this;
                    if(newValue&&newValue.length>0){
                        newValue.split(";").forEach(function(n){
                            if(n.length==6) self.getIndexes(n);
                        })
                    }
        　　　   },
        　　　   deep: true
            },
            "select.username":{
                handler(newValue, oldValue) {
                    if(newValue){
                       this.get_audit(newValue);
                    }
        　　　   },
        　　　   deep: true
            }  
      },
      methods: {
        toJson:function(str){
            return JSON.parse(str);
        },
        getAcl:function(){
            var self=this
            //281584(月总)  292939 246152(陈婕) 301931(pd)
            var sql=sql_quanxian
            //sql=sql.replace('iduser',281584);
            var param=GetRequest() 
            if(param&&param.iduser){
               sql = sql.replace(/iduser/ig,param.iduser);
            }
            sql=this.convertor.ToUnicode(sql);
            this.$axios.get(url_jsonp,{
                params:{sql1:sql}
            })
            .then(function(res){
                if(res.status==200 && res.data.info[0].rec.constructor !=String){
                    self.select.acl = res.data.info[0].rec[0].crm_jiandang;
                    if(res.data.info[0].rec[0].ispreparing==1){
                        self.task="Preparations";
                    }
                    self.select.ispreparing = res.data.info[0].rec[0].ispreparing;
                    self.select.dtenrol = res.data.info[0].rec[0].dtenrol;
                    self.select.idgym = res.data.info[0].rec[0].idgym;
                    self.select.iduser = res.data.info[0].rec[0].id;
                    self.select.username = res.data.info[0].rec[0].crm_qm;
                    self.select.code = res.data.info[0].rec[0].code;
                    self.select.codes = res.data.info[0].rec[0].codes;
                }  
            },function(res){
                console.error(res);
            });
        },
        url_transfer:function(gymcode){
            var urlBase="https://bbk.800app.com/uploadfile/staticresource/238592/279833/gymPreparing.html?gymcode=";
            return urlBase+gymcode;
        },
        get_audit:function(username){
            var sql =sql_getAudit;
            sql =sql.replace("@consultant",username)
            sql=this.convertor.ToUnicode(sql);
            this.$axios.get(url_local,{
                params:{sql1:sql}
            })
            .then(function(res){
                if(res.status==200 && res.data.errcode==0){
                     if(res.data.arr){
                       self.tipForAudit=res.data.arr;
                       self.audit_tip_show=true;
                     }
                }  
            },function(res){
                console.error(res);
            });
        },
        getIndexes:function(code){ 
            var sql=sql_getIndex,self=this;
            sql=sql.replace("@gymcode",code);
            sql=this.convertor.ToUnicode(sql);
            this.$axios.get(url_local,{
                params:{sql1:sql}
            })
            .then(function(res){
                if(res.status==200 && res.data.errcode==0){
                  if(res=res.data.indx){
                        var indx=self.indexes.find(function(indx){
                            return indx.warn==false;
                        });
                        indx.items=[];
                        var champ=res["champion"]&&JSON.parse(res["champion"]);
                        if(champ){
                            indx.items.push({
                                label:"月销售冠军",
                                value:champ.name,
                                standard:champ['本月合同总金额']
                            })
                            indx.items.push({}); //空行
                        }
                        indx.items.push({
                            label:"体验邀约率",
                            value:res["体验预约率"],
                            standard:res["标准体验预约率"]
                        })
                        indx.items.push({
                            label:"体验出勤率",
                            value:res["体验出勤率"],
                            standard:res["标准体验出勤率"]
                        })
                        indx.items.push({
                            label:"新约转化率",
                            value:res["新约转化率"],
                            standard:res["标准新约转化率"]
                        })
                    
                        if(res.hasmember==1){
                            indx.items.push({}); //空行
                            indx.items.push({
                                label:"会员出勤率",
                                value:res["会员总出勤率"],
                                standard:res["标准会员总出勤率"]
                            })
                        }
 
                        indx.title=res.name+"关键指标提醒  【月份:"+res.m+"】";
                        indx.warn=true;
                        indx.id=res.id;
                  }
                }  
            },function(res){
                console.error(res);
            });
        },
        updateWarn:function(indx){
            var self=this;
            var sql="update crm_zdytable_238592_27200_238592_view set crmzdy_87676912=0 where id=@id;select 0 errcode,'ok'errmsg for json path,without_array_wrapper";
            sql=sql.replace('@id',indx.id);
            this.$axios.get(url_jsonp,{
                params:{sql1:sql}
            })
            .then(function(res){
                indx.warn=false;
            },function(res){
                console.error(res);
            });
        }
      },
      created: function () {
           this.getAcl();
      }
  } 

</script>
<style scoped>
    .text-center{
        padding: 1% 1%;
    }
    [v-cloak]{
        display:none;
    }
</style>
