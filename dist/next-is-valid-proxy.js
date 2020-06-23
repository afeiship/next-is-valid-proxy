/*!
 * name: @feizheng/next-is-valid-proxy
 * description: Check if proxy is valid.
 * homepage: https://github.com/afeiship/next-is-valid-proxy
 * version: 1.0.0
 * date: 2020-06-23T02:03:59.200Z
 * license: MIT
 */

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

//# sourceMappingURL=next-is-valid-proxy.js.map
