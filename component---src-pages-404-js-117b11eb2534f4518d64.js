(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(159);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),i=a.n(n),r=a(4),s=a.n(r),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(149),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),o=a(49),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},152:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary"}}}}},153:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFN0lEQVQ4y4WTe0xTVxzHL7LFLS7ZpnObQ1QEKgxUiqJ2yqMF7O1t62Z8TFHRbTqncUY3FzZn1D0MRnxPCTNZJkzFN27KhLFNVHyBQjFFwNbR3lJASmkL8mx7vjv3lvLHNNlNfjmP+zuf8/09DsP85yNekkZIz0RhDiCg5ZAsoIYZJf4zxoQz//sZpZKEh+9M0uheHZrSXl6xgkLgJghnhjJD1uWdfs7vZ4gKewH4k7FfVwQIa6dZyTh59mlg/RSJ1jJZAlvYiKNA8TDKO4O+ChbW+Ht4zOUMXJr1SBaR6j9jNiwdQv0Yt6eH8fZbGRevFS9w8Sqfw+7VyR8mf3MpO3CjbsfqIxezCysXNh28yeJghQbFW6Z/Z40OR93zY6X9mBflqFFIhDN8GRPwzJCVeWyGvCD1zLD1lax8bwn0xnWwmeTYWMxhWt6srwSf5uiw9cZvY7d02FhHh4k1OBv2jxb2LWWMqNTrbmXshnGMy/Iuw7DHVacSjibcpD8C7ed+rEVHFZ06PTsv3e7PvbypEo5kXVm9tuLIlVOe+YcuQ3s4H4evfGoDWqq9QE2v85jeaVLoXTxHTaUXVX6Qv+gj+rO2J2sn7OnpnkJdFVHuPo0NZ8/him4Z5hdxeODgceKW0ztmzxrP7qvxQM/XQN9F9LdqqXHUNNTUYExRoRF81PgGlJbAviuTZC2NIJX8ebidaaT5eIy3LDLIs+aLGI++vZqgaweyr81E5l9qr9eq8NgbEjy0GB6qjI6sODLGaZHLaiTBe+3h4zOKT25qkp1MQSO6ve31pYQ/tB04nI36nP24Wr0SXqscTjOHunoWnTwHJzUKoXusOAo2WJyO7ritPV0FyK0/T5qKckixdjn5+KwJj2lGt1TsQuqxRFy/r0aXRYUnFgGiego2CHSWrhpuN8y00MZFqR3uHxavRVGiHJPXF+Fidjpu18ajtIrDXT09TAEOsw/kMLFob/CNfjjjMCQN8T0zZnjd3VzDiu2FSF6X581asoEUxlLH7yeiv2MO+nkWaOPQ08INwvoecyDtanQ3c4NQ8b0OvNsZ+/LLWwri4mGSzfC23vmF2D6Lg2VrHFwODeyPWJQVJ+HeVQWeWFUipPxvOS6cmIW6ihQRLioUPn1z73AKdO0p70Pi2hx3963LdNmGdqMSbdcU6KSHbXQujQnFgrlvA71a7MuMw5ujxuDlV0bjraCx+JWC+2j7MIQQv8KV+/6o9RRcXwU8WUO6HEWgnQ+nlUUHLYKNKpwSG4q0hVHw2tUICx0nwv/RpWLz51LcLkkSVQsgZs5B37v8/d6Kn3bRN/xJQZK7RDeHdDdqaNKV6GxUoZUqjJVS4IIoGosG0+PCMGnieJRcSAAcatGEAokht5oXBYoqm1P2nruvxfYSldthVhIXLYS9wZfsVgMF0pDfn0dD7tbit/xZiJgQgqEvBiEpQYIbNL+9LQMKO/jZItBl5g7ApUVfo8rdyauI0Gvis7JxosKpU8KwWFDYqaFp0aC5TinmMiRkHGTTw9HyUDnQh2Y2cGA8QBxa2mesm86JEGrhadqDlxLFtoiMDMHytGhxvnmTFHdL5VTPe8jYKMXrb4xB9Q2FH6jyKeRVB0CBFOamcyKEmqqYgJEjgzFTFo5hLwUhN0cmtkkQrezo4LFQJEkw4rVgzNVGCkJ8QHpwUKEApGuaQ5YI/WasSsW2L2OxfEk0fs6Wib0m9NyDO8nYmhGL9MXRyNw2Fbx+NrqaVM8G+hUKhwUnsYq0sp42tVggIWShRfz7wihcLvj/C7t/CCc42inPAAAAAElFTkSuQmCC",aspectRatio:.9236234458259325,src:"/static/logo-072534f98a76d1a3c9fef17da57346d0-3a72f.png",srcSet:"/static/logo-072534f98a76d1a3c9fef17da57346d0-36e3a.png 38w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-217b9.png 75w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-3a72f.png 150w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-50692.png 225w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-a8344.png 300w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-1535b.png 450w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-a5efe.png 520w",sizes:"(max-width: 150px) 100vw, 150px"}}}}}},154:function(e,t,a){"use strict";var n=a(9);t.__esModule=!0,t.default=void 0;var i,r=n(a(7)),s=n(a(48)),o=n(a(160)),l=n(a(161)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+o+l+t+s+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:n,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!0,r=!1,o=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,r=!0),"undefined"==typeof window&&(n=!1,i=!1),t.critical&&(n=!0,i=!1,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:i,IOSupported:r,fadeIn:o,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.Tag,w="boolean"==typeof m?"lightgray":m,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o);if(p){var S=p;return d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:S.base64,style:v}),S.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:S.tracedSVG,style:v}),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(y,{alt:a,title:t,src:S.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},S))}}))}if(h){var L=h,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete N.display,d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.base64,style:v}),L.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.tracedSVG,style:v}),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=b;t.default=E},155:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary",twitter:"@jsconfbp"}}}}},156:function(e,t,a){e.exports={header:"header-module--header--1a1MQ",header_inner:"header-module--header_inner--2aO-Y",header_inner_title:"header-module--header_inner_title--TWVps",header_logo:"header-module--header_logo--2QZPK"}},157:function(e,t,a){e.exports={navigation_wrapper_list:"navigation-module--navigation_wrapper_list--34_jL",navigation_wrapper_list_item:"navigation-module--navigation_wrapper_list_item--2OniX"}},158:function(e,t,a){e.exports={bg:"layout-module--bg--10zse",inner:"layout-module--inner--15RIz",content:"layout-module--content--1da59"}},159:function(e,t,a){"use strict";var n=a(152),i=a(0),r=a.n(i),s=a(4),o=a.n(s),l=a(150),d=a.n(l),c=a(148),u=a(153),f=a(154),p=a.n(f),h=a(155),m=function(){return r.a.createElement(c.StaticQuery,{query:"2003099420",render:function(e){return r.a.createElement(d.a,{meta:[{name:"og:type",content:"website"},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:description",content:e.site.siteMetadata.description},{name:"og:site_name",content:e.site.siteMetadata.title},{name:"og:url",content:"https://jsconfbp.com/"},{name:"og:image",content:"https://jsconfbp.com/social-cards/social-card.png"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:e.site.siteMetadata.twitter},{name:"twitter:creator",content:e.site.siteMetadata.twitter},{name:"twitter:title",content:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description},{name:"twitter:url",content:"https://jsconfbp.com/"},{name:"twitter:image",content:"https://jsconfbp.com/social-cards/social-card.png"}]})},data:h})},g=a(156),y=a.n(g),b=function(e){return r.a.createElement(c.StaticQuery,{query:"542272154",render:function(e){return r.a.createElement(p.a,{className:y.a.header_logo,title:"JSConf Budapest",fluid:e.placeholderImage.childImageSharp.fluid})},data:u})},w=function(e){e.siteTitle;return r.a.createElement("header",{className:y.a.header},r.a.createElement(m,null),r.a.createElement("div",{className:y.a.header_inner},r.a.createElement(c.Link,{to:"/"},r.a.createElement(b,null))))},v=a(157),E=a.n(v),S=function(){return r.a.createElement("nav",{className:E.a.navigation},r.a.createElement("nav",{className:E.a.navigation_wrapper},r.a.createElement("ul",{className:E.a.navigation_wrapper_list},r.a.createElement("li",{className:E.a.navigation_wrapper_list_item},r.a.createElement(c.Link,{to:"/about"},"About")),r.a.createElement("li",{className:E.a.navigation_wrapper_list_item},r.a.createElement(c.Link,{to:"/code-of-conduct"},"Code Of Conduct")),r.a.createElement("li",{className:E.a.navigation_wrapper_list_item},r.a.createElement(c.Link,{to:"/privacy-policy"},"Privacy Policy")))))},L=a(158),N=a.n(L),x=function(e){var t=e.className,a=e.contentBg,i=void 0!==a&&a,s=e.children;return r.a.createElement(c.StaticQuery,{query:"431921337",render:function(e){return r.a.createElement("main",{className:[t,N.a.bg].join(" ")},r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(w,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("section",{className:[N.a.inner,i?N.a.content:""].join(" ")},s),r.a.createElement(S,null))},data:n})};x.propTypes={children:o.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-404-js-117b11eb2534f4518d64.js.map