// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bTHtU":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"h7u1C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("./ImageMasker/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let masker;
// 将函数挂载到window对象
window.handleSettingChange = function(key, value) {
    if (masker) masker[key] = value;
};
window.handleAction = function(action) {
    return __awaiter(this, void 0, void 0, function*() {
        if (masker) {
            if (action !== "preview") masker[action]();
            else {
                const dataURL = yield masker.toDataURL();
                const preview = document.getElementById("masker-preview");
                if (preview) {
                    preview.innerHTML = "";
                    const img = new Image();
                    img.src = dataURL;
                    preview.appendChild(img);
                }
            }
        }
    });
};
document.addEventListener("DOMContentLoaded", ()=>{
    const imageInput = document.getElementById("imageInput");
    const uploadArea = document.querySelector(".upload-area");
    const actionsBox = document.getElementById("masker-actions-box");
    // 显示控制面板
    function showActionsBox() {
        if (actionsBox) actionsBox.style.display = "initial";
    }
    // 监听设置变更
    actionsBox === null || actionsBox === void 0 || actionsBox.addEventListener("change", (e)=>{
        const target = e.target;
        const setting = target.dataset.setting;
        if (setting && masker) masker[setting] = target.value;
    });
    // 处理文件选择
    imageInput.addEventListener("change", handleImageSelect);
    // 处理拖拽上传
    uploadArea.addEventListener("dragover", (e)=>{
        e.preventDefault();
        uploadArea.style.borderColor = "#000";
    });
    uploadArea.addEventListener("dragleave", ()=>{
        uploadArea.style.borderColor = "#ccc";
    });
    uploadArea.addEventListener("drop", (e)=>{
        var _a;
        e.preventDefault();
        uploadArea.style.borderColor = "#ccc";
        const files = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files;
        if (files && files[0]) handleImage(files[0]);
    });
    function handleImageSelect(e) {
        const target = e.target;
        const files = target.files;
        if (files && files[0]) handleImage(files[0]);
    }
    function handleImage(file) {
        if (!file.type.startsWith("image/")) {
            alert("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF01");
            return;
        }
        const reader = new FileReader();
        reader.onload = (e)=>{
            var _a, _b;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                const imageString = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
                console.log(imageString);
                const image = new Image();
                image.src = imageString;
                const options = {
                    parentElement: "masker",
                    image,
                    padding: "4px"
                };
                (0, _indexDefault.default)(options).then((res)=>{
                    masker = res;
                    showActionsBox();
                });
            }
        };
        reader.readAsDataURL(file);
    }
});

},{"./ImageMasker/index":"46V6j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46V6j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * 图形标注工具器
 *
 * 在指定的div中使用canvas绘制指定图片，然后用户可以在图片上使用自由涂抹、矩形、椭圆三种方式进行区域标注
 * 可以使用橡皮擦消除涂抹内容
 * 并返回最终的画布内容。该工具用于多模态模型图生图的局部区域修改标注。
 *
 * @param ImageMaskerTypes.InitParams options - 配置参数
 * @return ImageMaskerTypes.Instance - 绘图对象
 */ function initializeImageMasker(options) {
    return __awaiter(this, void 0, void 0, function*() {
        /** 是否正在绘制，根据鼠标按下/抬起/移动事件判断 */ let isDrawing = false;
        const eraseColor = "rgba(0,0,0,1)";
        /** 运行参数 **/ const settings = {
            mode: "draw",
            shape: "free",
            brushSize: 5,
            color: "rgba(255, 0, 0, 1)",
            width: 0,
            height: 0,
            undoAble: false,
            redoAble: false,
            undo,
            redo,
            toDataURL
        };
        const undoStack = []; // 撤销栈
        const redoStack = []; // 重做栈
        /** 撤销 */ function undo() {
            if (undoStack.length > 1) {
                // 将当前状态推入重做栈
                redoStack.push(undoStack.pop());
                // 从撤销栈中弹出上一个状态并恢复
                const imageData = undoStack[undoStack.length - 1];
                restoreImageData(imageData);
                // 状态管理
                settings.redoAble = true;
                settings.undoAble = undoStack.length > 1;
            }
        }
        /** 重做 */ function redo() {
            if (redoStack.length > 0) {
                // 从重做栈中弹出当前状态并恢复
                const imageData = redoStack.pop();
                // 将当前状态推入撤销栈
                undoStack.push(imageData);
                restoreImageData(imageData);
                // 状态管理
                settings.redoAble = redoStack.length > 0;
                settings.undoAble = true;
            }
        }
        const canvasDocumentMouseDown = (event)=>{
            if (!settings.canvas || !settings.ctx) return;
            if (event.button === 0) {
                isDrawing = true;
                startX = event.clientX - settings.canvas.getBoundingClientRect().left;
                startY = event.clientY - settings.canvas.getBoundingClientRect().top;
                // 根据模式选择不同的绘制函数
                switch(settings.shape){
                    case "free":
                        settings.ctx.beginPath();
                        settings.ctx.moveTo(startX, startY);
                        break;
                    case "rect":
                        drawRect(event);
                        break;
                    case "oval":
                        drawOval(event);
                        break;
                }
            }
        };
        const canvasDocumentMouseMove = (event)=>{
            if (isDrawing) switch(settings.shape){
                case "free":
                    drawFree(event);
                    break;
                case "rect":
                    drawRect(event);
                    break;
                case "oval":
                    drawOval(event);
                    break;
            }
        };
        const canvasDocumentMouseUp = (event)=>{
            if (!settings.canvas || !settings.ctx) return;
            if (event.button === 0) {
                isDrawing = false;
                settings.imageData = settings.ctx.getImageData(0, 0, settings.width, settings.height);
                // 清空重做栈
                redoStack.length = 0;
                // 保存当前画布状态到撤销栈
                undoStack.push(settings.imageData);
                // 状态管理
                settings.redoAble = false;
                settings.undoAble = true;
            }
        };
        /**
         * 获取当前画布内容
         * 首先保存canvas状态，读取当前画布内容。
         * 然后先绘制原始图片，再绘制刚才读取的画布内容
         * 或者此时的画布内容，然后恢复canvas状态
         */ function toDataURL() {
            return __awaiter(this, void 0, void 0, function*() {
                const promise = new Promise((resolve, reject)=>{
                    if (!settings.canvas || !settings.ctx || !settings.originalImage) {
                        reject(new Error("Canvas or ctx or originalImage is not defined"));
                        return;
                    }
                    // 保存canvas状态
                    settings.ctx.save();
                    // 读取当前画布内容
                    const imageData = settings.canvas.toDataURL();
                    const tmpImage = new Image();
                    tmpImage.onload = ()=>{
                        // 绘制原始图片
                        settings.ctx.drawImage(settings.originalImage, 0, 0, settings.width, settings.height);
                        // 绘制刚才读取的画布内容
                        settings.ctx.drawImage(tmpImage, 0, 0);
                        // 读取当前画布内容
                        const result = settings.canvas.toDataURL();
                        // 恢复canvas状态
                        settings.ctx.restore();
                        resolve(result);
                    };
                    tmpImage.src = imageData;
                });
                return promise;
            });
        }
        let startX, startY;
        /** 恢复画布状态 */ function restoreImageData(imageData) {
            if (imageData) {
                settings.imageData = imageData;
                settings.ctx.putImageData(imageData, 0, 0);
            }
        }
        /** 绘制自由绘画 */ function drawFree(event) {
            if (!settings.canvas || !settings.ctx) return;
            // 保存当前的globalCompositeOperation
            const currentCompositeOperation = settings.ctx.globalCompositeOperation;
            if (settings.mode === "erase") // 设置为擦除模式
            settings.ctx.globalCompositeOperation = "destination-out";
            const rect = settings.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            settings.ctx.lineTo(x, y);
            settings.ctx.strokeStyle = settings.mode === "erase" ? eraseColor : settings.color;
            settings.ctx.lineWidth = settings.brushSize;
            settings.ctx.stroke();
            if (settings.mode === "erase") // 恢复原来的globalCompositeOperation
            settings.ctx.globalCompositeOperation = currentCompositeOperation;
        }
        /** 绘制矩形 */ function drawRect(event) {
            if (!settings.canvas || !settings.ctx || !settings.imageData) return;
            // 保存当前的globalCompositeOperation
            const currentCompositeOperation = settings.ctx.globalCompositeOperation;
            if (settings.mode === "erase") // 设置为擦除模式
            settings.ctx.globalCompositeOperation = "destination-out";
            restoreImageData(settings.imageData);
            const rect = settings.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            settings.ctx.fillStyle = settings.mode === "erase" ? eraseColor : settings.color;
            const width = x - startX;
            const height = y - startY;
            settings.ctx.fillRect(startX, startY, width, height);
            if (settings.mode === "erase") // 恢复原来的globalCompositeOperation
            settings.ctx.globalCompositeOperation = currentCompositeOperation;
        }
        /** 绘制椭圆 */ function drawOval(event) {
            if (!settings.canvas || !settings.ctx || !settings.imageData) return;
            restoreImageData(settings.imageData);
            // 保存当前的globalCompositeOperation
            const currentCompositeOperation = settings.ctx.globalCompositeOperation;
            if (settings.mode === "erase") // 设置为擦除模式
            settings.ctx.globalCompositeOperation = "destination-out";
            const rect = settings.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            settings.ctx.fillStyle = settings.mode === "erase" ? eraseColor : settings.color;
            settings.ctx.beginPath();
            settings.ctx.ellipse((startX + x) / 2, (startY + y) / 2, Math.abs(x - startX) / 2, Math.abs(y - startY) / 2, 0, 0, Math.PI * 2);
            settings.ctx.fill();
            if (settings.mode === "erase") // 恢复原来的globalCompositeOperation
            settings.ctx.globalCompositeOperation = currentCompositeOperation;
        }
        /** 初始化容器事件 */ function initContainerEvents(container) {
            container.addEventListener("mousedown", (event)=>{
                event.stopPropagation();
            });
            container.addEventListener("mousemove", (event)=>{
                event.stopPropagation();
            });
            container.addEventListener("mouseup", (event)=>{
                event.stopPropagation();
            });
            container.addEventListener("click", (event)=>{
                event.stopPropagation();
            });
            container.addEventListener("mousedown", canvasDocumentMouseDown);
            container.addEventListener("mousemove", canvasDocumentMouseMove);
            container.addEventListener("mouseup", canvasDocumentMouseUp);
        }
        /** 创建一个canvas并绘制图片，可以指定最大高度或宽度*/ function getCanvasImage(container, img, maxWidth, maxHeight) {
            return __awaiter(this, void 0, void 0, function*() {
                // 计算缩放比例
                const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
                const newWidth = img.width * scale;
                const newHeight = img.height * scale;
                // 创建canvas
                const canvas = document.createElement("canvas");
                canvas.style.backgroundImage = `url(${img.src})`;
                canvas.style.backgroundSize = "100% 100%";
                canvas.width = newWidth;
                canvas.height = newHeight;
                container.appendChild(canvas);
                // 获取上下文时设置willReadFrequently为true
                const ctx = canvas.getContext("2d", {
                    willReadFrequently: true
                });
                container.appendChild(canvas);
                // 初始化容器事件
                initContainerEvents(container);
                return {
                    canvas,
                    ctx,
                    width: newWidth,
                    height: newHeight,
                    originalImage: img
                };
            });
        }
        /** 获取元素的尺寸 */ function getContentSize(element) {
            // 获取元素的边界矩形
            const rect = element.getBoundingClientRect();
            // 获取元素的所有计算后的样式
            const style = window.getComputedStyle(element);
            // 从计算后的样式中获取padding的值并转换为浮点数
            const paddingLeft = parseFloat(style.paddingLeft || "0");
            const paddingRight = parseFloat(style.paddingRight || "0");
            const paddingTop = parseFloat(style.paddingTop || "0");
            const paddingBottom = parseFloat(style.paddingBottom || "0");
            // 计算内容区域的宽度和高度
            const contentWidth = rect.width - (paddingLeft + paddingRight);
            const contentHeight = rect.height - (paddingTop + paddingBottom);
            return {
                width: contentWidth,
                height: contentHeight
            };
        }
        /** 如果parentElement是dom，则直��使用，否则使用id查找dom */ const parentElement = options.parentElement instanceof HTMLElement ? options.parentElement : document.getElementById(options.parentElement);
        if (!parentElement) throw new Error("Please provide a valid parent element");
        /** 清理parentElement的子元素 */ parentElement.innerHTML = "";
        /** 基于parentElement创建一个容器，与父元素同宽同高 */ const container = document.createElement("div");
        container.style.background = options.background || "#000";
        container.style.padding = options.padding || "4px";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.width = parentElement.clientWidth + "px";
        container.style.height = parentElement.clientHeight + "px";
        container.style.flex = "1";
        parentElement.appendChild(container);
        const { width, height } = getContentSize(container);
        /** 创建Promise对象 */ return new Promise((resolve)=>{
            /** 计算图片大小，按画布大小等比例缩放，并计算居中显示时左上角的位置 */ options.image.onload = function() {
                return __awaiter(this, void 0, void 0, function*() {
                    const result = yield getCanvasImage(container, options.image, width, height);
                    settings.canvas = result.canvas; // 将canvas赋值给外部变量
                    settings.ctx = result.ctx; // 将ctx赋值给外部变量
                    settings.width = result.width; // 将宽度赋值给外部变量
                    settings.height = result.height; // 将高度赋值给外部变量
                    settings.originalImage = result.originalImage; // 将原始图片赋值给外部变量
                    // 保存初始状态
                    settings.imageData = settings.ctx.getImageData(0, 0, settings.width, settings.height);
                    undoStack.push(settings.imageData);
                    resolve(settings);
                });
            };
        });
    });
}
exports.default = initializeImageMasker;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["bTHtU","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
