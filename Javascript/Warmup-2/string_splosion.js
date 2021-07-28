
// Given a non-empty string like "Code" return a string like "CCoCodCode".


// string_splosion('Code') → 'CCoCodCode'
// string_splosion('abc') → 'aababc'
// string_splosion('ab') → 'aab' 


function stringSplosion(str) {
    result = ''
    for(let i = 0; i <= str.length - 1; i++){
        result = result + str.substr(0, i + 1)
    }
    return result
    
}

console.log(stringSplosion('Code'))