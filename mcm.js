function mcm(arr, left=1, right=arr.length-1){
    if(left===right) return 0; 
    let max = Infinity, temp; 
    for(let k=left; k<right; k++){
        temp = mcm(arr, left, k) + mcm(arr, k+1, right) + (arr[left-1] * arr[k] * arr[right]);
        max = Math.min(max, temp)
    }

    return max;
}

let result = mcm([10, 20, 5]);
console.log(result)