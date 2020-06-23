(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fetch = require('node-fetch');
  var ProxyAgent = require('proxy-agent');
  var DEFAULT_OPTIONS = { method: 'GET', timeout: 5 * 1000 };
  var CHECK_SOURCE = 'https://icanhazip.com';

  nx.isValidProxy = function (inUrl, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var fetchOptions = nx.mix({ agent: new ProxyAgent(inUrl) }, options);
    return new Promise(function (resolve) {
      fetch(CHECK_SOURCE, fetchOptions)
        .then(function (res) {
          return res.text();
        }).then(function (res) {
          var ip = res.trim();
          resolve(inUrl.includes(ip));
        }).catch(function (err) {
          resolve(false);
        });
    })
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isValidProxy;
  }
})();
