var calcTip = (bills) => {
    return (bills >= 50 && bills <= 300) ? bills * 0.15 : bills * 0.2;
}
var bills = [125, 555, 44];

var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

var total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Total: " + total);