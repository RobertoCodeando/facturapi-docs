"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[925],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),i=n(2389),o=n(9443);var c=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),l=n(6010),s="tabItem_vU9c";function p(e){var t,n,i,o=e.lazy,p=e.block,m=e.defaultValue,d=e.values,f=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=c(),_=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,a.useState)(k),O=T[0],E=T[1],N=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=_[f];null!=C&&C!==O&&y.some((function(e){return e.value===C}))&&E(C)}var j=function(e){var t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==O&&(x(t),E(r),null!=f&&w(f,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},8026:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(6396),c=n(8215),u=["components"],l={sidebar_position:3},s="Recibos",p={unversionedId:"guides/receipts",id:"guides/receipts",title:"Recibos",description:"Crea tu primer recibo",source:"@site/docs/guides/receipts.mdx",sourceDirName:"guides",slug:"/guides/receipts",permalink:"/docs/guides/receipts",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/receipts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Otros comprobantes",permalink:"/docs/guides/other"},next:{title:"Clientes",permalink:"/docs/guides/customers"}},m=[{value:"Crea tu primer recibo",id:"crea-tu-primer-recibo",children:[],level:2},{value:"Factura tus recibos",id:"factura-tus-recibos",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recibos"},"Recibos"),(0,i.kt)("h2",{id:"crea-tu-primer-recibo"},"Crea tu primer recibo"),(0,i.kt)("p",null,"Otra manera de usar Facturapi es emitiendo recibos por cada venta que realizas. Los recibos (o notas de venta) contienen la informaci\xf3n necesaria para que posteriormente puedan convertirse en una factura para tu cliente o formar parte de una factura global (al p\xfablico en general)."),(0,i.kt)("p",null,"Para m\xe1s detalles, consulta el m\xe9todo ",(0,i.kt)("a",{parentName:"p",href:"/api/#operation/createReceipt"},"Crear Recibo"),"."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/receipts \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "folio_number": 1234,\n        "payment_form": "03",\n        "items": [{\n          "quantity": 1,\n          "product": {\n            "description": "Ukelele",\n            "product_key": "60131324",\n            "price": 345.60,\n            "sku": "ABC1234"\n          }\n        }]\n      }\'\n'))),(0,i.kt)(c.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const facturapi = new Facturapi('sk_test_API_KEY');\nconst receipt = await facturapi.receipts.create({\n  folio_number: 1234,\n  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO,\n  items: [{\n    quantity: 1,\n    product: {\n      description: 'Ukelele',\n      product_key: '60131324',\n      price: 345.60,\n      sku: 'ABC1234'\n    }\n  }]\n});\n// save the receipt.id in your database\n"))),(0,i.kt)(c.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("sk_test_API_KEY");\nvar receipt = await facturapi.Receipt.CreateAsync(new Dictionary<string, object>\n{\n  ["folio_number"] = 1234,\n  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["description"] = "Ukelele",\n      ["product_key"] = "60131324",\n      ["price"] = 345.60,\n      ["sku"] = "ABC1234"\n    }\n  }\n});\n'))),(0,i.kt)(c.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi("sk_test_API_KEY");\n\n$receipt = $facturapi->Receipts->create([\n  "folio_number" => 1234,\n  "payment_form" => "03",\n  "items" => [\n    [\n      "description" => "Ukelele",\n      "product_key" => "60131324",\n      "price" => 345.60,\n      "sku" => "ABC1234"\n    ]\n  ]\n]);\n')))),(0,i.kt)("h2",{id:"factura-tus-recibos"},"Factura tus recibos"),(0,i.kt)("p",null,"Convierte tu recibo en factura si tu cliente te lo solicita. M\xe1s detalles en el m\xe9todo ",(0,i.kt)("a",{parentName:"p",href:"/api/#operation/invoiceReceipt"},"Facturar Recibo"),"."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/receipts/5ebd8e56f5687a013ca0df46/invoice \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "customer": {\n          "legal_name": "Roger Watters",\n          "tax_id": "ROWA121212A11",\n          "email": "roger@pinkfloyd.com"\n        },\n        "folio_number": 914,\n        "series": "F"\n    }\'\n'))),(0,i.kt)(c.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const invoice = await facturapi.receipts.invoice(receipt.id, {\n  customer: {\n    legal_name: 'Roger Watters',\n    tax_id: 'ROWA121212A11',\n    email: 'roger@pinkfloyd.com'\n  },\n  folio_number: 914,\n  series: 'F'\n});\n"))),(0,i.kt)(c.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var invoice = await facturapi.Receipt.InvoiceAsync(receipt.Id, new Dictionary<string, object>\n{\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Roger Watters",\n    ["tax_id"] = "ROWA121212A11",\n    ["email"] = "roger@pinkfloyd.com"\n  },\n  ["folio_number"] = 914,\n  ["series"] = "F"\n});\n'))),(0,i.kt)(c.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$invoice = $facturapi->Receipts->invoice($receipt->id, [\n  "customer" => [\n    "legal_name" => "Roger Watters",\n    "tax_id" => "ROWA121212A11",\n    "email" => "roger@pinkfloyd.com"\n  ],\n  "folio_number" => 914,\n  "series" => "F"\n]);\n')))))}f.isMDXComponent=!0}}]);