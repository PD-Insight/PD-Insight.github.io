(function(){"use strict";var Y=document.createElement("style");Y.textContent=`:root{font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}@media(prefers-color-scheme:light){:root{color:#213547;background-color:#fff}}
/*$vite$:1*/`,document.head.appendChild(Y);var L=typeof document<"u"?document.currentScript:null;const U=globalThis,z=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),F=new WeakMap;let G=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(z&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(e,t))}return t}toString(){return this.cssText}};const ct=n=>new G(typeof n=="string"?n:n+"",void 0,j),ht=(n,...t)=>{const e=n.length===1?n[0]:t.reduce(((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1]),n[0]);return new G(e,n,j)},dt=(n,t)=>{if(z)n.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},J=z?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ct(e)})(n):n;const{is:pt,defineProperty:ut,getOwnPropertyDescriptor:ft,getOwnPropertyNames:gt,getOwnPropertySymbols:mt,getPrototypeOf:$t}=Object,M=globalThis,Z=M.trustedTypes,yt=Z?Z.emptyScript:"",vt=M.reactiveElementPolyfillSupport,w=(n,t)=>n,D={toAttribute(n,t){switch(t){case Boolean:n=n?yt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},q=(n,t)=>!pt(n,t),X={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:q};Symbol.metadata??=Symbol("metadata"),M.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ut(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=ft(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){const l=s?.call(this);o?.call(this,r),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,i=[...gt(e),...mt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:D;this._$Em=s;const l=r.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??q)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:r}=o,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[w("elementProperties")]=new Map,b[w("finalized")]=new Map,vt?.({ReactiveElement:b}),(M.reactiveElementVersions??=[]).push("2.1.1");const B=globalThis,N=B.trustedTypes,Q=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,tt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+g,_t=`<${et}>`,$=document,S=()=>$.createComment(""),C=n=>n===null||typeof n!="object"&&typeof n!="function",K=Array.isArray,bt=n=>K(n)||typeof n?.[Symbol.iterator]=="function",V=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,st=/>/g,y=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,ot=/"/g,rt=/^(?:script|style|textarea|title)$/i,At=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),O=At(1),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),at=new WeakMap,v=$.createTreeWalker($,129);function lt(n,t){if(!K(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const Et=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=k;for(let l=0;l<e;l++){const a=n[l];let d,p,c=-1,f=0;for(;f<a.length&&(r.lastIndex=f,p=r.exec(a),p!==null);)f=r.lastIndex,r===k?p[1]==="!--"?r=it:p[1]!==void 0?r=st:p[2]!==void 0?(rt.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=y):p[3]!==void 0&&(r=y):r===y?p[0]===">"?(r=s??k,c=-1):p[1]===void 0?c=-2:(c=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?y:p[3]==='"'?ot:nt):r===ot||r===nt?r=y:r===it||r===st?r=k:(r=y,s=void 0);const m=r===y&&n[l+1].startsWith("/>")?" ":"";o+=r===k?a+_t:c>=0?(i.push(d),a.slice(0,c)+tt+a.slice(c)+g+m):a+g+(c===-2?l:m)}return[lt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const l=t.length-1,a=this.parts,[d,p]=Et(t,e);if(this.el=P.createElement(d,i),v.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(tt)){const f=p[r++],m=s.getAttribute(c).split(g),I=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:I[2],strings:m,ctor:I[1]==="."?wt:I[1]==="?"?St:I[1]==="@"?Ct:H}),s.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(rt.test(s.tagName)){const c=s.textContent.split(g),f=c.length-1;if(f>0){s.textContent=N?N.emptyScript:"";for(let m=0;m<f;m++)s.append(c[m],S()),v.nextNode(),a.push({type:2,index:++o});s.append(c[f],S())}}}else if(s.nodeType===8)if(s.data===et)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:o}),c+=g.length-1}o++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function E(n,t,e=n,i){if(t===A)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=C(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=E(n,s._$AS(n,t.values),s,i)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??$).importNode(e,!0);v.currentNode=s;let o=v.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new R(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new kt(o,this,t)),this._$AV.push(d),a=i[++l]}r!==a?.index&&(o=v.nextNode(),r++)}return v.currentNode=$,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=P.createElement(lt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new xt(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new P(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new R(this.O(S()),this.O(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=E(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const l=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=E(this,l[i+a],e,a),d===A&&(d=this._$AH[a]),r||=!C(d)||d!==this._$AH[a],d===h?t=h:t!==h&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}r&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class St extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Ct extends H{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??h)===A)return;const i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Ot=B.litHtmlPolyfillSupport;Ot?.(P,R),(B.litHtmlVersions??=[]).push("3.3.1");const Pt=(n,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new R(t.insertBefore(S(),o),o,void 0,e??{})}return s._$AI(n),s};const W=globalThis;class T extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}T._$litElement$=!0,T.finalized=!0,W.litElementHydrateSupport?.({LitElement:T});const Rt=W.litElementPolyfillSupport;Rt?.({LitElement:T}),(W.litElementVersions??=[]).push("4.2.1");const Tt=n=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(n,t)})):customElements.define(n,t)};const Ut={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:q},Mt=(n=Ut,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),i==="accessor"){const{name:r}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,n)},init(l){return l!==void 0&&this.C(r,void 0,n,l),l}}}if(i==="setter"){const{name:r}=e;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,n)}}throw Error("Unsupported decorator location: "+i)};function Dt(n){return(t,e)=>typeof e=="object"?Mt(n,t,e):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(n,t,e)}function x(n){return Dt({...n,state:!0,attribute:!1})}var Nt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,_=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ht(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Nt(t,e,s),s};let u=class extends T{constructor(){super(),this.devices=[],this.selectedDeviceId="",this.autoplayError=!1,this.isEnabled=!1,this.showMenu=!1,this.isTesting=!1,this.isRinging=!1,this.STORAGE_KEY="wxcc-secondary-ringer-device",this.ENABLED_KEY="wxcc-secondary-ringer-enabled",this.ringtoneAudio=new Audio,this.ringtoneAudio.src=new URL("./ring.mp3",L&&L.tagName.toUpperCase()==="SCRIPT"&&L.src||new URL("index.js",document.baseURI).href).href,this.ringtoneAudio.addEventListener("ended",()=>{this.isTesting=!1})}async connectedCallback(){super.connectedCallback(),await this.initDevices();const n=window.AGENTX_SERVICE;n&&(n.aqm.contact.eAgentOfferContact?.listen(this.startRinging.bind(this)),n.aqm.contact.eAgentOfferConsult?.listen(this.startRinging.bind(this)),n.aqm.contact.eAgentContactAssigned?.listen(this.stopRinging.bind(this)),n.aqm.contact.eAgentContactAccepted?.listen(this.stopRinging.bind(this)),n.aqm.contact.eAgentContactAnswered?.listen(this.stopRinging.bind(this)),n.aqm.contact.eAgentContactEnded?.listen(this.stopRinging.bind(this)),n.aqm.contact.eAgentOfferContactRona?.listen(this.stopRinging.bind(this)),n.aqm.contact.eAgentConsulting?.listen(this.stopRinging.bind(this)),n.aqm.contact.eAgentContactWrappedUp?.listen(this.stopRinging.bind(this))),localStorage.getItem(this.ENABLED_KEY)==="true"&&(this.isEnabled=!0)}async initDevices(){try{await navigator.mediaDevices.getUserMedia({audio:!0})}catch{console.warn("Microphone access denied. Device names may not appear.")}const n=await navigator.mediaDevices.enumerateDevices();this.devices=n.filter(e=>e.kind==="audiooutput");const t=localStorage.getItem(this.STORAGE_KEY);t&&this.devices.some(e=>e.deviceId===t)?this.selectedDeviceId=t:this.devices.length>0&&(this.selectedDeviceId=this.devices[0].deviceId),this.setAudioSink(this.selectedDeviceId)}async setAudioSink(n){if("setSinkId"in this.ringtoneAudio)try{await this.ringtoneAudio.setSinkId(n)}catch(t){console.error("Failed to route audio to selected device:",t)}}handleDeviceChange(n){const t=n.target;this.selectedDeviceId=t.value,localStorage.setItem(this.STORAGE_KEY,this.selectedDeviceId),this.setAudioSink(this.selectedDeviceId),this.isTesting&&this.testRinger()}toggleEnabled(){this.isEnabled=!this.isEnabled,localStorage.setItem(this.ENABLED_KEY,this.isEnabled.toString())}toggleMenu(){this.showMenu=!this.showMenu}testRinger(){if(this.autoplayError=!1,this.isTesting)this.ringtoneAudio.pause(),this.ringtoneAudio.currentTime=0,this.isTesting=!1;else{if(this.isRinging)return;this.ringtoneAudio.loop=!1,this.ringtoneAudio.currentTime=0,this.isTesting=!0,this.ringtoneAudio.play().catch(n=>{console.error("Autoplay blocked:",n),this.autoplayError=!0,this.isTesting=!1})}}startRinging(n){if(!this.isEnabled||this.isRinging)return;const t=n?.data?.interaction?.direction||n?.data?.interaction?.contactDirection||n?.data?.interaction?.outboundType;if(t&&(t.toLowerCase()==="outbound"||t.toLowerCase()==="outdial")){console.log("Ignoring outdial call for secondary ringer.");return}this.isTesting&&(this.isTesting=!1),this.isRinging=!0,this.autoplayError=!1,this.ringtoneAudio.loop=!0,this.ringtoneAudio.currentTime=0,this.ringtoneAudio.play().catch(e=>{this.isRinging=!1,console.warn("Autoplay blocked. Agent must click the page first.",e),this.autoplayError=!0})}stopRinging(){this.isRinging=!1,this.isTesting||(this.ringtoneAudio.pause(),this.ringtoneAudio.currentTime=0)}render(){const n=O`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,t=O`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;return O`
            <div>
                <button class="header-btn ${this.showMenu?"menu-open":""}" @click=${this.toggleMenu}>
                    ${this.isEnabled?n:t}
                    ${this.isEnabled?"Ringer On":"Ringer Off"}
                </button>

                <div class="menu-dropdown ${this.showMenu?"":"hidden"}">
                    <button class="toggle-btn ${this.isEnabled?"on":""}" @click=${this.toggleEnabled}>
                        ${this.isEnabled?"Secondary Ringer Enabled":"Secondary Ringer Disabled"}
                    </button>
                    
                    <div class="label-text">Speaker</div>
                    <select @change=${this.handleDeviceChange} .value=${this.selectedDeviceId}>
                        ${this.devices.map(e=>O`<option value="${e.deviceId}">${e.label||"Unknown Device"}</option>`)}
                    </select>
                    
                    <button class="test-btn ${this.isTesting?"testing":""}" @click=${this.testRinger}>
                        ${this.isTesting?"Stop":"Test"}
                    </button>
                    
                    ${this.autoplayError?O`<div class="error">Click 'Test' to allow browser audio!</div>`:""}
                </div>
            </div>
        `}};u.styles=ht`
        :host {
            display: inline-block;
            font-family: "Inter Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            font-feature-settings: "ss02";
            font-size: 14px;
            color: rgba(0, 0, 0, 0.95);
            position: relative;
        }
        .header-btn {
            background-color: transparent;
            border: 1px solid var(--md-primary-text-color, rgba(0, 0, 0, 0.95));
            color: var(--md-primary-text-color, rgba(0, 0, 0, 0.95));
            padding: 4px 12px;
            border-radius: 32px;
            cursor: pointer;
            font-family: inherit;
            font-size: 14px;
            font-weight: 400;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            outline: none;
            text-transform: none !important;
            font-variant: normal !important;
        }
        .header-btn:hover { background-color: rgba(0,0,0,0.05); }
        .header-btn.menu-open { box-shadow: 0 0 0 2px #007aa3; border-color: transparent; }
        
        .menu-dropdown {
            position: absolute;
            top: 40px;
            right: 0;
            background: var(--md-primary-bg-color, #ffffff);
            border: 1px solid var(--md-secondary-border-color, #d6d6d6);
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            flex-direction: column;
            gap: 16px;
            z-index: 1000;
            width: 260px;
            text-transform: none !important; 
            font-variant: normal !important;
        }
        .hidden { display: none; }
        
        .label-text {
            font-size: 14px; 
            color: var(--md-secondary-text-color, rgba(0, 0, 0, 0.95)); 
            text-transform: none !important; 
            font-variant: normal !important;
            font-weight: 400;
            letter-spacing: normal !important;
            margin-bottom: -8px;
        }

        select {
            padding: 8px 32px 8px 12px; 
            border-radius: 32px; 
            border: 1px solid var(--md-secondary-border-color, #858585);
            width: 100%;
            text-transform: none !important;
            font-variant: normal !important;
            font-family: inherit;
            font-size: 14px;
            color: var(--md-primary-text-color, rgba(0, 0, 0, 0.95));
            background-color: var(--md-primary-bg-color, #ffffff);
            outline: none;
            box-sizing: border-box;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        
        .toggle-btn {
            padding: 8px 12px;
            border-radius: 32px;
            border: 1px solid var(--md-brand-color, #007aa3);
            background: var(--md-primary-bg-color, #ffffff);
            color: var(--md-brand-color, #007aa3);
            cursor: pointer;
            font-family: inherit;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
            transition: all 0.2s;
            text-transform: none !important;
            font-variant: normal !important;
        }
        .toggle-btn.on {
            background: var(--md-brand-color, #007aa3);
            color: #ffffff;
        }
        
        .test-btn {
            background: transparent;
            border: 1px solid var(--md-secondary-border-color, #858585);
            border-radius: 32px;
            padding: 6px 16px;
            cursor: pointer;
            font-family: inherit;
            font-size: 14px;
            color: var(--md-primary-text-color, rgba(0, 0, 0, 0.95));
            text-transform: none !important;
            font-variant: normal !important;
            transition: all 0.2s;
            align-self: flex-end; 
        }
        .test-btn:hover { background: var(--md-secondary-bg-color, #f5f5f5); }
        
        .test-btn.testing { 
            background: var(--md-secondary-bg-color, #f2f2f2); 
            border: 2px solid var(--md-brand-color, #007aa3); 
            padding: 5px 15px; 
            color: var(--md-primary-text-color, rgba(0, 0, 0, 0.95)); 
        }
        
        .error { color: #e2231a; font-size: 12px; text-align: center; text-transform: none !important; font-variant: normal !important; }
        .icon { width: 16px; height: 16px; display: inline-block; }
    `,_([x()],u.prototype,"devices",2),_([x()],u.prototype,"selectedDeviceId",2),_([x()],u.prototype,"autoplayError",2),_([x()],u.prototype,"isEnabled",2),_([x()],u.prototype,"showMenu",2),_([x()],u.prototype,"isTesting",2),u=_([Tt("second-ringer")],u)})();
