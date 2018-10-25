const reverseString = function(message) {
    result = ""
    messageLength = message.length
    while (messageLength>0){
        result += message[messageLength-1];
        messageLength -= 1;
    }
    return result;
}

module.exports = reverseString
