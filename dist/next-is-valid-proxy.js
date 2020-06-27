/*!
 * name: @feizheng/next-is-valid-proxy
 * description: Check if proxy is valid.
 * homepage: https://github.com/afeiship/next-is-valid-proxy
 * version: 1.2.0
 * date: 2020-06-27T14:19:07.580Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nodeFetch = require('node-fetch');
  var nxApplyMiddlewares = require('@feizheng/next-apply-fetch-middleware');
  var nxFetchWithProxy = require('@feizheng/next-fetch-with-proxy');
  var nxFetchWithNodeTimeut = require('@feizheng/next-fetch-with-node-timeout');

  var DEFAULT_OPTIONS = { method: 'GET', timeout: 5 * 1000 };
  var CHECK_SOURCE = 'http://icanhazip.com';
  var fetch = nxApplyMiddlewares([
    nxFetchWithProxy,
    nxFetchWithNodeTimeut
  ])(nodeFetch);

  nx.isValidProxy = function (inUrl, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var fetchOptions = nx.mix({ proxy: inUrl }, options);
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
