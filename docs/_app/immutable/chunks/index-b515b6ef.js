function w(){}const H=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(Z)}function T(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Lt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function zt(t,e,n,r){if(t){const s=tt(t,e,n,r);return t[0](s)}}function tt(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function Bt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],i=Math.max(e.dirty.length,s.length);for(let l=0;l<i;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Ft(t,e,n,r,s,o){if(s){const i=tt(e,n,r,o);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const et=typeof window<"u";let I=et?()=>window.performance.now():()=>Date.now(),W=et?t=>requestAnimationFrame(t):w;const E=new Set;function nt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&W(nt)}function G(t){let e;return E.size===0&&W(nt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let z=!1;function ht(){z=!0}function mt(){z=!1}function pt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:pt(1,s,a=>e[n[a]].claim_order,u))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const o=[],i=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=r[c-1]){for(o.push(e[c-1]);l>=c;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);o.reverse(),i.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<i.length;c++){for(;u<o.length&&i[c].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(i[c],_)}}function yt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=rt("style");return xt(it(t),e),e.sheet}function xt(t,e){yt(t.head||t,e)}function $t(t,e){if(z){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){z&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function wt(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Gt(){return J(" ")}function Jt(){return J("")}function Kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t){return t===""?null:+t}function Et(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,r,s=!1){kt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,s||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ct(t,e,n,r){return st(t,s=>s.nodeName===e,s=>{const o=[];for(let i=0;i<s.attributes.length;i++){const l=s.attributes[i];n[l.name]||o.push(l.name)}o.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Xt(t,e,n){return ct(t,e,n,rt)}function Yt(t,e,n){return ct(t,e,n,vt)}function Nt(t,e){return st(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>J(e),!0)}function Zt(t){return Nt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e==null?"":e}function ne(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ie(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const O=new Map;let q=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:bt(e),rules:{}};return O.set(t,n),n}function D(t,e,n,r,s,o,i,l=0){const c=16.666/r;let u=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*o(m);u+=m*100+`%{${i(y,1-y)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${At(_)}_${l}`,a=it(t),{stylesheet:d,rules:h}=O.get(a)||Ct(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${s}ms 1 both`,q+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),q-=s,q||St())}function St(){W(()=>{q||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let C;function A(t){C=t}function K(){if(!C)throw new Error("Function called outside component initialization");return C}function re(t){K().$$.on_mount.push(t)}function se(t){K().$$.after_update.push(t)}function ce(t,e){return K().$$.context.set(t,e),e}function le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const j=[],X=[],P=[],Y=[],lt=Promise.resolve();let F=!1;function ot(){F||(F=!0,lt.then(ut))}function oe(){return ot(),lt}function k(t){P.push(t)}const B=new Set;let M=0;function ut(){const t=C;do{for(;M<j.length;){const e=j[M];M++,A(e),Mt(e.$$)}for(A(null),j.length=0,M=0;X.length;)X.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];B.has(n)||(B.add(n),n())}P.length=0}while(j.length);for(;Y.length;)Y.pop()();F=!1,B.clear(),A(t)}function Mt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let N;function Q(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function $(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const R=new Set;let g;function ue(){g={r:0,c:[],p:g}}function ae(){g.r||v(g.c),g=g.p}function Pt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function fe(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),g.c.push(()=>{R.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const U={duration:0};function _e(t,e,n){let r=e(t,n),s=!1,o,i,l=0;function c(){o&&L(t,o)}function u(){const{delay:f=0,duration:a=300,easing:d=H,tick:h=w,css:p}=r||U;p&&(o=D(t,0,1,a,f,d,p,l++)),h(0,1);const m=I()+f,y=m+a;i&&i.abort(),s=!0,k(()=>$(t,!0,"start")),i=G(b=>{if(s){if(b>=y)return h(1,0),$(t,!0,"end"),c(),s=!1;if(b>=m){const x=d((b-m)/a);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,L(t),T(r)?(r=r(),Q().then(u)):u())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function de(t,e,n){let r=e(t,n),s=!0,o;const i=g;i.r+=1;function l(){const{delay:c=0,duration:u=300,easing:_=H,tick:f=w,css:a}=r||U;a&&(o=D(t,1,0,u,c,_,a));const d=I()+c,h=d+u;k(()=>$(t,!1,"start")),G(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--i.r||v(i.c),!1;if(p>=d){const m=_((p-d)/u);f(1-m,m)}}return s})}return T(r)?Q().then(()=>{r=r(),l()}):l(),{end(c){c&&r.tick&&r.tick(1,0),s&&(o&&L(t,o),s=!1)}}}function he(t,e,n,r){let s=e(t,n),o=r?0:1,i=null,l=null,c=null;function u(){c&&L(t,c)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=H,tick:m=w,css:y}=s||U,b={start:I()+d,b:a};a||(b.group=g,g.r+=1),i||l?l=b:(y&&(u(),c=D(t,o,a,h,d,p,y)),a&&m(0,1),i=_(b,h),k(()=>$(t,a,"start")),G(x=>{if(l&&x>l.start&&(i=_(l,h),l=null,$(t,i.b,"start"),y&&(u(),c=D(t,o,i.b,i.duration,0,p,s.css))),i){if(x>=i.end)m(o=i.b,1-o),$(t,i.b,"end"),l||(i.b?u():--i.group.r||v(i.group.c)),i=null;else if(x>=i.start){const at=x-i.start;o=i.a+i.d*p(at/i.duration),m(o,1-o)}}return!!(i||l)}))}return{run(a){T(s)?Q().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=l=null}}}function me(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],l=e[o];if(l){for(const c in i)c in l||(r[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in i)s[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function pe(t){return typeof t=="object"&&t!==null?t:{}}function ge(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Rt(t,e,n,r){const{fragment:s,on_mount:o,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),r||k(()=>{const c=o.map(Z).filter(T);i?i.push(...c):v(c),t.$$.on_mount=[]}),l.forEach(k)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(j.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,r,s,o,i,l=[-1]){const c=C;A(t);const u=t.$$={fragment:null,ctx:null,props:o,update:w,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&qt(t,f)),a}):[],u.update(),_=!0,v(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){ht();const f=Et(e.target);u.fragment&&u.fragment.l(f),f.forEach(wt)}else u.fragment&&u.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),mt(),ut()}A(c)}class xe{$destroy(){Ot(this,1),this.$destroy=w}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Qt as $,pe as A,Ot as B,ft as C,oe as D,w as E,zt as F,Ft as G,Ht as H,Bt as I,$t as J,H as K,I as L,G as M,Kt as N,Tt as O,Lt as P,ee as Q,k as R,xe as S,_e as T,de as U,v as V,Vt as W,ie as X,he as Y,vt as Z,Yt as _,Gt as a,le as a0,Wt as a1,It as b,Zt as c,ae as d,Jt as e,Pt as f,ue as g,wt as h,be as i,ce as j,se as k,rt as l,Xt as m,Et as n,re as o,Ut as p,ne as q,J as r,Dt as s,fe as t,Nt as u,te as v,ge as w,ye as x,Rt as y,me as z};