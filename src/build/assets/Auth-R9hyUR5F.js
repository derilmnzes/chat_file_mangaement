import{r as x,g as E,a as I,s as O,_ as g,u as U,x as X,y as Y,b as _,j as f,c as K,z as N,A as z,d as Z,C as M,f as ee,T as q,e as H,D as ne,E as re,k as te,F as oe,i as R,p as se,G as A}from"./index-U3fbFpKl.js";import{T as D}from"./TextField-ICRwuXyg.js";import{B as ie}from"./Input-y1eaz7Qx.js";const ae=x.createContext(),L=ae;function ce(e){return E("MuiGrid",e)}const le=[0,1,2,3,4,5,6,7,8,9,10],ue=["column-reverse","column","row-reverse","row"],pe=["nowrap","wrap-reverse","wrap"],S=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=I("MuiGrid",["root","container","item","zeroMinWidth",...le.map(e=>`spacing-xs-${e}`),...ue.map(e=>`direction-xs-${e}`),...pe.map(e=>`wrap-xs-${e}`),...S.map(e=>`grid-xs-${e}`),...S.map(e=>`grid-sm-${e}`),...S.map(e=>`grid-md-${e}`),...S.map(e=>`grid-lg-${e}`),...S.map(e=>`grid-xl-${e}`)]),de=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function v(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function fe({theme:e,ownerState:n}){let t;return e.breakpoints.keys.reduce((o,r)=>{let s={};if(n[r]&&(t=n[r]),!t)return o;if(t===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(t==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=N({values:n.columns,breakpoints:e.breakpoints.values}),p=typeof i=="object"?i[r]:i;if(p==null)return o;const l=`${Math.round(t/p*1e8)/1e6}%`;let u={};if(n.container&&n.item&&n.columnSpacing!==0){const a=e.spacing(n.columnSpacing);if(a!=="0px"){const c=`calc(${l} + ${v(a)})`;u={flexBasis:c,maxWidth:c}}}s=g({flexBasis:l,flexGrow:0,maxWidth:l},u)}return e.breakpoints.values[r]===0?Object.assign(o,s):o[e.breakpoints.up(r)]=s,o},{})}function me({theme:e,ownerState:n}){const t=N({values:n.direction,breakpoints:e.breakpoints.values});return z({theme:e},t,o=>{const r={flexDirection:o};return o.indexOf("column")===0&&(r[`& > .${k.item}`]={maxWidth:"none"}),r})}function J({breakpoints:e,values:n}){let t="";Object.keys(n).forEach(r=>{t===""&&n[r]!==0&&(t=r)});const o=Object.keys(e).sort((r,s)=>e[r]-e[s]);return o.slice(0,o.indexOf(t))}function ge({theme:e,ownerState:n}){const{container:t,rowSpacing:o}=n;let r={};if(t&&o!==0){const s=N({values:o,breakpoints:e.breakpoints.values});let i;typeof s=="object"&&(i=J({breakpoints:e.breakpoints.values,values:s})),r=z({theme:e},s,(p,l)=>{var u;const a=e.spacing(p);return a!=="0px"?{marginTop:`-${v(a)}`,[`& > .${k.item}`]:{paddingTop:v(a)}}:(u=i)!=null&&u.includes(l)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}})}return r}function xe({theme:e,ownerState:n}){const{container:t,columnSpacing:o}=n;let r={};if(t&&o!==0){const s=N({values:o,breakpoints:e.breakpoints.values});let i;typeof s=="object"&&(i=J({breakpoints:e.breakpoints.values,values:s})),r=z({theme:e},s,(p,l)=>{var u;const a=e.spacing(p);return a!=="0px"?{width:`calc(100% + ${v(a)})`,marginLeft:`-${v(a)}`,[`& > .${k.item}`]:{paddingLeft:v(a)}}:(u=i)!=null&&u.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}})}return r}function he(e,n,t={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[t[`spacing-xs-${String(e)}`]];const o=[];return n.forEach(r=>{const s=e[r];Number(s)>0&&o.push(t[`spacing-${r}-${String(s)}`])}),o}const be=O("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{container:o,direction:r,item:s,spacing:i,wrap:p,zeroMinWidth:l,breakpoints:u}=t;let a=[];o&&(a=he(i,u,n));const c=[];return u.forEach(d=>{const m=t[d];m&&c.push(n[`grid-${d}-${String(m)}`])}),[n.root,o&&n.container,s&&n.item,l&&n.zeroMinWidth,...a,r!=="row"&&n[`direction-xs-${String(r)}`],p!=="wrap"&&n[`wrap-xs-${String(p)}`],...c]}})(({ownerState:e})=>g({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),me,ge,xe,fe);function ve(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const t=[];return n.forEach(o=>{const r=e[o];if(Number(r)>0){const s=`spacing-${o}-${String(r)}`;t.push(s)}}),t}const ye=e=>{const{classes:n,container:t,direction:o,item:r,spacing:s,wrap:i,zeroMinWidth:p,breakpoints:l}=e;let u=[];t&&(u=ve(s,l));const a=[];l.forEach(d=>{const m=e[d];m&&a.push(`grid-${d}-${String(m)}`)});const c={root:["root",t&&"container",r&&"item",p&&"zeroMinWidth",...u,o!=="row"&&`direction-xs-${String(o)}`,i!=="wrap"&&`wrap-xs-${String(i)}`,...a]};return Z(c,ce,n)},$e=x.forwardRef(function(n,t){const o=U({props:n,name:"MuiGrid"}),{breakpoints:r}=X(),s=Y(o),{className:i,columns:p,columnSpacing:l,component:u="div",container:a=!1,direction:c="row",item:d=!1,rowSpacing:m,spacing:b=0,wrap:V="wrap",zeroMinWidth:G=!1}=s,y=_(s,de),T=m||b,w=l||b,F=x.useContext(L),C=a?p||12:F,j={},$=g({},y);r.keys.forEach(B=>{y[B]!=null&&(j[B]=y[B],delete $[B])});const W=g({},s,{columns:C,container:a,direction:c,item:d,rowSpacing:T,columnSpacing:w,wrap:V,zeroMinWidth:G,spacing:b},j,{breakpoints:r.keys}),h=ye(W);return f.jsx(L.Provider,{value:C,children:f.jsx(be,g({ownerState:W,className:K(h.root,i),as:u,ref:t},$))})}),P=$e;function Se(e){return E("MuiLink",e)}const ke=I("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),we=ke,Q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ce=e=>Q[e]||e,je=({theme:e,ownerState:n})=>{const t=Ce(n.color),o=M(e,`palette.${t}`,!1)||n.color,r=M(e,`palette.${t}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:ee(o,.4)},We=je,Be=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Ne=e=>{const{classes:n,component:t,focusVisible:o,underline:r}=e,s={root:["root",`underline${H(r)}`,t==="button"&&"button",o&&"focusVisible"]};return Z(s,Se,n)},Ve=O(q,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${H(t.underline)}`],t.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>g({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&g({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:We({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${we.focusVisible}`]:{outline:"auto"}})),Ge=x.forwardRef(function(n,t){const o=U({props:n,name:"MuiLink"}),{className:r,color:s="primary",component:i="a",onBlur:p,onFocus:l,TypographyClasses:u,underline:a="always",variant:c="inherit",sx:d}=o,m=_(o,Be),{isFocusVisibleRef:b,onBlur:V,onFocus:G,ref:y}=ne(),[T,w]=x.useState(!1),F=re(t,y),C=h=>{V(h),b.current===!1&&w(!1),p&&p(h)},j=h=>{G(h),b.current===!0&&w(!0),l&&l(h)},$=g({},o,{color:s,component:i,focusVisible:T,underline:a,variant:c}),W=Ne($);return f.jsx(Ve,g({color:s,className:K(W.root,r),classes:u,component:i,onBlur:C,onFocus:j,ref:F,ownerState:$,variant:c,sx:[...Object.keys(Q).includes(s)?[]:[{color:s}],...Array.isArray(d)?d:[d]]},m))}),Te=Ge;function Re(){const e=te(),n=oe(),t=R(c=>c.user.loading),o=R(c=>c.user.isAuth),[r,s]=x.useState(0),[i,p]=x.useState({name:"",password:""});x.useEffect(()=>{o&&n("/")},[o]);const l=c=>{p({...i,[c.target.name]:c.target.value})},u=c=>{var d;if(c.preventDefault(),((d=i==null?void 0:i.password)==null?void 0:d.length)<8){e(se({show:!0,message:"Please enter 8 digit password",status:"error"}));return}e(r===0?A(i,!0):A(i,!1))},a=()=>{s(r===0?1:0)};return f.jsx("div",{className:"flex h-[100vh] flex-col items-center justify-center",children:f.jsxs("div",{className:"h-[50%] shadow-xl w-1/3  p-10 rounded-lg",children:[f.jsx(q,{component:"h1",textAlign:"center",variant:"h5",children:r===0?"Sign Up":"Sign In"}),f.jsxs("form",{onSubmit:u,children:[f.jsx(D,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"name",name:"name",autoComplete:"name",autoFocus:!0,value:i.name,onChange:l}),f.jsx(D,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:i.password,onChange:l}),f.jsx(ie,{disabled:t,type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:t?"Loading ...":r===0?"Sign Up":"Sign In"}),f.jsx(P,{container:!0,justifyContent:"flex-end",children:f.jsx(P,{item:!0,children:f.jsx(Te,{variant:"body2",onClick:a,children:r===0?"Already have an account? Sign in":"Don't have an account? Sign up"})})})]})]})})}export{Re as default};
