/**
 * @param {number[]} nums
 * @return {number}
 * produce n which is only number with no duplicate
 */

it("array of size 1", () => {
  expect(singleNumber([1])).toBe(1);
});

it("array of size 0 returns []", () => {
  expect(singleNumber([])).toEqual([]);
});

it("multiple dups, no single", () => {
  expect(singleNumber([1, 1, 2, 2])).toEqual([]);
});

it("multiple single, no dups", () => {
  expect(singleNumber([1, 2, 3])).toBe(1);
});

it("one match only", () => {
  expect(singleNumber([10, 2, 3, 3, 2])).toBe(10);
    // nums[0] = nums[0] ^ nums[i]
    // nums[0] = 10 ^ 2; // 8 ,i=1
    // nums[0] = 8 ^ 3 // 11, i=2
    // nums[0] = 11 ^ 3 // 8, i=3
    // nums[0] = 8 ^ 2 // 10, i=4

  expect(singleNumber([2, 3, 3, 2, 10])).toBe(10);
  expect(singleNumber([2, 3, 10, 2, 3])).toBe(10);
});

function singleNumber(nums: number[]): number {
  const catche = new Map();
  let result = [];

  nums.forEach(n => {
    let val = catche.get(n);
    if (val) {
      catche.set(n, ++val);
    } else {
      catche.set(n, 1);
    }
  });

  for (let [key, val] of catche) {
    if (val === 1) {
      result = key;
      break;
    }
  }
  return result;
}

// use XOR
var singleNumber2 = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i];
  }
  return nums[0];
};

var singleNumberXOR2 = function(nums) {
  let hash = 0;
  nums.forEach(item => {
    hash ^= item;
  });
  return hash;
};
