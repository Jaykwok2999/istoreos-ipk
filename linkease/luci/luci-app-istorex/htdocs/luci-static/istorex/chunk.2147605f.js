var C=(r,h,d)=>new Promise((k,c)=>{var F=l=>{try{E(d.next(l))}catch(v){c(v)}},t=l=>{try{E(d.throw(l))}catch(v){c(v)}},E=l=>l.done?k(l.value):Promise.resolve(l.value).then(F,t);E((d=d.apply(r,h)).next())});import{_ as S,d as w,s as m,j as I,v as N,o,c as n,F as _,a as s,x,D as g,E as y,m as D,l as p,B as T,p as G,q as U,C as A,T as B}from"./index.js?v=5b4be379";const i=r=>(G("data-v-6bbc1a4d"),r=r(),U(),r),V=["onSubmit"],M=i(()=>s("p",null,"\u4E00\u4E2A\u7B80\u6613\u6C99\u7BB1\uFF0C\u65B9\u4FBF\u7528\u6765\u5B9E\u9A8C\u7CFB\u7EDF\u914D\u7F6E\u548C\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u672A\u5B8C\u6210\u7684\u8F6F\u4EF6\uFF0C\u4F46\u4E0D\u4FDD\u62A4Docker\u548C\u786C\u76D8\u7684\u6570\u636E",-1)),q={key:0,class:"label-msg warning"},z=i(()=>s("div",{class:"label-value"},null,-1)),L=i(()=>s("div",{class:"label-name"},[s("span",null,"\u72B6\u6001")],-1)),P={class:"label-value"},$=["value"],j=i(()=>s("option",{disabled:"",selected:"true"},"\u83B7\u53D6\u4E2D...",-1)),O=i(()=>s("option",{disabled:"",value:"stopped"},"\u672A\u5F00\u542F",-1)),W=i(()=>s("option",{disabled:"",value:"running"},"\u5F00\u542F\u4E2D",-1)),H=[j,O,W],J={key:0,class:"label-btns"},K=i(()=>s("div",{class:"label-name"},[s("span",null,"\u76EE\u6807\u78C1\u76D8\uFF08\u5EFA\u8BAE\u9009\u62E9U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378\uFF09")],-1)),Q={class:"label-value"},R=i(()=>s("option",{value:""},"\u8BF7\u9009\u62E9\u76EE\u6807\u78C1\u76D8",-1)),X=["value"],Y=i(()=>s("div",{class:"label-name"},[s("span",null,"\u76EE\u6807\u5206\u533A\uFF08\u5206\u533A\u5927\u5C0F\u987B\u5927\u4E8E8G\uFF0C\u5C06\u6B64\u5206\u533A\u4F5C\u4E3A\u5916\u90E8 overlay \u4F7F\u7528\uFF09")],-1)),Z={class:"label-value"},uu=i(()=>s("option",{selected:"true",value:""},"\u8BF7\u9009\u62E9\u76EE\u6807\u5206\u533A",-1)),su=["value","disabled"],tu={key:1,class:"label-btns"},eu=["disabled"],au={key:2,class:"label-msg warning"},ou=w({__name:"index",setup(r){return C(this,null,function*(){let h,d;const k=m(!1),c=m(""),F=m(0),t=I({status:"stopped",diskpath:"",partition:"",sandboxDisks:{disks:[]}}),E=()=>C(this,null,function*(){const b=yield Promise.all([A.Nas.SandboxDisks.GET(),A.Nas.GetSandbox.GET()]);try{const u=b[0];if(u!=null&&u.data){const{result:e,error:a}=u.data;e&&(t.sandboxDisks.disks=e.disks||[]),a&&(c.value=a)}}catch(u){c.value=u,F.value=3}try{const u=b[1];if(u!=null&&u.data){const{result:e}=u.data;e&&(t.status=e.status)}}catch(u){console.log(u)}});[h,d]=N(()=>E()),yield h,d();const l=()=>{t.partition=""},v=()=>C(this,null,function*(){if(confirm("\u6B64\u64CD\u4F5C\u4F1A\u5C06\u4F1A\u5220\u9664\u8BE5\u5206\u533A\u5168\u90E8\u6570\u636E,\u662F\u5426\u7EE7\u7EED?")){const b=B.Loading("\u914D\u7F6E\u4E2D...");try{const u=yield A.Nas.Sandbox.POST({path:t.partition});if(u!=null&&u.data){const{result:e,error:a,success:f}=u.data;a&&B.Warning(a),(u.data.success||0)==0&&B.Success("\u914D\u7F6E\u6210\u529F")}}catch(u){B.Error(`${u}`)}b.Close()}});return(b,u)=>(o(),n("form",{class:"form-container",onSubmit:T(v,["prevent"])},[M,t.sandboxDisks.disks.length==0?(o(),n("div",q," \u68C0\u6D4B\u4E0D\u5230\u6302\u8F7D\u7684\u78C1\u76D8\u4FE1\u606F\uFF0C\u8BF7\u5148\u63D2\u4E0A\u78C1\u76D8\uFF0C\u5EFA\u8BAE\u4F7F\u7528U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378 ")):(o(),n(_,{key:1},[z,L,s("div",P,[s("select",{value:t.status,disabled:""},H,8,$)]),F.value==0?(o(),n("div",J,[s("button",{class:"sumbit",type:"button",onClick:u[0]||(u[0]=e=>F.value=1)},"\u914D\u7F6E")])):F.value==1?(o(),n(_,{key:1},[K,s("div",Q,[x(s("select",{"onUpdate:modelValue":u[1]||(u[1]=e=>t.diskpath=e),onChange:l},[R,(o(!0),n(_,null,y(t.sandboxDisks.disks,(e,a)=>(o(),n("option",{value:e.path,key:a},p(e.venderModel)+"\uFF08"+p(e.size)+"\uFF09 ",9,X))),128))],544),[[g,t.diskpath]])]),t.diskpath?(o(),n(_,{key:0},[Y,(o(!0),n(_,null,y(t.sandboxDisks.disks,e=>(o(),n("div",Z,[e.path==t.diskpath?x((o(),n("select",{key:0,"onUpdate:modelValue":u[2]||(u[2]=a=>t.partition=a)},[uu,(o(!0),n(_,null,y(e.childrens,(a,f)=>(o(),n("option",{value:a.path,key:f,disabled:a.sizeInt<8192e6},p(a.name)+"\uFF08"+p(a.filesystem||"\u672A\u683C\u5F0F\u5316")+"\uFF09"+p(a.total),9,su))),128))],512)),[[g,t.partition]]):D("",!0)]))),256))],64)):D("",!0),t.diskpath&&t.partition?(o(),n("div",tu,[s("button",{class:"sumbit",disabled:k.value},"\u4FDD\u5B58",8,eu)])):D("",!0)],64)):D("",!0)],64)),c.value?(o(),n("div",au,p(c.value),1)):D("",!0)],40,V))})}});var lu=S(ou,[["__scopeId","data-v-6bbc1a4d"]]);export{lu as default};
