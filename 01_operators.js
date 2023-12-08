// local assignment

let value = 3;
console.log(-value);

// pre and postFix

console.log(value++); //3
console.log(++value); //5

console.log(2 ** 2); //power
console.log(2 % 5);  //reminder

// string concact {js give it more prefrencce}
console.log(typeof ("1" + "2"));
console.log(typeof ("1" + 2));
console.log(typeof (1 + "2"));

// precidence works
console.log(1 + 2 + "2"); //32
console.log(1 + (2 + "2")); //122
console.log("1" + 2 + 2); //122

// special number covertion
console.log(+true); // 1
console.log(+"true"); // NaN
console.log(+""); // 0
console.log(+NaN); // NaN
console.log(+null); // 0

// while doing compresion we always compare same dataType else get some unexpected
// happeded and .ts resist it

console.log("2" == 2); // Non stric check with type converstion
console.log("2" === 2);

// compresion operator work diffrent in eqality check and compresion check
console.log(null == 0); //f
console.log(null < 0); //f
console.log(null <= 0); // true

// all false
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined <= 0);
