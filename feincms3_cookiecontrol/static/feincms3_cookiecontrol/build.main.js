(function(){let h="f3cc",y=document.getElementById("f3cc"),c=JSON.parse(document.getElementById("f3cc-data").textContent),a=null,r=null,p=null,s=[],C={};function i(e,t=null,n=null,o=null,d=null){let l=document.createElement(e);if(e=="a"&&l.setAttribute("href",""),n&&(typeof n.heading!="undefined"&&i("div","f3cc-title",n.heading,l),typeof n.content!="undefined"&&i("div","f3cc-description",n.content,l),typeof n.heading=="undefined"&&typeof n.content=="undefined"&&(l.innerHTML=n)),t&&(l.className=t),d&&l.addEventListener("click",d),o)o.appendChild(l);else return l}function w(){if(a!=null){a.style.display="";return}if(c.banner){a=i("div","f3cc f3cc-banner");let e=i("div","outer");i("div","f3cc-description",c.banner,e);let t=i("div","f3cc-buttons");i("a","btn btn-panel",c.banner.buttonPanel,t,v),i("a","btn btn-accept",c.banner.buttonAccept,t,j),e.appendChild(t),a.appendChild(e),y.appendChild(a)}}function m(){if(p!=null){p.style.display="";return}if(c.modify){p=i("div","f3cc-modify");let e=i("div","outer");i("div","inner","",e);let t=i("div","f3cc-buttons");i("a","btn btn-modify",c.modify.buttonPanel,t,v),e.appendChild(t),p.appendChild(e),y.appendChild(p)}}function N(){if(b(!0),r!=null){r.style.display="";return}if(c.panel){r=i("div","f3cc f3cc-panel");let e=i("div","outer");i("div","inner",c.panel,e);let t=document.createElement("form");for(let o in c.categories){let d=i("div");d.className="f3cc-category";let l=i("label"),f=document.createElement("input");f.name=o,f.id=`f3cc-category-${o}`,f.type="checkbox",l.htmlFor=f.id,(c.categories[o].preselected==1||E().indexOf(o)>=0)&&(f.checked=!0),c.categories[o].disabled==1&&(f.disabled=!0),s.push(f),i("div","f3cc-title",c.categories[o].title,l),i("div","f3cc-description",c.categories[o].description,l),d.append(f,l),t.append(d)}e.appendChild(t);let n=i("div","f3cc-buttons");i("a","btn btn-cancel",c.panel.buttonCancel,n,P),i("a","btn btn-save",c.panel.buttonSave,n,L),e.appendChild(n),r.appendChild(e),y.appendChild(r)}}function W(){let e=[];for(let t in s)s[t].checked&&e.push(s[t].name);k(e)}function A(){let e=[];for(let t in c.categories)e.push(t);k(e)}function k(e){let t=`${h}=${e.join(",")};max-age=31536000;path=/;sameSite=Strict`;document.cookie=t}function S(){let e=document.cookie.split(";"),t=!1;return typeof e!="undefined"&&e.forEach(n=>{n.split("=")[0].trim()==h&&(t=n.split("=")[1])}),t}function E(){let e=S();return e?e.split(","):[]}function u(e){e!=null&&(e.style.display="none")}function b(e){if(e)document.body.style.top=`-${window.scrollY}px`,document.body.style.position="fixed";else{const t=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,parseInt(t||"0",10)*-1)}}function L(e){e.preventDefault(),W(),u(a),u(r),b(!1),m(),g()}function j(e){e.preventDefault(),A(),u(a),u(r),b(!1),m(),g()}function P(e){e.preventDefault(),u(r),b(!1),I()}function v(e){e.preventDefault(),u(a),u(p),N()}function x(e){if(D(e)===!0)e.parentNode.replaceChild(T(e),e);else{let t=-1,n=e.childNodes;for(;++t<n.length;)x(n[t])}return e}function T(e){let t=document.createElement("script");t.text=e.innerHTML;let n=-1,o=e.attributes,d;for(;++n<o.length;)t.setAttribute((d=o[n]).name,d.value);return t}function D(e){return e.tagName==="SCRIPT"}function M(e,t){if(typeof t!="undefined"){let n=C[e];n||(C[e]=n=document.createElement("div"),n.dataset.f3cc=e,document.body.appendChild(n)),n.innerHTML=t,x(n)}}function g(){let e=E();for(let t in c.categories){const n=e.includes(t)?"inject_if":"inject_else";for(let o of c.categories[t].cookies)M(o.name,o[n])}}function I(){g(),document.body.addEventListener("click",e=>{e.target.closest("[data-open-f3cc-panel]")&&v(e)}),S()?m():w()}I()})();
