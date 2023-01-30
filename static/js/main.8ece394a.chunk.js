(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(15),c(10)),n=c(2),r=c(1),o=(c(16),c(17),c(18),c(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},l=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=c(9),v=c.n(u);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=c056a4c9","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}c(21);var O={title:"",description:"",imdbUrl:"",imgUrl:"",imdbId:""},x=function(e){var t=e.addMovie,c=e.isInList,i=Object(r.useState)(O),a=Object(n.a)(i,2),s=a[0],l=a[1],m=Object(r.useState)(!1),u=Object(n.a)(m,2),x=u[0],p=u[1],f=Object(r.useState)(!1),N=Object(n.a)(f,2),g=N[0],y=N[1],w=Object(r.useState)(!1),I=Object(n.a)(w,2),S=I[0],k=I[1],F=Object(r.useState)(!1),U=Object(n.a)(F,2),C=U[0],E=U[1],M=Object(r.useState)(""),B=Object(n.a)(M,2),D=B[0],P=B[1],L=function(e){var t=e.Title,c=e.Plot,i=e.Poster,a=e.imdbID;return{title:t,description:c,imdbId:a,imgUrl:"N/A"===i?"https://via.placeholder.com/360x270.png?text=no%20preview":i,imdbUrl:"https://www.imdb.com/title/".concat(a)}},A=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),y(!1),E(!1),k(!1),e.prev=5,e.next=8,h(D);case 8:if(!("Error"in(c=e.sent))){e.next=12;break}return k(!0),e.abrupt("return");case 12:i=L(c),l(i),y(!0),e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(5),new Error("Failed movie load");case 20:return e.prev=20,p(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:function(e){return A(e)},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{value:D,onChange:function(e){P(e.target.value),E(!0)},"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander"})}),S&&!C&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":x}),disabled:!D,children:g?"Search again":"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:g&&Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return c((e=s).imdbId)||t(e),l(O),y(!1),void P("");var e},children:"Add to the list"})})]})]}),g&&Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(d,{movie:s})]})]})},p=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(l,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(x,{addMovie:function(e){return i((function(t){return[].concat(Object(s.a)(t),[e])}))},isInList:function(e){return c.some((function(t){return t.imdbId===e}))}})})]})};a.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8ece394a.chunk.js.map