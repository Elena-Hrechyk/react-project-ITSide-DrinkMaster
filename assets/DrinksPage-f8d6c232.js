import{u as z,s as R,c as Ee,j as h,r as m,t as E,F as we,d as ce,e as Ce,f as ie,a as Ie,h as ke,i as Le,k as _e,l as Se,m as je,o as Y,C as Oe}from"./index-c06c9abb.js";import{a as Re,s as De,c as Ne,b as Pe,d as Me,e as Fe}from"./drinksSelectors-9199f088.js";import{S as de}from"./react-select.esm-45ff4f13.js";const ze=()=>{const e=z(Re),t=z(De),o=z(Ne),i=z(Pe),a=z(Me),c=z(Fe);return{isLoading:e,drinks:t,mainPageDrinks:o,error:i,total:a,favoriteDrinks:c}},$e=R.ul`
   margin-bottom: 40px;

  display: grid;
  grid-row-gap: 40px;
  list-style: none;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ae=R.li`
 width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,Be=R.img`
 width: 335px;
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,He=R.div`
margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,We=R.h5`
 font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Qe=R(Ee)`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`,qe=({drinks:e})=>h.jsx(h.Fragment,{children:h.jsx($e,{children:e.length>0?e.map(({_id:t,drink:o,drinkThumb:i})=>h.jsxs(Ae,{children:[h.jsx(Be,{src:i}),h.jsxs(He,{children:[h.jsx(We,{children:o}),h.jsx(Qe,{to:`/drinks/${t}`,children:"See more"})]})]},t)):e.length===0?h.jsx("p",{children:"Sorry. There are no coctails ..."}):null})}),Ve=e=>e.filter.categories,Ge=e=>e.filter.ingredients;function ye(e){var t,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=ye(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function $(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=ye(e))&&(i&&(i+=" "),i+=t);return i}const G=e=>typeof e=="number"&&!isNaN(e),Q=e=>typeof e=="string",S=e=>typeof e=="function",Z=e=>Q(e)||S(e)?e:null,re=e=>m.isValidElement(e)||Q(e)||S(e)||G(e);function Ue(e,t,o){o===void 0&&(o=300);const{scrollHeight:i,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=i+"px",a.transition=`all ${o}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,o)})})}function ne(e){let{enter:t,exit:o,appendPosition:i=!1,collapse:a=!0,collapseDuration:c=300}=e;return function(n){let{children:s,position:g,preventExitTransition:x,done:v,nodeRef:f,isIn:C}=n;const l=i?`${t}--${g}`:t,u=i?`${o}--${g}`:o,p=m.useRef(0);return m.useLayoutEffect(()=>{const r=f.current,d=l.split(" "),I=_=>{_.target===f.current&&(r.dispatchEvent(new Event("d")),r.removeEventListener("animationend",I),r.removeEventListener("animationcancel",I),p.current===0&&_.type!=="animationcancel"&&r.classList.remove(...d))};r.classList.add(...d),r.addEventListener("animationend",I),r.addEventListener("animationcancel",I)},[]),m.useEffect(()=>{const r=f.current,d=()=>{r.removeEventListener("animationend",d),a?Ue(r,v,c):v()};C||(x?d():(p.current=1,r.className+=` ${u}`,r.addEventListener("animationend",d)))},[C]),E.createElement(E.Fragment,null,s)}}function ue(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const N={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const o=this.list.get(e).filter(i=>i!==t);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const o=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},K=e=>{let{theme:t,type:o,...i}=e;return E.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...i})},se={info:function(e){return E.createElement(K,{...e},E.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return E.createElement(K,{...e},E.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return E.createElement(K,{...e},E.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return E.createElement(K,{...e},E.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return E.createElement("div",{className:"Toastify__spinner"})}};function Xe(e){const[,t]=m.useReducer(l=>l+1,0),[o,i]=m.useState([]),a=m.useRef(null),c=m.useRef(new Map).current,n=l=>o.indexOf(l)!==-1,s=m.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:l=>c.get(l)}).current;function g(l){let{containerId:u}=l;const{limit:p}=s.props;!p||u&&s.containerId!==u||(s.count-=s.queue.length,s.queue=[])}function x(l){i(u=>l==null?[]:u.filter(p=>p!==l))}function v(){const{toastContent:l,toastProps:u,staleId:p}=s.queue.shift();C(l,u,p)}function f(l,u){let{delay:p,staleId:r,...d}=u;if(!re(l)||function(D){return!a.current||s.props.enableMultiContainer&&D.containerId!==s.props.containerId||c.has(D.toastId)&&D.updateId==null}(d))return;const{toastId:I,updateId:_,data:y}=d,{props:b}=s,T=()=>x(I),L=_==null;L&&s.count++;const k={...b,style:b.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(d).filter(D=>{let[M,j]=D;return j!=null})),toastId:I,updateId:_,data:y,closeToast:T,isIn:!1,className:Z(d.className||b.toastClassName),bodyClassName:Z(d.bodyClassName||b.bodyClassName),progressClassName:Z(d.progressClassName||b.progressClassName),autoClose:!d.isLoading&&(P=d.autoClose,q=b.autoClose,P===!1||G(P)&&P>0?P:q),deleteToast(){const D=ue(c.get(I),"removed");c.delete(I),N.emit(4,D);const M=s.queue.length;if(s.count=I==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),M>0){const j=I==null?s.props.limit:1;if(M===1||j===1)s.displayedToast++,v();else{const B=j>M?M:j;s.displayedToast=B;for(let O=0;O<B;O++)v()}}else t()}};var P,q;k.iconOut=function(D){let{theme:M,type:j,isLoading:B,icon:O}=D,F=null;const H={theme:M,type:j};return O===!1||(S(O)?F=O(H):m.isValidElement(O)?F=m.cloneElement(O,H):Q(O)||G(O)?F=O:B?F=se.spinner():(X=>X in se)(j)&&(F=se[j](H))),F}(k),S(d.onOpen)&&(k.onOpen=d.onOpen),S(d.onClose)&&(k.onClose=d.onClose),k.closeButton=b.closeButton,d.closeButton===!1||re(d.closeButton)?k.closeButton=d.closeButton:d.closeButton===!0&&(k.closeButton=!re(b.closeButton)||b.closeButton);let A=l;m.isValidElement(l)&&!Q(l.type)?A=m.cloneElement(l,{closeToast:T,toastProps:k,data:y}):S(l)&&(A=l({closeToast:T,toastProps:k,data:y})),b.limit&&b.limit>0&&s.count>b.limit&&L?s.queue.push({toastContent:A,toastProps:k,staleId:r}):G(p)?setTimeout(()=>{C(A,k,r)},p):C(A,k,r)}function C(l,u,p){const{toastId:r}=u;p&&c.delete(p);const d={content:l,props:u};c.set(r,d),i(I=>[...I,r].filter(_=>_!==p)),N.emit(4,ue(d,d.props.updateId==null?"added":"updated"))}return m.useEffect(()=>(s.containerId=e.containerId,N.cancelEmit(3).on(0,f).on(1,l=>a.current&&x(l)).on(5,g).emit(2,s),()=>{c.clear(),N.emit(3,s)}),[]),m.useEffect(()=>{s.props=e,s.isToastActive=n,s.displayedToast=o.length}),{getToastToRender:function(l){const u=new Map,p=Array.from(c.values());return e.newestOnTop&&p.reverse(),p.forEach(r=>{const{position:d}=r.props;u.has(d)||u.set(d,[]),u.get(d).push(r)}),Array.from(u,r=>l(r[0],r[1]))},containerRef:a,isToastActive:n}}function pe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function me(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Ye(e){const[t,o]=m.useState(!1),[i,a]=m.useState(!1),c=m.useRef(null),n=m.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=m.useRef(e),{autoClose:g,pauseOnHover:x,closeToast:v,onClick:f,closeOnClick:C}=e;function l(y){if(e.draggable){y.nativeEvent.type==="touchstart"&&y.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",I),document.addEventListener("touchmove",d),document.addEventListener("touchend",I);const b=c.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=b.getBoundingClientRect(),b.style.transition="",n.x=pe(y.nativeEvent),n.y=me(y.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function u(y){if(n.boundingRect){const{top:b,bottom:T,left:L,right:k}=n.boundingRect;y.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=L&&n.x<=k&&n.y>=b&&n.y<=T?r():p()}}function p(){o(!0)}function r(){o(!1)}function d(y){const b=c.current;n.canDrag&&b&&(n.didMove=!0,t&&r(),n.x=pe(y),n.y=me(y),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,b.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function I(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",I);const y=c.current;if(n.canDrag&&n.didMove&&y){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return a(!0),void e.closeToast();y.style.transition="transform 0.2s, opacity 0.2s",y.style.transform=`translate${e.draggableDirection}(0)`,y.style.opacity="1"}}m.useEffect(()=>{s.current=e}),m.useEffect(()=>(c.current&&c.current.addEventListener("d",p,{once:!0}),S(e.onOpen)&&e.onOpen(m.isValidElement(e.children)&&e.children.props),()=>{const y=s.current;S(y.onClose)&&y.onClose(m.isValidElement(y.children)&&y.children.props)}),[]),m.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||r(),window.addEventListener("focus",p),window.addEventListener("blur",r)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",p),window.removeEventListener("blur",r))}),[e.pauseOnFocusLoss]);const _={onMouseDown:l,onTouchStart:l,onMouseUp:u,onTouchEnd:u};return g&&x&&(_.onMouseEnter=r,_.onMouseLeave=p),C&&(_.onClick=y=>{f&&f(y),n.canCloseOnClick&&v()}),{playToast:p,pauseToast:r,isRunning:t,preventExitTransition:i,toastRef:c,eventHandlers:_}}function ve(e){let{closeToast:t,theme:o,ariaLabel:i="close"}=e;return E.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:a=>{a.stopPropagation(),t(a)},"aria-label":i},E.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},E.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Ke(e){let{delay:t,isRunning:o,closeToast:i,type:a="default",hide:c,className:n,style:s,controlledProgress:g,progress:x,rtl:v,isIn:f,theme:C}=e;const l=c||g&&x===0,u={...s,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused",opacity:l?0:1};g&&(u.transform=`scaleX(${x})`);const p=$("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${C}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":v}),r=S(n)?n({rtl:v,type:a,defaultClassName:p}):$(p,n);return E.createElement("div",{role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:r,style:u,[g&&x>=1?"onTransitionEnd":"onAnimationEnd"]:g&&x<1?null:()=>{f&&i()}})}const Je=e=>{const{isRunning:t,preventExitTransition:o,toastRef:i,eventHandlers:a}=Ye(e),{closeButton:c,children:n,autoClose:s,onClick:g,type:x,hideProgressBar:v,closeToast:f,transition:C,position:l,className:u,style:p,bodyClassName:r,bodyStyle:d,progressClassName:I,progressStyle:_,updateId:y,role:b,progress:T,rtl:L,toastId:k,deleteToast:P,isIn:q,isLoading:A,iconOut:D,closeOnClick:M,theme:j}=e,B=$("Toastify__toast",`Toastify__toast-theme--${j}`,`Toastify__toast--${x}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":M}),O=S(u)?u({rtl:L,position:l,type:x,defaultClassName:B}):$(B,u),F=!!T||!s,H={closeToast:f,type:x,theme:j};let X=null;return c===!1||(X=S(c)?c(H):m.isValidElement(c)?m.cloneElement(c,H):ve(H)),E.createElement(C,{isIn:q,done:P,position:l,preventExitTransition:o,nodeRef:i},E.createElement("div",{id:k,onClick:g,className:O,...a,style:p,ref:i},E.createElement("div",{...q&&{role:b},className:S(r)?r({type:x}):$("Toastify__toast-body",r),style:d},D!=null&&E.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},D),E.createElement("div",null,n)),X,E.createElement(Ke,{...y&&!F?{key:`pb-${y}`}:{},rtl:L,theme:j,delay:s,isRunning:t,isIn:q,closeToast:f,hide:v,type:x,style:_,className:I,controlledProgress:F,progress:T||0})))},oe=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ze=ne(oe("bounce",!0));ne(oe("slide",!0));ne(oe("zoom"));ne(oe("flip"));const fe=m.forwardRef((e,t)=>{const{getToastToRender:o,containerRef:i,isToastActive:a}=Xe(e),{className:c,style:n,rtl:s,containerId:g}=e;function x(v){const f=$("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":s});return S(c)?c({position:v,rtl:s,defaultClassName:f}):$(f,Z(c))}return m.useEffect(()=>{t&&(t.current=i.current)},[]),E.createElement("div",{ref:i,className:"Toastify",id:g},o((v,f)=>{const C=f.length?{...n}:{...n,pointerEvents:"none"};return E.createElement("div",{className:x(v),style:C,key:`container-${v}`},f.map((l,u)=>{let{content:p,props:r}=l;return E.createElement(Je,{...r,isIn:a(r.toastId),style:{...r.style,"--nth":u+1,"--len":f.length},key:`toast-${r.key}`},p)}))}))});fe.displayName="ToastContainer",fe.defaultProps={position:"top-right",transition:Ze,autoClose:5e3,closeButton:ve,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ae,W=new Map,V=[],et=1;function be(){return""+et++}function tt(e){return e&&(Q(e.toastId)||G(e.toastId))?e.toastId:be()}function U(e,t){return W.size>0?N.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function ee(e,t){return{...t,type:t&&t.type||e,toastId:tt(t)}}function J(e){return(t,o)=>U(t,ee(e,o))}function w(e,t){return U(e,ee("default",t))}w.loading=(e,t)=>U(e,ee("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),w.promise=function(e,t,o){let i,{pending:a,error:c,success:n}=t;a&&(i=Q(a)?w.loading(a,o):w.loading(a.render,{...o,...a}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},g=(v,f,C)=>{if(f==null)return void w.dismiss(i);const l={type:v,...s,...o,data:C},u=Q(f)?{render:f}:f;return i?w.update(i,{...l,...u}):w(u.render,{...l,...u}),C},x=S(e)?e():e;return x.then(v=>g("success",n,v)).catch(v=>g("error",c,v)),x},w.success=J("success"),w.info=J("info"),w.error=J("error"),w.warning=J("warning"),w.warn=w.warning,w.dark=(e,t)=>U(e,ee("default",{theme:"dark",...t})),w.dismiss=e=>{W.size>0?N.emit(1,e):V=V.filter(t=>e!=null&&t.options.toastId!==e)},w.clearWaitingQueue=function(e){return e===void 0&&(e={}),N.emit(5,e)},w.isActive=e=>{let t=!1;return W.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t},w.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const o=function(i,a){let{containerId:c}=a;const n=W.get(c||ae);return n&&n.getToast(i)}(e,t);if(o){const{props:i,content:a}=o,c={delay:100,...i,...t,toastId:t.toastId||e,updateId:be()};c.toastId!==e&&(c.staleId=e);const n=c.render||a;delete c.render,U(n,c)}},0)},w.done=e=>{w.update(e,{progress:1})},w.onChange=e=>(N.on(4,e),()=>{N.off(4,e)}),w.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},N.on(2,e=>{ae=e.containerId||e,W.set(ae,e),V.forEach(t=>{N.emit(0,t.content,t.options)}),V=[]}).on(3,e=>{W.delete(e.containerId||e),W.size===0&&N.off(0).off(1).off(5)});const ge={control:(e,{isFocused:t})=>({...e,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:"#f3f3f3",borderColor:t?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1440px)":{width:"199px",height:"56px"}}),indicatorSeparator:e=>({...e,background:"none"}),placeholder:e=>({...e,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),input:e=>({...e,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),menuList:e=>({...e,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(e,{isFocused:t,isSelected:o})=>({...e,background:t?"#161f37":o?"#4f5f88":void 0,zIndex:1,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",borderRadius:"20px"}),menu:e=>({...e,zIndex:100,borderRadius:"20px"})},nt=R.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,ot=R.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: 262px;
    // border-radius: 50%;
    // height: 80px;
    // width: 80px;
    // margin-bottom: 38px;
  }

  @media screen and (min-width: 1440px) {
  }
`,it=R(we)`
  display: flex;
  color: #f3f3f3;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`,rt=R.input`
  position: relative;

  background-color: #161f37;
  opacity: 0.8px;
  width: 335px;
  height: 54px;

  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: 1px solid #f3f3f333;

  color: #f3f3f3;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;

  ::placeholder {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: center;

    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 264px;
    height: 56px;
  }
`;R(ce)`
  background-color: #161f37;

  width: 335px;
  height: 54px;

  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: none;

  color: #f3f3f3;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  &.active {
    background-color: var(--brand-orange);
    color: var(--text-white);
  }
  &::placeholder {
    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 199px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 199px;
    height: 56px;
  }
`;const st={searchQuery:"",categories:"",ingredients:""},at=Ce().shape({searchQuery:ie(),categories:ie(),ingredients:ie()}),lt=({page:e,limit:t})=>{const[o,i]=m.useState(""),[a,c]=m.useState(""),[n,s]=m.useState(""),g=Ie(),x=z(Ve),v=z(Ge),f=l=>{if(o.trim()===""){w("🦄 Type a name of picture.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}i(l.searchQuery),c(l.categories),s(l.ingredients),console.log(a),i("")};m.useEffect(()=>{g(ke()),g(Le()),g(_e({query:o,category:a,ingredient:n,page:e,limit:t}))},[g,o,a,n,e,t]),console.log(a);const C=l=>i(l.target.value);return h.jsx(Se,{initialValues:st,validationSchema:at,onSubmit:f,children:l=>h.jsxs(it,{onSubmit:l.handleSubmit,children:[h.jsx("div",{children:h.jsx(ot,{children:h.jsxs("label",{htmlFor:"searchQuery",children:[h.jsx(rt,{name:"searchQuery",type:"text",placeholder:"Enter the text",onChange:C}),h.jsx(nt,{})]})})}),h.jsx("div",{children:h.jsx("label",{htmlFor:"categories",children:h.jsx(ce,{name:"categories",children:({field:u,form:p})=>h.jsx(de,{styles:ge,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:r=>r.isFocused?"border-orange-600":"border-grey-300"},options:x.map(r=>({value:r,label:r})),name:u.name,id:"categories",...u,value:a?{value:a,label:a}:"",onChange:r=>{c(r?r.value:""),p.setFieldValue("categories",r?r.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),h.jsx("div",{children:h.jsx("label",{htmlFor:"ingredients",children:h.jsx(ce,{name:"ingredients",children:({field:u,form:p})=>h.jsx(de,{styles:ge,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:r=>r.isFocused?"border-orange-600":"border-grey-300"},options:v.map(r=>({value:r.title,label:r.title})),name:u.name,id:"ingredients",...u,value:n?{value:n,label:n}:"",onChange:r=>{s(r?r.value:""),p.setFieldValue("ingredient",r?r.value:"")},placeholder:"Ingredients"})})})})]})})},ct=R.h1`
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    font-size: 64px;
    line-height: 1;
  }
`,dt=R.div`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`;var Te="Expected a function",he=0/0,ut="[object Symbol]",pt=/^\s+|\s+$/g,mt=/^[-+]0x[0-9a-f]+$/i,ft=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,ht=parseInt,xt=typeof Y=="object"&&Y&&Y.Object===Object&&Y,yt=typeof self=="object"&&self&&self.Object===Object&&self,vt=xt||yt||Function("return this")(),bt=Object.prototype,Tt=bt.toString,Et=Math.max,wt=Math.min,le=function(){return vt.Date.now()};function Ct(e,t,o){var i,a,c,n,s,g,x=0,v=!1,f=!1,C=!0;if(typeof e!="function")throw new TypeError(Te);t=xe(t)||0,te(o)&&(v=!!o.leading,f="maxWait"in o,c=f?Et(xe(o.maxWait)||0,t):c,C="trailing"in o?!!o.trailing:C);function l(T){var L=i,k=a;return i=a=void 0,x=T,n=e.apply(k,L),n}function u(T){return x=T,s=setTimeout(d,t),v?l(T):n}function p(T){var L=T-g,k=T-x,P=t-L;return f?wt(P,c-k):P}function r(T){var L=T-g,k=T-x;return g===void 0||L>=t||L<0||f&&k>=c}function d(){var T=le();if(r(T))return I(T);s=setTimeout(d,p(T))}function I(T){return s=void 0,C&&i?l(T):(i=a=void 0,n)}function _(){s!==void 0&&clearTimeout(s),x=0,i=g=a=s=void 0}function y(){return s===void 0?n:I(le())}function b(){var T=le(),L=r(T);if(i=arguments,a=this,g=T,L){if(s===void 0)return u(g);if(f)return s=setTimeout(d,t),l(g)}return s===void 0&&(s=setTimeout(d,t)),n}return b.cancel=_,b.flush=y,b}function It(e,t,o){var i=!0,a=!0;if(typeof e!="function")throw new TypeError(Te);return te(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),Ct(e,t,{leading:i,maxWait:t,trailing:a})}function te(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function kt(e){return!!e&&typeof e=="object"}function Lt(e){return typeof e=="symbol"||kt(e)&&Tt.call(e)==ut}function xe(e){if(typeof e=="number")return e;if(Lt(e))return he;if(te(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=te(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(pt,"");var o=ft.test(e);return o||gt.test(e)?ht(e.slice(2),o?2:8):mt.test(e)?he:+e}var _t=It;const St=je(_t),jt=()=>{const[e,t]=m.useState(window.innerWidth);return m.useEffect(()=>{const o=St(()=>{t(window.innerWidth)},500);return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),{width:e}};function Nt(){const{width:e}=jt(),{isLoading:t,drinks:o,error:i,total:a}=ze(),[c]=m.useState(1),n=e<1440?10:9,s=Math.ceil(a/n);return h.jsx(Oe,{children:h.jsxs(dt,{children:[h.jsx(ct,{children:"Drinks"}),h.jsx(lt,{page:c,limit:n}),h.jsxs("div",{children:[t,i&&h.jsx("p",{children:"No drinks found for your query. Please try again."}),a>0&&!i&&h.jsx(qe,{drinks:o})]}),s>1]})})}export{Nt as default};
