// Produces true if number is happy
// NOTE: happy number is if sum of squares of each members equal to 1
/*
  n=19
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
*/

it("one digit happy", () => {
  const result = isHappy(1);
  expect(result).toBe(true);
});

it("2 digits happy", () => {
  // for input 19
  const result = isHappy(19);
  expect(result).toBe(true);
});

it("1 digits not happy", () => {
  const result = isHappy(2);
  expect(result).toBe(false);
});

function isHappy(n: number, seen = new Set()): Boolean {
  if (n === 1) return true;
  if (seen.has(n)) return false;
  else {
    return isHappy(squareAndSum(explodeNumbers(n)), seen.add(n));
  }
}

// Number -> [arrof Number]
// produce array number of members of given number
it("convert single num into arry of num", () => {
  const only1 = explodeNumbers(1);
  expect(only1).toEqual([1]);
  const multiple = explodeNumbers(123);
  expect(multiple).toEqual([1, 2, 3]);
});

function explodeNumbers(num: number): number[] {
  return Array.from(String(num)).map(Number);
}
// [arrof Number] → Number
// produce quadrat sum of number in arrays
it("squares and sum all numbers in array", () => {
  expect(squareAndSum([1])).toBe(1);
  expect(squareAndSum([1, 2])).toBe(5);
  expect(squareAndSum([1, 2, 3, 4])).toBe(30);
});

function squareAndSum(nums: number[]): number {
  return nums.reduce((rsf, cv) => rsf + cv**2, 0);
}
