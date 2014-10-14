alphaDefine("sohu", function (callback, _) {
    setTimeout(callback, 300, [function (callback) {
        var vid = window.vid;
        var uid = _.cookie("SUV");
        if (!vid) {
            return;
        }

        function shift_en(i) {
            var t = i.length,
                e = 0;
            return this.replace(/[0-9a-zA-Z]/g, function(s) {
                var a = s.charCodeAt(0),
                    n = 65,
                    o = 26;
                a >= 97 ? n = 97 : 65 > a && (n = 48, o = 10);
                var r = a - n;
                return String.fromCharCode((r + i[e++ % t]) % o + n)
            })
        }

        function m3u8(callback) {
            _.jsonp("http://pad.tv.sohu.com/playinfo", {
                vid: vid,
                playlistid: 0,
                sig: shift_en.call("" + (new Date).getTime(), [23, 12, 131, 1321]),
                key: shift_en.call(vid, [23, 12, 131, 1321]),
                uid: uid
            }, function(param) {
                var url = "";
                switch (param.quality) {
                    case 2:
                        url = param.norVid;
                        break;
                    case 1:
                        url = param.highVid;
                        break;
                    case 21:
                        url = param.superVid;
                        break;
                    case 31:
                        url = param.oriVid;
                        break;
                    default:
                        url = param.highVid
                }
                callback({
                    "高清": url.replace(/ipad\d+\_/, "ipad" + vid + "_") + "&uid=" + uid + "&ver=" + param.quality + "&prod=h5&pt=2&pg=1&ch=" + param.cid
                })
            })
        }

        function mp4(callback) {
            _.jsonp("http://api.tv.sohu.com/v4/video/info/" + vid + ".json", {
                site: 1,
                api_key: "695fe827ffeb7d74260a813025970bd5",
                sver: 1,
                plat: 17,
                partner: 1,
            }, function(param) {
                callback({
                    "高清": param.data.url_high_mp4
                })
            })
        }
        _.canPlayM3U8 ? m3u8(callback) : mp4(callback);
    }, "player"]);
});
