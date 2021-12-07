"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[667],{8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},6396:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7462),l=t(7294),r=t(2389),u=t(9443);var i=function(){var e=(0,l.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(9521),s=t(6010),c="tabItem_vU9c";function p(e){var a,t,n,r=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:v.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),b=(0,o.lx)(k,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(a=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=v[0])?void 0:n.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),T=g.tabGroupChoices,N=g.setTabGroupChoices,y=(0,l.useState)(h),I=y[0],w=y[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var Z=T[m];null!=Z&&Z!==I&&k.some((function(e){return e.value===Z}))&&w(Z)}var P=function(e){var a=e.currentTarget,t=x.indexOf(a),n=k[t].value;n!==I&&(E(a),w(n),null!=m&&N(m,n))},C=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;t=x[l]||x[x.length-1]}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var a=e.value,t=e.label;return l.createElement("li",{role:"tab",tabIndex:I===a?0:-1,"aria-selected":I===a,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":I===a}),key:a,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:P,onClick:P},null!=t?t:a)}))),r?(0,l.cloneElement)(v.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==I})}))))}function d(e){var a=(0,r.Z)();return l.createElement(p,(0,n.Z)({key:String(a)},e))}},4271:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),u=t(6396),i=t(8215),o=["components"],s={sidebar_position:2},c="Instalaci\xf3n",p={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Instalaci\xf3n",description:"Instala el cliente",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/install",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/intro"},next:{title:"Autenticaci\xf3n",permalink:"/docs/authenticate"}},d=[{value:"Instala el cliente",id:"instala-el-cliente",children:[],level:3}],m={toc:d};function f(e){var a=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,r.kt)("h3",{id:"instala-el-cliente"},"Instala el cliente"),(0,r.kt)("p",null,"Empieza por incluir el cliente de Facturapi en las dependencias de tu proyecto."),(0,r.kt)(u.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("p",null,"cURL no requiere de instalar un cliente adicional")),(0,r.kt)(i.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Instala el paquete de ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/facturapi"},"NPM"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> npm install --save facturapi\n"))),(0,r.kt)(i.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,r.kt)("p",null,"Desde Visual Studio, instala el\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Facturapi"},"paquete de NuGet"),"\ndesde Visual Studio, o bien, desde la terminal del Package Manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PM> Install-Package Facturapi\n"))),(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("p",null,"Importa el ",(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/facturapi/facturapi-php"},"paquete de Packagist")," usando composer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$> composer require "facturapi/facturapi-php"\n')))),(0,r.kt)("p",null,"Importa la librer\xeda antes de usarla."),(0,r.kt)(u.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("p",null,"cURL no requiere de instalar un cliente adicional")),(0,r.kt)(i.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"CommonJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Facturapi = require('facturapi');\n")),(0,r.kt)("p",null,"ESM / Typescript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Facturapi from 'facturapi';\n"))),(0,r.kt)(i.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Facturapi;\n"))),(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use use Facturapi\\Facturapi;\n")))))}f.isMDXComponent=!0}}]);