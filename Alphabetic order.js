function alpha(str) {
    var array = str.split('');
    var a;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if (array[i]>array[j]) {
               a=array[i];
               array[i]=array[j];
               array[j]=a;             
           }            
        }       
    }
    console.log(`The Given   ${str}  STRING ALPHABETIC Order Is: `+array.join(''));
    return ;

}
alpha("hi dear")
