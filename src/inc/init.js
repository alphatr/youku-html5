(function (callback) {
    var util = (function () {
            var _ = {};
            _.canPlayM3U8 = !!document.createElement("video").canPlayType("application/x-mpegURL") ? true : false;
            _.each = function (arrOrObject, fn, context, i, len) {
                if (typeof arrOrObject.length === "number") {
                    for (i = 0, len = arrOrObject.length; i < len; i++) {
                        if (fn.call(context, arrOrObject[i], i)  === false) {
                            break;
                        }
                    }
                } else {
                    for (i in arrOrObject) {
                        if (fn.call(context, arrOrObject[i], i)  === false) {
                            break;
                        }
                    }
                }
            };

            _.byId = function (id) {
                return document.getElementById(id);
            };

            _.extend = function (target) {
                var length = arguments.length,
                    i = 1,
                    mixin;
                while (i < length) {
                    mixin = arguments[i];
                    for (var name in mixin) {
                        if (mixin.hasOwnProperty(name)) {
                            target[name] = mixin[name];
                        }
                    }
                    i++;
                }
                return target;
            };

            _.queryString = function (query) {
                var arr = [];
                _.each(query, function (value, key) {
                    if (value !== undefined) {
                        arr.push(key + "=" + value);
                    }
                });
                return arr.join("&");
            };

            _.cookie = function (name) {
                var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
                if (arr) {
                    return unescape(arr[2]);
                }

                return null;
            };

            _.rNode = function (el) {
                try {
                    el.parentNode.removeChild(el);
                } catch (e) {}
            };

            _.cTag = function (tagName, styles, attrs, out) {
                var t = document.createElement(tagName),
                    cssText = "";
                _.each(styles || {}, function (value, key) {
                    cssText += [key, ":", value, ";"].join("");
                });

                t.style.cssText = cssText;

                _.each(attrs || {}, function (value, key) {
                    t.setAttribute(key, value);
                });

                return out && out.appendChild(t) || t;
            };

            _.jsonp = function (url, param, callback, handler) {
                var scr, back = "alphacb" + (+new Date()) + Math.random().toString().replace(".", "");
                var hasQuery = url.indexOf("?") >= 0;

                param = _.queryString(param);

                if (param.length) {
                    param = (hasQuery ? "&" : "?") + param;
                }

                handler = [hasQuery || param.length ? "&" : "?", handler || "callback", "=", back].join("");
                window[back] = function () {
                    callback && callback.apply(this, arguments);
                    delete window[back];
                    _.rNode(scr);
                };

                (scr = _.cTag("script", {}, {}, document.body)).src = url + param + handler;
            };

            return _;
        }());

    window.alphaDefine = function (name, factory) {
        factory(function (data) {
            if (callback && data[1]) {
                var elem = data[1],
                    cb = data[0];
                cb(function (links) {
                    callback(name, links, elem, data[2]);
                });
            }
        }, util);
    };

    window.alphaUtil = util;
}(function (name, data, elem, conf) {
    // 调用播放器
    var ifr = document.createElement('iframe'),
        content = '<meta charset="UTF-8"><link rel="stylesheet" href="http://alphatr.qiniudn.com/html5player/player.css"><div id="player"><div class="behind-view"><video id="video"></video></div><div class="front-view"><div class="info"><div class="icon icon-oplay" title="暂停"></div><div class="icon icon-loading" title="加载中..."></div><div class="icon icon-replay" title="重播"></div></div><div class="dashboard"><div class="progress"><div class="progress-touch"></div><div class="progress-buffered"></div><div class="progress-play"></div><div class="progress-seek"></div><div class="time-tips">00:00</div></div><div class="controls"><div class="play-control"><button class="icon icon-play"></button></div><div class="time-display"><span class="current">00:00</span><span class="splite">/</span><span class="duration">00:00</span></div><div class="settings"><div class="volume"><button class="icon icon-volume icon-volume-mute" title="音量"></button><div class="track"><div class="volume-track"></div><div class="volume-level"></div><button class="volume-seek" title="音量"></button></div></div><div class="quality"><div class="current">高清</div><ul></ul></div><div class="flash"><button class="icon icon-eject" title="返回 Flash 播放"></button></div><div class="fullscreen"><button class="icon icon-fullscreen" title="全屏">全屏</button></div></div></div></div></div></div>',
        attrs = {
            src: "about:blank",
            frameborder: "0",
            scrolling: "no",
            style: 'z-index: 999999999; position: relative;',
            allowtransparency: "yes",
            mozallowfullscreen: "mozallowfullscreen",
            webkitallowfullscreen: "webkitallowfullscreen",
            allowfullscreen: "allowfullscreen"
        }, i, script, flash, fWidth, fHeight;

    if (typeof elem === 'string') {
        flash = document.getElementById(elem);
    } else if (typeof elem === 'function') {
        flash = elem();
    } else {
        flash = elem;
    }

    data = '<textarea id="data" style="display:none">' + JSON.stringify(data) + '</textarea>';

    if (conf) {
        fWidth = flash.offsetWidth + (conf.width || 0);
        fHeight = flash.offsetHeight + (conf.height || 0);
    } else {
        fWidth = flash.offsetWidth;
        fHeight = flash.offsetHeight;
    }

    attrs.style += 'width: ' + fWidth + 'px; height: ' + fHeight + 'px;';

    for (i in attrs) {
        ifr.setAttribute(i, attrs[i]);
    }

    flash.parentNode.insertBefore(ifr, flash);
    flash.parentNode.removeChild(flash);
    var ifrBody = ifr.contentWindow.document.body;
    ifrBody.innerHTML = content + data;

    script = document.createElement('script');
    script.src = 'http://alphatr.qiniudn.com/html5player/player.js';
    ifrBody.appendChild(script);
}));

