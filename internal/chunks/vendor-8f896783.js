function b(){}const U=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function it(){return Object.create(null)}function k(t){t.forEach(nt)}function N(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function se(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function $t(t){return Object.keys(t).length===0}function re(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n,i){if(t){const r=rt(t,e,n,i);return t[0](r)}}function rt(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,u){if(r){const s=rt(e,n,i,u);t.p(s,r)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function oe(t){return t==null?"":t}function St(t){return t&&N(t.destroy)?t.destroy:b}const ot=typeof window!="undefined";let lt=ot?()=>window.performance.now():()=>Date.now(),V=ot?t=>requestAnimationFrame(t):b;const S=new Set;function ct(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&V(ct)}function ut(t){let e;return S.size===0&&V(ct),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let B=!1;function Ct(){B=!0}function Nt(){B=!1}function At(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const h=e[c];h.claim_order!==void 0&&o.push(h)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,h=(r>0&&e[n[r]].claim_order<=c?r+1:At(1,r,a=>e[n[a]].claim_order,c))-1;i[o]=n[h]+1;const d=h+1;n[d]=o,r=Math.max(d,r)}const u=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<u.length&&s[o].claim_order>=u[c].claim_order;)c++;const h=c<u.length?u[c]:null;t.insertBefore(s[o],h)}}function qt(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function jt(t){const e=G("style");return Rt(at(t),e),e}function Rt(t,e){qt(t.head||t,e)}function Ot(t,e){if(B){for(Mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){B&&!n?Ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode.removeChild(t)}function G(t){return document.createElement(t)}function Bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function le(){return J(" ")}function ce(){return J("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ae(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function fe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function Dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,r=!1){Dt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function _t(t,e,n,i){return dt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Lt(t,e,n){return _t(t,e,n,G)}function de(t,e,n){return _t(t,e,n,Bt)}function Pt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function _e(t){return Pt(t," ")}function he(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function me(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function zt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function ye(t,e=document.body){return Array.from(e.querySelectorAll(t))}const K=new Set;let D=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Q(t,e,n,i,r,u,s,l=0){const o=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=o){const y=e+(n-e)*u(m);c+=m*100+`%{${s(y,1-y)}}
`}const h=c+`100% {${s(n,1-n)}}
}`,d=`__svelte_${Ft(h)}_${l}`,a=at(t);K.add(a);const f=a.__svelte_stylesheet||(a.__svelte_stylesheet=jt(t).sheet),_=a.__svelte_rules||(a.__svelte_rules={});_[d]||(_[d]=!0,f.insertRule(`@keyframes ${d} ${h}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,D+=1,d}function ht(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||Ht())}function Ht(){V(()=>{D||(K.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),K.clear())})}function ge(t,e,n,i){if(!e)return b;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return b;const{delay:u=0,duration:s=300,easing:l=U,start:o=lt()+u,end:c=o+s,tick:h=b,css:d}=n(t,{from:e,to:r},i);let a=!0,f=!1,_;function g(){d&&(_=Q(t,0,1,s,u,l,d)),u||(f=!0)}function m(){d&&ht(t,_),a=!1}return ut(y=>{if(!f&&y>=o&&(f=!0),f&&y>=c&&(h(1,0),m()),!a)return!1;if(f){const w=y-o,$=0+1*l(w/s);h($,1-$)}return!0}),g(),h(0,1),m}function be(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,It(t,r)}}function It(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let A;function M(t){A=t}function L(){if(!A)throw new Error("Function called outside component initialization");return A}function we(t){L().$$.on_mount.push(t)}function $e(t){L().$$.after_update.push(t)}function xe(t){L().$$.on_destroy.push(t)}function ve(t,e){L().$$.context.set(t,e)}function Ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const q=[],mt=[],P=[],X=[],pt=Promise.resolve();let Y=!1;function yt(){Y||(Y=!0,pt.then(gt))}function Ut(){return yt(),pt}function z(t){P.push(t)}function ke(t){X.push(t)}const Z=new Set;let F=0;function gt(){const t=A;do{for(;F<q.length;){const e=q[F];F++,M(e),Vt(e.$$)}for(M(null),q.length=0,F=0;mt.length;)mt.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];Z.has(n)||(Z.add(n),n())}P.length=0}while(q.length);for(;X.length;)X.pop()();Y=!1,Z.clear(),M(t)}function Vt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let j;function Wt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function tt(t,e,n){t.dispatchEvent(zt(`${e?"intro":"outro"}${n}`))}const H=new Set;let E;function Se(){E={r:0,c:[],p:E}}function Ce(){E.r||k(E.c),E=E.p}function et(t,e){t&&t.i&&(H.delete(t),t.i(e))}function bt(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),E.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Gt={duration:0};function Ne(t,e,n,i){let r=e(t,n),u=i?0:1,s=null,l=null,o=null;function c(){o&&ht(t,o)}function h(a,f){const _=a.b-u;return f*=Math.abs(_),{a:u,b:a.b,d:_,duration:f,start:a.start,end:a.start+f,group:a.group}}function d(a){const{delay:f=0,duration:_=300,easing:g=U,tick:m=b,css:y}=r||Gt,w={start:lt()+f,b:a};a||(w.group=E,E.r+=1),s||l?l=w:(y&&(c(),o=Q(t,u,a,_,f,g,y)),a&&m(0,1),s=h(w,_),z(()=>tt(t,a,"start")),ut($=>{if(l&&$>l.start&&(s=h(l,_),l=null,tt(t,s.b,"start"),y&&(c(),o=Q(t,u,s.b,s.duration,0,g,r.css))),s){if($>=s.end)m(u=s.b,1-u),tt(t,s.b,"end"),l||(s.b?c():--s.group.r||k(s.group.c)),s=null;else if($>=s.start){const R=$-s.start;u=s.a+s.d*g(R/s.duration),m(u,1-u)}}return!!(s||l)}))}return{run(a){N(r)?Wt().then(()=>{r=r(),d(a)}):d(a)},end(){c(),s=l=null}}}function Ae(t,e){t.d(1),e.delete(t.key)}function Jt(t,e){bt(t,1,1,()=>{e.delete(t.key)})}function Me(t,e){t.f(),Jt(t,e)}function qe(t,e,n,i,r,u,s,l,o,c,h,d){let a=t.length,f=u.length,_=a;const g={};for(;_--;)g[t[_].key]=_;const m=[],y=new Map,w=new Map;for(_=f;_--;){const p=d(r,u,_),x=n(p);let v=s.get(x);v?i&&v.p(p,e):(v=c(x,p),v.c()),y.set(x,m[_]=v),x in g&&w.set(x,Math.abs(_-g[x]))}const $=new Set,R=new Set;function I(p){et(p,1),p.m(l,h),s.set(p.key,p),h=p.first,f--}for(;a&&f;){const p=m[f-1],x=t[a-1],v=p.key,O=x.key;p===x?(h=p.first,a--,f--):y.has(O)?!s.has(v)||$.has(v)?I(p):R.has(O)?a--:w.get(v)>w.get(O)?(R.add(v),I(p)):($.add(O),a--):(o(x,s),a--)}for(;a--;){const p=t[a];y.has(p.key)||o(p,s)}for(;f;)I(m[f-1]);return m}function je(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=e[u];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[u]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Re(t){return typeof t=="object"&&t!==null?t:{}}function Oe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Te(t){t&&t.c()}function Be(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||z(()=>{const o=u.map(nt).filter(N);s?s.push(...o):k(o),t.$$.on_mount=[]}),l.forEach(z)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(q.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,i,r,u,s,l=[-1]){const o=A;M(t);const c=t.$$={fragment:null,ctx:null,props:u,update:b,not_equal:r,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:it(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(d,a,...f)=>{const _=f.length?f[0]:a;return c.ctx&&r(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),h&&Xt(t,d)),a}):[],c.update(),h=!0,k(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Ct();const d=ft(e.target);c.fragment&&c.fragment.l(d),d.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&et(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),Nt(),gt()}M(o)}class Zt{$destroy(){Qt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const C=[];function De(t,e=b){let n;const i=new Set;function r(l){if(st(t,l)&&(t=l,n)){const o=!C.length;for(const c of i)c[1](),C.push(c,t);if(o){for(let c=0;c<C.length;c+=2)C[c][0](C[c+1]);C.length=0}}}function u(l){r(l(t))}function s(l,o=b){const c=[l,o];return i.add(c),i.size===1&&(n=e(r)||b),l(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:s}}function te(t){const e=t-1;return e*e*e+1}function Le(t,{delay:e=0,duration:n=400,easing:i=U}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*r}`}}function ee(t){let e,n,i,r,u;const s=t[2].default,l=xt(s,t,t[1],null);return{c(){e=G("div"),l&&l.c(),this.h()},l(o){e=Lt(o,"DIV",{});var c=ft(e);l&&l.l(c),c.forEach(W),this.h()},h(){e.hidden=!0},m(o,c){Tt(o,e,c),l&&l.m(e,null),i=!0,r||(u=St(n=ne.call(null,e,t[0])),r=!0)},p(o,[c]){l&&l.p&&(!i||c&2)&&Et(l,s,o,o[1],i?vt(s,o[1],c,null):kt(o[1]),null),n&&N(n.update)&&c&1&&n.update.call(null,o[0])},i(o){i||(et(l,o),i=!0)},o(o){bt(l,o),i=!1},d(o){o&&W(e),l&&l.d(o),r=!1,u()}}}function ne(t,e="body"){let n;async function i(u){if(e=u,typeof e=="string"){if(n=document.querySelector(e),n===null&&(await Ut(),n=document.querySelector(e)),n===null)throw new Error(`No element found matching css selector: "${e}"`)}else if(e instanceof HTMLElement)n=e;else throw new TypeError(`Unknown portal target type: ${e===null?"null":typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);n.appendChild(t),t.hidden=!1}function r(){t.parentNode&&t.parentNode.removeChild(t)}return i(e),{update:i,destroy:r}}function ie(t,e,n){let{$$slots:i={},$$scope:r}=e,{target:u="body"}=e;return t.$$set=s=>{"target"in s&&n(0,u=s.target),"$$scope"in s&&n(1,r=s.$$scope)},[u,r,i]}class Pe extends Zt{constructor(e){super();Yt(this,e,ie,ee,st,{target:0})}}function ze(t,{from:e,to:n},i={}){const r=getComputedStyle(t),u=r.transform==="none"?"":r.transform,[s,l]=r.transformOrigin.split(" ").map(parseFloat),o=e.left+e.width*s/n.width-(n.left+s),c=e.top+e.height*l/n.height-(n.top+l),{delay:h=0,duration:d=f=>Math.sqrt(f)*120,easing:a=te}=i;return{delay:h,duration:N(d)?d(Math.sqrt(o*o+c*c)):d,easing:a,css:(f,_)=>{const g=_*o,m=_*c,y=f+_*e.width/n.width,w=f+_*e.height/n.height;return`transform: ${u} translate(${g}px, ${m}px) scale(${y}, ${w});`}}}export{qe as $,Qt as A,wt as B,De as C,Ut as D,Bt as E,de as F,Ot as G,b as H,oe as I,ue as J,se as K,xt as L,Et as M,kt as N,vt as O,re as P,xe as Q,Pe as R,Zt as S,N as T,z as U,Ne as V,Le as W,me as X,ae as Y,Ee as Z,ye as _,ft as a,Ae as a0,mt as a1,Oe as a2,ke as a3,pe as a4,be as a5,It as a6,ge as a7,ze as a8,Me as a9,fe as b,Lt as c,W as d,G as e,Tt as f,Pt as g,he as h,Yt as i,le as j,ce as k,_e as l,Se as m,bt as n,Ce as o,et as p,ve as q,$e as r,st as s,J as t,we as u,Te as v,Be as w,Kt as x,je as y,Re as z};
