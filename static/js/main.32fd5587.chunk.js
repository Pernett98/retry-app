(this["webpackJsonpretry-app"]=this["webpackJsonpretry-app"]||[]).push([[0],{193:function(e,t,r){},194:function(e,t,r){},280:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(43),i=r.n(c),s=(r(192),r(193),r(194),r(109)),u=r(282),o=r(284),l=r(286),j=r(74),b=r(24),f=r.n(b),O=r(101),p=r(32),d=r(288),m=r(77),g=r(78),h=r(26),x=r(68),k=r(119),y=r(147),v=r(172),C=r(146),S=r(171),w=r(110),F=r(173),I=function(e){var t=e.ref,r=e.check;return Object(h.flow)((function(e){return console.log("s",{s:e,ref:t}),e}),(function(e){return{result:e,isClosed:T(t)()}}),(function(e){var t=e.isClosed,n=e.result;return t&&r(n)}))},T=function(e){return Object(h.pipe)(e.breakerState.read,y.map((function(e){return"Closed"===e.tag})))},z=function(e){return m.isLeft(e)},B=function(e){return e.ok?e:Promise.reject(new Error(e.status.toString()))},R=function(e){var t=k.newIORef(Object(C.breakerClosed)(0))(),r={maxTime:e.maxTime,delay:e.delay,limit:e.maxBreakerFailures};return function(n,a){return function(t){var n=t.request,c=t.breakerState,i=Object(S.circuitBreaker)()(e)({request:n,breakerState:c}),s=Object(p.a)(i,2),u=s[0],o=s[1],l=function(e){var t=e.maxTime,r=e.delay,n=e.limit;return Object(w.a)(t,w.d.concat(Object(w.b)(r),Object(w.c)(n)))}(r);return[Object(F.retrying)(l,(function(e){return Object(h.pipe)(function(e){return g.rightIO(Object(v.log)(Object(h.pipe)(e.previousDelay,x.map((function(e){return"retrying in ".concat(e," milliseconds...")})),x.getOrElse((function(){return"first attempt..."})))))}(e),g.apSecond(u))}),I({check:a,ref:o})),o]}({breakerState:t,request:n})}}({maxTime:2e4,delay:400,maxBreakerFailures:3,resetTimeoutSecs:10,breakerDescription:"Repository Client failed!"}),q=function(){return fetch("/retry-app/repositories").then(B).then((function(e){return e.json()}))},E=function(){return{handleOnFinish:Object(n.useCallback)((function(e){return function(e){return fetch("/retry-app/config?failures=".concat(e))}(e.failures)}),[])}},D=r(25),J={labelCol:{span:8},wrapperCol:{span:16}},L={wrapperCol:{offset:8,span:16}},N=function(){var e=E().handleOnFinish;return Object(D.jsxs)("div",{children:[Object(D.jsx)(u.a,{orientation:"center",children:"Configure Failures"}),Object(D.jsxs)(o.a,Object(s.a)(Object(s.a)({},J),{},{initialValues:{failures:3},size:"large",onFinish:e,children:[Object(D.jsx)(o.a.Item,{name:"failures",label:"Failures",children:Object(D.jsx)(l.a,{min:0,max:10})}),Object(D.jsx)(o.a.Item,Object(s.a)(Object(s.a)({},L),{},{children:Object(D.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Config"})}))]}))]})},P=function(){var e=Object(n.useState)(d.c),t=Object(p.a)(e,2),r=t[0],a=t[1];return{repositories:r,getRepos:Object(n.useCallback)((function(){a(d.d),Object(h.pipe)(R(q,z),(function(e){var t=Object(p.a)(e,2),r=t[0];return t[1],r}),g.fold((function(e){return Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.abrupt("return",Object(d.a)(e));case 2:case"end":return t.stop()}}),t)})))}),(function(e){return Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(d.e)(e));case 1:case"end":return t.stop()}}),t)})))})))().then(a)}),[])}},M=r(283),V=r(287),_=r(285),A=[{title:"Name",dataIndex:"name",key:"name"},{title:"Language",dataIndex:"language",key:"language"},{title:"Starts",dataIndex:"starts",key:"starts"}],G=Object(d.b)((function(){return Object(D.jsx)(D.Fragment,{})}),(function(){return Object(D.jsx)(V.a,{active:!0})}),(function(e){return console.log({error:e}),Object(D.jsx)(_.a,{type:"error",message:e.message})}),(function(e){return Object(D.jsx)(M.a,{dataSource:e,columns:A})})),H=function(){var e=P(),t=e.repositories,r=e.getRepos;return Object(D.jsxs)("div",{children:[Object(D.jsx)(j.a,{size:"large",type:"primary",onClick:r,children:"Search"}),G(t)]})};var K=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(N,{}),Object(D.jsx)(u.a,{}),Object(D.jsx)(H,{})]})},Q=r(64),U=r(149),W=r(50),X=r(75),Y=Object(X.recordOf)({name:Object(X.string)(),stargazers_count:Object(X.int)({min:0,max:100}),language:Object(X.string)()}),Z=Object(X.generateSample)({count:30,seed:Object(X.mkSeed)(1998),size:25}),$=3,ee=[W.c.get("/config",(function(e,t,r){return $=Number(e.url.searchParams.get("failures"))||3,t(r.status(200),r.json({message:"configured"}))})),W.c.get("/repositories",(function(e,t,r){var n=$>0?t(r.status(500),r.json({failureCounter:$})):t(r.status(200),r.json(Z(Y)));return $>=0&&$--,n}))];U.a.apply(void 0,Object(Q.a)(ee)).start().catch((function(e){return console.error(e)})),i.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(K,{})}),document.getElementById("root"))}},[[280,1,2]]]);
//# sourceMappingURL=main.32fd5587.chunk.js.map