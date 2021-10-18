"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23896],{71388:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return g}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],u={description:"Store contains a key-value cache for the Stronghold Engine.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","store","key:value","data"]},c="Structure: Engine::Store",s={unversionedId:"structure/engine/store",id:"structure/engine/store",isDocsHomePage:!1,title:"Structure: Engine::Store",description:"Store contains a key-value cache for the Stronghold Engine.",source:"@site/external/stronghold.rs/documentation/docs/structure/engine/store.md",sourceDirName:"structure/engine",slug:"/structure/engine/store",permalink:"/stronghold.rs/structure/engine/store",tags:[],version:"current",frontMatter:{description:"Store contains a key-value cache for the Stronghold Engine.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","store","key:value","data"]},sidebar:"mySidebar",previous:{title:"Structure: Engine::Vault",permalink:"/stronghold.rs/structure/engine/vault"},next:{title:"Structure: Runtime",permalink:"/stronghold.rs/structure/engine/runtime"}},l=[],p={toc:l};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-enginestore"},"Structure: Engine::Store"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/store"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.rs/stronghold_engine/engine/latest/store/index.html"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://crates.io/crates/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null})))))),(0,o.kt)("p",null,(0,o.kt)("h2",{parentName:"p"},"Stronghold Store"),(0,o.kt)("p",{parentName:"p"},"This crate contains a key/value cache for the Stronghold Engine. Data is stored in key-value pairs and an expiration timestamp can be set. The data is stored in a structured format and can be quickly retrieved at will. Along with the Vault, this crate is used to store general unencrypted data.  The data is written into the snapshot like with the vault in an encrypted format. ")))}g.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=s(r),d=a,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);