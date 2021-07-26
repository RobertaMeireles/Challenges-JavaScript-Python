
// Given a string and a non-negative int n, we'll say that the front of the string is
// the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;


// front_times('Chocolate', 2) → 'ChoCho'
// front_times('Chocolate', 3) → 'ChoChoCho'
// front_times('Abc', 3) → 'AbcAbcAbc'

function front_times(str, n){
    s = str.slice(0,3)
    result = ''
    for (let i = 0; i <= n; i++) {
        result += s
    } 
    return result
}
    
console.log(front_times('test', 2))