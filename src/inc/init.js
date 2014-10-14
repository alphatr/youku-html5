(function (callback) {
    var util = (function () {
            var _ = {};
            _.environment = "production";
            _.canPlayM3U8 = !!document.createElement("video").canPlayType("application/x-mpegURL") ? true : false;
            _.noop = function () {};
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

            _.byId = function (id) {
                return document.getElementById(id);
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

            _.hasClass = function (el, cls) {
                return el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
            };

            _.addClass = function (el, cls) {
                if (!_.hasClass(el, cls)) {
                    el.className += " " + cls;
                }
            };

            _.removeClass = function (el, cls) {
                if (_.hasClass(el, cls)) {
                    el.className = el.className.replace(new RegExp("(\\s|^)" + cls + "(\\s|$)"), " ").trim();
                }
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

            _.js = function (path, url) {
                url = _.environment == "development" ? "http://zythum.sinaapp.com:8080/youkuhtml5playerbookmark/client/development/js" : "http://2.zythum.sinaapp.com/youkuhtml5playerbookmark/client/production/js";
                return url + (path || "") + "?_t=" + (+new Date());
            };

            _.css = function (path, url) {
                url = _.environment == "development" ? "http://zythum.sinaapp.com:8080/youkuhtml5playerbookmark/client/development/static/css" : "http://2.zythum.sinaapp.com/youkuhtml5playerbookmark/client/production/static/css";
                return url + (path || "") + "?_t=" + (+new Date());
            };

            _.html = function (path, url) {
                url = _.environment == "development" ? "http://zythum.sinaapp.com:8080/youkuhtml5playerbookmark/client/development/static/html" : "http://2.zythum.sinaapp.com/youkuhtml5playerbookmark/client/production/static/html";
                return url + (path || "");
            };

            _.service = function (name) {
                // return "http://2.zythum.sinaapp.com/youkuhtml5playerbookmark/service/" + (name || "") + ".php"
                return;
            };
            var _logNode = _.cTag("div", {
                position: "fixed",
                top: "0",
                left: "0",
                height: "20pt",
                "line-height": "20pt",
                padding: "2pt 5pt",
                color: "#fff",
                background: "rgb(131, 117, 91)",
                "white-space": "nowrap",
                "z-index": "999999999",
                margin: "0"
            });

            _.log = function (text) {
                console.log(text);
                document.body.appendChild(_logNode).innerHTML = text;
            };

            _.rlog = function () {
                _.rNode(_logNode);
            };

            return _;
        }());

    window.alphaDefine = function (name, factory) {
        factory(function (data) {
            if (callback && data[1]) {
                var elemId = data[1],
                    cb = data[0];
                cb(function (links) {
                    callback(name, links, elemId);
                });
            }
        }, util);
    };

    window.alphaUtil = util;
}(function (name, data, id) {
    // 调用播放器
    console.log("alpha ============", name, data, id);
    for (var i in data) {
        var flash = alphaUtil.byId(id);
        var video = document.createElement('video');
        video.src = data[i];
        video.autoplay = true;
        video.style.width = "100%";
        video.style.height = "100%";
        flash.parentNode.insertBefore(video, flash);
        alphaUtil.rNode(flash);
        return;
    }
}));

