//2014-9-2 10:19 ww
window.sohuHD || (window.sohuHD = {}), document.write(unescape("%3Cscript src=' http://tv.sohu.com/commonfrag/vrs_flashPlayer.inc'  %3E%3C/script%3E"));
if ("undefined" == typeof _e && (_e = function() {}, window.console && (_e = function(e) {
        console.info(e)
    })), window.sohuHDApple = {}, "function" == typeof window.ActiveXObject) try {
    var m = new ActiveXObject("SoHuVA.SoHuDector");
    m && m.isSoHuVaReady() && (sohuHDApple.hasSoHuVA = !0, m.StartSoHuVA())
} catch (e) {}! function() {
    sohuHDApple.playerlist = [], sohuHDApple.player = function() {
        var e = sohuHDApple.playerlist,
            t = [],
            n = null,
            r = {};
        for (i = 0; i < e.length; ++i) {
            if (n = document.getElementById(e[i]), r.player = n, n) {
                n.tagName;
                switch (n.tagName) {
                    case "OBJECT":
                    case "EMBED":
                        r.type = "flash", r.pauseVideo = function() {
                            n.pauseVideo()
                        }, r.playVideo = function() {
                            n.playVideo()
                        }, r.seekTo = function(e) {
                            n.seekTo(e)
                        }, r.mute = function() {
                            n.mute()
                        }, r.playedTime = function() {
                            return n.playedTime()
                        }, r.externalCinema = function(e) {
                            n.externalCinema(e)
                        }
                }
            }
            t.push(r)
        }
        return t
    }
}(window);
var SWFObject = function(e, t, n, r, i, s, o, u, a, f, l) {
    var c = this;
    document.createElement && document.getElementById && (c.movie = c.src = e, c.id = t || "", c.width = n || "auto", c.height = r || "auto", c.ver = i ? i.replace(".", ",") : "7,0,19,0", "9,0,145" == c.ver && (c.ver = "9,0,115"), c.bgcolor = s || "", c.quality = u || "high", c.useExpressInstall = "boolean" == typeof o ? o : !1, c.xir = a || window.location, c.redirectUrl = f || window.location, c.detectKey = "boolean" == typeof l ? l : !0, c.pluginspage = "http://www.macromedia.com/go/getflashplayer", c.type = "application/x-shockwave-flash", c.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", c.codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + c.ver, c.objAttrs = {}, c.embedAttrs = {}, c.params = {}, c.flashVarsObj = {}, c._setAttribute("id", c.id), c.objAttrs.classid = c.classid, c._setAttribute("codebase", c.codebase), c._setAttribute("pluginspage", c.pluginspage), c._setAttribute("type", c.type), c._setAttribute("width", c.width), c._setAttribute("height", c.height), c._setAttribute("movie", c.movie), c._setAttribute("quality", c.quality), c._setAttribute("bgcolor", c.bgcolor))
};
SWFObject.prototype = {
        getFlashHtml: function(e) {
            var t = this,
                n = [],
                r = [];
            for (var e in t.flashVarsObj) r.push("&", e, "=", t.flashVarsObj[e]);
            if (document.all) {
                n.push("<object ");
                for (var e in t.objAttrs) n.push(e, '="', t.objAttrs[e], '"', " ");
                n.push(">\n");
                for (var e in t.params) n.push('<param name="', e, '" value="', t.params[e], '" />\n');
                r.length && n.push('<param name="flashvars" value="', r.join(""), '" />\n'), n.push("</object>")
            } else {
                n.push("<embed "), t.embedAttrs.FlashVars = r.join("");
                for (var e in t.embedAttrs) n.push(e, '="', t.embedAttrs[e], '"', " ");
                n.push("></embed>")
            }
            return n.join("")
        },
        _setAttribute: function(e, t) {
            var n = this;
            if ("undefined" != typeof e && "" != e && "undefined" != typeof t && "" != t) {
                var e = e.toLowerCase();
                switch (e) {
                    case "classid":
                        break;
                    case "pluginspage":
                        n.embedAttrs[e] = t;
                        break;
                    case "src":
                    case "movie":
                        n.embedAttrs.src = t, n.params.movie = t;
                        break;
                    case "codebase":
                        n.objAttrs[e] = t;
                        break;
                    case "onafterupdate":
                    case "onbeforeupdate":
                    case "onblur":
                    case "oncellchange":
                    case "onclick":
                    case "ondblClick":
                    case "ondrag":
                    case "ondragend":
                    case "ondragenter":
                    case "ondragleave":
                    case "ondragover":
                    case "ondrop":
                    case "onfinish":
                    case "onfocus":
                    case "onhelp":
                    case "onmousedown":
                    case "onmouseup":
                    case "onmouseover":
                    case "onmousemove":
                    case "onmouseout":
                    case "onkeypress":
                    case "onkeydown":
                    case "onkeyup":
                    case "onload":
                    case "onlosecapture":
                    case "onpropertychange":
                    case "onreadystatechange":
                    case "onrowsdelete":
                    case "onrowenter":
                    case "onrowexit":
                    case "onrowsinserted":
                    case "onstart":
                    case "onscroll":
                    case "onbeforeeditfocus":
                    case "onactivate":
                    case "onbeforedeactivate":
                    case "ondeactivate":
                    case "width":
                    case "height":
                    case "align":
                    case "vspace":
                    case "hspace":
                    case "class":
                    case "title":
                    case "accesskey":
                    case "name":
                    case "id":
                    case "tabindex":
                    case "type":
                        n.objAttrs[e] = n.embedAttrs[e] = t;
                        break;
                    default:
                        n.params[e] = n.embedAttrs[e] = t
                }
            }
        },
        _getAttribute: function(e) {
            var t = this;
            return e = e.toLowerCase(), "undefined" != typeof t.objAttrs[e] ? t.objAttrs[e] : "undefined" != typeof getA.params[e] ? t.params[i] : "undefined" != typeof getA.embedAttrs[e] ? t.embedAttrs[e] : null
        },
        setAttribute: function(e, t) {
            this._setAttribute(e, t)
        },
        getAttribute: function() {
            return this._getAttribute(n)
        },
        addVariable: function(e, t) {
            var n = this;
            n.flashVarsObj[e] = t
        },
        getVariable: function(e) {
            var t = this;
            return t.flashVarsObj[e]
        },
        addParam: function(e, t) {
            this._setAttribute(e, t)
        },
        getParam: function(e) {
            return this._getAttribute(e)
        },
        write: function(e) {
            var t = this;
            "string" == typeof e ? document.getElementById(e).innerHTML = t.getFlashHtml(e) : "object" == typeof e && (e.innerHTML = t.getFlashHtml(e))
        },
        writeCode: function() {
            var e = this;
            document.write(e.getFlashHtml())
        },
        playerVer: function() {
            if (document.all) {
                var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                e && (flashVersion = parseInt(e.GetVariable("$version").split(" ")[1].split(",")[0]))
            } else if (navigator.plugins && navigator.plugins.length > 0) {
                var e = navigator.plugins["Shockwave Flash"];
                if (e)
                    for (var t = e.description.split(" "), n = 0; n < t.length; ++n) isNaN(parseInt(t[n])) || (flashVersion = parseInt(t[n]))
            }
            return {
                v: flashVersion
            }
        }
    },
    function(e, t) {
        var n = -1,
            r = !1;
        document.all && (r = !0);
        var i = (new Date).getTime();
        sohuHDApple.random = function() {
                return i += 1
            }, sohuHDApple.getScript = function(e, t, n, r) {
                var i = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    s = document.createElement("script");
                s.src = e, s.charset = n || "GBK";
                var o = !1;
                r && (s.onerror = r), s.onload = s.onreadystatechange = function() {
                    o || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (o = !0, t && t(), s.onload = s.onreadystatechange = null, i && s.parentNode && i.removeChild(s))
                }, i.insertBefore(s, i.firstChild)
            }, sohuHDApple.cookie = function(e, t, n) {
                if ("undefined" == typeof t) {
                    var r = (new RegExp("(?:^|; )" + e + "=([^;]*)")).exec(document.cookie);
                    return r ? r[1] || "" : ""
                }
                n = n || {}, null === t && (t = "", n.expires = -1);
                var i = "";
                if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
                    var s;
                    "number" == typeof n.expires ? (s = new Date, s.setTime(s.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : s = n.expires, i = "; expires=" + s.toUTCString()
                }
                var o = n.path ? "; path=" + n.path : "",
                    u = n.domain ? "; domain=" + n.domain : "",
                    a = n.secure ? "; secure" : "";
                document.cookie = [e, "=", t, i, o, u, a].join("")
            }, sohuHDApple.getUrlParam = function(e, n) {
                n = escape(unescape(n));
                var r = new Array,
                    i = null;
                if ("#document" == e.nodeName) t.location.search.search(n) > -1 && (i = t.location.search.substr(1, t.location.search.length).split("&"));
                else if ("undefined" != typeof e.src) {
                    var s = e.src;
                    if (s.indexOf("?") > -1) {
                        var o = s.substr(s.indexOf("?") + 1);
                        i = o.split("&")
                    }
                } else {
                    if ("undefined" == typeof e.href) return null;
                    var s = e.href;
                    if (s.indexOf("?") > -1) {
                        var o = s.substr(s.indexOf("?") + 1);
                        i = o.split("&")
                    }
                }
                if (null == i) return null;
                for (var u = 0; u < i.length; u++) escape(unescape(i[u].split("=")[0])) == n && r.push(i[u].split("=")[1]);
                return 0 == r.length ? null : 1 == r.length ? r[0] : r
            },
            function(e, t) {
                var n = t.navigator.userAgent;
                if (e.prototype.isMacSafari = /Macintosh/gi.test(n) && /Safari/gi.test(n) && !/Chrome/gi.test(n), e.prototype.isMacChrome = /Macintosh/gi.test(n) && /Safari/gi.test(n) && /Chrome/gi.test(n), e.prototype.isIpad = /ipad/gi.test(n) || /lepad_hls/gi.test(n) || /SonyDTV/gi.test(n), e.prototype.isIphone = /\(i[^;]+;( U;)? CPU iphone.+Mac OS X/gi.test(n), e.prototype.isIpod = /\(i[^;]+;( U;)? CPU ipod.+Mac OS X/gi.test(n), e.prototype.isIOS = /iphone|ipod|ipad/gi.test(n), e.prototype.isIOSLow = !1, e.prototype.enforceFlash = !1, e.prototype.enforceMP4 = !1, e.prototype.switchHtml = "", e.prototype.isIOS || (e.prototype.isSBDevice = /MQQBrowser/gi.test(n)), /iphone|ipod/gi.test(n)) {
                    var r = n.indexOf(" OS ") + 4,
                        i = parseFloat(n.substring(r, n.indexOf(" ", r)).replace(/_/g, "."));
                    4.2 > i && (e.prototype.isIOSLow = !0)
                }
                if (e.prototype.isSogou = /SE \d+\.X/.test(n), e.prototype.isIEMobile = /IEMobile/.test(n), e.prototype.isAndroid = /android/gi.test(n), e.prototype.isAndroidLow = !1, e.prototype.isAndroidHigh = !1, e.prototype.isAndroid) {
                    var s = n.match(/\bAndroid\b(.*\d)?;/) || [0, "0.0"];
                    e.prototype.androidVer = s, s = parseInt(s[1].replace(/\./g, "")), 100 > s && (s = 10 * s), 230 > s ? e.prototype.isAndroidLow = !0 : s > 411 && (e.prototype.isAndroidHigh = !0)
                }
            }(e, t), e.prototype.eventObj = {}, e.prototype.bindEvents = function(e, t) {
                e && t && (this.eventObj[e] = t)
            }, e.prototype.createUID = function() {
                for (var e = "", n = "0123456789abcdef", r = 0; 8 > r; r++) e += n.charAt(Math.round(15 * Math.random()));
                for (var r = 0; 3 > r; r++) {
                    e += "-";
                    for (var i = 0; 4 > i; i++) e += n.charAt(Math.round(15 * Math.random()))
                }
                e += "-";
                var s = (new Date).getTime();
                e += ("000000000" + s.toString(16)).substr(-8);
                for (var r = 0; 4 > r; r++) e += n.charAt(Math.round(15 * Math.random()));
                return t.__fuid = e, e
            }, e.prototype.getFlashHtml = function(e) {
                var r = this,
                    i = [],
                    s = [];
                document.getElementById(r.id) && (r.id = "player" + sohuHDApple.random());
                var o = {
                    "#super": "21",
                    "#high": "1",
                    "#common": "2"
                };
                o = o[location.hash] || "", o && (r.flashVarsObj.co = o);
                var u = r.flashVarsObj.ltype;
                if ("" != u && "undefined" != typeof u && !sohuHD.notCloseDoor) {
                    var f = "liveCall" + sohuHDApple.random();
                    t[f] = function(e) {
                        if (e && 1 == e.bwl) {
                            var t = "";
                            t = /sohu.com/i.test(location.href) ? '<a href="http://tv.sohu.com/voice-demand/" target="_blank" style="background: url(http://css.tv.itc.cn/special/voice/skin0530/race_imgs/demandtip.png) no-repeat center center transparent;display:block;width:640px;height:480px;"></a>' : '<div style="background: url(http://tv.sohu.com/upload/static/plugin/skin/images/live_overflow.jpg) no-repeat center center transparent;width:640px;height:480px;"></div>', document.getElementById(r.id).parentNode.innerHTML = t
                        }
                    }, sohuHDApple.getScript("http://live.tv.sohu.com/live/player_json.jhtml?lid=" + r.flashVarsObj.vid + "&type=" + r.flashVarsObj.ltype + "&callback=" + f)
                }
                r.flashVarsObj.api_key || (r.flashVarsObj.api_key = sohuHDApple.getUrlParam(document, "api_key")), r.flashVarsObj.uuid || (r.flashVarsObj.uuid = r.createUID());
                var l = sohuHDApple.cookie("ch_key");
                l && (r.flashVarsObj.ch_key = l), sohuHDApple.cookie("machtml5new") && (r.isIpad = !0), r.isSBDevice = r.isSBDevice || !r.isIOS && r.flashVarsObj.enforceMP4 || r.isAndroidLow, r.isSBDevice && (r.isAndroidHigh = !1);
                var c = !r.checkFlash(m);
                if (true) {
                    r.isIOSLow && alert("\u60a8\u7684iOS\u7248\u672c\u4f4e\u4e8e4.2,\u8bf7\u5347\u7ea7\u7cfb\u7edf\u7248\u672c\u4ee5\u83b7\u5f97\u66f4\u6d41\u7545\u89c2\u770b\u4f53\u9a8c.");
                    var e = r.id;
                    r.getHTML5(e);
                    var h = r.width,
                        p = r.height,
                        d = /^-?\d+(?:px)?$/i;
                    return d.test(h) && (h += "px"), d.test(p) && (p += "px"), [r.switchHtml, '<div id="', e, '" ', 'style="background:#000;line-height:', p, ";height:", p, ";width:", h, ';color:#fff;text-align:center;">', "\u89c6\u9891\u52a0\u8f7d\u4e2d....<noscript>\u60a8\u7684\u6d4f\u89c8\u5668\u7981\u7528\u4e86JavaScript,\u8bf7\u624b\u52a8\u5f00\u542f.</noscript></div>"].join("")
                }
                r.isAndroid && (r.flashVarsObj.skinNum = "-1", r.flashVarsObj.os = "android", r.flashVarsObj.oad = "", r.flashVarsObj.ead = "", r.flashVarsObj.co = "2");
                try {
                    if (c && -1 === n) return "<div id=" + this.id + ' style="position:relative;background-color:#000;"><p style="position:absolute;top:50%;width:100%;margin-top:-20px;color:#fff;font-size:18px;line-height:20px;text-align:center;">\u7531\u4e8e\u60a8\u672a\u5b89\u88c5flash\u64ad\u653e\u5668\u89c6\u9891\u65e0\u6cd5\u64ad\u653e\uff0c\u70b9\u51fb<a style="color:#e73c31;" target="_blank" href="http://www.adobe.com/go/getflash">\u8fd9\u91cc</a>\u5b89\u88c5</p></div>'
                } catch (v) {}
                r.isAndroid || (r.flashVarsObj.topBarFull = 1);
                for (var m in r.flashVarsObj) s.push("&", m, "=", r.flashVarsObj[m]);
                if (i.push(r.switchHtml), sohuHDApple.playerlist.push(r.id), document.all) {
                    i.push("<object ");
                    for (var m in r.objAttrs) i.push(m, '="', r.objAttrs[m], '"', " ");
                    i.push(">");
                    for (var m in r.params) i.push('<param name="', m, '" value="', r.params[m], '" />');
                    s.length && i.push('<param name="flashvars" value="', s.join(""), '" />'), i.push("</object>")
                } else {
                    i.push("<embed "), r.embedAttrs.FlashVars = s.join("");
                    for (var m in r.embedAttrs) i.push(m, '="', r.embedAttrs[m], '"', " ");
                    i.push("></embed>")
                }
                return i.join("")
            }, e.prototype.DetectFlashVer = function(e, t, i) {
                if (-1 == n) return !1;
                if (0 != n) {
                    r ? (tempArray = n.split(" "), tempString = tempArray[1], versionArray = tempString.split(",")) : versionArray = n.split(".");
                    var s = versionArray[0],
                        o = versionArray[1],
                        u = versionArray[2];
                    if (s > parseFloat(e)) return !0;
                    if (s == parseFloat(e)) {
                        if (o > parseFloat(t)) return !0;
                        if (o == parseFloat(t) && u >= parseFloat(i)) return !0
                    }
                    return !1
                }
            }, e.prototype.checkFlash = function(e) {
                var t = sohuHDApple.cookie("tryPlay");
                if (t) return !0;
                var i = this,
                    s = null;
                "string" == typeof e ? s = document.getElementById(e) : "object" == typeof e && (s = e), document.all && (r = !0);
                var o = function() {
                        var e = "",
                            t = "";
                        try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
                        } catch (n) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
                        } catch (n) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = t.GetVariable("$version")
                        } catch (n) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = "WIN 3,0,18,0"
                        } catch (n) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = "WIN 2,0,0,11"
                        } catch (n) {
                            e = -1
                        }
                        return e
                    },
                    u = function() {
                        var e = -1;
                        if (null != navigator.plugins && navigator.plugins.length > 0) {
                            if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                                var t = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
                                    n = navigator.plugins["Shockwave Flash" + t].description,
                                    i = n.split(" "),
                                    s = i[2].split("."),
                                    u = s[0],
                                    a = s[1],
                                    f = i[3];
                                "" == f && (f = i[4]), "d" == f[0] ? f = f.substring(1) : "r" == f[0] ? (f = f.substring(1), f.indexOf("d") > 0 && (f = f.substring(0, f.indexOf("d")))) : "b" == f[0] && (f = f.substring(1));
                                var e = u + "." + a + "." + f
                            }
                        } else -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6") ? e = 4 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5") ? e = 3 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv") ? e = 2 : r && (e = o());
                        return e
                    },
                    f = i.ver.split(",");
                n = u();
                var l = i.DetectFlashVer(f[0], f[1], f[2]);
                return l ? l : l
            }
    }(SWFObject, window);
var showVrsPlayer = function(e) {
    if (!e || !e.vid && !e.lid && !e.bid && !e.playurl) return;
    var t = (new Date).getTime(),
        n = new SWFObject(e.vrs_player || vrs_player, e.playerID ? e.playerID : "player" + ++t, e.width ? e.width : "600", e.height ? e.height : "450", "9,0,115", "#000000");
    n.bindEvents("onVideoReady", e.onVideoReady), n.addParam("quality", e.quality || "high"), n.addParam("allowFullScreen", e.allowFullScreen || "true"), n.addParam("allowScriptAccess", e.allowScriptAccess || "always"), n.addParam("wmode", e.wmode ? e.wmode : "transparent"), typeof category != "undefined" && category != "" && n.addVariable("cmscat", category);
    if (!!e.showAd || e.showAd == null) n.addVariable("oad", e.openingad ? e.openingad : typeof opening_ad == "undefined" ? "" : opening_ad), n.addVariable("ead", e.endingad ? e.endingad : typeof ending_ad == "undefined" ? "" : ending_ad), n.addVariable("pad", e.pausead ? e.pausead : typeof so_pause_ad == "undefined" ? "" : so_pause_ad), n.addVariable("fbarad", e.barad ? e.barad : typeof so_bar_ad == "undefined" ? "" : so_bar_ad), n.addVariable("flogoad", e.logoad ? e.logoad : typeof so_logo_ad == "undefined" ? "" : so_logo_ad), n.addVariable("flogodelay", e.logodelay ? e.logodelay : typeof so_logo_ad_delay == "undefined" ? "" : so_logo_ad_delay), n.addVariable("tlogoad", e.tlogoad ? e.tlogoad : typeof so_top_logo_ad == "undefined" ? "" : so_top_logo_ad), n.addVariable("tlogodelay", e.tlogodelay ? e.tlogodelay : typeof so_top_logo_ad_delay == "undefined" ? "" : so_top_logo_ad_delay), n.addVariable("fbottomad", e.bottomad ? e.bottomad : typeof so_bottom_ad == "undefined" ? "" : so_bottom_ad), n.addVariable("fbottomdelay", e.bottomdelay ? e.bottomdelay : typeof so_bottom_ad_delay == "undefined" ? "" : so_bottom_ad_delay), n.addVariable("ftitlead", e.titlead ? e.titlead : typeof so_title_ad == "undefined" ? "" : so_title_ad), n.addVariable("ftitledelay", e.titledelay ? e.titledelay : typeof so_title_ad_delay == "undefined" ? "" : so_title_ad_delay);
    var r = function() {
        n.addVariable("domain", e.domain ? e.domain : "inner"), n.addVariable("sogouBtn", e.sogouBtn || "0"), n.addVariable("skin", e.skin ? e.skin : "0"), n.addVariable("api_key", e.api_key || ""), n.addVariable("enforceMP4", e.enforceMP4), n.addVariable("xuid", e.xuid || ""), n.addVariable("recommend", e.recommend ? e.recommend : ""), n.addVariable("showRecommend", e.showRecommend ? e.showRecommend : ""), n.addVariable("playercover", e.playercover ? e.playercover : ""), e.vid && n.addVariable("vid", e.vid), e.bid && n.addVariable("id", e.bid), e.lid && e.ltype && (n.addVariable("vid", e.lid), n.addVariable("ltype", e.ltype), /sohu.com/i.test(location.href) || (e.co = "2")), e.skinNum && n.addVariable("skinNum", e.skinNum), e.co && n.addVariable("co", e.co), e.showNewFun && n.addVariable("showNewFun", e.showNewFun), n.addVariable("autoplay", e.autoplay ? e.autoplay : "false"), e.pageurl = e.pageurl || document.URL, e.pageurl.indexOf("?") > -1 && (e.pageurl = ""), n.addVariable("pageurl", e.pageurl), n.addVariable("showCtrlBar", e.showCtrlBar ? e.showCtrlBar : "0"), n.addVariable("jump", e.jump ? e.jump : "0"), e.topBar && n.addVariable("topBar", "1"), e.playListId && n.addVariable("playListId", e.playListId), e.noipadbar && n.addVariable("noipadbar", !0), e.mute && n.addVariable("mute", "1");
        var t, r, i = "SUV=",
            s = "null";
        document.cookie.length > 0 && (t = document.cookie.indexOf(i), t != -1 && (t += i.length, r = document.cookie.indexOf(";", t), r == -1 && (r = document.cookie.length), s = unescape(document.cookie.substring(t, r)))), n.addVariable("sid", s), e.pid && n.addVariable("pid", e.pid), e.nid && n.addVariable("nid", e.nid), e.preview && n.addVariable("preview", e.preview);
        var o = e.variables || [],
            u = null;
        for (var a = 0; a < o.length; ++a) u = o[a] || [], u[0] && n.addVariable(u[0], u[1] || "")
    };
    r(), n.getJSONP = function(e, t, n) {
        var r = this,
            i = "jsonp" + sohuHDApple.random();
        n = n || "GBK", e.indexOf("callback=?") > -1 && (e = e.replace("callback=?", "callback=" + i), window[i] = function(e) {
            t(e);
            try {
                delete window[i]
            } catch (n) {}
        }, sohuHDApple.getScript(e + "&_=" + sohuHDApple.random(), null, n, null))
    };
    if (e.playurl) {
        var i = "player" + ++t,
            s = ['<div id="', i, '">\u6b63\u5728\u52a0\u8f7d\u89c6\u9891\u2026\u2026</div>'].join("");
        e.charset = e.charset || "GBK", n.getJSONP("http://api.tv.sohu.com/weibo/sina/videoinfo.json?callback=?&encoding=" + e.charset + "&api_key=664cbe6f3376306fa6b3082c770989d0&url=" + e.playurl, function(t) {
            t.data.vid ? (t.data.isUgc ? n.addVariable("id", t.data.vid) : n.addVariable("vid", t.data.vid), document.getElementById(i).innerHTML = n.getFlashHtml()) : document.getElementById(i).innerHTML = ['<a style="background:#000;color:#fff;display:block;', "height: ", e.height, "px;line-height:  ", e.height, 'px;" href="', e.playurl, '">\u65e0\u6cd5\u64ad\u653e,\u8bf7\u70b9\u51fb\u53bb\u539f\u9875\u9762\u64ad\u653e</a>'].join("")
        }, e.charset);
        if (e.getHTML) return s;
        document.write(s)
    } else {
        if (e.getHTML) return n.getFlashHtml();
        document.write(n.getFlashHtml());
        var o = document.getElementById(n.id);
        o.style.width = (e.width || 600) + "px", o.style.height = (e.height || 450) + "px"
    }
};

/*! mm | Date: Thu Dec 05 2013 18:04:16 GMT+0800 (CST) */
String.prototype._shift_en = function(t) {
    var e = t.length,
        o = 0;
    return this.replace(/[0-9a-zA-Z]/g, function(n) {
        var a = n.charCodeAt(0),
            r = 65,
            i = 26;
        a >= 97 ? r = 97 : 65 > a && (r = 48, i = 10);
        var s = a - r;
        return String.fromCharCode((s + t[o++ % e]) % i + r)
    })
},
function(t) {
    t.sohuHDApple || (t.sohuHDApple = {});
    var e = function() {
        this.logoutTimes = 0, this.loginTimes = 0
    };
    e.prototype = {
        getAppid: function() {
            return this.getInfo().appid || ""
        },
        getPassport: function() {
            return this.getInfo().userid || ""
        },
        getUid: function() {
            return this.getInfo().uid || ""
        },
        getUUID: function() {
            return this.getInfo().uuid || ""
        },
        getQname: function() {
            return this.getInfo().uniqname || ""
        }
    }, e.prototype.b64_423 = function(t) {
        for (var e = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_"), o = new String, n = 0; n < t.length; n++) {
            for (var a = 0; 64 > a; a++) if (t.charAt(n) == e[a]) {
                var r = a.toString(2);
                o += ("000000" + r).substr(r.length);
                break
            }
            if (64 == a) return 2 == n ? o.substr(0, 8) : o.substr(0, 16)
        }
        return o
    }, e.prototype.b2i = function(t) {
        for (var e = 0, o = 128, n = 0; 8 > n; n++, o /= 2) "1" == t.charAt(n) && (e += o);
        return String.fromCharCode(e)
    }, e.prototype.b64_decodex = function(t) {
        var e, o = new Array,
            n = "";
        for (e = 0; e < t.length; e += 4) n += this.b64_423(t.substr(e, 4));
        for (e = 0; e < n.length; e += 8) o += this.b2i(n.substr(e, 8));
        return o
    }, e.prototype.utf8to16 = function(t) {
        var e, o, n, a, r, i, s, p, d;
        for (e = [], a = t.length, o = n = 0; a > o;) {
            switch (r = t.charCodeAt(o++), r >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    e[n++] = t.charAt(o - 1);
                    break;
                case 12:
                case 13:
                    i = t.charCodeAt(o++), e[n++] = String.fromCharCode((31 & r) << 6 | 63 & i);
                    break;
                case 14:
                    i = t.charCodeAt(o++), s = t.charCodeAt(o++), e[n++] = String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & s);
                    break;
                case 15:
                    switch (15 & r) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            i = t.charCodeAt(o++), s = t.charCodeAt(o++), p = t.charCodeAt(o++), d = (7 & r) << 18 | (63 & i) << 12 | (63 & s) << 6 | (63 & p) - 65536, e[n] = d >= 0 && 1048575 >= d ? String.fromCharCode(55296 | 1023 & d >>> 10, 56320 | 1023 & d) : "?";
                            break;
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            o += 4, e[n] = "?";
                            break;
                        case 12:
                        case 13:
                            o += 5, e[n] = "?"
                    }
            }
            n++
        }
        return e.join("")
    }, e.prototype.selectInfo = function() {
        var t, e, o, n = ["ppinf", "ppinfo", "passport"];
        for (t = 0, e = n.length; e > t; t++) if (o = new RegExp("\\b" + n[t] + "\\b=(.*?)(?:$|;)").exec(document.cookie), o && o.length) {
            o = o[1];
            break
        }
        return o
    }, e.prototype.decodeInfo = function(t) {
        var e;
        try {
            return t = unescape(t).split("|"), ("1" == t[0] || "2" == t[0]) && (e = this.utf8to16(this.b64_decodex(t[3]))), e
        } catch (o) {}
    }, e.prototype.analyzeInfo = function(t) {
        t = t || "";
        var e, o, n, a = {};
        try {
            for (t = t.split("|"), e = 0, o = t.length; o > e; e++) n = t[e].split(":"), n.length > 1 && (a[n[0]] = n[2])
        } catch (r) {}
        return a
    }, e.prototype.getInfo = function() {
        return this.analyzeInfo(this.decodeInfo(this.selectInfo()))
    }, sohuHDApple.passport = new e
}(window),
function(t, e) {
    var o = function(t) {
        t = t || {};
        var e = t.width || "100%",
            o = t.height || "100%",
            n = t.noControls;
        t.poster;
        var a = t.preload || "auto";
        t.noLoop;
        var r = t.autoplay,
            i = {};
        i.unCheckFile = t.unCheckFile;
        var s = document.createElement("div");
        s.style.display = "none";
        var p = document.body || document.documentElement;
        p.appendChild(s);
        var d = "player" + sohuHDApple.random();
        if (sohuHDApple.playerlist.push(d), s.innerHTML = ['<video  id="', d, '"', ' width="', e, '" height="', o, '"', n ? "" : " controls", r ? " autoplay" : "", ' preload="', a, '"', ">", '<p width="', e, '" height="', o, '">your device do not surpport video</p>', "</video>"].join(""), i.player = s.getElementsByTagName("video")[0], i.player) {
            i.attr = function(t, e) {
                return e ? (i.player[t] = e, void 0) : i.player[t]
            };
            var l = ["loadstart", "progress", "suspend", "abort", "error", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"];
            i.eventsHandler = {
                trigger: function(t, e) {
                    var o = this[t];
                    if (o && o.length) for (var n = 0; n < o.length; ++n) o[n].callback.call(i.player, e), o[n].once && o.splice(n, 1)
                }
            };
            for (var c = function(t) {
                var e = this;
                return e.eventsHandler[t] = [], e.player.addEventListener ? e.player.addEventListener(t, function(o) {
                    e.eventsHandler.trigger(t, o)
                }) : e.player.attachEvent && e.player.attachEvent(t, function(o) {
                    e.eventsHandler.trigger(t, o)
                }), e[t] = function(o, n) {
                    if (o) {
                        var a = {};
                        a.callback = o, n && (n.namespace && (a.namespace = n.namespace), a.once = n.once), e.eventsHandler[t].push(a)
                    } else e.eventsHandler.trigger(t, "this is self event")
                }, e
            }, h = 0; h < l.length; ++h) {
                var u = l[h];
                c.call(i, u)
            }
            i.events = [], i.bind = function(t, e, o) {
                t = t.split("."), i[t[0]](e, {
                    namespace: t[1] || "",
                    once: o.once
                })
            }, i.unbind = function(t) {
                t = t.split(".");
                var e = i.eventsHandler[t[0]];
                if (e && e.length && t[1]) for (var o = 0; o < e.length; ++o) e[o].namespace == t[1] && e.splice(o, 1)
            }, i.buffered = function() {
                var t = {
                    start: 0,
                    end: 0
                }, e = this.player;
                if (e.buffered.length) for (var o = 0; o < e.buffered.length; o++) t.start = Math.round(e.buffered.start(o)), t.end = Math.round(e.buffered.end(o));
                return t
            }, i.playVideo = function() {
                var t = this.attr("playlist");
                if (!(t instanceof Array)) throw new Error("html5 video playlist must be array");
                return t && t.length && (/mp4|ogg|m3u8/gi.test(t[0].url) || this.unCheckFile ? (this.attr("src", t[0].url), this.player.innerHTML = ['<a href="', t[0].url, '"', ' style="width:', this.player.parentNode.clientWidth, "px;height:", this.player.parentNode.clientHeight, "px;", 'display:block;background:url(http://tv.sohu.com/upload/touch/skin/images/play@2x.png) no-repeat center center;"></a>'].join("")) : this.player.parentNode.innerHTML = "\u5bf9\u4e0d\u8d77\uff0c\u6b64\u89c6\u9891\u6682\u4e0d\u652f\u6301\u60a8\u7684\u8bbe\u5907\u89c2\u770b!", t.splice(0, 1), this.attr("playlist", t)), this
            }
        } else i.tips = s.getElementsByTagName("p")[0], i.noplayer = {}, i.attr = function(t, e) {
            return e ? (i.noplayer[t] = e, void 0) : i.noplayer[t]
        };
        return i
    }, n = ["qf1.hd.sohu.com.cn", "qf2.hd.sohu.com.cn"];
    n = n[Math.round(10 * Math.random()) % 2];
    var a = 44;
    e.prototype.isIOS ? a = e.prototype.isIpad ? 4 : 41 : e.prototype.isAndroid ? a = 42 : e.prototype.isIEMobile && (a = 43), sohuHDApple.pingbackArr = [];
    var r = function(t) {
        var e = new Image;
        e.src = t, sohuHDApple.pingbackArr.push(e)
    };
    e.prototype.qfVV = function(t) {
        var e = this.flashVarsObj.sid,
            o = this.flashVarsObj.vid,
            i = this.flashVarsObj.nid,
            s = this.flashVarsObj.hotVrs;
        r(["http://", n, "/dov.do?method=stat&pt=", a, "&seekto=0", "&error=0&code=2&allno=0&vvmark=1", "&sid=", e, "&vid=", o, "&nid=", i, "&totTime=", t, "&ref=", encodeURIComponent(location.href), "&dom=", encodeURIComponent(s), "&t=", sohuHDApple.random()].join(""))
    }, e.prototype.qfAbort = function() {
        var t = this.flashVarsObj.sid,
            e = this.flashVarsObj.vid,
            o = this.flashVarsObj.nid,
            i = this.flashVarsObj.hotVrs;
        r(["http://", n, "/dov.do?method=stat&pt=", a, "&seekto=0", "&code=4&error=800&allno=1&drag=-1", , "&sid=", t, "&vid=", e, "&nid=", o, "&ref=", encodeURIComponent(location.href), "&dom=", encodeURIComponent(i), "&t=", sohuHDApple.random()].join(""))
    }, e.prototype.qfError = function() {
        var t = this.flashVarsObj.sid,
            e = this.flashVarsObj.vid,
            o = this.flashVarsObj.nid,
            i = this.flashVarsObj.hotVrs;
        r(["http://", n, "/dov.do?method=stat&pt=", a, "&seekto=0", "&error=500&code=2&allno=1&vvmark=0", , "&sid=", t, "&vid=", e, "&nid=", o, "&ref=", encodeURIComponent(location.href), "&dom=", encodeURIComponent(i), "&t=", sohuHDApple.random()].join(""))
    }, e.prototype.qfBuffer = function(t) {
        if (1 == t || 4 == t) {
            _e("buffer");
            var e = this.flashVarsObj.sid,
                o = this.flashVarsObj.vid,
                i = this.flashVarsObj.nid,
                s = this.flashVarsObj.hotVrs;
            r(["http://", n, "/dov.do?method=stat&pt=", a, "&seekto=0", "&code=5&bufno=1&allbufno=", t, "&sid=", e, "&vid=", o, "&nid=", i, "&ref=", encodeURIComponent(location.href), "&dom=", encodeURIComponent(s), "&t=", sohuHDApple.random()].join(""))
        }
    };
    var i = function(t) {
        return document.getElementById(t || "")
    }, s = function() {
        if (this == t) throw new Error(0, "HttpRequest is unable to call as a function.");
        var e, o = this,
            n = !1,
            a = !1,
            r = function() {
                if (o.onreadystatechange && o.onreadystatechange.call(e), 4 == e.readyState) {
                    if (Number(e.status) >= 300) return o.onerror && o.onerror.call(e, new Error(0, "Http error:" + e.status + " " + e.statusText)), a ? e.onreadystatechange = Function.prototype : e.onReadyStateChange = Function.prototype, e = null, void 0;
                    o.status = e.status, o.statusText = e.statusText, o.responseText = e.responseText, o.responseBody = e.responseBody, o.responseXML = e.responseXML, o.readyState = e.readyState, a ? e.onreadystatechange = Function.prototype : e.onReadyStateChange = Function.prototype, e = null, o.onfinish && o.onfinish()
                }
            }, i = function() {
                try {
                    e = new t.XMLHttpRequest, a = !0
                } catch (o) {
                    var n = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "Msxml2.XMLHTTP", "MSXML.XMLHttp", "Microsoft.XMLHTTP"],
                        r = function() {
                            for (var t = 0; t < n.length; t++) {
                                try {
                                    var e = new ActiveXObject(n[t]);
                                    a = !1
                                } catch (o) {
                                    continue
                                }
                                return e
                            }
                            throw {
                                message: "XMLHttp ActiveX Unsurported."
                            }
                        };
                    try {
                        e = new r, a = !1
                    } catch (o) {
                        throw new Error(0, "XMLHttpRequest Unsurported.")
                    }
                }
            };
        i(), this.abort = function() {
            e.abort()
        }, this.getAllResponseHeaders = function() {
            e.getAllResponseHeaders()
        }, this.getResponseHeader = function() {
            e.getResponseHeader(bstrHeader)
        }, this.open = function(t, a, r, i, s) {
            n = r;
            try {
                e.open(t, a, r, i, s)
            } catch (p) {
                if (!o.onerror) throw p;
                o.onerror(p)
            }
        }, this.send = function(t) {
            try {
                a ? e.onreadystatechange = r : e.onReadyStateChange = r, e.send(t), n || (this.status = e.status, this.statusText = e.statusText, this.responseText = e.responseText, this.responseBody = e.responseBody, this.responseXML = e.responseXML, this.readyState = e.readyState, a ? e.onreadystatechange = Function.prototype : e.onReadyStateChange = Function.prototype, e = null)
            } catch (i) {
                if (!o.onerror) throw i;
                o.onerror(i)
            }
        }, this.setRequestHeader = function(t, o) {
            e.setRequestHeader(t, o)
        }
    }, p = function(t, e) {
        var o = new s;
        o.onfinish = function() {
            var t = new Function("return " + this.responseText)();
            e(t)
        }, o.open("get", t, !0), o.send(null)
    }, d = function(e, o) {
        var n = this,
            a = "jsonp" + sohuHDApple.random();
        e.indexOf("callback=?") > -1 && (e = e.replace("callback=?", "callback=" + a), t[a] = function(e) {
            o(e);
            try {
                delete t[a]
            } catch (n) {}
        }, sohuHDApple.getScript(e + "&_=" + sohuHDApple.random(), null, null, n.qfError))
    };
    e.prototype.getHTML5 = function(e) {
        var n = this,
            a = n.flashVarsObj,
            s = sohuHDApple.cookie("SUV"),
            l = !1,
            c = !1;
        a.api_key;
        var h = a.ltype,
            u = a.autoplay;
        if (a.id && (l = !0), "" != h && "undefined" != typeof h && (c = !0, !n.isIOS)) return n.enforceFlash = !0, i(e).innerHTML = n.getFlashHtml(), !1;
        var f = a.vid || a.id;
        a.nid || "", a.sid || s;
        var v = a.pid || a.playListId || t.PLAYLIST_ID;
        _e("mytvid:" + a.id), _e("vid:" + a.vid), _e("ltype:" + a.ltype);
        var y = n.width,
            m = n.height,
            g = y,
            b = m,
            I = /^-?\d+(?:px)?$/i;
        I.test(g) && (g += "px"), I.test(b) && (b += "px");
        var H = function(e) {
            var n = this,
                a = e.totalTime;
            n.qfVV(a);
            var i = n.flashVarsObj.vid || n.flashVarsObj.id,
                s = n.flashVarsObj.nid,
                p = n.flashVarsObj.pid,
                d = n.flashVarsObj.sid,
                l = n.flashVarsObj.api_key,
                c = encodeURIComponent(n.videoInfo.company || ""),
                h = n.videoInfo.cateid || "",
                f = n.videoInfo.catecode || "",
                v = n.videoInfo.systype || "",
                g = n.videoInfo.type,
                b = n.videoInfo.ltype || 0,
                I = n.videoInfo.vtitle || "",
                H = encodeURIComponent(document.referrer),
                j = encodeURIComponent(location.href);
            r(["http://b.scorecardresearch.com/b?c1=1&c2=7395122&c3=&c4=&c5=&c6=&c11=", d].join("")), r(["http://count.vrs.sohu.com/count/stat.do?videoId=", i, "&apikey=", l, "&t=", sohuHDApple.random()].join("")), r(["http://pb.hd.sohu.com.cn/hdpb.gif?cts=isow&msg=playCount&isHD=0&time=0&ua=h5", "&sid=", d, "&uid=", d, "&pid=", p, "&vid=", i, "&nid=", s, "&type=", g, "&msg=playCount&isp2p=0<ype=", b, "&company=", c, "&url=", j, "&td=", a, "&cateid=", h, "&refer=", H, "&systype=", v, "&catcode=", f, "&apikey=", l, "&t=", sohuHDApple.random()].join("")), r(["http://pb.hd.sohu.com.cn/hdpb.gif?cts=isow&msg=videoStart&isHD=0&time=0&ua=h5", "&sid=", d, "&uid=", d, "&pid=", p, "&vid=", i, "&nid=", s, "&type=", g, "&isp2p=0<ype=", b, "&company=", c, "&url=", j, "&td=", a, "&cateid=", h, "&refer=", H, "&systype=", v, "&catcode=", f, "&apikey=", l, "&t=", sohuHDApple.random()].join(""));
            var k = e.box,
                A = e.playlist,
                C = o({
                    width: y,
                    height: m,
                    autoplay: u,
                    unCheckFile: e.unCheckFile
                });
            C.attr("playlist", A), C.attr("totalTime", a);
            var w = n.eventObj.onVideoReady;
            if (w && w.call(n, C), n.isSBDevice || !C || !C.player) {
                if (A.length > 1) {
                    for (var D = ["\u8bf7\u70b9\u51fb\u64ad\u653e"], L = 0; L < A.length; ++L) D.push(' <a style="color:#fff;" href="', A[L], '">', L + 1, "</a>");
                    k.innerHTML = D.join("")
                } else k.innerHTML = ['<a href="', A[0].url, '" style="display:block;height:100%;width:100%;"></a>'].join(""), k.style.backgroundImage = "url(http://tv.sohu.com/upload/touch/skin/images/play@2x.png)", k.style.backgroundPosition = "center center", k.style.backgroundRepeat = "no-repeat";
                return null
            }
            var V = C.player;
            if (k.innerHTML = "", k.appendChild(V), C.playVideo(), C.ended(function() {
                var t = C.attr("playlist");
                return t && t.length ? C.playVideo() : swfGotoNewPage(), this
            }), C.abort(function() {
                n.qfAbort()
            }), V.bufferCount = -1, C.playing(function() {
                ++this.bufferCount
            }, {
                once: !0
            }), C.playing(function() {
                var t = this;
                t.playing = !0, setTimeout(function() {
                    t.playing = !1
                }, 3e3)
            }), C.playing(function() {
                setInterval(function() {
                    _e("heart"), r(["http://pb.hd.sohu.com.cn/stats.gif?isHD=0&isp2p=0", "&url=", j, "&refer=", H, "&url=", j, "&systype=", v, "&vid=", i, "&pid=", p, "&nid=", s, "&catcode=", f, "&ua=h5&&uid=", d, "&tc=", M, "&type=vrs&cateid=", h, "&apikey=", l, "&userid=t=", sohuHDApple.random()].join(""))
                }, 12e4)
            }, {
                once: !0
            }), C.ended(function() {
                setInterval(function() {
                    _e("end"), r(["http://pb.hd.sohu.com.cn/stats.gif?isHD=0&isp2p=0&msg=videoEnds", "&url=", j, "&refer=", H, "&url=", j, "&systype=", v, "&vid=", i, "&pid=", p, "&nid=", s, "&catcode=", f, "&ua=h5&&uid=", d, "&tc=", M, "&type=vrs&cateid=", h, "&apikey=", l, "&userid=t=", sohuHDApple.random()].join(""))
                }, 12e4)
            }), "tv" == e.type) {
                var M = parseInt(V.currentTime);
                if (sohuHDApple.passport.getPassport()) {
                    var T = function() {
                        sohuHDApple.passport.getPassport() && r(["http://his.tv.sohu.com/his/ping.do?c=21&vid=", i, "&sid=", t.PLAYLIST_ID ? t.PLAYLIST_ID : t.VRS_ALBUM_ID, "&t=", M, "&_=", sohuHDApple.random()].join(""))
                    };
                    C.bind("playing.cloudHistory", function() {
                        this.cloudHistory = setInterval(function() {
                            T()
                        }, 12e4), T()
                    }, {
                        once: !0
                    })
                } else {
                    var S = function() {
                        try {
                            getVrsPlayerHistory(i, p, parseInt(V.currentTime), a, I)
                        } catch (t) {}
                    };
                    C.bind("playing.history", function() {
                        this.history = setInterval(S, 3e4), S()
                    }, {
                        once: !0
                    })
                }
            }
            return C.waiting(function() {
                this.playing || this.bufferCount < 0 || (n.qfBuffer(this.bufferCount), ++this.bufferCount)
            }), C
        };
        n.videoInfo = {};
        var j = "";
        if (l) {
            var k = "http://my.tv.sohu.com/videinfo.jhtml?m=viewtv&vid=" + f;
            n.flashVarsObj.hotVrs = k, p(k, function(o) {
                _e(o);
                var a = i(e);
                if (o && o.data && o.data.su) {
                    var r = [];
                    t._videoInfo && (n.videoInfo.cateid = _videoInfo.cateId), n.videoInfo.catecode = o.catcode, n.videoInfo.type = "my";
                    var p = o.data.su,
                        d = o.allot,
                        l = o.data.clipsDuration;
                    if (j = ["http://my.tv.sohu.com/ipad/", f, ".m3u8?_=", sohuHDApple.random(), "&suv=", s, "&plat=pc"].join(""), n.videoInfo.m3u8 = j, n.isIpad || n.isIphone && !n.isIOSLow) r.push({
                        url: j,
                        time: l[0]
                    });
                    else for (var c = 0; c < p.length; ++c) r.push({
                        url: ["http://", d, p[c], "?type=2"].join(""),
                        time: l[c]
                    });
                    H.call(n, {
                        type: "mytv",
                        box: a,
                        totalTime: o.data.totalDuration,
                        playlist: r
                    })
                } else n.qfError(), a.innerHTML = o.mytvmsg
            })
        } else if (c) {
            var A = n.flashVarsObj.h5_def || "2",
                C = ["http://live.tv.sohu.com/live/player_json.jhtml?callback=?&lid=", f, "&co=", A, "&af=1&bw=524&type=", h, "&g=8&ipad=1"].join("");
            n.flashVarsObj.hotVrs = C, n.videoInfo.type = "vrs", n.videoInfo.ltype = h, d(C, function(t) {
                var o = i(e);
                if (t && t.data && t.data.clipsURL) {
                    var a = [],
                        r = t.data.clipsURL[0] || "";
                    /m3u8/gi.test(r) ? (j = ["http://", r].join(""), a.push({
                        url: j,
                        time: t.data.totalDuration
                    }), n.videoInfo.m3u8 = j) : a.push({
                        url: t.data.hls,
                        time: 1 / 0
                    }), H.call(n, {
                        type: "live",
                        box: o,
                        playlist: a,
                        totalTime: 1 / 0,
                        unCheckFile: !0
                    })
                } else n.qfError(), o.innerHTML = "\u5bf9\u4e0d\u8d77\uff0c\u6b64\u89c6\u9891\u6682\u4e0d\u652f\u6301\u60a8\u7684\u8bbe\u5907\u89c2\u770b!"
            })
        } else {
            var w = "jsonp" + sohuHDApple.random(),
                k = ["http://hot.vrs.sohu.com/vrs_flash.action?var=", w, "&gbk=true"];
            t.fkey && k.push("&fkey=", fkey), k.push("&vid=", f, "&pid=", v), k = k.join(""), _e(k), n.flashVarsObj.hotVrs = k, sohuHDApple.getScript(k, function() {
                var o = t[w],
                    a = i(e);
                if (o && o.data && o.data.su) {
                    var r = [];
                    n.videoInfo.cateid = o.caid, n.videoInfo.catecode = o.catcode, n.videoInfo.systype = o.systype, n.videoInfo.type = "1" == o.vt ? "vrs" : "vms", n.videoInfo.company = o.company, n.videoInfo.vtitle = o.data.tvName;
                    var p = sohuHDApple.random().toString();
                    if (j = ["http://hot.vrs.sohu.com/ipad", f, "_", p._shift_en([23, 12, 131, 1321]), "_", f.toString()._shift_en([23, 12, 131, 1321]), ".m3u8?_=", sohuHDApple.random(), "&suv=", s, "&plat=pc"], t.fkey && j.push("&fkey=", fkey), j = j.join(""), n.videoInfo.m3u8 = j, n.isIpad || n.isIphone && !n.isIOSLow) r = [{
                        url: j,
                        time: o.data.totalDuration
                    }], H.call(n, {
                        type: "tv",
                        box: a,
                        totalTime: o.data.totalDuration,
                        playlist: r
                    });
                    else {
                        var l = ["http://api.tv.sohu.com/video/playinfo/", f, ".json?callback=?&encoding=gbk&api_key=f351515304020cad28c92f70f002261c&from=mweb"].join("");
                        d(l, function(t) {
                            var a = i(e);
                            if (t && t.data && t.data.downloadurl) H.call(n, {
                                type: "tv",
                                box: a,
                                totalTime: t.data.totalDuration,
                                playlist: [{
                                    url: t.data.downloadurl,
                                    time: t.data.totalDuration
                                }]
                            });
                            else {
                                var s = o.data.su,
                                    p = o.allot,
                                    d = o.data.clipsDuration,
                                    l = o.data.ck;
                                if (s && s.length && s[0]) {
                                    for (var c = 0; c < s.length; ++c) r.push({
                                        url: ["http://", p, s[c], "?type=2&key=", l[c]].join(""),
                                        time: d[c]
                                    });
                                    H.call(n, {
                                        type: "tv",
                                        box: a,
                                        totalTime: o.data.totalDuration,
                                        playlist: r
                                    })
                                } else a.innerHTML = "\u5bf9\u4e0d\u8d77\uff0c\u6b64\u89c6\u9891\u6682\u4e0d\u652f\u6301\u60a8\u7684\u8bbe\u5907\u89c2\u770b!"
                            }
                        })
                    }
                } else n.qfError(), a.innerHTML = "\u5bf9\u4e0d\u8d77\uff0c\u6b64\u89c6\u9891\u6682\u4e0d\u652f\u6301\u60a8\u7684\u8bbe\u5907\u89c2\u770b!"
            })
        }
    }
}(window, SWFObject);

var vrs_player;
(function () {
    var HTML5Player = function () {

        var player = document.getElementById('player') || {},
            argu = {
                width : player.offsetWidth || 900,
                height : player.offsetHeight || 508,
                getHTML : true,
                autoplay: true,
                playurl: location.href
            };
        return showVrsPlayer(argu);
    };

    if (document.getElementById("sohuplayer")) {
        document.getElementById("sohuplayer").innerHTML = HTML5Player();
    } else {
        document.addEventListener("DOMContentLoaded", function(event) {
            document.getElementById("sohuplayer").innerHTML = HTML5Player();
        });
    }
}());
