function solution(n) {

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2*2;
    }

    if (n % 2 === 1) {
        return n  + solution(n - 2);
    } else {

        return n * n + solution(n - 2);
    }
}


