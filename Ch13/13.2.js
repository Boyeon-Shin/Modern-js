//13-02
var var1 = 1;

if(true) {
    var var2 = 2;
    if(true) {
        var var3 = 3;
    }
}
function foo() {
    var var4 = 4;
    // console.log(var4);  // 1
    return var4;  // 2

    function bar() {
        var var5 = 5;
    }
}

console.log(var1);
console.log(var2);
console.log(var3);

//foo();  // 1

var result4 = foo(); // 2
console.log(result4);

console.log(foo());  // 2
console.log(var4);  // ReferenceError
console.log(var5);  //
