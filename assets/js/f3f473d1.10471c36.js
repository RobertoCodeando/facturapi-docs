"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[20],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?t.createElement(v,o(o({ref:a},u),{},{components:n})):t.createElement(v,o({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,a,n){var t=n(7294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},6396:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(7462),r=n(7294),i=n(2389),o=n(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),s=n(6010),u="tabItem_vU9c";function p(e){var a,n,i,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,v=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),g=(0,c.lx)(k,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(a=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(i=b[0])?void 0:i.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),N=y.tabGroupChoices,w=y.setTabGroupChoices,C=(0,r.useState)(h),T=C[0],x=C[1],_=[],A=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=N[v];null!=I&&I!==T&&k.some((function(e){return e.value===I}))&&x(I)}var E=function(e){var a=e.currentTarget,n=_.indexOf(a),t=k[n].value;t!==T&&(A(a),x(t),null!=v&&w(v,t))},P=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=_.indexOf(e.currentTarget)+1;n=_[t]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var a=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:E,onClick:E},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===a})}),null!=n?n:a)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function d(e){var a=(0,i.Z)();return r.createElement(p,(0,t.Z)({key:String(a)},e))}},4903:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(6396),l=n(8215),c=["components"],s={sidebar_position:1},u="Facturas",p={unversionedId:"guides/invoices",id:"guides/invoices",title:"Facturas",description:"Recuerda reemplazar nuestra llave de ejemplo sktestAPI_KEY",source:"@site/docs/guides/invoices.mdx",sourceDirName:"guides",slug:"/guides/invoices",permalink:"/docs/guides/invoices",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/invoices.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Autenticaci\xf3n",permalink:"/docs/authenticate"},next:{title:"Otros comprobantes",permalink:"/docs/guides/other"}},d=[{value:"Crea tu primera factura",id:"crea-tu-primera-factura",children:[{value:"Respuesta: Objecto Invoice",id:"respuesta-objecto-invoice",children:[],level:4}],level:2},{value:"Env\xeda la factura por correo",id:"env\xeda-la-factura-por-correo",children:[],level:2},{value:"Descarga la factura",id:"descarga-la-factura",children:[],level:2}],m={toc:d};function v(e){var a=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"facturas"},"Facturas"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"  Recuerda reemplazar nuestra llave de ejemplo ",(0,i.kt)("code",null,"sk_test_API_KEY"),"\ncon tu propia llave secreta."))),(0,i.kt)("h2",{id:"crea-tu-primera-factura"},"Crea tu primera factura"),(0,i.kt)("p",null,"Este ejemplo muestra los campos m\xednimos requeridos para crear una factura en una sola llamada."),(0,i.kt)("p",null,"Para conocer a fondo todas las opciones disponibles al crear una factura, consulta la\n",(0,i.kt)("a",{parentName:"p",href:"/api/#operation/createInvoice"},"referencia del m\xe9todo Crear Factura"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"  Por default se considera que el precio del producto tiene impuestos inclu\xeddos. Facturapi se encarga de desglosar los impuestos del producto (siendo IVA 16% el default) y calcular el precio unitario. Si en lugar de eso requieres que el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"price")," sea el precio unitario, debes enviar el par\xe1metro ",(0,i.kt)("inlineCode",{parentName:"p"},"tax_included")," con el valor ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/invoices \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "customer": {\n      "legal_name": "Dunder Mifflin S.A. de C.V.",\n      "email": "email@example.com",\n      "tax_id": "ABCD111111CBA"\n    },\n    "items": [{\n      "quantity": 2,\n      "product": {\n        "description": "Ukelele",\n        "product_key": "60131324",\n        "price": 345.60\n      }\n    }],\n    "payment_form": "06"\n  }\'\n'))),(0,i.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('sk_test_API_KEY');\n\nconst invoice = await facturapi.invoices.create({\n  customer: {\n    legal_name: 'Dunder Mifflin S.A. de C.V.',\n    email: 'email@example.com',\n    tax_id: 'ABCD111111CBA'\n  },\n  items: [{\n    product: {\n      description: 'Ukelele',\n      product_key: '60131324',\n      price: 345.60\n    }\n  }],\n  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO\n});\n"))),(0,i.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("sk_test_API_KEY");\n\nvar invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>\n{\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Dunder Mifflin S.A. de C.V.",\n    ["email"] = "email@example.com",\n    ["tax_id"] = "ABCD111111CBA"\n  },\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["product"] = new Dictionary<string, object>\n      {\n        ["description"] = "Ukelele",\n        ["product_key"] = "60131324",\n        ["price"] = 345.60\n      }\n    }\n  },\n  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO\n});\n'))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi( "sk_test_API_KEY" );\n\n$invoice = $facturapi->Invoices->create(array(\n  "customer" => array(\n    "legal_name" => "Dunder Mifflin S.A. de C.V.",\n    "email" => "email@example.com",\n    "tax_id" => "ABCD111111CBA"\n  ),\n  "items" => array(\n    array(\n      "product" => array(\n        "description" => "Ukelele",\n        "product_key" => "60131324",\n        "price" => 345.60\n      )\n    ),\n  ),\n    "payment_form" => \\Facturapi\\PaymentForm::EFECTIVO\n));\n')))),(0,i.kt)("h4",{id:"respuesta-objecto-invoice"},"Respuesta: Objecto Invoice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "58e93bd8e86eb318b019743d",\n  "created_at": "2017-01-01T14:00:08.000Z",\n  "livemode": false,\n  "status": "valid",\n  "cancellation_status": "none",\n  "verification_url": "https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=45BEC0CA-5F1E-491E-9417-698EA48C382A&re=AAA010101AAA&rr=ABCD111111CBA&tt=345.600000&fe=bWApPw==",\n  "customer": {\n    "id": "58e93bd8e86eb318b0197456",\n    "legal_name": "Dunder Mifflin S.A. de C.V.",\n    "tax_id": "ABCD111111CBA"\n  },\n  "total": 10944.82,\n  "uuid": "39c85a3f-275b-4341-b259-e8971d9f8a94",\n  "folio_number": 914,\n  "series": "A",\n  "payment_form": "06",\n  "related": [], \n  "currency": "MXN",\n  "exchange": 1,\n  "items": [{\n    "quantity": 2,\n    "discount": 0,\n    "product": {\n      "id": "58e93bd8e86eb318b0197454",\n      "description": "Gafas de sol Ray-Ban",\n      "price": 5472.41\n    }\n  }],\n  "stamp": {\n    "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",\n    "date": "2021-03-30T00:57:48",\n    "sat_cert_number": "20001000000300022323",\n    "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xa1Listo! \ud83c\udf89 Para este punto tu factura fue creada exitosamente, y si est\xe1s en ambiente Live, enviada al SAT."))),(0,i.kt)("p",null,"\xbfC\xf3mo asegurarme de que se envi\xf3 al SAT? Notar\xe1s que el objeto Invoice (que\nobtuviste como respuesta) tiene una propiedad llamada ",(0,i.kt)("inlineCode",{parentName:"p"},"verification_url"),";\n\xe9sta contiene el enlace oficial al portal de verificaci\xf3n del SAT (el mismo que se\nmuestra como QR en la versi\xf3n PDF). Dentro del portal podr\xe1s ver informaci\xf3n b\xe1sica de\nla factura, as\xed como su estatus oficial, si est\xe1 vigente o si ha sido\ncancelada."),(0,i.kt)("p",null,"Otras propiedades interesantes que Facturapi a\xf1ade a la respuesta son:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": Identificador \xfanico de la factura en Facturapi. Te recomendamos guardar este valor en tu base de datos para relacionarlo con tus registros."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created_at"),": Fecha en que fue creada."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"livemode"),": Ambiente en que se cre\xf3."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total"),": El total, que Facturapi calcula y no es parte del input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uuid"),": El folio fiscal oficial por el que el SAT identifica tu factura"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stamp"),": Informaci\xf3n del timbre fiscal digital.")),(0,i.kt)("p",null,"A continuaci\xf3n exploraremos c\xf3mo enviar la factura a tu cliente y c\xf3mo descargar los archivos XML y PDF."),(0,i.kt)("h2",{id:"env\xeda-la-factura-por-correo"},"Env\xeda la factura por correo"),(0,i.kt)("p",null,"Utilizando el ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," de la factura que acabamos de crear, podemos realizar operaciones como enviar\nlos archivos de la factura al correo electr\xf3nico del cliente a quien se le emiti\xf3."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \\\n  -H "Authorization: Bearer sk_test_API_KEY"\n  -X POST\n'))),(0,i.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await facturapi.invoices.sendByEmail(invoice.id);\n"))),(0,i.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await facturapi.Invoice.SendByEmailAsync(invoice.Id);\n"))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$facturapi->Invoices->send_by_email($invoice->id);\n")))),(0,i.kt)("h2",{id:"descarga-la-factura"},"Descarga la factura"),(0,i.kt)("p",null,"Si lo necesitas, tambi\xe9n puedes descargar los archivos de la factura en tu servidor."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'## Descargar PDF y XML comprimidos en archivo ZIP\ncurl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/zip \\\n  -H "Authorization: Bearer sk_test_API_KEY"\n'))),(0,i.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\n\n// Descarga PDF y XML comprimidos en archivo ZIP\nconst zipStream = await facturapi.invoices.downloadZip(invoice.id);\n// Guarda la descarga en un archivo\nconst file = fs.createWriteStream('./factura.zip');\nzipStream.pipe(file);\n// O env\xedalo como respuesta a tu cliente (en ExpressJS)\nzipStream.pipe(res);\n"))),(0,i.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Descarga PDF y XML comprimidos en archivo ZIP\nvar zipStream = await facturapi.Invoice.DownloadZipAsync(invoice.Id);\n\n// Guarda la descarga en un archivo\nvar file = new System.IO.FileStream("C:\\\\route\\\\to\\\\save\\\\invoice.zip", FileMode.Create);\nzipStream.CopyTo(file);\nfile.Close();\n'))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$zip = $facturapi->Invoices->download_zip($invoice->id) // stream containing the PDF and XML as a ZIP file or\n\n$pdf = $facturapi->Invoices->download_pdf($invoice->id) // stream containing the PDF file or\n\n$xml = $facturapi->Invoices->download_xml($invoice->id) // stream containing the XML file or\n")))))}v.isMDXComponent=!0}}]);