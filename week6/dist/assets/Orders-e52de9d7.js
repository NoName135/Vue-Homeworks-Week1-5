import{p as k}from"./Pagination-547b5f5a.js";import{_ as $,f as b,l as L,c as l,a as t,F as c,n as m,b as E,r as O,o,t as s,u as v}from"./index-3b038c07.js";const{VITE_API:h,VITE_PATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homeworks/week6/dist",MODE:"production",DEV:!1,PROD:!0},w={data(){return{orders:{},pagination:{}}},methods:{getOrders(n=1){this.loadings.isLoading=!0,this.$http.get(`${h}/api/${u}/admin/orders?page=${n}`).then(a=>{const{orders:i,pagination:g}=a.data;this.orders=i,this.pagination=g,this.loadings.isLoading=!1}).catch(a=>{this.loadings.isLoading=!1,alert(a.response.data.message)})},delOrder(n){this.loadings.isLoading=!0,this.$http.delete(`${h}/api/${u}/admin/order/${n}`).then(a=>{alert("已刪除訂單"),this.getOrders(this.pagination.current_page),this.loadings.isLoading=!1}).catch(a=>{alert(a.response.data.message),this.loadings.isLoading=!1})},changePaid(n){const a=this.orders.find(i=>i.id===n);a.is_paid=!a.is_paid,this.loadings.isLoading=!0,this.$http.put(`${h}/api/${u}/admin/order/${n}`,{data:{...a}}).then(i=>{alert("已變更付款狀態"),this.getOrders(this.pagination.current_page),this.loadings.isLoading=!1}).catch(i=>{alert(i.response.data.message),this.loadings.isLoading=!1})}},computed:{...b(L,["loadings"])},mounted(){this.getOrders()},components:{pagination:k}},P=t("h4",{class:"text-center"},"這裡是 後台 訂單列表",-1),D={class:"table-responsive mt-4"},V={class:"table mt-4 text-nowrap"},x=t("thead",null,[t("tr",null,[t("th",null,"訂單編號"),t("th",null,"聯絡人"),t("th",null,"聯絡地址"),t("th",null,"電子郵件"),t("th",null,"訂單品項"),t("th",null,"訂單日期"),t("th",null,"訂單狀態"),t("th",null,"操作")])],-1),y={class:"orderStatus"},I=["onClick"],T=["onClick"];function A(n,a,i,g,p,d){const f=O("pagination");return o(),l(c,null,[P,t("div",D,[t("table",V,[x,t("tbody",null,[(o(!0),l(c,null,m(p.orders,e=>(o(),l("tr",{key:e.id},[t("td",null,s(e.id),1),t("td",null,[t("p",null,s(e.user.name),1),t("p",null,s(e.user.tel),1)]),t("td",null,s(e.user.address),1),t("td",null,s(e.user.email),1),t("td",null,[(o(!0),l(c,null,m(e.products,(r,C,_)=>(o(),l("div",{key:_},s(_+1)+". "+s(r.product.title)+" x"+s(r.qty),1))),128))]),t("td",null,s(new Date(e.create_at*1e3).getFullYear())+"/"+s(new Date(e.create_at*1e3).getMonth()+1)+"/"+s(new Date(e.create_at*1e3).getDate()),1),t("td",y,[t("a",{href:"#",onClick:v(r=>d.changePaid(e.id),["prevent"])},s(e.is_paid?"已處理":"未處理"),9,I)]),t("td",null,[t("button",{type:"button",class:"btn btn-danger",onClick:r=>d.delOrder(e.id)},"刪除",8,T)])]))),128))])]),E(f,{"page-obj":p.pagination,onEmitPage:d.getOrders},null,8,["page-obj","onEmitPage"])])],64)}const F=$(w,[["render",A]]);export{F as default};
