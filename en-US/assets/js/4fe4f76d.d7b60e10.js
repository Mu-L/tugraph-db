"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29261],{98997:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>t,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var l=r(74848),a=r(28453);const i={},s="MATCH",d={id:"developer-manual/interface/query/gql/clauses/match",title:"MATCH",description:"MATCH\u5b50\u53e5\u5f0f\u662fGQL\u6700\u57fa\u7840\u7684\u5b50\u53e5\uff0c\u51e0\u4e4e\u6240\u6709\u67e5\u8be2\u90fd\u662f\u901a\u8fc7 MATCH\u5c55\u5f00\u3002",source:"@site/versions/version-4.0.1/zh-CN/source/5.developer-manual/6.interface/1.query/2.gql/2.clauses/1.match.md",sourceDirName:"5.developer-manual/6.interface/1.query/2.gql/2.clauses",slug:"/developer-manual/interface/query/gql/clauses/match",permalink:"/tugraph-db/en-US/zh/4.0.1/developer-manual/interface/query/gql/clauses/match",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ISO GQL \u7b80\u4ecb",permalink:"/tugraph-db/en-US/zh/4.0.1/developer-manual/interface/query/gql/intro"},next:{title:"OPTIONAL MATCH",permalink:"/tugraph-db/en-US/zh/4.0.1/developer-manual/interface/query/gql/clauses/optional_match"}},c={},h=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u70b9\u67e5\u8be2",id:"\u70b9\u67e5\u8be2",level:3},{value:"\u67e5\u8be2\u6240\u6709\u70b9",id:"\u67e5\u8be2\u6240\u6709\u70b9",level:4},{value:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9",id:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9",level:4},{value:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9",id:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9",level:4},{value:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9",id:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9",level:4},{value:"\u8fb9\u67e5\u8be2",id:"\u8fb9\u67e5\u8be2",level:3},{value:"\u51fa\u8fb9\u5339\u914d",id:"\u51fa\u8fb9\u5339\u914d",level:4},{value:"\u5165\u8fb9\u5339\u914d",id:"\u5165\u8fb9\u5339\u914d",level:4},{value:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d",id:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d",level:4},{value:"\u8def\u5f84\u5339\u914d",id:"\u8def\u5f84\u5339\u914d",level:3},{value:"\u4e0d\u5b9a\u8df3\u67e5\u8be2",id:"\u4e0d\u5b9a\u8df3\u67e5\u8be2",level:4}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"match",children:"MATCH"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MATCH"}),"\u5b50\u53e5\u5f0f\u662fGQL\u6700\u57fa\u7840\u7684\u5b50\u53e5\uff0c\u51e0\u4e4e\u6240\u6709\u67e5\u8be2\u90fd\u662f\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"MATCH"}),"\u5c55\u5f00\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MATCH"}),"\u5b50\u53e5\u7528\u4e8e\u6307\u5b9a\u5728\u56fe\u4e2d\u641c\u7d22\u7684\u5339\u914d\u6a21\u5f0f\uff0c\u7528\u6765\u5339\u914d\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u70b9\u6216\u8005\u8def\u5f84\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,l.jsx)(n.h3,{id:"\u70b9\u67e5\u8be2",children:"\u70b9\u67e5\u8be2"}),"\n",(0,l.jsx)(n.h4,{id:"\u67e5\u8be2\u6240\u6709\u70b9",children:"\u67e5\u8be2\u6240\u6709\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n)\nRETURN n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9",children:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9",children:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person{name:'Michael Redgrave'})\nRETURN n.birthyear\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.birthyear":1908}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9",children:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear > 1910)\nRETURN n.name LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.name":"Christopher Nolan"},{"n.name":"Corin Redgrave"}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fb9\u67e5\u8be2",children:"\u8fb9\u67e5\u8be2"}),"\n",(0,l.jsx)(n.h4,{id:"\u51fa\u8fb9\u5339\u914d",children:"\u51fa\u8fb9\u5339\u914d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear = 1970)-[e]->(m)\nRETURN n.name, label(e), m.name\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"label(e)":"BORN_IN","m.name":"London","n.name":"Christopher Nolan"},{"label(e)":"DIRECTED","m.name":null,"n.name":"Christopher Nolan"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u5165\u8fb9\u5339\u914d",children:"\u5165\u8fb9\u5339\u914d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear = 1939)<-[e]-(m)\nRETURN n.name, label(e), m.name\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"label(e)":"HAS_CHILD","m.name":"Rachel Kempson","n.name":"Corin Redgrave"},{"label(e)":"HAS_CHILD","m.name":"Michael Redgrave","n.name":"Corin Redgrave"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d",children:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)-[e:BORN_IN WHERE e.weight > 20]->(m)\nRETURN n.name, e.weight, m.name\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"e.weight":20.549999237060547,"m.name":"New York","n.name":"John Williams"},{"e.weight":20.6200008392334,"m.name":"New York","n.name":"Lindsay Lohan"}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u8def\u5f84\u5339\u914d",children:"\u8def\u5f84\u5339\u914d"}),"\n",(0,l.jsx)(n.h4,{id:"\u4e0d\u5b9a\u8df3\u67e5\u8be2",children:"\u4e0d\u5b9a\u8df3\u67e5\u8be2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)-[e]->{2,3}(m:Person)\nRETURN m.name LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"m.name":"Liam Neeson"},{"m.name":"Natasha Richardson"}]\n'})})]})}function t(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var l=r(96540);const a={},i=l.createContext(a);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);