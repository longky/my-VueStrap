export default{
    methods:{
		labelify:function(l){
			var decr=l[2];
			var name=l[0]&&l[0].split("|")[0];
			if(typeof decr==="function"){
			  return decr(name);
			}else{
			  return name;
			}
		},
		gymName:function(code){
			if(code=="")  return "总部";
			if(this.select.gymNames[code]){
				return this.select.gymNames[code];
			}else{
			return code;
			};
		},
        obj2Arr(obj){
            var arr = []
            for (let i in obj) {
                arr.push("'"+obj[i]+"' "+i)
            }
            //console.log(arr.length)
            //if(arr.length==15) console.log(JSON.stringify(obj))
            return arr;
        },
        json2Sql(data){
             var self=this;
             var sql="";
             data.map(function(d){
                 sql += "select "+self.obj2Arr(d).join(",")+" union all ";
             })
             return  sql.slice(0,-10);
        },
        json(obj_str,key){
          if (typeof obj_str=="object") return obj_str[key];
          if (typeof obj_str!="string") return "invalid string"
          if(this.trim(obj_str)!=""){
            var obj=JSON.parse(obj_str);
            if(obj){
                return obj[key];
            }
          }
          return '';
        },
        toTimeStamp:function(dt){
            return (new Date(dt).getTime())/1000;
        },
        urlView:function(row){
            if(row.idjt&&row.idjt!="undefined"&&row.idjt.trim()!=""){
		    var u= "<a title='点击进入家庭' href='https://bbk.800app.com/index.jsp?mlist=1&mfs1=crm_sj&mid=@idjt&menu=3' target='_blank'>@phone</a>";
            return u.replace('@idjt',row.idjt).replace('@phone',row.phone);
            }
            return row.phone;
        },
        urlView_zx:function(label){
            let tmp=function (row,label){
                if(row.idzx){
                    var u ='<a title="点击进入咨询中心" href="https://bbk.800app.com/index.jsp?mlist=1&amp;mfs1=crm_zdytable_238592_25111&amp;mid=@idzx&amp;menu=3" target="_blank">@label</a>';
                    return u.replace('@idzx',row.idzx).replace('@label',row[label]||"查看");
                }
                return '查看';
            }
            return function(row){
                return tmp(row,label);
            };
        },
        fn_pager:function(str,option){
            if(!(typeof option==="object"&&option.pageNow&&option.pageSize)){throw new Error("函数fn_pager的option参数不正确"); }
            var header="with ";
            if(/with.+as/.test(str)){
              header=","
            } 
            if(/^(.*)(select\s*?)\/\*main\*\/(.*?)[;]?$/.test(str)){
                var pager = "select * from p order by @order id"+(!option.sw?"":","+option.sw);
                pager += " offset "+(option.pageNow-1)*option.pageSize+" rows fetch next "+option.pageSize+" rows only"
                str = RegExp.$1+header+"p1 as("+RegExp.$2+RegExp.$3+"),p as(select * from p1 @c) select (select 0 errcode,'ok'errmsg,(select count(1) from p)total,isnull((@pager for json path),'[]')arr,'@sql'sql from (select 1 x)x for json path,without_array_wrapper)";
                str = str.replace("@c",!option.condition?"":"where "+option.condition).replace("@pager",pager).replace("@order",option.order);
            }else{
                throw new Error("sql没有main标识！")
            }
            return str;
          }
    }    
    
}