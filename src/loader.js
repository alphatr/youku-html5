/* global chrome */
var siteList = ["youku", "sohu", "letv", "tudou", "qq", "iqiyi"],
    site = (location.href.match(/(.+\.)?([\w\d-]+)\.\w+\//i))[2],
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

        if (site && ("|" + (siteList.join("|")) + "|").indexOf("|" + site + "|") > -1) {
            loader(getURL('inc/init.js'));
            setTimeout(loader, 200, getURL('site/' + site + '.js'));
        }
    };
init();
