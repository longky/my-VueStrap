<template>
	<div class="ui segments">
			<div class="ui segment">
				<div class="ui four column stackable grid">
					<div class="column left aligned">
						<div class="ui mini input">
							<div class="ui button">市场活动</div>          
							<v-select @change="init()" :value.sync="select.campaign_selected" placeholder="请选市场活动" :options="select.campaigns" options-label="name" options-value="id"  search close-on-select>
							</v-select>					
						</div>
					</div>
					<div class="column left aligned">
						<v-select @change="init()" :value.sync="summerType" :options="typeGroup" options-label="label" options-value="val" close-on-select>
						</v-select>
					</div>
					<div class="column left aligned">
						<div class="ui action input">
							<input type="text" v-model="search" :style="{width:'100px'}" placeholder="关键字">
							<div type="submit" @click="getQuery()" class="ui primary button"><i class="search icon"></i>搜索</div>   
							<a type="submit" :href="url_export" target="_blank" class="btn btn-default" v-show="isadmin">导出Excel</a>                
						</div>
					</div>
					<div class="column middle aligned">
							<div class="ui mini action input">
							<button type="submit" class="btn btn-danger" @click="editContact"
							v-show="select.acl.indexOf('中心运营总监')!=-1||select.acl.indexOf('系统管理员')!=-1">短信通知设置</button>                
							</div>
							<div class="ui mini action input">
							<button type="submit" class="btn btn-danger" @click="checkResult"
							v-show="select.acl.indexOf('系统管理员')!=-1">数据核对</button>                
							</div>
					</div>
				</div>	
			</div>
			<div class="ui segment">
				<div class="ui form">
					<div class="inline fields">
						<label>筛选条件1：</label>
						<div class="field">
							<div class="ui checkbox">
								<input id="isrecd" type="checkbox" v-model="isrecd">
								<label for="isrecd" >仅显示朋友推荐的</label>
							</div>
						</div>
					</div>
					<div class="inline fields">
						<label>筛选条件2:</label>
						<div class="field" v-for="s in arr_status">
							<div class="ui checkbox">
								<input :id="s" type="checkbox" :value="s" v-model="arr_status_cur">
								<label :for="s">{{s}}</label>
							</div>
						</div>
					</div>
					<div class="inline fields" v-if="select.acl.indexOf('系统管理员')!=-1">
						<label>打印SQL</label>
						<div class="field">
							<div class="ui checkbox">
								<input id="sql" type="checkbox" v-model="select.onlysql">
								<label for="sql">仅打印SQL</label>
							</div>
						</div>
					</div>
				</div>   
			</div>
			
			<tlg-table :tbl_data="select.data" :maxheight="tbl_maxheight" :height="height" :header="theader" :pagenation=pagenation :loading="select.start"></tlg-table>
		
			<modal :show.sync="contactModal.show" effect="fade" :width="280" small>
				<div slot="modal-header" class="modal-header">
					<h4 class="modal-title">
					<b>{{contactModal.title}}</b> 
					</h4>
				</div>
				<div slot="modal-body" class="modal-body">
					<bs-input maxlength=11 track-by="$index" v-for="phone of contactModal.phones" :value.sync="phone" :label="'手机号'+($index+1)"  placeholder="手机号" :pattern="contactModal.phone_reg" icon></bs-input>
				</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-success" @click="saveCon">保存</button>
					<button type="button" class="btn btn-default" @click="contactModal.show = false">取消</button>
				</div>
			</modal>
			<alert :show.sync="alertError.show" placement="top" duration="4000" type="danger" width="400px" dismissable>
					<span class="ion-information-circled alert-icon-float-left"></span>
					<strong>{{alertError.title}}</strong>
					<p v-html="alertError.msg"></p>
			</alert>
			<alert :show.sync="alertInfo.show" placement="top" duration="0" type="success" width="400px" dismissable>
					<span class="ion-information-circled alert-icon-float-left"></span>
					<strong>{{alertInfo.title}}</strong>
					<p v-html="alertInfo.msg"></p>
			</alert>
	</div>
</template>
<style scope>
	.box{
		border:1px dashed #000;
	}
</style>


<script>
import vSelect from '@/src/Select.vue'
import Alert from '@/src/Alert.vue'
import Modal from '@/src/Modal.vue'
import bsInput from '@/src/Input.vue'
import tlgTable from '@/src/Table.vue'

export default {
  props: {
    select: {
       type:Object
    }
  },
  components:{
	vSelect,
	Alert,
	Modal,
	bsInput,
	tlgTable
  },
  data(){
    return{
		  tbl_maxheight:"601px",
		  height:"600px",
		  arr_status:["未处理","处理中","付费报名夏令营","扣课报名夏令营","成功报名正式课程","家长决定不报名"],
		  arr_status_cur:["未处理","处理中","付费报名夏令营","扣课报名夏令营","成功报名正式课程","家长决定不报名"],
          summerType:'preEnrol',
		  typeGroup:[{val:'preEnrol',label:'预报名信息'},{val:'coupon',label:'礼券名单'}],
		  search:"", 
		  pagenation:{
            pageSize :10,
            pageNow:1,
		  },
		  myData:null,
          h5_data:[],
		  fansTotal:0,
          alertError:{show:false,title:'错误提示',msg:''},
    	  alertInfo:{show:false,title:'操作提示',msg:'导入成功'},
		  contactModal:{show:false,title:'手机联系人',phones:['',''],valid:true,phone_reg:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/},
          check: {},
		  lack:[],
		  sql_cur:sql_preEnrol,
		  getQuery:this.getEnrol,
		  theader:[]
	}
  },
  computed:{
		theader1: function(){
		    return [
		       //{lable:['name','fn_show','fn_label_ch'],value:['default','fn_handle','key_override']}
		       {label:['操作'],value:['',this.urlEdit,'row']},
			   {label:['家长手机'],value:['',this.urlView,'row']},
			   {label:['孩子姓名|l','',this.decorate],value:['','','babyname']},
			   {label:['孩子年龄',this.field_show],value:['','age','babyage']},
			   {label:['报名中心|l'],value:['','','sign_centerid']},
			   {label:['报名日期'],value:['','dt','dtenrol']},
			   {label:['创建时间'],value:['','dt','create_time']},
			   {label:['物料编号',this.isadmin && this.select.campaign_selected.indexOf('集训营')!=-1],value:['','','m_code']},
			   {label:['来自朋友推荐',this.select.campaign_selected.indexOf('集训营')!=-1],value:['',this.isrecd,'parentid']},
			   {label:['处理状态'],value:['','','m_code']},
			   {label:['活动名称'],value:['','','campaign']},
			   {label:['备注',this.field_show],value:['','','remark']}
		     ]
		},
		theader2: function(){
		    return [
			   {label:['姓名'],value:['','','user_name']},
			   {label:['手机'],value:['',this.urlView,'row']},
			   {label:['礼券名称'],value:['','','coupon_name']},
			   {label:['使用截止日期'],value:['','','end_date']},
			   {label:['使用状态'],value:['','','status']},
			   {label:['是否会员'],value:['','','type']}
		     ]
		},
        url_export:function(){
              var url="https://bbk.800app.com/uploadfile/staticresource/238592/279833/dataInterface_excel.aspx"
              var sql="select camp.crmzdy_82053602 记录ID,isnull(gym.crm_name,'总部') 来源中心,camp.crmzdy_82053439 物料编号,case when isnull(crmzdy_82053430,'')='' then null else dateadd(S,cast(crmzdy_82053430 as int),'1970-01-01 08:00:00') end  预报名日期,camp.crmzdy_82053647 报名中心,camp.crm_name 报名手机,crmzdy_82051553  孩子姓名 ,crmzdy_82051554 孩子年龄,crmzdy_82053557 报名状态,crmzdy_82053258 活动动名称,camp.create_time 创建时间 from crm_zdytable_238592_27045_238592_view camp left join crm_zdytable_238592_23594_238592_view gym on gym.crmzdy_80620116 =camp.crmzdy_82053429 where crmzdy_82053258='@campaign' order by 报名中心,camp.create_time desc;"
              sql = this.convertor.ToUnicode(sql.replace('@campaign',this.select.campaign_selected));
              var filename = this.convertor.ToUnicode(this.select.campaign_selected+"_"+new Date().getTime());
              return url+'?sql='+sql+'&filename='+filename;
		},
		sqlBuilder:function () {
			var id =this.select.gym_selected;
			var sql=this.sql_cur;
			if(id=="all"){
				sql= sql.replace(/@gymWhere/gi,"")
			}else{
				sql= sql.replace(/@gymWhere/gi,'and crmzdy_82051555='+id)
			}
			if(this.select.campaign_selected=="所有"){
				sql= sql.replace('@campaignWhere',"isnull(crmzdy_82053258,'')<>''")
			}else{
				sql= sql.replace('@campaignWhere',"crmzdy_82053258='"+this.select.campaign_selected+"'");
			}
			sql=this.fn_pager(sql,{pageSize:this.pagenation.pageSize,pageNow:this.pagenation.pageNow}) 
			//console.error(sql)
			sql = this.convertor.ToUnicode(sql);
			return sql; 
		}
  },
  methods:{	  
        urlEdit:function(row){
            var u= "<a class='btn btn-default btn-sm' href='https://bbk.800app.com/index.jsp?mfs=crm_zdytable_238592_27045&mid=@id&menu=1109&gym=@gym' target='_blank'>修改</a>";
            return u.replace('@id',row.id).replace('@gym',this.convertor.ToUnicode(this.select.gymNames[row.sign_centerid]));
        },
	    field_show:function(item){
		  //年龄隐藏
		  var arr=['婴芭莎展会'];
		  if (item=='age' && arr.indexOf(this.select.campaign_selected)!=-1)return false;
		  //备注显示
		  var arr=['婴芭莎展会线下'];
		  if (item=='remark' && arr.indexOf(this.select.campaign_selected)==-1)return false;
		  return true;
		},
		isrecd:function(val){
			if(val==1){
			return "是";
			}else{
			return "否";
			}
		},
        checkResult:function(){
            if(this.lack.length>0){
                this.alertError.title="接口数据核对结果";
                this.alertError.msg="接口总记录数:"+this.count_actual+",oasis总记录数:"+this.myData.length+";缺少数据ID:"+this.lack.join(",");
                this.alertError.show=true;
            }else{
                this.alertInfo.title="接口数据核对结果";
                this.alertInfo.msg="接口总记录数:"+this.count_actual+",oasis总记录数:"+this.myData.length+"！核对成功，没有差异！";
                this.alertInfo.show=true;
            }
        },  
        editContact:function(){
			var self=this;
			if(!self.select.gym_selected){
				this.alertError.title="错误提示";
				this.alertError.msg="请先选择中心！";
				this.alertError.show=true;
				return;
			}
			var sql_phones="select crm_name phones from crm_zdytable_238592_27059_238592_view where crmzdy_82053884='"+self.select.gym_selected+"'";
			self.$http.jsonp(url_jsonp,{
				sql1: sql_phones
			},{
				jsonp:'callback'
			}).then(function(res){
				var res= res.data.info[0].rec;
				if(typeof res=='object'){
					res = res[0].phones.split("|");
					self.contactModal.phones= new Array(res[0]||'',res[1]||'');
				}
				//console.log(JSON.stringify(self.contactModal.phones))
			},function(res){
				console.log(res.status);
			});
			this.contactModal.show = true;
	   },
	   saveCon:function(){
			var self=this;
			self.contactModal.valid=true
			var res=self.contactModal.phones.filter(function(p){
				if(p!="" && !self.contactModal.phone_reg.test(p)){
				self.contactModal.valid=false;
				}
				return p!='';
			});
			if(!this.contactModal.valid){
					this.alertError.title="错误提示";
					this.alertError.msg="手机号录入不正确！";
					this.alertError.show=true;
					return;
			} 
			if(res.join('').trim()==''){
					this.alertInfo.title="警告";
					this.alertInfo.msg="请至少录入一个手机号信息！";
					this.alertInfo.show=true;
					return;
			} 
			var sql_update_phones = "merge into crm_zdytable_238592_27059_238592_view t using (select '@phones' phones,'@gymcode' gymcode ) s on t.crmzdy_82053884=s.gymcode when matched then update set t.crm_name= s.phones";
			sql_update_phones += " when not matched by target then insert (org_id,cust_id,crm_syrID,create_time,crm_name,crmzdy_82053884/*gymcode*/) values (238592,279833,279833,getdate(),s.phones,s.gymcode);select 'ok' status;"; 
			sql_update_phones = sql_update_phones.replace('@phones',res.join('|')).replace('@gymcode',self.select.gym_selected);
			self.$http.jsonp(url_jsonp,{
				sql1: sql_update_phones
			},{
				jsonp:'callback'
			}).then(function(res){
				var res= res.data.info[0].rec;
				if(typeof res=='object'){
					this.alertInfo.title="提示";
					this.alertInfo.msg="操作成功";
					this.alertInfo.show=true;
				}else{
					this.alertError.title="提示";
					this.alertError.msg="保存失败";
					this.alertError.show=true;
				}
			},function(res){
				console.log(res.status);
			});
			this.contactModal.show = false;
	   },
       getCouponlist:function(){
			var self=this;
			self.theader=self.theader1;
			self.select.start=true;
			self.select.data=null;
			self.$http.jsonp(url_coupon,{
                page: self.pageNow,
                centerid: self.select.gym_selected,
				campain: self.select.campaign_selected,
				pageSize:11
            },{
                jsonp:'callback'
            }).then(function(res){
				var tbl_coupon=sql_coupon;
				res = res.data;
			    if(res && res.total>0){
				    self.select.total=res.total;
					var sql_data="";
					res.data.map(function(d){
					   sql_data +="select '";
	                   sql_data +=d.phone+"'phone,'"+d.centerid+"'centerid,'"+(d.user_name||"")+"'user_name,'";
					   sql_data +=d.coupon_name+"'coupon_name,'"+d.end_date+"'end_date,'"+d.status+"'status union all ";
					})
					sql_data = sql_data.slice(0,-11);
					tbl_coupon = tbl_coupon.replace('@sql_data',sql_data);
					console.log(tbl_coupon)
                    self.$http.post(
                         url_jsonp,
                         {
                           sql1:this.convertor.ToUnicode(tbl_coupon),
						   onlysql:(self.select.onlysql?1:0)
                         },
                         {emulateJSON: true}
                       )
                       .then(function(res){
                          var sql =res.data.info[1].sql;
                          sql =sql.replace(/quot;/gi,"'")
                          var res_data = res.data.info[0].rec;
                          if(res_data.constructor!=String&&!self.select.onlysql){ 
						        self.select.data=res_data;
				          }
                       })
                       .catch(function(res) {
                         console.error(res);
                       });
 
                }
                self.select.start=false;
                
            },function(res){
                self.select.start=false;
                console.log(res.status);
            });
        },
	    getEnrol:function(){
			this.theader=this.theader1;
			if (!this.select.gym_selected) return;
			var self=this;
			self.myData=null;
            self.select.start=true;
            self.$http.jsonp(url_local,{
                sql1: self.sqlBuilder,
                onlysql:(self.select.onlysql?1:0)
            },{
                jsonp:'callback'
            }).then(function(res){
				res=res.data;
				if(res.errcode==0){
					self.select.data=res;
				}
				self.select.start=false;
				//console.log(JSON.stringify(self.select.data))
                //fn_pager
            },function(res){
                self.select.start=false;
			});
	    },
  },
  watch: {
    summerType (newval) {
		this.myData=null;
		switch(newval){
			case 'coupon':
				this.sql_cur=sql_coupon;
				this.getQuery= this.getCouponlist;
				break;
			default:
				this.sql_cur=sql_preEnrol;
				this.getQuery= this.getEnrol;
				break;
		}
	},
    pagenation:{
		handler(newValue, oldValue) {
            this.getEnrol();
　　　   },
　　　   deep: true
	}
  },
  created(){
      if(this.$route.params.id=='4'){
		  this.select.menuGroup[1].isEnalbe=true;
	  }
  }
}
</script>
