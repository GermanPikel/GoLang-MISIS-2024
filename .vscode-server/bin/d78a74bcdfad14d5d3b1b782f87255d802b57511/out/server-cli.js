/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/var C=function(e,r){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])},C(e,r)};export function __extends(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");C(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}export var __assign=function(){return __assign=Object.assign||function(r){for(var t,o=1,a=arguments.length;o<a;o++){t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},__assign.apply(this,arguments)};export function __rest(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]]);return t}export function __decorate(e,r,t,o){var a=arguments.length,n=a<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,t):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,r,t,o);else for(var f=e.length-1;f>=0;f--)(i=e[f])&&(n=(a<3?i(n):a>3?i(r,t,n):i(r,t))||n);return a>3&&n&&Object.defineProperty(r,t,n),n}export function __param(e,r){return function(t,o){r(t,o,e)}}export function __esDecorate(e,r,t,o,a,n){function i(y){if(y!==void 0&&typeof y!="function")throw new TypeError("Function expected");return y}for(var f=o.kind,l=f==="getter"?"get":f==="setter"?"set":"value",s=!r&&e?o.static?e:e.prototype:null,p=r||(s?Object.getOwnPropertyDescriptor(s,o.name):{}),c,_=!1,u=t.length-1;u>=0;u--){var m={};for(var d in o)m[d]=d==="access"?{}:o[d];for(var d in o.access)m.access[d]=o.access[d];m.addInitializer=function(y){if(_)throw new TypeError("Cannot add initializers after decoration has completed");n.push(i(y||null))};var g=(0,t[u])(f==="accessor"?{get:p.get,set:p.set}:p[l],m);if(f==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(c=i(g.get))&&(p.get=c),(c=i(g.set))&&(p.set=c),(c=i(g.init))&&a.unshift(c)}else(c=i(g))&&(f==="field"?a.unshift(c):p[l]=c)}s&&Object.defineProperty(s,o.name,p),_=!0}export function __runInitializers(e,r,t){for(var o=arguments.length>2,a=0;a<r.length;a++)t=o?r[a].call(e,t):r[a].call(e);return o?t:void 0}export function __propKey(e){return typeof e=="symbol"?e:"".concat(e)}export function __setFunctionName(e,r,t){return typeof r=="symbol"&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",r):r})}export function __metadata(e,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,r)}export function __awaiter(e,r,t,o){function a(n){return n instanceof t?n:new t(function(i){i(n)})}return new(t||(t=Promise))(function(n,i){function f(p){try{s(o.next(p))}catch(c){i(c)}}function l(p){try{s(o.throw(p))}catch(c){i(c)}}function s(p){p.done?n(p.value):a(p.value).then(f,l)}s((o=o.apply(e,r||[])).next())})}export function __generator(e,r){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,i;return i={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function f(s){return function(p){return l([s,p])}}function l(s){if(o)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(t=0)),t;)try{if(o=1,a&&(n=s[0]&2?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,a=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){t.label=s[1];break}if(s[0]===6&&t.label<n[1]){t.label=n[1],n=s;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(s);break}n[2]&&t.ops.pop(),t.trys.pop();continue}s=r.call(e,t)}catch(p){s=[6,p],a=0}finally{o=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}export var __createBinding=Object.create?function(e,r,t,o){o===void 0&&(o=t);var a=Object.getOwnPropertyDescriptor(r,t);(!a||("get"in a?!r.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,a)}:function(e,r,t,o){o===void 0&&(o=t),e[o]=r[t]};export function __exportStar(e,r){for(var t in e)t!=="default"&&!Object.prototype.hasOwnProperty.call(r,t)&&__createBinding(r,e,t)}export function __values(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}export function __read(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),a,n=[],i;try{for(;(r===void 0||r-- >0)&&!(a=o.next()).done;)n.push(a.value)}catch(f){i={error:f}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(i)throw i.error}}return n}export function __spread(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(__read(arguments[r]));return e}export function __spreadArrays(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var o=Array(e),a=0,r=0;r<t;r++)for(var n=arguments[r],i=0,f=n.length;i<f;i++,a++)o[a]=n[i];return o}export function __spreadArray(e,r,t){if(t||arguments.length===2)for(var o=0,a=r.length,n;o<a;o++)(n||!(o in r))&&(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}export function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}export function __asyncGenerator(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,r||[]),a,n=[];return a={},f("next"),f("throw"),f("return",i),a[Symbol.asyncIterator]=function(){return this},a;function i(u){return function(m){return Promise.resolve(m).then(u,c)}}function f(u,m){o[u]&&(a[u]=function(d){return new Promise(function(g,y){n.push([u,d,g,y])>1||l(u,d)})},m&&(a[u]=m(a[u])))}function l(u,m){try{s(o[u](m))}catch(d){_(n[0][3],d)}}function s(u){u.value instanceof __await?Promise.resolve(u.value.v).then(p,c):_(n[0][2],u)}function p(u){l("next",u)}function c(u){l("throw",u)}function _(u,m){u(m),n.shift(),n.length&&l(n[0][0],n[0][1])}}export function __asyncDelegator(e){var r,t;return r={},o("next"),o("throw",function(a){throw a}),o("return"),r[Symbol.iterator]=function(){return this},r;function o(a,n){r[a]=e[a]?function(i){return(t=!t)?{value:__await(e[a](i)),done:!1}:n?n(i):i}:n}}export function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],t;return r?r.call(e):(e=typeof __values=="function"?__values(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(i){return new Promise(function(f,l){i=e[n](i),a(f,l,i.done,i.value)})}}function a(n,i,f,l){Promise.resolve(l).then(function(s){n({value:s,done:f})},i)}}export function __makeTemplateObject(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}var re=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r};export function __importStar(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return re(r,e),r}export function __importDefault(e){return e&&e.__esModule?e:{default:e}}export function __classPrivateFieldGet(e,r,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?e!==r||!o:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(e):o?o.value:r.get(e)}export function __classPrivateFieldSet(e,r,t,o,a){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?e!==r||!a:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?a.call(e,t):a?a.value=t:r.set(e,t),t}export function __classPrivateFieldIn(e,r){if(r===null||typeof r!="object"&&typeof r!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?r===e:e.has(r)}export function __addDisposableResource(e,r,t){if(r!=null){if(typeof r!="object"&&typeof r!="function")throw new TypeError("Object expected.");var o,a;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=r[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=r[Symbol.dispose],t&&(a=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");a&&(o=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),e.stack.push({value:r,dispose:o,async:t})}else t&&e.stack.push({async:!0});return r}var te=typeof SuppressedError=="function"?SuppressedError:function(e,r,t){var o=new Error(t);return o.name="SuppressedError",o.error=e,o.suppressed=r,o};export function __disposeResources(e){function r(o){e.error=e.hasError?new te(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}function t(){for(;e.stack.length;){var o=e.stack.pop();try{var a=o.dispose&&o.dispose.call(o.value);if(o.async)return Promise.resolve(a).then(t,function(n){return r(n),t()})}catch(n){r(n)}}if(e.hasError)throw e.error}return t()}export default{__extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__createBinding,__exportStar,__values,__read,__spread,__spreadArrays,__spreadArray,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault,__classPrivateFieldGet,__classPrivateFieldSet,__classPrivateFieldIn,__addDisposableResource,__disposeResources};var oe=Object.defineProperty,ne=(e,r)=>{for(var t in r)oe(e,t,{get:r[t],enumerable:!0})};delete process.env.ELECTRON_RUN_AS_NODE;import*as V from"path";import{fileURLToPath as ae}from"url";import*as S from"path";import*as G from"fs";import{fileURLToPath as ie}from"url";import{createRequire as se}from"node:module";var $=se(import.meta.url),h={exports:{}},ce=S.dirname(ie(import.meta.url));if(Error.stackTraceLimit=100,!process.env.VSCODE_HANDLES_SIGPIPE){let e=!1;process.on("SIGPIPE",()=>{e||(e=!0,console.error(new Error("Unexpected SIGPIPE")))})}function fe(){try{typeof process.env.VSCODE_CWD!="string"&&(process.env.VSCODE_CWD=process.cwd()),process.platform==="win32"&&process.chdir(S.dirname(process.execPath))}catch(e){console.error(e)}}fe(),h.exports.devInjectNodeModuleLookupPath=function(e){if(!process.env.VSCODE_DEV)return;if(!e)throw new Error("Missing injectPath");$("node:module").register("./bootstrap-import.js",{parentURL:import.meta.url,data:e})},h.exports.removeGlobalNodeJsModuleLookupPaths=function(){if(typeof process?.versions?.electron=="string")return;const e=$("module"),r=e.globalPaths,t=e._resolveLookupPaths;e._resolveLookupPaths=function(o,a){const n=t(o,a);if(Array.isArray(n)){let i=0;for(;i<n.length&&n[n.length-1-i]===r[r.length-1-i];)i++;return n.slice(0,n.length-i)}return n}},h.exports.configurePortable=function(e){const r=S.dirname(ce);function t(l){return process.env.VSCODE_DEV?r:process.platform==="darwin"?l.dirname(l.dirname(l.dirname(r))):l.dirname(l.dirname(r))}function o(l){if(process.env.VSCODE_PORTABLE)return process.env.VSCODE_PORTABLE;if(process.platform==="win32"||process.platform==="linux")return l.join(t(l),"data");const s=e.portable||`${e.applicationName}-portable-data`;return l.join(l.dirname(t(l)),s)}const a=o(S),n=!("target"in e)&&G.existsSync(a),i=S.join(a,"tmp"),f=n&&G.existsSync(i);return n?process.env.VSCODE_PORTABLE=a:delete process.env.VSCODE_PORTABLE,f&&(process.platform==="win32"?(process.env.TMP=i,process.env.TEMP=i):process.env.TMPDIR=i),{portableDataPath:a,isPortable:n}},h.exports.enableASARSupport=function(){},h.exports.fileUriFromPath=function(e,r){let t=e.replace(/\\/g,"/");t.length>0&&t.charAt(0)!=="/"&&(t=`/${t}`);let o;return r.isWindows&&t.startsWith("//")?o=encodeURI(`${r.scheme||"file"}:${t}`):o=encodeURI(`${r.scheme||"file"}://${r.fallbackAuthority||""}${t}`),o.replace(/#/g,"%23")};var ue=h.exports.devInjectNodeModuleLookupPath,Te=h.exports.removeGlobalNodeJsModuleLookupPaths,Re=h.exports.configurePortable,ke=h.exports.enableASARSupport,Le=h.exports.fileUriFromPath;import*as le from"path";import*as T from"fs";import{fileURLToPath as pe}from"url";import{createRequire as _e,register as de}from"node:module";import{createRequire as me}from"node:module";var J=me(import.meta.url),E={exports:{}},R={BUILD_INSERT_PRODUCT_CONFIGURATION:"BUILD_INSERT_PRODUCT_CONFIGURATION"};R.BUILD_INSERT_PRODUCT_CONFIGURATION&&(R=J("../product.json"));var k={"name":"Code","version":"1.94.0","private":true,"overrides":{"node-gyp-build":"4.8.1"},"type":"module"};k.BUILD_INSERT_PACKAGE_CONFIGURATION&&(k=J("../package.json")),E.exports.product=R,E.exports.pkg=k;var K=E.exports.product,ge=E.exports.pkg,B={};ne(B,{getMarks:()=>ye,mark:()=>P});var w={exports:{}};(function(){function r(n){const i=[];typeof n=="number"&&i.push("code/timeOrigin",n);function f(s){i.push(s,Date.now())}function l(){const s=[];for(let p=0;p<i.length;p+=2)s.push({name:i[p],startTime:i[p+1]});return s}return{mark:f,getMarks:l}}function t(){if(typeof performance=="object"&&typeof performance.mark=="function"&&!performance.nodeTiming)return typeof performance.timeOrigin!="number"&&!performance.timing?r():{mark(n){performance.mark(n)},getMarks(){let n=performance.timeOrigin;typeof n!="number"&&(n=performance.timing.navigationStart||performance.timing.redirectStart||performance.timing.fetchStart);const i=[{name:"code/timeOrigin",startTime:Math.round(n)}];for(const f of performance.getEntriesByType("mark"))i.push({name:f.name,startTime:Math.round(n+f.startTime)});return i}};if(typeof process=="object"){const n=performance?.timeOrigin;return r(n)}else return console.trace("perf-util loaded in UNKNOWN environment"),r()}function o(n){return n.MonacoPerformanceMarks||(n.MonacoPerformanceMarks=t()),n.MonacoPerformanceMarks}var a;typeof global=="object"?a=global:typeof self=="object"?a=self:a={},typeof w=="object"&&typeof w.exports=="object"?w.exports=o(a):(console.trace("perf-util defined in UNKNOWN context (neither requirejs or commonjs)"),a.perf=o(a))})();var P=w.exports.mark,ye=w.exports.getMarks,he=_e(import.meta.url),q={exports:{}},ve=le.dirname(pe(import.meta.url));if((process.env.ELECTRON_RUN_AS_NODE||process.versions.electron)&&de(`data:text/javascript;base64,${Buffer.from(`
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`).toString("base64")}`,import.meta.url),globalThis._VSCODE_PRODUCT_JSON={...K},process.env.VSCODE_DEV)try{const e=he("../product.overrides.json");globalThis._VSCODE_PRODUCT_JSON=Object.assign(globalThis._VSCODE_PRODUCT_JSON,e)}catch{}globalThis._VSCODE_PACKAGE_JSON={...ge},globalThis._VSCODE_FILE_ROOT=ve;var L=void 0;function Oe(){return L||(L=be()),L}async function be(){P("code/amd/willLoadNls");let e,r;if(process.env.VSCODE_NLS_CONFIG)try{e=JSON.parse(process.env.VSCODE_NLS_CONFIG),e?.languagePack?.messagesFile?r=e.languagePack.messagesFile:e?.defaultMessagesFile&&(r=e.defaultMessagesFile),globalThis._VSCODE_NLS_LANGUAGE=e?.resolvedLanguage}catch(t){console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${t}`)}if(!(process.env.VSCODE_DEV||!r)){try{globalThis._VSCODE_NLS_MESSAGES=JSON.parse((await T.promises.readFile(r)).toString())}catch(t){if(console.error(`Error reading NLS messages file ${r}: ${t}`),e?.languagePack?.corruptMarkerFile)try{await T.promises.writeFile(e.languagePack.corruptMarkerFile,"corrupted")}catch(o){console.error(`Error writing corrupted NLS marker file: ${o}`)}if(e?.defaultMessagesFile&&e.defaultMessagesFile!==r)try{globalThis._VSCODE_NLS_MESSAGES=JSON.parse((await T.promises.readFile(e.defaultMessagesFile)).toString())}catch(o){console.error(`Error reading default NLS messages file ${e.defaultMessagesFile}: ${o}`)}}return P("code/amd/didLoadNls"),e}}q.exports.load=function(e,r,t){e&&(e=`./${e}.js`,r=r||function(){},t=t||function(o){console.error(o)},Oe().then(()=>{P("code/fork/willLoadCode"),import(e).then(r,t)}))};var Se=q.exports.load;import*as we from"path";import*as Ee from"fs";var N={exports:{}};(function(){function r(t,o,a){async function n(c){try{return await o.promises.access(c),!0}catch{return!1}}function i(c){const _=new Date;return o.promises.utimes(c,_,_)}async function f(c){const _=t.join(c,"languagepacks.json");try{return JSON.parse(await o.promises.readFile(_,"utf-8"))}catch{return}}function l(c,_){try{for(;_;){if(c[_])return _;const u=_.lastIndexOf("-");if(u>0)_=_.substring(0,u);else return}}catch(u){console.error("Resolving language pack configuration failed.",u)}}function s(c,_,u){return a.mark("code/didGenerateNls"),{userLocale:c,osLocale:_,resolvedLanguage:"en",defaultMessagesFile:t.join(u,"nls.messages.json"),locale:c,availableLanguages:{}}}async function p({userLocale:c,osLocale:_,userDataPath:u,commit:m,nlsMetadataPath:d}){if(a.mark("code/willGenerateNls"),process.env.VSCODE_DEV||c==="pseudo"||c.startsWith("en")||!m||!u)return s(c,_,d);try{const g=await f(u);if(!g)return s(c,_,d);const y=l(g,c);if(!y)return s(c,_,d);const v=g[y],x=v?.translations?.vscode;if(!v||typeof v.hash!="string"||!v.translations||typeof x!="string"||!await n(x))return s(c,_,d);const I=`${v.hash}.${y}`,O=t.join(u,"clp",I),b=t.join(O,m),F=t.join(b,"nls.messages.json"),D=t.join(O,"tcf.json"),j=t.join(O,"corrupted.info");await n(j)&&await o.promises.rm(O,{recursive:!0,force:!0,maxRetries:3});const M={userLocale:c,osLocale:_,resolvedLanguage:y,defaultMessagesFile:t.join(d,"nls.messages.json"),languagePack:{translationsConfigFile:D,messagesFile:F,corruptMarkerFile:j},locale:c,availableLanguages:{"*":y},_languagePackId:I,_languagePackSupport:!0,_translationsConfigFile:D,_cacheRoot:O,_resolvedLanguagePackCoreLocation:b,_corruptedFile:j};if(await n(b))return i(b).catch(()=>{}),a.mark("code/didGenerateNls"),M;const[,H,Q,z]=await Promise.all([o.promises.mkdir(b,{recursive:!0}),JSON.parse(await o.promises.readFile(t.join(d,"nls.keys.json"),"utf-8")),JSON.parse(await o.promises.readFile(t.join(d,"nls.messages.json"),"utf-8")),JSON.parse(await o.promises.readFile(x,"utf-8"))]),A=[];let U=0;for(const[X,Y]of H){const Z=z.contents[X];for(const ee of Y)A.push(Z?.[ee]||Q[U]),U++}return await Promise.all([o.promises.writeFile(F,JSON.stringify(A),"utf-8"),o.promises.writeFile(D,JSON.stringify(v.translations),"utf-8")]),a.mark("code/didGenerateNls"),M}catch(g){console.error("Generating translation files failed.",g)}return s(c,_,d)}return{resolveNLSConfiguration:p}}if(typeof N=="object"&&typeof N.exports=="object")N.exports=r(we,Ee,B);else throw new Error("vs/base/node/nls defined in UNKNOWN context (neither requirejs or commonjs)")})();var Pe=N.exports.resolveNLSConfiguration,W=V.dirname(ae(import.meta.url));async function Ne(){const e=await Pe({userLocale:"en",osLocale:"en",commit:K.commit,userDataPath:"",nlsMetadataPath:W});process.env.VSCODE_NLS_CONFIG=JSON.stringify(e),process.env.VSCODE_DEV?(process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH=process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH||V.join(W,"..","remote","node_modules"),ue(process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH)):delete process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH,Se("vs/server/node/server.cli")}Ne();

//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/d78a74bcdfad14d5d3b1b782f87255d802b57511/core/server-cli.js.map
