(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(149),o=a.n(r),c=a(157);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(o.a,{title:"new page"}))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(146),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var d=a(148),l=a.n(d);a.d(t,"PageRenderer",function(){return l.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var p=i.a.createContext({}),m=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(48),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},152:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFN0lEQVQ4y4WTe0xTVxzHL7LFLS7ZpnObQ1QEKgxUiqJ2yqMF7O1t62Z8TFHRbTqncUY3FzZn1D0MRnxPCTNZJkzFN27KhLFNVHyBQjFFwNbR3lJASmkL8mx7vjv3lvLHNNlNfjmP+zuf8/09DsP85yNekkZIz0RhDiCg5ZAsoIYZJf4zxoQz//sZpZKEh+9M0uheHZrSXl6xgkLgJghnhjJD1uWdfs7vZ4gKewH4k7FfVwQIa6dZyTh59mlg/RSJ1jJZAlvYiKNA8TDKO4O+ChbW+Ht4zOUMXJr1SBaR6j9jNiwdQv0Yt6eH8fZbGRevFS9w8Sqfw+7VyR8mf3MpO3CjbsfqIxezCysXNh28yeJghQbFW6Z/Z40OR93zY6X9mBflqFFIhDN8GRPwzJCVeWyGvCD1zLD1lax8bwn0xnWwmeTYWMxhWt6srwSf5uiw9cZvY7d02FhHh4k1OBv2jxb2LWWMqNTrbmXshnGMy/Iuw7DHVacSjibcpD8C7ed+rEVHFZ06PTsv3e7PvbypEo5kXVm9tuLIlVOe+YcuQ3s4H4evfGoDWqq9QE2v85jeaVLoXTxHTaUXVX6Qv+gj+rO2J2sn7OnpnkJdFVHuPo0NZ8/him4Z5hdxeODgceKW0ztmzxrP7qvxQM/XQN9F9LdqqXHUNNTUYExRoRF81PgGlJbAviuTZC2NIJX8ebidaaT5eIy3LDLIs+aLGI++vZqgaweyr81E5l9qr9eq8NgbEjy0GB6qjI6sODLGaZHLaiTBe+3h4zOKT25qkp1MQSO6ve31pYQ/tB04nI36nP24Wr0SXqscTjOHunoWnTwHJzUKoXusOAo2WJyO7ritPV0FyK0/T5qKckixdjn5+KwJj2lGt1TsQuqxRFy/r0aXRYUnFgGiego2CHSWrhpuN8y00MZFqR3uHxavRVGiHJPXF+Fidjpu18ajtIrDXT09TAEOsw/kMLFob/CNfjjjMCQN8T0zZnjd3VzDiu2FSF6X581asoEUxlLH7yeiv2MO+nkWaOPQ08INwvoecyDtanQ3c4NQ8b0OvNsZ+/LLWwri4mGSzfC23vmF2D6Lg2VrHFwODeyPWJQVJ+HeVQWeWFUipPxvOS6cmIW6ihQRLioUPn1z73AKdO0p70Pi2hx3963LdNmGdqMSbdcU6KSHbXQujQnFgrlvA71a7MuMw5ujxuDlV0bjraCx+JWC+2j7MIQQv8KV+/6o9RRcXwU8WUO6HEWgnQ+nlUUHLYKNKpwSG4q0hVHw2tUICx0nwv/RpWLz51LcLkkSVQsgZs5B37v8/d6Kn3bRN/xJQZK7RDeHdDdqaNKV6GxUoZUqjJVS4IIoGosG0+PCMGnieJRcSAAcatGEAokht5oXBYoqm1P2nruvxfYSldthVhIXLYS9wZfsVgMF0pDfn0dD7tbit/xZiJgQgqEvBiEpQYIbNL+9LQMKO/jZItBl5g7ApUVfo8rdyauI0Gvis7JxosKpU8KwWFDYqaFp0aC5TinmMiRkHGTTw9HyUDnQh2Y2cGA8QBxa2mesm86JEGrhadqDlxLFtoiMDMHytGhxvnmTFHdL5VTPe8jYKMXrb4xB9Q2FH6jyKeRVB0CBFOamcyKEmqqYgJEjgzFTFo5hLwUhN0cmtkkQrezo4LFQJEkw4rVgzNVGCkJ8QHpwUKEApGuaQ5YI/WasSsW2L2OxfEk0fs6Wib0m9NyDO8nYmhGL9MXRyNw2Fbx+NrqaVM8G+hUKhwUnsYq0sp42tVggIWShRfz7wihcLvj/C7t/CCc42inPAAAAAElFTkSuQmCC",aspectRatio:.9236234458259325,src:"/static/logo-072534f98a76d1a3c9fef17da57346d0-3a72f.png",srcSet:"/static/logo-072534f98a76d1a3c9fef17da57346d0-36e3a.png 38w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-217b9.png 75w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-3a72f.png 150w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-50692.png 225w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-a8344.png 300w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-1535b.png 450w,\n/static/logo-072534f98a76d1a3c9fef17da57346d0-a5efe.png 520w",sizes:"(max-width: 150px) 100vw, 150px"}}}}}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary",twitter:"@jsconfbp"}}}}},154:function(e,t,a){e.exports={header:"header-module--header--1a1MQ",header_inner:"header-module--header_inner--2aO-Y",header_inner_title:"header-module--header_inner_title--TWVps",header_logo:"header-module--header_logo--2QZPK"}},155:function(e,t,a){e.exports={navigation_wrapper_list:"navigation-module--navigation_wrapper_list--34_jL",navigation_wrapper_list_item:"navigation-module--navigation_wrapper_list_item--2OniX"}},156:function(e,t,a){e.exports={inner:"layout-module--inner--15RIz",content:"layout-module--content--1da59"}},157:function(e,t,a){"use strict";var n=a(150),i=a(0),r=a.n(i),o=a(4),c=a.n(o),s=a(149),d=a.n(s),l=a(147),u=a(152),p=a(158),m=a.n(p),f=a(153),g=function(){return r.a.createElement(l.StaticQuery,{query:"2003099420",render:function(e){return r.a.createElement(d.a,{meta:[{name:"og:type",content:"website"},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:description",content:e.site.siteMetadata.description},{name:"og:site_name",content:e.site.siteMetadata.title},{name:"og:url",content:"https://jsconfbp.com/"},{name:"og:image",content:"https://jsconfbp.com/social-cards/social-card.png"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:e.site.siteMetadata.twitter},{name:"twitter:creator",content:e.site.siteMetadata.twitter},{name:"twitter:title",content:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description},{name:"twitter:url",content:"https://jsconfbp.com/"},{name:"twitter:image",content:"https://jsconfbp.com/social-cards/social-card.png"}]})},data:f})},h=a(154),w=a.n(h),v=function(e){return r.a.createElement(l.StaticQuery,{query:"542272154",render:function(e){return r.a.createElement(m.a,{className:w.a.header_logo,title:"JSConf Budapest",fluid:e.placeholderImage.childImageSharp.fluid})},data:u})},y=function(e){e.siteTitle;return r.a.createElement("header",{className:w.a.header},r.a.createElement(g,null),r.a.createElement("div",{className:w.a.header_inner},r.a.createElement(l.Link,{to:"/"},r.a.createElement(v,null))))},b=a(155),E=a.n(b),x=function(){return r.a.createElement("nav",{className:E.a.navigation},r.a.createElement("nav",{className:E.a.navigation_wrapper},r.a.createElement("ul",{className:E.a.navigation_wrapper_list},r.a.createElement("li",{className:E.a.navigation_wrapper_list_item},r.a.createElement(l.Link,{to:"/about"},"About")),r.a.createElement("li",{className:E.a.navigation_wrapper_list_item},r.a.createElement(l.Link,{to:"/code-of-conduct"},"Code Of Conduct")),r.a.createElement("li",{className:E.a.navigation_wrapper_list_item},r.a.createElement(l.Link,{to:"/privacy-policy"},"Privacy Policy")))))},Q=a(156),A=a.n(Q),N=function(e){var t=e.className,a=e.contentBg,i=void 0!==a&&a,o=e.children;return r.a.createElement(l.StaticQuery,{query:"431921337",render:function(e){return r.a.createElement("main",{className:t},r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("section",{className:[A.a.inner,i?A.a.content:""].join(" ")},o),r.a.createElement(x,null))},data:n})};N.propTypes={children:c.a.node.isRequired};t.a=N}}]);
//# sourceMappingURL=component---src-pages-empty-page-js-7a908fbf9837ec251e0a.js.map