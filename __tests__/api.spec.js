const nx = require('@feizheng/next-js-core2');
require('../src/next-is-valid-proxy');

jest.setTimeout(30000);


describe('api.basic test', () => {
  test('nx.isValidProxy', function (done) {
    nx.isValidProxy('http://18.216.126.93:8080', { timeout: 5 * 1000 }).then(res => {
      console.log(res);
      done();
    });
  });
});
