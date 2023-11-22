function solution(arr, divisor) {
    let answer = [];

    arr.forEach(item => {
        if (item % divisor === 0) {
            answer.push(item);
        }
    })
    answer.sort((a, b) => a - b);

    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}

console.log(solution([1, 2, 3], 3));
