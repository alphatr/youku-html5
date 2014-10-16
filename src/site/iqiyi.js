alphaDefine("iqiyi", function (callback, _) {
    console.log("iqiyi---------------------");
    callback([function (callback) {
        _.jsonp("http://passport.iqiyi.com/apis/user/info.action", {
            qyid: _.cookie("QC006")
        }, function (param) {
            var vid = _.byId("flashbox").getAttribute("data-player-videoid");
            var vinfo = Q.PageInfo.playPageInfo;
            _.jsonp("http://cache.m.iqiyi.com/jp/tmts/" + vinfo.tvId + "/" + vid + "/", _.extend({
                uid: param.data ? param.data.userinfo.uid : "",
                cupid: Q.PageInfo.adPlayerId,
                type: _.canPlayM3U8 ? "m3u8" : "mp4",
                platForm: "h5"
            }, window.weorjjigh(vinfo.tvId)), function (param) {
                callback({
                    "高清": param.data.m3u
                });
            });
        });
    }, "flash"]);
});
