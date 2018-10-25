const repeatString = function(message, numberOfTimes) {
    if(numberOfTimes < 0 ) {return "ERROR";}
    
    result = "";
    while(numberOfTimes > 0) {
        result = result + message ;
        numberOfTimes = numberOfTimes - 1;
    }
    
    return result;
}

module.exports = repeatString
