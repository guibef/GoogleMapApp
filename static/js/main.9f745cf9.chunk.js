(this["webpackJsonpcovid-map"]=this["webpackJsonpcovid-map"]||[]).push([[0],{48:function(t,e,n){},49:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(2),o=n.n(a),r=n(7),i=n.n(r),c=(n(48),n(49),n(20)),s=n(19),l=n(22),d=n.n(l),u=n(31),h=n(13),p=n(14),j=n(36),f=n(35),b=n(37),v=n(86),m=n(90),g=n(89),O=n(91),x=n(3),y=Object(v.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function w(t){var e=y();return Object(x.jsx)(m.a,{className:e.root,children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:t.province}),Object(x.jsx)(O.a,{variant:"h5",component:"h2",children:t.county}),Object(x.jsxs)(O.a,{variant:"body2",component:"p",children:["Confirmed: ",t.stats.confirmed]}),Object(x.jsxs)(O.a,{variant:"body2",component:"p",children:["Death: ",t.stats.deaths]})]})})}var k=n(34),z=n.n(k),C=function(){return z.a.get("https://corona.lmao.ninja/v2/jhucsse/counties")},S=function(t){var e={total:0};if(!t)return e;var n,a={},o=Object(s.a)(t);try{for(o.s();!(n=o.n()).done;){var r=n.value;e.total+=r.stats.confirmed,a[r.province]=a[r.province]||{confirmed:0,deaths:0},a[r.province].confirmed+=r.stats.confirmed,a[r.province].deaths+=r.stats.deaths,a[r.province].coordinates=r.coordinates}}catch(l){o.e(l)}finally{o.f()}for(var i=1;i<=8;i++)e[i]=a;for(var c=9;c<=20;c++)e[c]=t;return e},I=function(t,e){return t&&e&&e.nw&&e.se&&(t.longitude>=e.nw.lng&&t.longitude<=e.se.lng||t.longitude<=e.nw.lng&&t.longitude>=e.se.lng)&&(t.latitude>=e.se.lat&&t.latitude<=e.nw.lat||t.latitude<=e.se.lat&&t.latitude>=e.nw.lat)},A=Object(v.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function B(t){var e=A();return Object(x.jsx)(m.a,{className:e.root,children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(O.a,{variant:"h5",component:"h2",children:t.state}),Object(x.jsxs)(O.a,{variant:"body2",component:"p",children:["Confirmed: ",t.confirmed]}),Object(x.jsxs)(O.a,{variant:"body2",component:"p",children:["Death: ",t.deaths]})]})})}var F=function(t){return t.children},L=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={zoom:11,bounds:null,points:{}},t.limit=20,t}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(x.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(x.jsx)(b.a,{bootstrapURLKeys:{key:"AIzaSyCppsSBI_wgtHR4zCv2hwq0LFYOFWkRawQ"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(){return t.handleMapInitialized()},onChange:function(e){var n=e.zoom,a=e.bounds;t.setState({zoom:n,bounds:a})},children:this.renderPoints()})})}},{key:"handleMapInitialized",value:function(){var t=Object(u.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C();case 3:e=t.sent,this.setState({points:S(e.data)}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"renderPoints",value:function(){var t=this.state.points[this.state.zoom],e=[];if(!t)return e;if(Array.isArray(t)){var n,a=Object(s.a)(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;if(I(o.coordinates,this.state.bounds)&&e.push(Object(x.jsx)(F,{lat:o.coordinates.latitude,lng:o.coordinates.longitude,children:Object(x.jsx)(w,Object(c.a)({},o))},"".concat(o.province,"-").concat(o.county))),e.length>=this.limit)break}}catch(l){a.e(l)}finally{a.f()}}else for(var r in t){var i=t[r];if(I(i.coordinates,this.state.bounds)&&e.push(Object(x.jsx)(F,{lat:i.coordinates.latitude,lng:i.coordinates.longitude,children:Object(x.jsx)(B,Object(c.a)(Object(c.a)({},i),{},{state:r}))},r)),e.length>=this.limit)break}return e}}]),n}(a.Component);L.defaultProps={center:{lat:42,lng:-72},zoom:10};var P=L;var M=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(P,{})})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),r(t),i(t)}))};i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root")),W()}},[[74,1,2]]]);
//# sourceMappingURL=main.9f745cf9.chunk.js.map