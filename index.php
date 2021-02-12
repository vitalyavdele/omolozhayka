<html class="objectfit object-fit"><script src="news_files/sdk.js" async="" crossorigin="anonymous"></script><script type="text/javascript" async="" src="news_files/analytics.js"></script><script id="facebook-jssdk" src="news_files/sdk(1).js"></script><script type="text/javascript" async="" src="news_files/recaptcha__ru.js"></script><script async="" src="news_files/gtm.js"></script><script>
    window[Symbol.for('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon')] = new (class PostClient {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
        this.serverListeners = {};
        this.bgRequestsListeners = {};
        this.bgEventsListeners = {};
        window.addEventListener('message', (message) => {
            const data = message.data;
            const isNotForMe = !(data.destination && data.destination === this.name);
            const hasNotEventProp = !data.event;
            if (isNotForMe || hasNotEventProp) {
                return;
            }
            if (data.event === 'MARIO_POST_SERVER__BG_RESPONSE') {
                const response = data.args;
                if (this.hasBgRequestListener(response.requestId)) {
                    try {
                        this.bgRequestsListeners[response.requestId](response.response);
                    }
                    catch (e) {
                        console.log(e);
                    }
                    delete this.bgRequestsListeners[response.requestId];
                }
            }
            else if (data.event === 'MARIO_POST_SERVER__BG_EVENT') {
                const response = data.args;
                if (this.hasBgEventListener(response.event)) {
                    try {
                        this.bgEventsListeners[data.id](response.payload);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
            else if (this.hasServerListener(data.event)) {
                try {
                    this.serverListeners[data.event](data.args);
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {
                console.log(`event not handled: ${data.event}`);
            }
        });
    }
    emitToServer(event, args) {
        const id = this.generateUIID();
        const message = {
            args,
            destination: this.destination,
            event,
            id,
        };
        window.postMessage(message, location.origin);
        return id;
    }
    emitToBg(bgEventName, args) {
        const requestId = this.generateUIID();
        const request = { bgEventName, requestId, args };
        this.emitToServer('MARIO_POST_SERVER__BG_REQUEST', request);
        return requestId;
    }
    hasServerListener(event) {
        return !!this.serverListeners[event];
    }
    hasBgRequestListener(requestId) {
        return !!this.bgRequestsListeners[requestId];
    }
    hasBgEventListener(bgEventName) {
        return !!this.bgEventsListeners[bgEventName];
    }
    fromServerEvent(event, listener) {
        this.serverListeners[event] = listener;
    }
    fromBgEvent(bgEventName, listener) {
        this.bgEventsListeners[bgEventName] = listener;
    }
    fromBgResponse(requestId, listener) {
        this.bgRequestsListeners[requestId] = listener;
    }
    generateUIID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
})('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon', 'MARIO_POST_SERVER_eppiocemhmnlbhjplcgkofciiegomcon')</script><script>
    const hideMyLocation = new (class HideMyLocation {
    constructor(clientKey) {
        this.clientKey = clientKey;
        this.watchIDs = {};
        this.client = window[Symbol.for(clientKey)];
        const getCurrentPosition = navigator.geolocation.getCurrentPosition;
        const watchPosition = navigator.geolocation.watchPosition;
        const clearWatch = navigator.geolocation.clearWatch;
        const self = this;
        navigator.geolocation.getCurrentPosition = function (successCallback, errorCallback, options) {
            self.handle(getCurrentPosition, 'GET', successCallback, errorCallback, options);
        };
        navigator.geolocation.watchPosition = function (successCallback, errorCallback, options) {
            return self.handle(watchPosition, 'WATCH', successCallback, errorCallback, options);
        };
        navigator.geolocation.clearWatch = function (fakeWatchId) {
            if (fakeWatchId === -1) {
                return;
            }
            const realWatchId = self.watchIDs[fakeWatchId];
            delete self.watchIDs[fakeWatchId];
            return clearWatch.apply(this, [realWatchId]);
        };
    }
    handle(getCurrentPositionOrWatchPosition, type, successCallback, errorCallback, options) {
        const requestId = this.client.emitToBg('HIDE_MY_LOCATION__GET_LOCATION');
        let fakeWatchId = this.getRandomInt(0, 100000);
        this.client.fromBgResponse(requestId, (response) => {
            if (response.enabled) {
                if (response.status === 'SUCCESS') {
                    const position = this.map(response);
                    successCallback(position);
                }
                else {
                    const error = this.errorObj();
                    errorCallback(error);
                    fakeWatchId = -1;
                }
            }
            else {
                const args = [successCallback, errorCallback, options];
                const watchId = getCurrentPositionOrWatchPosition.apply(navigator.geolocation, args);
                if (type === 'WATCH') {
                    this.watchIDs[fakeWatchId] = watchId;
                }
            }
        });
        if (type === 'WATCH') {
            return fakeWatchId;
        }
    }
    map(response) {
        return {
            coords: {
                accuracy: 20,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                latitude: response.latitude,
                longitude: response.longitude,
                speed: null,
            },
            timestamp: Date.now(),
        };
    }
    errorObj() {
        return {
            code: 1,
            message: 'User denied Geolocation',
        };
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon')
  </script><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><script type="text/javascript">
    var thisDomain = '';
    if (thisDomain.length > 0) {
        document.domain = thisDomain;
    }
</script>


    
        <title>Nepečené s kakaem - Recepty</title>

<meta property="og:site_name" content="Sbírka receptů">
<meta property="og:title" content="Helenčina sbírka receptů ~ Nepečené cukroví s kakaem">
<meta property="og:description" content="37. RUMOVÁ ČOKOLÁDA:
250 g Omega, 200 g moučkového
 cukru, 80 g sušeného mléka, 40 g kakaa, 2 lžíce rumu, 1 vanilkový cukr. Všechny suroviny rozehřejeme ve vodní lázni a plníme do formiček vypláchnutých vodou.
36. OŘECHOVÁ ČOKOLÁDA:
250 g Omega, 250 g moučkového cukru, 100 g kakaa, 40 g mletých o...">
<meta property="og:image:width" content="1280">
<meta property="og:image:height" content="1280">
<meta property="og:updated_time" content="2020-06-23T13:38:08.1321929Z">
<meta property="og:type" content="article">
<meta name="format-detection" content="telephone=no">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="37. RUMOVÁ ČOKOLÁDA:
250 g Omega, 200 g moučkového
 cukru, 80 g sušeného mléka, 40 g kakaa, 2 lžíce rumu, 1 vanilkový cukr. Všechny suroviny rozehřejeme ve vodní lázni a plníme do formiček vypláchnutých vodou.
36. OŘECHOVÁ ČOKOLÁDA:
250 g Omega, 250 g moučkového cukru, 100 g kakaa, 40 g mletých o...">
        <link rel="stylesheet" type="text/css" href="news_files/36840710.design.v1590393210.css">
<link rel="stylesheet" type="text/css" href="news_files/base.css">
<link rel="stylesheet" type="text/css" href="news_files/rowsconcept.css">
<link rel="stylesheet" type="text/css" href="news_files/somelinks.css">
<link rel="stylesheet" type="text/css" href="news_files/footerlayout5.css">
<link rel="stylesheet" type="text/css" href="news_files/quilljs.css">
<link rel="stylesheet" type="text/css" href="news_files/fontawesome-all.css">

<link rel="stylesheet" type="text/css" href="news_files/ionicons.min.css">
        <script type="text/javascript" src="news_files/FrontendAppLocalePage.aspx"></script><script>(function inject() {
        var open = XMLHttpRequest.prototype.open;

        XMLHttpRequest.prototype.open = function () {
          this.requestMethod = arguments[0];
          open.apply(this, arguments);
        };

        var send = XMLHttpRequest.prototype.send;

        XMLHttpRequest.prototype.send = function () {
          var onreadystatechange = this.onreadystatechange;

          this.onreadystatechange = function () {
            function GenerateQuickId() {
              var randomStrId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
              return randomStrId.substring(0, 22);
            }

            try {
              if (this.readyState === 4) {
                var id = 'detector';
                var mes = {
                  posdMessageId: 'PANELOS_MESSAGE',
                  posdHash: GenerateQuickId(),
                  type: 'VIDEO_XHR_CANDIDATE',
                  from: id,
                  to: id.substring(0, id.length - 2),
                  content: {
                    requestMethod: this.requestMethod,
                    url: this.responseURL,
                    type: this.getResponseHeader('content-type'),
                    content: this.response
                  }
                };
                window.postMessage(mes, '*');
              }
            } catch (e) {}

            if (onreadystatechange) {
              return onreadystatechange.apply(this, arguments);
            }
          };

          return send.apply(this, arguments);
        };
      })();</script>
    <style type="text/css">.fancybox-margin{margin-right:0px;}</style><style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url("/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png") no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url("/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png") no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url("/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png") no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url("/rsrc.php/v3/yd/r/Cou7n-nqK52.gif") no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url("/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif") white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url("/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif") no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url("/rsrc.php/v3/yD/r/t-wz8gw1xG1.png");background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}</style></head>
    <body data-pid="435760966" data-iid="" style="line-height: normal;" class="stefan-asafti">
        
        <div class="container-fluid site-wrapper" bis_skin_checked="1">
            <!-- this is the Sheet -->
            <div class="container-fluid header-wrapper sub-open" id="header" bis_skin_checked="1"> <!-- this is the Header Wrapper -->
    <div class="container" bis_skin_checked="1">
<div class="title-wrapper" bis_skin_checked="1">
	<div class="title-wrapper-inner" bis_skin_checked="1">
	    <a class="logo " href="#" bis_skin_checked="1">
	    </a>
	    <div class="title " bis_skin_checked="1">
	        <a class="title  title-link" href="#form" bis_skin_checked="1">
                Helenčina sbírka receptů
            </a> 
	    </div>
	    <div class="subtitle" bis_skin_checked="1">
	        Helena Vybíralová
	    </div>
	</div>
</div>  <!-- these are the titles -->

    </div>
</div>  <!-- this is the Header content -->
            <div class="container-fluid content-wrapper" id="content" bis_skin_checked="1"> <!-- this is the Content Wrapper -->
    <div class="container" bis_skin_checked="1">
        <div class="row-fluid content-inner" bis_skin_checked="1">
            <div id="left" class="span9" bis_skin_checked="1"> <!-- ADD "span12" if no sidebar, or "span9" with sidebar -->
                <div class="wrapper " bis_skin_checked="1">
                    <div class="content" bis_skin_checked="1">
            <div class="row-fluid layout5-row  margins-topbottom padding-all " bis_skin_checked="1">
                <div class="sections-wrapper" bis_skin_checked="1">
                        <div class="span12 " bis_skin_checked="1">
                                <div class="outer-margin-on first last" bis_skin_checked="1">
                                    <div class="section article margins-on" bis_skin_checked="1">
    <style>.wordwrapfix {
        word-wrap:break-word;
    }
</style>
<div class="heading wordwrapfix" bis_skin_checked="1">
        <h3>Nepečené cukroví s kakaem</h3>
</div>

    <div class="content" bis_skin_checked="1">
<div class="img-simple  " bis_skin_checked="1">
    <div class="image" bis_skin_checked="1">
            <a data-ss="imagemodal" data-href="https://i.pinimg.com/564x/38/a1/8f/38a18f2e5ea0db4eee972b1cf7069381.jpg" rel="group" has-arrows="False"><img src="news_files/i285415639406045741._szw1280h1280_.jpg"></a>
    </div>
    </div>
<p style="text-align: left;" align="center">&nbsp;</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">37. RUMOVÁ ČOKOLÁDA:</span></p> <p style="text-align: left;">250 g Omega, 200 g moučkového
 cukru, 80 g sušeného mléka, 40 g kakaa, 2 lžíce rumu, 1 vanilkový cukr. Všechny suroviny rozehřejeme ve vodní lázni a plníme do formiček vypláchnutých vodou.</p> <p style="text-align:
 left;" align="center"><span style="text-decoration: underline;">36. OŘECHOVÁ ČOKOLÁDA:</span></p> <p style="text-align: left;">250 g Omega, 250 g moučkového cukru, 100 g kakaa, 40 g mletých ořechů, 5 lžic Solamylu. Ve vodní
 lázni rozpustíme tuk, vmícháme cukr, Solamyl, kakao a mícháme, až se hmota spojí. Odstavíme, vmícháme ořechy a plníme do formiček vypláchnutých vodou.</p> <p style="text-align:
 left;" align="center"><span style="text-decoration: underline;">35. NUGÁT:</span></p> <p style="text-align: left;">250 g moučkového cukru, 250 g Omega, 250 g drcených sušenek, 2 vejce, 50 g kakaa, trocha sekaných ořechů,
 instantní kávy a rumu. Utřeme vejce s cukrem, přidáme kakao, tuk a ostatní suroviny. Dobře promícháme a rozetřeme na plech vyložený pečícím papírem. Jakmile nugát ztuhne, nakrájíme
 na kostky.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">34. DOUTNÍČKY:</span></p> <p style="text-align: left;" align="left">1 balíček kandovaného ovoce, 100 g rozinek, 1 balíček fíků,
 1 vejce, 125 g Omegy, 150 g moučkového cukru, 50 g kakaa, 200 g mletých piškotů, 1 lžíce džemu, trocha rumu. Kandované ovoce, rozinky, fíky pomeleme a přidáme ostatní suroviny. Z dobře vypracované
 hmoty tvarujeme doutníčky, namáčíme je do čokolády, špičky obalíme ve strouhaném kokosu.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">33. OVESNÉ KAKAOVÉ
 KULIČKY:</span></p> <p style="text-align: left;">150 g ovesných vloček, 100 g moučkového cukru, 50 g másla, 3 lžíce kakaa, 1 vanilkový cukr. Vločky smícháme s ostatními surovinami. Tvarujeme kuličky.
 Můžeme je obalovat ve strouhané čokoládě.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">32. KAKAOVÉ KULIČKY SALKO:</span></p> <p style="text-align: left;">250 g Omegy, 1 Salko, 80 g kakaa, 200
 g moučkového cukru, 8 lžic rumu. Rozpustíme tuk, do vlažného vmícháme Salko, cukr s kakaem, rum a vymícháme dohladka. Necháme ztuhnout v chladničce, tvarujeme kuličky, které obalujeme ve strouhaných
 oříšcích nebo v kokosu.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">31. BONAPARTKY:</span></p> <p style="text-align: left;" align="left">200 g drcených dětských piškotů,
 100 g mletých ořechů, 100 g moučkového cukru, 100 g másla, 1 bílek, 2 lžíce rumu, 20 g kakaa. Vypracujeme těsto, necháme v chladu ztuhnout. Tvarujeme kuličky, máčíme v čokoládové polevě.
 Vkládáme do papírových košíčků.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">30. ČOKOLÁDKY:</span></p> <p style="text-align: left;" align="left">190 g moučkového
 cukru, 250 g 100% tuku, 65 g kakaa, 125 g sušeného mléka. Nad párou rozpustíme tuk, vmícháme prosetý cukr, mléko, kakao a vymícháme dohladka. Do výlisku z bonboniéry
 nalijeme trochu čokolády (můžeme přidat podrcené oříšky, piškoty) a necháme ztuhnout.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">29. ČOKOLÁDOVÉ PRALINKY:</span></p>
 <p style="text-align: left;">100 g moučkového cukru, 250 g tuku Iva (Omega), 2-3 vejce, 2 lžičky Maizeny, 30 g kakaa, 1 vanilkový cukr, podle chuti rum. Ve vodní lázni vyšleháme vejce s cukrem i vanilkovým,
 Maizenou a kakaem. Odstavíme, vmícháme nakrájený tuk a dobře vyšleháme. Můžeme ochutit rumem. Krém stříkáme cukrářským sáčkem s nástavcem do papírových
 košíčků, do hromádky zapíchneme oloupanou mandli.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">28. VÁNOČNÍ NEPEČENÝ JEŽEK:</span>&nbsp;&nbsp;</p> <p style="text-align:
 left;" align="left">200 g posekaných piškotů, 100 g ml. cukru, 250 g rozpuštěného a vychladlého 100 % tuku Omega, 2 vejce, 40 g kakaa, 100 g nakrájeného kandovaného ovoce, 50 g nasekaných ořechů,
 hrst mletých ořechů, trocha rozinek, 1 dl rumu, 1 vanilkový cukr. Vše smícháme a necháme v chladu ztuhnout. Tvarujeme válečky, obalíme je v kokosu, zabalíme do alobalu a uložíme v chladnu.
 Krájíme dle potřeby asi na 1 cm široké plátky.&nbsp;&nbsp;&nbsp;</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">27. NUGÁT:</span></p> <p style="text-align: left;" align="left">Utřeme
 60 g másla a 160 g ml. cukru, vetřeme 1 vejce, vmícháme 160 g mletých sucharů, 3 lžíce kakaa, 2 lžíce rumu a 2 lžíce vanil.cukru. Z hmoty vyválíme placku, polijeme kakaovou polevou a krájíme
 čtverečky. Lze přidat i rozinky nebo kandované ovoce.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">26. ČOKOLÁDOVÝ SALÁM:</span></p> <p style="text-align: left;" align="left">300 g rozdrobených
 piškotů pokapeme 2 lžícemi rumu. Utřeme 2 vejce s 200 g ml. cukru a přidáme 40 g kakaa. 250 g rozpuštěného, vlahého ztuženého tuku spojíme s utřeným vejcem, přidáme piškoty a vše
 dobře promícháme. Uděláme šišku jako salám, zabalíme do alobalu a dáme do lednice ztuhnout. Pak krájíme kolečka.</p> <p style="text-align: left;" align="center"><span style="text-decoration:
 underline;">25. DOMÁCÍ ČOKOLÁDY TMAVÁ:</span></p> <p style="text-align: left;" align="left">250 g 100% tuku rozpustíme a do horkého vmícháme 250 g ml. cukru, 1 lžíci Solamylu a 100 g kakaa. Směs
 nalijeme do vodou vypláchnutých formiček, necháme ztuhnout a vyklopíme.</p> <p style="text-align: left;" align="center"><span style="text-decoration: underline;">24. DOMÁCÍ ČOKOLÁDOVÁ KOLEKCE:</span></p>
 <p style="text-align: left;" align="left">Ve vodní lázni rozpustíme 250 g Hery nebo jiného tuku, přidáme 250 g ml. cukru, 60 g kakaa a umícháme hladkou hmotu. Nakonec přidáme 3 lžíce Solamylu a
 90 g ml. ořechů. Hmotu dáme do formiček vypláchnutých studenou vodou, necháme ztuhnout a narovnáme do krabice od bonboniéry nebo kolekce. Jednotlivé kousky můžeme zabalit do celofánu.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">23. KAKAOVÉ ÚLKY:</span></p> <p class="styl9" style="text-align: left;" align="left">150 g moučkového cukru, 50 g másla, 150 g mletých dětských
 piškotů, 2 lžíce kakaa, 1 dl rumu. Vypracované těsto tvarujeme do válečku, který vyválíme v moučkovém cukru. Malé kousky vtlačujeme do formiček úlků vysypaných moučkovým cukrem.
 Vyklepneme a necháme do druhé dne sušit. Plníme vaječným koňakem nebo krémem (máslo, moučkový cukr, žloutek, lžička rumu). Naplněné úlky přiklopíme piškotem.</p> <p style="text-align:
 left;" align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="text-decoration: underline;">22. PUNČOVÉ KOULE:</span></p> <p style="text-align: left;" align="left">Ve vodní lázni necháme změknout 50 g čokolády na vaření, přidáme 100 g moučkového cukru, 250 g másla, 2 balíčky drcených piškotů, 100 g mletých ořechů, 2 lžíce
 kakaa, 1 dl rumu, 0,5 dl ovocného sirupu a 1 vanilkový cukr. Z vychladlé hmoty tvarujeme kuličky a obalujeme v kokosu.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">21. DOMÁCÍ
 NUGETA:</span></p> <p class="styl9" style="text-align: left;">200 g másla, 250 g ztuženého 100% tuku, 2 kondenzovaná slazená mléka Salko, 1 balíček kakaa, strouhané ořechy. V nádobě nad parou rozpustíme
 máslo a ztužený tuk, přisypeme kakao, vymícháme. Přilijeme slazené mléko, důkladně promícháme, prohřejeme (nevaříme). Vmícháme mleté ořechy (nemusí být).</p>
 <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">20. ČOKOLÁDA:</span></p> <p class="styl9" style="text-align: left;">1 100% tuk, 1 čokoláda na vaření, 2 čokoládové pudinky,
 1 celé kakao, 250 g cukru. Ve vodní lázni rozpustíme tuk, přidáme rozlámanou čokoládu a necháme rozpustit. Potom přidáme dohromady smíchané pudinky, kakao, cukr a dobře promícháme.</p>
 <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">19. ČOKOLÁDOVÁ VEJCE SE ZMRZLINOU:</span></p> <p class="styl9" style="text-align: left;">250 g měkkého tvarohu, 1 kelímek zakysané
 smetany, 100 g moučkového cukru, 1/2 balíčku vanilkového cukru. Vše našleháme do hladkého krému. Ve vodní lázni rozpustíme 125 g ztuženého tuku, vmícháme 1 lžíci
 moučkového cukru, 4 lžíce kakaa, 2 lžíce Solamylu (škrobové moučky), 2 lžíce vřelé vody. Vymícháme do lesklé čokoládové hmoty. Čistý plastový obal na vajíčka
 vypláchneme studenou vodou. Do každého otvoru nalijeme čokoládu a doplníme tvarohovým krémem. Necháme ztuhnout v mrazničce.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration:
 underline;">18. PIŠKOTOVÝ DORT:</span></p> <p class="styl9" style="text-align: left;">1 balíček kakaa uvaříme ve 4 dl vody, necháme vychladnout. Ušleháme krém z 250 g másla, 150 g cukru a 4 žloutků.
 Do krému zašleháme uvařené kakao. Smícháme se 2 balíčky piškotů, pokapeme rumem. Dáme do formy a necháme do druhého dne uležet v lednici. Před podáváním zdobíme
 ovocem a šlehačkou.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">17. PLNĚNÉ ŠUHAJDY:</span></p> <p class="styl9" style="text-align: left;">125 g 100% tuku, 100 g čokolády
 na vaření, 2 lžičky kakaa. Tuk a čokoládu rozpustíme ve vodní lázni a přidáme prosáté kakao. Rozpuštěnou hmotu lijeme do hlubších formiček, do středu dáme náplň a opět
 trochu vychladlé čokolády. Pak necháme ztuhnout v mrazáku 1 hodinu a vyklopíme. <span style="text-decoration: underline;">Náplň:</span> Do trochy mléka dáme 200 g moučkového cukru, 125 g 100% tuku,
 mírně zahřejeme až tuk roztaje, přidáme 2 lžičky kakaa, 50 g mletých ořechů, 30 g sekaných rozinek, rum podle chuti.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">16. KULIČKY
 SALKO:</span></p> <p class="styl9" style="text-align: left;">200 g moučkového cukru, 1 slazené kondenzované mléko Salko, 80 g kakaa, 250 g 100% ztuženého tuku, rum. Nad parou necháme rozpustit tuk, vmícháme
 kakao, cukr a pomalu přiléváme slazené mléko. Ochutíme rumem, vymícháme do hladké hmoty a necháme v chladničce ztuhnout. Lžičkou vykrajujeme kousky hmoty a v mletých oříšcích
 (kokosu) je vyválíme do kuliček.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">15. ČOKOLÁDOVÉ KULIČKY:</span></p> <p class="styl9" style="text-align: left;">20 g moučkového
 cukru, 2 žloutky, 60 g tuku, 200 g změklé čokolády na vaření, 20 g kakaa, 2 lžíce rumu. Vše dobře utřeme, vyšleháme a necháme asi 1 hodinu v chladu ztuhnout. Pak tvarujeme kuličky,obalujeme v kokosové
 moučce nebo strouhané čokoládě a vkládáme do papírových košíčků.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">14. NEPEČENÉ ČOKOLÁDOVÉ
 KOŠÍČKY:</span></p> <p class="styl9" style="text-align: left;">300 g moučkového cukru, 250 g 100% ztuženého tuku, 80 g kakaa. V nádobě nad párou rozpustíme tuk, přidáme cukr a kakao. Vymícháme
 do hladka, necháme mírně ochladit. Lžičkou dáváme do papírových košíčků trochu vlažné čokolády, ořechovou náplň (smícháme 150 g moučkového cukru se 150 g mletých
 ořechů, 50 g nakrájených rozinek a 1 dl rumu) a zalijeme čokoládou. Necháme v chladu ztuhnout.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">13. RUMOVÝ SALÁM:</span></p>
 <p class="styl9" style="text-align: left;">200 g sušenek Be-Be, 250 g moučkového cukru, 250 g ztuženého 100% tuku, 50 g kakaa, 10-15 lžic rumu, sekané mandle, ořechy, rozinky, kandované ovoce (podle potřeby). V nádobě
 nad vařící vodou rozpustíme tuk, vmícháme cukr, kakao a vymícháme hladkou hmotu. Odstavíme, přidáme pomleté sušenky, mleté ořechy, mandle, kandované ovoce, rozinky a
 rum. Vypracujeme vláčné těsto, vyválíme do válečku, zabalíme do celofánu a necháme přes noc ztuhnout. Krájíme na kolečka.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">12. NUGÁTOVÝ ZÁVIN:</span></p> <p class="styl9" style="text-align: left;">250 g kávových oválků, 150 g moučkového cukru, 3 lžíce kakaa, 3 lžíce rumu. Oválky
 umeleme, přidáme ostatní suroviny a vypracujeme těsto, které vyválíme na pečicím papíře. Potřeme náplní, srolujeme a dáme ztuhnout do lednice. <span style="text-decoration: underline;">Náplň:
 </span>Utřeme 200 g moučkového cukru, 150 g másla, 1 žloutek.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">11. VIŠNĚ V KAKAOVÉM KRÉMU:</span></p> <p class="styl9" style="text-align: left;">125 g moučkového cukru, 125 g 100% tuku (Lukana), 6 kakaových pudinků, 4 lžíce kakaa, 1 vanilkový cukr, 1 dl mléka, 4 lžíce rumu. Za stálého míchání vaříme
 nad parou všechny suroviny do zhoustnutí. Vychladlé promícháme do hladka a pomocí zdobítka na dorty plníme do poloviny papírových košíčků. Položíme višni, nastříkáme
 krém a nahoru položíme oříšek. Necháme ztuhnout.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">10. KOŇAKOVÉ ŠPIČKY: </span></p> <p class="styl9" style="text-align:
 left;">180 g moučkového cukru, 120 g másla, 200 g dětských piškotů, 2 lžíce kakaa, 4 lžíce rumu. Piškoty rozdrtíme, smícháme s cukrem, máslem, kakaem a rumem. Vypracujeme těsto, kousky
 těsta vtlačujeme do malých likérových štamprliček vysypaných moučkovým cukrem. Prstem vytlačíme důlek, vyklopíme a naplníme krémem (máslo utřené s vaječným koňakem)
 a přilepíme piškot nebo sušenku. Můžeme polít čokoládovou polevou.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">9. VOSÍ HNÍZDA:</span></p> <p class="styl9" style="text-align: left;">180 g moučkového cukru, 80 g másla, 200 g mletých piškotů, 50 g kakaa, 4 lžíce rumu, 2 lžíce vody. Zpracujeme těsto, které necháme 2 dny uležet. Potom plníme formičky
 úlku, do středu dáme náplň a přiklopíme piškot. Namáčíme v čokoládové polevě. <span style="text-decoration: underline;">Náplň:</span> vymícháme do hladka 80 g moučkového
 cukru, 1 syrový žloutek, 1 vařený prolisovaný žloutek, 1 lžíci kondenzovaného mléka, 2 lžíce rumu.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">8. ČOKOLÁDOVÉ
 KULIČKY:</span></p> <p class="styl9" style="text-align: left;">200 g moučkového cukru, 250 g 100% tuku (modrá Lukana, Omega), 2 lžíce Solamylu, 4 lžíce kakaa, 1 lžíce rumu, 1 slazené Salko. Do kastrůlku nastrouháme
 tuk, přidáme ostatní suroviny a ve vodní lázni za stálého míchání vše spojíme do hladké čokoládové hmoty. Necháme v chladu ztuhnout, lžičkou vykrajujeme
 kuličky a obalujeme v mletých oříšcích nebo kokosové moučce. Necháme na tácku vyloženém alobalem ztuhnout.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">7.
 KAKAOVÉ KULIČKY:</span></p> <p class="styl9" style="text-align: left;">100 g moučkového cukru, 200 g ztuženého tuku, 2-3 vejce, 2 lžičky Maizeny, 30 g kakaa, vanilkový cukr. Ve vodní lázni šleháme vejce,
 cukr, vanilkový cukr a Maizenu do hustého krému. Pak přidáme tuk, vyndáme z vodní lázně a mícháme do rozpuštění tuku. Za občasného zamíchání necháme
 vychladit. Tvarujeme kuličky, které obalujeme v mletých oříšcích nebo čokoládovém drobení.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">6. KOŠÍČKY
 S ROZINKAMI:</span></p> <p class="styl9" style="text-align: left;">250 g moučkového cukru, 250 g másla nebo jiného tuku, 3 lžíce Maizeny, 2 lžíce kakaa, 50 g rozinek, 2 dl mléka. Cukr smícháme s mlékem,
 přidáme Maizenu, kakao, vše dobře promícháme a za stálého míchání uvaříme do husta. Pak přidáme tuk a rozinky, vymícháme do hladka a směsí naplníme papírové
 košíčky, které jsme si připravili na tác. V chladničce necháme vychladit.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">5. VIŠNĚ V ČOKOLÁDĚ:</span></p>
 <p class="styl9" style="text-align: left;">120 g tuku (100%), 120 g moučkového cukru, 6 kakaových pudinků, 1 vanilkový cukr, 4 lžíce kakaa, 1 dl mléka, 1 dl rumu. Vše vaříme ve vodní lázni do zhoustnutí.
 Sáčkem na zdobení plníme do papírových košíčků hmotu, višni, hmotu. Zdobíme oříškem.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">4.
 ČOKOLÁDOVÉ KOUSKY:</span></p> <p class="styl9" style="text-align: left;" align="left">250 g moučkového cukru, 250 g ztuženého tuku, 120 g kakaa, 1 lžička vanilkového pudinku. Nad parou rozpustíme tuk, smícháme
 s kakaem a cukrem. Vymícháme do hladka a přidáme vanilkový pudink. Můžeme přidat sekané mandle, ořechy. Plníme formičky vypláchnuté studenou vodou, necháme v chladu ztuhnout a vyklopíme.</p>
 <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">3.&nbsp;</span><span style="text-decoration: underline;">KRÉMOVÉ KOULE: </span></p> <p class="styl9" style="text-align: left;">Uvaříme
 hustý puding ze 1/4 l mléka a 1 van. pudin. prášku. Do vlažného vmícháme 50 g 100% tuku, 250 g másla, 150 g ml. cukru, 2 lžíce kakaa, rum a na kostičky nakrájený piškotový
 plát, který upečeme z&nbsp;5 vajec, 100 g ml. cukru a 150 g polohr. mouky. Promícháme, přidáme okapaný na kousky nakrájený ananas a zahustíme ml.mandlemi. Tvarujeme koule, které obalujeme
 v&nbsp;ml. mandlích.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">2. ČOKOLÁDA STŘÍKANÁ DO KOŠÍČKŮ:</span></p> <p class="styl9" style="text-align: left;" align="left">Ušleháme
 do husta (ručně asi 30 minut) 3 vrchovaté lžíce moučkového cukru, 2 vejce, 1 žloutek, vanilkový cukr. Ve vodní lázni rozpustíme 250 g 100% tuku, 1/2 tabulky čokolády na vaření, 50 g kakaa. Mícháme
 až je hmota lesklá a hladká. Opatrně zašleháme do žloutkového krému a pomocí sáčku s trubičkou stříkáme přímo do papírových košíčků.</p> <p class="styl9" style="text-align: left;" align="center"><span style="text-decoration: underline;">1. KOKOSOVÝ NUGÁT:</span></p> <p class="styl9" style="text-align: left;" align="left">500 g dětských piškotů, 130 g moučkového cukru, 250
 g 100% tuku, 50 g kakaa, 10 lžic rumu. Do rozpuštěného tuku vmícháme cukr, mleté piškoty, kakao a rum. Rozválíme na alobalu a potřeme kokosovým krémem. Utřeme 250 g másla s 250 g
 moučkového cukru, přidáme 250 g kokosové moučky, vanilkový cukr. Polijeme rozpuštěnou čokoládou a necháme v chladu ztuhnout. Krájíme na kostičky.</p>    </div>
</div>

                                </div>
                        </div>
                </div>
            </div>
    </div>

                
                </div>
            </div>
            <div id="right" class="span3  " bis_skin_checked="1">
                <div class="sidebar" bis_skin_checked="1">
            <div class="wrapper latest-comments" bis_skin_checked="1">
                <style>.wordwrapfix {
        word-wrap:break-word;
    }
</style>

            </div>
</div>
            </div>
        </div>        
    </div>
</div>  <!-- the controller has determined which view to be shown in the content -->
            <div class="container-fluid footer-wrapper" id="footer" bis_skin_checked="1">
    <!-- this is the Footer Wrapper -->
    <div class="container" bis_skin_checked="1">
        <div class="footer-info" bis_skin_checked="1">
                    </div>
        <div id="css_simplesite_com_fallback" class="hide" bis_skin_checked="1"></div>
    </div>
</div>

  <!-- this is the Footer content -->
        </div>
                        
        <input type="hidden" id="anti-forgery-token" value="vFZIp11QDd7w1cZjYdzwVVw3rTHgQi1lpMMqomvLq/qGfx85dADIn6rd+jb5+yvdIjnIKNejlFu6vxL7J8Np5d73QnCpw9j80iNY7PPXkg6Gz/95hpiCBRd7itWHBJdFA6NEhqIiPO5N6wuOCoW2g/HglLcr73b8kbMmWwrK1IEyCL+Ni27wNUmoVOGWopEvfoZ44MhC6YGFakfldLdtt/qGVraRzj2C2Qf71gYrgzljkb5LrFsFUkwfgwK80Zj2Q7GBHlIEHnkm7bgK9eMa4mEdisQROuaocN41RStMOuylvv1bQBsrJpnoAtFx3cHyLqy+qVBzlZvelpTDjaMR6yus4mIUqXWSX9cIzSWv4k/Gy29rQLUQji0xeAd1CdbLbqJg6JBeP3RAqk1IPlsomECbHK1HIsaLrnTPV7yW3eX9kIvSf+6KN208xrHS79O7Ca0t3ZxiXX4kRbLD86KyxA==">
        
        <script>
    dataLayer = [{"SiteVer":"US","MainOrUser":"UserPage","PreOrFre":"Premium","Language":"cs","Culture":"cs-CZ","Instrumentation":"ShowPage","Market":"CZ","ExpQS":""}];
</script>
        <!-- Remove after blog exp concludes -->


                <script type="text/javascript" src="news_files/frontendApp.min.js"></script>
        <script type="text/javascript">if(typeof window.jQuery=="undefined"){(function(){var a=document.createElement("script");a.type="text/javascript";a.src="/c/js/version3/frontendApp/init/frontendApp.min.js?_v=6018cd3fc25cf97a1ea8aea24a735253";document.getElementsByTagName('head')[0].appendChild(a);})();}</script>

    <script type="text/javascript" src="news_files/api.js"></script>


            <script type="text/javascript">
                var req = { "cmd": "VisitorInfo" };
                var theApiUrl = '/userPages/pages/handleAsyncCmd.aspx';
                window.session = {
                    options: { gapi_location: true },
                    start: function (session) {
                        req.sessionData = JSON.stringify(session);
                        $.ajax({
                            'url': theApiUrl,
                            'cache': false,
                            'type': 'POST',
                            'contentType': 'application/json; charset=utf-8',
                            'dataType': 'json',
                            'data': JSON.stringify(req)
                        });
                    }
                }
            </script>
            <script type="text/javascript">
                                                                                                /**
                                                                                     * session.js 0.4.1
                                                                                     * (c) 2012 Iain, CodeJoust
                                                                                     * session.js is freely distributable under the MIT license.
                                                                                     * Portions of session.js are inspired or borrowed from Underscore.js, and quirksmode.org demo javascript.
                                                                                     * This version uses google's jsapi library for location services.
                                                                                     * For details, see: https://github.com/codejoust/session.js
                                                                                     */(function (e, t, n) { var r = .4, i = { use_html5_location: !1, ipinfodb_key: !1, gapi_location: !0, location_cookie: "location", location_cookie_timeout: 5, session_timeout: 365, session_cookie: "first_session" }, s = function () { String.prototype.contains = function (e) { if (typeof e == "string") return this.indexOf(e) !== -1; for (var t = 0; t < e.length; t++)if (this.indexOf(e[t]) !== -1) return !0; return !1 }; if (e.session && e.session.options) for (option in e.session.options) i[option] = e.session.options[option]; var t = { api_version: r, locale: u.locale(), current_session: u.session(), original_session: u.session(i.session_cookie, i.session_timeout * 24 * 60 * 60 * 1e3), browser: u.browser(), plugins: u.plugins(), time: u.time(), device: u.device() }; i.use_html5_location ? t.location = u.html5_location() : i.ipinfodb_key ? t.location = u.ipinfodb_location(i.ipinfodb_key) : i.gapi_location && (t.location = u.gapi_location()); if (e.session && e.session.start) var n = e.session.start; var s = 0, o, a, f = function () { s === 0 && n && n(e.session) }; e.session = {}; for (var l in t) { o = t[l]; if (typeof o == "function") try { o(function (t) { e.session[l] = t, s-- , f() }), s++ } catch (c) { e.console && typeof console.log == "function" && console.log(c) } else e.session[l] = o } f() }, o = { detect: function () { return { browser: this.search(this.data.browser), version: this.search(n.userAgent) || this.search(n.appVersion), os: this.search(this.data.os) } }, search: function (e) { if (typeof e != "object") { var i = e.indexOf(this.version_string); if (i == -1) return; return parseFloat(e.substr(i + this.version_string.length + 1)) } for (var t = 0; t < e.length; t++) { var n = e[t].string, r = e[t].prop; this.version_string = e[t].versionSearch || e[t].identity; if (n) { if (n.indexOf(e[t].subString) != -1) return e[t].identity } else if (r) return e[t].identity } }, data: { browser: [{ string: n.userAgent, subString: "Chrome", identity: "Chrome" }, { string: n.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" }, { string: n.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" }, { prop: e.opera, identity: "Opera", versionSearch: "Version" }, { string: n.vendor, subString: "iCab", identity: "iCab" }, { string: n.vendor, subString: "KDE", identity: "Konqueror" }, { string: n.userAgent, subString: "Firefox", identity: "Firefox" }, { string: n.vendor, subString: "Camino", identity: "Camino" }, { string: n.userAgent, subString: "Netscape", identity: "Netscape" }, { string: n.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" }, { string: n.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" }, { string: n.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }], os: [{ string: n.platform, subString: "Win", identity: "Windows" }, { string: n.platform, subString: "Mac", identity: "Mac" }, { string: n.userAgent, subString: "iPhone", identity: "iPhone/iPod" }, { string: n.userAgent, subString: "iPad", identitiy: "iPad" }, { string: n.platform, subString: "Linux", identity: "Linux" }, { string: n.userAgent, subString: "Android", identity: "Android" }] } }, u = { browser: function () { return o.detect() }, time: function () { var e = new Date, t = new Date; return e.setMonth(0), e.setDate(1), t.setMonth(6), t.setDate(1), { tz_offset: -(new Date).getTimezoneOffset() / 60, observes_dst: e.getTimezoneOffset() !== t.getTimezoneOffset() } }, locale: function () { var e = (n.language || n.browserLanguage || n.systemLanguage || n.userLanguage).split("-"); return e.length == 2 ? { country: e[1].toLowerCase(), lang: e[0].toLowerCase() } : e ? { lang: e[0].toLowerCase(), country: null } : { lang: null, country: null } }, device: function () { var r = { screen: { width: screen.width, height: screen.height } }, i = t.documentElement, s = t.getElementsByTagName("body")[0]; return r.viewport = { width: e.innerWidth || t.documentElement.clientWidth || t.body.clientWidth, height: e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight }, r.is_tablet = !!n.userAgent.match(/(iPad|SCH-I800|xoom|kindle)/i), r.is_phone = !r.isTablet && !!n.userAgent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i), r.is_mobile = r.is_tablet || r.is_phone, r }, plugins: function () { var e = function (e) { if (n.plugins) { var t, r = 0, i = n.plugins.length; for (; r < i; r++) { t = n.plugins[r]; if (t && t.name && t.name.toLowerCase().indexOf(e) !== -1) return !0 } return !1 } return !1 }; return { flash: e("flash"), silverlight: e("silverlight"), java: e("java"), quicktime: e("quicktime") } }, session: function (n, r) { var i = a.get_obj(n); if (i == null) { i = { visits: 1, start: (new Date).getTime(), last_visit: (new Date).getTime(), url: e.location.href, path: e.location.pathname, referrer: t.referrer, referrer_info: a.parse_url(t.referrer), search: { engine: null, query: null } }; var s = [{ name: "Google", host: "google", query: "q" }, { name: "Bing", host: "bing.com", query: "q" }, { name: "Yahoo", host: "search.yahoo", query: "p" }, { name: "AOL", host: "search.aol", query: "q" }, { name: "Ask", host: "ask.com", query: "q" }, { name: "Baidu", host: "baidu.com", query: "wd" }], o = s.length, u, f, l = 0, c = "q query term p wd query text".split(" "); for (l = 0; l < o; l++) { u = s[l]; if (i.referrer_info.host.indexOf(u.host) !== -1) { i.search.engine = u.name, i.search.query = i.referrer_info.query[u.query], i.search.terms = i.search.query ? i.search.query.split(" ") : null; break } } if (i.search.engine === null && i.referrer_info.search.length > 1) for (l = 0; l < c.length; l++) { var h = i.referrer_info.query[c[l]]; if (h) { i.search.engine = "Unknown", i.search.query = h, i.search.terms = h.split(" "); break } } } else i.last_visit = (new Date).getTime(), i.visits++; return a.set_cookie(n, a.package_obj(i), r), i }, html5_location: function () { return function (e) { n.geolocation.getCurrentPosition(function (t) { t.source = "html5", e(t) }, function (t) { i.gapi_location ? u.gapi_location()(e) : e({ error: !0, source: "html5" }) }) } }, gapi_location: function () { return function (t) { var n = a.get_obj(i.location_cookie); !n || n.source !== "google" ? (e.gloader_ready = function () { "google" in e && (e.google.loader.ClientLocation ? (e.google.loader.ClientLocation.source = "google", t(e.google.loader.ClientLocation)) : t({ error: !0, source: "google" }), a.set_cookie(i.location_cookie, a.package_obj(e.google.loader.ClientLocation), i.location_cookie_timeout * 60 * 60 * 1e3)) }, a.embed_script("https://www.google.com/jsapi?callback=gloader_ready")) : t(n) } }, ipinfodb_location: function (t) { return function (n) { var r = a.get_obj(i.location_cookie); r && r.source === "ipinfodb" && n(r), e.ipinfocb = function (e) { if (e.statusCode === "OK") e.source = "ipinfodb", a.set_cookie(i.location_cookie, a.package_obj(e), i.location_cookie * 60 * 60 * 1e3), n(e); else { if (i.gapi_location) return u.gapi_location()(n); n({ error: !0, source: "ipinfodb", message: e.statusMessage }) } }, a.embed_script("http://api.ipinfodb.com/v3/ip-city/?key=" + t + "&format=json&callback=ipinfocb") } } }, a = { parse_url: function (e) { var n = t.createElement("a"), r = {}; n.href = e, query_str = n.search.substr(1); if (query_str != "") { var i = query_str.split("&"), s = 0, o = i.length, u; for (; s < o; s++)u = i[s].split("="), u.length === 2 && (r[u[0]] = decodeURI(u[1])) } return { host: n.host, path: n.pathname, protocol: n.protocol, port: n.port === "" ? 80 : n.port, search: n.search, query: r } }, set_cookie: function (n, r, i, s) { if (!t.cookie || !n || !r) return null; if (!s) var s = {}; if (r === null || r === undefined) i = -1; return i && (s.expires = (new Date).getTime() + i), document.cookie = [encodeURIComponent(n), "=", encodeURIComponent(String(r)), s.expires ? "; expires=" + (new Date(s.expires)).toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", e.location && e.location.protocol === "https:" ? "; secure" : ""].join("") }, get_cookie: function (e, t) { return (t = (new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)")).exec(document.cookie)) ? decodeURIComponent(t[1]) : null }, embed_script: function (e) { var n = t.createElement("script"); n.type = "text/javascript", n.src = e, t.getElementsByTagName("body")[0].appendChild(n) }, package_obj: function (e) { e.version = r; var t = f.stringify(e); return delete e.version, t }, get_obj: function (e) { var t; try { t = f.parse(a.get_cookie(e)) } catch (n) { } if (t && t.version == r) return delete t.version, t } }, f = { parse: e.JSON && e.JSON.parse || function (e) { return typeof e != "string" || !e ? null : (new Function("return " + e))() }, stringify: e.JSON && e.JSON.stringify || function (e) { var t = typeof e; if (t === "object" && e !== null) { var n, r, i = [], s = e && e.constructor === Array; for (n in e) r = e[n], t = typeof r, t === "string" ? r = '"' + r + '"' : t === "object" && r !== null && (r = this.stringify(r)), i.push((s ? "" : '"' + n + '":') + r); return (s ? "[" : "{") + i.join(",") + (s ? "]" : "}") } if (t === "string") return '"' + e + '"' } }; s() })(window, document, navigator);
            </script><script type="text/javascript" src="news_files/jsapi/index.html"></script>

    
<div id="fb-root" class=" fb_reset" bis_skin_checked="1"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;" bis_skin_checked="1"><div bis_skin_checked="1"></div></div></div></body><script>
    window[Symbol.for('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon')] = new (class PostClient {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
        this.serverListeners = {};
        this.bgRequestsListeners = {};
        this.bgEventsListeners = {};
        window.addEventListener('message', (message) => {
            const data = message.data;
            const isNotForMe = !(data.destination && data.destination === this.name);
            const hasNotEventProp = !data.event;
            if (isNotForMe || hasNotEventProp) {
                return;
            }
            if (data.event === 'MARIO_POST_SERVER__BG_RESPONSE') {
                const response = data.args;
                if (this.hasBgRequestListener(response.requestId)) {
                    try {
                        this.bgRequestsListeners[response.requestId](response.response);
                    }
                    catch (e) {
                        console.log(e);
                    }
                    delete this.bgRequestsListeners[response.requestId];
                }
            }
            else if (data.event === 'MARIO_POST_SERVER__BG_EVENT') {
                const response = data.args;
                if (this.hasBgEventListener(response.event)) {
                    try {
                        this.bgEventsListeners[data.id](response.payload);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
            else if (this.hasServerListener(data.event)) {
                try {
                    this.serverListeners[data.event](data.args);
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {
                console.log(`event not handled: ${data.event}`);
            }
        });
    }
    emitToServer(event, args) {
        const id = this.generateUIID();
        const message = {
            args,
            destination: this.destination,
            event,
            id,
        };
        window.postMessage(message, location.origin);
        return id;
    }
    emitToBg(bgEventName, args) {
        const requestId = this.generateUIID();
        const request = { bgEventName, requestId, args };
        this.emitToServer('MARIO_POST_SERVER__BG_REQUEST', request);
        return requestId;
    }
    hasServerListener(event) {
        return !!this.serverListeners[event];
    }
    hasBgRequestListener(requestId) {
        return !!this.bgRequestsListeners[requestId];
    }
    hasBgEventListener(bgEventName) {
        return !!this.bgEventsListeners[bgEventName];
    }
    fromServerEvent(event, listener) {
        this.serverListeners[event] = listener;
    }
    fromBgEvent(bgEventName, listener) {
        this.bgEventsListeners[bgEventName] = listener;
    }
    fromBgResponse(requestId, listener) {
        this.bgRequestsListeners[requestId] = listener;
    }
    generateUIID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
})('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon', 'MARIO_POST_SERVER_eppiocemhmnlbhjplcgkofciiegomcon')</script><script>
    new (class PageContext {
    constructor(clientKey) {
        this.client = window[Symbol.for(clientKey)];
        this.bindEvents();
    }
    bindEvents() {
        const self = this;
        history.pushState = (f => function pushState() {
            const ret = f.apply(this, arguments);
            self.onUrlChange();
            return ret;
        })(history.pushState);
        let firstReplaceEvent = true;
        history.replaceState = (f => function replaceState(params) {
            var ret = f.apply(this, arguments);
            if (!firstReplaceEvent) {
                self.onUrlChange();
            }
            firstReplaceEvent = false;
            return ret;
        })(history.replaceState);
        window.addEventListener('hashchange', function () {
            self.onUrlChange();
        });
    }
    onUrlChange() {
        this.client.emitToBg('URLS_SAFE_CHECK__CONTENT_URL_REWRITED');
    }
})('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon')
</script></html>