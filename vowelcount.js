function vowelcount(values) { 
    let str =values.toLowerCase();
    let vowels="aeiou";
    let count=0;
    for(i=0;i<str.length;i++){
        if (vowels.indexOf(str[i])>-1) {
            count++;
           
        }
    }
   return count ; 
}
console.log("num of vowels is " +vowelcount("Aeroplane"));