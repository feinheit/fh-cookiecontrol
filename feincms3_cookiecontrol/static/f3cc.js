(()=>{(function(){var e=document.createElement("style");e.textContent=".f3cc{font-size:16px;line-height:1.3;--_b:var(--f3cc-background,#e9e9e9);--_f:var(--f3cc-foreground,#000000);--_B:var(--f3cc-button-background,#cbcbcb);--_A:var(--f3cc-accept-background,#90f690);--_F:var(--f3cc-button-foreground,var(--_f));--_E:var(--f3cc-accept-foreground,var(--_F));}.f3cc .f3cc-banner{position:fixed;bottom:0;width:100%;background:var(--_b);color:var(--_f);z-index:2000;padding:1rem 1rem 1.25rem;}.f3cc .f3cc-embed{background:var(--_b);color:var(--_f);padding:4rem;}.f3cc .f3cc-container{display:flex;gap:2rem;max-width:70em;margin:0 auto;width:80%;}@media (max-width:60rem){.f3cc .f3cc-container{width:100%;flex-direction:column;}}.f3cc .f3cc-title{font-size:1.5em;font-weight:bold;margin-bottom:0.25em;}.f3cc .f3cc-description a{color:inherit;text-decoration:underline;}.f3cc .f3cc-description a:hover{opacity:0.7;}.f3cc .f3cc-buttons{display:flex;flex-direction:column;gap:1rem;justify-content:center;align-items:stretch;}.f3cc .f3cc-button{display:inline-block;background:var(--_B);color:var(--_F);padding:0.8rem 1.2rem;white-space:nowrap;text-decoration:none;text-align:center;cursor:pointer;border:none;}.f3cc .f3cc-button:hover{opacity:0.7;}.f3cc .f3cc-button.accept{background:var(--_A);color:var(--_E);}.f3cc .f3cc-button.modify{position:fixed;z-index:2000;bottom:1rem;right:1rem;}.f3cc-embed .f3cc-description{margin-bottom:1em;}",document.head.appendChild(e)})();var b=(e,t=document)=>t.querySelector(e),x=document.body,i="className",l="textContent",T="innerHTML",_="f3cc",r=window.f3ccData||JSON.parse(b("#f3cc-data")[l]),w={},p="f3cc-embed-providers",m,d,f,o=(e,t=null,c=[])=>{let n=document.createElement(e);if(t)for(let[a,s]of Object.entries(t))a.startsWith("data-")?n.setAttribute(a,s):n[a]=s;return n.append(...c),n},u=()=>{if(d){A(d);return}let e=[o("div",{[i]:"f3cc-title",[l]:r.heading}),o("div",{[i]:"f3cc-description",[T]:r.description})],t=[o("a",{[i]:"f3cc-button accept",[l]:r.buttonAccept,onclick:D}),o("a",{[i]:"f3cc-button reject",[l]:r.buttonReject,onclick:I})];d=o("div",{[i]:"f3cc f3cc-banner"},[o("div",{[i]:"f3cc-container"},[o("div",{[i]:"f3cc-content"},e),o("div",{[i]:"f3cc-buttons"},t)])]),k().append(d)},v=()=>{if(f){A(f);return}let e;if(e=b(".f3cc-modify")){e.addEventListener("click",n=>{n.preventDefault(),u()});return}let t=r.ppu,c=window.location;r.buttonModify&&(!t||t==`${c.protocol}//${c.host}${c.pathname}`)&&(f=o("a",{[i]:"f3cc-button modify",[l]:r.buttonModify,onclick:n=>{n.preventDefault(),h(f),u()}}),k().append(f))},C=e=>{let t=`${_}=${e};max-age=31536000;path=/;sameSite=Strict`;r.domain&&(t+=`;domain=${r.domain}`),document.cookie=t},S=()=>{let e=`${_}=`;for(let t of document.cookie.split("; "))if(t.startsWith(e))return decodeURIComponent(t.substring(e.length))},g="all",E="essential",$=()=>{let e=S();return g==e||E==e},N=()=>S()===g,A=e=>{e.style.display=""},h=e=>{e&&(e.style.display="none")},D=e=>{e.preventDefault(),C(g),h(d),v(),j(),y()},I=e=>{e.preventDefault(),C(E),h(d),v()},j=()=>{for(let e of r.cookies){let t=w[e.name];t||(w[e.name]=t=o("div"),t.dataset.name=e.name,k().append(t)),t.innerHTML=e.script,R(t)}},k=()=>(m||(m=o("div",{[i]:"f3cc"}),x.append(m)),m),z=()=>{N()&&j(),$()?v():u()},L={},B=(e,t)=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch{L[e]=t}},M=e=>{try{return JSON.parse(window.localStorage.getItem(e))}catch{return L[e]}},y=window.f3ccRenderEmbeds=()=>{let e=M(p)||[];document.querySelectorAll(".f3cc-embed").forEach(c=>{let n=b("template",c),a=c.dataset.provider;if(n&&a&&(N()||e.some(s=>s===a))){let s=n.content.cloneNode(!0);c.closest(".f3cc").replaceWith(s)}})},F=()=>{x.addEventListener("click",e=>{let t=e.target.closest(".f3cc-button"),c=t&&t.closest(".f3cc-embed");if(t&&c){e.preventDefault();let n=M(p)||[];n.push(c.dataset.provider),B(p,n),y()}})},R=e=>{if(O(e)===!0)e.parentNode.replaceChild(H(e),e);else{let t=-1,c=e.childNodes;for(;++t<c.length;)R(c[t])}return e},H=e=>{let t=o("script");t.text=e.innerHTML;let c=-1,n=e.attributes,a;for(;++c<n.length;)t.setAttribute((a=n[c]).name,a.value);return t},O=e=>e.tagName==="SCRIPT";z();y();F();})();
