(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nodeFetch = require('node-fetch');
  var nxApplyMiddlewares = require('@jswork/next-apply-fetch-middleware');
  var nxFetchWithProxy = require('@jswork/next-fetch-with-proxy');
  var nxFetchWithNodeTimeut = require('@jswork/next-fetch-with-node-timeout');

  var DEFAULT_OPTIONS = { method: 'GET', timeout: 5 * 1000 };
  var CHECK_SOURCE = 'http://icanhazip.com';
  var fetch = nxApplyMiddlewares([nxFetchWithProxy, nxFetchWithNodeTimeut])(nodeFetch);

  nx.isValidProxy = function (inUrl, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var fetchOptions = nx.mix({ proxy: inUrl }, options);
    return new Promise(function (resolve) {
      fetch(CHECK_SOURCE, fetchOptions)
        .then(function (res) {
          return res.text();
        })
        .then(function (res) {
          var ip = res.trim();
          resolve(inUrl.includes(ip));
        })
        .catch(function (err) {
          resolve(false);
        });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isValidProxy;
  }
})();
