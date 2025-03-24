import { findMedianSortedArrays } from './median-two-sorted-array';

describe('Median of two sorted arrays', () => {
  it('should return median of two arrays', () => {
    const nums1 = [1, 3];
    const nums2 = [4, 5, 7];
    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toBe(4);
  });
});
