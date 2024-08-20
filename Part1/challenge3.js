function avg(score) {
    var sum = 0;
    for (const a of score) {
        sum += a;
    }
    return (sum / score.length).toFixed(2);
}
var Dolphins_score = [96, 108, 89];
var Koalas_score = [88, 91, 110];
var rsD = avg(Dolphins_score);
var rsK = avg(Koalas_score);
var lose = "Ca 2 deu khong gianh dc cup";
var win  = "gianh duoc cup";

console.log("AVG Dolphins score : " + rsD);
console.log("AVG Koalas score :" + rsK);
if (rsD > rsK) {

    if (rsD >= 100) {
        console.log("Dolphins"+win)
    } else {
        console.log(lose)

    }
} else if (rsD == rsK) {
    console.log("2 doi hoa nhau ");

} else {


    if (rsK >= 100) {
        console.log("Koalas "+win);
    } else {
        console.log(lose)

    }

}