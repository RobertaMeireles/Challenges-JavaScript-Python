// Given a string, return a new string where the first and last chars have been exchanged.

// front_back('code') → 'eodc'
// front_back('a') → 'a'
// front_back('ab') → 'ba'

function front_back(str){
    if (str.length <= 1) {
        return str 
    } else {
        return str.slice(-1) + str.slice(1,(str.length-1)) + str.substr(0, 1)
    }
}
    
console.log(front_back('code'))