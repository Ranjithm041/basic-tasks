function fizz(num) {
    for (let i = 1; i <=num; i++) {
       if(i%3==0 && !(i%5==0 && i%3==0 && i%5==0)){
          console.log("FIZZ");

       }else if(i%5==0 && !((i%5==0 && i%3==0) && i%3==0)) {
           console.log("BUZZ");
           
       } else if(i%5==0 && i%3==0) {
           console.log("FIZZ BUZZ");
       }
        else{
            console.log(i);
        }
    }
}
fizz(30)

