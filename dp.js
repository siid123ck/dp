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
 function longestCommonSubsequence(text1, text2, m=text1.length, n = text2.length, memo={}){
     let key = m + ""+ n;
     if(memo[key]) return memo[key]
     if(m=== 0 || n===0) return 0;
     if(text2[n-1]===text1[m-1]){
         memo[key] = 1+longestCommonSubsequence(text1, text2, m-1, n-1, memo);
     } else{
         memo[key] =  Math.max(longestCommonSubsequence(text1, text2, m-1, n, memo), longestCommonSubsequence(text1, text2, m, n-1, memo))
     }

     return memo[key]
 }

 function longestCommonSubsequenceTab(text1, text2, m=text1.length, n=text2.length){
     let table = Array(m+1).fill([]).map(()=>Array(n+1).fill(0))
     for(let i=1; i<=m; i++){
         for(let j=1; j<=n; j++){
             if(text1[i-1]===text2[j-1]){
                console.log(table)
                 table[i][j] = 1 + table[i-1][j-1]; 
             } else{
                 table[i][j] = Math.max(table[i-1][j], table[i][j-1])
             }
         }
     }
     console.log(table)
     return table[m][n]
 }

let result = longestCommonSubsequenceTab('abc', 'bacd'); 
console.log(result)