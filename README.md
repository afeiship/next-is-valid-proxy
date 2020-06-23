# next-is-valid-proxy
> Check if proxy is valid.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
![size][size-image]
![download][download-image]

## installation
```bash
npm install -S @feizheng/next-is-valid-proxy
```

## usage
```js
import '@feizheng/next-is-valid-proxy';

// check the ip
nx.isValidProxy('http://18.236.173.172:8888').then(res=>{
  console.log(res); // true/false
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-is-valid-proxy/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-is-valid-proxy
[version-url]: https://npmjs.org/package/@feizheng/next-is-valid-proxy

[license-image]: https://img.shields.io/npm/l/@feizheng/next-is-valid-proxy
[license-url]: https://github.com/afeiship/next-is-valid-proxy/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-is-valid-proxy
[download-image]: https://img.shields.io/npm/dw/@feizheng/next-is-valid-proxy
