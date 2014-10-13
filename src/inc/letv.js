var html5Player = function (vid) {
    var html5 = {
            autoplay: 'autoplay',
            loop: 'loop',
            controls: 'controls'
        };

    html5.src = 'http://app.letv.com/api/get_video_by_vid.php?vid=' + vid + '&pcode=100210001&sign=360kan';

    var cerateHtml5Player = function (options) {
        var playerArray = [], key;
        playerArray.push('<video');
        for (key in options) {
            if (options[key] !== '') {
                playerArray.push(' ' + key + '="' + options[key] + '"');
            }
        }
        playerArray.push('></video>');
        return playerArray.join('');
    };
    return cerateHtml5Player(html5);
};

var vid = (location.href.match(/\/vplay\/([^\/\.]+)\.html/i))[1];
if (vid) {
    document.getElementById('fla_box').innerHTML = html5Player(vid);
}
