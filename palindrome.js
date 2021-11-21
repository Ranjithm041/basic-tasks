function palindrome(a) {
    let palin = a.length;  
    for (var i = 0; i <palin; i++) {
        if (a[i] == a[palin-1-i]) {
            console.log(a + " " + " is polindrome");
            return ;
        }
        else {
            console.log(a + " " + "is not a polindrome");
            return ;
        }
    }
}
palindrome("mam") 
palindrome("hi")
