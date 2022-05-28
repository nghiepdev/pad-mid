# pad-mid

[![NPM version](https://img.shields.io/npm/v/pad-mid.svg)](https://www.npmjs.com/package/pad-mid)
[![NPM monthly download](https://img.shields.io/npm/dm/pad-mid.svg)](https://www.npmjs.com/package/pad-mid)

> Mid pad a string with specified string. Fastest implementation.

## Installation

```bash
yarn add pad-mid
```

### Example:

```ts
import {padMid} from 'pad-mid';

expect(padMid('foobar', 3, '*')).toEqual('f***o***o***b***a***r');

expect(padMid('foobar', 3, '**')).toEqual(
  'f******o******o******b******a******r'
);

// prettier-ignore
expect(padMid(`i
love
you`, 1, '*')).toEqual(`i
l*o*v*e
y*o*u`);
```

## License

MIT
