// global scope / window scope
var a = 1;

function test() {
    var b = 2;

    return b;
}

function test2() {
    var c = 3;

    return c;
}

console.log(test() + test2());