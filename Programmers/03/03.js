function mainSolution(a, b, c) {
    let answer;

    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;

    return answer;
}
console.log(mainSolution(8, 2, 3))