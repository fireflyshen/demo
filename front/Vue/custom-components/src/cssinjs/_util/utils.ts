import Theme from "../Theme";
import hash from '@emotion/hash';
const flattenTokenCache = new WeakMap<any, string>();
export function flattenToken(token: any) {

  let str = flattenTokenCache.get(token) || '';

  if (!str) {
    Object.keys(token).forEach(key => {
      const value = token[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === 'object') {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });

    // Put in cache
    flattenTokenCache.set(token, str);
  }
  return str;
}



export function token2key(token: any, salt: string): string {
  return hash(`${salt}_${flattenToken(token)}`);
}


