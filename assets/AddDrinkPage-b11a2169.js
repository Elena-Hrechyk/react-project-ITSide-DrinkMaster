import{h as jt,r as p,E as $t,c as Ut,d as Nt,s as A,_ as ut,e as E,f as _t,i as zt,k as oe,l as S,m as Gt,o as Wt,p as Yt,q as qt,t as Xt,j as x,F as Y,v as Kt,u as Te,a as Jt,w as Zt,x as Qt,y as en,z as tn,S as nn}from"./index-878f61ba.js";import{s as rn}from"./drinksSelectors-566d8060.js";function on(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var C=function(t,i){var r=arguments;if(i==null||!jt.call(i,"css"))return p.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=$t,a[1]=Ut(t,i);for(var u=2;u<e;u++)a[u]=r[u];return p.createElement.apply(null,a)};function Ae(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Nt(t)}var an=function(){var t=Ae.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const un=A.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  text-align: center;
  padding: 80px 20px 80px 20px;
  background-color: '#0A0A11';
  font-size: 14px;

  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  @media (-webkit-min-device-pixel-ratio: 1) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    /* padding: 224px 32px 622px 32px; */
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1440px */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    padding: 160px 32px 622px 32px;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1339.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1439.98px) {
    padding: 160px 32px 622px 32px;
    font-size: 17px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1440px */
  @media (min-width: 1440px) {
    padding: 224px 100px 568px 100px;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    (min-resolution: 192dpi) and (min-width: 1440px) {
  }
`;A.label`
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-color: white;
    color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;

`;A.input`
  display: none;

`;function sn(n){if(Array.isArray(n))return n}function ln(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,o=[],s=!0,l=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;s=!1}else for(;!(s=(r=a.call(i)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(c){l=!0,e=c}finally{try{if(!s&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(l)throw e}}return o}}function cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(n,t){return sn(n)||ln(n,t)||ut(n,t)||cn()}function X(n,t){if(n==null)return{};var i=on(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var dn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function pn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,o=n.inputValue,s=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,h=n.onMenuOpen,b=n.value,g=X(n,dn),v=p.useState(o!==void 0?o:i),f=q(v,2),m=f[0],D=f[1],w=p.useState(s!==void 0?s:e),y=q(w,2),V=y[0],F=y[1],I=p.useState(b!==void 0?b:u),O=q(I,2),P=O[0],H=O[1],U=p.useCallback(function(z,K){typeof l=="function"&&l(z,K),H(z)},[l]),T=p.useCallback(function(z,K){var J;typeof c=="function"&&(J=c(z,K)),D(J!==void 0?J:z)},[c]),N=p.useCallback(function(){typeof h=="function"&&h(),F(!0)},[h]),k=p.useCallback(function(){typeof d=="function"&&d(),F(!1)},[d]),R=o!==void 0?o:m,j=s!==void 0?s:V,_=b!==void 0?b:P;return E(E({},g),{},{inputValue:R,menuIsOpen:j,onChange:U,onInputChange:T,onMenuClose:k,onMenuOpen:N,value:_})}function fn(n){if(Array.isArray(n))return _t(n)}function mn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function hn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(n){return fn(n)||mn(n)||ut(n)||hn()}function vn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const gn=Math.min,bn=Math.max,de=Math.round,ae=Math.floor,pe=n=>({x:n,y:n});function xn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function lt(n){return dt(n)?(n.nodeName||"").toLowerCase():"#document"}function $(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function ct(n){var t;return(t=(dt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function dt(n){return n instanceof Node||n instanceof $(n).Node}function ye(n){return n instanceof Element||n instanceof $(n).Element}function Ie(n){return n instanceof HTMLElement||n instanceof $(n).HTMLElement}function Be(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof $(n).ShadowRoot}function pt(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Ve(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function En(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Cn(n){return["html","body","#document"].includes(lt(n))}function Ve(n){return $(n).getComputedStyle(n)}function Sn(n){if(lt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Be(n)&&n.host||ct(n);return Be(t)?t.host:t}function ft(n){const t=Sn(n);return Cn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Ie(t)&&pt(t)?t:ft(t)}function fe(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=ft(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=$(e);return a?t.concat(u,u.visualViewport||[],pt(e)?e:[],u.frameElement&&i?fe(u.frameElement):[]):t.concat(e,fe(e,[],i))}function Fn(n){const t=Ve(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Ie(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,o=de(i)!==a||de(r)!==u;return o&&(i=a,r=u),{width:i,height:r,$:o}}function Me(n){return ye(n)?n:n.contextElement}function be(n){const t=Me(n);if(!Ie(t))return pe(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=Fn(t);let u=(a?de(i.width):i.width)/r,o=(a?de(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!o||!Number.isFinite(o))&&(o=1),{x:u,y:o}}const yn=pe(0);function wn(n){const t=$(n);return!En()||!t.visualViewport?yn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Dn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==$(n)?!1:t}function He(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=Me(n);let u=pe(1);t&&(r?ye(r)&&(u=be(r)):u=be(n));const o=Dn(a,i,r)?wn(a):pe(0);let s=(e.left+o.x)/u.x,l=(e.top+o.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const h=$(a),b=r&&ye(r)?$(r):r;let g=h.frameElement;for(;g&&r&&b!==h;){const v=be(g),f=g.getBoundingClientRect(),m=Ve(g),D=f.left+(g.clientLeft+parseFloat(m.paddingLeft))*v.x,w=f.top+(g.clientTop+parseFloat(m.paddingTop))*v.y;s*=v.x,l*=v.y,c*=v.x,d*=v.y,s+=D,l+=w,g=$(g).frameElement}}return xn({width:c,height:d,x:s,y:l})}function On(n,t){let i=null,r;const e=ct(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(o,s){o===void 0&&(o=!1),s===void 0&&(s=1),a();const{left:l,top:c,width:d,height:h}=n.getBoundingClientRect();if(o||t(),!d||!h)return;const b=ae(c),g=ae(e.clientWidth-(l+d)),v=ae(e.clientHeight-(c+h)),f=ae(l),D={rootMargin:-b+"px "+-g+"px "+-v+"px "+-f+"px",threshold:bn(0,gn(1,s))||1};let w=!0;function y(V){const F=V[0].intersectionRatio;if(F!==s){if(!w)return u();F?u(!1,F):r=setTimeout(()=>{u(!1,1e-7)},100)}w=!1}try{i=new IntersectionObserver(y,{...D,root:e.ownerDocument})}catch{i=new IntersectionObserver(y,D)}i.observe(n)}return u(!0),a}function An(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,l=Me(n),c=e||a?[...l?fe(l):[],...fe(t)]:[];c.forEach(m=>{e&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&o?On(l,i):null;let h=-1,b=null;u&&(b=new ResizeObserver(m=>{let[D]=m;D&&D.target===l&&b&&(b.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{b&&b.observe(t)})),i()}),l&&!s&&b.observe(l),b.observe(t));let g,v=s?He(n):null;s&&f();function f(){const m=He(n);v&&(m.x!==v.x||m.y!==v.y||m.width!==v.width||m.height!==v.height)&&i(),v=m,g=requestAnimationFrame(f)}return i(),()=>{c.forEach(m=>{e&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),b&&b.disconnect(),b=null,s&&cancelAnimationFrame(g)}}var we=p.useLayoutEffect,In=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],me=function(){};function Vn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Mn(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Vn(n,u)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var je=function(t){return $n(t)?t.filter(Boolean):zt(t)==="object"&&t!==null?[t]:[]},mt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=X(t,In);return E({},i)},M=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,o=t.className;return{css:a(i,t),className:e(r??{},u(i,t),o)}};function ge(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Pn(n){return ge(n)?window.innerHeight:n.clientHeight}function ht(n){return ge(n)?window.pageYOffset:n.scrollTop}function he(n,t){if(ge(n)){window.scrollTo(0,t);return}n.scrollTop=t}function kn(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Rn(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function ue(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:me,e=ht(n),a=t-e,u=10,o=0;function s(){o+=u;var l=Rn(o,e,a,i);he(n,l),o<i?window.requestAnimationFrame(s):r(n)}s()}function $e(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?he(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&he(n,Math.max(t.offsetTop-e,0))}function Ln(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ue(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Tn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var vt=!1,Bn={get passive(){return vt=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",me,Bn),se.removeEventListener("p",me,!1));var Hn=vt;function jn(n){return n!=null}function $n(n){return Array.isArray(n)}function le(n,t,i){return n?t:i}var Un=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var o=q(u,1),s=o[0];return!r.includes(s)});return a.reduce(function(u,o){var s=q(o,2),l=s[0],c=s[1];return u[l]=c,u},{})},Nn=["children","innerProps"],_n=["children","innerProps"];function zn(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,o=n.controlHeight,s=kn(i),l={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return l;var c=s.getBoundingClientRect(),d=c.height,h=i.getBoundingClientRect(),b=h.bottom,g=h.height,v=h.top,f=i.offsetParent.getBoundingClientRect(),m=f.top,D=u?window.innerHeight:Pn(s),w=ht(s),y=parseInt(getComputedStyle(i).marginBottom,10),V=parseInt(getComputedStyle(i).marginTop,10),F=m-V,I=D-v,O=F+w,P=d-w-v,H=b-D+w+y,U=w+v-V,T=160;switch(e){case"auto":case"bottom":if(I>=g)return{placement:"bottom",maxHeight:t};if(P>=g&&!u)return a&&ue(s,H,T),{placement:"bottom",maxHeight:t};if(!u&&P>=r||u&&I>=r){a&&ue(s,H,T);var N=u?I-y:P-y;return{placement:"bottom",maxHeight:N}}if(e==="auto"||u){var k=t,R=u?F:O;return R>=r&&(k=Math.min(R-y-o,t)),{placement:"top",maxHeight:k}}if(e==="bottom")return a&&he(s,H),{placement:"bottom",maxHeight:t};break;case"top":if(F>=g)return{placement:"top",maxHeight:t};if(O>=g&&!u)return a&&ue(s,U,T),{placement:"top",maxHeight:t};if(!u&&O>=r||u&&F>=r){var j=t;return(!u&&O>=r||u&&F>=r)&&(j=u?F-V:O-V),a&&ue(s,U,T),{placement:"top",maxHeight:j}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return l}function Gn(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var gt=function(t){return t==="auto"?"bottom":t},Wn=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,o=a.spacing,s=a.colors;return E((r={label:"menu"},oe(r,Gn(e),"100%"),oe(r,"position","absolute"),oe(r,"width","100%"),oe(r,"zIndex",1),r),i?{}:{backgroundColor:s.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},bt=p.createContext(null),Yn=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,o=t.menuShouldScrollIntoView,s=t.theme,l=p.useContext(bt)||{},c=l.setPortalPlacement,d=p.useRef(null),h=p.useState(e),b=q(h,2),g=b[0],v=b[1],f=p.useState(null),m=q(f,2),D=m[0],w=m[1],y=s.spacing.controlHeight;return we(function(){var V=d.current;if(V){var F=u==="fixed",I=o&&!F,O=zn({maxHeight:e,menuEl:V,minHeight:r,placement:a,shouldScroll:I,isFixedPosition:F,controlHeight:y});v(O.maxHeight),w(O.placement),c==null||c(O.placement)}},[e,a,u,o,r,c,y]),i({ref:d,placerProps:E(E({},t),{},{placement:D||gt(a),maxHeight:g})})},qn=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return C("div",S({},M(t,"menu",{menu:!0}),{ref:r},e),i)},Xn=qn,Kn=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return E({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},Jn=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return C("div",S({},M(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},xt=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return E({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},Zn=xt,Qn=xt,ei=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=X(t,Nn);return C("div",S({},M(E(E({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},ti=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=X(t,_n);return C("div",S({},M(E(E({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},ni=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},ii=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,o=t.menuPosition,s=p.useRef(null),l=p.useRef(null),c=p.useState(gt(u)),d=q(c,2),h=d[0],b=d[1],g=p.useMemo(function(){return{setPortalPlacement:b}},[]),v=p.useState(null),f=q(v,2),m=f[0],D=f[1],w=p.useCallback(function(){if(e){var I=Ln(e),O=o==="fixed"?0:window.pageYOffset,P=I[h]+O;(P!==(m==null?void 0:m.offset)||I.left!==(m==null?void 0:m.rect.left)||I.width!==(m==null?void 0:m.rect.width))&&D({offset:P,rect:I})}},[e,o,h,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);we(function(){w()},[w]);var y=p.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),e&&s.current&&(l.current=An(e,s.current,w,{elementResize:"ResizeObserver"in window}))},[e,w]);we(function(){y()},[y]);var V=p.useCallback(function(I){s.current=I,y()},[y]);if(!i&&o!=="fixed"||!m)return null;var F=C("div",S({ref:V},M(E(E({},t),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),r);return C(bt.Provider,{value:g},i?Gt.createPortal(F,i):F)},ri=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},oi=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return C("div",S({},M(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},ai=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return E({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},ui=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return C("div",S({},M(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},si=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},li=function(t){var i=t.children,r=t.innerProps;return C("div",S({},M(t,"indicatorsContainer",{indicators:!0}),r),i)},Ne,ci=["size"],di=["innerProps","isRtl","size"],pi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Et=function(t){var i=t.size,r=X(t,ci);return C("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:pi},r))},Pe=function(t){return C(Et,S({size:20},t),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ct=function(t){return C(Et,S({size:20},t),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},St=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return E({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},fi=St,mi=function(t){var i=t.children,r=t.innerProps;return C("div",S({},M(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||C(Ct,null))},hi=St,vi=function(t){var i=t.children,r=t.innerProps;return C("div",S({},M(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||C(Pe,null))},gi=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return E({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},bi=function(t){var i=t.innerProps;return C("span",S({},i,M(t,"indicatorSeparator",{"indicator-separator":!0})))},xi=an(Ne||(Ne=vn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ei=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,o=a.spacing.baseUnit;return E({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:o*2})},xe=function(t){var i=t.delay,r=t.offset;return C("span",{css:Ae({animation:"".concat(xi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ci=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=X(t,di);return C("div",S({},M(E(E({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),C(xe,{delay:0,offset:r}),C(xe,{delay:160,offset:!0}),C(xe,{delay:320,offset:!r}))},Si=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,o=a.borderRadius,s=a.spacing;return E({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Fi=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,o=t.menuIsOpen;return C("div",S({ref:a},M(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":o}),u),i)},yi=Fi,wi=["data"],Di=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Oi=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,o=t.headingProps,s=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return C("div",S({},M(t,"group",{group:!0}),s),C(u,S({},o,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),l),C("div",null,i))},Ai=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return E({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ii=function(t){var i=mt(t);i.data;var r=X(i,wi);return C("div",S({},M(t,"groupHeading",{"group-heading":!0}),r))},Vi=Oi,Mi=["innerRef","isDisabled","isHidden","inputClassName"],Pi=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,o=a.colors;return E(E({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},ki),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:o.neutral80})},Ft={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ki={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":E({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ft)},Ri=function(t){return E({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Ft)},Li=function(t){var i=t.cx,r=t.value,e=mt(t),a=e.innerRef,u=e.isDisabled,o=e.isHidden,s=e.inputClassName,l=X(e,Mi);return C("div",S({},M(t,"input",{"input-container":!0}),{"data-value":r||""}),C("input",S({className:i({input:!0},s),ref:a,style:Ri(o),disabled:u},l)))},Ti=Li,Bi=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return E({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Hi=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return E({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},ji=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,o=t.isFocused;return E({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},yt=function(t){var i=t.children,r=t.innerProps;return C("div",r,i)},$i=yt,Ui=yt;function Ni(n){var t=n.children,i=n.innerProps;return C("div",S({role:"button"},i),t||C(Pe,{size:14}))}var _i=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,o=t.removeProps,s=t.selectProps,l=r.Container,c=r.Label,d=r.Remove;return C(l,{data:e,innerProps:E(E({},M(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:s},C(c,{data:e,innerProps:E({},M(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},i),C(d,{data:e,innerProps:E(E({},M(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:s}))},zi=_i,Gi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,o=u.spacing,s=u.colors;return E({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?s.primary:e?s.primary25:"transparent",color:r?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?s.primary:s.primary50}})},Wi=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,o=t.innerProps;return C("div",S({},M(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},o),i)},Yi=Wi,qi=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return E({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},Xi=function(t){var i=t.children,r=t.innerProps;return C("div",S({},M(t,"placeholder",{placeholder:!0}),r),i)},Ki=Xi,Ji=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return E({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Zi=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return C("div",S({},M(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},Qi=Zi,er={ClearIndicator:vi,Control:yi,DropdownIndicator:mi,DownChevron:Ct,CrossIcon:Pe,Group:Vi,GroupHeading:Ii,IndicatorsContainer:li,IndicatorSeparator:bi,Input:Ti,LoadingIndicator:Ci,Menu:Xn,MenuList:Jn,MenuPortal:ii,LoadingMessage:ti,NoOptionsMessage:ei,MultiValue:zi,MultiValueContainer:$i,MultiValueLabel:Ui,MultiValueRemove:Ni,Option:Yi,Placeholder:Ki,SelectContainer:oi,SingleValue:Qi,ValueContainer:ui},tr=function(t){return E(E({},er),t.components)},_e=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function nr(n,t){return!!(n===t||_e(n)&&_e(t))}function ir(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!nr(n[i],t[i]))return!1;return!0}function rr(n,t){t===void 0&&(t=ir);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var or={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ar=function(t){return C("span",S({css:or},t))},ze=ar,ur={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.isDisabled,a=t.tabSelectsValue,u=t.context;switch(u){case"menu":return"Use Up and Down to choose options".concat(e?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,o=t.selectValue,s=t.isDisabled,l=t.isSelected,c=function(g,v){return g&&g.length?"".concat(g.indexOf(v)+1," of ").concat(g.length):""};if(i==="value"&&o)return"value ".concat(u," focused, ").concat(c(o,r),".");if(i==="menu"){var d=s?" disabled":"",h="".concat(l?"selected":"focused").concat(d);return"option ".concat(u," ").concat(h,", ").concat(c(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},sr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,o=t.selectValue,s=t.selectProps,l=t.id,c=s.ariaLiveMessages,d=s.getOptionLabel,h=s.inputValue,b=s.isMulti,g=s.isOptionDisabled,v=s.isSearchable,f=s.menuIsOpen,m=s.options,D=s.screenReaderStatus,w=s.tabSelectsValue,y=s["aria-label"],V=s["aria-live"],F=p.useMemo(function(){return E(E({},ur),c||{})},[c]),I=p.useMemo(function(){var k="";if(i&&F.onChange){var R=i.option,j=i.options,_=i.removedValue,z=i.removedValues,K=i.value,J=function(W){return Array.isArray(W)?null:W},ee=_||R||J(K),L=ee?d(ee):"",B=j||z||void 0,Z=B?B.map(d):[],Q=E({isDisabled:ee&&g(ee,o),label:L,labels:Z},i);k=F.onChange(Q)}return k},[i,F,g,o,d]),O=p.useMemo(function(){var k="",R=r||e,j=!!(r&&o&&o.includes(r));if(R&&F.onFocus){var _={focused:R,label:d(R),isDisabled:g(R,o),isSelected:j,options:a,context:R===r?"menu":"value",selectValue:o};k=F.onFocus(_)}return k},[r,e,d,g,F,a,o]),P=p.useMemo(function(){var k="";if(f&&m.length&&F.onFilter){var R=D({count:a.length});k=F.onFilter({inputValue:h,resultsMessage:R})}return k},[a,h,f,F,m,D]),H=p.useMemo(function(){var k="";if(F.guidance){var R=e?"value":f?"menu":"input";k=F.guidance({"aria-label":y,context:R,isDisabled:r&&g(r,o),isMulti:b,isSearchable:v,tabSelectsValue:w})}return k},[y,r,e,b,g,v,f,F,o,w]),U="".concat(O," ").concat(P," ").concat(H),T=C(p.Fragment,null,C("span",{id:"aria-selection"},I),C("span",{id:"aria-context"},U)),N=(i==null?void 0:i.action)==="initial-input-focus";return C(p.Fragment,null,C(ze,{id:l},N&&T),C(ze,{"aria-live":V,"aria-atomic":"false","aria-relevant":"additions text"},u&&!N&&T))},lr=sr,De=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],cr=new RegExp("["+De.map(function(n){return n.letters}).join("")+"]","g"),wt={};for(var Ee=0;Ee<De.length;Ee++)for(var Ce=De[Ee],Se=0;Se<Ce.letters.length;Se++)wt[Ce.letters[Se]]=Ce.base;var Dt=function(t){return t.replace(cr,function(i){return wt[i]})},dr=rr(Dt),Ge=function(t){return t.replace(/^\s+|\s+$/g,"")},pr=function(t){return"".concat(t.label," ").concat(t.value)},fr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=E({ignoreCase:!0,ignoreAccents:!0,stringify:pr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,o=e.stringify,s=e.trim,l=e.matchFrom,c=s?Ge(r):r,d=s?Ge(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=dr(c),d=Dt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},mr=["innerRef"];function hr(n){var t=n.innerRef,i=X(n,mr),r=Un(i,"onExited","in","enter","exit","appear");return C("input",S({ref:t},r,{css:Ae({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var vr=function(t){t.preventDefault(),t.stopPropagation()};function gr(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),o=p.useRef(!1),s=p.useRef(0),l=p.useRef(null),c=p.useCallback(function(f,m){if(l.current!==null){var D=l.current,w=D.scrollTop,y=D.scrollHeight,V=D.clientHeight,F=l.current,I=m>0,O=y-V-w,P=!1;O>m&&u.current&&(r&&r(f),u.current=!1),I&&o.current&&(a&&a(f),o.current=!1),I&&m>O?(i&&!u.current&&i(f),F.scrollTop=y,P=!0,u.current=!0):!I&&-m>w&&(e&&!o.current&&e(f),F.scrollTop=0,P=!0,o.current=!0),P&&vr(f)}},[i,r,e,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),h=p.useCallback(function(f){s.current=f.changedTouches[0].clientY},[]),b=p.useCallback(function(f){var m=s.current-f.changedTouches[0].clientY;c(f,m)},[c]),g=p.useCallback(function(f){if(f){var m=Hn?{passive:!1}:!1;f.addEventListener("wheel",d,m),f.addEventListener("touchstart",h,m),f.addEventListener("touchmove",b,m)}},[b,h,d]),v=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",h,!1),f.removeEventListener("touchmove",b,!1))},[b,h,d]);return p.useEffect(function(){if(t){var f=l.current;return g(f),function(){v(f)}}},[t,g,v]),function(f){l.current=f}}var We=["boxSizing","height","overflow","paddingRight","position"],Ye={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function qe(n){n.preventDefault()}function Xe(n){n.stopPropagation()}function Ke(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function Je(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ze=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,te={capture:!1,passive:!1};function br(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(s){if(Ze){var l=document.body,c=l&&l.style;if(r&&We.forEach(function(g){var v=c&&c[g];e.current[g]=v}),r&&ie<1){var d=parseInt(e.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,b=window.innerWidth-h+d||0;Object.keys(Ye).forEach(function(g){var v=Ye[g];c&&(c[g]=v)}),c&&(c.paddingRight="".concat(b,"px"))}l&&Je()&&(l.addEventListener("touchmove",qe,te),s&&(s.addEventListener("touchstart",Ke,te),s.addEventListener("touchmove",Xe,te))),ie+=1}},[r]),o=p.useCallback(function(s){if(Ze){var l=document.body,c=l&&l.style;ie=Math.max(ie-1,0),r&&ie<1&&We.forEach(function(d){var h=e.current[d];c&&(c[d]=h)}),l&&Je()&&(l.removeEventListener("touchmove",qe,te),s&&(s.removeEventListener("touchstart",Ke,te),s.removeEventListener("touchmove",Xe,te)))}},[r]);return p.useEffect(function(){if(t){var s=a.current;return u(s),function(){o(s)}}},[t,u,o]),function(s){a.current=s}}var xr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Er={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Cr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,o=n.onTopArrive,s=n.onTopLeave,l=gr({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:o,onTopLeave:s}),c=br({isEnabled:i}),d=function(b){l(b),c(b)};return C(p.Fragment,null,i&&C("div",{onClick:xr,css:Er}),t(d))}var Sr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Fr=function(t){var i=t.name,r=t.onFocus;return C("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Sr,value:"",onChange:function(){}})},yr=Fr,wr=function(t){return t.label},Dr=function(t){return t.label},Or=function(t){return t.value},Ar=function(t){return!!t.isDisabled},Ir={clearIndicator:hi,container:ri,control:Si,dropdownIndicator:fi,group:Di,groupHeading:Ai,indicatorsContainer:si,indicatorSeparator:gi,input:Pi,loadingIndicator:Ei,loadingMessage:Qn,menu:Wn,menuList:Kn,menuPortal:ni,multiValue:Bi,multiValueLabel:Hi,multiValueRemove:ji,noOptionsMessage:Zn,option:Gi,placeholder:qi,singleValue:Ji,valueContainer:ai},Vr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Mr=4,Ot=4,Pr=38,kr=Ot*2,Rr={baseUnit:Ot,controlHeight:Pr,menuGutter:kr},Fe={borderRadius:Mr,colors:Vr,spacing:Rr},Lr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ue(),captureMenuScroll:!Ue(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:fr(),formatGroupLabel:wr,getOptionLabel:Dr,getOptionValue:Or,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ar,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Tn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Qe(n,t,i,r){var e=Mt(n,t,i),a=Pt(n,t,i),u=Vt(n,t),o=ve(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:o,index:r}}function At(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,o){return Qe(n,u,t,o)}).filter(function(u){return et(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=Qe(n,i,t,r);return et(n,a)?a:void 0}).filter(jn)}function It(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,st(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function Tr(n,t){return It(At(n,t))}function et(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,o=t.value;return(!Rt(n)||!a)&&kt(n,{label:u,value:o,data:e},r)}function Br(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Hr(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Vt=function(t,i){return t.getOptionLabel(i)},ve=function(t,i){return t.getOptionValue(i)};function Mt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Pt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=ve(n,t);return i.some(function(e){return ve(n,e)===r})}function kt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Rt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},jr=1,Lt=function(n){Wt(i,n);var t=Yt(i);function i(r){var e;if(qt(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.instancePrefix="",e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var l=e.props,c=l.onChange,d=l.name;s.name=d,e.ariaOnChange(o,s),c(o,s)},e.setValue=function(o,s,l){var c=e.props,d=c.closeMenuOnSelect,h=c.isMulti,b=c.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:b}),d&&(e.setState({inputIsHiddenAfterUpdate:!h}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:l})},e.selectOption=function(o){var s=e.props,l=s.blurInputOnSelect,c=s.isMulti,d=s.name,h=e.state.selectValue,b=c&&e.isOptionSelected(o,h),g=e.isOptionDisabled(o,h);if(b){var v=e.getOptionValue(o);e.setValue(h.filter(function(f){return e.getOptionValue(f)!==v}),"deselect-option",o)}else if(!g)c?e.setValue([].concat(st(h),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,l=e.state.selectValue,c=e.getOptionValue(o),d=l.filter(function(b){return e.getOptionValue(b)!==c}),h=le(s,d,d[0]||null);e.onChange(h,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(le(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,l=s[s.length-1],c=s.slice(0,s.length-1),d=le(o,c,c[0]||null);e.onChange(d,{action:"pop-value",removedValue:l})},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return Mn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Vt(e.props,o)},e.getOptionValue=function(o){return ve(e.props,o)},e.getStyles=function(o,s){var l=e.props.unstyled,c=Ir[o](s,l);c.boxSizing="border-box";var d=e.props.styles[o];return d?d(c,s):c},e.getClassNames=function(o,s){var l,c;return(l=(c=e.props.classNames)[o])===null||l===void 0?void 0:l.call(c,s)},e.getElementId=function(o){return"".concat(e.instancePrefix,"-").concat(o)},e.getComponents=function(){return tr(e.props)},e.buildCategorizedOptions=function(){return At(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return It(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:E({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,l=s.isMulti,c=s.menuIsOpen;e.focusInput(),c?(e.setState({inputIsHiddenAfterUpdate:!l}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&ge(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,l=s&&s.item(0);l&&(e.initialTouchX=l.clientX,e.initialTouchY=l.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,l=s&&s.item(0);if(l){var c=Math.abs(l.clientX-e.initialTouchX),d=Math.abs(l.clientY-e.initialTouchY),h=5;e.userIsDragging=c>h||d>h}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,l=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(l,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){e.blockOptionHover||e.state.focusedOption===o||e.setState({focusedOption:o})},e.shouldHideSelectedOptions=function(){return Rt(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,l=s.isMulti,c=s.backspaceRemovesValue,d=s.escapeClearsValue,h=s.inputValue,b=s.isClearable,g=s.isDisabled,v=s.menuIsOpen,f=s.onKeyDown,m=s.tabSelectsValue,D=s.openMenuOnFocus,w=e.state,y=w.focusedOption,V=w.focusedValue,F=w.selectValue;if(!g&&!(typeof f=="function"&&(f(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||h)return;e.focusValue("previous");break;case"ArrowRight":if(!l||h)return;e.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(V)e.removeValue(V);else{if(!c)return;l?e.popValue():b&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!v||!m||!y||D&&e.isOptionSelected(y,F))return;e.selectOption(y);break;case"Enter":if(o.keyCode===229)break;if(v){if(!y||e.isComposing)return;e.selectOption(y);break}return;case"Escape":v?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:h}),e.onMenuClose()):b&&d&&e.clearValue();break;case" ":if(h)return;if(!v){e.openMenu("first");break}if(!y)return;e.selectOption(y);break;case"ArrowUp":v?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":v?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!v)return;e.focusOption("pageup");break;case"PageDown":if(!v)return;e.focusOption("pagedown");break;case"Home":if(!v)return;e.focusOption("first");break;case"End":if(!v)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.instancePrefix="react-select-"+(e.props.instanceId||++jr),e.state.selectValue=je(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.buildFocusableOptions(),u=a.indexOf(e.state.selectValue[0]);e.state.focusedOption=a[u]}return e}return Xt(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&$e(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,o=a.menuIsOpen,s=this.state.isFocused;(s&&!u&&e.isDisabled||s&&o&&!e.menuIsOpen)&&this.focusInput(),s&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&($e(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,o=u.selectValue,s=u.isFocused,l=this.buildFocusableOptions(),c=e==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=u.indexOf(o);o||(s=-1);var l=u.length-1,c=-1;if(u.length){switch(e){case"previous":s===0?c=0:s===-1?c=l:c=s-1;break;case"next":s>-1&&s<l&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var s=0,l=o.indexOf(u);u||(l=-1),e==="up"?s=l>0?l-1:o.length-1:e==="down"?s=(l+1)%o.length:e==="pageup"?(s=l-a,s<0&&(s=0)):e==="pagedown"?(s=l+a,s>o.length-1&&(s=o.length-1)):e==="last"&&(s=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Fe):E(E({},Fe),this.props.theme):Fe}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,o=this.getClassNames,s=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,b=d.isRtl,g=d.options,v=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:o,getValue:s,hasValue:v,isMulti:h,isRtl:b,options:g,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Mt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Pt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return kt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:o})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,o=e.inputId,s=e.inputValue,l=e.tabIndex,c=e.form,d=e.menuIsOpen,h=e.required,b=this.getComponents(),g=b.Input,v=this.state,f=v.inputIsHidden,m=v.ariaSelection,D=this.commonProps,w=o||this.getElementId("input"),y=E(E(E({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(g,S({},D,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:s},y)):p.createElement(hr,S({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:me,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},y))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,o=a.MultiValueContainer,s=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,h=this.commonProps,b=this.props,g=b.controlShouldRenderValue,v=b.isDisabled,f=b.isMulti,m=b.inputValue,D=b.placeholder,w=this.state,y=w.selectValue,V=w.focusedValue,F=w.isFocused;if(!this.hasValue()||!g)return m?null:p.createElement(d,S({},h,{key:"placeholder",isDisabled:v,isFocused:F,innerProps:{id:this.getElementId("placeholder")}}),D);if(f)return y.map(function(O,P){var H=O===V,U="".concat(e.getOptionLabel(O),"-").concat(e.getOptionValue(O));return p.createElement(u,S({},h,{components:{Container:o,Label:s,Remove:l},isFocused:H,isDisabled:v,key:U,index:P,removeProps:{onClick:function(){return e.removeValue(O)},onTouchEnd:function(){return e.removeValue(O)},onMouseDown:function(N){N.preventDefault()}},data:O}),e.formatOptionLabel(O,"value"))});if(m)return null;var I=y[0];return p.createElement(c,S({},h,{data:I,isDisabled:v}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,o=this.props,s=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,o=this.props,s=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var o=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused;return p.createElement(u,S({},o,{isDisabled:s,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:l,isDisabled:o,isFocused:s}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,o=a.GroupHeading,s=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,h=a.NoOptionsMessage,b=a.Option,g=this.commonProps,v=this.state.focusedOption,f=this.props,m=f.captureMenuScroll,D=f.inputValue,w=f.isLoading,y=f.loadingMessage,V=f.minMenuHeight,F=f.maxMenuHeight,I=f.menuIsOpen,O=f.menuPlacement,P=f.menuPosition,H=f.menuPortalTarget,U=f.menuShouldBlockScroll,T=f.menuShouldScrollIntoView,N=f.noOptionsMessage,k=f.onMenuScrollToTop,R=f.onMenuScrollToBottom;if(!I)return null;var j=function(B,Z){var Q=B.type,G=B.data,W=B.isDisabled,ne=B.isSelected,re=B.label,Tt=B.value,ke=v===G,Re=W?void 0:function(){return e.onOptionHover(G)},Bt=W?void 0:function(){return e.selectOption(G)},Le="".concat(e.getElementId("option"),"-").concat(Z),Ht={id:Le,onClick:Bt,onMouseMove:Re,onMouseOver:Re,tabIndex:-1};return p.createElement(b,S({},g,{innerProps:Ht,data:G,isDisabled:W,isSelected:ne,key:Le,label:re,type:Q,value:Tt,isFocused:ke,innerRef:ke?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(B.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var B=L.data,Z=L.options,Q=L.index,G="".concat(e.getElementId("group"),"-").concat(Q),W="".concat(G,"-heading");return p.createElement(u,S({},g,{key:G,data:B,options:Z,Heading:o,headingProps:{id:W,data:L.data},label:e.formatGroupLabel(L.data)}),L.options.map(function(ne){return j(ne,"".concat(Q,"-").concat(ne.index))}))}else if(L.type==="option")return j(L,"".concat(L.index))});else if(w){var z=y({inputValue:D});if(z===null)return null;_=p.createElement(d,g,z)}else{var K=N({inputValue:D});if(K===null)return null;_=p.createElement(h,g,K)}var J={minMenuHeight:V,maxMenuHeight:F,menuPlacement:O,menuPosition:P,menuShouldScrollIntoView:T},ee=p.createElement(Yn,S({},g,J),function(L){var B=L.ref,Z=L.placerProps,Q=Z.placement,G=Z.maxHeight;return p.createElement(s,S({},g,J,{innerRef:B,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove,id:e.getElementId("listbox")},isLoading:w,placement:Q}),p.createElement(Cr,{captureEnabled:m,onTopArrive:k,onBottomArrive:R,lockEnabled:U},function(W){return p.createElement(l,S({},g,{innerRef:function(re){e.getMenuListRef(re),W(re)},isLoading:w,maxHeight:G,focusedOption:v}),_)}))});return H||P==="fixed"?p.createElement(c,S({},g,{appendTo:H,controlElement:this.controlRef,menuPlacement:O,menuPosition:P}),ee):ee}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,o=a.isDisabled,s=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return p.createElement(yr,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(s)if(u){var h=d.map(function(v){return e.getOptionValue(v)}).join(u);return p.createElement("input",{name:l,type:"hidden",value:h})}else{var b=d.length>0?d.map(function(v,f){return p.createElement("input",{key:"i-".concat(f),name:l,type:"hidden",value:e.getOptionValue(v)})}):p.createElement("input",{name:l,type:"hidden",value:""});return p.createElement("div",null,b)}else{var g=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:l,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,o=a.focusedOption,s=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(lr,S({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:o,focusedValue:s,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,o=e.SelectContainer,s=e.ValueContainer,l=this.props,c=l.className,d=l.id,h=l.isDisabled,b=l.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return p.createElement(o,S({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),p.createElement(a,S({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:b}),p.createElement(s,S({},v,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,S({},v,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,o=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,h=e.options,b=e.value,g=e.menuIsOpen,v=e.inputValue,f=e.isMulti,m=je(b),D={};if(u&&(b!==u.value||h!==u.options||g!==u.menuIsOpen||v!==u.inputValue)){var w=g?Tr(e,m):[],y=o?Br(a,m):null,V=Hr(a,w);D={selectValue:m,focusedOption:V,focusedValue:y,clearFocusValueOnUpdate:!1}}var F=s!=null&&e!==u?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=l,O=c&&d;return c&&!O&&(I={value:le(f,m,m[0]||null),options:m,action:"initial-input-focus"},O=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),E(E(E({},D),F),{},{prevProps:e,ariaSelection:I,prevWasFocused:O})}}]),i}(p.Component);Lt.defaultProps=Lr;var $r=p.forwardRef(function(n,t){var i=pn(n);return p.createElement(Lt,S({ref:t},i))}),Ur=$r;const Oe=({onChange:n,optionValue:t})=>{const[i,r]=p.useState(!1),e={control:u=>({...u,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(u,{isFocused:o})=>({...u,backgroundColor:"#161F37",borderRadius:20,color:o?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:u=>({...u,backgroundColor:"#161F37",borderRadius:20}),singleValue:u=>({...u,color:"#F3F3F3"}),dropdownIndicator:u=>({...u,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:i?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:u=>({...u,display:"none"})},a={width:"100%"};return x.jsx("div",{style:a,children:x.jsx(Ur,{options:t,placeholder:"",styles:{...e},onChange:u=>n(u.value),onMenuOpen:()=>r(!0),onMenuClose:()=>r(!1)})})},Nr=A.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
margin-top: 40px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-direction: row;
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    margin-top: 60px;
    width: 100%;
  }
`,tt=A.input`
  padding-bottom: 14px;
  padding-top: 31px;
  background-color: transparent;
  border: transparent;
  color: #fff;
  width: 335px;
  &:focus{
    outline: transparent;
  }
  &:focus {
    border: none;
  }
  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 352px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 339px;
  }
`,ce=A.div`
  border-bottom: 0.5px solid #f3f3f380;
  padding-left: 10px;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 352px;
  }
  @media (min-width: 1440px) {
    width: 339px;
  }
`,_r=A.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`,nt={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},zr=A.div`
  width: 335px; ///// задать гнучкий розмір
  height: 320px;
  background-color: #161f3780;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;
  @media (min-width: 768px) and (max-width: 1339.98px) {
    width: 320px;
    height: 320px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;A.label`
  background-color: white;
  width: 50px;
  height: 50px;
  border: none;
  padding: 18px;
  border-radius: 6px;

  display: inline-block;
    /* padding: 6px 12px; */
    cursor: pointer;
    
    /* color: white; */
    /* border: 1px solid #ccc; */
    /* border-radius: 4px; */
    text-align: center;



`;const Gr=A.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`,it=A.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;
`,rt=A.label`
  position: relative;
  color: #f3f3f380;
`,ot=A.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  + .radio-label {
    &:before {
      content: '';
      border-radius: 100%;
      border: 2px solid #f3f3f380;
      display: inline-block;
      width: 20px;
      height: 20px;
      position: relative;
      top: -0.2em;
      margin-right: 8px;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
  }
  &:checked {
    + .radio-label {
      &:after {
        opacity: 1;
        background-color: #red;
        border: 2px solid #ffffff;
        box-shadow: inset 0 0 0 4px #000000;
      }
    }
  }
  &:focus {
    + .radio-label {
      /* color: #d9d9d9; */
      &:before {
        outline: none;
        box-shadow: inset 0 0 0 4px #000000;
        border-radius: 100%;
        border: 2px solid #ffffff;
        background: #ffffff;
      }
    }
  }
  &:focus {
    + .radio-label {
      &:after {
        outline: none;
        border-color: #800080;
      }
    }
  }

  /* &:disabled {
    + .radio-label {
      &:before {
        box-shadow: inset 0 0 0 4px #f4f4f4;
        border-color: #fc0909;
        background: #39e61a;
      }
    }
  } */
`;A.label`
  display: inline-block;
      background-color: white;
  padding: 6px 12px;
  cursor: pointer;
  /* background-color: blue; */
  color: red;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;A.input`
  display: none;
`;const Wr=({fileRef:n,...t})=>{const i=[{label:"Cocktail glass",value:"Cocktail glass"},{label:"Shake",value:"Shake"},{label:"Cocktail ",value:"Cocktail "},{label:"Other/Unknown",value:"Other/Unknown"},{label:"Ordinary Drink",value:"Ordinary Drink"},{label:"Cocoa",value:"Cocoa"},{label:"Shot",value:"Shot"},{label:"Coffee/Tea",value:"Coffee/Tea"},{label:"Homemade Liqueur",value:"Homemade Liqueur"},{label:"Punch/Party Drink",value:"Punch/Party Drink"},{label:"Beer",value:"Beer"},{label:"Soft Drink",value:"Soft Drink"}],e=["Highball glass","Cocktail glass","Old-fashioned glass","Whiskey Glass","Collins glass","Pousse cafe glass","Champagne flute","Whiskey sour glass","Cordial glass","Brandy snifter","White wine glass","Nick and Nora Glass","Hurricane glass","Coffee mug","Shot glass","Jar","Irish coffee cup","Punch bowl","Pitcher","Pint glass","Copper Mug","Wine Glass","Beer mug","Margarita/Coupette glass","Beer pilsner","Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"].map(a=>({label:a,value:a}));return x.jsxs(x.Fragment,{children:[x.jsx("h2",{style:{display:"flex",flex:"start"},children:"Add drink"}),x.jsxs(Nr,{children:[x.jsxs(zr,{children:[x.jsx(Y,{name:"file",type:"file"}),x.jsx("p",{children:"Add image"})]}),x.jsxs(_r,{children:[x.jsx(Y,{as:tt,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink"}),x.jsx(ce,{}),x.jsx(Y,{as:tt,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe"}),x.jsx(ce,{}),x.jsxs("div",{style:nt,children:[x.jsx("p",{style:{color:"#f3f3f380"},children:"Category"}),x.jsx(Y,{name:"category",children:({form:a})=>x.jsx(Oe,{optionValue:i,onChange:u=>a.setFieldValue("category",u)})})]}),x.jsx(ce,{}),x.jsxs("div",{style:nt,children:[x.jsx("p",{style:{color:"#f3f3f380"},children:"Glass"}),x.jsx(Y,{name:"glass",children:({form:a})=>x.jsx(Oe,{optionValue:e,onChange:u=>a.setFieldValue("glass",u)})})]}),x.jsx(ce,{}),x.jsxs(Gr,{children:[x.jsxs(it,{children:[x.jsx(Y,{as:ot,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),x.jsx(rt,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),x.jsxs(it,{children:[x.jsx(Y,{as:ot,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),x.jsx(rt,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})]})},Yr=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,qr=A.textarea`
width: 335px;
min-height: 184px;
background-color:transparent;
border-radius: 14px;
border: 1px solid #f3f3f380;
display: flex;
flex: start;
padding-top: 16px;
padding-left: 18px;
color: white;
margin-top: 40px;
  @media (min-width: 768px)  {
    width: 480px;
    padding-top: 14px;
padding-left: 24px;
  }
`,Xr=()=>x.jsxs(Yr,{children:[x.jsx("h1",{children:"Recipe Preparation"}),x.jsx(Y,{as:qr,name:"description",placeholder:"Enter the recipe",className:"text-area"})]}),Kr=A.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  } 
  @media (min-width: 1440px) {
    width: 540px;
  }


`,Jr=A.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 6.5rem;
  height: 2.5rem;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
margin-left: 77px;
  background-color: transparent;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    margin-left: 370px;
  }
  @media (min-width: 1440px) {
    margin-left: 206px;
  }

`,at=A.button`
/* cursor: pointer; */
color: white;
background-color: transparent;
border: transparent;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`,Zr=A.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
      justify-content: space-between;

`,Qr=A.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,eo=A.div`
width:200px;
display: flex;
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  height: 2.5rem;
justify-content: flex-end;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width:332px;
  }
   @media (min-width: 1440px) {
    width: 540px;
  }
`,to=A.div`
width:101px;
display: flex;
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  height: 2.5rem;
  padding-left: 18px;
  margin-left: 8px;
  @media (min-width: 768px) {
    width:150px;
    margin-left: 14px;
  }
`,no=A.input`
  background-color: transparent;
  border: transparent;
width: 90%;
color:white;
&:focus{
    outline: transparent;
  }
`,io=A.button`

/* width: 16px; */
background-color: transparent;
border: none;
`,ro=A.img`
/* width:16px; */
fill: white;
`,oo="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let ao=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const uo=()=>{const[n,t]=p.useState(0),i=[{label:"Cocktail glass",value:"Cocktail glass"},{label:"Shake",value:"Shake"},{label:"Cocktail ",value:"Cocktail "},{label:"glass",value:"glass"},{label:"Other/Unknown",value:"Other/Unknown"},{label:"Ordinary Drink",value:"Ordinary Drink"},{label:"Cocoa",value:"Cocoa"},{label:"Shot",value:"Shot"},{label:"Coffee/Tea",value:"Coffee/Tea"},{label:"Homemade Liqueur",value:"Homemade Liqueur"},{label:"Punch/Party Drink",value:"Punch/Party Drink"},{label:"Beer",value:"Beer"},{label:"Soft Drink",value:"Soft Drink"}],r=e=>{const a=[];for(let u=0;u<n;u++)a.push(x.jsxs(Qr,{children:[x.jsx(eo,{children:x.jsx(Y,{name:`ingredients.${u}.title`,children:({form:o})=>x.jsx(Oe,{optionValue:i,onChange:s=>{o.setFieldValue(`ingredients.${u}.ingredient`,s),o.setFieldValue(`ingredients.${u}.ingredientId`,ao())}})})}),x.jsx(to,{width:"150px",children:x.jsx(Y,{name:`ingredients.${u}.measure`,as:no,placeholder:"Measure",marginBottom:"0"})}),x.jsx(io,{type:"button",onClick:()=>e.remove(u),children:x.jsx(ro,{src:oo,alt:`Xicon-${u}`})})]},u));return a};return x.jsxs(Kr,{children:[x.jsxs(Zr,{children:[x.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),x.jsxs(Jr,{children:[x.jsx(at,{onClick:()=>{n!==0&&t(n-1)},children:"-"}),x.jsx("p",{children:n}),x.jsx(at,{onClick:()=>t(n+1),children:"+"})]})]}),x.jsx(Kt,{name:"ingredients",render:e=>x.jsx("div",{children:r(e)})})]})},so=A.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 90px;
`,lo=A.div`
display: flex;
flex-direction: row;
margin-top: 28px;

`,co=A.div`
margin-left: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap:8px;
text-align: left;
height: 89px;
/* text-overflow: ellipsis; */

font-size: 16px;




`,po=A.p`
/* overflow: hidden; 
text-overflow: ellipsis; */
display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px
  
`,fo=()=>x.jsxs(so,{children:[x.jsx("h4",{children:"PopularDrinks"}),x.jsxs(lo,{children:[x.jsx("img",{src:"https://neonsignsusainc.com/wp-content/uploads/2022/05/COCKTAILS_MARTINI_GLASS_LOGO_BEER_BAR_REAL_NEON_SIGN_XMAS_GIFT_FAST_SHIP_fec6f388-b2da-4e13-bb2c-4a12787f490c-510x510.jpg",alt:"SVG Image",width:90,height:90}),x.jsxs(co,{children:[x.jsx("h4",{children:"Gin Lemon"}),x.jsx(po,{style:{},children:"A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})]}),vo=()=>{const n=Te(rn),t=Jt(),i=Te(Zt);console.log(i.id);const r=p.useRef(null);return x.jsx(un,{children:x.jsx(Qt,{initialValues:{drinkThumb:"",drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[]},onSubmit:e=>{console.log("Form values:",e);const a=new FormData;for(let u in e)a.append(u,e[u]);console.log("formData",a),t(en(e)),console.log("state drink:",n)},children:x.jsxs(tn,{style:{margin:"auto"},encType:"multipart/form-data",children:[x.jsx(Wr,{fileRef:r}),x.jsx(uo,{}),x.jsx(Xr,{}),x.jsx(nn,{type:"submit",width:"107px",value:"Add",children:"Add"}),x.jsx(fo,{})]})})})};export{vo as default};
