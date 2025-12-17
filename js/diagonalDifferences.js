function diagonalDifference(arr) {
  // Write your code here
  // let numOne = arr[0][0] + arr[1][1] + arr[2][2]
  // let numTwo = arr[0][2] + arr[1][1] + arr[2][0]
  // let arr2 = [numOne, numTwo]
  // arr2.sort((a,b)=> b-a)
  // return (arr2[0]-arr2[1])
  const n = arr.length;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < n; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][n - 1 - i];
  }

  return Math.abs(leftSum - rightSum);
}
