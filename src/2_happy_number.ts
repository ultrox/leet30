// Produces true if number is happy
// NOTE: happy number is if sum of squares of each members equal to 1
/*
  n=19
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
*/
function isHappy(n: number, seen = new Set()): Boolean {
  if (n === 1) return true;
  if (seen.has(n)) return false;
  else {
    return isHappy(squareAndSum(explodeNumber(n)), seen.add(n));
  }
}

// Number -> [arrof Number]
// produce array number of members of given number
function explodeNumber(num: number): number[] {
  return Array.from(String(num)).map(Number);
}

// [arrof Number] → Number
// produce quadrat sum of number in arrays
function squareAndSum(nums: number[]): number {
  return nums.reduce((rsf, cv) => rsf + cv ** 2, 0);
}

export { isHappy, explodeNumber, squareAndSum };
