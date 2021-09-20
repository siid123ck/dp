function mcmMem0(arr, left, right){
    let table= Array(arr.length).fill(0).map(()=>Array(arr.length).fill(Infinity))
    function mcm(arr, left=1, right=arr.length-1, memo=table){
        if(left >= right) return 0; 
        if(memo[left][right] !==Infinity) return memo[left][right]
        let temp; 
        for(let k=left; k<right; k++){
            temp = mcm(arr, left, k) + mcm(arr, k+1, right) + (arr[left-1] * arr[k] * arr[right]);
            // max = Math.min(max, temp)
            table[left][right] = Math.min(temp, table[left][right]);
        }
    
        return table[left][right];
    }
   return mcm(arr, left, right)
}

function mcmTab(arr, n=arr.length){
    let table= Array(n).fill(0).map(()=>Array(n).fill(Infinity))
    let right, cost;
    if(n===0) return 0;
    for(let i=0; i<n; i++){
        table[i][i] = 0
    }
    
    for(let length=2; length<n; length++){
        for(let left = 1; left < n-length + 1; left++){
            right = length + left -1; 
            if(left===right) table[left][right] = 0;

            // table[left][right] = Infinity;
            for(let k=left; k<right; k++){
            cost = table[left][k] + table[k+1][right] + arr[left-1]*arr[k]*arr[right];
            table[left][right] = Math.min(cost, table[left][right])
            }
        }
    }

    return table[1][n-1]
}

let result = mcmTab([10, 15, 30, 50, 34, 532, 545, 5323, 1341]);
console.log(result)