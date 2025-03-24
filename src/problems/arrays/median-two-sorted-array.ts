/**
 * LeetCode
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[],
): number => {
  let merged: number[] = [];
  let i = 0;
  let j = 0;

  // Two-pointer merge
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // If elements are left in nums1
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  // If elements are left in nums2
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  // Find the median
  const n = merged.length;
  if (n % 2 === 1) {
    return merged[Math.floor(n / 2)];
  } else {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  }
};
