<template>
	<div id="app">
		<div class="ui container" id="result">
			<div class="ui segments" >
				<div class="ui segment" >
					<div class="ui one column stackable grid">
						<div class="column" >
							<div class="ui tabular menu">
				               <a v-for="m of select.menuGroup" :key="m.name" v-show="m.enabled" class="item" :class="{active:m.name==cur_menu}" @click="menuChange(m)" v-link="{path:m.path}" v-text="m.name"></a>
                               <a class="item">批量导入家庭</a>
							</div>
						</div>
					</div>
				</div> 
                <div class="ui segment">
                    <div class="ui one column stackable grid">
                        <div class="column left aligned">
						   <div class="input-group">
							  <span class="input-group-addon">中心</span>           
			                  <v-select :value.sync="select.gym_selected" :options="gyms" options-label="name" options-value="id" placeholder="请选择中心" search close-on-select></v-select>	
                           </div>
                        </div>
                    </div>
                 </div>
			</div>
            <router-view :select="select"></router-view> 
		</div>
	</div>	
</template>

<script>
import vSelect from '@/src/Select.vue';
export default {
	  data(){
		return  { 
			select: {
                onlysql:false,
                cur_menu:'family',
                start: false,
                loading_pic:"https://bbk.800app.com/uploadfile/staticresource/238592/279833/loading.gif",
                isShow: true,
				campaigns:[{id:'所有',name:'所有活动'}],
				campaign_selected:null,
				acl: "",
				ids:[],
				gyms: [],
				gymNames:{},
				gym_selected:"",
				data: null
            }
            
		}
	  },
      components:{
           vSelect
      },
	  computed:{
            gyms:function(){
                var self=this;
                var gyms=self.select.gyms;
                if(gyms[0]){
                   self.select.gym_selected=gyms[0].id;
                }
                return gyms;
            },
            isadmin:function(){
    	      if(this.select.acl.indexOf('系统管理员')!=-1
              ||this.select.acl.indexOf('中心运营总监')!=-1
              ||this.select.acl.indexOf('运营顾问')!=-1){
    		     return true;
    		  }
    		  return false;
            },
            menuGroup:function(){
                return [
                    {name:'我的家庭',path:"/family",enabled:true},
                    {name:'查看/修改家庭负责老师',path:"/tutor",enabled:this.isadmin}
                ]
            }
	  },
      methods: {
        menuChange(cur){
            this.cur_menu='family';
        },
        getAcl_jsonp:function(){
            this.$http.jsonp(url_jsonp,{
                sql1:sql_quanxian
            },{
                jsonp:'callback'
            }).then(function(res){
			    var self=this;
                if(res.data.info[0].rec.constructor !=String){
                     self.select.acl = res.data.info[0].rec[0].crm_jiandang;
				}
            },function(res){
                console.log(res.status);
            });
        },
        getgym:function(func){
		     var self=this;
			 sql_getGym = this.convertor.ToUnicode(sql_getGym);
             self.$http.jsonp(url_jsonp,{
                 sql1: sql_getGym
             },{
                 jsonp:'callback'
             }).then(function(res){
                 self.select.gyms = res.data.info[0].rec;
                 self.select.gyms.map(function(g){
                    self.select.gymNames[g.id]=g.name;
                 }) 
             },function(res){
                 console.log(res.status);
             });
       },
        debug: function () {
	       alert(JSON.stringify(this.check["msg"]))
           alert(JSON.stringify(this.check))
        } 
      },
      created: function () {
           this.getAcl_jsonp();
           this.getCampaign();
           this.getgym();
      }
  } 

</script>
   <style>
        .ui .label.total{
            font-size: 2.4em;
        }
	    #result{
          width:98%!important;

        }
        .btn-sm{
           line-height: 1!important;
        }
        .ui .checkbox {
            cursor:pointer!important;
            margin-right: 20px!important;
        }
        select {
          border: none;
          outline: none;
          cursor: default;
        }
        .fans{
            font-size: 1.8em;
        }
		th{
		  font-size:1.6em;
		}
		td{
		  font-size:1.4em;
		}
		.bold{
		  font-size:1.8em;
		  font-weight:900;
		}
		.blue{
		  color:blue;
		  font-size:1.4em;
		  font-weight:500;
		}
    </style>
