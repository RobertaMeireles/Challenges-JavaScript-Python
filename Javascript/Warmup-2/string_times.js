
// Given a string and a non-negative int n, return a larger 
// string that is n copies of the original string.


// string_times('Hi', 2) → 'HiHi'
// string_times('Hi', 3) → 'HiHiHi'
// string_times('Hi', 1) → 'Hi'


function string_times(str, n){
    s = ''
    for (let i = 0; i <= n; i++) {
        s += str
    } 
    return s
}
    
console.log(string_times('test', 2))