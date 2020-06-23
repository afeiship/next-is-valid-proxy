const nx = require('@feizheng/next-js-core2');
require('../src/next-is-valid-proxy');

jest.setTimeout(30000);


describe('api.basic test', () => {
  test('nx.isValidProxy', function (done) {
    nx.isValidProxy('http://18.236.173.172:8888').then(res => {
      console.log(res);
      done();
    });
  });
});
