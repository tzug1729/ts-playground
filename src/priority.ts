// export function isValidPriority(value: number): boolean {
//   return false;
// }

// export function isValidPriority(value: number): boolean {
//   if (value >= 1 && value <= 3) {
//     return true;
//   }
//   else { return false; }
// }

// export function isValidPriority(value: number): boolean {
//   if (!isInteger(value)) { //valueが整数型なら真で実行されない
//     return false;//ここが実行された時点で関数が終了する．elseを書かなくていい
//   }
//   return value >= 1 && value <= 3;
// }

export function isValidPriority(value: number): boolean {
  return Number.isInteger(value) && value >= 1 && value <= 3;
}
