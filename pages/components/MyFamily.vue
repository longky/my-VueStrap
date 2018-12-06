<template>
	<div class="ui segments">
			<div class="ui segment">
				<div class="ui three column stackable grid">
					<div class="column left aligned">
						<div class="input-group">
							<span class="input-group-addon">家庭视图</span>          
							<v-select :value.sync="familyType" :options="typeGroup" options-label="label" options-value="val" close-on-select></v-select>				
						</div>
					</div>
					<div class="column left aligned">
						<tooltip effect="scale" placement="bottom" content="筛选条件为空,则不条件限制">
						   <div class="ui small action input">
								<select class="ui compact selection dropdown" v-model="T">
							    	<option v-for="t of searchTypesFilter" :value="t.val" v-text="t.label"></option>
								</select>
								<input  class="optionval" v-for="s of this.searchTypes[T].sub_option" type="text" v-model="s.val" :placeholder="s.placeholder" @change="val_match(s)">
								<div type="submit" @click="init()" class="ui button" style="cursor:pointer">
									<i class="search icon"></i>搜索
								</div>                         
						   </div>
						</tooltip>
					</div>
					<div class="column center aligned">
						<div class="ui small action input">
							<a type="submit" href="https://bbk.800app.com/index.jsp?mfs=crm_sj&mid=-1&menu=3" target="_blank" class="btn btn-primary">新建家庭</a> 
						</div>
						<div class="ui small action input">
							<a type="submit" @click="goSave" class="btn btn-primary">批量修改负责老师</a> 
						</div>
					</div>
				</div>	
			</div>
			<div class="ui segment">
				<div class="ui form">
					<div class="inline fields" v-if="familyType=='potential'">
						<label>筛选条件：</label>
						<div class="field">
							<div class="ui checkbox">
								<input id="onlyNoItro" type="checkbox" v-model="onlyNoItro">
								<label for="onlyNoItro" >仅显示未体验的</label>
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
			
			<tlg-table :select="select" :checked="tchecked" :tb_style="tb_style" :maxheight="tbl_maxheight"  :header="theader" :pagenation=pagenation :loading="select.start"></tlg-table>
		
			<modal :show.sync="typeModal.show" effect="fade" :width="400">
				<div slot="modal-header" class="modal-header">
					<h4 class="modal-title">
					<b>{{typeModal.title}}</b> 
					</h4>
				</div>
				<div slot="modal-body" class="modal-body">
					<v-select :value.sync="updateType" :options="updateTypes" required></v-select>	
				</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-success" @click="goSave">确定</button>
					<button type="button" class="btn btn-default" @click="typeModal.show = false">取消</button>
				</div>
			</modal>
			<modal :show.sync="saveLsModal.show" effect="fade" :width="400">
				<div slot="modal-header" class="modal-header">
					<h4 class="modal-title">
					<b>{{typeModal.title}}</b> 
					</h4>
				</div>
				<div slot="modal-body" class="modal-body">
					<v-select :value.sync="updateType" :options="updateTypes" required></v-select>	
					<v-select :value.sync="saveLsModal.former" placeholder="原负责老师" :options="saveLsModal.formers" options-label="name" options-value="id" required></v-select>	
					<v-select :value.sync="saveLsModal.newer" placeholder="新负责老师" :options="saveLsModal.newers" options-label="name" options-value="id" required></v-select>	
				</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-success" @click="Save()">确定</button>
					<button type="button" class="btn btn-default" @click="saveLsModal.show = false">取消</button>
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
import tooltip from '@/src/Tooltip.vue'

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
	tooltip
  },
  data(){
    return{
		  tbl_maxheight:"480px",	 
		  familyType:'',
		  updateType:null,
		  updateTypes:['转移老师负责的所有例子','转移老师负责的全部潜在客户','转移老师负责的全部活跃会员','转移老师负责的全部历史会员','仅转移复选框选中的记录'],
		  T:"",
		  searchTypes:{
			  age:{label:"孩子年龄",sub_option:[{val:"",opr:">=",placeholder:"年龄下限(个月)",match:"^[1-9]\\d*$",errmsg:"请输入正确的年龄月数"},{val:"",opr:"<=",placeholder:"年龄上限(个月)",match:"^[1-9]\\d*$",errmsg:"请输入正确的年龄月数"}],context:"active,history,potential"},
			  kid:{label:"孩 子",sub_option:[{val:"",opr:"like",placeholder:"姓名任意字符"}],context:"all"},
			  parent:{label:"家长姓名",sub_option:[{val:"",opr:"like",placeholder:"姓名任意字符"}],context:"recent"},
			  phone:{label:"家长手机",sub_option:[{val:"",opr:"=",placeholder:"任意字符"}],context:"all"},
			  quality:{label:"质量评估",sub_option:[{val:"",opr:"like",placeholder:"任意字符"}],context:"potential"},
			  tutor:{label:"负责老师",sub_option:[{val:"",opr:"like",placeholder:"任意字符"}],context:"all"},
			  channel:{label:"获得家长信息的渠道",sub_option:[{val:"",opr:"like",placeholder:"任意字符"}],context:"potential"}
		  },
		  pagenation:{
            pageSize :10,
			pageNow:1,
			order:""
		  },
          alertError:{show:false,title:'错误提示',msg:''},
    	  alertInfo:{show:false,title:'操作提示',msg:'导入成功'},
          onlyNoItro:false,
		  sql_cur:sql_recent,
		  getQuery:this.getEnrol,
		  theader:[],
		  tchecked:false,
		  tb_style:{
			  th:{padding: ".22857143em .998571429em"},
			  td:{padding: ".38571429em",fontSize:"6px"}
		  },
		  typeModal:{show:false,title:'批量修改方式选择'},
		  saveLsModal:{show:false,title:'批量修改负责老师',formers:[],newers:[],former:"",newer:""},
	}
  },
  computed:{
		typeGroup:function(){
			if(this.isadmin||(this.select.gym_selected&&this.select.gym_selected.split("|")[1]==1)){
				return [
					{val:'recent',label:'本中心今天查看过的家庭'},{val:'potential',label:'我负责的潜在客户'},
					{val:'active',label:'我负责的活跃会员'},{val:'history',label:'我负责的历史会员'}	 
				];
			}else{
				return  [{val:'recent',label:'本中心今天查看过的家庭'}];
			}
		},
		isadmin:function(){
			if(this.select.acl.indexOf('系统管理员')!=-1
			||this.select.acl.indexOf('市场顾问')!=-1
			||this.select.acl.indexOf('运营顾问')!=-1
			||this.select.acl.indexOf('市场专员')!=-1){
				return true;
			}
			return false;
		},
		searchTypesFilter:function(){
			var res=[],item;
			for(var i in this.searchTypes){
				item=this.searchTypes[i];
				if(item['context']=="all"||item['context'].indexOf(this.familyType)!=-1){
                   res.push({label:item.label,val:i});
				}
			}
			this.T=res[0].val;
			return res;
		},
		condition:function(){
			let c_join=function(label,opr,val){
				label=label.replace(/\s+/ig,"")+" ";
				var res="";
				if(opr=="like"){
					res=label+opr+" '%"+val+"%'";
				}else{
					res=label+opr+((typeof val=='nummber')?val:" '"+val+"'");
				}
				return res;
			}
			var c=[],item=this.searchTypes[this.T];
			if(this.T!='age'&&item){
				item.sub_option.map(function(p){
					if(p.val.trim()!=""){
						//console.log(item.label,p.opr,p.val)
						c.push(c_join(item.label,p.opr,p.val))
					}
				})
			}
			//age特殊
			if(this.T=="age"){
			    var p=this.searchTypes[this.T].sub_option;
			    if(p&&p[0].val.trim()!=""&&p[0].val.trim()!="") c.push("孩子<>''");
			}
			if(this.onlyNoItro){
                c.push("孩子<>''");
			}
			c = Array.from(new Set(c));
			c = c.join(" and ");
			//console.error(c);
			return c;
		},
		whereLs:function(){
		   //return zx.crmzdy_81636452_id=iduser
		   return '';
		},
     	whereAge:function(){
		   var con='';
		   if(this.T=="age"){
			 var option=this.searchTypes[this.T].sub_option;
		     if(option[0].val.trim()!=''){
		        con += "and hz.crmzdy_80653845>=dateadd(d,-@up*30,getdate())";
			 }
			 if(option[1].val.trim()!=''){
			    con +=" and hz.crmzdy_80653845<=dateadd(d,-@down*30,getdate())";
			 }
             con = con.replace('@down',option[0].val).replace('@up',option[1].val);	
			 return con;
           }
           return '';		   
		},
		WhereNoIntro:function(){
			if(this.onlyNoItro){
               return " and not exists(select 1 from crm_zdytable_238592_23576_238592_view ty where zx.id=ty.crmzdy_81620307_id and ty.crmzdy_80653847_id=hz.id and datediff(d,getdate(),ty.crmzdy_80650731)>0 and ty.crmzdy_80650306<>'请假') and /*无出勤体验*/ not exists(select 1 from crm_zdytable_238592_23576_238592_view ty where zx.id=ty.crmzdy_81620307_id and ty.crmzdy_80653847_id=hz.id and datediff(d,getdate(),ty.crmzdy_80650731)<=0 and ty.crmzdy_80650306='出勤')"
			}
			return '';
		},
	    options:function(){
          return {pageSize:this.pagenation.pageSize,pageNow:this.pagenation.pageNow,order:this.pagenation.order,condition:this.condition} 
		}, 
		theader_comm: function(){
		    return [
				//{lable:['name','fn_show','fn_label_handle'],value:['default','fn_value_handle','key_override']}
			   {label:['操作'],value:['',this.urlView_zx(),'row']},
			   {label:['家长手机'],value:['',this.urlView_zx("家长手机"),'row']},
			   {label:['家长姓名|l'],value:[''],order:-1},
			   {label:['孩子|l'],value:[''],order:-1},
			   {label:['咨询日期',this.field_show("potential")],value:[''],order:-1},
			   {label:['获得家长信息的渠道',this.field_show("potential")],value:[''],order:-1},
			   {label:['客户质量评估|l',this.field_show("potential")],value:[''],order:-1},
			   {label:['最近体验|l',this.field_show("potential")],value:[''],order:-1},
			   {label:['负责老师'],value:[''],order:-1},
			   {label:['报名课程情况|l',this.field_show("active,history")],value:[''],order:-1},
               {label:['合同到期日期',this.field_show("history")],value:['','dt'],order:-1},
			   {label:['最近浏览时间'],value:['',this.fmtDt("yyyy-MM-dd hh:mm:ss")],order:2}
			]   
		},
		sqlBuilder:function () {
			var sql=this.sql_cur;
			console.log("2:"+this.sql_cur);
			sql=sql.replace("@whereAge",this.whereAge)
			sql=sql.replace("@idGym",this.select.gym_selected&&this.select.gym_selected.split("|")[0])
			sql=sql.replace("@whereNoIntro",this.WhereNoIntro)
			sql=sql.replace("@whereLs",this.whereLs)
			console.log(this.sql(sql))
			sql=this.fn_pager(sql,this.options) 
			console.log(this.sql(sql))
			sql = this.convertor.ToUnicode(sql);
			return sql; 
		}
  },
  methods:{	  
		goSave(){
			if(!this.updateType){
				this.typeModal.show=true;
			}else{
				if(this.tchecked){
					if(this.select.ids.length>0){
						this.getLs();
					}else{
                        this.alertInfo={show:false,title:'操作提示',msg:'请先搜索并选中需要更换负责老师的例子记录'};
					}
				}else{
					this.getLs();
				}
			}
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
	    field_show:function(types){
            return types.indexOf(this.familyType)!=-1;
		},
		val_match:function(op){
			if(op.match){
				var reg=new RegExp(op.match);
				var val=op.val.trim();
				if (val!=""&&!reg.test(val)){
					this.alertError={title:"错误提示",msg:op.errmsg,show:true};
					op.val="";
				}
			}
			console.log(JSON.stringify(this.condition))
		},
		validate:function(showErr=true){
		    if(!this.select.gym_selected) {
              if(showErr){
			     this.alertError={title:"错误提示",msg:"中心名称能不为空",show:true}
			  }
			  return false;
			}
		    return true;
	   },
	   save(){

	   },
	   getLs:function(){
			var self=this;
			self.select.start=true;
			var sql=sql_ls;
			sql = sql.replace(/@idGym/ig,this.select.gym_selected&&this.select.gym_selected.split("|")[0]);
			self.$axios({
				method: 'post',
				url:url_local,
                params:{sql1:sql,onlysql:(self.select.onlysql?1:0)}
			}).then(function(res){
			    if(res.status=200){
					console.log(JSON.stringify(res.data))
				   self.saveLsModal.former=res.data.former;
				   self.saveLsModal.newer=res.data.newer;
				}
				self.select.start=false;
            },function(res){
                self.select.start=false;
                console.log(res.status);
            });
	   },
       getFam:function(){
		    if(!this.validate()) return;
			var self=this;
			self.select.start=true;
			self.$axios({
				method: 'post',
				url:url_local,
                params:{sql1:this.sqlBuilder,onlysql:(self.select.onlysql?1:0)}
			}).then(function(res){
			    if(res.status=200){
				   self.select.data=res.data;
				}
				//console.log(JSON.stringify(self.select.data))
				self.select.start=false;
            },function(res){
                self.select.start=false;
                console.log(res.status);
            });
        },
		init(){
			this.select.data=null;
			var order="";
			var h=this.theader.find(function(h){
                return (h.label[1]==undefined||h.label[1])&&h.order&&h.order>-1;
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
		},
		debug(){
			console.error(this.select.gym_selected)
		}
  },
  watch: {
    familyType (newval) {
		this.theader=this.theader_comm;
		switch(newval){
			case 'recent':
				this.sql_cur=sql_recent;
				break;
			case "potential":
				this.sql_cur=sql_potential;
				break;
			case "active":
				this.sql_cur=sql_active;
				break;
			case "history":
				this.sql_cur=sql_history;
				console.log(this.sql_cur)
				break;
			default:
			   this.sql_cur=sql_recent;
		}
		if(this.validate(false)){
		   this.init();
		}
	},
    updateType(newval){
		if(!newval){
			this.alertError={show:true,title:'错误提示',msg:'请选择批量修改的方式'};
		}else{
			this.updateType=="仅转移复选框选中的记录"? this.tchecked=true:this.getLs();
			this.typeModal.show=false;
		}
	},
    pagenation:{
		handler(newValue, oldValue) {
			this.getFam();
　　　   },
　　　   deep: true
	},
    'select.gym_selected':function(){
		if(this.validate(false)){
			this.init();
		}
	}
  },
  created(){
	  this.select.cur_menu="family";
	  this.familyType="recent";
  }
}
</script>
 <style  scoped>
 .optionval{
   width:100px!important;
 }

</style>
 