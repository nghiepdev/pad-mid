/**
 * Pads each middle character of a string
 * @param str string. Required
 * @param num number. Default is 1
 * @param ch string. The default value is the unicode "space" character (U+0020)
 */

export function padMid(str = '', num = 1, ch = ' ') {
  const replacer = ch.repeat ? ch.repeat(num) : Array(num + 1).join(ch);

  return str.replace(/.(?=.)/g, match => `${match}${replacer}`);
}
