function prime(a) {
    for (i = 2; i < a; i++) {
        if (a % i == 0) {
            console.log(a + "  " + "is  not prime");
            return;
        }
    }
    console.log(a + "   " + "is  prime");
    return;
}
prime(27);
prime(24);
prime(5);
