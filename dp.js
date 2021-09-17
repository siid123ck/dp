function commonSequence(str1, str2){
    let store = {};
    let result = []
    for(let char of str1){
        store[char] = char
    }

    for(let char of str2){
        if(char in store){
            result.push(char); 
            delete store[char];
        } 
    }
    console.log(result)
}

let result = commonSequence('siid sharma', 'susil mahato'); 
console.log(result)