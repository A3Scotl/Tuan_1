var bill = 275; 
var tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`Bill : ${bill}, Tip: ${tip.toFixed(2)}, Tong: ${bill + tip}`);