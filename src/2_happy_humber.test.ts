import { isHappy, explodeNumber, squareAndSum } from "./2_happy_number";

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

it("convert single num into arry of num", () => {
  const only1 = explodeNumber(1);
  expect(only1).toEqual([1]);
  const multiple = explodeNumber(123);
  expect(multiple).toEqual([1, 2, 3]);
});

it("squares and sum all numbers in array", () => {
  expect(squareAndSum([1])).toBe(1);
  expect(squareAndSum([1, 2])).toBe(5);
  expect(squareAndSum([1, 2, 3, 4])).toBe(30);
});
