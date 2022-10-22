const {padMid} = require('./dist');

test('just works', () => {
  expect(padMid('foobar')).toEqual('f o o b a r');
  expect(padMid('foobar', 2)).toEqual('f  o  o  b  a  r');
});

test('just works', () => {
  expect(padMid('foobar', 2, '*')).toEqual('f**o**o**b**a**r');
});

test('just works', () => {
  expect(padMid('foobar', 2, '**')).toEqual('f****o****o****b****a****r');
});

// prettier-ignore
test('just works', () => {
  expect(padMid(`i
love
you`, 1, '*')).toEqual(`i
l*o*v*e
y*o*u`);
});
