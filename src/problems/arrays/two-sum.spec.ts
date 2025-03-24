import { twoSum } from './two-sum';

describe('Two Sum: Return indices of the two numbers such that they add up to target', () => {
  it('returns indicies', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(nums, target);

    expect(result).toStrictEqual([0, 1]);
  });
});
