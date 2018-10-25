const removeFromArray = function(array) {
    localArray = arguments[0];
    
    var i, j , k;
    
    for( k = 1 ; k < arguments.length; k++ ) {
        var i = 0;
        var j = 0;
        result = [];
        while( i < localArray.length ){
            if (localArray[i] != arguments[k]) {
                result[j] = localArray[i];
                j = j + 1;
            }
            i = i + 1;
        }
        
        localArray = result;
        
    }
    
    return result;
}

module.exports = removeFromArray
