(()=>{(function(){var f=document.createElement("style");f.textContent=":root{--f3cc-background-color:#e9e9e9;--f3cc-foreground-color:#000000;--f3cc-button-background:#cbcbcb;--f3cc-accept-background:#90f690;}#f3cc{font-size:16px;line-height:1.3;}#f3cc .f3cc-banner{position:fixed;bottom:0;width:100%;background:var(--f3cc-background-color);color:var(--f3cc-foreground-color);z-index:2000;padding:1rem 1rem 1.25rem;}#f3cc .f3cc-container{display:flex;gap:2rem;max-width:70em;margin:0 auto;width:80%;}@media screen and (max-width:60rem){#f3cc .f3cc-container{width:100%;flex-direction:column;}}#f3cc .f3cc-title{font-size:1.5em;font-weight:bold;margin-bottom:0.25em;}#f3cc .f3cc-description a{color:inherit;text-decoration:underline;}#f3cc .f3cc-description a:hover{opacity:0.7;}#f3cc .f3cc-buttons{display:flex;flex-direction:column;gap:1rem;justify-content:center;align-items:stretch;}#f3cc .f3cc-button, .f3cc-embed__button{display:inline-block;background:var(--f3cc-button-background);color:var(--f3cc-foreground-color);padding:0.8rem 1.2rem;white-space:nowrap;text-decoration:none;text-align:center;cursor:pointer;border:none;}#f3cc .f3cc-button:hover, .f3cc-embed__button:hover{opacity:0.7;}#f3cc .f3cc-button.accept, .f3cc-embed .f3cc-embed__button{background:var(--f3cc-accept-background);}#f3cc .f3cc-button.modify{position:fixed;z-index:2000;bottom:1rem;right:1rem;}.f3cc-embed .f3cc-embed__overlay{background-color:var(--f3cc-background-color);padding:4rem 2.5rem;}.f3cc-embed .f3cc-embed__statement{margin-bottom:1em;}",document.head.appendChild(f)})();(function(){let f="f3cc",n=window.f3ccData||JSON.parse(document.getElementById("f3cc-data").textContent),v={},m="f3cc-embed-providers",s,d,l;function i(e,t=null,c=[]){let o=document.createElement(e);if(t)for(let[r,a]of Object.entries(t))r.startsWith("data-")?o.setAttribute(r,a):o[r]=a;return o.append(...c),o}function h(){if(d){w(d);return}let e=[i("div",{className:"f3cc-title",textContent:n.heading}),i("div",{className:"f3cc-description",textContent:n.description})];n.privacyPolicyURL&&e[1].append(i("br"),i("a",{textContent:n.privacyPolicyTitle,href:n.privacyPolicyURL}));let t=[i("a",{className:"f3cc-button accept",textContent:n.buttonAccept,onclick:E}),i("a",{className:"f3cc-button reject",textContent:n.buttonReject,onclick:L})];d=i("div",{className:"f3cc f3cc-banner"},[i("div",{className:"f3cc-container"},[i("div",{className:"f3cc-content"},e),i("div",{className:"f3cc-buttons"},t)])]),s.append(d)}function p(){if(l){w(l);return}let e=n.privacyPolicyURL,t=window.location;n.buttonModify&&(!e||e==`${t.protocol}//${t.host}${t.pathname}`)&&(l=i("a",{className:"f3cc-button modify",textContent:n.buttonModify,onclick:c=>{c.preventDefault(),b(l),h()}}),s.append(l))}function y(e){let t=`${f}=${e};max-age=31536000;path=/;sameSite=Strict`;n.domain&&(t+=`;domain=${n.domain}`),document.cookie=t}function k(){let e=document.cookie?document.cookie.split("; "):[],t=`${f}=`;for(let c of e)if(c.startsWith(t))return decodeURIComponent(c.substring(t.length))}function S(){return["all","essential"].includes(k())}function x(){return k()==="all"}function w(e){e.style.display=""}function b(e){e&&(e.style.display="none")}function E(e){e.preventDefault(),y("all"),b(d),p(),C(),u()}function L(e){e.preventDefault(),y("essential"),b(d),p()}function C(){for(let e of n.cookies){let t=v[e.name];t||(v[e.name]=t=document.createElement("div"),t.dataset.name=e.name,s.append(t)),t.innerHTML=e.script,g(t)}}function R(){s=i("div",{id:"f3cc"}),document.body.append(s),x()&&C(),S()?p():h()}let N={},j=(e,t)=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch{N[e]=t}},_=e=>{try{return JSON.parse(window.localStorage.getItem(e))}catch{return N[e]}};function u(){let e=_(m)||[];document.querySelectorAll(".f3cc-embed").forEach(c=>{let o=c.querySelector(".f3cc-embed__template"),r=c.dataset.provider;if(o&&r&&(x()||e.some(a=>a===r))){let a=o.content.cloneNode(!0);c.replaceWith(a),g(a)}})}function M(){document.body.addEventListener("click",e=>{let t=e.target.closest(".f3cc-embed__button"),c=t&&t.closest(".f3cc-embed");if(t&&c){e.preventDefault();let o=_(m)||[];o.push(c.dataset.provider),j(m,o),u()}})}function $(){new MutationObserver(u).observe(document.body,{subtree:!0,childList:!0})}R(),u(),M(),$();function g(e){if(I(e)===!0)e.parentNode.replaceChild(A(e),e);else{let t=-1,c=e.childNodes;for(;++t<c.length;)g(c[t])}return e}function A(e){let t=document.createElement("script");t.text=e.innerHTML;let c=-1,o=e.attributes,r;for(;++c<o.length;)t.setAttribute((r=o[c]).name,r.value);return t}function I(e){return e.tagName==="SCRIPT"}})();})();
