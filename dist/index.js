var P=Object.create,c=Object.defineProperty,x=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,w=Object.getOwnPropertyNames,E=Object.getOwnPropertyDescriptor;var W=o=>c(o,"__esModule",{value:!0});var O=(o,e,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of w(e))!D.call(o,t)&&t!=="default"&&c(o,t,{get:()=>e[t],enumerable:!(l=E(e,t))||l.enumerable});return o},p=o=>O(W(c(o!=null?P(x(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);var a=p(require("chalk")),u=p(require("del")),s=p(require("path")),g=class{constructor(e){let l={info:!0,keepGeneratedAssets:!0,exclude:[],include:["**"],allowExternal:!1};this.options={...l,...e}}apply(e){let l=e.options.output.path,t=r=>{if(r.hasErrors()){console.log(),console.log(`${a.default.red("Del Webpack Plugin stopped according to module failed.")}`);return}let m=this.options.allowExternal,d=r.toJson().assets.map(n=>n.name),f=this.options.keepGeneratedAssets?d.map(n=>s.default.join(l,n)):[],h=this.options.include.map(n=>s.default.join(l,n)),k=this.options.exclude.map(n=>s.default.join(l,n)),b=[l,...k,...f];(0,u.default)(h,{force:m,ignore:b}).then(n=>{this.options.info&&(console.log(),console.log("===== Del Webpack Plugin ==="),console.log(`${a.default.green("Added files:")}`),d.map(i=>console.log(i)),console.log(),console.log(`${a.default.red("Deleted files:")}`),n.map(i=>console.log(s.default.basename(i))),console.log("============================"),console.log())})};e.hooks.done.tap("del-webpack-plugin",t)}};module.exports=g;
