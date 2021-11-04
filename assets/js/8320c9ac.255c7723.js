"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[241],{8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),r=a(7294),i=a(2389),o=a(9443);var c=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(9521),u=a(6010),s="tabItem_1uMI";function p(e){var t,a,n,i=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=b[0])?void 0:n.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=c(),y=g.tabGroupChoices,_=g.setTabGroupChoices,T=(0,r.useState)(h),w=T[0],N=T[1],C=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==w&&v.some((function(e){return e.value===x}))&&N(x)}var E=function(e){var t=e.currentTarget,a=C.indexOf(t),n=v[a].value;n!==w&&(I(t),N(n),null!=m&&_(m,n))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},f)},v.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:R,onFocus:E,onClick:E},null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},6950:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=a(6396),c=a(8215),l=["components"],u={sidebar_position:3},s="Recibos",p={unversionedId:"started/receipts",id:"started/receipts",isDocsHomePage:!1,title:"Recibos",description:"Crea tu primer recibo",source:"@site/docs/started/receipts.mdx",sourceDirName:"started",slug:"/started/receipts",permalink:"/facturapi-docs/docs/started/receipts",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/started/receipts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Otros comprobantes",permalink:"/facturapi-docs/docs/started/other"},next:{title:"Clientes",permalink:"/facturapi-docs/docs/started/customers"}},d=[{value:"Crea tu primer recibo",id:"crea-tu-primer-recibo",children:[],level:2},{value:"Factura tus recibos",id:"factura-tus-recibos",children:[],level:2}],m={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recibos"},"Recibos"),(0,i.kt)("h2",{id:"crea-tu-primer-recibo"},"Crea tu primer recibo"),(0,i.kt)("p",null,"Otra manera de usar Facturapi es emitiendo recibos por cada venta que realizas. Los recibos (o notas de venta) contienen la informaci\xf3n necesaria para que posteriormente puedan convertirse en una factura para tu cliente o formar parte de una factura global (al p\xfablico en general)."),(0,i.kt)("p",null,"Para m\xe1s detalles, consulta el m\xe9todo ",(0,i.kt)("a",{parentName:"p",href:"/api/#operation/createReceipt"},"Crear Recibo"),"."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/receipts \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "folio_number": 1234,\n        "payment_form": "03",\n        "items": [{\n          "quantity": 1,\n          "product": {\n            "description": "Ukelele",\n            "product_key": "60131324",\n            "price": 345.60,\n            "sku": "ABC1234"\n          }\n        }]\n      }\'\n'))),(0,i.kt)(c.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const facturapi = new Facturapi('sk_test_API_KEY');\nconst receipt = await facturapi.receipts.create({\n  folio_number: 1234,\n  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO,\n  items: [{\n    quantity: 1,\n    product: {\n      description: 'Ukelele',\n      product_key: '60131324',\n      price: 345.60,\n      sku: 'ABC1234'\n    }\n  }]\n});\n// save the receipt.id in your database\n"))),(0,i.kt)(c.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("sk_test_API_KEY");\nvar receipt = await facturapi.Receipt.CreateAsync(new Dictionary<string, object>\n{\n  ["folio_number"] = 1234,\n  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["description"] = "Ukelele",\n      ["product_key"] = "60131324",\n      ["price"] = 345.60,\n      ["sku"] = "ABC1234"\n    }\n  }\n});\n'))),(0,i.kt)(c.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi("sk_test_API_KEY");\n\n$receipt = $facturapi->Receipts->create([\n  "folio_number" => 1234,\n  "payment_form" => "03",\n  "items" => [\n    [\n      "description" => "Ukelele",\n      "product_key" => "60131324",\n      "price" => 345.60,\n      "sku" => "ABC1234"\n    ]\n  ]\n]);\n')))),(0,i.kt)("h2",{id:"factura-tus-recibos"},"Factura tus recibos"),(0,i.kt)("p",null,"Convierte tu recibo en factura si tu cliente te lo solicita. M\xe1s detalles en el m\xe9todo ",(0,i.kt)("a",{parentName:"p",href:"/api/#operation/invoiceReceipt"},"Facturar Recibo"),"."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/receipts/5ebd8e56f5687a013ca0df46/invoice \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "customer": {\n          "legal_name": "Roger Watters",\n          "tax_id": "ROWA121212A11",\n          "email": "roger@pinkfloyd.com"\n        },\n        "folio_number": 914,\n        "series": "F"\n    }\'\n'))),(0,i.kt)(c.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const invoice = await facturapi.receipts.invoice(receipt.id, {\n  customer: {\n    legal_name: 'Roger Watters',\n    tax_id: 'ROWA121212A11',\n    email: 'roger@pinkfloyd.com'\n  },\n  folio_number: 914,\n  series: 'F'\n});\n"))),(0,i.kt)(c.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var invoice = await facturapi.Receipt.InvoiceAsync(receipt.Id, new Dictionary<string, object>\n{\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Roger Watters",\n    ["tax_id"] = "ROWA121212A11",\n    ["email"] = "roger@pinkfloyd.com"\n  },\n  ["folio_number"] = 914,\n  ["series"] = "F"\n});\n'))),(0,i.kt)(c.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$invoice = $facturapi->Receipts->invoice($receipt->id, [\n  "customer" => [\n    "legal_name" => "Roger Watters",\n    "tax_id" => "ROWA121212A11",\n    "email" => "roger@pinkfloyd.com"\n  ],\n  "folio_number" => 914,\n  "series" => "F"\n]);\n')))))}f.isMDXComponent=!0}}]);