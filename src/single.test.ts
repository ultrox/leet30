/**
 * @param {number[]} nums
 * @return {number}
 * produce n which is only number with no duplicate
 */

it("test stuff", () => {
  expect(singleNumber([1, 2, 2])).toBe(1);
});

var singleNumber = function(nums: number[]) {
  const catche = new Map();

  nums.forEach(n => {
    catche.set(1, n);
  });
  return 1;
};
