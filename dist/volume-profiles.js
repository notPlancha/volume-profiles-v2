!async function(){for(;!Spicetify.React||!Spicetify.ReactDOM;)await new Promise(e=>setTimeout(e,10));var l,a,c,u,d,f,e,t,n,i,r,s,o,p,h,g,m;l=Object.create,a=Object.defineProperty,c=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,n=(e=(e,t)=>function(){return t||(0,e[u(e)[0]])((t={exports:{}}).exports,t),t.exports})({"external-global-plugin:react-dom"(e,t){t.exports=Spicetify.ReactDOM}}),i=e({"node_modules/umbrellajs/umbrella.min.js"(e,t){function l(e,t){return this instanceof l?e instanceof l?e:((e="string"==typeof e?this.select(e,t):e)&&e.nodeName&&(e=[e]),void(this.nodes=this.slice(e))):new l(e,t)}(l.prototype={get length(){return this.nodes.length}}).nodes=[],l.prototype.addClass=function(){return this.eacharg(arguments,function(e,t){e.classList.add(t)})},l.prototype.adjacent=function(r,e,o){return"number"==typeof e&&(e=0===e?[]:new Array(e).join().split(",").map(Number.call,Number)),this.each(function(n,i){var t=document.createDocumentFragment();l(e||{}).map(function(e,t){return"string"==typeof(t="function"==typeof r?r.call(this,e,t,n,i):r)?this.generate(t):l(t)}).each(function(e){this.isInPage(e)?t.appendChild(l(e).clone().first()):t.appendChild(e)}),o.call(this,n,t)})},l.prototype.after=function(e,t){return this.adjacent(e,t,function(e,t){e.parentNode.insertBefore(t,e.nextSibling)})},l.prototype.append=function(e,t){return this.adjacent(e,t,function(e,t){e.appendChild(t)})},l.prototype.args=function(e,t,n){return(e="string"!=typeof(e="function"==typeof e?e(t,n):e)?this.slice(e).map(this.str(t,n)):e).toString().split(/[\s,]+/).filter(function(e){return e.length})},l.prototype.array=function(r){var o=this;return this.nodes.reduce(function(e,t,n){var i;return r?(i="string"==typeof(i=r.call(o,t,n)||!1)?l(i):i)instanceof l&&(i=i.nodes):i=t.innerHTML,e.concat(!1!==i?i:[])},[])},l.prototype.attr=function(e,t,i){return i=i?"data-":"",this.pairs(e,t,function(e,t){return e.getAttribute(i+t)},function(e,t,n){n?e.setAttribute(i+t,n):e.removeAttribute(i+t)})},l.prototype.before=function(e,t){return this.adjacent(e,t,function(e,t){e.parentNode.insertBefore(t,e)})},l.prototype.children=function(e){return this.map(function(e){return this.slice(e.children)}).filter(e)},l.prototype.clone=function(){return this.map(function(e,t){var n=e.cloneNode(!0),i=this.getAll(n);return this.getAll(e).each(function(e,t){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](e,i.nodes[t])}),n})},l.prototype.getAll=function(e){return l([e].concat(l("*",e).nodes))},(l.prototype.mirror={}).events=function(e,t){if(e._e)for(var n in e._e)e._e[n].forEach(function(e){l(t).on(n,e.callback)})},l.prototype.mirror.select=function(e,t){l(e).is("select")&&(t.value=e.value)},l.prototype.mirror.textarea=function(e,t){l(e).is("textarea")&&(t.value=e.value)},l.prototype.closest=function(t){return this.map(function(e){do{if(l(e).is(t))return e}while((e=e.parentNode)&&e!==document)})},l.prototype.data=function(e,t){return this.attr(e,t,!0)},l.prototype.each=function(e){return this.nodes.forEach(e.bind(this)),this},l.prototype.eacharg=function(n,i){return this.each(function(t,e){this.args(n,t,e).forEach(function(e){i.call(this,t,e)},this)})},l.prototype.empty=function(){return this.each(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)})},l.prototype.filter=function(t){return l(this.nodes.filter(t instanceof l?function(e){return-1!==t.nodes.indexOf(e)}:"function"==typeof t?t:function(e){return e.matches=e.matches||e.msMatchesSelector||e.webkitMatchesSelector,e.matches(t||"*")}))},l.prototype.find=function(t){return this.map(function(e){return l(t||"*",e)})},l.prototype.first=function(){return this.nodes[0]||!1},l.prototype.generate=function(e){return/^\s*<tr[> ]/.test(e)?l(document.createElement("table")).html(e).children().children().nodes:/^\s*<t(h|d)[> ]/.test(e)?l(document.createElement("table")).html(e).children().children().children().nodes:/^\s*</.test(e)?l(document.createElement("div")).html(e).children().nodes:document.createTextNode(e)},l.prototype.handle=function(){var e=this.slice(arguments).map(function(t){return"function"==typeof t?function(e){e.preventDefault(),t.apply(this,arguments)}:t},this);return this.on.apply(this,e)},l.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},l.prototype.html=function(t){return void 0===t?this.first().innerHTML||"":this.each(function(e){e.innerHTML=t})},l.prototype.is=function(e){return 0<this.filter(e).length},l.prototype.isInPage=function(e){return e!==document.body&&document.body.contains(e)},l.prototype.last=function(){return this.nodes[this.length-1]||!1},l.prototype.map=function(e){return e?l(this.array(e)).unique():this},l.prototype.not=function(t){return this.filter(function(e){return!l(e).is(t||!0)})},l.prototype.off=function(e,t,n){var i=null==t&&null==n,r=null,o=t;return"string"==typeof t&&(r=t,o=n),this.eacharg(e,function(t,n){l(t._e?t._e[n]:[]).each(function(e){(i||e.orig_callback===o&&e.selector===r)&&t.removeEventListener(n,e.callback)})})},l.prototype.on=function(e,t,r){function o(e,t){try{Object.defineProperty(e,"currentTarget",{value:t,configurable:!0})}catch(e){}}var s=null,n=t;function i(e){return t.apply(this,[e].concat(e.detail||[]))}return"string"==typeof t&&(s=t,n=r,t=function(n){var i=arguments;l(n.currentTarget).find(s).each(function(e){var t;e.contains(n.target)&&(t=n.currentTarget,o(n,e),r.apply(e,i),o(n,t))})}),this.eacharg(e,function(e,t){e.addEventListener(t,i),e._e=e._e||{},e._e[t]=e._e[t]||[],e._e[t].push({callback:i,orig_callback:n,selector:s})})},l.prototype.pairs=function(i,e,t,r){var n;return void 0!==e&&(n=i,(i={})[n]=e),"object"==typeof i?this.each(function(e,t){for(var n in i)"function"==typeof i[n]?r(e,n,i[n](e,t)):r(e,n,i[n])}):this.length?t(this.first(),i):""},l.prototype.param=function(t){return Object.keys(t).map(function(e){return this.uri(e)+"="+this.uri(t[e])}.bind(this)).join("&")},l.prototype.parent=function(e){return this.map(function(e){return e.parentNode}).filter(e)},l.prototype.prepend=function(e,t){return this.adjacent(e,t,function(e,t){e.insertBefore(t,e.firstChild)})},l.prototype.remove=function(){return this.each(function(e){e.parentNode&&e.parentNode.removeChild(e)})},l.prototype.removeClass=function(){return this.eacharg(arguments,function(e,t){e.classList.remove(t)})},l.prototype.replace=function(e,t){var n=[];return this.adjacent(e,t,function(e,t){n=n.concat(this.slice(t.children)),e.parentNode.replaceChild(t,e)}),l(n)},l.prototype.scroll=function(){var e=this.first();return e&&e.scrollIntoView({behavior:"smooth"}),this},l.prototype.select=function(e,t){return e=e.replace(/^\s*/,"").replace(/\s*$/,""),/^</.test(e)?l().generate(e):(t||document).querySelectorAll(e)},l.prototype.serialize=function(){var i=this;return this.slice(this.first().elements).reduce(function(t,n){return!n.name||n.disabled||"file"===n.type||/(checkbox|radio)/.test(n.type)&&!n.checked?t:"select-multiple"===n.type?(l(n.options).each(function(e){e.selected&&(t+="&"+i.uri(n.name)+"="+i.uri(e.value))}),t):t+"&"+i.uri(n.name)+"="+i.uri(n.value)},"").slice(1)},l.prototype.siblings=function(e){return this.parent().children(e).not(this)},l.prototype.size=function(){var e=this.first();return e?e.getBoundingClientRect():null},l.prototype.slice=function(e){return e&&0!==e.length&&"string"!=typeof e&&"[object Function]"!==e.toString()?e.length?[].slice.call(e.nodes||e):[e]:[]},l.prototype.str=function(t,n){return function(e){return"function"==typeof e?e.call(this,t,n):e.toString()}},l.prototype.text=function(t){return void 0===t?this.first().textContent||"":this.each(function(e){e.textContent=t})},l.prototype.toggleClass=function(e,t){return!!t===t?this[t?"addClass":"removeClass"](e):this.eacharg(e,function(e,t){e.classList.toggle(t)})},l.prototype.trigger=function(e){var r=this.slice(arguments).slice(1);return this.eacharg(e,function(e,t){var n,i={bubbles:!0,cancelable:!0,detail:r};try{n=new window.CustomEvent(t,i)}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r)}e.dispatchEvent(n)})},l.prototype.unique=function(){return l(this.nodes.reduce(function(e,t){return null!=t&&!1!==t&&-1===e.indexOf(t)?e.concat(t):e},[]))},l.prototype.uri=function(e){return encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},l.prototype.wrap=function(e){return this.map(function(t){return l(e).each(function(e){!function(e){for(;e.firstElementChild;)e=e.firstElementChild;return l(e)}(e).append(t.cloneNode(!0)),t.parentNode.replaceChild(e,t)})})},"object"==typeof t&&t.exports&&(t.exports=l,t.exports.u=l)}}),r=e({"node_modules/arrive/src/arrive.js"(){!function(c,e,p){"use strict";var i,h,n,t,r,s,l;if(c.MutationObserver&&"undefined"!=typeof HTMLElement)i=0,n=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,h={matchesSelector:function(e,t){return e instanceof HTMLElement&&n.call(e,t)},addMethod:function(e,t,n){var i=e[t];e[t]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):void 0}},callCallbacks:function(e,t,n){if(e.length){t&&t.options.onceOnly&&(e=[e[0]],t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback));for(var i,r=0;i=e[r];r++)i&&i.callback&&i.callback.call(i.elem,i.elem);t&&t.callback&&n&&n.addTimeoutHandler(t.target,t.selector,t.callback,t.options,t.data)}},checkChildNodesRecursively:function(e,t,n,i){for(var r,o=0;r=e[o];o++)n(r,t,i)&&i.push({callback:t.callback,elem:r}),0<r.childNodes.length&&h.checkChildNodesRecursively(r.childNodes,t,n,i)},mergeArrays:function(e,t){var n,i={};for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i},toElementsArray:function(e){return e=void 0===e||"number"==typeof e.length&&e!==c?e:[e]}},o.prototype.addEvent=function(e,t,n,i,r){e={target:e,selector:t,options:n,callback:i,data:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(e),this._eventsBucket.push(e),e},o.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)e(t)&&(this._beforeRemoving&&this._beforeRemoving(t),t.data&&t.data.timeoutId&&clearTimeout(t.data.timeoutId),t=this._eventsBucket.splice(n,1))&&t.length&&(t[0].callback=null)},o.prototype.beforeAdding=function(e){this._beforeAdding=e},o.prototype.beforeRemoving=function(e){this._beforeRemoving=e},t=o,r=function(r,o){var s=new t,l=this,a={fireOnAttributesModification:!1};return s.beforeAdding(function(t){var e,n=t.target,i=(n!==c.document&&n!==c||(n=document.getElementsByTagName("html")[0]),e=new MutationObserver(function(e){o.call(this,e,t)}),r(t.options));e.observe(n,i),t.observer=e,t.me=l}),s.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=h.mergeArrays(a,t);for(var i=h.toElementsArray(this),r=0;r<i.length;r++){var o={};l.addTimeoutHandler(i[r],e,n,t,o),s.addEvent(i[r],e,t,n,o)}},this.unbindEvent=function(){var n=h.toElementsArray(this);s.removeEvent(function(e){for(var t=0;t<n.length;t++)if(this===p||e.target===n[t])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(n){var i=h.toElementsArray(this),r=n,e="function"==typeof n?function(e){for(var t=0;t<i.length;t++)if((this===p||e.target===i[t])&&e.callback===r)return!0;return!1}:function(e){for(var t=0;t<i.length;t++)if((this===p||e.target===i[t])&&e.selector===n)return!0;return!1};s.removeEvent(e)},this.unbindEventWithSelectorAndCallback=function(n,i){var r=h.toElementsArray(this);s.removeEvent(function(e){for(var t=0;t<r.length;t++)if((this===p||e.target===r[t])&&e.selector===n&&e.callback===i)return!0;return!1})},this.addTimeoutHandler=function(e,t,n,i,r){!i.timeout||i.timeout<=0||(r.timeoutId&&clearTimeout(r.timeoutId),r.timeoutId=setTimeout(()=>{l.unbindEventWithSelectorAndCallback.call(e,t,n),n.call(null,null)},i.timeout))},this},s=new function(){var d={fireOnAttributesModification:!1,onceOnly:!1,existing:!1,timeout:0};function o(e,t,n){return!(!h.matchesSelector(e,t.selector)||(e._id===p&&(e._id=i++),-1!=t.firedElems.indexOf(e._id))||(t.firedElems.push(e._id),0))}var f=(s=new r(function(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t},function(e,r){e.forEach(function(e){var t=e.addedNodes,n=e.target,i=[];null!==t&&0<t.length?h.checkChildNodesRecursively(t,r,o,i):"attributes"===e.type&&o(n,r)&&i.push({callback:r.callback,elem:n}),h.callCallbacks(i,r,s)})})).bindEvent;return s.bindEvent=function(t,e,n){var i,r="object"==typeof e?h.mergeArrays(d,e):{...d},o="function"==typeof n?n:"function"==typeof e?e:p,s=h.toElementsArray(this);if(o||(r.onceOnly=!0),r.existing){for(var l=[],a=0;a<s.length;a++)for(var c=s[a].querySelectorAll(t),u=0;u<c.length;u++)l.push({callback:o,elem:c[u]});if(r.onceOnly&&l.length)return o?o.call(l[0].elem,l[0].elem):Promise.resolve(l[0].elem);setTimeout(h.callCallbacks,1,l)}if(!o)return i=this,new Promise(e=>f.call(i,t,r,e));f.call(this,t,r,o)},s},l=new function(){var o={onceOnly:!1,timeout:0};function i(e,t){return h.matchesSelector(e,t.selector)}var s=(l=new r(function(){return{childList:!0,subtree:!0}},function(e,n){e.forEach(function(e){var e=e.removedNodes,t=[];null!==e&&0<e.length&&h.checkChildNodesRecursively(e,n,i,t),h.callCallbacks(t,n,l)})})).bindEvent;return l.bindEvent=function(t,e,n){var i,r="object"==typeof e?h.mergeArrays(o,e):{...o},n="function"==typeof n?n:"function"==typeof e?e:p;if(!n)return r.onceOnly=!0,i=this,new Promise(e=>s.call(i,t,r,e));s.call(this,t,r,n)},l},e&&u(e.fn),u(HTMLElement.prototype),u(NodeList.prototype),u(HTMLCollection.prototype),u(HTMLDocument.prototype),u(Window.prototype),a(s,e={},"unbindAllArrive"),a(l,e,"unbindAllLeave");function o(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null}function a(e,t,n){h.addMethod(t,n,e.unbindEvent),h.addMethod(t,n,e.unbindEventWithSelectorOrCallback),h.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function u(e){e.arrive=s.bindEvent,a(s,e,"unbindArrive"),e.leave=l.bindEvent,a(l,e,"unbindLeave")}}(window,"undefined"==typeof jQuery?null:jQuery,void 0)}}),s=(t=(e,t,n)=>{n=null!=e?l(d(e)):{};var i=!t&&e&&e.__esModule?n:a(n,"default",{value:e,enumerable:!0}),r=e,o=void 0,s=void 0;if(r&&"object"==typeof r||"function"==typeof r)for(let e of u(r))f.call(i,e)||e===o||a(i,e,{get:()=>r[e],enumerable:!(s=c(r,e))||s.enumerable});return i})(e({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}})()),o=t(n()),p=t(i()),r(),(g=h=class{static get ToggleSettings(){var e=Spicetify.LocalStorage.get(h.ToggleSettingsId);return"true"!=e&&"false"!=e?(Spicetify.LocalStorage.set(h.ToggleSettingsId,"true"),!0):"true"==e}static set ToggleSettings(e){Spicetify.LocalStorage.set(h.ToggleSettingsId,e.toString())}constructor(e,t,n,i=void 0){this._id=e;let r="";switch(n){case"high":r=h.icons.high;break;case"medium":r=h.icons.medium;break;case"low":r=h.icons.low;break;case"mute":r=h.icons.mute;break;case"speakerOnly":r=h.icons.speakerOnly}e=`<button class='control-button' aria-label='Volume Profile ${this._id}' aria-describedby="volume-icon" style="margin-top:4px">
            <svg role="presentation" style="fill: currentColor" viewBox="0 0 16 16" height="16" width="16">
                ${r}
            </svg>
        </button>`;this.buttonElement=(0,p.default)(e),isNaN(this.volume)&&(this.volume=t),i&&(this.bind=i)}get localStorageId(){return h.localStorageIdPrefix+this._id}get settingId(){return h.settingIdPrefix+this._id}get volume(){var e=Spicetify.LocalStorage.get(this.localStorageId);return Number(e)}set volume(e){Spicetify.LocalStorage.set(this.localStorageId,e.toFixed(2))}get bind(){return Spicetify.LocalStorage.get(h.bindIdPrefix+this._id)||""}set bind(e){Spicetify.LocalStorage.set(h.bindIdPrefix+this._id,e),this.registerBind(e)}static SettingsSectionRegister(){if(h.SettingsRegistered)throw"Settings already registered";h.SettingsRegistered=!0,h.SettingsSection.pushSettings()}static isValidVolume(e){return!(""==e||isNaN(Number(e))||Number(e)<0||100<Number(e))}registerButton(){document.arrive(".main-nowPlayingBar-right > *",{existing:!0,onceOnly:!0},e=>{this.buttonElement.on("click",()=>{Spicetify.Player.setVolume(this.volume/100)}),this.buttonElement.on("contextmenu",()=>{h.ToggleSettings&&(this.volume=100*Spicetify.Player.getVolume(),Spicetify.showNotification('Volume of "'+this._id+'" changed to '+this.toString()),h.SettingsSection.setFieldValue(this.settingId,this.volume.toString()),h.SettingsSection.rerender())}),(0,p.default)(e).prepend(this.buttonElement)})}registerProfile(){this.registerButton(),this.registerSetting()}registerSetting(){h.SettingsSection.addInput(this.settingId,`Volume of Profile "${this._id}"`,this.toString(),()=>{var e=h.SettingsSection.getFieldValue(this.settingId);h.isValidVolume(e)&&Spicetify.LocalStorage.set(this.localStorageId,e)}),h.SettingsSection.addInput(h.bindIdPrefix+this._id,`Bind for Profile "${this._id}"`,this.bind,()=>{var e=h.SettingsSection.getFieldValue(h.bindIdPrefix+this._id);this.bind=e})}toString(){return this.volume.toFixed(2)}click(){this.buttonElement.trigger("click")}registerBind(e){Spicetify.Mousetrap.unbind(e),Spicetify.Mousetrap.bind(e,()=>this.click())}}).icons=((e=class{}).low='<path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>',e.speakerOnly='<path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path>',e.high=e.low+'<path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>',e.medium='<path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path>',e.mute=e.speakerOnly+'<path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>',e),g.SettingsRegistered=!1,g.ToggleSettingsId="volume-profile-toggle-on-left-click",g.settingIdPrefix="settings-volume-profile-",g.bindIdPrefix="bind-volume-profile-",g.SettingsSection=new class{constructor(e,t,n={}){this.name=e,this.settingsId=t,this.initialSettingsFields=n,this.settingsFields=this.initialSettingsFields,this.setRerender=null,this.pushSettings=async()=>{for(Object.entries(this.settingsFields).forEach(([e,t])=>{"button"!==t.type&&void 0===this.getFieldValue(e)&&this.setFieldValue(e,t.defaultValue)});!Spicetify?.Platform?.History?.listen;)await new Promise(e=>setTimeout(e,100));this.stopHistoryListener&&this.stopHistoryListener(),this.stopHistoryListener=Spicetify.Platform.History.listen(e=>{"/preferences"===e.pathname&&this.render()}),"/preferences"===Spicetify.Platform.History.location.pathname&&await this.render()},this.rerender=()=>{this.setRerender&&this.setRerender(Math.random())},this.render=async()=>{for(;!document.getElementById("desktop.settings.selectLanguage");){if("/preferences"!==Spicetify.Platform.History.location.pathname)return;await new Promise(e=>setTimeout(e,100))}var e=document.querySelector(".main-view-container__scroll-node-child main div");if(!e)return console.error("[spcr-settings] settings container not found");let t=Array.from(e.children).find(e=>e.id===this.settingsId);t?console.log(t):((t=document.createElement("div")).id=this.settingsId,e.appendChild(t)),o.default.render(s.default.createElement(this.FieldsContainer,null),t)},this.addButton=(e,t,n,i,r)=>{this.settingsFields[e]={type:"button",description:t,value:n,events:{onClick:i,...r}}},this.addInput=(e,t,n,i,r,o)=>{this.settingsFields[e]={type:"input",description:t,defaultValue:n,inputType:r,events:{onChange:i,...o}}},this.addHidden=(e,t)=>{this.settingsFields[e]={type:"hidden",defaultValue:t}},this.addToggle=(e,t,n,i,r)=>{this.settingsFields[e]={type:"toggle",description:t,defaultValue:n,events:{onChange:i,...r}}},this.addDropDown=(e,t,n,i,r,o)=>{this.settingsFields[e]={type:"dropdown",description:t,defaultValue:n[i],options:n,events:{onSelect:r,...o}}},this.getFieldValue=e=>JSON.parse(Spicetify.LocalStorage.get(this.settingsId+"."+e)||"{}")?.value,this.setFieldValue=(e,t)=>{Spicetify.LocalStorage.set(this.settingsId+"."+e,JSON.stringify({value:t}))},this.FieldsContainer=()=>{var[e,t]=(0,s.useState)(0);return this.setRerender=t,s.default.createElement("div",{className:"x-settings-section",key:e},s.default.createElement("h2",{className:"TypeElement-cello-textBase-type"},this.name),Object.entries(this.settingsFields).map(([e,t])=>s.default.createElement(this.Field,{nameId:e,field:t})))},this.Field=n=>{var e=this.settingsId+"."+n.nameId;let t;if(t="button"===n.field.type?n.field.value:this.getFieldValue(n.nameId),"hidden"===n.field.type)return s.default.createElement(s.default.Fragment,null);const[i,r]=(0,s.useState)(t),o=e=>{void 0!==e&&(r(e),this.setFieldValue(n.nameId,e))};return s.default.createElement("div",{className:"x-settings-row"},s.default.createElement("div",{className:"x-settings-firstColumn"},s.default.createElement("label",{className:"TypeElement-viola-textSubdued-type",htmlFor:e},n.field.description||"")),s.default.createElement("div",{className:"x-settings-secondColumn"},"input"===n.field.type?s.default.createElement("input",{className:"x-settings-input",id:e,dir:"ltr",value:i,type:n.field.inputType||"text",...n.field.events,onChange:e=>{o(e.currentTarget.value);var t=n.field.events?.onChange;t&&t(e)}}):"button"===n.field.type?s.default.createElement("span",null,s.default.createElement("button",{id:e,className:"Button-sc-y0gtbx-0 Button-small-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",...n.field.events,onClick:e=>{o();var t=n.field.events?.onClick;t&&t(e)},type:"button"},i)):"toggle"===n.field.type?s.default.createElement("label",{className:"x-settings-secondColumn x-toggle-wrapper"},s.default.createElement("input",{id:e,className:"x-toggle-input",type:"checkbox",checked:i,...n.field.events,onClick:e=>{o(e.currentTarget.checked);var t=n.field.events?.onClick;t&&t(e)}}),s.default.createElement("span",{className:"x-toggle-indicatorWrapper"},s.default.createElement("span",{className:"x-toggle-indicator"}))):"dropdown"===n.field.type?s.default.createElement("select",{className:"main-dropDown-dropDown",id:e,...n.field.events,onChange:e=>{o(n.field.options[e.currentTarget.selectedIndex]);var t=n.field.events?.onChange;t&&t(e)}},n.field.options.map((e,t)=>s.default.createElement("option",{selected:e===i,value:t+1},e))):s.default.createElement(s.default.Fragment,null)))}}}("Volume Profile Settings","volume-profile-settings"),g.localStorageIdPrefix="localStorage-volume-profile-",g.volumeIconHtmlSelector="#volume-icon",m=async function(){for(;null==Spicetify||!Spicetify.Player||null==Spicetify||!Spicetify.LocalStorage||null==Spicetify||!Spicetify.Mousetrap;)await new Promise(e=>setTimeout(e,100));g.SettingsSection.addToggle("toggle-left-click-volume-profile","Set Volume Profile on left click",g.ToggleSettings,()=>{g.ToggleSettings=g.SettingsSection.getFieldValue("toggle-left-click-volume-profile")});var e=new g("middle",50,"medium","f14"),t=new g("left",30,"low","f13");for(const n of[new g("right",80,"high","f15"),e,t])n.registerProfile();g.SettingsSectionRegister()},(async()=>{await m()})()}();