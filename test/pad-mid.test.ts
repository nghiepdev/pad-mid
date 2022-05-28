import {padMid} from '../lib/pad-mid';

test('just works', () => {
  expect(padMid('foobar')).toEqual('foobar');
  expect(padMid('foobar', 3)).toEqual('foobar');
});

test('just works', () => {
  expect(padMid('foobar', 3, '*')).toEqual('f***o***o***b***a***r');
});

test('just works', () => {
  expect(padMid('foobar', 3, '**')).toEqual(
    'f******o******o******b******a******r'
  );
});

// prettier-ignore
test('just works', () => {
  expect(padMid(`i
love
you`, 1, '*')).toEqual(`i
l*o*v*e
y*o*u`);
});
