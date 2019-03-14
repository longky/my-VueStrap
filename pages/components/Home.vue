
<template>
	<div class="ui segments">
			<div class="ui segment">
				<div class="ui relaxed grid">
					<div class="seven wide column">
						<div class="ui grid">
							<div class="ten wide column">
								<div class="input-group">
									<span class="input-group-addon">活动</span>          
									<v-select :value.sync="select.campaign_selected" placeholder="请选择活动名称" :options="select.campaigns" options-label="name" options-value="id"  @change="select.data=null;" search close-on-select>
									</v-select>					
								</div>
							</div>
							<div class="six wide column">
								<v-select :value.sync="summerType" :options="typeGroup" options-label="label" options-value="val" close-on-select>
								</v-select>
							</div>
						</div>
					</div>
					<div class="four wide column">
						<bs-input label="With dropdown and button" :value.sync="search"  placeholder="手机号/姓名"  showClear style="width:90%" type="text">
							<dropdown slot="after">
								<button slot="before" type="button" class="btn btn-default" @click.prevent="init()"><span class="glyphicon glyphicon-search"></span>&nbsp;搜索</button>
								<li><a href="#dropdown">...</a></li>
								<ul slot="dropdown-menu" class="dropdown-menu">
									<li><a href="#dropdown" @click.prevent="dialogAdv.show=true">高级筛选</a></li>
								</ul>
							</dropdown>
						</bs-input> 
					</div>
					<div class="five wide column">
						    <div class="ui mini action input">
						        <button class="btn btn-primary" @click="goSave()">导入家庭</button> 
						    </div>
							<div class="ui mini action input">    
								<button class="btn btn-danger" @click="editContact"
								v-show="select.acl.indexOf('中心运营总监')!=-1||isadmin">短信通知设置</button>           
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
						<label>筛选条件：</label>
						<div class="field">
							<div class="ui checkbox">
								<input id="isrecd" type="checkbox" v-model="isrecd">
								<label for="isrecd" >仅显示朋友推荐的</label>
							</div>
						</div>
					</div>
					<div class="inline fields" v-if="summerType!='coupon'&&select.campaign_selected">
						<label>筛选条件:</label>
						<div class="field" v-for="s in arr_status">
							<div class="ui checkbox">
								<input :id="s" type="checkbox" :value="s" v-model="arr_status_cur">
								<label :for="s">{{s}}</label>
							</div>
						</div>
					</div>
					<div class="inline fields" v-if="summerType!='coupon'&&select.campaign_selected">
						<label>筛选条件:</label>
						<div class="field">
							<div class="ui checkbox">
								<input id="recent" type="checkbox" value="30" v-model="recent">
								<label for="recent">仅显示最近30天</label>
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
			
			<tlg-table :select="select" :checkbox="tchecked" :maxheight="tbl_maxheight" :tb_style="tb_style"  :header="theader" :pagenation=pagenation :loading="select.start"></tlg-table>
		
			<modal :show.sync="dialogAdv.show" effect="fade" :width="280" small>
				<div slot="modal-header" class="modal-header">
					<h4 class="modal-title">
					<b>{{dialogAdv.title}}</b> 
					</h4>
				</div>
				<div slot="modal-body" class="modal-body">
					<template v-for="(index,c) of dialogAdv.conditions" >
						<form-group>
						<mz-datepicker  :start-time.sync="c.value[0]" :end-time.sync="c.value[1]" range confirm ch :placeholder="c.label" clearable v-if="c.type=='daterange'"></mz-datepicker>
						<bs-input maxlength=11 track-by="$index" style="width:87%" :placeholder="c.label" :value.sync="c.value" v-else></bs-input>
						</form-group>
					</template>	
					
				</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-success" @click="goSearch">搜索</button>
					<button type="button" class="btn btn-default" @click="dialogAdv.show = false">取消</button>
				</div>
			</modal>

			<modal :show.sync="contactModal.show" effect="fade" :width="380">
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

			<modal :show.sync="warnModal.show" effect="fade" small>
				<div slot="modal-header" class="modal-header">
					<h4 class="modal-title">
					<b>{{warnModal.title}}</b> 
					</h4>
				</div>
				<div slot="modal-body" class="modal-body">
				    <p v-text="warnModal.content"></p>
				</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-success" @click="editContact">确定</button>
					<button type="button" class="btn btn-danger" @click="warnModal.show=false;">放弃</button>
				</div>
			</modal>
			<alert :show.sync="alertError.show" placement="top" duration="8000" type="danger" width="400px" dismissable>
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
	.mz-datepicker input {
		border-radius: 6%;
		margin-bottom: 6%;
		
	}
</style>


<script>
import vSelect from '@/src/Select.vue'
import alert from '@/src/Alert.vue'
import modal from '@/src/Modal.vue'
import bsInput from '@/src/Input.vue'
import tlgTable from '@/src/Table.vue'
import dropdown from '@/src/Dropdown.vue'
import mzDatepicker from 'src/Daterange.vue'
import formGroup from 'src/formGroup.vue'
import qs from 'qs';

//channel
var qstr = "select * into #c from(select crmzdy_82058177 idjt,camp.id,isnull(nullif(camp.crmzdy_87673593,''),'无') quality,camp.crmzdy_82053647 gym,camp.crm_name phone,isnull(nullif(crmzdy_82053557,''),'未处理') status,isnull(dateadd(s,crmzdy_82053430+8*3600,'1970-01-01 00:00:00'),convert(varchar(20),create_time,120))dtenrol,crmzdy_82051555 centerid,replace(crmzdy_82053258,'官网预约体验','官网')campaign,crmzdy_82051555 sign_centerid,crmzdy_82051554 babyage,isnull(crmzdy_82051553,'') babyname,case when (charindex('-',crmzdy_82051554)>0 or charindex('/',crmzdy_82051554)>0) then crmzdy_82051554 when ISNUMERIC(crmzdy_82051554)=1 and crmzdy_82051554>'0' and crmzdy_82051554<'40' then dateadd(year,0-crmzdy_82051554,getdate()) else '' end birth,crmzdy_82053558 remark,convert(varchar(20),camp.create_time,120)create_time from crm_zdytable_238592_27045_238592_view camp where id in(@ids))c;"
qstr +="insert into crm_zdytable_238592_25112_238592(org_id,cust_id,crm_syrID,create_time,crmzdy_81756602_id,crm_name,crmzdy_81755633,crmzdy_81755550,crmzdy_81755551)select distinct 238592,279833,279833,getdate(),59 type,'总部活动-'+#c.campaign,#c.campaign,1,1  from #c left join crm_zdytable_238592_25112_238592_view channel on #c.campaign=channel.crmzdy_81755633 where channel.crm_name is null;"
qstr += "select #c.*,isnull((select top 1 id from crm_zdytable_238592_25112_238592_view channel where #c.campaign=channel.crmzdy_81755633 and crmzdy_81756602_id=59),0)idchannel into #cc from #c;"
//jt
qstr += "DECLARE @gt table(cust_id bigint,crm_syrID bigint,idzx bigint,idjt bigint,memo nvarchar(4000),memo2 nvarchar(4000),gymcode varchar(20),idcampaign varchar(100));"
qstr += "insert into crm_sj_238592(org_id,cust_id,crm_syrID,crmzdy_81535047_id,crmzdy_81535045_id/*ls*/,create_time,crm_surname,crmzdy_81988104/*hz*/,crmzdy_81988100/*birth*/,crmzdy_80620120/*phone*/,crmzdy_80620075/*gymName*/,crmzdy_80620075_id/*idgym*/,crmzdy_82021212/*code*/,crmzdy_81486365/*prov*/,crmzdy_81486367/*city*/,crmzdy_80652377/*relation*/,crmzdy_81497202/*quality*/,crmzdy_80620126/*memo*/,crmzdy_81620165/*zxdt*/,crmzdy_81755583_id,crmzdy_81535090_id)"
qstr += "select 238592,@iduser,gym.crm_syrID,@iduser,@iduser,getdate(),babyname+'家长',babyname,birth,phone,gym.crm_name,gym.id,gym.crmzdy_80620116,crmzdy_81744958,crmzdy_81744959,'无',quality,remark,getdate(),idchannel,idchannel from #cc join crm_zdytable_238592_23594_238592_view gym on gym.crmzdy_80620116=#cc.centerid left join crm_sj_238592_view jt on jt.crmzdy_80620120=#cc.phone"
qstr += " left join crm_sj_238592_view jt2 on jt2.crm_tel=#cc.phone where jt.crm_surname is null and jt2.crm_surname is null ;";
//zx
qstr += "select * into #tmp from(select *,row_number() over(partition by idjt order by idzx desc)xh from(select 238592 org_id,279833 cust_id,gym.crm_syrid,getdate() create_time,gym.crm_name+'-'+cast(jt.id as varchar) name,remark 备注,'|'+convert(varchar(10),getdate(),120)+',系统管理员:'+remark remark2,gym.id 中心,279833 负责老师,279833 接待老师,getdate() 咨询日期,#cc.quality 质量评估,#cc.centerid,#cc.idchannel,jt.id idjt,#cc.id idcamp,isnull(zx.id,0) idzx from #cc join crm_sj_238592_view jt on jt.crmzdy_80620120=#cc.phone join crm_zdytable_238592_23594_238592_view gym on gym.crmzdy_80620116=#cc.centerid left join crm_zdytable_238592_25111_238592_view zx on zx.crmzdy_81611091_id=jt.id and gym.id=zx.crmzdy_81620171_id union all select 238592,279833,gym.crm_syrid,getdate(),gym.crm_name+'-'+cast(jt.id as varchar),remark 备注,'|'+convert(varchar(10),getdate(),120)+',系统管理员:'+remark,gym.id 中心,279833 负责老师,279833 接待老师,getdate() 咨询日期,#cc.quality 质量评估,#cc.centerid,#cc.idchannel,jt.id,#cc.id,isnull(zx.id,0) idzx from #cc join crm_sj_238592_view jt on jt.crm_tel=#cc.phone  join crm_zdytable_238592_23594_238592_view gym on gym.crmzdy_80620116=#cc.centerid left join crm_zdytable_238592_25111_238592_view zx on zx.crmzdy_81611091_id=jt.id and gym.id=zx.crmzdy_81620171_id)a)a where xh=1;"; 
qstr += "insert into crm_zdytable_238592_25111_238592(org_id,cust_id,crm_syrid,create_time,crm_name,crmzdy_81741656 /*备注*/,crmzdy_81802275 /*gthz*/,crmzdy_81620171_id /*中心*/,crmzdy_81636452_id /*负责老师*/,crmzdy_81620164_id /*接待老师*/,crmzdy_81620163 /*咨询日期*/,crmzdy_81636187 /*质量评估*/,crmzdy_81769392 /*中心编号*/,crmzdy_81620162_id/*中心获得家长信息的渠道*/,crmzdy_81755584_id  /*家长是从哪里了解到小小运动馆的*/,crmzdy_81611091_id /*家庭*/,crmzdy_81757915 /*家庭id*/,crmzdy_87673451)output inserted.cust_id ,inserted.crm_syrid,inserted.id,inserted.crmzdy_81611091_id,inserted.crmzdy_81741656,inserted.crmzdy_81802275,inserted.crmzdy_81769392,inserted.crmzdy_87673451  into @gt select  org_id,cust_id,crm_syrid,create_time,name,备注,remark2,中心,负责老师,接待老师,咨询日期,质量评估,centerid,idchannel,idchannel,idjt,idjt,idcamp from #tmp where idzx=0;";
 //gt
qstr +="insert into crm_zdytable_238592_25121_238592(crm_name,crmzdy_81762823/*type*/,org_id,cust_id,crm_syrID,create_time,crmzdy_81748926_id/*idZx*/,crmzdy_81748934/*内容*/,crmzdy_81803726/*content2*/,crmzdy_81762900/*gymcode*/)"
qstr +="select upper('JTGTJL-')+cast(idzx as varchar)+'-'+convert(varchar(8),getdate(),112)+'B','潜在会员沟通',238592,cust_id,crm_syrid,getdate(),idzx,memo,memo2,gymcode from @gt where len(memo)>0;"
//hz
qstr +="insert into crm_zdytable_238592_23893_238592(crm_name,org_id,cust_id,crm_syrid,create_time,crmzdy_81783222/*idjt*/,crmzdy_80653840_id/*idjt*/,crmzdy_80653845/*babybrithday*/)select babyname,238592,@iduser,@iduser,getdate(),jt.id,jt.id,birth from #cc  join crm_sj_238592_view jt on jt.crmzdy_80620120=#cc.phone left join crm_zdytable_238592_23893_238592_view hz on hz.crmzdy_80653840_id=jt.id and hz.crm_name=babyname where hz.crm_name is null;"

//初始化中心搜索和综合搜索
qstr +="update jt set crmzdy_81802271/*hz*/=(select crm_name+',' from crm_zdytable_238592_23893_238592_view hz where hz.crmzdy_80653840_id=jt.id for xml path('')),crmzdy_81843299/*hz+age*/=(select crm_name+' '+crmzdy_81497217+',' from crm_zdytable_238592_23893_238592_view hz where hz.crmzdy_80653840_id=jt.id for xml path('')),crmzdy_82021205/*hz+birth*/=(select crm_name+' '+ convert(varchar(10),crmzdy_80653845,120)+',' from crm_zdytable_238592_23893_238592_view hz where hz.crmzdy_80653840_id=jt.id for xml path('')) from crm_sj_238592_view jt join #tmp on jt.id=#tmp.idjt;";
qstr +="update jt set crmzdy_81767199/*search*/=/*家长姓名*/isnull(crm_surname,'')+','+/*手机*/isnull(crmzdy_80620120,'')+/*hz*/isnull(crmzdy_80610668,''),crmzdy_81778300/*中心*/=(select crmzdy_81620171+',' from crm_zdytable_238592_25111_238592_view zx where zx.crmzdy_81611091_id=jt.id for xml path('')) from crm_sj_238592_view jt join #tmp on jt.id=#tmp.idjt;";
//update idjt for campaign
qstr +="update camp set crmzdy_82058177 =#tmp.idjt,crmzdy_82053557=case when isnull(crmzdy_82053557,'未处理')='未处理' then '处理中' else crmzdy_82053557 end from crm_zdytable_238592_27045_238592_view camp join #tmp on #tmp.idcamp=camp.id;"
//result info
qstr +="select top 1 0 errcode,'ok' errmsg,'@sql' sql from crm_yh_238592_view for json auto,without_array_wrapper;"

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
	tlgTable,
	dropdown,
	mzDatepicker,
	formGroup 
  },
  data(){
    return{
		  tbl_maxheight:"600px",	 
		  arr_status:["未处理","处理中","预约体验","体验出勤","付费报名夏令营","扣课报名夏令营","成功报名正式课程","家长决定不报名"],
		  arr_status_cur:["未处理","处理中","预约体验","体验出勤","付费报名夏令营","扣课报名夏令营","成功报名正式课程","家长决定不报名"],
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
		  warnModal:{show:false,title:'手机联系人设置提醒',content:'中心尚未《设置短信通知提醒》的手机联系人！请尽快进行设置！以免影响市场例子的及时跟进！'},
          check: {},
		  lack:[],
		  sql_cur:sql_preEnrol,
		  getQuery:this.getEnrol,
		  theader:[],
		  tb_style:{
			  th:{padding: ".22857143em .498571429em",fontSize:"14px"},
			  td:{padding: ".28571429em",fontSize:"12px"}
		  },
		  adv:false,
		  dialogAdv:{
			show:false,
			title:"高级筛选",
			conditions:[{label:"报名日期(选填)",type:'daterange',item:'dtenrol',value:[]},{label:"姓名(选填)",type:'string',item:"babyname",value:undefined},{label:"手机(选填)",type:'string',item:"phone",value:undefined}]
		  },
		  tchecked:{
			  show:false,
			  ids:[],
			  checkall:false
		  },
		  recent:['30']
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
			   {label:['是否上过早教',this.field_show],value:['','','zaojiao'],order:-1},
			   {label:['距离',this.field_show],value:['','','juli'],order:-1},
			   {label:['性格',this.field_show],value:['','','xingge'],order:-1},
			   {label:['能力',this.field_show],value:['','','nengli'],order:-1},
			   {label:['质量评估',this.field_show],value:['','','quality'],order:-1},
			   {label:['处理状态'],value:['','','status'],order:-1,class:{"text-danger":"'val'=='未处理'"}},
			   {label:['参加过的活动'],value:['','','campaign']},
			   {label:['备注',this.field_show],value:['','','remark']},
			   {label:['来源渠道|l',this.show_on_campaign('channel')],value:['','','channel'],order:-1},
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
			  this.search.trim()&&c.push("phone+babyname like '%"+this.search.trim()+"%'")	
              this.isrecd&&c.push("isrecd ='是'");
			  c.push("status in ('"+this.arr_status_cur.join("','")+"')")
			}else{
              this.search.trim()&&c.push("phone+user_name like '%"+this.search.trim()+"%'")	
			}
			if(this.adv){
				this.dialogAdv.conditions.forEach(function(cn){
					if(!cn.value)return;
					if(typeof cn.value=="object"&&!(cn.value[0]&&cn.value[1]))return;
					if(cn.type=="daterange"){
						c.push(cn.item+" between '"+cn.value[0]+"' and '"+cn.value[1]+" 23:59:59'")
					}
					if(cn.type=="string"){
						c.push(cn.item+" like '"+cn.value+"%'")
					}
				})
			    this.adv=false;
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
			if(this.recent&&this.recent[0]>0){
				sql= sql.replace('@recentWhere',"and create_time>=dateadd(d,-@recent,getdate())".replace("@recent",this.recent[0]));
			}else{
				sql= sql.replace('@recentWhere',"")
			}
			sql=this.fn_pager(sql,this.options) 
			//console.error(this.sql(sql))
			sql = this.convertor.ToUnicode(sql);
			return sql; 
		}
  },
  methods:{
	    goSearch:function(){ 
			this.adv=true;
			this.dialogAdv.show=false;
			this.init();
	    },
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
		show_on_campaign(field){
		   var res=false;
		   if(field=='channel'){
				if(this.select.campaign_selected=="官网预约体验")res=true;
				if(this.select.campaign_selected.indexOf("倒立")!=-1)res=true;
				if(this.select.campaign_selected=="所有")res=true;
		   }
		   return res;
		},
		save:function(){
		    var sql=qstr;
			sql=sql.replace(/@ids/g,this.tchecked.ids.join(","));
			sql=this.convertor.ToUnicode(sql)
			var self=this;
            self.select.start=true;
			self.$axios({
				method:'post',
				url: url_local,
				data: qs.stringify({sql1:sql,onlysql:(self.select.onlysql?1:0)})
			}).then(function(res){ 
				if(res.status==200&&res.data.errcode==0){
					self.alertInfo.show=true;
					self.init();
				}else{
					self.alertError={title:"错误提示",msg:"导入失败："+res.data.errmsg,show:true}
				}
				self.select.data=res.data;
				self.select.sql=res.sql;
				self.select.start=false;
				self.tchecked.ids=[];
				self.tchecked.checkall=false;
            },function(res){
				self.select.start=false;
				self.tchecked.ids=[];
				self.tchecked.checkall=false;
			});
		  
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
            return u.replace('@id',row.id)&&u.replace('@id',row.id).replace('@gym',this.convertor.ToUnicode(this.select.gymNames[row.sign_centerid]||row.gym))||'';
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
		  //地推字段显示
		  var arr=['预约试听','开业地推'];
		  var fields=['juli','nengli','xingge','zaojiao','quality'];
 
		  if (fields.indexOf(item)!=-1 &&  !arr.find(function(i){
				if(val.indexOf(i)!=-1) return true;
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
			this.warnModal.show=false;
			if(!this.select.gym_selected){
				this.alertError.title="错误提示";
				this.alertError.msg="请先选择中心！";
				this.alertError.show=true;
				return;
			}
			if(!this.isadmin&&this.select.acl.indexOf('中心运营总监')==-1){
				this.alertError.title="错误提示";
				this.alertError.msg="没有权限！请使用GD帐号权限进行设置";
				this.alertError.show=true;
				return;
			}
			if(!this.contactModal.phones||this.contactModal.phones.length==0){
				this.readContact();
			}
			this.contactModal.title=(this.select.gym_selected&&this.select.gymNames[this.select.gym_selected]||'')+"手机联系人";
			this.contactModal.show = true;
	   },
	  readContact(check){
			var self=this;
			self.warnModal.show=false;
			if (self.select.gym_selected=="all"||!self.select.gym_selected) return;
			var sql_phones="select isnull((select top 1 crm_name phones from crm_zdytable_238592_27059_238592_view where crmzdy_82053884='@gymcode'),'') phones"
			sql_phones = sql_phones.replace("@gymcode",self.select.gym_selected);
			self.$http.jsonp(url_jsonp,{
				sql1: sql_phones
			},{
				jsonp:'callback'
			}).then(function(res){
				var res= res.data.info[0].rec;
				if(typeof res=='object'){
					res = res[0].phones.split("|");
					if(check&&(!res||res.length==0||res[0]=="")){
						self.warnModal.show=true;
					}
					self.contactModal.phones= new Array(res[0]||'',res[1]||'');
				}
			},function(res){
				console.log(res.status);
			});
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
	},
	"select.gym_selected":{
		handler(newValue, oldValue) {
			if(this.select.gym_selected){
				this.init();
				this.readContact(1);
			}
　　　   },
　　　   deep: true
	}
  },
  created(){
      if(this.$route.params.id=='4'){
		  this.select.menuGroup[1].enabled=true;
	  }
	  this.select.campaign_selected="所有";
  }
}
</script>
