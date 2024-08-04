(function(){"use strict";var o={3481:function(o,e,t){var n=t(5130),d=t(6768);function a(o,e,t,n,a,r){const l=(0,d.g2)("TodoHeader"),s=(0,d.g2)("TodoInput"),c=(0,d.g2)("TodoList"),i=(0,d.g2)("TodoFooter");return(0,d.uX)(),(0,d.CE)(d.FK,null,[(0,d.bF)(l),(0,d.bF)(s),(0,d.bF)(c),(0,d.bF)(i)],64)}var r=t(4232);function l(o,e,t,n,a,l){return(0,d.uX)(),(0,d.CE)("header",null,[(0,d.Lk)("h1",null,(0,r.v_)(o.headerTitle),1)])}var s=t(782),c={computed:{...(0,s.aH)("todoApp",["headerTitle"])}},i=t(1241);const u=(0,i.A)(c,[["render",l],["__scopeId","data-v-fc06ed24"]]);var m=u;const p=o=>((0,d.Qi)("data-v-cd20cae8"),o=o(),(0,d.jt)(),o),f={class:"inputBox shadow"},v=p((()=>(0,d.Lk)("i",{class:"fas fa-plus"},null,-1))),h=[v];function I(o,e,t,a,r,l){const s=(0,d.g2)("Modal");return(0,d.uX)(),(0,d.CE)("div",f,[(0,d.bo)((0,d.Lk)("input",{type:"text",id:"todoInput","onUpdate:modelValue":e[0]||(e[0]=o=>r.newTodoItem=o),onKeyup:e[1]||(e[1]=(0,n.jR)(((...o)=>l.addTodo&&l.addTodo(...o)),["enter"]))},null,544),[[n.Jo,r.newTodoItem]]),(0,d.Lk)("button",{class:"addBtn",onClick:e[2]||(e[2]=(...o)=>l.addTodo&&l.addTodo(...o))},h),r.showModal?((0,d.uX)(),(0,d.Wv)(s,{key:0,onClose:e[4]||(e[4]=o=>r.showModal=!1)},{header:(0,d.k6)((()=>[(0,d.Lk)("h3",null,[(0,d.eW)("경고! "),(0,d.Lk)("i",{class:"closeModalBtn fas fa-times",onClick:e[3]||(e[3]=o=>r.showModal=!1)})])])),body:(0,d.k6)((()=>[(0,d.eW)("아무것도 입력하지 않았습니다.")])),_:1})):(0,d.Q3)("",!0)])}const k={class:"modal-mask"},g={class:"modal-wrapper"},T={class:"modal-container"},b={class:"modal-header"},C={class:"modal-body"};function w(o,e){return(0,d.uX)(),(0,d.Wv)(n.eB,{name:"modal"},{default:(0,d.k6)((()=>[(0,d.Lk)("div",k,[(0,d.Lk)("div",g,[(0,d.Lk)("div",T,[(0,d.Lk)("div",b,[(0,d.RG)(o.$slots,"header",{},(()=>[(0,d.eW)(" default header ")]))]),(0,d.Lk)("div",C,[(0,d.RG)(o.$slots,"body",{},(()=>[(0,d.eW)(" default body ")]))])])])])])),_:3})}const O={},y=(0,i.A)(O,[["render",w]]);var L=y,A={data(){return{newTodoItem:"",showModal:!1}},methods:{addTodo(){if(this.newTodoItem){const o=this.newTodoItem.trim();this.$store.commit("todoApp/addOneItem",o),this.clearInput()}else this.showModal=!this.showModal},clearInput(){this.newTodoItem=""}},components:{Modal:L}};const _=(0,i.A)(A,[["render",I],["__scopeId","data-v-cd20cae8"]]);var x=_;const S=o=>((0,d.Qi)("data-v-0da764dc"),o=o(),(0,d.jt)(),o),F=["onClick"],M=["onClick"],j=S((()=>(0,d.Lk)("i",{class:"fas fa-trash-alt"},null,-1))),X=[j];function B(o,e,t,a,l,s){return(0,d.uX)(),(0,d.Wv)(n.F,{name:"list",tag:"ul",class:"todoList"},{default:(0,d.k6)((()=>[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(this.storedTodoItems,((e,t)=>((0,d.uX)(),(0,d.CE)("li",{key:e.item,class:"shadow"},[(0,d.Lk)("i",{class:(0,r.C4)(["checkBtn fas fa-check",{checkBtnCompleted:e.completed}]),onClick:n=>o.toggleComplete({todoItem:e,index:t})},null,10,F),(0,d.Lk)("span",{class:(0,r.C4)({textCompleted:e.completed})},(0,r.v_)(e.item),3),(0,d.Lk)("button",{class:"removeBtn",onClick:n=>o.removeTodo({todoItem:e,index:t})},X,8,M)])))),128))])),_:1})}var E={methods:{...(0,s.PY)("todoApp",{removeTodo:"removeOneItem",toggleComplete:"toggleOneItem"})},computed:{...(0,s.L8)("todoApp",["storedTodoItems"])}};const W=(0,i.A)(E,[["render",B],["__scopeId","data-v-0da764dc"]]);var H=W;const J={class:"clearAllContainer"};function P(o,e,t,a,r,l){return(0,d.bo)(((0,d.uX)(),(0,d.CE)("div",J,[(0,d.Lk)("button",{class:"clearAllBtn",onClick:e[0]||(e[0]=(...e)=>o.clearTodo&&o.clearTodo(...e))},"Clear All")],512)),[[n.aG,o.todoItems.length>0]])}var $={methods:{...(0,s.PY)("todoApp",{clearTodo:"clearAllItems"})},computed:{...(0,s.aH)("todoApp",["todoItems"])}};const G=(0,i.A)($,[["render",P],["__scopeId","data-v-0d11bed4"]]);var K=G,N={name:"App",methods:{},components:{TodoHeader:m,TodoInput:x,TodoList:H,TodoFooter:K}};const Q=(0,i.A)(N,[["render",a]]);var R=Q;t(4114);const Y={fetch(){const o=[];if(localStorage.length>0)for(let e=0;e<localStorage.length;e++)o.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return o}},D={headerTitle:"TODO it!",todoItems:Y.fetch()},U={storedTodoItems(o){return o.todoItems}},V={addOneItem(o,e){let t={completed:!1,item:e};localStorage.setItem(e,JSON.stringify(t)),o.todoItems.push(t)},removeOneItem(o,e){localStorage.removeItem(e.todoItem.item),o.todoItems.splice(e.index,1)},clearAllItems(o){confirm("전부 삭제하시겠습니까?")&&(localStorage.clear(),o.todoItems=[])},toggleOneItem(o,e){o.todoItems[e.index].completed=!o.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,JSON.stringify(e.todoItem))}};var q={namespaced:!0,state:D,getters:U,mutations:V};const z=(0,s.y$)({modules:{todoApp:q}});var Z=z;(0,n.Ef)(R).use(Z).mount("#app")}},e={};function t(n){var d=e[n];if(void 0!==d)return d.exports;var a=e[n]={exports:{}};return o[n].call(a.exports,a,a.exports,t),a.exports}t.m=o,function(){var o=[];t.O=function(e,n,d,a){if(!n){var r=1/0;for(i=0;i<o.length;i++){n=o[i][0],d=o[i][1],a=o[i][2];for(var l=!0,s=0;s<n.length;s++)(!1&a||r>=a)&&Object.keys(t.O).every((function(o){return t.O[o](n[s])}))?n.splice(s--,1):(l=!1,a<r&&(r=a));if(l){o.splice(i--,1);var c=d();void 0!==c&&(e=c)}}return e}a=a||0;for(var i=o.length;i>0&&o[i-1][2]>a;i--)o[i]=o[i-1];o[i]=[n,d,a]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={524:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var d,a,r=n[0],l=n[1],s=n[2],c=0;if(r.some((function(e){return 0!==o[e]}))){for(d in l)t.o(l,d)&&(t.m[d]=l[d]);if(s)var i=s(t)}for(e&&e(n);c<r.length;c++)a=r[c],t.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return t.O(i)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(3481)}));n=t.O(n)})();
//# sourceMappingURL=app.f212c1ba.js.map