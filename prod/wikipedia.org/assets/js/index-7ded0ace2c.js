function addEvent(e,t,n){e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(attachedEvents.push([e,t,n]),e.attachEvent("on"+t,n)))}function removeEvent(e,t,n){e&&(e.removeEventListener?e.removeEventListener(t,n):e.detachEvent&&e.detachEvent("on"+t,n))}function doWhenReady(e){var t=function(){removeEvent(document,"DOMContentLoaded",t),removeEvent(window,"load",t),e()};"complete"===document.readyState?e():(addEvent(document,"DOMContentLoaded",t),addEvent(window,"load",t))}window.JSON||(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(){var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)},n={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},r=function(e){return n[e]||"\\u"+(e.charCodeAt(0)+65536).toString(16).substr(1)},a=/[\\"\u0000-\u001F\u2028\u2029]/g;return function o(n){if(null==n)return"null";if("number"==typeof n)return isFinite(n)?n.toString():"null";if("boolean"==typeof n)return n.toString();if("object"==typeof n){if("function"==typeof n.toJSON)return o(n.toJSON());if(t(n)){for(var i="[",c=0;c<n.length;c++)i+=(c?", ":"")+o(n[c]);return i+"]"}if("[object Object]"===e.call(n)){var l=[];for(var s in n)n.hasOwnProperty(s)&&l.push(o(s)+": "+o(n[s]));return"{"+l.join(", ")+"}"}}return'"'+n.toString().replace(a,r)+'"'}}()}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),a=r.length>>>0;if(0===a)return-1;var o=+t||0;if(Math.abs(o)===1/0&&(o=0),o>=a)return-1;for(n=Math.max(o>=0?o:a-Math.abs(o),0);a>n;){if(n in r&&r[n]===e)return n;n++}return-1}),function(){window.document.querySelectorAll||(document.querySelectorAll=document.body.querySelectorAll=Object.querySelectorAll=function(e,t,n,r,a){var o=document,i=o.createStyleSheet();for(a=o.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),n=e.length;n--;){for(i.addRule(e[n],"k:v"),r=a.length;r--;)a[r].currentStyle.k&&t.push(a[r]);i.removeRule(0)}return t})}(),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},a=function(){return n.apply(this instanceof r?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),a.prototype=new r,a}),window.Element&&!Element.prototype.matches&&(Element.prototype.matches=function e(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1});var attachedEvents=[];window.onunload=function(){var e,t;for(e=0;e<attachedEvents.length;e++)t=attachedEvents[e],t[0]&&t[0].detachEvent("on"+t[1],t[2]);attachedEvents=[]},function(){"use strict";var e,t,n="http://bits.beta.wmflabs.org/event.gif",r=[];/www.wikipedia.org/.test(location.hostname)&&(n="//www.wikipedia.org/beacon/event"),t={extend:function(e,t){var n,r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&(r[n]=e[n]);for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&(r[n]=t[n]);return r},noop:function(){}};for(var a=0;256>a;a++)r[a]=(a+256).toString(16).slice(1);e=window.eventLoggingLite={schema:{},maxUrlSize:2e3,byteToHex:r,checkUrlSize:function(t,n){var r;return n.length>e.maxUrlSize?r="Url exceeds maximum length":void 0},generateRandomSessionId:function(){var t,n,r,a=new Array(8),o=window.crypto||window.msCrypto;if(o&&o.getRandomValues)t=new Uint8Array(8),o.getRandomValues(t);else for(t=new Array(8),n=0;8>n;n++)0===(3&n)&&(r=4294967296*Math.random()),t[n]=r>>>((3&n)<<3)&255;for(n=0;8>n;n++)a[n]=e.byteToHex[t[n]];return a.join("")},validate:function(e,t){var n,r,a,o=[];if(!t||!t.properties)return o.push("Missing or empty schema"),o;for(n in e)t.properties.hasOwnProperty(n)||o.push("Undeclared property: "+n);for(n in t.properties)a=t.properties[n],e.hasOwnProperty(n)?(r=e[n],a["enum"]&&a.required&&-1===a["enum"].indexOf(r)&&o.push('Value "'+JSON.stringify(r)+'" for property "'+n+'" is not one of '+JSON.stringify(a["enum"]))):a.required&&o.push("Missing property:",n);return o},prepare:function(n,r){for(var a=t.extend(n.defaults,r),o=e.validate(a,n);o.length;)console.log(o[o.length-1]),o.pop();return{event:a,revision:n.revision||-1,schema:n.name,webHost:location.hostname,wiki:"metawiki"}},makeBeaconUrl:function(e){var t=encodeURIComponent(JSON.stringify(e));return n+"?"+t+";"},sendBeacon:/1|yes/.test(navigator.doNotTrack)||!n?t.noop:navigator.sendBeacon?function(e){try{navigator.sendBeacon(e)}catch(t){}}:function(e){document.createElement("img").src=e},logEvent:function(t,n){var r=e.prepare(t,n),a=e.makeBeaconUrl(r),o=e.checkUrlSize(t,a);o||e.sendBeacon(a)}}}(),window.wmTest=function(e){"use strict";function t(e,t){var n=parseInt(e.slice(0,13),16);return n%t===0}function n(e){return t(e,o)?"baseline":"rejected"}var r,a=e.generateRandomSessionId(),o=2,i=9e5,c={GROUP:"portal_test_group",SESSION_ID:"portal_session_id",EXPIRES:"portal_test_group_expires"},l=!1;if(/www.wikipedia.org/.test(location.hostname)&&(o=200),l)r=location.hash.slice(1);else if(window.localStorage){var s=localStorage.getItem(c.GROUP),u=localStorage.getItem(c.SESSION_ID),d=localStorage.getItem(c.EXPIRES),g=(new Date).getTime();d&&u&&s&&g<parseInt(d,10)?(a=u,r="null"===s?null:s):(r=n(a),localStorage.setItem(c.SESSION_ID,a),localStorage.setItem(c.GROUP,r)),localStorage.setItem(c.EXPIRES,g+i)}else r="rejected";return{loggingDisabled:l,sessionId:a,group:r}}(eventLoggingLite);var mw=mw||{};mw.html=function(){function e(e){switch(e){case"'":return"&#039;";case'"':return"&quot;";case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;"}}return{escape:function(t){return t.replace(/['"<>&]/g,e)},element:function(e,t,n){var r,a,o="<"+e;for(a in t){if(r=t[a],r===!0)r=a;else if(r===!1)continue;o+=" "+a+'="'+this.escape(String(r))+'"'}if(void 0===n||null===n)return o+="/>";switch(o+=">",typeof n){case"string":o+=this.escape(n);break;case"number":case"boolean":o+=String(n);break;default:if(n instanceof this.Raw)o+=n.value;else{if(!(n instanceof this.Cdata))throw new Error("mw.html.element: Invalid type of contents");if(/<\/[a-zA-z]/.test(n.value))throw new Error("mw.html.element: Illegal end tag found in CDATA");o+=n.value}}return o+="</"+e+">"},Raw:function(e){this.value=e},Cdata:function(e){this.value=e}}}();var WMTypeAhead=function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}function r(e,t){if(u=encodeURIComponent(t)||"en",d=encodeURIComponent(e),0===d.length)return void o();var r=document.getElementById("api_opensearch"),a=document.getElementsByTagName("head")[0],i="//"+u+".wikipedia.org/w/api.php?";r&&a.removeChild(r),r=document.createElement("script"),r.id="api_opensearch";var c={action:"query",format:"json",generator:"prefixsearch",prop:"pageprops|pageimages|pageterms",redirects:"",list:"prefixsearch",ppprop:"displaytitle",piprop:"thumbnail",pithumbsize:80,pilimit:6,wbptterms:"description",gpssearch:e,gpsnamespace:0,gpslimit:6,pssearch:e,pslimit:6,callback:"portalOpensearchCallback"};r.src=i+n(c),a.appendChild(r)}function a(e){for(var t='<ul class="suggestions-dropdown">',n=0;n<e.length;n++){var r,a,o,c,l,s,g=e[n],m=!1;g.thumbnail&&g.thumbnail.source&&(m=g.thumbnail.source.replace(/\"/g,"%22"),m=m.replace(/'/g,"%27")),s=mw.html.element("p",{"class":"suggestion-description"},g.terms&&g.terms.description?g.terms.description.toString():""),l=mw.html.element("h3",{"class":"suggestion-title"},new mw.html.Raw(i(g.title,d))),c=mw.html.element("div",{"class":"suggestion-text"},new mw.html.Raw(l+s)),o=mw.html.element("div",{"class":"suggestion-thumbnail",style:m?"background-image:url("+m+")":!1},""),a=mw.html.element("a",{"class":"suggestion-link",href:"https://"+u+".wikipedia.org/wiki/"+encodeURIComponent(g.title.replace(/ /gi,"_"))},new mw.html.Raw(c+o)),r=mw.html.element("li",{"class":"suggestion-item"},new mw.html.Raw(a)),t+=r}return t+="</ul>"}function o(){setTimeout(function(){h.innerHTML="";var e=document.getElementById("api_opensearch");e&&(e.src=!1)},300)}function i(e,t){var n=mw.html.escape(t),r=new RegExp(n,"i"),a=e.search(r),o=mw.html.escape(e);if(a>=0){var i=a+n.length,c=e.substring(a,i),l=e.substring(0,a),s=e.substring(i,e.length);o=l+mw.html.element("em",{"class":"suggestion-highlight"},c)+s}return o}function c(e,t){for(var n=" active",r=0;r<t.length;r++){var a=t[r];a!==e?a.className=a.className.replace(n,""):/ active/.test(e.className)?e.className=e.className.replace(n,""):e.className+=n}}function l(e,t){w+=e,0>w&&(w=t-1),w>t-1&&(w=0)}function s(e){var t=e||window.event,n=t.which||t.keyCode;if(h.firstChild){if(40===n||38===n){var r=h.firstChild.childNodes,a=r.length;40===n?l(1,a):l(-1,a),m=h.firstChild?h.firstChild.childNodes[w]:!1,c(m,r)}13===n&&m&&(t.preventDefault?t.preventDefault():t.returnValue=!1,m.children[0].click())}}var u,d,g,m,p="typeahead-suggestions",h=document.getElementById(p),f=document.getElementById(e),v=document.getElementById(t),w=-1;return h||(h=document.createElement("div"),h.id=p,f.appendChild(h)),window.portalOpensearchCallback=function(e){if(document.activeElement===v){var t=[],n=e.query&&e.query.pages?e.query.pages:[];for(var r in n){var o=n[r];t[o.index-1]=o}var i=a(t);h.innerHTML=i,g=h.childNodes[0].childNodes;for(var l=0;l<g.length;l++){var s=g[l];addEvent(s,"mouseenter",c.bind(this,s,g)),addEvent(s,"mouseleave",c.bind(this,s,g))}}},addEvent(v,"keydown",s),addEvent(v,"blur",o),{typeAheadEl:h,query:r}},_=_||{};_.now=Date.now||function(){return(new Date).getTime()},_.throttle=function(e,t,n){var r,a,o,i=null,c=0;n||(n={});var l=function(){c=n.leading===!1?0:_.now(),i=null,o=e.apply(r,a),i||(r=a=null)};return function(){var s=_.now();c||n.leading!==!1||(c=s);var u=t-(s-c);return r=this,a=arguments,0>=u||u>t?(i&&(clearTimeout(i),i=null),c=s,o=e.apply(r,a),i||(r=a=null)):i||n.trailing===!1||(i=setTimeout(l,u)),o}},_.debounce=function(e,t,n){var r,a,o,i,c,l=function(){var s=_.now()-i;t>s&&s>=0?r=setTimeout(l,t-s):(r=null,n||(c=e.apply(o,a),r||(o=a=null)))};return function(){o=this,a=arguments,i=_.now();var s=n&&!r;return r||(r=setTimeout(l,t)),s&&(c=e.apply(o,a),o=a=null),c}},function(e,t){"use strict";function n(e,t){var n,r,a={};for(n=0;n<t.length;n++){var o=t[n].nodes;for(r=0;r<o.length;r++)o[r].contains(e)&&(a=t[n])}return a.name}function r(e){return"A"!==e.tagName&&e.parentElement?r(e.parentElement):e}function a(){u={event_type:"landing"},e.logEvent(c,u),u=null}function o(t){var a,o=t||window.event,i=o.target||o.srcElement;i.matches("a, a *")&&(a=r(i),u={event_type:"clickthrough",destination:a.href,section_used:n(a,l)},u.section_used&&e.logEvent(c,u))}function i(t){var r=t||window.event,a=r.target||r.srcElement;null===u&&(u={event_type:"clickthrough",section_used:n(a,l),destination:a.action}),u.section_used&&e.logEvent(c,u)}var c,l,s,u,d=document.cookie.match(/GeoIP=.[^:]/);if("rejected"!==t.group&&!t.loggingDisabled){c={name:"WikipediaPortal",revision:14377354,defaults:{session_id:t.sessionId,event_type:"landing",referer:document.referrer||null,accept_language:navigator&&navigator.language?navigator.language:navigator.browserLanguage,cohort:t.group},properties:{session_id:{type:"string",required:!0},event_type:{type:"string",required:!0,"enum":["landing","clickthrough"]},section_used:{type:"string",required:!1,"enum":["primary links","search","language search","secondary links","other languages","other projects"]},destination:{type:"string",required:!1},referer:{type:"string",required:!1},country:{type:"string",required:!1},accept_language:{type:"string",required:!0},cohort:{type:"string",required:!1}}},l=[{name:"primary links",nodes:document.querySelectorAll('[data-el-section="primary links"]')},{name:"search",nodes:document.querySelectorAll('[data-el-section="search"]')},{name:"language search",nodes:document.querySelectorAll('[data-el-section="language search"]')},{name:"secondary links",nodes:document.querySelectorAll('[data-el-section="secondary links"]')},{name:"other languages",nodes:document.querySelectorAll('[data-el-section="other languages"]')},{name:"other projects",nodes:document.querySelectorAll('[data-el-section="other projects"]')}],addEvent(document,"click",o),s=document.getElementsByTagName("form");for(var g=0;g<s.length;g++)addEvent(s[g],"submit",i);d&&(c.defaults.country=d.toString().split("=")[1],addEvent(window,"load",a)),addEvent(window,"load",a),/1|yes/.test(navigator.doNotTrack)||(document.cookie="portal_user_id="+c.defaults.session_id)}}(eventLoggingLite,wmTest);var lp={searchInput:document.getElementById("searchInput")};!function(e){"use strict";function t(e){return document.getElementById(e)}function n(e){var t,n;document.querySelector&&"www-wiktionary-org"===document.body.id&&!e.match(/\W/)&&(t=document.querySelector('option[lang|="'+e+'"]'),n=t&&t.getAttribute("data-logo"),n&&document.body.setAttribute("data-logo",n))}function r(){var e=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"";return e.toLowerCase().split("-")[0]}function a(){var e=document.cookie.match(/(?:^|\W)searchLang=([^;]+)/);return(e?e[1]:r()).toLowerCase()}function o(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}function i(e){var n,r,a="data-convert-hans",i="data-converttitle-hans";if(-1!=="zh-hans,zh-cn,zh-sg,zh-my,".indexOf(e+",")){var c=["zh_art","zh_others","zh_search","zh_tag","zh_top10","zh-yue_wiki","gan_wiki","hak_wiki","wuu_wiki"];for(n=0;n<c.length;n+=1)r=t(c[n]),r&&(r.hasAttribute(a)&&o(r,r.getAttribute(a)),r.hasAttribute(i)&&(r.title=r.getAttribute(i)))}}function c(e){var n;0===e.indexOf("zh")&&(n=e.substring(3),"mo"===n?n="hk":"my"===n&&(n="sg"),n&&"cn,tw,hk,sg,".indexOf(n+",")>=0&&(t("zh_wiki").href+="zh-"+n+"/",t("zh_others").href=t("zh_others").href.replace("wiki/","zh-"+n+"/")),i(e))}function l(){if(void 0!==window.HTMLDataListElement){var n=document.createElement("datalist"),r=t("searchInput");n.id="suggestions",document.body.appendChild(n),r.autocomplete="off",r.setAttribute("list","suggestions"),addEvent(r,"input",_.debounce(function(){var n,a=document.getElementsByTagName("head")[0],o=e.getLanguage(),i=t("api_opensearch"),c=encodeURIComponent(r.value);n=o+".wikipedia.org",i&&a.removeChild(i),i=document.createElement("script"),i.id="api_opensearch",i.src="//"+encodeURIComponent(n)+"/w/api.php?action=opensearch&limit=10&format=json&callback=portalOpensearchCallback&search="+c,a.appendChild(i)},200))}}function s(e){if(e){var t=r(),a=t.match(/^\w+/),o=new Date;n(e),a&&a[0]===e?o.setTime(o.getTime()-1):o.setFullYear(o.getFullYear()+1),document.cookie="searchLang="+e+";expires="+o.toUTCString()+";domain="+location.host+";"}}function u(){return void 0!==window.devicePixelRatio?window.devicePixelRatio:void 0!==window.msMatchMedia?window.msMatchMedia("(min-resolution: 192dpi)").matches?2:window.msMatchMedia("(min-resolution: 144dpi)").matches?1.5:1:1}function d(e,t){var n,r,a,o,i={ratio:1};for(n=t.split(/ *, */),a=0;a<n.length;a++)r=n[a].match(/\s*(\S+)(?:\s*([\d.]+)w)?(?:\s*([\d.]+)h)?(?:\s*([\d.]+)x)?\s*/),o=r[4]&&parseFloat(r[4]),e>=o&&o>i.ratio&&(i.ratio=o,i.src=r[1],i.width=r[2]&&parseFloat(r[2]),i.height=r[3]&&parseFloat(r[3]));return i}function g(){var e,t,n=u(),r=new Image;if(n>1&&void 0===r.srcset)for(e=document.getElementsByTagName("img"),t=0;t<e.length;t++){var a,o=e[t],i=o.getAttribute("srcset");"string"==typeof i&&""!==i&&(a=d(n,i),void 0!==a.src&&(o.setAttribute("src",a.src),void 0!==a.width&&o.setAttribute("width",a.width),void 0!==a.height&&o.setAttribute("height",a.height)))}}doWhenReady(function(){var e,r,i,l,s,u,d,g,m,p=a();if(p&&(c(p),e=p.match(/^\w+/)))if(e="nb"===e[0]?"no":e[0],r=t("searchLanguage"),r&&"SELECT"===r.tagName){for(i=r.getElementsByTagName("option"),l=0,s=i.length;!u&&s>l;l+=1)i[l].value===e&&(u=e);!u&&document.querySelector&&(d=document.querySelector('.langlist a[lang|="'+e+'"]'),d&&(u=e,g=document.createElement("option"),g.setAttribute("lang",e),g.setAttribute("value",e),m=d.textContent||d.innerText||e,o(g,m),r.appendChild(g))),u&&(r.value=u,n(u))}else if(r&&"UL"===r.tagName){var h=r.getElementsByTagName("li");for(l=0,s=h.length;!u&&s>l;l+=1)h[l].firstChild.getAttribute("data-lang-value")===e&&(u=e);if(!u&&document.querySelector&&(d=document.querySelector('.langlist a[lang|="'+e+'"]'))){u=e;var f=document.createElement("li"),v=document.createElement("a");v.setAttribute("lang",e),v.setAttribute("data-lang-value",e),o(v,d.textContent||d.innerText||e),f.appendChild(v),r.appendChild(f)}if(u){r.setAttribute("data-lang-value",u),o(document.getElementById("selectedLanguageCode"),e.toUpperCase()),document.getElementById("hiddenLanguageInput").value=u;var w=document.querySelector("#searchLanguage .selected"),y=document.querySelector('#searchLanguage [lang="'+u+'"]');w&&(w.className=""),y&&(y.parentNode.className="selected"),n(u)}}}),window.wmSuggestionsEL=null,window.portalOpensearchCallback=_.debounce(function(e){var n,r=window.wmSuggestionsEL||t("suggestions"),a=r.children,o=document.createDocumentFragment();for(n=0;n<e[1].length;n+=1){var i=a[n]||document.createElement("option");i.value=e[1][n],a[n]||o.appendChild(i)}r.appendChild(o.cloneNode(!0))},100),doWhenReady(function(){var e,n,r,a=t("searchInput"),o=t("searchLanguage");if(a)for(a.setAttribute("results","10"),l(),void 0===a.autofocus?a.focus():window.scroll(0,0),e=location.search&&location.search.substr(1).split("&"),n=0;n<e.length;n+=1)if(r=e[n].split("="),"search"===r[0]&&r[1]){a.value=decodeURIComponent(r[1].replace(/\+/g," "));break}addEvent(o,"change",function(){s(o.value)})}),doWhenReady(function(){var e=document.searchwiki&&document.searchwiki.elements.uselang;e&&(e.value=r())}),doWhenReady(g),doWhenReady(function(){function t(){addEvent(document,"keydown",a),addEvent(document,"mouseover",a)}function n(){removeEvent(document,"keydown",a),removeEvent(document,"mouseover",a)}function r(e){e=e||document.querySelector("#searchLanguage .selected");var t,n=d.scrollTop,r=e.offsetTop,a=d.clientHeight,o=e.clientHeight;n>r?t=r:(t=r,t-=a/2,t+=o),d.scrollTop=t}function a(t){t=t||window.event;var n=40,a=38,o=13,i=9,c=27,s=document.querySelector("#searchLanguage li.selected")||document.querySelector("#searchLanguage li"),u=!0,g=s,m=t.which||t.keyCode,f=t.target||t.srcElement;if(m===n)s=s.nextElementSibling||s;else if(m===a)s=s.previousElementSibling||s;else if("A"===f.tagName&&"searchLanguage"===f.parentNode.parentNode.id)s=f.parentNode,u=!1;else{if(m===i)return void e.close();if(m===c)return void e.close();if(m===o)return l(e.getLanguage()),void e.close();if(!p[m]||!h[p[m]])return;s=d.childNodes[h[p[m]].nodeId]}t.preventDefault?t.preventDefault():t.returnValue=!1,g.className="",s.className="selected",u&&r(s)}function i(){d.onclick=function(){l(e.getLanguage())},addEvent(document,"click",e.close)}function c(){d.onclick=null,removeEvent(document,"click",e.close)}function l(t){o(m,t.toUpperCase()),g.className="language-picker flash-text",document.getElementById("hiddenLanguageInput").value=t,s(t),setTimeout(function(){e.searchInput.focus()})}function u(){g.onclick=function(e){e=e||window.event,e.stopPropagation?e.stopPropagation():e.cancelBubble=!1},g.onfocus=function(){e.open()};for(var t,n,r=0;r<d.childNodes.length;r++)t=d.childNodes[r],"LI"===t.tagName&&(n=t.firstChild.innerHTML.toLowerCase().substr(0,1),t.firstChild.getAttribute("data-lang-value")&&!h[n]&&(h[n]={nodeId:r,lang:t.firstChild.getAttribute("lang"),code:t.firstChild.getAttribute("data-lang-value"),label:t.firstChild.innerHTML}))}var d=document.getElementById("searchLanguage"),g=document.querySelector(".language-picker"),m=document.getElementById("selectedLanguageCode");e.searchInput=document.getElementById("searchInput");var p={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},h={};return e.getLanguage=function(){return document.querySelector(".selected > a").getAttribute("lang")||document.querySelector(".selected > a").getAttribute("data-lang-value")},e.open=function(){t(),i();var n=window.pageYOffset,a=window.innerHeight,o=e.searchInput.offsetParent.offsetTop,c=192;o+c-n>a?d.className="open dropup":d.className="open",g.className="language-picker active",r()},e.close=function(){n(),c(),d.className="","language-picker active"===g.className&&(g.className="language-picker"),g.blur()},u(),e})}(lp),window.mw||(window.mw=window.mediaWiki={loader:{state:function(){}}}),function(e,t,n){doWhenReady(function(){var e,r=document.getElementById("searchInput"),a=r.cloneNode(!0);r.parentNode.replaceChild(a,r),n.searchInput=a,a.focus();var o=new t("search-input","searchInput");e="oninput"in document?"input":"propertychange",addEvent(a,e,_.debounce(function(){o.query(a.value,n.getLanguage())},100))})}(wmTest,WMTypeAhead,lp);