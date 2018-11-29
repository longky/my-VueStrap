export default{
    methods:{
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
        fn_pager:function(str,option){
            if(!(typeof option==="object"&&option.pageNow&&option.pageSize)){throw new Error("函数fn_pager的option参数不正确"); }
            var header="with ";
            if(/with.+as/.test(str)){
              header=","
            } 
            if(/((select.*)\/\*main\*\/(.*?))[;]?$/.test(str)){
                var pager = "select * from tmp "+(!option.kw?"":"where "+option.kw)+ " order by id"+(!option.sw?"":","+option.sw);
                pager += " offset "+(option.pageNow-1)*option.pageSize+" rows fetch next "+option.pageSize+" rows only"
                str = header+"tmp as("+RegExp.$2+RegExp.$3+")select (select 0 errcode,'ok'errmsg,(select count(1) from tmp)total,isnull((@pager for json path),'[]')arr,'@sql'sql from (select 1 x)x for json path,without_array_wrapper)";
                str = str.replace("@pager",pager);
            } 
            str=str.replace(/'/ig,"quot;")
            str=str.replace(/\+/ig,"add;")
            return str;
          }
    }    
    
}