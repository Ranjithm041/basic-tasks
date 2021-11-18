function num(a) {
    if (a < 200 && (!(a >= 110 && a <= 120) && (a !== 150))) {
        console.log("valid");
    }
    else {
        console.log("Invalid");
    }
}
num(20);
num(200);
num(101);
num(119);
num(150);
num(300);
