/**
 * Pads each middle character of a string
 * @param {string} str - Required
 * @param {number} [num = 1] - Default is 1
 * @param {string} [ch=' '] - The default value is the unicode "space" character (U+0020)
 */
export function padMid(str = '', num = 1, ch = ' ') {
  const replacer = ch.repeat ? ch.repeat(num) : Array(num + 1).join(ch);
  return str.replace(/.(?=.)/g, `$&${replacer}`);
}
