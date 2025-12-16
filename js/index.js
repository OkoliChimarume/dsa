// There is a collection of input strings
//  and a collection of query strings.
// For each query string, determine how many times it
// occurs in the list of input strings. Return an array of the results.

// strings = ['ab', 'ab', 'abc'];
// queries = ['ab', 'abc', 'bc'];

// There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'.
//  For each query, add an element to the return array, [2, 1, 0].

strings = ["ab", "ab", "abc"];
queries = ["ab", "abc", "bc"];
function matchingStrings(strings, queries) {
 let result = [];
 for(let i = 0; i < queries.length; i++){
    result[i] = strings.filter((item) => item == queries[i]).length || 0;
 }
 return result;
} 

console.log(matchingStrings(strings, queries));
// function matchingStrings(strings, queries) {
//   // Write your code here
//   let result = [];
//   const [q1, q2, q3] = queries;
//   result[0] = strings.filter((item) => item == q1).length || 0;
//   result[1] = strings.filter((item) => item == q2).length || 0;
//   result[2] = strings.filter((item) => item == q3).length || 0;
//   console.log(result);
// }