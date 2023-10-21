import{n as y,G as W,j as u,y as x,z as R,r as S}from"./index-96e8e874.js";const $=y.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 295px;
  padding: 0;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 436px;
    margin-top: 80px;
  }
`,M=y.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
  border: none;

  /* :hover {
        color: #161F37;
        background-color: #F3F3F3;
  } */
`,A=y.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,G=y.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: none;
  background-color: ${t=>t.isSelected?"#4070cd80":"inherit"};

  color: #f3f3f3;

  &:hover,
  &:focus {
    background-color: #161f37;
  }
`;function H(t){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(t)}function P(t){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(t)}const dt=({totalPages:t,paginate:n,nextPage:r,currentPage:o})=>{const a=e=>{r(e)},s=[];for(let e=1;e<=t;e++)s.push(e);const d=()=>{const e=Math.floor(n/2),c=s.indexOf(o),f=Math.max(0,c-e),m=Math.min(s.length-1,f+n-1);return s.slice(f,m+1)};return u.jsxs($,{children:[u.jsx(M,{type:"button",onClick:()=>a(o-1),disabled:o===1,children:u.jsx(H,{})}),u.jsx(A,{children:d().map(e=>u.jsx("li",{children:u.jsx(G,{type:"button",onClick:()=>a(e),isSelected:e===o,children:e})},e))}),u.jsx(M,{type:"button",onClick:()=>a(o+1),disabled:o===t,children:u.jsx(P,{})})]})};var z="Expected a function",O=0/0,_="[object Symbol]",D=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,X=/^0o[0-7]+$/i,q=parseInt,J=typeof x=="object"&&x&&x.Object===Object&&x,K=typeof self=="object"&&self&&self.Object===Object&&self,Q=J||K||Function("return this")(),Y=Object.prototype,Z=Y.toString,tt=Math.max,et=Math.min,I=function(){return Q.Date.now()};function nt(t,n,r){var o,a,s,d,e,c,f=0,m=!1,g=!1,j=!0;if(typeof t!="function")throw new TypeError(z);n=L(n)||0,b(r)&&(m=!!r.leading,g="maxWait"in r,s=g?tt(L(r.maxWait)||0,n):s,j="trailing"in r?!!r.trailing:j);function v(i){var l=o,h=a;return o=a=void 0,f=i,d=t.apply(h,l),d}function C(i){return f=i,e=setTimeout(p,n),m?v(i):d}function F(i){var l=i-c,h=i-f,E=n-l;return g?et(E,s-h):E}function T(i){var l=i-c,h=i-f;return c===void 0||l>=n||l<0||g&&h>=s}function p(){var i=I();if(T(i))return k(i);e=setTimeout(p,F(i))}function k(i){return e=void 0,j&&o?v(i):(o=a=void 0,d)}function B(){e!==void 0&&clearTimeout(e),f=0,o=c=a=e=void 0}function N(){return e===void 0?d:k(I())}function w(){var i=I(),l=T(i);if(o=arguments,a=this,c=i,l){if(e===void 0)return C(c);if(g)return e=setTimeout(p,n),v(c)}return e===void 0&&(e=setTimeout(p,n)),d}return w.cancel=B,w.flush=N,w}function rt(t,n,r){var o=!0,a=!0;if(typeof t!="function")throw new TypeError(z);return b(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),nt(t,n,{leading:o,maxWait:n,trailing:a})}function b(t){var n=typeof t;return!!t&&(n=="object"||n=="function")}function it(t){return!!t&&typeof t=="object"}function ot(t){return typeof t=="symbol"||it(t)&&Z.call(t)==_}function L(t){if(typeof t=="number")return t;if(ot(t))return O;if(b(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=b(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=t.replace(D,"");var r=U.test(t);return r||X.test(t)?q(t.slice(2),r?2:8):V.test(t)?O:+t}var at=rt;const st=R(at),ft=()=>{const[t,n]=S.useState(window.innerWidth);return S.useEffect(()=>{const r=st(()=>{n(window.innerWidth)},500);return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),{width:t}};export{dt as P,st as t,ft as u};
