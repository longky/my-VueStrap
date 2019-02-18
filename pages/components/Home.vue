
<template>
	<div class="ui segments">
			<div class="ui segment">
				<div class="ui four column stackable grid">
					<div class="column left aligned">
						<div class="input-group">
							<span class="input-group-addon">市场活动</span>          
							<v-select :value.sync="select.campaign_selected" placeholder="请选择活动名称" :options="select.campaigns" options-label="name" options-value="id"  @change="select.data=null;" search close-on-select>
							</v-select>					
						</div>
					</div>
					<div class="column left aligned">
						<v-select :value.sync="summerType" :options="typeGroup" options-label="label" options-value="val" close-on-select>
						</v-select>
					</div>
					<div class="column left aligned">
						<div class="input-group" :style="{width:'240px'}">
							<input type="text" v-model="search"  placeholder="关键字：手机号/姓名" class="form-control"/>
							<span class="input-group-addon" ><a href="#" @click.prevent="init()"><i class="glyphicon glyphicon-search"><span > 搜索</span></i></a></span>
						</div>
					</div>
					<div class="column left aligned">
						    <div class="ui mini action input">
						        <button class="btn btn-primary" @click="goSave()">导入家庭</button> 
						    </div>
							<div class="ui mini action input">    
								<button class="btn btn-danger" @click="editContact"
								v-show="select.acl.indexOf('中心运营总监')!=-1||select.acl.indexOf('系统管理员')!=-1">短信通知设置</button>           
							</div>
							<div class="ui mini action input">
						    	<a :href="url_export" target="_blank" class="btn btn-danger" v-show="isadmin">导出Excel</a> 
							</div>
							<div class="ui mini action input">
								<button class="btn btn-danger" @click="getSignlist"
								v-show="select.acl.indexOf('系统管理员')!=-1">Check</button>                
							</div>
					</div>
				</div>	
			</div>
			<div class="ui segment">
				<div class="ui form">
					<div class="inline fields" v-if="summerType!='coupon'&&select.campaign_selected&&select.campaign_selected.indexOf('集训营')!=-1">
						<label>筛选条件1：</label>
						<div class="field">
							<div class="ui checkbox">
								<input id="isrecd" type="checkbox" v-model="isrecd">
								<label for="isrecd" >仅显示朋友推荐的</label>
							</div>
						</div>
					</div>
					<div class="inline fields" v-if="summerType!='coupon'&&select.campaign_selected">
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
			
			<tlg-table :select="select" :checkbox="tchecked" :maxheight="tbl_maxheight" :tb_style="tb_style"   :header="theader" :pagenation=pagenation :loading="select.start"></tlg-table>
		
			<modal :show.sync="contactModal.show" effect="fade" :width="280" small>
				<div slot="modal-header" class="modal-header">
					<h4 class="modal-title">
					<b>{{contactModal.title}}</b> 
					</h4>
				</div>
				<div slot="modal-body" class="modal-body">
					<bs-input maxlength=11 track-by="$index"  v-for="(index,phone) of contactModal.phones" :value.sync="phone" :placeholder="'手机号'+(index+1)" :pattern="contactModal.phone_reg" icon></bs-input>
				</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-success" @click="saveCon">保存</button>
					<button type="button" class="btn btn-default" @click="contactModal.show = false">取消</button>
				</div>
			</modal>
			<modal :show.sync="checkModal.show" effect="fade" :width="400">
				<div slot="modal-header" class="modal-header">
					<h4 class="modal-title">
					<b>{{checkModal.title}}</b> 
					</h4>
				</div>
				<div slot="modal-body" class="modal-body">
				    <p v-text="checkModal.content"></p>
				</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-success" @click="goSave(1)">确定</button>
					<button type="button" class="btn btn-default" @click="goCancel()">放弃</button>
				</div>
			</modal>
			<alert :show.sync="alertError.show" placement="top" duration="4000" type="danger" width="400px" dismissable>
					<span class="glyphicon glyphicon-info-sign"></span>
					<strong>{{alertError.title}}</strong>
					<p style="padding-left:8%" v-html="alertError.msg"></p>
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
import alert from '@/src/Alert.vue'
import modal from '@/src/Modal.vue'
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
	alert,
	modal,
	bsInput,
	tlgTable
  },
  data(){
    return{
		  tbl_maxheight:"600px",	 
		  arr_status:["未处理","处理中","付费报名夏令营","扣课报名夏令营","成功报名正式课程","家长决定不报名"],
		  arr_status_cur:["未处理","处理中","付费报名夏令营","扣课报名夏令营","成功报名正式课程","家长决定不报名"],
          summerType:'preEnrol',
		  typeGroup:[{val:'preEnrol',label:'预报名信息'},{val:'coupon',label:'礼券名单'}],
		  isrecd:false,
          search:"",
		  pagenation:{
            pageSize :10,
			pageNow:1,
			order:""
		  },
          alertError:{show:false,title:'错误提示',msg:''},
    	  alertInfo:{show:false,title:'操作提示',msg:'导入成功'},
		  contactModal:{show:false,title:'手机联系人',phones:['',''],valid:true,phone_reg:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/},
		  checkModal:{show:false,title:'操作提示',content:'请先查询并选择下面要导入的名单（打勾）,再点击导入按钮'},
          check: {},
		  lack:[],
		  sql_cur:sql_preEnrol,
		  getQuery:this.getEnrol,
		  theader:[],
		  tb_style:{
			  th:{padding: ".22857143em .998571429em"},
			  td:{padding: ".38571429em",fontSize:"13px"}
		  },
		  tchecked:{
			  show:false,
			  ids:[],
			  checkall:false
		  },
	}
  },
  computed:{
		isadmin:function(){
			if(this.select.acl.indexOf('系统管理员')!=-1
			||this.select.acl.indexOf('市场顾问')!=-1
			||this.select.acl.indexOf('运营顾问')!=-1
			||this.select.acl.indexOf('市场专员')!=-1){
				return true;
			}
			return false;
		},
	    options:function(){
          return {pageSize:this.pagenation.pageSize,pageNow:this.pagenation.pageNow,order:this.pagenation.order,condition:this.condition} 
		}, 
		theader_pre: function(){
		    return [
		       //{lable:['name','fn_show','fn_label_handle'],value:['default','fn_value_handle','key_override']}
		       {label:['操作'],value:['',this.urlEdit,'row']},
			   {label:['家长手机'],value:['',this.urlView,'row']},
			   {label:['孩子姓名|l','',this.decorate],value:['','','babyname'],order:-1},
			   {label:['孩子年龄',this.field_show,this.ageLabel],value:['','age','babyage']},
			   {label:['报名中心|l'],value:['',this.gymName,'sign_centerid'],order:-1},
			   {label:['报名日期'],value:['','dt','dtenrol'],order:-1},
			   {label:['物料编号',this.isadmin && this.select.campaign_selected&&this.select.campaign_selected.indexOf('奥运集训营')!=-1],value:['','','m_code']},
			   {label:['来自朋友推荐',this.select.campaign_selected&&this.select.campaign_selected.indexOf('奥运集训营')!=-1],value:['','','isrecd']},
			   {label:['处理状态'],value:['','','status'],order:-1},
			   {label:['活动名称'],value:['','','campaign']},
			   {label:['备注',this.field_show],value:['','','remark']},
			   {label:['来源渠道',this.select.campaign_selected=="官网预约体验"],value:['','','channel'],order:-1},
			   {label:['创建时间'],value:['','dt','create_time'],order:2}
		     ]
		},
		theader_coupon: function(){
		    return [
			   {label:['姓名'],value:['','','user_name']},
			   {label:['手机'],value:['',this.urlView,'row']},
			   {label:['礼券名称'],value:['','','coupon_name'],order:-1},
			   {label:['使用截止日期'],value:['','','end_date'],order:1},
			   {label:['使用状态'],value:['','','status'],order:-1},
			   {label:['是否会员'],value:['','','type'],order:-1}
		     ]
		},
        url_export:function(){
              var url="https://bbk.800app.com/uploadfile/staticresource/238592/279833/dataInterface_excel.aspx"
              var sql="select camp.crmzdy_82053602 记录ID,isnull(gym.crm_name,'总部') 来源中心,camp.crmzdy_82053439 物料编号,case when isnull(crmzdy_82053430,'')='' then null else dateadd(S,cast(crmzdy_82053430 as int),'1970-01-01 08:00:00') end  预报名日期,camp.crmzdy_82053647 报名中心,camp.crm_name 报名手机,crmzdy_82051553  孩子姓名 ,crmzdy_82051554 孩子年龄,crmzdy_82053557 报名状态,crmzdy_82053258 活动动名称,camp.create_time 创建时间 from crm_zdytable_238592_27045_238592_view camp left join crm_zdytable_238592_23594_238592_view gym on gym.crmzdy_80620116 =camp.crmzdy_82053429 where crmzdy_82053258='@campaign' order by 报名中心,camp.create_time desc;"
              sql = this.convertor.ToUnicode(sql.replace('@campaign',this.select.campaign_selected));
              var filename = this.convertor.ToUnicode(this.select.campaign_selected+"_"+new Date().getTime());
              return url+'?sql='+sql+'&filename='+filename;
		},
		condition:function(){
			var c=[];
			if(this.summerType=="preEnrol"){
			  this.search.trim()&&c.push("phone+babyname like '%"+this.search+"%'")	
              this.isrecd&&c.push("isrecd ='是'");
			  c.push("status in ('"+this.arr_status_cur.join("','")+"')")
			}else{
              this.search.trim()&&c.push("phone+user_name like '%"+this.search+"%'")	
			}
			c=c.join(" and ");
			//console.error(c);
		    return c;  
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
			sql=this.fn_pager(sql,this.options) 
			//console.error(this.sql(sql))
			sql = this.convertor.ToUnicode(sql);
			return sql; 
		}
  },
  methods:{
	    goSave:function(type){
           if(type==1){
			  this.checkModal.show=false; 
              this.tchecked.show=true;
		   }else{
			  if(this.tchecked.ids&&this.tchecked.ids.length>0){
			     this.save();
			  }else{
				 this.checkModal.show=true; 
			  }
		   }
		},
		goCancel:function(){
		   this.tchecked.show=false;
		   this.checkModal.show=false; 
		},
		save:function(){
          console.log(this.tchecked.ids)
		},
	    ageLabel:function(field){
			if( this.select.campaign_selected.indexOf("官网预约体验")!=-1) return '孩子生日';
			 return field;
		},	  
	    decorate:function(field){
			  var arr=['婴芭莎展会'];
			  if(arr.indexOf(this.select.campaign_selected)!=-1)return '家长姓名';
			  return field;
		},
        urlEdit:function(row){
            var u= "<a class='btn btn-default btn-sm' href='https://bbk.800app.com/index.jsp?mfs=crm_zdytable_238592_27045&mid=@id&menu=1109&gym=@gym' target='_blank'>修改</a>";
            return u.replace('@id',row.id).replace('@gym',this.convertor.ToUnicode(this.select.gymNames[row.sign_centerid]));
        },
	    field_show:function(item){
		  //年龄隐藏
		  var arr=['婴芭莎展会','开学季','圣诞节'];
		  var val = this.select.campaign_selected;
		  if (item=='babyage' && arr.find(function(item){
				if(val.indexOf(item)!=-1) return true;
			})) return false;
		  //备注显示
		  var arr=['婴芭莎展会线下'];
		  if (item=='remark' &&  !arr.find(function(item){
				if(val.indexOf(item)!=-1) return true;
			})) return false;
		  return true;
		},
        getSignlist:function(){
            var self=this;
            self.$http.jsonp(url_signlist,{
            },{
                jsonp:'callback'
            }).then(function(res){
                var res_data = res.data;
                if(!res_data.code){ 
                    arr_uniqueid=res_data.uniqueid.split(",");
                    arr_uniqueid.map(function(u){
                        if(!self.check[u]){
                            self.check[u]=0;
                        }
                        self.check[u]+=1;
                    })
                    self.lack=[];
                    for(var key in self.check){
                        if(self.check[key]==1){
                            self.lack.push(key)
                        }
                    }
					this.checkResult(res_data.count)
                }
                self.select.start=false;
                
            },function(res){
                self.select.start=false;
                console.error(res.status);
            });
		},
		validate:function(showErr=true){
		    if(!this.select.campaign_selected) {
              if(showErr){
			     this.alertError={title:"错误提示",msg:"活动名称不能为空",show:true}
			  }
			  return false;
			}
		    if(!this.select.gym_selected) {
              if(showErr){
			     this.alertError={title:"错误提示",msg:"中心名称能不为空",show:true}
			  }
			  return false;
			}
		    return true;
		},
        checkResult:function(count_actual){
            if(this.lack.length>0){
                this.alertError.title="接口数据核对结果";
                this.alertError.msg="接口总记录数:"+count_actual+",oasis总记录数:"+this.select.data.total+";缺少数据ID:"+this.lack.join(",");
                this.alertError.show=true;
            }else{
                this.alertInfo.title="接口数据核对结果";
                this.alertInfo.msg="接口总记录数:"+count_actual+",oasis总记录数:"+this.select.data.total+"！核对成功，没有差异！";
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
				console.log(JSON.stringify(self.contactModal.phones))
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
		    if(!this.validate()) return;
			var self=this;
			self.select.start=true;
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
					var sql_data="";
					res.data.map(function(d){
					   sql_data +="select '";
	                   sql_data +=d.phone+"'phone,'"+d.centerid+"'centerid,'"+(d.user_name||"")+"'user_name,'";
					   sql_data +=d.coupon_name+"'coupon_name,'"+d.end_date+"'end_date,'"+d.status+"'status union all ";
					})
					sql_data = sql_data.slice(0,-11);
					tbl_coupon = tbl_coupon.replace('@sql_data',sql_data);
					tbl_coupon = this.fn_pager(tbl_coupon,this.options)
					//console.error(tbl_coupon)
                    self.$http.post(
                         url_local,
                         {
                           sql1:this.convertor.ToUnicode(tbl_coupon),
						   onlysql:(self.select.onlysql?1:0)
                         },
                         {emulateJSON: true}
                       )
                       .then(function(res){
							if(res.status==200){
								self.select.data=res.data;
							}
							self.select.start=false;
                       })
                       .catch(function(res) {
						 console.error(res);
						 self.select.start=false;
					   });
                }else{
					this.select.start=false;
					this.select.data={total:0,arr:[]}
				}
            },function(res){
                self.select.start=false;
                console.log(res.status);
            });
        },
	    getEnrol:function(){
			if(!this.validate()) return;
			var self=this;
            self.select.start=true;
            self.$http.jsonp(url_local,{
                sql1: self.sqlBuilder,
                onlysql:(self.select.onlysql?1:0)
            },{
                jsonp:'callback'
            }).then(function(res){ 
				if(res.status==200){
					self.select.data=res.data;
				}
				self.select.start=false;
				//console.log(JSON.stringify(self.select.data))
                //fn_pager
            },function(res){
                self.select.start=false;
			});
		},
		init(){
			switch(this.summerType){
				case 'coupon':
					this.sql_cur=sql_coupon;
					this.theader=this.theader_coupon;
					this.getQuery= this.getCouponlist;
					break;
				default:
					this.sql_cur=sql_preEnrol;
					this.theader=this.theader_pre;
					this.getQuery= this.getEnrol;
					break;
			}
			this.select.data=null;
			var order="";
			var h=this.theader.find(function(h){
                return h.order&&h.order>-1;
			})
			if(h){
				var order=(h.value[2]||this.labelify(h.label))+" "+(h.order==1?"asc":"desc")+",";
			}
			var v = {
				pageSize :10,
				pageNow:1,
				order:order
			}
			//if(this.isEqual(this.pagenation,v)){
			this.pagenation=v;
			//}
		}
  },
  watch: {
    summerType (newval) {
		this.init();
	},
    pagenation:{
		handler(newValue, oldValue) {
			//if(this.validate()){
			   this.getQuery();
			//}
　　　   },
　　　   deep: true
	}
  },
  created(){
      if(this.$route.params.id=='4'){
		  this.select.menuGroup[1].enabled=true;
	  }
  }
}
</script>
