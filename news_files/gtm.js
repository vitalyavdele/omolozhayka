
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"348",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return Math.floor(2*Math.random())})();"]
    },{
      "function":"__v",
      "vtp_name":"CustomerId",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"customer_id_cookie"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(,|^)",["escape",["macro",1],9],"\/.test(",["escape",["macro",2],8,16],")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"free_trial_customer_id_cookie"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(,|^)",["escape",["macro",1],9],"\/.test(",["escape",["macro",4],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_name":"MinutesSinceCreation",
      "vtp_defaultValue":"-1",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\";try{var a=String(",["escape",["macro",6],8,16],");a=a.replace(\",\",\".\");b=Math.floor(a)}catch(c){}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var q=\"UA-48375203-3\",z=\"auto\",F=null;!function(){function h(a){Ta.set(a)}function q(a){}function r(){}function z(){}function F(a){}function Ua(a){}function Va(a){}function t(a,b,c,e){b[a]=function(){try{return e\u0026\u0026h(e),c.apply(this,arguments)}catch(v){throw v;}}}function ca(a,b,c){\"none\"==b\u0026\u0026(b=\"\");var e=[],v=G(a);a=\"__utma\"==a?6:2;for(var d=0;d\u003Cv.length;d++){var g=(\"\"+v[d]).split(\".\");g.length\u003E=a\u0026\u0026e.push({hash:g[0],R:v[d],O:g})}if(0!=e.length)return 1==e.length?e[0]:da(b,e)||da(c,e)||\nda(null,e)||e[0]}function da(a,b){var c;null==a?c=a=1:(c=L(a),a=L(0==a.indexOf(\".\")?a.substring(1):\".\"+a));for(var e=0;e\u003Cb.length;e++)if(b[e].hash==c||b[e].hash==a)return b[e]}function Wa(a){var b=a.get(w);if(a.get(A))return a=a.get(H),c=C(a+b,0),\"_ga\\x3d2.\"+M(c+\".\"+a+\"-\"+b);var c=C(b,0);return\"_ga\\x3d1.\"+M(c+\".\"+b)}function C(a,b){var c=new Date,e=p.navigator,d=e.plugins||[];a=[a,e.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b\u003Cd.length;++b)a.push(d[b].description);\nreturn L(a.join(\".\"))}function sa(a,b){if(b==k.location.hostname)return!1;for(var c=0;c\u003Ca.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0\u003C=b.indexOf(a[c]))return!0;return!1}function L(a){var b,c=1;if(a)for(c=0,b=a.length-1;0\u003C=b;b--){var e=a.charCodeAt(b);c=(c\u003C\u003C6\u0026268435455)+e+(e\u003C\u003C14);e=266338304\u0026c;c=0!=e?c^e\u003E\u003E21:c}return c}var Q=function(a){this.w=a||[]};Q.prototype.set=function(a){this.w[a]=!0};Q.prototype.encode=function(){for(var a=[],b=0;b\u003Cthis.w.length;b++)this.w[b]\u0026\u0026(a[Math.floor(b\/\n6)]^=1\u003C\u003Cb%6);for(b=0;b\u003Ca.length;b++)a[b]=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\".charAt(a[b]||0);return a.join(\"\")+\"~\"};var Ta=new Q,Xa=function(a){return a?a.replace(\/^[\\s\\xa0]+|[\\s\\xa0]+$\/g,\"\"):\"\"},ta=function(){for(var a=p.navigator.userAgent+(k.cookie?k.cookie:\"\")+(k.referrer?k.referrer:\"\"),b=a.length,c=p.history.length;0\u003Cc;)a+=c--^b++;return[R()^2147483647\u0026L(a),Math.round((new Date).getTime()\/1E3)].join(\".\")},Ya=function(){},M=function(a){return encodeURIComponent instanceof\nFunction?encodeURIComponent(a):(h(28),a)},S=function(a,b,c,e){try{a.addEventListener?a.addEventListener(b,c,!!e):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,c)}catch(v){h(27)}},ua=\/^[\\w\\-:\/.?=\u0026%!]+$\/,T=function(){var a=\"\"+k.location.hostname;return 0==a.indexOf(\"www.\")?a.substring(4):a},va=function(a,b){if(1==b.length\u0026\u0026null!=b[0]\u0026\u0026\"object\"==typeof b[0])return b[0];for(var c={},e=Math.min(a.length+1,b.length),d=0;d\u003Ce;d++){if(\"object\"==typeof b[d]){for(var f in b[d])b[d].hasOwnProperty(f)\u0026\u0026(c[f]=b[d][f]);break}d\u003C\na.length\u0026\u0026(c[a[d]]=b[d])}return c},D=function(){this.keys=[];this.values={};this.m={}};D.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[\":\"+a]=b:this.values[\":\"+a]=b};D.prototype.get=function(a){return this.m.hasOwnProperty(\":\"+a)?this.m[\":\"+a]:this.values[\":\"+a]};D.prototype.map=function(a){for(var b=0;b\u003Cthis.keys.length;b++){var c=this.keys[b],e=this.get(c);e\u0026\u0026a(c,e)}};var p=window,k=document,ea=window,G=function(a){var b=[],c=k.cookie.split(\";\");a=new RegExp(\"^\\\\s*\"+a+\"\\x3d\\\\s*(.*?)\\\\s*$\");\nfor(var e=0;e\u003Cc.length;e++){var d=c[e].match(a);d\u0026\u0026b.push(d[1])}return b},U=function(a,b,c,e,d,f){a:{var v=ea._gaUserPrefs;if(v\u0026\u0026v.ioo\u0026\u0026v.ioo()||d\u0026\u0026!0===ea[\"ga-disable-\"+d])var g=!0;else{try{var l=ea.external;if(l\u0026\u0026l._gaUserPrefs\u0026\u0026\"oo\"==l._gaUserPrefs){g=!0;break a}}catch(Vb){}g=!1}}if(g||Za.test(k.location.hostname)||\"\/\"==c\u0026\u0026$a.test(e))return!1;if(b\u0026\u00261200\u003Cb.length\u0026\u0026(b=b.substring(0,1200),h(24)),c=a+\"\\x3d\"+b+\"; path\\x3d\"+c+\"; \",f\u0026\u0026(c+=\"expires\\x3d\"+(new Date((new Date).getTime()+f)).toGMTString()+\n\"; \"),e\u0026\u0026\"none\"!=e\u0026\u0026(c+=\"domain\\x3d\"+e+\";\"),e=k.cookie,k.cookie=c,!(e=e!=k.cookie))a:{a=G(a);for(e=0;e\u003Ca.length;e++)if(b==a[e]){e=!0;break a}e=!1}return e},fa=function(a){return M(a).replace(\/\\(\/g,\"%28\").replace(\/\\)\/g,\"%29\")},$a=\/^(www\\.)?google(\\.com?)?(\\.[a-z]{2})?$\/,Za=\/(^|\\.)doubleclick\\.net$\/i,wa=function(){this.M=[]};wa.prototype.add=function(a){};var R=function(){return Math.round(2147483647*Math.random())},V=function(){this.data=new D},W=new D,ha=[];V.prototype.get=function(a){var b=xa(a),\nc=this.data.get(a);return b\u0026\u0026void 0==c\u0026\u0026(c=\"function\"==typeof b.defaultValue?b.defaultValue():b.defaultValue),b\u0026\u0026b.Z?b.Z(this,a,c):c};var m=function(a,b){return a=a.get(b),void 0==a?\"\":\"\"+a},ia=function(a,b){return a=a.get(b),void 0==a||\"\"===a?0:1*a};V.prototype.set=function(a,b,c){if(a)if(\"object\"==typeof a)for(var e in a)a.hasOwnProperty(e)\u0026\u0026ya(this,e,a[e],c);else ya(this,a,b,c)};var ya=function(a,b,c,e){if(void 0!=c)switch(b){case B:ab.test(c)}var d=xa(b);d\u0026\u0026d.o?d.o(a,b,c,e):a.data.set(b,c,e)},\nN=function(a,b,c,e,d){this.name=a;this.F=b;this.Z=e;this.o=d;this.defaultValue=c},xa=function(a){var b=W.get(a);if(!b)for(var c=0;c\u003Cha.length;c++){var e=ha[c],d=e[0].exec(a);if(d){b=e[1](d);W.set(b.name,b);break}}return b},bb=function(a){var b;return W.map(function(c,e){e.F==a\u0026\u0026(b=e)}),b\u0026\u0026b.name},d=function(a,b,c,e,d){return a=new N(a,b,c,e,d),W.set(a.name,a),a.name},X=function(a,b){ha.push([new RegExp(\"^\"+a+\"$\"),b])},l=function(a,b,c){return d(a,b,c,void 0,za)},za=function(){},O=\"slga\",Y=!1,cb=l(\"apiVersion\",\n\"v\"),db=l(\"clientVersion\",\"_v\");d(\"anonymizeIp\",\"aip\");var eb=d(\"adSenseId\",\"a\"),Aa=d(\"hitType\",\"t\");d(\"hitCallback\");d(\"hitPayload\");d(\"nonInteraction\",\"ni\");d(\"currencyCode\",\"cu\");d(\"dataSource\",\"ds\");d(\"useBeacon\",void 0,!1);d(\"transport\");d(\"sessionControl\",\"sc\",\"\");d(\"sessionGroup\",\"sg\");d(\"queueTime\",\"qt\");d(\"_s\",\"_s\");d(\"screenName\",\"cd\");var fb=(d(\"location\",\"dl\",\"\"),d(\"referrer\",\"dr\"),d(\"page\",\"dp\",\"\"));d(\"hostname\",\"dh\");d(\"language\",\"ul\");d(\"encoding\",\"de\");d(\"title\",\"dt\",function(){return k.title||\nvoid 0});X(\"contentGroup([0-9]+)\",function(a){return new N(a[0],\"cg\"+a[1])});d(\"screenColors\",\"sd\");d(\"screenResolution\",\"sr\");d(\"viewportSize\",\"vp\");d(\"javaEnabled\",\"je\");d(\"flashVersion\",\"fl\");d(\"campaignId\",\"ci\");d(\"campaignName\",\"cn\");d(\"campaignSource\",\"cs\");d(\"campaignMedium\",\"cm\");d(\"campaignKeyword\",\"ck\");d(\"campaignContent\",\"cc\");var gb=d(\"eventCategory\",\"ec\"),hb=d(\"eventAction\",\"ea\"),ib=d(\"eventLabel\",\"el\"),jb=d(\"eventValue\",\"ev\"),kb=d(\"socialNetwork\",\"sn\"),lb=d(\"socialAction\",\"sa\"),mb=\nd(\"socialTarget\",\"st\"),nb=(d(\"l1\",\"plt\"),d(\"l2\",\"pdt\"),d(\"l3\",\"dns\"),d(\"l4\",\"rrt\"),d(\"l5\",\"srt\"),d(\"l6\",\"tcp\"),d(\"l7\",\"dit\"),d(\"l8\",\"clt\"),d(\"timingCategory\",\"utc\")),ob=d(\"timingVar\",\"utv\"),pb=d(\"timingLabel\",\"utl\"),qb=d(\"timingValue\",\"utt\");d(\"appName\",\"an\");d(\"appVersion\",\"av\",\"\");d(\"appId\",\"aid\",\"\");d(\"appInstallerId\",\"aiid\",\"\");d(\"exDescription\",\"exd\");d(\"exFatal\",\"exf\");var rb=(d(\"expId\",\"xid\"),d(\"expVar\",\"xvar\"),d(\"exp\",\"exp\"),d(\"_utma\",\"_utma\")),sb=d(\"_utmz\",\"_utmz\"),tb=d(\"_utmht\",\"_utmht\");\nd(\"_hc\",void 0,0);d(\"_ti\",void 0,0);d(\"_to\",void 0,20);X(\"dimension([0-9]+)\",function(a){return new N(a[0],\"cd\"+a[1])});X(\"metric([0-9]+)\",function(a){return new N(a[0],\"cm\"+a[1])});d(\"linkerParam\",void 0,void 0,Wa,za);d(\"usage\",\"_u\");var Ba=d(\"_um\");d(\"forceSSL\",void 0,void 0,function(){return Y},function(a,b,c){h(34);Y=!!c});var ub=d(\"_j1\",\"jid\"),vb=d(\"_j2\",\"gjid\");X(\"\\\\\\x26(.*)\",function(a){var b=new N(a[0],a[1]),c=bb(a[0].substring(1));return c\u0026\u0026(b.Z=function(a){return a.get(c)},b.o=function(a,\nb,d,g){a.set(c,d,g)},b.F=void 0),b});var wb=l(\"_oot\"),xb=d(\"previewTask\"),yb=d(\"checkProtocolTask\"),zb=d(\"validationTask\"),Ab=d(\"checkStorageTask\"),Bb=d(\"historyImportTask\"),Cb=(d(\"samplerTask\"),d(\"_rlt\"));d(\"buildHitTask\");d(\"sendHitTask\");var Db=(d(\"ceTask\"),d(\"devIdTask\")),Eb=(d(\"timingTask\"),d(\"displayFeaturesTask\")),y=l(\"name\"),w=l(\"clientId\",\"cid\"),Ca=l(\"clientIdTime\"),Da=d(\"userId\",\"uid\"),B=l(\"trackingId\",\"tid\"),P=l(\"cookieName\",void 0,\"_ga\"),u=l(\"cookieDomain\"),E=l(\"cookiePath\",void 0,\"\/\"),\nja=l(\"cookieExpires\",void 0,63072E3),Z=l(\"legacyCookieDomain\"),ka=l(\"legacyHistoryImport\",void 0,!0),I=l(\"storage\",void 0,\"cookie\"),la=l(\"allowLinker\",void 0,!1),ma=l(\"allowAnchor\",void 0,!0),Ea=l(\"sampleRate\",\"sf\",100),na=l(\"siteSpeedSampleRate\",void 0,1),Fa=l(\"alwaysSendReferrer\",void 0,!1),H=l(\"_gid\",\"_gid\"),A=l(\"_ge\"),oa=l(\"_gcn\"),Fb=d(\"transportUrl\"),Gb=d(\"_r\",\"_r\"),pa=function(a,b,c){this.V=a;this.fa=b;this.$=!1;this.oa=c;this.ea=1},qa=function(a,b,c){if(a.fa\u0026\u0026a.$)return 0;if(a.$=!0,b){if(a.oa\u0026\u0026\nia(b,a.oa))return ia(b,a.oa);if(0==b.get(na))return 0}return 0==a.V?0:(void 0===c\u0026\u0026(c=void 0),0==c%a.V?Math.floor(c\/a.V)%a.ea+1:0)},J=!1,Ha=function(a){\"cookie\"==m(a,I)\u0026\u0026(Ga(a,w,P),a.get(A)\u0026\u0026Ga(a,H,oa,864E5))},Ga=function(a,b,c,e){var d=Ia(a,b);if(d){c=m(a,c);b=Ja(m(a,E));var f=ra(m(a,u));e=e||1E3*ia(a,ja);var g=m(a,B);if(\"auto\"!=f)U(c,d,b,f,g,e)\u0026\u0026(J=!0);else{h(32);var x;if(d=[],f=T().split(\".\"),4!=f.length||(x=f[f.length-1],parseInt(x,10)!=x)){for(x=f.length-2;0\u003C=x;x--)d.push(f.slice(x).join(\".\"));\nd.push(\"none\");x=d}else x=[\"none\"];for(var k=0;k\u003Cx.length;k++)if(f=x[k],a.data.set(u,f),d=Ia(a,w),U(c,d,b,f,g,e))return void(J=!0);a.data.set(u,\"auto\")}}else a.get(A)||h(54)},Hb=function(a){if(\"cookie\"==m(a,I)\u0026\u0026!J\u0026\u0026(Ha(a),!J))throw\"abort\";},Ib=function(a){if(a.get(ka)){var b=m(a,u),c=m(a,Z)||T(),e=ca(\"__utma\",c,b);e\u0026\u0026(h(19),a.set(tb,(new Date).getTime(),!0),a.set(rb,e.R),(b=ca(\"__utmz\",c,b))\u0026\u0026e.hash==b.hash\u0026\u0026a.set(sb,b.R))}},Ia=function(a,b){b=fa(m(a,b));var c=ra(m(a,u)).split(\".\").length;return a=\nKa(m(a,E)),1\u003Ca\u0026\u0026(c+=\"-\"+a),b?[\"GA1\",c,b].join(\".\"):\"\"},Ma=function(a,b){if(b\u0026\u0026!(1\u003Eb.length)){for(var c=[],e=0;e\u003Cb.length;e++){var d=b[e].split(\".\");var f=d.shift();(\"GA1\"==f||\"1\"==f)\u0026\u00261\u003Cd.length?(f=d.shift().split(\"-\"),1==f.length\u0026\u0026(f[1]=\"1\"),f[0]*=1,f[1]*=1,d={H:f,s:d.join(\".\")}):d=void 0;d\u0026\u0026c.push(d)}if(1==c.length)return h(13),c[0].s;if(0!=c.length)return h(14),b=ra(m(a,u)).split(\".\").length,c=La(c,b,0),1==c.length?c[0].s:(a=Ka(m(a,E)),c=La(c,a,1),c[0]\u0026\u0026c[0].s);h(12)}},La=function(a,b,c){for(var e,\nd=[],f=[],g=0;g\u003Ca.length;g++){var h=a[g];h.H[c]==b?d.push(h):void 0==e||h.H[c]\u003Ce?(f=[h],e=h.H[c]):h.H[c]==e\u0026\u0026f.push(h)}return 0\u003Cd.length?d:f},ra=function(a){return 0==a.indexOf(\".\")?a.substr(1):a},Ja=function(a){return a?(1\u003Ca.length\u0026\u0026a.lastIndexOf(\"\/\")==a.length-1\u0026\u0026(a=a.substr(0,a.length-1)),0!=a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a),a):\"\/\"},Ka=function(a){return a=Ja(a),\"\/\"==a?1:a.split(\"\/\").length},Jb=new RegExp(\/^https?:\\\/\\\/([^\\\/:]+)\/),Kb=\/(.*)([?\u0026#])(?:_ga=[^\u0026#]*)(?:\u0026?)(.*)\/,aa=function(a){h(48);this.target=\na;this.T=!1};aa.prototype.ca=function(a,b){if(a.tagName){if(\"a\"==a.tagName.toLowerCase())return void(a.href\u0026\u0026(a.href=ba(this,a.href,b)));if(\"form\"==a.tagName.toLowerCase())return Na(this,a)}if(\"string\"==typeof a)return ba(this,a,b)};var ba=function(a,b,c){var e=Kb.exec(b);e\u0026\u00263\u003C=e.length\u0026\u0026(b=e[1]+(e[3]?e[2]+e[3]:\"\"));a=a.target.get(\"linkerParam\");var d=b.indexOf(\"?\");e=b.indexOf(\"#\");return c?b+=(-1==e?\"#\":\"\\x26\")+a:(c=-1==d?\"?\":\"\\x26\",b=-1==e?b+(c+a):b.substring(0,e)+c+a+b.substring(e)),b.replace(\/\u0026+_ga=\/,\n\"\\x26_ga\\x3d\")},Na=function(a,b){if(b\u0026\u0026b.action)if(\"get\"==b.method.toLowerCase()){a=a.target.get(\"linkerParam\").split(\"\\x3d\")[1];for(var c=b.childNodes||[],e=0;e\u003Cc.length;e++)if(\"_ga\"==c[e].name)return void c[e].setAttribute(\"value\",a);c=k.createElement(\"input\");c.setAttribute(\"type\",\"hidden\");c.setAttribute(\"name\",\"_ga\");c.setAttribute(\"value\",a);b.appendChild(c)}else\"post\"==b.method.toLowerCase()\u0026\u0026(b.action=ba(a,b.action))};aa.prototype.S=function(a,b,c){function e(c){try{c=c||p.event;a:{var e=\nc.target||c.srcElement;for(c=100;e\u0026\u00260\u003Cc;){if(e.href\u0026\u0026e.nodeName.match(\/^a(?:rea)?$\/i)){var f=e;break a}e=e.parentNode;c--}f={}}(\"http:\"==f.protocol||\"https:\"==f.protocol)\u0026\u0026sa(a,f.hostname||\"\")\u0026\u0026f.href\u0026\u0026(f.href=ba(d,f.href,b))}catch(Ub){h(26)}}var d=this;this.T||(this.T=!0,S(k,\"mousedown\",e,!1),S(k,\"keyup\",e,!1));c\u0026\u0026S(k,\"submit\",function(b){if(b=b||p.event,(b=b.target||b.srcElement)\u0026\u0026b.action){var c=b.action.match(Jb);c\u0026\u0026sa(a,c[1])\u0026\u0026Na(d,b)}})};var Oa,Mb=function(a,b,c){this.U=ub;this.aa=b;(b=c)||\n(b=(b=m(a,y))\u0026\u0026\"t0\"!=b?Lb.test(b)?\"_gat_\"+fa(m(a,B)):\"_gat_\"+fa(b):\"_gat\");this.Y=b},Pa=function(a,b,c){b.get(c)||(\"1\"==G(a.Y)[0]?b.set(c,\"\",!0):b.set(c,\"\"+R(),!0))},Lb=\/^gtm\\d+$\/,Nb=function(a){if(!a.get(\"dcLoaded\")\u0026\u0026\"cookie\"==a.get(I)){var b=a,c=b;var e=(c=c.get(Ba),\"[object Array]\"==Object.prototype.toString.call(Object(c))||(c=[]),c);e=new Q(e);e.set(51);b.set(Ba,e.w);b=new Mb(a);Pa(b,a,b.U);Pa(b,a,vb);e=b;c=a;c.get(e.U)\u0026\u0026U(e.Y,\"1\",c.get(E),c.get(u),c.get(B),6E4);a.get(b.U)\u0026\u0026(a.set(Gb,1,!0),a.set(Fb,\n\"undefined\/r\/collect\",!0))}},Ob=function(){var a=p.gaGlobal=p.gaGlobal||{};return a.hid=a.hid||R()},Pb=function(a,b,c){if(!Oa){var e=k.location.hash;var d=p.name,f=\/^#?gaso=([^\u0026]*)\/;if(d=(e=(e=e\u0026\u0026e.match(f)||d\u0026\u0026d.match(f))?e[1]:G(\"GASO\")[0]||\"\")\u0026\u0026e.match(\/^(?:!([-0-9a-z.]{1,40})!)?([-.\\w]{10,1200})$\/i))U(\"GASO\",\"\"+e,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=d[1],a=\"https:\/\/www.google.com\/analytics\/web\/inpage\/pub\/inpage.js?\"+(a?\"prefix\\x3d\"+a+\"\\x26\":\"\")+R(),b=\"_gasojs\",\ne=c=void 0,a\u0026\u0026(c?(e=\"\",b\u0026\u0026ua.test(b)\u0026\u0026(e=' id\\x3d\"'+b+'\"'),ua.test(a)\u0026\u0026k.write(\"\\x3cscript\"+e+' src\\x3d\"'+a+'\"\\x3e\\x3c\/script\\x3e')):(c=k.createElement(\"script\"),c.type=\"text\/javascript\",c.async=!0,c.src=a,e\u0026\u0026(c.onload=e),b\u0026\u0026(c.id=b),a=k.getElementsByTagName(\"script\")[0],a.parentNode.insertBefore(c,a)));Oa=!0}},ab=\/^(UA|YT|MO|GP)-(\\d+)-(\\d+)$\/,K=function(a){function b(a,b){e.b.data.set(a,b)}function c(a,c){b(a,c);e.filters.add(a)}var e=this;this.b=new V;this.filters=new wa;b(y,a[y]);b(B,Xa(a[B]));\nb(P,a[P]);b(u,a[u]||T());b(E,a[E]);b(ja,a[ja]);b(Z,a[Z]);b(ka,a[ka]);b(la,a[la]);b(ma,a[ma]);b(Ea,a[Ea]);b(na,a[na]);b(Fa,a[Fa]);b(I,a[I]);b(Da,a[Da]);b(Ca,a[Ca]);b(A,a[A]);b(cb,1);b(db,\"j50\");c(wb,q);c(xb,z);c(yb,r);c(zb,Ua);c(Ab,Hb);c(Bb,Ib);c(Cb,Va);c(Db,F);c(Eb,Nb);Qb(this.b,a[w]);this.b.set(eb,Ob());Pb(this.b.get(B),this.b.get(u),this.b.get(E));this.ra=new pa(1E4,!0,\"gaexp10\")},Qb=function(a,b){if(\"cookie\"==m(a,I)){J=!1;var c=G(m(a,P));if(!(c=Ma(a,c))){c=m(a,u);var e=m(a,Z)||T();c=ca(\"__utma\",\ne,c);void 0!=c?(h(10),c=c.O[1]+\".\"+c.O[2]):c=void 0}c\u0026\u0026(a.data.set(w,c),c=G(m(a,oa)),(c=Ma(a,c))\u0026\u0026a.data.set(H,c),J=!0)}a:if(c=a.get(ma),e=k.location[c?\"href\":\"search\"],c=(e=e.match(\"(?:\\x26|#|\\\\?)\"+M(\"_ga\").replace(\/([.*+?^=!:${}()|\\[\\]\\\/\\\\])\/g,\"\\\\$1\")+\"\\x3d([^\\x26#]*)\"))\u0026\u00262==e.length?e[1]:\"\")if(a.get(la))if(-1==(e=c.indexOf(\".\")))h(22);else{var d=c.substring(0,e),f=c.substring(e+1);e=f.indexOf(\".\");c=f.substring(0,e);f=f.substring(e+1);if(\"1\"==d){if(e=f,c!=C(e,0)\u0026\u0026c!=C(e,-1)\u0026\u0026c!=C(e,-2)){h(23);\nbreak a}}else{if(\"2\"!=d){h(22);break a}if(d=f.split(\"-\",2),e=d[1],c!=C(d[0]+e,0)\u0026\u0026c!=C(d[0]+e,-1)\u0026\u0026c!=C(d[0]+e,-2)){h(53);break a}h(2);a.data.set(H,d[0])}h(11);a.data.set(w,e)}else h(21);b\u0026\u0026(h(9),a.data.set(w,M(b)));a.get(w)||((b=(b=p.gaGlobal\u0026\u0026p.gaGlobal.vid)\u0026\u0026-1!=b.search(\/^(?:utma\\.)?\\d+\\.\\d+$\/)?b:void 0)?(h(17),a.data.set(w,b)):(h(8),a.data.set(w,ta())));a.data.set(A,a.get(A)||1==qa(new pa(0,!0),void 0,L(a.get(w))));a.get(A)\u0026\u0026(b=m(a,P),a.data.set(oa,\"_ga\"==b?\"_gid\":b+\"_gid\"));a.get(A)\u0026\u0026!a.get(H)\u0026\u0026\n(h(3),a.data.set(H,ta()));Ha(a)};K.prototype.get=function(a){return this.b.get(a)};K.prototype.set=function(a,b){this.b.set(a,b)};var Rb={pageview:[fb],event:[gb,hb,ib,jb],social:[kb,lb,mb],timing:[nb,ob,qb,pb]};K.prototype.send=function(a){if(!(1\u003Earguments.length)){var b,c;\"string\"==typeof arguments[0]?(b=arguments[0],c=[].slice.call(arguments,1)):(b=arguments[0]\u0026\u0026arguments[0][Aa],c=arguments);b\u0026\u0026(c=va(Rb[b]||[],c),c[Aa]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={},qa(this.ra,\nthis.b)\u0026\u0026this.b.get(B))}};K.prototype.ma=function(a,b){var c=this;c.get(y)};var Qa=function(a){if(\"prerender\"==k.visibilityState||(a(),!1)){h(16);var b=!1,c=function(){if(!b\u0026\u0026\"prerender\"!=k.visibilityState\u0026\u0026(a(),!0)){b=!0;var e=c,d=k;d.removeEventListener?d.removeEventListener(\"visibilitychange\",e,!1):d.detachEvent\u0026\u0026d.detachEvent(\"onvisibilitychange\",e)}};S(k,\"visibilitychange\",c)}},Sb=function(a){};new D;new D;new D;var n={ga:function(){n.f=[]}};n.ga();n.D=function(a){var b=n.J.apply(n,arguments);\nb=n.f.concat(b);for(n.f=[];0\u003Cb.length\u0026\u0026!n.v(b[0])\u0026\u0026(b.shift(),!(0\u003Cn.f.length)););n.f=n.f.concat(b)};n.J=function(a){for(var b=[],c=0;c\u003Carguments.length;c++)try{var d=new Sb(arguments[c]);d.g||(d.i\u0026\u0026(d.ha=void 0),b.push(d))}catch(v){}return b};n.v=function(a){try{if(a.u)a.u.call(p,g.j(\"t0\"));else{var b=a.c==O?g:g.j(a.c);if(a.A)\"t0\"!=a.c||g.create.apply(g,a.a);else if(a.ba)g.remove(a.c);else if(b){if(a.i)return a.ha\u0026\u0026(a.ha=void 0),!0;if(a.K){var c=a.C,d=a.a,h=b.plugins_.get(a.K);h[c].apply(h,d)}else b[a.C].apply(b,\na.a)}}}catch(f){}};var g=function(a){h(1);n.D.apply(n,[arguments])};g.h={};g.P=[];g.L=0;g.answer=42;var Tb=[B,u,y];g.create=function(a){var b=va(Tb,[].slice.call(arguments));b[y]||(b[y]=\"t0\");var c=\"\"+b[y];return g.h[c]?g.h[c]:(b=new K(b),g.h[c]=b,g.P.push(b),b)};g.remove=function(a){for(var b=0;b\u003Cg.P.length;b++)if(g.P[b].get(y)==a){g.P.splice(b,1);g.h[a]=null;break}};g.j=function(a){return g.h[a]};g.getAll=function(){return g.P.slice(0)};g.N=function(){\"ga\"!=O\u0026\u0026h(49);var a=p[O];if(!a||42!=a.answer){g.L=\na\u0026\u0026a.l;g.loaded=!0;var b=p[O]=g;t(\"create\",b,b.create);t(\"remove\",b,b.remove);t(\"getByName\",b,b.j,5);t(\"getAll\",b,b.getAll,6);b=K.prototype;t(\"get\",b,b.get,7);t(\"set\",b,b.set,4);t(\"send\",b,b.send);t(\"requireSync\",b,b.ma);b=V.prototype;t(\"get\",b,b.get);t(\"set\",b,b.set);\"https:\"==k.location.protocol||Y||!qa(new pa(1E4))||(h(36),Y=!0);(p.gaplugins=p.gaplugins||{}).Linker=aa;b=aa.prototype;t(\"decorate\",b,b.ca,20);t(\"autoLink\",b,b.S,25);a=a\u0026\u0026a.q;\"[object Array]\"==Object.prototype.toString.call(Object(a))?\nn.D.apply(g,a):h(50)}};g.da=function(){for(var a=g.getAll(),b=0;b\u003Ca.length;b++)a[b].get(y)};var Ra=g.N,Sa=p[O];Sa\u0026\u0026Sa.r?Ra():Qa(Ra);Qa(function(){n.D([\"provide\",\"render\",Ya])})}(window);var r=\"SCITYLANA\";r=r+\"_temp_\"+Math.round(2147483647*Math.random());q=slga.create(q,z,r);F=F||q.get(\"userId\")||q.get(\"clientId\");slga.remove(r);r=window;q=\"_o_r_d_e_r_sl\";z=(new Date).getTime();r[q]=r[q]?r[q]==z?z+1:z\u003Er[q]?z:r[q]+1:z;return F=[\"sl\\x3d1\",\"u\\x3d\"+F,\"t\\x3d\"+r[q]].join(\"\\x26\")})();"]
    },{
      "function":"__u"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"ProcessTrial",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessSale",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessConversion",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessSeenCheckout",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessSeenEntryAny",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"MainOrUser",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Culture",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"SiteVer",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Version"
    },{
      "function":"__v",
      "vtp_name":"ExpQS",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"SWStep"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-119897294-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"PreOrFre",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Instrumentation",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__f"
    },{
      "function":"__u",
      "vtp_component":"QUERY"
    },{
      "function":"__v",
      "vtp_name":"Language",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessLogin",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"CancelPS",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"EarlyCancelPS",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"EntrySPA",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"NumberOfLogins",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Email",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"OptiSnippet",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"SalesType",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"RefCode",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"PreviewPage",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"RecognizedCustomer",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Instrumentation",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Segmentation",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"BlogUser",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Market",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"CancelCheckout",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"ProcessSeenEntryAny",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"ProcessTrial",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"target",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"ConversionValue",
      "vtp_defaultValue":"",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"ConversionCurrency",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",42],
      "vtp_defaultValue":"650",
      "vtp_map":["list",["map","key","AE","value","400"],["map","key","AF","value","250"],["map","key","AG","value","400"],["map","key","AL","value","250"],["map","key","AM","value","400"],["map","key","AO","value","200"],["map","key","AR","value","350"],["map","key","AS","value","250"],["map","key","AT","value","500"],["map","key","AU","value","450"],["map","key","AZ","value","500"],["map","key","BA","value","400"],["map","key","BB","value","400"],["map","key","BD","value","250"],["map","key","BE","value","800"],["map","key","BF","value","200"],["map","key","BG","value","400"],["map","key","BH","value","500"],["map","key","BI","value","200"],["map","key","BJ","value","200"],["map","key","BM","value","400"],["map","key","BN","value","400"],["map","key","BO","value","250"],["map","key","BQ","value","370"],["map","key","BR","value","300"],["map","key","BS","value","400"],["map","key","BT","value","250"],["map","key","BW","value","300"],["map","key","BY","value","500"],["map","key","BZ","value","400"],["map","key","CA","value","500"],["map","key","CD","value","300"],["map","key","CG","value","200"],["map","key","CH","value","1000"],["map","key","CI","value","300"],["map","key","CL","value","400"],["map","key","CM","value","300"],["map","key","CN","value","350"],["map","key","CO","value","400"],["map","key","CR","value","400"],["map","key","CV","value","200"],["map","key","CW","value","400"],["map","key","CY","value","400"],["map","key","CZ","value","350"],["map","key","DE","value","600"],["map","key","DJ","value","200"],["map","key","DK","value","1100"],["map","key","DM","value","400"],["map","key","DO","value","400"],["map","key","DZ","value","300"],["map","key","EC","value","400"],["map","key","EE","value","400"],["map","key","EG","value","300"],["map","key","ES","value","400"],["map","key","ET","value","200"],["map","key","FI","value","700"],["map","key","FJ","value","250"],["map","key","FK","value","400"],["map","key","FO","value","700"],["map","key","FR","value","600"],["map","key","GA","value","300"],["map","key","GB","value","600"],["map","key","GD","value","400"],["map","key","GE","value","500"],["map","key","GH","value","250"],["map","key","GN","value","200"],["map","key","GP","value","700"],["map","key","GR","value","400"],["map","key","GT","value","400"],["map","key","GW","value","200"],["map","key","GY","value","350"],["map","key","HK","value","450"],["map","key","HN","value","400"],["map","key","HR","value","400"],["map","key","HT","value","400"],["map","key","HU","value","400"],["map","key","ID","value","350"],["map","key","IE","value","400"],["map","key","IL","value","500"],["map","key","IN","value","250"],["map","key","IQ","value","300"],["map","key","IR","value","370"],["map","key","IS","value","400"],["map","key","IT","value","450"],["map","key","JM","value","400"],["map","key","JO","value","300"],["map","key","JP","value","400"],["map","key","KE","value","250"],["map","key","KG","value","250"],["map","key","KH","value","250"],["map","key","KM","value","200"],["map","key","KR","value","400"],["map","key","KW","value","350"],["map","key","KY","value","400"],["map","key","KZ","value","350"],["map","key","LA","value","250"],["map","key","LB","value","350"],["map","key","LC","value","400"],["map","key","LI","value","800"],["map","key","LK","value","300"],["map","key","LR","value","200"],["map","key","LT","value","400"],["map","key","LU","value","600"],["map","key","LV","value","400"],["map","key","LY","value","200"],["map","key","MA","value","300"],["map","key","MC","value","800"],["map","key","MD","value","400"],["map","key","ME","value","400"],["map","key","MG","value","200"],["map","key","MK","value","400"],["map","key","ML","value","200"],["map","key","MM","value","250"],["map","key","MN","value","250"],["map","key","MO","value","400"],["map","key","MQ","value","400"],["map","key","MR","value","200"],["map","key","MT","value","500"],["map","key","MU","value","250"],["map","key","MV","value","250"],["map","key","MX","value","400"],["map","key","MY","value","300"],["map","key","MZ","value","200"],["map","key","NA","value","200"],["map","key","NC","value","300"],["map","key","NG","value","200"],["map","key","NI","value","400"],["map","key","NL","value","750"],["map","key","NO","value","800"],["map","key","NP","value","250"],["map","key","NZ","value","400"],["map","key","OM","value","300"],["map","key","PA","value","400"],["map","key","PE","value","350"],["map","key","PF","value","250"],["map","key","PG","value","300"],["map","key","PH","value","350"],["map","key","PK","value","300"],["map","key","PL","value","400"],["map","key","PR","value","400"],["map","key","PT","value","400"],["map","key","PY","value","400"],["map","key","QA","value","500"],["map","key","RE","value","370"],["map","key","RO","value","400"],["map","key","RS","value","400"],["map","key","RU","value","143"],["map","key","RW","value","200"],["map","key","SA","value","450"],["map","key","SD","value","370"],["map","key","SE","value","850"],["map","key","SG","value","350"],["map","key","SI","value","400"],["map","key","SK","value","400"],["map","key","SN","value","250"],["map","key","SO","value","200"],["map","key","SR","value","350"],["map","key","ST","value","200"],["map","key","SV","value","400"],["map","key","SY","value","370"],["map","key","TC","value","400"],["map","key","TG","value","300"],["map","key","TH","value","400"],["map","key","TJ","value","250"],["map","key","TL","value","250"],["map","key","TM","value","250"],["map","key","TN","value","300"],["map","key","TR","value","250"],["map","key","TT","value","400"],["map","key","TW","value","450"],["map","key","TZ","value","250"],["map","key","UA","value","350"],["map","key","UG","value","300"],["map","key","US","value","400"],["map","key","UY","value","400"],["map","key","UZ","value","250"],["map","key","VA","value","400"],["map","key","VE","value","400"],["map","key","VI","value","400"],["map","key","VN","value","300"],["map","key","XK","value","400"],["map","key","YE","value","250"],["map","key","YT","value","200"],["map","key","ZA","value","400"],["map","key","ZM","value","350"],["map","key","ZW","value","200"]]
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"NumberOfLogins"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"NumberOfLogins"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CustomerId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;try{var b=Math.floor((Date.now()-Date.UTC(2016,7,8,7,0,0,0))\/1E3\/60),c=Math.floor((Date.now()-Date.UTC(2016,7,12,21,59,0,0))\/1E3\/60);a=",["escape",["macro",7],8,16],"\u003C=b;nottoofresh=",["escape",["macro",7],8,16],"\u003E=c}catch(d){}return a\u0026\u0026nottoofresh})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"IsMobile"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ProcessTrial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Version"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Message"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Segmentation"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-119140735-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"URL"
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":25
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":40
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":210
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":236
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":295
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":342
    },{
      "function":"__paused",
      "vtp_originalTagType":"ga",
      "tag_id":353
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":381
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":382
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar d,expires,cvalue=\"\";",["escape",["macro",1],8,16],"\u0026\u0026(d=new Date,d.setTime(d.getTime()+6E5),expires=\"expires\\x3d\"+d.toUTCString(),document.cookie=\"customer_id_cookie\\x3d\"+cvalue+",["escape",["macro",1],8,16],"+\"; \"+expires+\"; path\\x3d\/\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E0\u003C=document.cookie.indexOf(\"customer_id_cookie\")?dataLayer.push({event:\"customerId-cookie-found\"}):dataLayer.push({event:\"customerId-cookie-not-found\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":288
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar d,expires,cvalue=\"\";",["escape",["macro",1],8,16],"\u0026\u0026(d=new Date,d.setTime(d.getTime()+6E5),expires=\"expires\\x3d\"+d.toUTCString(),document.cookie=\"free_trial_customer_id_cookie\\x3d\"+cvalue+",["escape",["macro",1],8,16],"+\"; \"+expires+\"; path\\x3d\/\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":290
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E0\u003C=document.cookie.indexOf(\"free_trial_customer_id_cookie\")?dataLayer.push({event:\"free-trial-customerId-cookie-found\"}):dataLayer.push({event:\"free-trial-customerId-cookie-not-found\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":291
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(e,b,f,g){var c,d,a;e.SMCX=e.SMCX||[];b.getElementById(g)||(c=b.getElementsByTagName(f),d=c[c.length-1],a=b.createElement(f),a.type=\"text\/javascript\",a.async=!0,a.id=g,a.src=[\"https:\"===location.protocol?\"https:\/\/\":\"http:\/\/\",\"widget.surveymonkey.com\/collect\/website\/js\/oGV2Ywcf6Y89wItD87kGvLDEiam9qEEQtFtUZm_2FWUTPWU8SLUdSt0uu9bZh2HWK_2B.js\"].join(\"\"),d.parentNode.insertBefore(a,d))})(window,document,\"script\",\"smcx-sdk\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":313
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(e,b,f,g){var c,d,a;e.SMCX=e.SMCX||[];b.getElementById(g)||(c=b.getElementsByTagName(f),d=c[c.length-1],a=b.createElement(f),a.type=\"text\/javascript\",a.async=!0,a.id=g,a.src=[\"https:\"===location.protocol?\"https:\/\/\":\"http:\/\/\",\"widget.surveymonkey.com\/collect\/website\/js\/c8osvoco2O9s9KaFYbALq5jz_2F_2BHo2v318TXoXP3ie9KL9TCOk54974RZqb5MDoPL.js\"].join(\"\"),d.parentNode.insertBefore(a,d))})(window,document,\"script\",\"smcx-sdk\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":314
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"MainSite"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"en-US"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"US"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"V4"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"V4EditormodelExperiment"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^$)|(\\s+$)"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"[0-9]"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"Userpage"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"customerId-cookie-not-found"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"free-trial-customerId-cookie-not-found"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Free"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"''"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"''"
    },{
      "function":"_lt",
      "arg0":["macro",7],
      "arg1":"20"
    },{
      "function":"_ge",
      "arg0":["macro",7],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"''"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"''"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"BuiltToPurpose2Experiment=BuiltToPurpose2"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"BuiltToPurpose2Experiment=Regular"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,2],["add",1,11,15]],
    [["if",1,3],["add",2]],
    [["if",1,4],["add",3,13]],
    [["if",1,5],["add",4]],
    [["if",1,6],["add",5]],
    [["if",1,7],["add",6]],
    [["if",8,9,10,11,12],["add",7]],
    [["if",1,7],["unless",13,14],["add",8]],
    [["if",1],["unless",15,16],["add",9]],
    [["if",1],["add",10]],
    [["if",17],["add",12]],
    [["if",18],["add",14]],
    [["if",7,8,9,19,22,23,26,27],["unless",10,20,21,24,25],["add",16]],
    [["if",7,8,9,19,22,23,27,28],["unless",10,20,21,24,25],["add",17]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Kf:!0},fa={};try{fa.__proto__=ea;da=fa.Kf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca,ia=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,ka=null;var ma=function(){},na=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},va=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},xa=function(a,b){for(var c=new wa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ya=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},wa=function(){this.prefix="gtm.";this.values={}};wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};wa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Oa=function(a){var b=
[];ya(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ta=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sa(a,"constructor")&&!Sa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sa(a,b)},n=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Sa(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=n(e,c[d])):Ta(e)?(Ta(c[d])||(c[d]={}),c[d]=n(e,c[d])):c[d]=e}return c};
var Ua=[],Va={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Xa=function(a){return Va[a]},Ya=/[\x00\x22\x26\x27\x3c\x3e]/g;var bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};
Ua[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bb,db)+"'"}};var eb=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;Ua[9]=function(a){return String(a).replace(eb,db)};var lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return mb[a]};Ua[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],ub=[],vb=[],wb={},xb,yb,zb,Ab=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=wb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Db=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=wb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Zc(h))return;c[f]=!0;try{var k=Db(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);zb&&(d=zb.ig(d,k))}catch(y){b.Fe&&b.Fe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Cb(a[p],b,c);yb&&(m=m||r===yb.Kb);d.push(r)}return yb&&m?yb.lg(d):d.join("");case "escape":d=Cb(a[1],b,c);if(yb&&pa(a[1])&&"macro"===a[1][0]&&yb.Jg(a))return yb.$g(d);d=String(d);for(var t=2;t<a.length;t++)Ua[a[t]]&&(d=Ua[a[t]](d));return d;case "tag":var q=a[1];if(!ub[q])throw Error("Unable to resolve tag reference "+q+".");return d={se:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=Gb(u,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return xb(Db(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{Cd:a("convert_case_to"),Dd:a("convert_false_to"),Ed:a("convert_null_to"),Fd:a("convert_true_to"),Gd:a("convert_undefined_to"),Fh:a("debug_mode_metadata"),wa:a("function"),hf:a("instance_name"),nf:a("live_only"),qf:a("malware_disabled"),rf:a("metadata"),Gh:a("original_vendor_template_id"),vf:a("once_per_event"),Md:a("once_per_load"),Ud:a("setup_tags"),Wd:a("tag_id"),Xd:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Kb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],p=0;p<ub.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ib(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={ab:"_ee",Lc:"_syn",Ih:"_uei",Ac:"event_callback",Jb:"event_timeout",I:"gtag.config",fa:"allow_ad_personalization_signals",Bc:"restricted_data_processing",Za:"allow_google_signals",ia:"cookie_expires",Ib:"cookie_update",$a:"session_duration",ka:"user_properties",va:"transport_url",N:"ads_data_redaction"};C.Ce=[C.fa,C.Za,C.Ib];C.Ge=[C.ia,C.Jb,C.$a];var E=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ka)b:{var f=ia.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ja.test(k)){ka=k;break b}}ka=""}e=ka;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){E.setTimeout(a,0)},pc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){fc.sendBeacon&&fc.sendBeacon(a)||mc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var vc={},I=function(a,b){vc[a]=vc[a]||[];vc[a][b]=!0},wc=function(a){for(var b=[],c=vc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var xc={},yc=function(a){return void 0==xc[a]?!1:xc[a]};var zc=[];function Ac(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},set:Bc,update:Dc,addListener:Ec,notifyListeners:Fc,active:!1});return a.ics}
function Bc(a,b,c,d,e,f){var h=Ac();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,p=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,Gc(a),Fc(),I("TAGGING",2))},f)}}}
function Dc(a,b){var c=Ac();c.active=!0;if(void 0!=b){var d=Hc(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Hc(a);f.quiet?(f.quiet=!1,Gc(a)):h!==d&&Gc(a)}}function Ec(a,b){zc.push({me:a,vg:b})}function Gc(a){for(var b=0;b<zc.length;++b){var c=zc[b];pa(c.me)&&-1!==c.me.indexOf(a)&&(c.Ne=!0)}}function Fc(){for(var a=0;a<zc.length;++a){var b=zc[a];if(b.Ne){b.Ne=!1;try{b.vg.call()}catch(c){}}}}
var Hc=function(a){var b=Ac().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Ic=function(a){return!(Ac().entries[a]||{}).quiet},Jc=function(){return yc("gtag_cs_api")?Ac().active:!1},Kc=function(a,b){Ac().addListener(a,b)},Lc=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Ic(b[e]))return!0;return!1}if(c()){var d=!1;Kc(b,function(){d||c()||(d=!0,a())})}else a()},Mc=function(a,b){if(!1===Hc(b)){var c=!1;Kc([b],function(){!c&&Hc(b)&&(a(),c=!0)})}};var Nc=[C.o,C.H],Oc=function(a){var b=a[C.mh];b&&I("GTM",40);var c=a[C.sh];c&&I("GTM",41);for(var d=pa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Nc.length;f++){var h=Nc[f],k=a[Nc[f]],l=d[e];Ac().set(h,k,l,"UA","UA-51",c)}},Pc=function(a){for(var b=0;b<Nc.length;b++){var c=Nc[b],d=a[Nc[b]];Ac().update(c,d)}Ac().notifyListeners()},Qc=function(a){var b=Hc(a);return void 0!=b?b:!0},Rc=function(){for(var a=[],b=0;b<Nc.length;b++){var c=Hc(Nc[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Sc=function(a){Mc(a,C.o)},Tc=function(a,b){Lc(a,b)};var Vc=function(a){return Uc?F.querySelectorAll(a):null},Wc=function(a,b){if(!Uc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Xc=!1;if(F.querySelectorAll)try{var Yc=F.querySelectorAll(":root");Yc&&1==Yc.length&&Yc[0]==F.documentElement&&(Xc=!0)}catch(a){}var Uc=Xc;var ld={},md=null,od=Math.random();ld.s="GTM-2MMH";ld.Ob="6a0";ld.Ld="";var pd={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},qd="www.googletagmanager.com/gtm.js";
var rd=qd,sd=null,td=null,ud=null,vd="//www.googletagmanager.com/a?id="+ld.s+"&cv=348",wd={},xd={},yd=function(){var a=md.sequence||0;md.sequence=a+1;return a};
var zd=function(){return"&tc="+ub.filter(function(a){return a}).length},Cd=function(){Ad||(Ad=E.setTimeout(Bd,500))},Bd=function(){Ad&&(E.clearTimeout(Ad),Ad=void 0);void 0===Dd||Ed[Dd]&&!Fd&&!Gd||(Hd[Dd]||Id.Lg()||0>=Jd--?(I("GTM",1),Hd[Dd]=!0):(Id.hh(),mc(Kd()),Ed[Dd]=!0,Ld=Md=Gd=Fd=""))},Kd=function(){var a=Dd;if(void 0===a)return"";var b=wc("GTM"),c=wc("TAGGING");return[Nd,Ed[a]?"":"&es=1",Od[a],b?"&u="+b:"",c?"&ut="+c:"",zd(),Fd,Gd,Md,Ld,"&z=0"].join("")},Pd=function(){return[vd,"&v=3&t=t","&pid="+
va(),"&rv="+ld.Ob].join("")},Qd="0.005000">Math.random(),Nd=Pd(),Rd=function(){Nd=Pd()},Ed={},Fd="",Gd="",Ld="",Md="",Dd=void 0,Od={},Hd={},Ad=void 0,Id=function(a,b){var c=0,d=0;return{Lg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},hh:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),Jd=1E3,Sd=function(a,b){if(Qd&&!Hd[a]&&Dd!==a){Bd();Dd=a;Ld=Fd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Od[a]="&e="+c+"&eid="+a;Cd()}},Td=function(a,b,c){if(Qd&&!Hd[a]&&
b){a!==Dd&&(Bd(),Dd=a);var d,e=String(b[Hb.wa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Fd=Fd?Fd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(wb[h]?"1":"2")+d;Ld=Ld?Ld+"."+k:"&ti="+k;Cd();2022<=Kd().length&&Bd()}},Ud=function(a,b,c){if(Qd&&!Hd[a]){a!==Dd&&(Bd(),Dd=a);var d=c+b;Gd=Gd?Gd+
"."+d:"&epr="+d;Cd();2022<=Kd().length&&Bd()}};var Vd={},Wd=new wa,Xd={},Yd={},ae={name:"dataLayer",set:function(a,b){n(Ma(a,b),Xd);Zd()},get:function(a){return $d(a,2)},reset:function(){Wd=new wa;Xd={};Zd()}},$d=function(a,b){if(2!=b){var c=Wd.get(a);if(Qd){var d=be(a);c!==d&&I("GTM",5)}return c}return be(a)},be=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:ce(b)},ce=function(a){for(var b=Xd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var de=function(a,b){Yd.hasOwnProperty(a)||(Wd.set(a,b),n(Ma(a,b),Xd),Zd())},Zd=function(a){ya(Yd,function(b,c){Wd.set(b,c);n(Ma(b,void 0),Xd);n(Ma(b,c),Xd);a&&delete Yd[b]})},ee=function(a,b,c){Vd[a]=Vd[a]||{};var d=1!==c?be(b):Wd.get(b);"array"===Qa(d)||"object"===Qa(d)?Vd[a][b]=n(d):Vd[a][b]=d},fe=function(a,b){if(Vd[a])return Vd[a][b]},ge=function(a,b){Vd[a]&&delete Vd[a][b]};var je=/:[0-9]+$/,ke=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ne=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=le(a.protocol)||le(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||E.location.hostname).replace(je,"").toLowerCase());return me(a,b,c,d,e)},me=function(a,b,c,d,e){var f,h=le(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=oe(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(je,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);
f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=qa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=ke(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},le=function(a){return a?a.replace(":","").toLowerCase():""},oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},pe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(je,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},qe=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=pe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function re(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var te=function(a,b,c,d){return se(d)?re(a,String(b||document.cookie),c):[]},we=function(a,b,c,d,e){if(se(e)){var f=ue(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ve(f,function(h){return h.Tb},b);if(1===f.length)return f[0].id;f=ve(f,function(h){return h.yb},c);return f[0]?f[0].id:void 0}}};function xe(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=te(b,f,!1,d).indexOf(c)}
var Be=function(a,b,c){function d(q,u,w){if(null==w)return delete h[u],q;h[u]=w;return q+"; "+u+"="+w}function e(q,u){if(null==u)return delete h[u],q;h[u]=!0;return q+"; "+u}if(!se(c.Ca))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ye(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Sh);f=d(f,"samesite",
c.Xh);c.Yh&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var m=ze(),p=0;p<m.length;++p){var r="none"!==m[p]?m[p]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!Ae(r,c.path)&&xe(t,a,b,c.Ca))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Ae(l,c.path)?1:xe(f,a,b,c.Ca)?0:1},Ce=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Be(a,b,c)};
function ve(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ue(a,b,c){for(var d=[],e=te(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Tb:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var ye=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},De=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ee=/(^|\.)doubleclick\.net$/i,Ae=function(a,b){return Ee.test(document.location.hostname)||"/"===b&&De.test(a)},ze=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ee.test(e)||De.test(e)||a.push("none");
return a},se=function(a){if(!yc("gtag_cs_api")||!a||!Jc())return!0;if(!Ic(a))return!1;var b=Hc(a);return null==b?!0:!!b};var Fe=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Ie=function(a,b,c,d,e){var f=Ge(b);return we(a,f,He(c),d,e)},Je=function(a,b,c,d){var e=""+Ge(c),f=He(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ge=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},He=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ke(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Fa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Le=["1"],Me={},Qe=function(a){var b=Ne(a.prefix);Me[b]||Oe(b,a.path,a.domain)||(Pe(b,Fe(),a),Oe(b,a.path,a.domain))};function Pe(a,b,c){var d=Je(b,"1",c.domain,c.path),e=Ke(c);e.Ca="ad_storage";Ce(a,d,e)}function Oe(a,b,c){var d=Ie(a,b,c,Le,"ad_storage");d&&(Me[a]=d);return d}function Ne(a){return(a||"_gcl")+"_au"};var Re=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Se(){for(var a=Te,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ue(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Te,Ve;function We(a){Te=Te||Ue();Ve=Ve||Se();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,p=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(p=64));b.push(Te[l],Te[m],Te[p],Te[r])}return b.join("")}
function Xe(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Ve[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Te=Te||Ue();Ve=Ve||Se();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ye;var bf=function(){var a=Ze,b=$e,c=af(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},cf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};af().decorators.push(f)},df=function(a,b,c){for(var d=af().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a,p=!!h.sameHost;if(l&&(p||m!==F.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Ja(e,h.callback())}}return e},af=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ef=/(.*?)\*(.*?)\*(.*)/,ff=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,gf=/^(?:www\.|m\.|amp\.)+/,hf=/([^?#]+)(\?[^#]*)?(#.*)?/;function jf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var lf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(We(String(d))))}var e=b.join("*");return["1",kf(e),e].join("*")},kf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ye)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ye=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ye[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},nf=function(){return function(a){var b=pe(E.location.href),c=b.search.replace("?",""),d=ke(c,"_gl",!0)||"";a.query=mf(d)||{};var e=ne(b,"fragment").match(jf("_gl"));a.fragment=mf(e&&e[3]||"")||{}}},of=function(a){var b=nf(),c=af();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ja(d,e.query),a&&Ja(d,e.fragment));return d},mf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ef.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===kf(k,p)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Xe(t[q+1]);return r}}}}catch(u){}};
function pf(a,b,c,d){function e(p){var r=p,t=jf(a).exec(r),q=r;if(t){var u=t[2],w=t[4];q=t[1];w&&(q=q+u+w)}p=q;var v=p.charAt(p.length-1);p&&"&"!==v&&(p+="&");return p+m}d=void 0===d?!1:d;var f=hf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function qf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=df(b,1,c),e=df(b,2,c),f=df(b,3,c);if(Ka(d)){var h=lf(d);c?rf("_gl",h,a):sf("_gl",h,a,!1)}if(!c&&Ka(e)){var k=lf(e);sf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){sf(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){rf(m,p,r);break a}}"string"==typeof r&&pf(m,p,r,void 0)}}
function sf(a,b,c,d){if(c.href){var e=pf(a,b,c.href,void 0===d?!1:d);Re.test(e)&&(c.href=e)}}
function rf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=F.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=pf(a,b,c.action);Re.test(m)&&(c.action=m)}}}
var Ze=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qf(e,e.hostname)}}catch(h){}},$e=function(a){try{if(a.action){var b=ne(pe(a.action),"host");qf(a,b)}}catch(c){}},tf=function(a,b,c,d){bf();cf(a,b,"fragment"===c?2:1,!!d,!1)},uf=function(a,b){bf();cf(a,[me(E.location,"host",!0)],b,!0,!0)},vf=function(){var a=F.location.hostname,b=ff.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(gf,""),l=e.replace(gf,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},wf=function(a,b){return!1===a?!1:a||b||vf()};var xf=/^\w+$/,yf=/^[\w-]+$/,zf=/^~?[\w-]+$/,Af={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Bf=function(){if(!yc("gtag_cs_api")||!Jc())return!0;var a=Hc("ad_storage");return null==a?!0:!!a},Cf=function(a,b){Ic("ad_storage")?Bf()?a():Mc(a,"ad_storage"):b?I("TAGGING",3):Lc(function(){Cf(a,!0)},["ad_storage"])},Ff=function(a){var b=[];if(!F.cookie)return b;var c=te(a,F.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Df(c[d]);e&&-1===qa(b,e)&&b.push(e)}return Ef(b)};
function Gf(a){return a&&"string"==typeof a&&a.match(xf)?a:"_gcl"}
var If=function(){var a=pe(E.location.href),b=ne(a,"query",!1,void 0,"gclid"),c=ne(a,"query",!1,void 0,"gclsrc"),d=ne(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||ke(e,"gclid",void 0);c=c||ke(e,"gclsrc",void 0)}return Hf(b,c,d)},Hf=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":yc("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Kf=function(a){var b=If();Cf(function(){return Jf(b,a)})};
function Jf(a,b,c){function d(m,p){var r=Lf(m,e);r&&(Ce(r,p,f),h=!0)}b=b||{};var e=Gf(b.prefix);c=c||Fa();var f=Ke(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.bi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var Nf=function(a,b){var c=of(!0);Cf(function(){for(var d=Gf(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Af[f]){var h=Lf(f,d),k=c[h];if(k){var l=Math.min(Mf(k),Fa()),m;b:{for(var p=l,r=te(h,F.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Mf(r[t])>p){m=!0;break b}m=!1}if(!m){var q=Ke(b,l,!0);q.Ca="ad_storage";Ce(h,k,q)}}}}Jf(Hf(c.gclid,c.gclsrc),b)})},Lf=function(a,b){var c=Af[a];if(void 0!==c)return b+c},Mf=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Df(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Of=function(a,b,c,d,e){if(pa(b)){var f=Gf(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=Lf(a[l],f);if(m){var p=te(m,F.cookie,void 0,"ad_storage");p.length&&(k[m]=p.sort()[p.length-1])}}return k};Cf(function(){tf(h,b,c,d)})}},Ef=function(a){return a.filter(function(b){return zf.test(b)})},Pf=function(a,b){for(var c=Gf(b.prefix),d={},e=0;e<a.length;e++)Af[a[e]]&&(d[a[e]]=Af[a[e]]);Cf(function(){ya(d,function(f,h){var k=te(c+h,F.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Mf(l),
p={};p[f]=[Df(l)];Jf(p,b,m)}})})};function Qf(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Rf=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Jc()){var c=If();if(Qf(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);uf(function(){return d},3);uf(function(){var e={};return e._up="1",e},1)}}},Sf=function(){var a;if(Bf()){for(var b=[],c=F.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({sd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].sd]||(h[b[k].sd]=[]),h[b[k].sd].push({timestamp:l[1],xg:l[2]}))}a=h}else a={};return a};var Tf=/^\d+\.fls\.doubleclick\.net$/;function Uf(a,b){Ic(C.o)?Qc(C.o)?a():Sc(a):b?I("GTM",42):Tc(function(){Uf(a,!0)},[C.o])}function Vf(a){var b=pe(E.location.href),c=ne(b,"host",!1);if(c&&c.match(Tf)){var d=ne(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Wf(a,b,c){if("aw"==a||"dc"==a){var d=Vf("gcl"+a);if(d)return d.split(".")}var e=Gf(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Qc(C.o)&&c,h;h=If()[a]||[];if(0<h.length)return f?["0"]:h}var k=Lf(a,e);return k?Ff(k):[]}
var Xf=function(a){var b=Vf("gac");if(b)return!Qc(C.o)&&a?"0":decodeURIComponent(b);var c=Sf(),d=[];ya(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].xg);h=Ef(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Yf=function(a,b){var c=If().dc||[];Uf(function(){Qe(b);var d=Me[Ne(b.prefix)],e=!1;if(d&&0<c.length){var f=md.joined_au=md.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;tc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=Ne(b.prefix),p=Me[m];p&&Pe(m,p,b)}})};var Zf=/[A-Z]+/,$f=/\s/,ag=function(a){if(g(a)&&(a=Ea(a),!$f.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Zf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},cg=function(a){for(var b={},c=0;c<a.length;++c){var d=ag(a[c]);d&&(b[d.id]=d)}bg(b);var e=[];ya(b,function(f,h){e.push(h)});return e};
function bg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var dg=function(){var a=!1;return a};var fg=function(a,b,c,d){return(2===eg()||d||"http:"!=E.location.protocol?a:b)+c},eg=function(){var a=kc(),b;if(1===a)a:{var c=rd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var tg=function(a){return Qc(C.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=qe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var ug=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var zg=function(a){var b=$d("gtm.whitelist");b&&I("GTM",9);var c=b&&La(Da(b),vg),d=$d("gtm.blacklist");d||(d=$d("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];yg()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=qa(Da(d),"google")&&I("GTM",2);var e=d&&La(Da(d),wg),f={};return function(h){var k=h&&h[Hb.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=xd[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>qa(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>qa(c,l[r])){I("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=qa(e,k);if(q)t=q;else{var u=xa(e,l||[]);u&&I("GTM",10);t=u}}var w=!m||t;w||!(0<=qa(l,"sandboxedScripts"))||c&&-1!==qa(c,"sandboxedScripts")||(w=xa(e,xg));return f[k]=w}},yg=function(){return ug.test(E.location&&E.location.hostname)};var Bg={ig:function(a,b){b[Hb.Cd]&&"string"===typeof a&&(a=1==b[Hb.Cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Ed)&&null===a&&(a=b[Hb.Ed]);b.hasOwnProperty(Hb.Gd)&&void 0===a&&(a=b[Hb.Gd]);b.hasOwnProperty(Hb.Fd)&&!0===a&&(a=b[Hb.Fd]);b.hasOwnProperty(Hb.Dd)&&!1===a&&(a=b[Hb.Dd]);return a}};var Cg={active:!0,isWhitelisted:function(){return!0}},Dg=function(a){var b=md.zones;!b&&a&&(b=md.zones=a());return b};var Eg=function(){};var Fg=!1,Gg=0,Hg=[];function Ig(a){if(!Fg){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fg=!0;for(var e=0;e<Hg.length;e++)G(Hg[e])}Hg.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function Jg(){if(!Fg&&140>Gg){Gg++;try{F.documentElement.doScroll("left"),Ig()}catch(a){E.setTimeout(Jg,50)}}}var Kg=function(a){Fg?a():Hg.push(a)};var Lg={},Mg={},Ng=function(a,b,c,d){if(!Mg[a]||pd[b]||"__zone"===b)return-1;var e={};Ta(d)&&(e=n(d,e));e.id=c;e.status="timeout";return Mg[a].tags.push(e)-1},Og=function(a,b,c,d){if(Mg[a]){var e=Mg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pg(a){for(var b=Lg[a]||[],c=0;c<b.length;c++)b[c]();Lg[a]={push:function(d){d(ld.s,Mg[a])}}}
var Sg=function(a,b,c){Mg[a]={tags:[]};na(b)&&Qg(a,b);c&&E.setTimeout(function(){return Pg(a)},Number(c));return Rg(a)},Qg=function(a,b){Lg[a]=Lg[a]||[];Lg[a].push(Ia(function(){return G(function(){b(ld.s,Mg[a])})}))};function Rg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Pg(a)})},Wf:function(){d=!0;b>=c&&Pg(a)}}};var Tg=function(){function a(d){return!oa(d)||0>d?0:d}if(!md._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=oa(ae.get("gtm.start"))?ae.get("gtm.start"):0;md._li={cst:a(c-b),cbt:a(td-b)}}};var Xg={},Yg=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Zg=!1;
var $g=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}Tg();return E[b]},ah=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ch=function(a){},bh=function(){return E.GoogleAnalyticsObject||"ga"};function ih(a,b,c,d){var e=ub[a],f=jh(a,b,c,d);if(!f)return null;var h=Cb(e[Hb.Ud],c,[]);if(h&&h.length){var k=h[0];f=ih(k.index,{D:f,C:1===k.se?b.terminate:f,terminate:b.terminate},c,d)}return f}
function jh(a,b,c,d){function e(){if(f[Hb.qf])k();else{var v=Db(f,c,[]),y=Ng(c.id,String(f[Hb.wa]),Number(f[Hb.Wd]),v[Hb.rf]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Fa()-B;Td(c.id,ub[a],"5");Og(c.id,y,"success",z);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Fa()-B;Td(c.id,ub[a],"6");Og(c.id,y,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;Td(c.id,f,"1");var A=function(){var z=Fa()-B;Td(c.id,f,"7");Og(c.id,y,"exception",z);x||(x=!0,k())};var B=Fa();try{Bb(v,c)}catch(z){A(z)}}}var f=ub[a],h=b.D,k=b.C,l=b.terminate;if(c.Zc(f))return null;var m=Cb(f[Hb.Xd],c,[]);if(m&&m.length){var p=m[0],r=ih(p.index,{D:h,C:k,terminate:l},c,d);if(!r)return null;h=r;k=2===p.se?l:r}if(f[Hb.Md]||f[Hb.vf]){var t=f[Hb.Md]?vb:c.qh,q=h,u=k;if(!t[a]){e=Ia(e);var w=kh(a,t,e);h=w.D;k=w.C}return function(){t[a](q,u)}}return e}
function kh(a,b,c){var d=[],e=[];b[a]=lh(d,e,c);return{D:function(){b[a]=mh;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=nh;for(var f=0;f<e.length;f++)e[f]()}}}function lh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function mh(a){a()}function nh(a,b){b()};var qh=function(a,b){for(var c=[],d=0;d<ub.length;d++)if(a.xb[d]){var e=ub[d];var f=b.add();try{var h=ih(d,{D:f,C:f,terminate:f},a,d);h?c.push({Ve:d,Oe:Fb(e),sg:h}):(oh(d,a),f())}catch(l){f()}}b.Wf();c.sort(ph);for(var k=0;k<c.length;k++)c[k].sg();return 0<c.length};function ph(a,b){var c,d=b.Oe,e=a.Oe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ve,k=b.Ve;f=h>k?1:h<k?-1:0}return f}
function oh(a,b){if(!Qd)return;var c=function(d){var e=b.Zc(ub[d])?"3":"4",f=Cb(ub[d][Hb.Ud],b,[]);f&&f.length&&c(f[0].index);Td(b.id,ub[d],e);var h=Cb(ub[d][Hb.Xd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var rh=!1,sh=function(a,b,c,d,e){if("gtm.js"==b){if(rh)return!1;rh=!0}Sd(a,b);var f=Sg(a,d,e);ee(a,"event",1);ee(a,"ecommerce",1);ee(a,"gtm");var h={id:a,name:b,Zc:zg(c),xb:[],qh:[],Fe:function(){I("GTM",6)}};h.xb=Lb(h);var k=qh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||ch(ld.s);if(!k)return k;for(var l=0;l<h.xb.length;l++)if(h.xb[l]){var m=ub[l];if(m&&!pd[String(m[Hb.wa])])return!0}return!1};function uh(a,b){}function vh(a,b){return wh()?uh(a,b):void 0}
function wh(){var a=!1;return a};var xh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},yh=function(a){var b=new xh;b.eventModel=a;return b},zh=function(a,b){a.targetConfig=b;return a},Ah=function(a,b){a.containerConfig=b;return a},Bh=function(a,b){a.h=b;return a},Ch=function(a,b){a.globalConfig=b;return a},Dh=function(a,b){a.D=b;return a},Eh=function(a,b){a.C=b;return a};
xh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Fh=function(a){function b(e){ya(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];ya(c,function(e){d.push(e)});return d};var Gh;if(3===ld.Ob.length)Gh="g";else{var Hh="G";Gh=Hh}
var Ih={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Jh=function(a){var b=ld.s.split("-"),c=b[0].toUpperCase(),d=Ih[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===ld.Ob.length){var h="w";f="2"+h}else f="";return f+d+ld.Ob+e};function Kh(){var a=!1;a=Jc();return a}
function Lh(a,b,c){function d(r){var t;md.reported_gclid||(md.reported_gclid={});t=md.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(Jc()){var y=Qc(C.o);w("gcs",Rc());r&&w("gcu","1");w("rnd",p);if((!f||h&&"aw.ds"!==h)&&Qc(C.o)){var x=Ff("_gcl_aw");w("gclaw",x.join("."))}w("url",String(E.location).split(/[?#]/)[0]);w("dclid",Mh(b,k));!y&&b&&(v="https://pagead2.googlesyndication.com")}
"1"===of(!1)._up&&w("gtm_up","1");w("gclid",Mh(b,f));w("gclsrc",h);w("gtm",Jh(!c));var A=v+"/pagead/landing?"+u.join("&");tc(A)}}var e=If(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=Kh();if(l||m){var p=""+Fe();m?Tc(function(){d();Qc(C.o)||Sc(function(){return d(!0)})},[C.o]):d()}}
function Mh(a,b){var c=a&&!Qc(C.o);if(b&&c)return"0";return b}function Pi(){var a=md;return a.gcq=a.gcq||new Qi}
var Ri=function(a,b,c){Pi().register(a,b,c)},Si=function(a,b,c,d){Pi().push("event",[b,a],c,d)},Ti=function(a,b){Pi().push("config",[a],b)},Ui={},Vi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Wi=function(a,b,c,d,e){this.type=a;this.m=b;this.ba=c||"";this.h=d;this.i=e},Qi=function(){this.m={};this.i={};this.h=[]},Xi=function(a,b){var c=ag(b);return a.m[c.containerId]=a.m[c.containerId]||new Vi},Yi=function(a,b,c){if(b){var d=ag(b);if(d&&1===
Xi(a,b).status){Xi(a,b).status=2;var e={};Qd&&(e.timeoutId=E.setTimeout(function(){I("GTM",38);Cd()},3E3));a.push("require",[e],d.containerId);Ui[d.containerId]=Fa();if(dg()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=vh(c,h)||k;jc(l)}}}},Zi=function(a,b,c,d){if(d.ba){var e=Xi(a,d.ba),f=e.m;if(f){var h=n(c),k=n(e.targetConfig[d.ba]),l=n(e.containerConfig),m=n(e.i),p=n(a.i),r=$d("gtm.uniqueEventId"),t=ag(d.ba).prefix,q=Eh(Dh(Ch(Bh(Ah(zh(yh(h),k),l),m),p),function(){
Ud(r,t,"2");}),function(){Ud(r,t,"3");});try{Ud(r,t,"1");f(d.ba,b,d.m,q)}catch(u){Ud(r,t,"4");}}}};
Qi.prototype.register=function(a,b,c){if(3!==Xi(this,a).status){Xi(this,a).m=b;Xi(this,a).status=3;c&&(Xi(this,a).i=c);var d=ag(a),e=Ui[d.containerId];if(void 0!==e){var f=md[d.containerId].bootstrap,h=d.prefix.toUpperCase();md[d.containerId]._spx&&(h=h.toLowerCase());var k=$d("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Qd&&!Hd[k]){k!==Dd&&(Bd(),Dd=k);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);Md=Md?Md+","+p:"&cl="+p}delete Ui[d.containerId]}this.flush()}};
Qi.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);Yi(this,c,b[0][C.va]||this.i[C.va]);this.h.push(new Wi(a,e,c,b,d));d||this.flush()};
Qi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Xi(this,c.ba).status&&!a)return;Qd&&E.clearTimeout(c.h[0].timeoutId);break;case "set":ya(c.h[0],function(l,m){n(Ma(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[C.jc];delete d[C.jc];var f=Xi(this,c.ba),h=ag(c.ba),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.h&&e||Zi(this,C.I,d,c);f.h=!0;delete d[C.ab];k?n(d,f.containerConfig):
n(d,f.targetConfig[c.ba]);break;case "event":Zi(this,c.h[1],c.h[0],c)}this.h.shift()}};var $i=["HA","GF","GP","G"],aj="G".split(/,/);aj.push("DC");aj.push("UA");aj.push("AW");
var bj=null,cj={},dj={},ej,fj=!1;function gj(a,b){var c={event:a};b&&(c.eventModel=n(b),b[C.Ac]&&(c.eventCallback=b[C.Ac]),b[C.Jb]&&(c.eventTimeout=b[C.Jb]));return c}
var lj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ta(a[2])&&void 0!=a[2])return;c=a[2]}var d=gj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return fj=!0,{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ta(a[1])?b=n(a[1]):3==a.length&&
g(a[1])&&(b={},Ta(a[2])||pa(a[2])?b[a[1]]=n(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var mj={policy:!0};var nj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},pj=function(a){var b=oj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var qj=!1,rj=[];function sj(){if(!qj){qj=!0;for(var a=0;a<rj.length;a++)G(rj[a])}}var tj=function(a){qj?G(a):rj.push(a)};var Lj=function(a){if(Jj(a))return a;this.h=a};Lj.prototype.Bg=function(){return this.h};var Jj=function(a){return!a||"object"!==Qa(a)||Ta(a)?!1:"getUntrustedUpdateValue"in a};Lj.prototype.getUntrustedUpdateValue=Lj.prototype.Bg;var Mj=[],Nj=!1,Oj=function(a){return E["dataLayer"].push(a)},Pj=function(a){var b=md["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Qj(a){var b=a._clear;ya(a,function(f,h){"_clear"!==f&&(b&&de(f,void 0),de(f,h))});sd||(sd=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=yd(),a["gtm.uniqueEventId"]=d,de("gtm.uniqueEventId",d));ud=c;var e=Rj(a);ud=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function Rj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=md.zones;d=e?e.checkState(ld.s,c):Cg;return d.active?sh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Sj(){for(var a=!1;!Nj&&0<Mj.length;){Nj=!0;delete Xd.eventModel;Zd();var b=Mj.shift();if(null!=b){var c=Jj(b);if(c){var d=b;b=Jj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=$d(h,1);if(pa(k)||Ta(k))k=n(k);Yd[h]=k}}try{if(na(b))try{b.call(ae)}catch(w){}else if(pa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),p=m.pop(),r=l.slice(1),t=$d(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&g(b[0])){var u=lj[b[0]];if(u&&(!c||!mj[b[0]])){b=u(b);break a}}b=void 0}if(!b){Nj=!1;continue}}a=Qj(b)||a}}finally{c&&Zd(!0)}}Nj=!1}
return!a}function Tj(){var a=Sj();try{nj(E["dataLayer"],ld.s)}catch(b){}return a}
var Vj=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});tj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<md.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Lj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Mj.push.apply(Mj,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Sj()&&h};Mj.push.apply(Mj,a.slice(0));Uj()&&G(Tj)},Uj=function(){var a=!0;return a};var Wj={};Wj.Kb=new String("undefined");
var Xj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Wj.Kb?b:a[d]);return c.join("")}};Xj.prototype.toString=function(){return this.h("undefined")};Xj.prototype.valueOf=Xj.prototype.toString;Wj.Ef=Xj;Wj.Kc={};Wj.lg=function(a){return new Xj(a)};var Yj={};Wj.ih=function(a,b){var c=yd();Yj[c]=[a,b];return c};Wj.ne=function(a){var b=a?0:1;return function(c){var d=Yj[c];if(d&&"function"===typeof d[b])d[b]();Yj[c]=void 0}};Wj.Jg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Wj.$g=function(a){if(a===Wj.Kb)return a;var b=yd();Wj.Kc[b]=a;return'google_tag_manager["'+ld.s+'"].macro('+b+")"};Wj.Tg=function(a,b,c){a instanceof Wj.Ef&&(a=a.h(Wj.ih(b,c)),b=ma);return{Xc:a,D:b}};var Zj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||pc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ak=function(a){md.hasOwnProperty("autoEventsSettings")||(md.autoEventsSettings={});var b=md.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},bk=function(a,b,c){ak(a)[b]=c},ck=function(a,b,c,d){var e=ak(a),f=Ha(e,b,d);e[b]=c(f)},dk=function(a,b,c){var d=ak(a);return Ha(d,b,c)};var ek=["input","select","textarea"],fk=["button","hidden","image","reset","submit"],gk=function(a){var b=a.tagName.toLowerCase();return!sa(ek,function(c){return c===b})||"input"===b&&sa(fk,function(c){return c===a.type.toLowerCase()})?!1:!0},hk=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):sc(a,["form"],100)},ik=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(gk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var jk=!!E.MutationObserver,kk=void 0,lk=function(a){if(!kk){var b=function(){var c=F.body;if(c)if(jk)(new MutationObserver(function(){for(var e=0;e<kk.length;e++)G(kk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<kk.length;e++)G(kk[e])}))})}};kk=[];F.body?b():G(b)}kk.push(a)};var Gk=E.clearTimeout,Hk=E.setTimeout,K=function(a,b,c){if(dg()){b&&G(b)}else return jc(a,b,c)},Ik=function(){return E.location.href},Jk=function(a){return ne(pe(a),"fragment")},Kk=function(a){return oe(pe(a))},Q=function(a,b){return $d(a,b||2)},Lk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Oj(a)):d=Oj(a);return d},Mk=function(a,b){E[a]=b},R=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},Nk=function(a,b,c){return te(a,b,void 0===c?!0:!!c)},Ok=function(a,b){if(dg()){b&&G(b)}else lc(a,b)},Pk=function(a){return!!dk(a,"init",!1)},Qk=function(a){bk(a,"init",!0)},Rk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":rd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";K(fg("https://","http://",c))},Sk=function(a,b){var c=a[b];return c};
var Tk=Wj.Tg;function pl(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var ql=new wa;function rl(a,b){function c(h){var k=pe(h),l=ne(k,"protocol"),m=ne(k,"host",!0),p=ne(k,"port"),r=ne(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function sl(a){return tl(a)?1:0}
function tl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&pa(c)){for(var d=0;d<c.length;d++)if(sl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return pl(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=qa(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var p=String(c)+m,r=ql.get(p);r||(r=new RegExp(c,m),ql.set(p,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return rl(b,c)}return!1};var ul=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var vl={},wl=encodeURI,S=encodeURIComponent,xl=mc;var yl=function(a,b){if(!a)return!1;var c=ne(pe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var zl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};vl.Kg=function(){var a=!1;return a};function Sm(){return E.gaGlobal=E.gaGlobal||{}}var Tm=function(){var a=Sm();a.hid=a.hid||va();return a.hid};var dn=window,en=document,fn=function(a){var b=dn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===dn["ga-disable-"+a])return!0;try{var c=dn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=re("AMP_TOKEN",String(en.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return en.getElementById("__gaOptOutExtension")?!0:!1};function jn(a,b){delete b.eventModel[C.ab];if(a!==C.I){var c=b.getWithConfig(C.bc);if(pa(c)){I("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],h=b.getWithConfig(f);void 0!==h&&(d[f]=h)}b.eventModel=d}}ln(b.eventModel)}var ln=function(a){ya(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.ka]||{};ya(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var on=function(a,b,c){Si(b,c,a)},pn=function(a,b,c){Si(b,c,a,!0)},rn=function(a,b){};
function qn(a,b){}var W={a:{}};

W.a.jsm=["customScripts"],function(){(function(a){W.__jsm=a;W.__jsm.b="jsm";W.__jsm.g=!0;W.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
W.a.e=["google"],function(){(function(a){W.__e=a;W.__e.b="e";W.__e.g=!0;W.__e.priorityOverride=0})(function(a){return String(fe(a.vtp_gtmEventId,"event"))})}();
W.a.f=["google"],function(){(function(a){W.__f=a;W.__f.b="f";W.__f.g=!0;W.__f.priorityOverride=0})(function(a){var b=Q("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ne(pe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Kk(String(b)):String(b)})}();W.a.k=["google"],function(){(function(a){W.__k=a;W.__k.b="k";W.__k.g=!0;W.__k.priorityOverride=0})(function(a){return Nk(a.vtp_name,Q("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
W.a.r=["google"],function(){(function(a){W.__r=a;W.__r.b="r";W.__r.g=!0;W.__r.priorityOverride=0})(function(a){return va(a.vtp_min,a.vtp_max)})}();
W.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.b="u";W.__u.g=!0;W.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Q("gtm.url",1);c=c||Ik();var d=b[a("vtp_component")];if(!d||"URL"==d)return Kk(String(c));var e=pe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?pa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var p=0;p<m.length;p++){var r=ne(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=ne(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
W.a.v=["google"],function(){(function(a){W.__v=a;W.__v.b="v";W.__v.g=!0;W.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Q(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
W.a.ua=["google"],function(){var a,b={},c=function(e){Tc(function(){d(e)},[C.H,C.o])},d=function(e){var f={},h={},k={},l={},m={};if(e.vtp_gaSettings){var p=e.vtp_gaSettings;n(zl(p.vtp_fieldsToSet,"fieldName","value"),h);n(zl(p.vtp_contentGroup,"index","group"),k);n(zl(p.vtp_dimension,"index","dimension"),l);n(zl(p.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;p.vtp_fieldsToSet=void 0;p.vtp_contentGroup=void 0;p.vtp_dimension=void 0;p.vtp_metric=void 0;var r=n(p);e=n(e,r)}n(zl(e.vtp_fieldsToSet,
"fieldName","value"),h);n(zl(e.vtp_contentGroup,"index","group"),k);n(zl(e.vtp_dimension,"index","dimension"),l);n(zl(e.vtp_metric,"index","metric"),m);Qc(C.H)||(h.storage="none"),Qc(C.o)||(h.allowAdFeatures=!1,h.storeGac=!1);var t=$g(e.vtp_functionName);if(na(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+yd(),
q=u+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(O){var P=[].slice.call(arguments,0);P[0]=q+P[0];t.apply(window,P)},x=function(O,P){return void 0===P?P:O(P)},A=function(O,P){if(P)for(var Ba in P)P.hasOwnProperty(Ba)&&y("set",O+Ba,P[Ba])},B=function(){},
z=function(O,P,Ba){var Ra=0;if(O)for(var za in O)if(O.hasOwnProperty(za)&&(Ba&&w[za]||!Ba&&void 0===w[za])){var Na=v[za]?Ca(O[za]):O[za];"anonymizeIp"!=za||Na||(Na=void 0);P[za]=Na;Ra++}return Ra},D={name:u};z(h,D,!0);t("create",
e.vtp_trackingId||f.trackingId,D);y("set","&gtm",Jh(!0));Jc()&&y("set","&gcs",Rc());e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,P){void 0!==e[P]&&y("set",O,e[P])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var H={};z(h,H,!1)&&y("set",H);var M;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=h&&h.hitCallback;na(O)&&O();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var U="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:U})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var ra="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");y("require","adfeatures",{cookieName:ra})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ua=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var Ga=vh(h._x_19,"/analytics.js"),
la=fg("https:","http:","//www.google-analytics.com/"+ua,h&&h.forceSSL);K("analytics.js"===ua&&Ga?Ga:la,function(){var O=Yg();O&&O.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else G(e.vtp_gtmOnFailure)};W.__ua=c;W.__ua.b="ua";W.__ua.g=!0;W.__ua.priorityOverride=0}();






W.a.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){W.__gas=b;W.__gas.b="gas";W.__gas.g=!0;W.__gas.priorityOverride=0})(function(b){var c=n(b),d=c;d[Hb.wa]=null;d[Hb.hf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();

W.a.smm=["google"],function(){(function(a){W.__smm=a;W.__smm.b="smm";W.__smm.g=!0;W.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=zl(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



W.a.paused=[],function(){(function(a){W.__paused=a;W.__paused.b="paused";W.__paused.g=!0;W.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();

W.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,ic(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=Tk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,rc(h),k,e)()}else Hk(function(){c(d)},
200)};W.__html=c;W.__html.b="html";W.__html.g=!0;W.__html.priorityOverride=0}();








var sn={};sn.macro=function(a){if(Wj.Kc.hasOwnProperty(a))return Wj.Kc[a]},sn.onHtmlSuccess=Wj.ne(!0),sn.onHtmlFailure=Wj.ne(!1);sn.dataLayer=ae;sn.callback=function(a){wd.hasOwnProperty(a)&&na(wd[a])&&wd[a]();delete wd[a]};function tn(){md[ld.s]=sn;Ja(xd,W.a);yb=yb||Wj;zb=Bg}
function un(){xc.gtm_3pds=!0;md=E.google_tag_manager=E.google_tag_manager||{};if(md[ld.s]){var a=md.zones;a&&a.unregisterChild(ld.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ub.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);sb.push(r)}wb=W;xb=sl;tn();Vj();Fg=!1;Gg=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)Ig();
else{nc(F,"DOMContentLoaded",Ig);nc(F,"readystatechange",Ig);if(F.createEventObject&&F.documentElement.doScroll){var q=!0;try{q=!E.frameElement}catch(y){}q&&Jg()}nc(E,"load",Ig)}qj=!1;"complete"===F.readyState?sj():nc(E,"load",sj);a:{if(!Qd)break a;E.setInterval(Rd,
864E5);}td=(new Date).getTime();}}
(function(a){a()})(un);

})()
