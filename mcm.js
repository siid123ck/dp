function mcm(arr, left=1, right=arr.length-1){
    if(left >= right) return 0; 
    let max = Infinity, temp; 
    for(let k=left; k<right; k++){
        temp = mcm(arr, left, k) + mcm(arr, k+1, right) + (arr[left-1] * arr[k] * arr[right]);
        max = Math.min(max, temp)
    }

    return max;
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

    console.log(table)
    return table[1][n-1]
}

let result = mcm([10, 40, 50, 60]);
console.log(result)