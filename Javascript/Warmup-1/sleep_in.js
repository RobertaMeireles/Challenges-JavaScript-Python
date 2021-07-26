// The parameter weekday is True if it is a weekday, and the parameter vacation is 
// True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. 
// Return True if we sleep in.


// sleep_in(False, False) → True
// sleep_in(True, False) → False
// sleep_in(False, True) → True


function sleep_in(weekday, vacation){
    if (weekday !== true || vacation == true) {
        return console.log(true)
    }else {
        return console.log(false)
    }
}
    
sleep_in(true, true)