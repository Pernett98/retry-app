(this["webpackJsonpretry-app"]=this["webpackJsonpretry-app"]||[]).push([[0],{192:function(e,t,r){},193:function(e,t,r){},279:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(43),i=r.n(c),s=(r(191),r(192),r(193),r(65)),u=r(281),o=r(283),j=r(285),l=r(75),b=r(32),f=r(287),O=r(78),d=r(79),p=r(101),m=r(25),g=r(69),h=r(119),x=r(147),k=r(146),y=r(169),v=r(110),S=r(171),C=r(170);function F(e){return function(t){return C.log("".concat(e,": ").concat("".concat(t)))}}var w=F("circuitBreaker"),I=F("exponentialBackoff"),T=function(e){var t=e.ref,r=e.check;return Object(m.flow)((function(e){return{result:e,isClosed:B(t)()}}),(function(e){var t=e.isClosed,n=e.result;return t&&r(n)}),(function(e){return w("state is: ".concat(t.breakerState.read().tag))(),I("should retry? ".concat(e))(),e}))},B=function(e){return Object(m.pipe)(e.breakerState.read,x.map((function(e){return"Closed"===e.tag})))},R=function(e){return O.isLeft(e)},q=function(e){return e.ok?e:Promise.reject(new Error("server failed with status: ".concat(e.status.toString())))},z=function(e){var t=h.newIORef(Object(k.breakerClosed)(0))(),r={maxTime:e.maxTime,delay:e.delay,limit:e.maxBreakerFailures};return function(n,a){return function(t){var n=t.request,c=t.breakerState,i=Object(y.circuitBreaker)()(e)({request:n,breakerState:c}),s=Object(b.a)(i,2),u=s[0],o=s[1],j=function(e){var t=e.maxTime,r=e.delay,n=e.limit;return Object(v.a)(t,v.d.concat(Object(v.b)(r),Object(v.c)(n)))}(r);return[Object(S.retrying)(j,(function(e){return Object(m.pipe)(function(e){return d.rightIO(I(Object(m.pipe)(e.previousDelay,g.map((function(e){return"retrying in ".concat(e," milliseconds...")})),g.getOrElse((function(){return"first attempt..."})))))}(e),d.apSecond(u))}),T({check:a,ref:o})),o]}({breakerState:t,request:n})}}({maxTime:2e4,delay:400,maxBreakerFailures:3,resetTimeoutSecs:10,breakerDescription:"The service is Unavailable"}),E=function(){return fetch("repositories").then(q).then((function(e){return e.json()}))},D=function(){return{handleOnFinish:Object(n.useCallback)((function(e){return function(e){return fetch("config?failures=".concat(e))}(e.failures)}),[])}},J=r(24),L={labelCol:{span:8},wrapperCol:{span:16}},N={wrapperCol:{offset:8,span:16}},P=function(){var e=D().handleOnFinish;return Object(J.jsxs)("div",{children:[Object(J.jsx)(u.a,{orientation:"center",children:"Configure Failures"}),Object(J.jsxs)(o.a,Object(s.a)(Object(s.a)({},L),{},{initialValues:{failures:3},size:"large",onFinish:e,children:[Object(J.jsx)(o.a.Item,{name:"failures",label:"Failures",children:Object(J.jsx)(j.a,{min:0,max:10})}),Object(J.jsx)(o.a.Item,Object(s.a)(Object(s.a)({},N),{},{children:Object(J.jsx)(l.a,{type:"primary",htmlType:"submit",children:"Config"})}))]}))]})},M=function(){var e=Object(n.useState)(f.c),t=Object(b.a)(e,2),r=t[0],a=t[1];return{repositories:r,getRepos:Object(n.useCallback)((function(){a(f.d),Object(m.pipe)(z(E,R),(function(e){return Object(b.a)(e,1)[0]}),d.fold((function(e){return p.of(Object(f.a)(e))}),(function(e){return p.of(Object(f.e)(e))})))().then(a)}),[])}},U=r(282),V=r(286),A=r(284),G=[{title:"Name",dataIndex:"name",key:"name"},{title:"Language",dataIndex:"language",key:"language"},{title:"Starts",dataIndex:"starts",key:"starts"}],H=Object(f.b)((function(){return Object(J.jsx)(J.Fragment,{})}),(function(){return Object(J.jsx)(V.a,{active:!0})}),(function(e){return Object(J.jsx)(A.a,{type:"error",message:e.message})}),(function(e){return Object(J.jsx)(U.a,{dataSource:e.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{key:t})})),columns:G})})),K=function(){var e=M(),t=e.repositories,r=e.getRepos;return Object(J.jsxs)("div",{children:[Object(J.jsx)(u.a,{children:"Repositories"}),Object(J.jsx)(l.a,{size:"large",type:"primary",onClick:r,children:"Search"}),H(t)]})};var Q=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(P,{}),Object(J.jsx)(K,{})]})},W=r(64),X=r(149),Y=r(50),Z=r(76),$=Object(Z.recordOf)({name:Object(Z.string)(),starts:Object(Z.int)({min:0,max:100}),language:Object(Z.string)()}),_=Object(Z.generateSample)({count:30,seed:Object(Z.mkSeed)(1998),size:25}),ee=3,te=[Y.c.get("/config",(function(e,t,r){return ee=Number(e.url.searchParams.get("failures"))||3,t(r.status(200),r.json({message:"configured"}))})),Y.c.get("/repositories",(function(e,t,r){var n=ee>0?t(r.status(500),r.json({failureCounter:ee})):t(r.status(200),r.json(_($)));return ee>=0&&ee--,n}))];X.a.apply(void 0,Object(W.a)(te)).start().catch((function(e){return console.error(e)})),i.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(Q,{})}),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.fad7a52a.chunk.js.map