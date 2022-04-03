(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{109:function(t,e,n){},113:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(15),i=n(3),s=n(1),u=n.n(s),a=n(4),o=n(71),c=n.n(o),h=n(72),d=n.n(h);function f(){return!document.hidden}n(109);var l=n(0);function m(){var t=function(){var t=u.a.useState(f()),e=Object(i.a)(t,2),n=e[0],r=e[1],a=function(){return r(f())};return Object(s.useEffect)((function(){var t="visibilitychange";return document.addEventListener(t,a,!1),function(){document.removeEventListener(t,a)}})),n}(),e=u.a.useState(null),n=Object(i.a)(e,2),o=n[0],h=n[1];return u.a.useEffect((function(){if(t){var e,n=JSON.parse(localStorage.getItem("viewed-documents")||"[]"),i=[],s=Object(r.a)(n);try{for(s.s();!(e=s.n()).done;){var u=e.value;i.push({url:u.url,title:u.title,timestamp:u.timestamp})}}catch(a){s.e(a)}finally{s.f()}i.length&&h(i)}}),[t]),Object(l.jsxs)("article",{id:"recently-viewed-documents","aria-labelledby":"recently-viewed-documents",children:[Object(l.jsx)("h3",{children:"Recently viewed documents"}),o?o.length?Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Document"}),Object(l.jsx)("th",{children:"When"})]})}),Object(l.jsx)("tbody",{children:o.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsxs)(a.b,{to:t.url,children:[t.title," ",Object(l.jsx)("small",{children:t.url})]})}),Object(l.jsx)("td",{children:c()(new Date(t.timestamp)).fromNow()})]},t.url)}))})]}):Object(l.jsx)($,{children:"No recently viewed documents at the moment"}):Object(l.jsx)($,{children:"Loading recently viewed documents"})]})}function $(t){var e=t.children;return Object(l.jsx)("p",{className:"notification",children:e})}c.a.extend(d.a)},71:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",h="quarter",d="year",f="date",l="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},M={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:a,D:f,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=v;var O=function(t){return t instanceof w},b=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)g[t]&&(r=t),e&&(g[t]=e,r=t);else{var i=t.name;g[i]=t,r=i}return!n&&r&&(p=r),r||!n&&p},j=function(t,e){if(O(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},D=M;D.l=b,D.i=O,D.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===l)},y.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return j(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<j(t)},y.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!D.u(e)||e,h=D.p(t),l=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},m=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case d:return r?l(1,0):l(31,11);case c:return r?l(1,v):l(0,v+1);case o:var p=this.$locale().weekStart||0,g=($<p?$+7:$)-p;return l(r?y-g:y+(6-g),v);case a:case f:return m(M+"Hours",0);case u:return m(M+"Minutes",1);case s:return m(M+"Seconds",2);case i:return m(M+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,o=D.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[f]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],m=o===a?this.$D+(e-this.$W):e;if(o===c||o===d){var $=this.clone().set(f,1);$.$d[l](m),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[D.p(t)]()},y.add=function(r,h){var f,l=this;r=Number(r);var m=D.p(h),$=function(t){var e=j(l);return D.w(e.date(e.date()+Math.round(t*r)),l)};if(m===c)return this.set(c,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===a)return $(1);if(m===o)return $(7);var v=(f={},f[s]=e,f[u]=n,f[i]=t,f)[m]||1,y=this.$d.getTime()+r*v;return D.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:D.s(a+1,2,"0"),MMM:h(n.monthsShort,a,c,3),MMMM:h(c,a),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,u,!0),A:f(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,l){var m,$=D.p(f),v=j(r),y=(v.utcOffset()-this.utcOffset())*e,M=this-v,p=D.m(this,v);return p=(m={},m[d]=p/12,m[c]=p,m[h]=p/3,m[o]=(M-y)/6048e5,m[a]=(M-y)/864e5,m[u]=M/n,m[s]=M/e,m[i]=M/t,m)[$]||M,l?p:D.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return g[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),S=w.prototype;return j.prototype=S,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",d],["$D",f]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,w,j),t.$i=!0),j},j.locale=b,j.isDayjs=O,j.unix=function(t){return j(1e3*t)},j.en=g[p],j.Ls=g,j.p={},j}()},72:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,u,a){for(var o,c,h,d=s.$locale().relativeTime||i,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=f.length,m=0;m<l;m+=1){var $=f[m];$.d&&(o=u?n(e).diff(s,$.d,!0):s.diff(e,$.d,!0));var v=(t.rounding||Math.round)(Math.abs(o));if(h=o>0,v<=$.r||!$.r){v<=1&&m>0&&($=f[m-1]);var y=d[$.l];a&&(v=a(""+v)),c="string"==typeof y?y.replace("%d",v):y(v,r,$.l,h);break}}if(r)return c;var M=h?d.future:d.past;return"function"==typeof M?M(c):M.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var u=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(u(this),t)},r.fromNow=function(t){return this.from(u(this),t)}}}()}}]);
//# sourceMappingURL=13.c25b9b4a.chunk.js.map