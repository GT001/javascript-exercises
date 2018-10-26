const snakeCase = function(string) {
    if (string.indexOf(" ") < 0){
         if  ( string.indexOf("-") > 0){
            //kebab
            string = string.replace("-", " ");
        } else if (string.indexOf("..") >= 0) {
            // wtf
            string = string.replace(/\.\./g, " ");
            
        } else  if (string.indexOf("..") < 0){
            //Camel
   
            string = string.replace(/([A-Z])/g, " $1");
            
        }
    }       
    string = string.replace(/[^a-zA-Z\s]/g,"")
    string = string.toLowerCase()
    string = string.trim();
    string = string.replace(/[\s]/g, "_");

    return string
  
}

module.exports = snakeCase
