# pad-mid

[![NPM version](https://img.shields.io/npm/v/pad-mid.svg)](https://www.npmjs.com/package/pad-mid)
[![NPM monthly download](https://img.shields.io/npm/dm/pad-mid.svg)](https://www.npmjs.com/package/pad-mid)

> Pads each middle character of a string

## Installation

```bash
npm install pad-mid
```

### Example:

```ts
import {padMid} from 'pad-mid';

expect(padMid('foobar')).toEqual('f o o b a r');

expect(padMid('foobar', 2)).toEqual('f  o  o  b  a  r');

expect(padMid('foobar', 2, '*')).toEqual('f**o**o**b**a**r');

expect(padMid('foobar', 2, '**')).toEqual('f****o****o****b****a****r');

// prettier-ignore
expect(padMid(`i
love
you`, 1, '*')).toEqual(`i
l*o*v*e
y*o*u`);
```

## License

MIT
