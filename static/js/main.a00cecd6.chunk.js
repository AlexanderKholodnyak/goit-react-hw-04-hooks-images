(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__VyosP",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3YG4j"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1FjmE",Modal:"Modal_Modal__3p4-U"}},13:function(e,t,a){e.exports={container:"Container_container__3_1Pq"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__zaoAr"}},18:function(e,t,a){e.exports={Button:"Button_Button__3oX9m"}},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(25),a(3)),i=a(13),l=a.n(i),u=a(1);var m=function(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})},b=a(8),j=a(5),h=a.n(j);a(27);var g=function(e){var t=e.onHandleSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),o=r[0],c=r[1];return Object(u.jsx)("header",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),c("")):b.b.error("\u0427\u0442\u043e \u0438\u0449\u0435\u043c ?")},className:h.a.Searchbar,children:Object(u.jsxs)("form",{className:h.a.SearchForm,children:[Object(u.jsx)("button",{type:"submit",className:h.a.SearchForm__button,children:Object(u.jsx)("span",{className:h.a.SearchForm__buttonLabel,children:"Search"})}),Object(u.jsx)("input",{className:h.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,value:o,onChange:function(e){c(e.currentTarget.value)},placeholder:"Search images and photos"})]})})},d=a(12);var _={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=18452046-d075d28130c097165687e8e16&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No response from server"))}))}},f=a(10),O=a.n(f);function p(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onOpenModal;return Object(u.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(u.jsx)("img",{src:t,alt:n,"data-source":a,className:O.a.ImageGalleryItem__image,onClick:r})})}var v=a(14),y=a.n(v),x=a(15),S=a.n(x);a(48);var I=function e(){return Object(u.jsx)(S.a,{className:e,type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3})},w=a(16),F=a(17),k=a(20),L=a(19),G=a(11),M=a.n(G),N=document.querySelector("#modalPortal"),C=function(e){Object(k.a)(a,e);var t=Object(L.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(F.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(o.createPortal)(Object(u.jsx)("div",{className:M.a.Overlay,onClick:this.handleBackdropClick,children:Object(u.jsx)("div",{className:M.a.Modal,children:Object(u.jsx)("img",{src:e,alt:""})})}),N)}}]),a}(n.Component);function E(e){var t=e.message;return Object(u.jsx)("div",{role:"alert",children:Object(u.jsxs)("p",{children:["Sorry, something went wrong. Error: ",t]})})}var U=a(18),B=a.n(U);function P(e){var t=e.onLoadMore;return Object(u.jsx)("button",{type:"button",className:B.a.Button,onClick:t,children:"Load more"})}var T=function(e){var t=e.query,a=e.page,r=e.images,o=e.setPage,c=e.setImages,i=Object(n.useState)(""),l=Object(s.a)(i,2),m=l[0],j=l[1],h=Object(n.useState)(null),g=Object(s.a)(h,2),f=g[0],O=g[1],v=Object(n.useState)(!1),x=Object(s.a)(v,2),S=x[0],w=x[1],F=Object(n.useState)(!1),k=Object(s.a)(F,2),L=k[0],G=k[1];Object(n.useEffect)((function(){console.log(t),""!==t&&(w(!0),_.fetchImages(t,a).then((function(e){0!==e.total&&c((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e.hits))}))})).catch((function(e){O(e)})).finally(w(!1)))}),[t,a,c]);var M=function(e){j(e.target.dataset.source),N()},N=function(){G(!L)},U=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),500)};return Object(u.jsxs)("div",{children:[f&&Object(u.jsx)(E,{textError:f.message}),Object(u.jsx)("ul",{className:y.a.ImageGallery,children:r.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags;return Object(u.jsx)(p,{webformatURL:a,largeImageURL:n,tags:r,onOpenModal:M},t)}))}),S&&Object(u.jsx)(I,{}),!S&&r.length>0&&Object(u.jsx)(P,{onLoadMore:function(){w(!0),o((function(e){return e+1})),U()}}),L&&Object(u.jsx)(C,{onToggleModal:N,largeImageURL:m}),Object(u.jsx)(b.a,{autoClose:3e3})]})};var R=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(1),c=Object(s.a)(o,2),i=c[0],l=c[1],b=Object(n.useState)([]),j=Object(s.a)(b,2),h=j[0],d=j[1];return Object(u.jsxs)(m,{children:[Object(u.jsx)(g,{onHandleSubmit:function(e){r(e),l(1),d([])}}),Object(u.jsx)(T,{query:a,page:i,images:h,setPage:l,setImages:d})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),D()},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__QDeU5",SearchForm:"Searchbar_SearchForm__2YGuX",SearchForm__button:"Searchbar_SearchForm__button__3ErG4",SearchForm__buttonLabel:"Searchbar_SearchForm__buttonLabel__3kfxt",SearchForm__input:"Searchbar_SearchForm__input__3Qho5"}}},[[49,1,2]]]);
//# sourceMappingURL=main.a00cecd6.chunk.js.map