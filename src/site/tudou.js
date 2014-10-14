alphaDefine("tudou", function (callback, _) {
    callback([function (callback) {
        var _id = window.iid || window.pageConfig && window.pageConfig.iid || window.itemData && window.itemData.iid;
        var videoId = window.itemData && window.itemData.vcode;
        var m3u8 = function(callback) {
            var urls = {
                "标清": "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=2",
                "高清": "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=3",
                "超清": "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=4",
                "原画": "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=5"
            };
            var _s;
            if (window.itemData && window.itemData.segs) {
                urls = {};
                _s = JSON.parse(window.itemData.segs);
                if (_s[2]) urls["标清"] = "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=2";
                if (_s[3]) urls["高清"] = "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=3";
                if (_s[4]) urls["超清"] = "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=4";
                if (_s[5]) urls["原画"] = "http://vr.tudou.com/v2proxy/v2.m3u8?it=" + _id + "&st=5"
            }
            return !videoId ? callback(urls) : callback({
                "标清": "http://v.youku.com/player/getM3U8/vid/" + videoId + "/type/flv/ts/" + (new Date).getTime().toString().substring(0, 10) + "/sc/2/useKeyframe/0/v.m3u8",
                "原画": "http://v.youku.com/player/getM3U8/vid/" + videoId + "/type/hd2/ts/" + (new Date).getTime().toString().substring(0, 10) + "/sc/2/useKeyframe/0/v.m3u8"
            })
        };
        var mp4 = function(callback) {
            if (!videoId) {
                _.jsonp("http://vr.tudou.com/v2proxy/v2.js", {
                    it: _id,
                    st: "52%2C53%2C54"
                }, function(param) {
                    if (param.code == -1) return;
                    for (var urls = {}, i = 0, len = param.urls.length; i < len; i++) {
                        urls[i] = param.urls[i];
                    }
                    return callback(urls);
                }, "jsonp");
            } else {
                _.jsonp("https://openapi.youku.com/v2/videos/files.json", {
                    client_id: "513edb6cf9833ca7&client_secret=eaf151ffdbf1383d934ab4cb91250fa6",
                    type: "play",
                    video_id: videoId,
                    _: +(new Date).getTime().toString()
                }, function(param) {
                    return callback({
                        "标清": param.files["3gphd"].segs[0].url
                    });
                })
            }
        };
        _.canPlayM3U8 ? m3u8(callback) : mp4(callback);
    }, "tudouHomePlayer"]);
});
