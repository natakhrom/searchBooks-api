(this["webpackJsonpsearch-books"]=this["webpackJsonpsearch-books"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(18),s=a.n(o),i=(a(27),a(11)),r=a(4),l=(a(28),a(29),a(30),a(0));var b=function(e){var t=n.a.useState(""),a=Object(r.a)(t,2),c=a[0],o=a[1];return Object(l.jsxs)("form",{className:"search__form",onSubmit:function(t){t.preventDefault(),e.onSubmit(c)},children:[Object(l.jsxs)("div",{className:"search__row",children:[Object(l.jsx)("input",{className:"search__input",name:"search",defaultValue:"",onChange:function(e){o(e.target.value)}}),Object(l.jsx)("button",{className:"search__button",type:"submit"})]}),Object(l.jsxs)("div",{className:"search__param",children:[Object(l.jsxs)("label",{className:"search__description",children:["Categories",Object(l.jsxs)("select",{className:"search__select",onChange:function(t){e.onCategoryChange(t.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"all"}),Object(l.jsx)("option",{value:"art",children:"art"}),Object(l.jsx)("option",{value:"biography",children:"biography"}),Object(l.jsx)("option",{value:"computers",children:"computers"}),Object(l.jsx)("option",{value:"history",children:"history"}),Object(l.jsx)("option",{value:"medical",children:"medical"}),Object(l.jsx)("option",{value:"poetry",children:"poetry"})]})]}),Object(l.jsxs)("label",{className:"search__description",children:["Sorting by",Object(l.jsxs)("select",{className:"search__select",onChange:function(t){e.onChangeSorting("relevance"!==t.target.value)},children:[Object(l.jsx)("option",{children:"relevance"}),Object(l.jsx)("option",{children:"newest"})]})]})]})]})};var u=function(e){var t=e.handleSubmit,a=e.handleCategoryChange,c=e.onChangeSorting;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{className:"header__heading",children:"Search for books"}),Object(l.jsx)(b,{onSubmit:t,onCategoryChange:a,onChangeSorting:c})]})},j=a(19),h=a(20),d=new(function(){function e(t){var a=t.baseUrl,c=t.apiKey;Object(j.a)(this,e),this._baseUrl=a,this._apiKey=c}return Object(h.a)(e,[{key:"getBooks",value:function(e,t,a,c){var n="all"===t?"":"+subject:".concat(t),o="".concat(this._baseUrl,"/v1/volumes?q=").concat(e).concat(n,"&startIndex=").concat(a,"&maxResults=").concat(c,"&key=").concat(this._apiKey);return fetch(o).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://www.googleapis.com/books",apiKey:"AIzaSyDOLzKhavchXJwQxGwzn9ssVWn0R8IQicE"}),m=(a(32),a(13));a(33);var O=function(e){var t=e.book,a=e.handleClick;return Object(l.jsx)(m.b,{to:"/about-book",children:Object(l.jsxs)("div",{className:"book__container",onClick:function(){a(t)},children:[Object(l.jsx)("img",{src:t.link,alt:t.alt,className:"book__image"}),Object(l.jsx)("p",{className:"book__category",children:t.category}),Object(l.jsx)("h2",{className:"book__title",children:t.title}),Object(l.jsx)("p",{className:"book__author",children:t.authors})]})})};var _=function(e){var t=e.books,a=e.totalItems,c=e.onClick,o=e.handleClick,s=e.isBookList,b=e.sortByDate,u=n.a.useState([]),j=Object(r.a)(u,2),h=j[0],d=j[1];return n.a.useEffect((function(){!function(){if(b){var e=Object(i.a)(t);e.sort((function(e,t){return t.publishedDate.localeCompare(e.publishedDate)})),d(e)}else d(t)}()}),[t,b]),Object(l.jsxs)("section",{className:"booksList",children:[Object(l.jsxs)("p",{className:"booksList__text",children:["Found ",a," results"]}),Object(l.jsx)("div",{className:"booksList__grid",children:h.map((function(e){return Object(l.jsx)(O,{id:e.id,book:e,handleClick:o},e.id)}))}),Object(l.jsx)("button",{type:"button",className:s?"booksList__buttonLoadMore":"booksList__buttonLoadMore_hidden",onClick:c,children:"Load More"})]})};a(39);var f=function(){return Object(l.jsx)("div",{className:"spinner"})},p=a.p+"static/media/noCover.b6c09a7e.jpg",g=a(2);a(40);var x=function(e){var t=e.book,a=Object(g.e)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"book",children:[Object(l.jsx)("img",{src:t.link,alt:t.alt,className:"book__foto"}),Object(l.jsxs)("div",{className:"book__info",children:[Object(l.jsx)("p",{className:"book__category_type_bigSize",children:t.category}),Object(l.jsx)("h2",{className:"book__title_type_bigSize",children:t.title}),Object(l.jsx)("p",{className:"book__authors_type_bigSize",children:t.authors}),Object(l.jsx)("div",{className:"border",children:Object(l.jsx)("p",{className:"book__description_type_bigSize",children:t.description})})]})]}),Object(l.jsx)("button",{type:"button",className:"book__button-goBack",onClick:function(){return a.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]})};var v=function(){var e=n.a.useState([]),t=Object(r.a)(e,2),a=t[0],c=t[1],o=n.a.useState(0),s=Object(r.a)(o,2),b=s[0],j=s[1],h=n.a.useState("all"),m=Object(r.a)(h,2),O=m[0],v=m[1],k=n.a.useState(!1),y=Object(r.a)(k,2),N=y[0],C=y[1],S=n.a.useState({}),I=Object(r.a)(S,2),L=I[0],w=I[1],B=n.a.useState(0),D=Object(r.a)(B,2),z=D[0],F=D[1],K=n.a.useState(""),M=Object(r.a)(K,2),U=M[0],E=M[1],J=n.a.useState(!1),P=Object(r.a)(J,2),T=P[0],Q=P[1],R=n.a.useState(!1),V=Object(r.a)(R,2),q=V[0],A=V[1];function G(e,t,a,n,o){d.getBooks(e,t,a,n).then((function(e){j(e.totalItems);var t=e.items.map((function(e){return{id:e.id,link:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.smallThumbnail:p,alt:'\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043a \u043a\u043d\u0438\u0433\u0435 "'.concat(e.volumeInfo.title,'"'),title:e.volumeInfo.title,category:e.volumeInfo.categories,authors:e.volumeInfo.authors?e.volumeInfo.authors.join(", "):"",description:e.volumeInfo.description,publishedDate:e.volumeInfo.publishedDate?e.volumeInfo.publishedDate:"1900-01-01"}}));c(o?function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))}:t),C(!1)}))}return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(u,{handleSubmit:function(e){E(e),C(!0),G(e,O,z,5,!1),Q(!0)},handleCategoryChange:function(e){v(e)},onChangeSorting:function(e){A(e)}}),N?Object(l.jsx)(f,{}):Object(l.jsx)(g.a,{exact:!0,path:"/",children:Object(l.jsx)(_,{books:a,totalItems:b,onClick:function(){var e=z+5;G(U,O,e,5,!0),F(e)},handleClick:function(e){w(e)},isBookList:T,sortByDate:q})}),Object(l.jsx)(g.a,{path:"/about-book",children:Object(l.jsx)(x,{book:L})})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m.a,{children:Object(l.jsx)(v,{})})}),document.getElementById("root")),k()}},[[41,1,2]]]);
//# sourceMappingURL=main.96fddeb9.chunk.js.map