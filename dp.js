// function commonSequence(text1, text2){
//     let store = {};
//     let result = []
//     for(let char of text1){
//         store[char] ? store[char] += 1 : store[char] = 1;
//     }

//     for(let char of text2){
//         if(char in store){
//             result.push(char); 
//              store[char]--;
//         } 
//     }
//     console.log(result)
//     return result.length;
// }
 function longestCommonSubsequence(text1, text2, m=text1.length, n = text2.length){
     if(m=== 0 || n===0) return 0;
     if(text2[n-1]===text1[m-1]){
         return 1+longestCommonSubsequence(text1, text2, m-1, n-1);
     } else{
         return  Math.max(longestCommonSubsequence(text1, text2, m-1, n), longestCommonSubsequence(text1, text2, m, n-1))
     }
 }
 
 
 function longestCommonSubsequenceMemo(text1, text2, m=text1.length, n=text2.length){
  let table = Array(m+1).fill([]).map(()=>Array(n+1).fill(0))
  function helper(str1, str2, m, n, memo = table){
      if(m===0 || n===0) return 0;
      if(memo[m][n]) return memo[m][n]
      if(str1[m-1] === str2[n-1]){
        memo[m][n] = 1 +  helper(str1, str2, m-1, n-1, memo);
      } else {
          return Math.max(helper(text1, text2, m-1, n, memo), helper(text1, text2, m, n-1, memo))
      }
      return memo[m][n]
  }
  return helper(text1, text2, m, n, table)
 }

 function longestCommonSubsequenceTab(text1, text2, m=text1.length, n=text2.length){
     let table = Array(m+1).fill([]).map(()=>Array(n+1).fill(0))
     for(let i=1; i<=m; i++){
         for(let j=1; j<=n; j++){
             if(text1[i-1]===text2[j-1]){
                 table[i][j] = 1 + table[i-1][j-1]; 
             } else{
                 table[i][j] = Math.max(table[i-1][j], table[i][j-1])
             }
         }
     }
     return table[m][n]
 }

 function longestCommonSubstring(text1, text2, m=text1.length, n=text2.length){
     let table = Array(m+1).fill([]).map(()=>Array(n+1).fill(0)); 
     for(let i=1; i<=m; i++){
         for(let j=1; j<=n; j++){
             if(text1[i-1]===text2[j-1]){
                 if(i !== 1 && j !== 1 && text1[i-2]===text2[j-2]){
                     table[i][j] = 1 + table[i-1][j-1]
                 } else{
                     table[i][j] = Math.max(1, table[i-1][j-1])
                 }
             } else{
                 table[i][j] = Math.max(table[i-1][j], table[i][j-1])
             }
         }
     }
     console.log(table)
     return table[m][n]
 }

 let result = longestCommonSubstring('abcijklm', 'aijklmbcd')
// let result = longestCommonSubstring('aburirheljkrdfhlejfkwhoierlkjefdkjfdcufeiodfjkaaaaaaaaaaaaaaa', 'baehilekrwufjiurhiffkljfdkdfiufdcaaaaaaaaaaaaaaaaa'); 
console.log(result)