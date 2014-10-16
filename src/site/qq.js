alphaDefine("qq", function (callback, _) {
    var timer,
    cb = function () {
        if (!document.getElementById("mod_inner")) {
            return;
        }
        var dom;
        try {
            dom = document.getElementById("mod_player").firstChild.firstChild;
        } catch (e) {}
        if (dom) {
            clearTimeout(timer);
            callback([function (callback) {
                var vid = location.search.match(/vid=([0-9a-zA-Z]+)/);
                if (vid) {
                    vid = vid[1];
                } else {
                    vid = location.href.match(/\/([0-9a-zA-Z]+).html/);
                    if (vid) {
                        vid = vid[1];
                        if (window.COVER_INFO && window.COVER_INFO.id == vid) {
                            vid = window.VIDEO_INFO.vid;
                        }
                    }
                }
                _.jsonp("http://vv.video.qq.com/geturl", {
                    otype: "json",
                    vid: vid,
                    charge: 0
                }, function (param) {
                    console.log(param);
                    callback({
                        "高清": param.vd.vi[0].url
                    });
                });
            }, document.getElementById("mod_player").firstChild.firstChild]);
        } else {
            clearTimeout(timer);
            timer = setTimeout(cb, 500);
        }
    };
    cb();
});
