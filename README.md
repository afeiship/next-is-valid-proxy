# next-is-valid-proxy
> Check if proxy is valid.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-is-valid-proxy
```

## usage
```js
import '@jswork/next-is-valid-proxy';

// check the ip
nx.isValidProxy('http://18.236.173.172:8888').then(res=>{
  console.log(res); // true/false
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-is-valid-proxy/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-is-valid-proxy
[version-url]: https://npmjs.org/package/@jswork/next-is-valid-proxy

[license-image]: https://img.shields.io/npm/l/@jswork/next-is-valid-proxy
[license-url]: https://github.com/afeiship/next-is-valid-proxy/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-is-valid-proxy
[size-url]: https://github.com/afeiship/next-is-valid-proxy/blob/master/dist/next-is-valid-proxy.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-is-valid-proxy
[download-url]: https://www.npmjs.com/package/@jswork/next-is-valid-proxy
