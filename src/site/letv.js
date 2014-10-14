alphaDefine("letv", function (callback, _) {
    callback([function (callback) {
        var urls = {};
        var mmsid = window.__INFO__.video.mmsid;
        var vid = window.__INFO__.video.vid;
        var auth = LTK.require("video.auth");
        var a = new auth;
        var tkey = a.getKey(Date.now() / 1e3 | 0);

        if (!vid) {
            return;
        }
        _.jsonp("http://api.letv.com/mms/out/common/geturl", {
            platid: 3,
            splatid: 301,
            playid: 0,
            vtype: "9,13,21",
            version: "2.0",
            tss: "ios",
            mmsid: mmsid,
            vid: vid,
            tkey: tkey,
            retry: 1
        }, function(rs) {
            var i = 0;
            _.each(rs.data[0]["infos"], function(item) {
                var type = item.vtype;
                switch (item.vtype) {
                    case "9":
                        type = "标清";
                        break;
                    case "13":
                        type = "高清";
                        break;
                    case "21":
                        type = "超清";
                        break
                }
                i++;
                ~ function(type) {
                    _.jsonp(!_.canPlayM3U8 ? item.mainUrl.replace("&tss=ios", "") : item.mainUrl, {
                        expect: 3,
                        format: 1,
                        termid: LTK.require("extend.detect").isLetv ? 4 : 2,
                        type: _.canPlayM3U8 ? undefined : "ad_m_gapqing_mp4"
                    }, function(rs) {
                        urls[type] = rs.location;
                        i--;
                        if (i == 0) urls && callback(urls)
                    }, "jsonp")
                } (type);
            });
        });
    }, "fla_box"]);
});
