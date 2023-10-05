export function padWithZeros(num: number, length: number) {
  let str = num.toString();
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}