export function formatBytes(bytes: number, decimals?: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function slugify(text: string): string {
  const specialChars: { [s: string]: string } = {
    à: 'a',
    ä: 'ae',
    á: 'a',
    â: 'a',
    æ: 'a',
    å: 'a',
    ë: 'e',
    è: 'e',
    é: 'e',
    ê: 'e',
    î: 'i',
    ï: 'i',
    ì: 'i',
    í: 'i',
    ò: 'o',
    ó: 'o',
    ö: 'oe',
    ô: 'o',
    ø: 'o',
    ù: 'o',
    ú: 'u',
    ü: 'ue',
    û: 'u',
    ñ: 'n',
    ç: 'c',
    ß: 's',
    ÿ: 'y',
    œ: 'o',
    ŕ: 'r',
    ś: 's',
    ń: 'n',
    ṕ: 'p',
    ẃ: 'w',
    ǵ: 'g',
    ǹ: 'n',
    ḿ: 'm',
    ǘ: 'u',
    ẍ: 'x',
    ź: 'z',
    ḧ: 'h',
    '·': '-',
    '/': '-',
    _: '-',
    ',': '-',
    ':': '-',
    ';': '-',
  };

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/./g, (target) => specialChars[target] || target) // Replace special characters using the hash map
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
}

export function testable(id: string): { 'data-testid': string } {
  return {
    'data-testid': id,
  };
}
