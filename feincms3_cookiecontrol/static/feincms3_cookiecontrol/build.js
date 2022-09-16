(()=>{(function(){var f=document.createElement("style");f.textContent=":root{--f3cc-background-color:#e9e9e9;--f3cc-foreground-color:#000000;--f3cc-button-background:#cbcbcb;--f3cc-accept-background:#90f690;}#f3cc{font-size:16px;line-height:1.3;}#f3cc .f3cc-banner{position:fixed;bottom:0;width:100%;background:var(--f3cc-background-color);color:var(--f3cc-foreground-color);z-index:2000;padding:1rem 1rem 1.25rem;}#f3cc .f3cc-container{display:flex;gap:2rem;max-width:70em;margin:0 auto;width:80%;}@media screen and (max-width:60rem){#f3cc .f3cc-container{width:100%;flex-direction:column;}}#f3cc .f3cc-title{font-size:1.5em;font-weight:bold;margin-bottom:0.25em;}#f3cc .f3cc-description a{color:inherit;text-decoration:underline;}#f3cc .f3cc-description a:hover{opacity:0.7;}#f3cc .f3cc-buttons{display:flex;flex-direction:column;gap:1rem;justify-content:center;align-items:stretch;}#f3cc .f3cc-button, .f3cc-embed__button{display:inline-block;background:var(--f3cc-button-background);color:var(--f3cc-foreground-color);padding:0.8rem 1.2rem;white-space:nowrap;text-decoration:none;text-align:center;cursor:pointer;}#f3cc .f3cc-button:hover{opacity:0.7;}#f3cc .f3cc-button.accept, .f3cc-embed .f3cc-embed__button{background:var(--f3cc-accept-background);}#f3cc .f3cc-button.modify{position:fixed;z-index:2000;bottom:1rem;right:1rem;}.f3cc-embed .f3cc-embed__overlay{background-color:var(--f3cc-background-color);padding:4rem 2.5rem;}.f3cc-embed .f3cc-embed__statement{margin-bottom:1em;}.f3cc-embed{display:none;}.f3cc-embed.show{display:block;}.f3cc-embed.enabled .f3cc-embed__overlay{display:none;}",document.head.appendChild(f)})();(function(){let f="f3cc",n=window.f3ccData||JSON.parse(document.getElementById("f3cc-data").textContent),h={},y="f3cc-embed-providers",s,d,m;function i(e,t=null,c=[]){let o=document.createElement(e);if(t)for(let[r,a]of Object.entries(t))r.startsWith("data-")?o.setAttribute(r,a):o[r]=a;return o.append(...c),o}function v(){if(d){x(d);return}let e=[i("div",{className:"f3cc-title",textContent:n.heading}),i("div",{className:"f3cc-description",textContent:n.description})];n.privacyPolicyURL&&e[1].append(i("br"),i("a",{textContent:n.privacyPolicyTitle,href:n.privacyPolicyURL}));let t=[i("a",{className:"f3cc-button accept",textContent:n.buttonAccept,onclick:_}),i("a",{className:"f3cc-button reject",textContent:n.buttonReject,onclick:E})];d=i("div",{className:"f3cc f3cc-banner"},[i("div",{className:"f3cc-container"},[i("div",{className:"f3cc-content"},e),i("div",{className:"f3cc-buttons"},t)])]),s.append(d)}function u(){if(m){x(m);return}let e=n.privacyPolicyURL,t=window.location;n.buttonModify&&(!e||e==`${t.protocol}//${t.host}${t.pathname}`)&&(m=i("a",{className:"f3cc-button modify",textContent:n.buttonModify,onclick:c=>{c.preventDefault(),b(m),v()}}),s.append(m))}function k(e){let t=`${f}=${e};max-age=31536000;path=/;sameSite=Strict`;n.domain&&(t+=`;domain=${n.domain}`),document.cookie=t}function p(){let e=document.cookie?document.cookie.split("; "):[],t=`${f}=`;for(let c of e)if(c.startsWith(t))return decodeURIComponent(c.substring(t.length))}function N(){return["all","essential"].includes(p())}function S(){return p()==="all"}function x(e){e.style.display=""}function b(e){e&&(e.style.display="none")}function _(e){e.preventDefault(),k("all"),b(d),u(),w()}function E(e){e.preventDefault(),k("essential"),b(d),u()}function w(){for(let e of n.cookies){let t=h[e.name];t||(h[e.name]=t=document.createElement("div"),t.dataset.name=e.name,s.append(t)),t.innerHTML=e.script,C(t)}}function L(){s=i("div",{id:"f3cc"}),document.body.append(s),S()&&w(),N()?u():v()}function R(){let e=document.querySelectorAll(".f3cc-embed");function t(c,o){let r=o.content.cloneNode(!0);c.classList.add("enabled"),c.appendChild(r)}e.forEach(c=>{c.classList.add("show");let o=c.querySelector(".f3cc-embed__template"),r=c.querySelector(".f3cc-embed__button"),a=c.dataset.provider,g=JSON.parse(window.localStorage.getItem(y)),P=p("f3cc")==="all";o&&a&&(g&&g.some(l=>l===a)||P?t(c,o):r.addEventListener("click",()=>{let l=g;l?l.push(a):l=[a],window.localStorage.setItem(y,JSON.stringify(l)),t(c,o)}))})}L(),R();function C(e){if(I(e)===!0)e.parentNode.replaceChild(j(e),e);else{let t=-1,c=e.childNodes;for(;++t<c.length;)C(c[t])}return e}function j(e){let t=document.createElement("script");t.text=e.innerHTML;let c=-1,o=e.attributes,r;for(;++c<o.length;)t.setAttribute((r=o[c]).name,r.value);return t}function I(e){return e.tagName==="SCRIPT"}})();})();
