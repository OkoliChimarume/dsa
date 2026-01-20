// Split Array — Minimize Largest Sum


function splitArray(nums, k) {
  let low = Math.max(...nums);
  let high = nums.reduce((a, b) => a + b, 0);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (canSplit(nums, k, mid)) {
      high = mid; // try smaller maximum
    } else {
      low = mid + 1; // need bigger maximum
    }
  }

  return low;
}

function canSplit(nums, k, maxAllowed) {
  let pieces = 1;
  let currSum = 0;

  for (let n of nums) {
    if (currSum + n <= maxAllowed) {
      currSum += n;
    } else {
      pieces++;
      currSum = n;
      if (pieces > k) return false;
    }
  }

  return true;
}
