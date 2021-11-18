function alpha(str) {
    var array = str.split('');
    var temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if (array[i]>array[j]) {
               temp=array[i];
               array[i]=array[j];
               array[j]=temp;             
           }            
        }       
    }
    console.log(`The Given   ${str}  STRING ALPHABETIC Order Is: `+array.join(''));
    return ;

}
alpha("hi dear")
