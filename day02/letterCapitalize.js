function letterCapitalize(sentence) {
    sentence = sentence.split(" "); //[mot1, mot2, mot3...]
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].substring(0, 1).toUpperCase() + sentence[i].substring(1, sentence[i].length);
    }
    console.log(sentence.join(" "));
}

letterCapitalize("what a wonderful world");


/* Alternative avec replace
 function letterCapitalize(sentence) {
     sentence = sentence.split(" ");
     for (var i = 0; i < sentence.length; i++) {
         var sentenceBreak = sentence[i].charAt(0).toUpperCase();
         sentence[i] = sentence[i].replace(sentence[i][0], sentenceBreak);
     }
     console.log(sentence.join(" "));
 }

 letterCapitalize("what a wonderful world"); */