import{n as y,G as L,j as f,v as R,w as x,r as E}from"./index-4d5bf111.js";const $=y.div`
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
  };

`,F=y.button`
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
    background-color: inherit;
    color: #F3F3F3;

    :hover {
        background-color: #161F37;
    }
`;function H(t){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(t)}function P(t){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(t)}const _=({drinksPerPage:t,totalItems:e,paginate:n,nextPage:s,currentPage:o})=>{const d=r=>{s(r)},c=[];for(let r=1;r<=Math.ceil(e/t);r++)c.push(r);const a=()=>{const r=Math.floor(n/2),u=c.indexOf(o),h=Math.max(0,u-r),g=Math.min(c.length-1,h+n-1);return c.slice(h,g+1)};return f.jsxs($,{children:[f.jsx(F,{type:"button",onClick:()=>d(o-1),disabled:o===1,children:f.jsx(H,{})}),f.jsx(A,{children:a().map(r=>f.jsx("li",{children:f.jsx(G,{type:"button",onClick:()=>d(r),className:r===o?"active":"",children:r})},r))}),f.jsx(F,{type:"button",onClick:()=>d(o+1),disabled:o===Math.ceil(e/t),children:f.jsx(P,{})})]})},lt=_;var W="Expected a function",O=0/0,D="[object Symbol]",V=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,q=/^0o[0-7]+$/i,J=parseInt,K=typeof x=="object"&&x&&x.Object===Object&&x,Q=typeof self=="object"&&self&&self.Object===Object&&self,Y=K||Q||Function("return this")(),Z=Object.prototype,tt=Z.toString,et=Math.max,nt=Math.min,T=function(){return Y.Date.now()};function rt(t,e,n){var s,o,d,c,a,r,u=0,h=!1,g=!1,j=!0;if(typeof t!="function")throw new TypeError(W);e=S(e)||0,b(n)&&(h=!!n.leading,g="maxWait"in n,d=g?et(S(n.maxWait)||0,e):d,j="trailing"in n?!!n.trailing:j);function v(i){var l=s,m=o;return s=o=void 0,u=i,c=t.apply(m,l),c}function C(i){return u=i,a=setTimeout(p,e),h?v(i):c}function N(i){var l=i-r,m=i-u,k=e-l;return g?nt(k,d-m):k}function I(i){var l=i-r,m=i-u;return r===void 0||l>=e||l<0||g&&m>=d}function p(){var i=T();if(I(i))return M(i);a=setTimeout(p,N(i))}function M(i){return a=void 0,j&&s?v(i):(s=o=void 0,c)}function z(){a!==void 0&&clearTimeout(a),u=0,s=r=o=a=void 0}function B(){return a===void 0?c:M(T())}function w(){var i=T(),l=I(i);if(s=arguments,o=this,r=i,l){if(a===void 0)return C(r);if(g)return a=setTimeout(p,e),v(r)}return a===void 0&&(a=setTimeout(p,e)),c}return w.cancel=z,w.flush=B,w}function it(t,e,n){var s=!0,o=!0;if(typeof t!="function")throw new TypeError(W);return b(n)&&(s="leading"in n?!!n.leading:s,o="trailing"in n?!!n.trailing:o),rt(t,e,{leading:s,maxWait:e,trailing:o})}function b(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ot(t){return!!t&&typeof t=="object"}function at(t){return typeof t=="symbol"||ot(t)&&tt.call(t)==D}function S(t){if(typeof t=="number")return t;if(at(t))return O;if(b(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=b(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(V,"");var n=X.test(t);return n||q.test(t)?J(t.slice(2),n?2:8):U.test(t)?O:+t}var st=it;const ct=R(st),ft=()=>{const[t,e]=E.useState(window.innerWidth);return E.useEffect(()=>{const n=ct(()=>{e(window.innerWidth)},500);return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),{width:t}};export{lt as P,ct as t,ft as u};
