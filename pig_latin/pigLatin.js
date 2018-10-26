function translate(string) {
	// body...
	var vowel = ["a","e","i","o","u"];
	var word = string.split(" ");
	var result = [];
	var i = 0;
	var words_count = word.length;

	while (i < words_count) {

		if (vowel.indexOf(word[i].charAt(0)) < 0) {
			//not a vowel
			j = 1;
			while (j < word[i].length){
				if ( vowel.indexOf(word[i].charAt(j)) < 0) {
					j += 1;
				} else if (word[i].charAt(j) == "u" && word[i].charAt(j-1) == "q") {
					j += 1;
				} else {
					result.push(word[i].substr(j) + word[i].substr(0,j) + "ay"); 
					//console.log(word[i].substr(j) + word[i].substr(0,j) + "ay")
					break;
				}
			}
		} else {
			
			result.push(word[0] + "ay");
			
		}
		i += 1;

	}
	return result.join(" ");
}


module.exports = {
	translate
}