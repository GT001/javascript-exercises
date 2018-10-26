const palindromes = function(string) {

    string = string.replace(/[^a-zA-Z]/g, "");
    string = string.toLowerCase();
    
    var limit = string.length/2;
    var palindrome = true;
    var stringLength = string.length;

    for (let i = 0; i < limit; i++){

        if (string.charAt(i) != string.charAt(stringLength - 1 - i)){

            palindrome = false;
            break;
        }
    }

    return palindrome;

}

module.exports = palindromes
