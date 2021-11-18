function  frequent(array){
    let freq = array[0];
    let  mcount = 0,i, j;
    let len = array.length;
    for(let i=0;i<len;i++){
        let count =0;
        for(j=i;j<len;j++){
          if( array[i] ==array[j]) {
            count++;
          }
        }
        if(mcount<count){
            mcount=count;
            freq = array[i]; 
        }
    }
    return freq;
}
console.log(frequent([1,2,4,4,3,3,6]));