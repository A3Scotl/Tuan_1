function BMI(mass, height) {
    return (mass / (height * height)).toFixed(2);
}
var m_mark = 78;
var h_mark = 1.69;
var m_john = 92;
var h_john = 1.95;
var result_bmiM = BMI(m_mark, h_mark);
var result_bmiJ = BMI(m_john, h_john);
console.log("BMI Mark's: " + result_bmiM);
console.log("BMI John's: " + result_bmiJ);
if (result_bmiM > result_bmiJ)(
    console.log("BMI Mark(" + result_bmiM + ") cao hon John(" + result_bmiJ + ")")
)
else if (result_bmiM == result_bmiJ) {
    console.log("BMI Mark(" + result_bmiM + ") = (" + result_bmiJ + ")")

} else {
    console.log("BMI Mark(" + result_bmiM + ") thap hon John(" + result_bmiJ + ")")


}