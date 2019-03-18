sendHelp = (str) => {
   
   var count = 0;
   
   checkSubstr = (substr) => {
      
      if (substr[0] !== "S") { count += 1 }
      if (substr[1] !== "O") { count += 1 }
      if (substr[2] !== "S") { count += 1 }

   }
   

   if (typeof str !== "string") {
      return "Input must be a string";

   } else if (str.length < 3 || str.length > 99) {
      return "String must be at least 3 chars long and up to 99 chars long";

   } else if (str != str.toUpperCase()) {
      return "String will contains only uppercase letters";

   } else if (str.length % 3 !== 0) {
      return "String length must be a multiple of 3";

   } else {
      
      for (i = 0; i < str.length; i += 3) {
         checkSubstr(str.substring(i, i + 3));
      } return count
      
   }
}

module.exports = { sendHelp: sendHelp }

