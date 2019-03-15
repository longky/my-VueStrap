if (process.client) {
    window.history.replaceState = window.history.replaceState || function () {}
}
  
var myFun = {
    install: function (Vue, options) {
        Vue.prototype.convertor={
            ToUnicode:function (str) {
              str=str.replace(/'/ig,"quot;").replace(/\+/ig,"add;")
              return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
            },
            toGBK:function (str) {
              return unescape(str.replace(/\\u/gi, '%u'));
            }
        }
        Vue.prototype.clearNullAr=function(arr){
            for(var i=0,len=arr.length;i<len;i++){
                if(!arr[i]||arr[i]==''||arr[i] === undefined){
                    arr.splice(i,1);
                    len--;
                    i--;
                }
            }
            return arr;
        }
        Vue.prototype.extend=function(a,b,force=false){
            if(!(typeof a ==="object" && typeof b ==="object")){
                console.error("first two parameters must be object!");
                return {};
            }
            for(var prop in b){
                //console.log(prop)
                if(force || !a.hasOwnProperty(prop)) {
                    //console.log("update "+prop)
                    a[prop] = b[prop];
                };
            }
            return a;
        }
        Vue.prototype.fmtDate=fmtDate;
        Vue.prototype.fmtDate_s=fmtDate("yyyy-MM-dd");
        Vue.prototype.fmtDt=fmtDt;
        Vue.prototype.fmtDt_s=fmtDt("yyyy-MM-dd");
        Vue.prototype.fmtDt2=fmtDt2;
        Vue.prototype.isEmpty=isEmpty;
        Vue.prototype.sql=sql;
        Vue.prototype.isEqual=isEqual;
        Vue.filter('fmtDate', fmtDate);
        Vue.filter('trim', trim);
        Vue.filter('sql', sql);
        function trim(obj) {
            if(obj){
              return obj.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            }
            return '';
        };
        function sql(obj) {
            if(obj){
              return obj.replace(/quot;/g, "'").replace(/\|\|/g, '"').replace(/add;/g, "+");
            }
            return '';
        };
        function isEqual(a,b){
            if(typeof a!=="object" ||typeof b!=="object") throw new Error("参数应为对象！");
            for(var i in a){
                if (a[i]!=b[i]) return false;
            }
            return true
        }
        function fmtDate(fmt){ 
            //new Function+repalce变量
            fmt = fmt || "yyyy-MM-dd";
            let tmp =function (dt) {
                if(!dt) return '';
                var fmt="@fmt"
                if(typeof dt!=="object"){
                    //ie不兼容问题
                    if(typeof dt=='string'){
                        if(dt.indexOf("T")==-1) dt = dt.replace(/-/g,"/")
                        if(/^[0-9]{1,10}$/.test(dt)) dt=dt*1000
                    }
                    dt = new Date(dt||'');
                }
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                let o = {
                    'M+': dt.getMonth() + 1,
                    'd+': dt.getDate(),
                    'h+': dt.getHours(),
                    'm+': dt.getMinutes(),
                    's+': dt.getSeconds()
                };
                for (let k in o) {
                    if (new RegExp(`(${k})`).test(fmt)) {
                        let str = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
                    }
                }
                function padLeftZero(str) {
                    return ('00' + str).substr(str.length);
                }
                return fmt;
            } 
            tmp=tmp.toString().replace("@fmt",fmt);
            tmp= tmp.match(/\{([\s\S]*)\}$/)[1];
            return new Function ("dt",tmp);             
        }

        function fmtDt(fmt){ 
            let tmp =function () {
                //取代普通域变量,使用对象arguments+bind闭函数，相当于php function use();
                let dt=arguments[1];
                if(!dt) return '';
                let fmt=arguments[0]|| "yyyy-MM-dd hh:mm:ss";
                if(typeof dt!=="object"){
                    //ie不兼容问题
                    if(typeof dt=='string'){
                        if(dt.indexOf("T")==-1) dt = dt.replace(/-/g,"/")
                        if(/^[0-9]{1,10}$/.test(dt)) dt=dt*1000
                    }
                    dt = new Date(dt||'');
                  
                }
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                let o = {
                    'M+': dt.getMonth() + 1,
                    'd+': dt.getDate(),
                    'h+': dt.getHours(),
                    'm+': dt.getMinutes(),
                    's+': dt.getSeconds()
                };
                for (let k in o) {
                    if (new RegExp(`(${k})`).test(fmt)) {
                        let str = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
                    }
                }
                function padLeftZero(str) {
                    return ('00' + str).substr(str.length);
                }
                return fmt;
            } 
            return tmp.bind(undefined,fmt);
        }

        function fmtDt2(fmt){ 
            let tmp =function (dt,fmt) {
                if(!dt) return '';
                //取代普通域变量,函数参数+函数执行;
                fmt=fmt|| "yyyy-MM-dd hh:mm:ss";
                if(typeof dt!=="object"){
                    //ie不兼容问题
                    if(typeof dt=='string'){
                        if(dt.indexOf("T")==-1) dt = dt.replace(/-/g,"/")
                        if(/^[0-9]{1,10}$/.test(dt)) dt=dt*1000
                    }
                    dt = new Date(dt||'');
                }
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                let o = {
                    'M+': dt.getMonth() + 1,
                    'd+': dt.getDate(),
                    'h+': dt.getHours(),
                    'm+': dt.getMinutes(),
                    's+': dt.getSeconds()
                };
                for (let k in o) {
                    if (new RegExp(`(${k})`).test(fmt)) {
                        let str = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
                    }
                }
                function padLeftZero(str) {
                    return ('00' + str).substr(str.length);
                }
                return fmt;
            } 
            return function(dt){
                return tmp(dt,fmt);
            };
        }
        function isEmpty(obj)
        {
            for (var name in obj) 
            {
                return false;
            }
            return true;
        }
    }
  }

export  default myFun; 
 