function calcBMI(mass, height) {
    return (mass / (height * height)).toFixed(2);
}

function Person(fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.mbi = calcBMI(mass, height);
}
var john = new Person("John", 92, 1.95);
var marks = new Person("Marks", 78, 1.69);
console.log(marks);
console.log(john);

function checkHeights() {
    if (john.mbi > marks.mbi)(
        console.log(`John's BMI (${john.mbi}) is higher than Mark's (${marks.mbi})!`)
    )
    else if (john.mbi > marks.mbi) {
        console.log(`Johns BMI (${john.mbi}) = Marks (${marks.mbi})`)

    } else {
        console.log(`Mark's (${marks.mbi}) is higher than John's BMI (${john.mbi})!`)


    }
}
checkHeights()