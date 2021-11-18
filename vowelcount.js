function vowelcount(value) {
    let vowels="aeiou";
    let len =value.length;
    let count=0;
    for(i=0;i<len;i++){
        if (vowels.indexOf(value[i])>-1) {
            count++;
           
        }
        
    }
   return count ; 
}
console.log("num of vowels is " +vowelcount("aeroplane"));