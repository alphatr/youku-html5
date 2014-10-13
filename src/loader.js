/* global chrome */
var siteList = ["youku", "sohu", "letv"],
    site = (location.href.match(/(.+\.)?([\w\d-]+)\.\w+\//i))[2],
    loader = function (src) {
        var script = document.createElement('script');
        script.innerHTML = [
            '(function () {',
            'var res = document.createElement("script");',
            'res.src = "' + src + '";',
            'document.getElementsByTagName(\'head\')[0].appendChild(res);',
            '}());'
        ].join('\n');
        $('head').append($(script));
    },
    init = function () {
        if (location.href.indexOf('flash=1') > -1) {
            return;
        }

        if (site && ("|" + (siteList.join("|")) + "|").indexOf("|" + site + "|") > -1) {
            loader(chrome.runtime.getURL('inc/' + site + '.js'));
        }
    };
init();
