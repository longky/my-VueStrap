<template>
<div class="ui segment">
    <div class="ui segment isPrint">
        <h1 class="title">每日电话报表</h1>
        <div class="ui grid onlyPrint subtitle">
            <div class="four wide column"></div>
            <div class="six wide column">{{select.gymNames[select.idgym]?'中心：'+select.gymNames[select.idgym]:''}}</div>
            <div class="six wide column">{{select.dtReport}}</div>
        </div>
    </div>
    <div class="ui segment noPrint">
        <div class='ui three column stackable grid'>
    		  <div class="row">
                <div class="column right aligned">
                     <v-select :value.sync="select.idgym" :options="select.gyms" options-label="name" options-value="id" placeholder="请选择中心" search clear-button close-on-select>
                     </v-select>
                </div>
                <div class="column center aligned">
    	             <datepicker :value.sync="select.dtReport" format="yyyy-MM-dd" placeholder="请选择日期"></datepicker>
                </div>
                <div class="column left aligned">
                    <a href="javascript:" class="btn btn-default" @click="getPhonePlans()">查询</a>
					<input type="button" class="btn btn-default"  value="打印" onclick="PrintDoc()" />
                    <input id="Button1" type="button" class="btn btn-danger"  value="导出EXCEL" class="rbtn23" onclick="javascript:HtmlExportToExcel('PanelExcel','DailyPhoneCall')" />
					<a id="dlink" style="display: none;"></a>
                </div>
            </div>
            <div class="row">
    		    <div class="column"></div>
    			<div class="column middle aligned">
    			      <checkbox :checked.sync="onlyOwn" type="danger" class="tooltips" title="负责老师是自己的例子家庭'">仅显示自己负责</checkbox>
    			</div>
    			<div class="column middle aligned" v-if="select.acl.indexOf('系统管理员')!=-1">
    			      <checkbox :checked.sync="select.onlysql" type="danger" >是否打印sql（仅管理员）</checkbox>
    			</div>
    			<div class="column"></div>
            </div>
            <div class="row" v-show="select.start">
                 <div class="column"></div>
                <div class="column center aligned">
                   <img :src="select.loading_pic" width="40px" height="40px">
                </div>
            </div>
    	</div>	
    </div>
    <div class="ui segment" v-show="select.onlysql">
        <pre v-for="s of datasql "v-text="s"></pre>
    </div>

    <div class="ui segment">
        <panel v-for="st of subtitles">
            <p slot="header" class="header">{{st.content}}</p>
            <table class="console" width="100%">
                <tbody>
                    <tr>
                        <td width="10%">家长</td>
                        <td width="8%">手机</td>
                        <td width="12%">孩子</td>
                        <td width="10%">负责老师</td>
                        <td width="15%">班级</td>
                        <td width="10%">考勤状态</td>
                        <td width="10%">操作</td>
                    </tr>
                    <template v-for="p of phonePlansFilter(st.type)">
                        <tr>
                            <td width="10%" v-html="p['家长']"></td>
                            <td v-text="p['手机']"></td>
                            <td v-text="p['孩子']"></td>
                            <td v-text="p['负责老师']"></td>
                            <td v-text="p['班级']"></td>
                            <td v-text="p['考勤状态']"></td>
                            <td><button class="btn btn-primary btn-mini">分配老师</button></td>
                        </tr>
                        <tr>
                            <td align="left" colspan="7">【沟通记录】{{p['沟通记录']}}
                                <hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </panel>
    </div>

    <alert :show.sync="error.show" placement="top" duration="3000" type="danger" width="400px" dismissable>
        <span class="glyphicon glyphicon-info-sign alert-icon-float-left"></span>
        <strong>错误提示!</strong>
        <p style="font-size:1.5em">{{error.content}}</p>
    </alert>
</div>
</template>

<script>

import Tag from 'src/tag';
import alert from '@/src/Alert.vue';
import vSelect from '@/src/Select.vue';
import modal from '@/src/Modal.vue';
import tooltip from '@/src/Tooltip.vue';
import datepicker from 'src/Datepicker.vue';
import checkbox from 'src/Checkbox.vue';
import panel from 'src/Panel.vue';
import qs from 'qs';

export default {
	  data(){
		return  { 
			select: {
                onlysql:false,
                start: false,
                loading_pic:"https://bbk.800app.com/uploadfile/staticresource/238592/279833/loading.gif",
				acl: "",
                iduser:"",
                username:"",
                idgym:"",
                gyms:[],
                gymNames:{},
                phonePlans:[],
	            dtReport:this.fmtDt_s(new Date())
            },
            subtitles:[
                {type:1,content:"三天前录入且尚未预约体验"},
                {type:2,content:"前天体验且未报名"},
                {type:3,content:"昨天体验未出席"},
                {type:4,content:"明天体验"},
                {type:5,content:"今天计划联系"},
                {type:6,content:"过去30天没有联系的潜在客户"},
                {type:7,content:"即将到来的生日会"}
            ],
            datasql:[],
            onlyOwn:true,
            error:{
                show:false,
                content:''
            }
            
		}
	  },
      components:{
           modal,
           Tag,
           panel,
           alert,
           vSelect,
           checkbox,
           datepicker
      },
	  computed:{
            isadmin:function(){
                if(this.select.acl.indexOf('系统管理员')!=-1
                  ||this.select.acl.indexOf('运营顾问')!=-1
                ){
                    return true;
                }
                return false;
            }
	  },
      watch: {
            "select.codes":{
                handler(newValue, oldValue) {
                    var self=this;

        　　　   },
        　　　   deep: true
            },
            "select.username":{
                handler(newValue, oldValue) {
 
        　　　   },
        　　　   deep: true
            }  
      },
      methods: {
        phonePlansFilter:function(type){
            var res= this.select.phonePlans.filter(function(p){
                return p.type==type; 
            })
            return res;
        },
        getAcl:function(){
            var self=this
            //281584(月总)  292939 246152(陈婕) 301931(pd)
            var sql=sql_quanxian
            sql=sql.replace('iduser',279833);
            console.log(sql)
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
        getGym:function(func){
             var self=this;
             sql_getGym=sql_getGym.replace('iduser',279833);
			 sql_getGym = this.convertor.ToUnicode(sql_getGym);
             self.$axios.get(url_jsonp,{
                 params:{sql1: sql_getGym}
             }).then(function(res){
                 if(res.status==200){
                    self.select.gyms = res.data.info[0].rec;
                    self.select.gyms.map(function(g){
                        self.select.gymNames[g.id]=g.name;
                    })
                 } 
             },function(res){
                 console.error(res.status);
             });
        },
        valid:function(){
            if(!this.select.idgym) {
                this.error={show:true,content:"请选择中心"};
                return false
             }
            if(!this.select.dtReport) {
                this.error={show:true,content:"请选择日期"};
                return false
            }
            return true;
        },
        getPhonePlans:function(){
            if(!this.valid()) return;
             var self=this;
             var sql=sql_getPhonePlans;
             self.select.start=true;
             sql=sql.replace(/@idgym/ig,this.select.idgym);
             sql=sql.replace(/@dtReport/ig,this.select.dtReport);
             sql = this.convertor.ToUnicode(sql);
             self.$axios({
                    method: 'post',
                    url:url_jsonp,
                    data:qs.stringify({sql1:sql,onlysql:(self.select.onlysql?1:0)})
                }).then(function(res){
                 if(res.status==200){
                    var sql =res.data.info[1].sql;
				    sql =sql.replace(/quot;/gi,"'")
                    self.datasql.push(sql)
                    console.log(self.datasql)
                    res=res.data.info[0].rec;
                    if(typeof res=='object'){
                       self.select.phonePlans = res.concat(self.select.phonePlans);
                    }
                 } 
                 self.select.start=false;
             },function(res){
                 console.error(res.status);
                 self.select.start=false;
             });
        }
      },
      created: function () {
           this.getAcl();
           this.getGym();
      }
  } 

</script>
<style scoped>
    table.console{  
        font-family:"微软雅黑";
        font-size:10px;
        color:#474747;
        text-align:left;
    }

    .title{
       text-align:center;
       font-size:2.5em;
       font-weight: bold;
       margin-bottom:1%;
    }
    .subtitle{
       font-size:1.5em;
    }
    @media screen{
        .onlyPrint{
           display: none;
        } 
    }
    @media print{
        .onlyPrint{
            display: "";
        } 
    }
    .panel{
       margin-bottom:5px!important;
    }
    [v-cloak]{
       display:none;
    }
    p.header{
        text-align: center;
        font-size: 20px;
        font-weight:bold;
    }
    .alert-icon-float-left {
        font-size:32px;
        float:left;
        margin-right:15px;
    }
</style>
