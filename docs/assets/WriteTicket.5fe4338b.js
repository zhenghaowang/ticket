import{Q as H,a as E,b as I,c as G,d as J,e as $,f as M,g as O,C as N}from"./ClosePopup.820e57e0.js";import{Q as X,c as Y,b as Z,a as W}from"./QLayout.5ddb04fa.js";import{j as D,r as p,ag as ee,a as le,m as g,t as K,q as o,p as u,F as S,ai as m,aj as s,v as ae,n as oe,z as te,ak as ue,x as U,C as re,al as se}from"./index.e1073169.js";import{t as q}from"./tools.fd3e3f8c.js";import{T as ne}from"./Ticket-a5.90506968.js";import"./use-dark.2aa41917.js";const ie=re("div",{class:"text-h6"},"\u62A5\u9500\u5355\u540D\u79F0",-1),ye=D({__name:"WriteTicket",setup(de){const c=p(!1),r=p(0),i=p(""),v=p(!1),d=q(),f=p(10),R=ee({5:2,10:1}),e=le(()=>d.selectedTicket(r.value));function z(){if(!r.value)return se.create({message:"\u672A\u9009\u62E9\u62A5\u9500\u5355",position:"top"}),!1;const t=window.open(`${window.location.href}printTicket/${r.value}`);t&&(t.onload=()=>{setTimeout(()=>{t==null||t.print(),t==null||t.close()},1e3)})}function n(t){var h,C,_,b,w,Q,A,T,x,V,k,L,F,P,B,j;let a=(t-1)*f.value,l=a+f.value;return{department:(h=e==null?void 0:e.value)==null?void 0:h.department,fillDate:(C=e==null?void 0:e.value)==null?void 0:C.fillDate,person:(_=e==null?void 0:e.value)==null?void 0:_.person,reason:(b=e==null?void 0:e.value)==null?void 0:b.reason,project:(w=e==null?void 0:e.value)==null?void 0:w.project,traffic:((Q=e==null?void 0:e.value)==null?void 0:Q.trafficList.slice(a,l))||[],hotel:((T=(A=e==null?void 0:e.value)==null?void 0:A.hotelList)==null?void 0:T.slice(a,l))||[],transport:((V=(x=e==null?void 0:e.value)==null?void 0:x.transportList)==null?void 0:V.slice(a,l))||[],other_1:((L=(k=e==null?void 0:e.value)==null?void 0:k.otherList_1)==null?void 0:L.slice(a,l))||[],other_2:((P=(F=e==null?void 0:e.value)==null?void 0:F.otherList_2)==null?void 0:P.slice(a,l))||[],other_3:((j=(B=e==null?void 0:e.value)==null?void 0:B.otherList_3)==null?void 0:j.slice(a,l))||[]}}function y(){r.value=q().creatTicket(i.value||"\u65B0\u62A5\u9500\u5355"),v.value=!1,i.value=""}return(t,a)=>(g(),K(S,null,[o(X,{view:"hHh lpR fFf"},{default:u(()=>[o(Y,null,{default:u(()=>[o(E,null,{default:u(()=>[o(Z,{"show-if-above":"",side:"right",bordered:"",width:"300"},{default:u(()=>[o(I,{nodes:m(d).treeNode,"node-key":"nodeKey","selected-color":"orange",selected:r.value,"onUpdate:selected":a[0]||(a[0]=l=>r.value=l),"default-expand-all":""},null,8,["nodes","selected"])]),_:1}),o(E,{style:{padding:"10px"}},{default:u(()=>[o(s,{outline:"",rounded:"",color:"primary",label:"\u6253\u5370\u62A5\u9500\u5355",onClick:z}),o(s,{outline:"",rounded:"",color:"primary",label:"\u65B0\u589E\u62A5\u9500\u5355",onClick:a[1]||(a[1]=l=>v.value=!0)}),o(s,{outline:"",rounded:"",color:"primary",label:"\u5220\u9664\u62A5\u9500\u5355",onClick:a[2]||(a[2]=l=>{m(d).deleteTicket(r.value),r.value=0})}),o(s,{outline:"",rounded:"",color:"primary",label:"\u589E\u52A0\u4E00\u9875",onClick:a[3]||(a[3]=l=>m(d).addPage(r.value))}),o(s,{outline:"",rounded:"",color:"primary",label:"\u51CF\u5C11\u4E00\u9875",onClick:a[4]||(a[4]=l=>m(d).reducePage(r.value))}),o(G,{label:"\u7F16\u8F91\u6A21\u5F0F",color:"green",modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=l=>c.value=l)},null,8,["modelValue"]),o(W,{style:{height:"90vh"}},{default:u(()=>[e.value?(g(!0),K(S,{key:0},ae(e.value.totalPage,l=>(g(),oe(ne,{key:l,"page-break":l!==1&&l%2==0&&l!==e.value.totalPage,isLast:e.value.totalPage===l,"max-row":f.value,"row-span":R[f.value],editable:c.value,page:l,"total-page":e.value.totalPage,department:e.value.department,"fill-date":e.value.fillDate,person:e.value.person,reason:e.value.reason,"project-name":e.value.project,"traffic-cost":n(l).traffic,transport:n(l).transport,"hotel-cost":n(l).hotel,"other-list_1":n(l).other_1,"other-list_2":n(l).other_2,"other-list_3":n(l).other_3,"ticket-key":e.value.ticketKey},null,8,["page-break","isLast","max-row","row-span","editable","page","total-page","department","fill-date","person","reason","project-name","traffic-cost","transport","hotel-cost","other-list_1","other-list_2","other-list_3","ticket-key"]))),128)):te("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{modelValue:v.value,"onUpdate:modelValue":a[8]||(a[8]=l=>v.value=l),persistent:""},{default:u(()=>[o(J,{style:{"min-width":"350px"}},{default:u(()=>[o($,null,{default:u(()=>[ie]),_:1}),o($,{class:"q-pt-none"},{default:u(()=>[o(M,{dense:"",modelValue:i.value,"onUpdate:modelValue":a[6]||(a[6]=l=>i.value=l),autofocus:"",onKeyup:ue(y,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),o(O,{align:"right",class:"text-primary"},{default:u(()=>[U(o(s,{flat:"",label:"\u53D6\u6D88",onClick:a[7]||(a[7]=l=>i.value="")},null,512),[[N]]),U(o(s,{flat:"",label:"\u786E\u8BA4",onClick:y},null,512),[[N]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{ye as default};
