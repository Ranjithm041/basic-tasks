const date =new Date();
const currentY_M_D = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();

const currentyear = date.getFullYear();
const currentmonth = date.getMonth();
const currentdate = date.getDate();

function Agecalculate(dob) {
    let split= dob.split("/");
    let year = +split[2];
    let month = +split[1];
    let date  = +split[0]

    console.log("Today : "+currentY_M_D);  //todaydate
    console.log("Your Date Of Birth is :"+dob);  //input dob
                                
let age= currentyear-year ;
let ageofmonth = currentmonth-month;
let ageofdate = currentdate-date;

console.log(`Your Age is `+age+" Years"  +  " "  +ageofmonth+" Months"  +  " "  +ageofdate+" Days");
}
Agecalculate("04/01/2003");
