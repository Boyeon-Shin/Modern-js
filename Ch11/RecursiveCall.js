// function countdown(n) {
//     if ( n < 0  ) return;
//     countdown(n - 1);
//     console.log(n);
//     // countdown(n - 1);
// }
// countdown(11);

function countdown2(n) {
    if (n <= 1) return 1;
    // console.log( n * countdown2);
    return n * countdown2(n - 1);
}
console.log(countdown2(3));
