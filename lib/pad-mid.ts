export function padMid(str = '', num = 0, ch = '') {
  const replacer = ch.repeat ? ch.repeat(num) : Array(num + 1).join(ch);

  return str.replace(/.(?=.)/g, match => `${match}${replacer}`);
}
