/* global chrome */
var siteList = ["youku", "sohu", "letv", "tudou", "qq", "iqiyi"],
    site = (function () {
        var matchs = location.href.match(/(.+\.)?([\w\d-]+)\.\w+\//i);
        if (matchs && matchs[2]) {
            return matchs[2];
        }
    }()),

    loader = function (src, isInline) {
        var script = document.createElement('script');

        src = src.replace(/\"/g, '\\"');
        if (!isInline) {
            src = 'res.src = "' + src + '";';
        } else {
            src = 'res.innerText = "' + src + '";';
        }

        script.innerHTML = [
            '(function () {',
            'var res = document.createElement("script");',
            src,
            'document.getElementsByTagName(\'head\')[0].appendChild(res);',
            '}());'
        ].join('\n');

        $('head').append($(script));
    },

    init = function () {
        var getURL = chrome.runtime.getURL;
        if (location.href.indexOf('flash=1') > -1) {
            return;
        }

        if (site && $.inArray(site, siteList) > -1) {
            loader(getURL('inc/init.js'));
            setTimeout(loader, 200, getURL('site/' + site + '.js'));
        }
    };
init();
