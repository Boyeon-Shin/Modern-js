function solution(n) {
    let result = n % 2 !== 1 ? false : true;
    let num = 0;

    for (let i = 0; i <= n; i++) {
        if (result) {
            num += i % 2 === 1 ? i : 0;
        } else {
            num += i % 2 === 0 ? i * i : 0;

        }
    }
    return num

}
var result2 = solution(9);
console.log (result2);