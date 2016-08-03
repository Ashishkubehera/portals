function addEvent(e,t,n){e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(attachedEvents.push([e,t,n]),e.attachEvent("on"+t,n)))}function removeEvent(e,t,n){e&&(e.removeEventListener?e.removeEventListener(t,n):e.detachEvent&&e.detachEvent("on"+t,n))}function doWhenReady(e){var t=function(){removeEvent(document,"DOMContentLoaded",t),removeEvent(window,"load",t),e()};"complete"===document.readyState?e():(addEvent(document,"DOMContentLoaded",t),addEvent(window,"load",t))}function getIso639(e){var t=e&&e.match(/^\w+/);if(t&&(t="nb"===t[0]?"no":t[0],!(t.length>3)))return t}function getDevicePixelRatio(){return void 0!==window.devicePixelRatio?window.devicePixelRatio:void 0!==window.msMatchMedia?window.msMatchMedia("(min-resolution: 192dpi)").matches?2:window.msMatchMedia("(min-resolution: 144dpi)").matches?1.5:1:1}function localizeTopTen(){function e(e){var t;try{t=JSON.parse(e)}catch(n){t=""}return t}function t(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].getAttribute("lang");t.push(r)}return t}function n(){for(u=0;u<d.length;u++){var e=d[u],t=p.indexOf(e),n=t>=0,r=t===u;n?r||p.splice(u,0,p.splice(t,1)[0]):(p.splice(u,0,e),p.pop())}}function r(e,t){var n=e.getElementsByTagName("a")[0],r=t.name.replace(/<\/?[^>]+(>|$)/g,"");n.setAttribute("href","//"+t.url),n.setAttribute("id","js-link-box-"+t.lang),n.setAttribute("data-slogan",t.slogan||"The Free Encyclopedia"),n.setAttribute("title",r+" — "+t.siteName+" — "+(t.slogan||"")),e.setAttribute("lang",t.lang),e.getElementsByTagName("strong")[0].textContent=r,e.getElementsByTagName("small")[0].textContent=t.numPages+"+ "+(t.entries||"")}function o(e){for(var t=document.querySelectorAll(".central-featured-lang"),n=!0,r=0;r<t.length&&n===!0;r++){var o=t[r].getAttribute("lang");n=e.indexOf(o)>=0}for(r=0;r<t.length&&n===!0;r++){var a=t[r],i=a.className,s="central-featured-lang lang"+(r+1);i!==s&&(a.className=s)}}function a(){var e,t=d[0],n=document.getElementById("js-link-box-"+t);n&&(e=n.getAttribute("data-slogan")||"The free encyclopedia",m.textContent=e,m.className="localized-slogan")}function i(t,n){var i=new XMLHttpRequest;i.open("GET",encodeURI("portal/wikipedia.org/assets/l10n/"+n+"-"+translationsHash+".json"),!0),i.onload=function(){if(200===i.status){var s=e(this.responseText);s&&(r(t,s),a(),o(p),v=e(mw.storage.get("storedTranslations"))||{},v[n]=s,mw.storage.set("storedTranslations",JSON.stringify(v)))}},i.send()}function s(e,t){var n=v;n[t]?r(e,n[t]):i(e,t)}function c(e,t){for(var n=null,r=t.length-1;r>=0&&null===n;r--){var o=e[r].getAttribute("lang");t.indexOf(o)<0&&(n=e[r])}return n}function l(){for(u=0;u<p.length;u++){var e=document.querySelectorAll(".central-featured-lang"),t=p[u],n=document.querySelector(".central-featured-lang[lang="+t+"]");if(n){var r=Array.prototype.indexOf.call(e,n);r!==u&&h.insertBefore(n,e[u])}else{var o=c(e,p);s(o,t),h.insertBefore(o,e[u])}}}var u,d=wmTest.userLangs,g=document.querySelectorAll(".central-featured-lang"),h=document.querySelector(".central-featured"),m=document.getElementById("js-localized-slogan"),p=t(g),f=mw.storage.get("translationHash"),v=e(mw.storage.get("storedTranslations"))||{};f!==translationsHash&&(mw.storage.set("translationHash",translationsHash),mw.storage.remove("storedTranslations")),n(),l(),o(p),a(),m.style.visibility="visible",h.style.visibility="visible"}window.JSON||(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(){var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)},n={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},r=function(e){return n[e]||"\\u"+(e.charCodeAt(0)+65536).toString(16).substr(1)},o=/[\\"\u0000-\u001F\u2028\u2029]/g;return function a(n){if(null==n)return"null";if("number"==typeof n)return isFinite(n)?n.toString():"null";if("boolean"==typeof n)return n.toString();if("object"==typeof n){if("function"==typeof n.toJSON)return a(n.toJSON());if(t(n)){for(var i="[",s=0;s<n.length;s++)i+=(s?", ":"")+a(n[s]);return i+"]"}if("[object Object]"===e.call(n)){var c=[];for(var l in n)n.hasOwnProperty(l)&&c.push(a(l)+": "+a(n[l]));return"{"+c.join(", ")+"}"}}return'"'+n.toString().replace(o,r)+'"'}}()}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return-1;var a=+t||0;if(Math.abs(a)===1/0&&(a=0),a>=o)return-1;for(n=Math.max(a>=0?a:o-Math.abs(a),0);n<o;){if(n in r&&r[n]===e)return n;n++}return-1}),function(){window.document.querySelectorAll||(document.querySelectorAll=document.body.querySelectorAll=Object.querySelectorAll=function(e,t,n,r,o){var a=document,i=a.createStyleSheet();for(o=a.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),n=e.length;n--;){for(i.addRule(e[n],"k:v"),r=o.length;r--;)o[r].currentStyle.k&&t.push(o[r]);i.removeRule(0)}return t})}(),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){return n.apply(this instanceof r?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),o.prototype=new r,o}),Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&!function(){var e=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function(){return e.get.call(this)},set:function(t){return e.set.call(this,t)}})}(),window.Element&&!Element.prototype.matches&&(Element.prototype.matches=function e(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),window.attachedEvents=[],window.onunload=function(){var e,t;for(e=0;e<attachedEvents.length;e++)t=attachedEvents[e],t[0]&&t[0].detachEvent("on"+t[1],t[2]);attachedEvents=[]};var _=_||{};_.now=Date.now||function(){return(new Date).getTime()},_.throttle=function(e,t,n){var r,o,a,i=null,s=0;n||(n={});var c=function(){s=n.leading===!1?0:_.now(),i=null,a=e.apply(r,o),i||(r=o=null)};return function(){var l=_.now();s||n.leading!==!1||(s=l);var u=t-(l-s);return r=this,o=arguments,u<=0||u>t?(i&&(clearTimeout(i),i=null),s=l,a=e.apply(r,o),i||(r=o=null)):i||n.trailing===!1||(i=setTimeout(c,u)),a}},_.debounce=function(e,t,n){var r,o,a,i,s,c=function(){var l=_.now()-i;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(s=e.apply(a,o),r||(a=o=null)))};return function(){a=this,o=arguments,i=_.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(s=e.apply(a,o),a=o=null),s}};var mw=mw||{};mw.html=function(){function e(e){switch(e){case"'":return"&#039;";case'"':return"&quot;";case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;"}}return{escape:function(t){return t.replace(/['"<>&]/g,e)},element:function(e,t,n){var r,o,a="<"+e;for(o in t){if(r=t[o],r===!0)r=o;else if(r===!1)continue;a+=" "+o+'="'+this.escape(String(r))+'"'}if(void 0===n||null===n)return a+="/>";switch(a+=">",typeof n){case"string":a+=this.escape(n);break;case"number":case"boolean":a+=String(n);break;default:if(n instanceof this.Raw)a+=n.value;else{if(!(n instanceof this.Cdata))throw new Error("mw.html.element: Invalid type of contents");if(/<\/[a-zA-z]/.test(n.value))throw new Error("mw.html.element: Illegal end tag found in CDATA");a+=n.value}}return a+="</"+e+">"},Raw:function(e){this.value=e},Cdata:function(e){this.value=e}}}(),mw.storage={localStorage:window.localStorage,get:function(e){try{return mw.storage.localStorage.getItem(e)}catch(t){}return!1},set:function(e,t){try{return mw.storage.localStorage.setItem(e,t),!0}catch(n){}return!1},remove:function(e){try{return mw.storage.localStorage.removeItem(e),!0}catch(t){}return!1}},function(e){e.RegExp={escape:function(e){return e.replace(/([\\{}()|.?*+\-\^$\[\]])/g,"\\$1")}}}(mw),function(e,t,n,r,o,a,i){"use strict";function s(e){var t,r,o=this,a=e.length,i=0,s=o.i=o.j=o.m=0;for(o.S=[],o.c=[],a||(e=[a++]);i<n;)o.S[i]=i++;for(i=0;i<n;i++)t=o.S[i],s=u(s+t+e[i%a]),r=o.S[s],o.S[i]=r,o.S[s]=t;o.g=function(e){var t=o.S,r=u(o.i+1),a=t[r],i=u(o.j+a),s=t[i];t[r]=s,t[i]=a;for(var c=t[u(a+s)];--e;)r=u(r+1),a=t[r],i=u(i+a),s=t[i],t[r]=s,t[i]=a,c=c*n+t[u(a+s)];return o.i=r,o.j=i,c},o.g(n)}function c(e,t,n,r,o){if(n=[],o=typeof e,t&&"object"==o)for(r in e)if(r.indexOf("S")<5)try{n.push(c(e[r],t-1))}catch(a){}return n.length?n:e+("string"!=o?"\0":"")}function l(e,t,n,r){for(e+="",n=0,r=0;r<e.length;r++)t[u(r)]=u((n^=19*t[u(r)])+e.charCodeAt(r));e="";for(r in t)e+=String.fromCharCode(t[r]);return e}function u(e){return e&n-1}t.seedrandom=function(u,d){var g,h=[];return u=l(c(d?[u,e]:arguments.length?u:[(new Date).getTime(),e,window],3),h),g=new s(h),l(g.S,e),t.seededrandom=function(){for(var e=g.g(r),t=i,s=0;e<o;)e=(e+s)*n,t*=n,s=g.g(1);for(;e>=a;)e/=2,t/=2,s>>>=1;return(e+s)/t},u},i=t.pow(n,r),o=t.pow(2,o),a=2*o,l(t.random(),e)}([],Math,256,6,52),function(){"use strict";var e,t,n="/beacon/event",r=[];t={extend:function(e,t){var n,r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&(r[n]=e[n]);for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&(r[n]=t[n]);return r},noop:function(){}};for(var o=0;o<256;o++)r[o]=(o+256).toString(16).slice(1);e=window.eventLoggingLite={schema:{},maxUrlSize:2e3,byteToHex:r,checkUrlSize:function(t,n){var r;if(n.length>e.maxUrlSize)return r="Url exceeds maximum length"},generateRandomSessionId:function(){var t,n,r,o=new Array(8),a=window.crypto||window.msCrypto;if(a&&a.getRandomValues)t=new Uint8Array(8),a.getRandomValues(t);else for(t=new Array(8),n=0;n<8;n++)0===(3&n)&&(r=4294967296*Math.random()),t[n]=r>>>((3&n)<<3)&255;for(n=0;n<8;n++)o[n]=e.byteToHex[t[n]];return o.join("")},validate:function(e,t){var n,r,o,a=[];if(!t||!t.properties)return a.push("Missing or empty schema"),a;for(n in e)t.properties.hasOwnProperty(n)||a.push("Undeclared property: "+n);for(n in t.properties)o=t.properties[n],e.hasOwnProperty(n)?(r=e[n],o["enum"]&&o.required&&o["enum"].indexOf(r)===-1&&a.push('Value "'+JSON.stringify(r)+'" for property "'+n+'" is not one of '+JSON.stringify(o["enum"]))):o.required&&a.push("Missing property:",n);return a},prepare:function(n,r){for(var o=t.extend(n.defaults,r),a=e.validate(o,n);a.length;)console.log(a[a.length-1]),a.pop();return{event:o,revision:n.revision||-1,schema:n.name,webHost:location.hostname,wiki:"metawiki"}},makeBeaconUrl:function(e){var t=encodeURIComponent(JSON.stringify(e));return n+"?"+t+";"},sendBeacon:/1|yes/.test(navigator.doNotTrack)||!n?t.noop:navigator.sendBeacon?function(e){try{navigator.sendBeacon(e)}catch(t){}}:function(e){document.createElement("img").src=e},logEvent:function(t,n){var r=e.prepare(t,n),o=e.makeBeaconUrl(r),a=e.checkUrlSize(t,o);a||e.sendBeacon(o)}}}(),window.wmTest=function(e,t){function n(){function e(e){var n=getIso639(e);n&&t.indexOf(n)<0&&t.push(n)}var t=[];for(var n in navigator.languages)e(navigator.languages[n]);if(/Android/i.test(navigator.userAgent)){var r=navigator.userAgent.split(";");r[3]&&e(r[3].trim())}return e(navigator.language),e(navigator.userLanguage),e(navigator.browserLanguage),e(navigator.systemLanguage),t}function r(e){return 1===Math.floor(Math.seededrandom()*e+1)}function o(){var e="rejected";return r(u.popSize)&&(e="baseline",u.testGroups&&u.testGroups.test&&r(10)&&(e=r(2)?u.testGroups.test:u.testGroups.control)),e}function a(){var n=!1;if(window.localStorage&&!/1|yes/.test(navigator.doNotTrack)){var r=t.storage.get(d.SESSION_ID),o=t.storage.get(d.EXPIRES),a=(new Date).getTime();r&&o>parseInt(a,10)?n=r:(n=e.generateRandomSessionId(),t.storage.set(d.SESSION_ID,n)),t.storage.set(d.EXPIRES,a+u.sessionLength)}return n}var i,s,c,l,u={popSize:/www.wikipedia.org/.test(location.hostname)?200:2,testGroups:!1,sessionLength:9e5},d={GROUP:"portal_test_group",SESSION_ID:"portal_session_id",EXPIRES:"portal_test_group_expires"};return i=n(),l=location.hash.slice(1)===u.testGroups.test,s=a(),s?(Math.seedrandom(s),c=l?u.testGroups.test:o()):(c="rejected",l=!0),u.testGroups&&c===u.testGroups.test&&(document.body.className+=" "+c),{loggingDisabled:l,sessionId:s,userLangs:i,group:c,testGroups:u.testGroups,populationSize:u.popSize,getTestGroup:o}}(eventLoggingLite,mw),function(e,t){"use strict";function n(e,t){var n,r,o={};for(n=0;n<t.length;n++){var a=t[n].nodes;for(r=0;r<a.length;r++)a[r].contains(e)&&(o=t[n])}return o.name}function r(e){return"A"!==e.tagName&&e.parentElement?r(e.parentElement):e}function o(){u={event_type:"landing"},e.logEvent(s,u),u=null}function a(t){var o,a=t||window.event,i=a.target||a.srcElement;i.matches("a, a *")&&(o=r(i),u={event_type:"clickthrough",destination:o.href,section_used:n(o,c)},u.section_used&&e.logEvent(s,u))}function i(t){var r=t||window.event,o=r.target||r.srcElement;null===u&&(u={event_type:"clickthrough",section_used:n(o,c),destination:o.action}),u.section_used&&e.logEvent(s,u)}var s,c,l,u,d=document.cookie.match(/GeoIP=.[^:]/);if("rejected"!==t.group&&!t.loggingDisabled){s={name:"WikipediaPortal",revision:14377354,defaults:{session_id:t.sessionId,event_type:"landing",referer:document.referrer||null,accept_language:t.userLangs.toString(),cohort:t.group},properties:{session_id:{type:"string",required:!0},event_type:{type:"string",required:!0,"enum":["landing","clickthrough"]},section_used:{type:"string",required:!1,"enum":["primary links","search","language search","secondary links","other languages","other projects"]},destination:{type:"string",required:!1},referer:{type:"string",required:!1},country:{type:"string",required:!1},accept_language:{type:"string",required:!0},cohort:{type:"string",required:!1}}},c=[{name:"primary links",nodes:document.querySelectorAll('[data-el-section="primary links"]')},{name:"search",nodes:document.querySelectorAll('[data-el-section="search"]')},{name:"language search",nodes:document.querySelectorAll('[data-el-section="language search"]')},{name:"secondary links",nodes:document.querySelectorAll('[data-el-section="secondary links"]')},{name:"other languages",nodes:document.querySelectorAll('[data-el-section="other languages"]')},{name:"other projects",nodes:document.querySelectorAll('[data-el-section="other projects"]')}],addEvent(document,"click",a),l=document.getElementsByTagName("form");for(var g=0;g<l.length;g++)addEvent(l[g],"submit",i);if(d){var h=d.toString().split("=")[1];"US"===h?s.defaults.country=document.cookie.match(/GeoIP=.[^:].{2}[^:]/).toString().split("=")[1]:s.defaults.country=h,addEvent(window,"load",o)}addEvent(window,"load",o)}}(eventLoggingLite,wmTest);var WMTypeAhead=function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}function r(){setTimeout(function(){m.innerHTML="";var e=document.getElementById("api_opensearch");e&&(e.src=!1),y.clear()},300)}function o(e,t){if(l=encodeURIComponent(t)||"en",u=encodeURIComponent(e),0===u.length)return void r();var o=document.getElementById("api_opensearch"),a=document.getElementsByTagName("head")[0],i="//"+l+".wikipedia.org/w/api.php?";o&&a.removeChild(o),o=document.createElement("script"),o.id="api_opensearch";var s=window.callbackStack.addCallback(window.portalOpensearchCallback),c={action:"query",format:"json",generator:"prefixsearch",prop:"pageprops|pageimages|pageterms",redirects:"",ppprop:"displaytitle",piprop:"thumbnail",pithumbsize:v,pilimit:w,wbptterms:"description",gpssearch:e,gpsnamespace:0,gpslimit:w,callback:"callbackStack.queue["+s+"]"};o.src=i+n(c),a.appendChild(o)}function a(e,t){var n=mw.html.escape(mw.RegExp.escape(t)),r=new RegExp(n,"i"),o=e.search(r),a=mw.html.escape(e);if(o>=0){var i=o+n.length,s=e.substring(o,i),c=e.substring(0,o),l=e.substring(i,e.length);a=c+mw.html.element("em",{"class":"suggestion-highlight"},s)+l}return a}function i(e){for(var t='<div class="suggestions-dropdown">',n=0;n<e.length;n++)if(e[n]){var r,o,i,s,c,d=e[n],g=!1,h="",m=d.terms&&d.terms.description?d.terms.description:"";d.thumbnail&&d.thumbnail.source&&(g=d.thumbnail.source.replace(/\"/g,"%22"),g=g.replace(/'/g,"%27")),m&&(h="object"==typeof m&&m[0]?m[0].toString():m.toString()),c=mw.html.element("p",{"class":"suggestion-description"},h),s=mw.html.element("h3",{"class":"suggestion-title"},new mw.html.Raw(a(d.title,u))),i=mw.html.element("div",{"class":"suggestion-text"},new mw.html.Raw(s+c)),o=mw.html.element("div",{"class":"suggestion-thumbnail",style:!!g&&"background-image:url("+g+")"},""),r=mw.html.element("a",{"class":"suggestion-link",href:"https://"+l+".wikipedia.org/wiki/"+encodeURIComponent(d.title.replace(/ /gi,"_"))},new mw.html.Raw(i+o)),t+=r}return t+="</div>"}function s(e,t){for(var n=" active",r=0;r<t.length;r++){var o=t[r];o!==e?o.className=o.className.replace(n,""):/ active/.test(e.className)?e.className=e.className.replace(n,""):(e.className+=n,y.setIndex(r))}}function c(e){var t=e||window.event,n=t.which||t.keyCode;if(m.firstChild){if(40===n||38===n){var r,o=m.firstChild.childNodes;r=40===n?y.increment(1):y.increment(-1),g=!!o&&o[r],s(g,o)}13===n&&g&&(t.preventDefault?t.preventDefault():t.returnValue=!1,g.children[0].click())}}var l,u,d,g,h="typeahead-suggestions",m=document.getElementById(h),p=document.getElementById(e),f=document.getElementById(t),v=80*getDevicePixelRatio(),w=6;m||(m=document.createElement("div"),m.id=h,p.appendChild(m)),window.callbackStack={queue:{},index:-1,incrementIndex:function(){return this.index+=1,this.index},addCallback:function(e){var t=this.incrementIndex();return this.queue[t]=e(t),t},deleteSelfFromQueue:function(e){delete this.queue[e]},deletePrevCallbacks:function(e){this.deleteSelfFromQueue(e);for(var t in this.queue)t<e&&(this.queue[t]=this.deleteSelfFromQueue.bind(window.callbackStack,t))}};var y={index:-1,max:w,setMax:function(e){this.max=e},increment:function(e){return this.index+=e,this.index<0&&this.setIndex(this.max-1),this.index===this.max&&this.setIndex(0),this.index},setIndex:function(e){return e<=this.max-1&&(this.index=e),this.index},clear:function(){this.setIndex(-1)}};return window.portalOpensearchCallback=function(e){var t=e;return function(e){if(window.callbackStack.deletePrevCallbacks(t),document.activeElement===f){var n=[],r=e.query&&e.query.pages?e.query.pages:[];for(var o in r){var a=r[o];n[a.index-1]=a}var c=i(n);y.setMax(n.length),y.clear(),m.innerHTML=c,d=m.childNodes[0].childNodes;for(var l=0;l<d.length;l++){var u=d[l];addEvent(u,"mouseenter",s.bind(this,u,d)),addEvent(u,"mouseleave",s.bind(this,u,d))}}}},addEvent(f,"keydown",c),addEvent(f,"blur",r),{typeAheadEl:m,query:o}};!function(e,t){var n,r=document.getElementById("searchInput"),o=new t("search-input","searchInput");n="oninput"in document?"input":"propertychange",addEvent(r,n,_.debounce(function(){o.query(r.value,document.getElementById("searchLanguage").value)},100))}(wmTest,WMTypeAhead),localizeTopTen(),function(){"use strict";function e(e){return document.getElementById(e)}function t(e){var t,n;document.querySelector&&"www-wiktionary-org"===document.body.id&&!e.match(/\W/)&&(t=document.querySelector('option[lang|="'+e+'"]'),n=t&&t.getAttribute("data-logo"),n&&document.body.setAttribute("data-logo",n))}function n(){var e=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"";return e.toLowerCase().split("-")[0]}function r(){var e=document.cookie.match(/(?:^|\W)searchLang=([^;]+)/);return(e?e[1]:n()).toLowerCase()}function o(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}function a(t){var n,r,a="data-convert-hans",i="data-converttitle-hans";if("zh-hans,zh-cn,zh-sg,zh-my,".indexOf(t+",")!==-1){var s=["zh_art","zh_others","zh_search","zh_tag","zh_top10","zh-yue_wiki","gan_wiki","hak_wiki","wuu_wiki"];for(n=0;n<s.length;n+=1)r=e(s[n]),r&&(r.hasAttribute(a)&&o(r,r.getAttribute(a)),r.hasAttribute(i)&&(r.title=r.getAttribute(i)))}}function i(t){var n;0===t.indexOf("zh")&&(n=t.substring(3),"mo"===n?n="hk":"my"===n&&(n="sg"),n&&"cn,tw,hk,sg,".indexOf(n+",")>=0&&(e("zh_wiki").href+="zh-"+n+"/",e("zh_others").href=e("zh_others").href.replace("wiki/","zh-"+n+"/")),a(t))}function s(e){if(e){var r=n(),o=r.match(/^\w+/),a=new Date;t(e),o&&o[0]===e?a.setTime(a.getTime()-1):a.setFullYear(a.getFullYear()+1),document.cookie="searchLang="+e+";expires="+a.toUTCString()+";domain="+location.host+";"}}function c(e,t){var n,r,o,a,i={ratio:1};for(n=t.split(/ *, */),o=0;o<n.length;o++)r=n[o].match(/\s*(\S+)(?:\s*([\d.]+)w)?(?:\s*([\d.]+)h)?(?:\s*([\d.]+)x)?\s*/),a=r[4]&&parseFloat(r[4]),a<=e&&a>i.ratio&&(i.ratio=a,i.src=r[1],i.width=r[2]&&parseFloat(r[2]),i.height=r[3]&&parseFloat(r[3]));return i}function l(){var e,t,n=getDevicePixelRatio(),r=new Image;if(n>1&&void 0===r.srcset)for(e=document.getElementsByTagName("img"),t=0;t<e.length;t++){var o,a=e[t],i=a.getAttribute("srcset");"string"==typeof i&&""!==i&&(o=c(n,i),void 0!==o.src&&(a.setAttribute("src",o.src),void 0!==o.width&&a.setAttribute("width",o.width),void 0!==o.height&&a.setAttribute("height",o.height)))}}doWhenReady(function(){var n,a,s,c,l,u,d,g,h,m=r();if(m&&(i(m),n=getIso639(m),a=e("searchLanguage"))){for(s=a.getElementsByTagName("option"),c=0,l=s.length;!u&&c<l;c+=1)s[c].value===n&&(u=n);!u&&document.querySelector&&(d=document.querySelector('.langlist a[lang|="'+n+'"]'),d&&(u=n,g=document.createElement("option"),g.setAttribute("lang",n),g.setAttribute("value",n),h=d.textContent||d.innerText||n,o(g,h),a.appendChild(g))),u&&(a.value=u,t(u))}}),doWhenReady(function(){var t,n,r,o=e("searchInput"),a=e("searchLanguage");if(o)for(o.setAttribute("results","10"),void 0===o.autofocus?o.focus():window.scroll(0,0),t=location.search&&location.search.substr(1).split("&"),n=0;n<t.length;n+=1)if(r=t[n].split("="),"search"===r[0]&&r[1]){o.value=decodeURIComponent(r[1].replace(/\+/g," "));break}addEvent(a,"change",function(){a.blur(),s(a.value)})}),doWhenReady(function(){var e=document.searchwiki&&document.searchwiki.elements.uselang;e&&(e.value=n())}),doWhenReady(l)}(),window.mw||(window.mw=window.mediaWiki={loader:{state:function(){}}});