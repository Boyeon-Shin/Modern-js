function min(a, b, c) {
    let answer;
    if(a < b && a < c) {
        answer = a;
    } else if (b < a && b< c) {
        answer = b;
    } else if (c < a && c < b) {
        answer = c;
    }
    return answer;
}
console.log(min(1, 2, 3))