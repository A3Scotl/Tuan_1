var calcTip = (bills) => {
    return (bills >= 50 && bills <= 300) ? bills * 0.15 : bills * 0.2;
}

function calcAverage(bill) {
    var sum = 0;
    for (var i = 0; i < bill.length; i++) {
        sum += bill[i];
    }
    return sum / bill.length;
}
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];
for (var i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
var averageTotal = calcAverage(totals);
console.log("Average total: " + averageTotal);
console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Totals: " + totals);