const fibonacci = function(fibonacci_member) {
    var previous = 1
    var current = 1
    var temp;
    if (fibonacci_member == 1 || fibonacci_member == 2){
        return 1;
    } else if (fibonacci_member < 0){
        return "OOPS";
    }
    
    for ( i = 2; i <= fibonacci_member -1; i++) {
        temp = current;
        current = previous + current;
        previous = temp;
    }
    return current;
}

module.exports = fibonacci
