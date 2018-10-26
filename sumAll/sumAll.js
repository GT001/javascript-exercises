const sumAll = function(first_number, second_number) {

    var error_check = ( typeof first_number != "number" || typeof second_number != "number") ||
                        first_number < 0 || second_number < 0;
      
    if (error_check){
        return "ERROR";
    }
    if( first_number < second_number){
        var i = first_number;
        var j = second_number;
    } else {
        var j = first_number;
        var i = second_number;
    }

    var sum = 0;
    
    while(i <= j){
        sum += i;
        i += 1;
    }
    
    return sum

}

module.exports = sumAll
