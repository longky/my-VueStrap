<template>
    <div class="ui segment">
        <div  v-show="loading" style="text-align:center" @click="test()" ><img src="https://bbk.800app.com/uploadfile/staticresource/238592/279833/loading.gif" width="40px" height="40px"></div>
        <div  v-show="select.onlysql"><pre v-text="select.data&&select.data.sql"></pre></div>
        <div  class="table" v-if="select.data&&select.data.arr&&header" :style="{height:maxheight}">
            <table class="ui selectable celled table" :style="{height:height}">
                <thead>
                    <tr class="positive">
                        <th v-for="h of header" :class="align(h&&h.label[0])" v-show="show(h)" v-text="label(h.label)"></th>
                    </tr>
                </thead>
                <tbody v-if="select.data && select.data.total==0">
                    <tr>
                        <td colspan="11" style="text-align: center">
                            <div class="ui pointing red  label">
                                OOPS! No Record!
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-if="select.data && select.data.total>0">
                    <tr v-for="item of select.data.arr">
                        <td v-for="h of header" :class="align(h.label[0])" v-show="show(h)" v-html="value(h,item)"></td>
                    </tr>
                </tbody>
                <tfoot>
                <tr><th colspan="11" v-show="select.data && select.data.arr && select.data.arr.length && select.data.total>0">
                    <div class="ui compact menu">
                        <a class="item">
                            <i class="icon users"></i> 记录总数
                            <div class="floating ui red label" v-text="select.data.total"></div>
                        </a>
                        <a class="item">
                            <i class="icon user"></i> 当前记录数
                            <div class="floating ui teal label" v-text="select.data.arr.length"></div>
                        </a>
                    </div>
                    <div v-show="pageTotal>0" class="ui right floated menu">
                        <a href="javascript:void(0)" class="item pager" v-text="'共 '+pageTotal+' 页'"></a>
                        <select class="ui fluid dropdown" id="span" @change="pagenation.pageNow=1" v-model="pagenation.pageSize">
                            <option v-for="p in arr_pageSize" :value="p.val" v-text="p.label" :selected="$index === 0 ? true : false"></option>
                        </select>
                        <a href="javascript:void(0)" class="icon pager" :class="{'disabled':pagenation.pageNow<=1}" v-on:click.prevent="pagenation.pageNow--;"><i class="left chevron icon"></i></a>
                        <a href="javascript:void(0)" v-for="i in pagerSpan" :class="{'active':i+pagerStart==pagenation.pageNow}" v-show="i+pagerStart<=pageTotal" class="item pager" v-text="i+pagerStart" v-on:click.prevent="pagenation.pageNow=i+pagerStart"></a>
                        <a href="javascript:void(0)" class="icon pager" :class="{'disabled':pagenation.pageNow>=pageTotal}" v-on:click.prevent="pagenation.pageNow++;alert(1)"><i class="right chevron icon"></i></a>
                    </div>
                </th></tr>
                </tfoot>
            </table>
        </div>
     </div>      
 </template>

<script> 

export default {
   components:{
   },
   props: {
       //loading进度
       loading: {
           type: Boolean,
           default: false
       },
       //显示高度
       maxheight: {
	       type: String,
           default: "auto"
       },
       height: {
	       type: String,
           default: "auto"
       },
       //输入表头
       header: {
           type: Array 
       },
       //表格填充数据
       select: {
       },
	   pagenation:{
	       type : Object
	   }
   },
   data:function(){
       return {
		 pagerSpan:6,
		 arr_pageSize:[
		    {val:10,label:"每页 10 条"},{val:20,label:"每页 20 条"},{val:30,label:"每页 30 条"},{val:50,label:"每页 50 条"},
		    {val:100,label:"每页 100 条"},{val:200,label:"每页 200 条"},{val:500,label:"每页 500 条"},{val:1000,label:"每页1000条"}
         ]
       }
   },
   computed:{
       pageTotal:function(){
	     if(this.select.data&&this.select.data.total){
		    return Math.ceil(this.select.data.total/this.pagenation.pageSize)
		 }
		 return 0;
	   },
       pagerStart:function(){
	     return (Math.ceil(this.pagenation.pageNow/this.pagerSpan)-1)*this.pagerSpan+1;
	   }
   },
   methods:{
      test:function(){
	  //   this.pagerSpan=3;
		// this.pagenation.pageNow=3;
	  console.log(JSON.stringify(this.pageTotal))
	  },
      show:function(h){
	    if(!h) return true;
	    var isShow=h.label[1];
		var key=h.value[2]||h.label[0];
		if (typeof isShow ==="boolean"){
		    return isShow;
		}else if(typeof isShow ==="function"){
		    return isShow(key);
		}else{
		    return true;
		}
	  },
      label:function(l){
	    var decr=l[2];
		var name=l&&l[0].split("|")[0];
		if(typeof decr==="function"){
		   return decr(name);
		}else{
		   return name;
		}
	  },
	  value:function(h,item){
	    var key=h.value[2]||h.label[0].split("|")[0];
	    var def=h.value[0];
		var method = h.value[1];
		if(key){
		    var res =(key=='row'?item:item[key])||h.value[0]; 
		    if(typeof method==="function"){
			   return method(res);
			}else if(['age','num','amt','dt'].indexOf(method)!=-1){
			   return this[method](res);
			}else{
			   return res;
			}
		}else{
		   return '';
		}
	  },
      align:function(lname){
	    var p= "";
	    p = lname&&lname.split("|")[1]||"";
		p = p.toLowerCase();
		switch (p){
		  case "l":
		     return "left aligned";
		  case "r":
		     return "right aligned";
		  default:
		     return "center aligned";
		}
	  },
      age:function(a){
          if(a){ 
            return a+'岁';
          }else{
            return '';
          }
      },
      dt:function(n){
          if(n==0||!n) return '';
          return this.fmtDate(n)
      },
	  num:function(num){
	     if(!num) return 0;
	     return parseInt(num);
	  },
	  amt:function(num){
	     if(!num) return '￥0.00';
	     return '￥'+num.toFixed(2);
	  }	  
   },
   watch:{
   },
   created:function(){

       console.log(JSON.stringify(this.select.data))
       console.log(JSON.stringify(this.header))
   }
}
</script>
<style scoped>
   .table{

       overflow-y:scroll;
   }

</style>