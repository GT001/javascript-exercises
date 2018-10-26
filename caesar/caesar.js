const caesar = function(message, shift) {
    lowercase_letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    uppercase_letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    result = "";
    
    for (i = 0; i < message.length ; i++){
        
        letter = message.charAt(i);
        charCode = message.charCodeAt(i);

        if (( charCode >= 97 && charCode <= 122) || ((charCode >= 65 && charCode <= 90))) {

            var position = 0;
            if (letter == letter.toLowerCase()) {

                if (shift < 0 ) {
                    position = (lowercase_letters.indexOf(letter) + shift +26)%26;
                } else { 
                    position = (lowercase_letters.indexOf(letter) + shift )%26;
                }

                result = result + lowercase_letters[position];

            } else {
                
                if (shift < 0 ) {
                    position = (uppercase_letters.indexOf(letter) + shift +26)%26;
                } else { 
                    position = (uppercase_letters.indexOf(letter) + shift )%26;
                }

                result = result + uppercase_letters[position];
                    
            }

        } else {

            result = result + letter;
        }
    }

    return result;
}

module.exports = caesar
