// Longest Substring with At Most K Distinct Characters

function longestSubstringKDistinct(s, k) {
  if (k === 0 || s.length === 0) return 0;

  let left = 0;
  let maxLen = 0;
  const freq = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    freq.set(ch, (freq.get(ch) || 0) + 1);

    while (freq.size > k) {
      const leftChar = s[left];
      freq.set(leftChar, freq.get(leftChar) - 1);
      if (freq.get(leftChar) === 0) {
        freq.delete(leftChar);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
let s = "eceba";
let k = 2;
console.log(longestSubstringKDistinct(s, k)); // Output: 3 ("ece" or "ba")