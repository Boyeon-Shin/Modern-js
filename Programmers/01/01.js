function solution(n) {
        if (n % 2 === 1) {
           return odd(n);
        } else {
            return even(n);
        }
}

var odd = function (n) {
    var result = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            result += i;
        }
    }
    return result
}

    var even = function (n) {
        var result2 = 0;
        {
            for (var i = 0; i <= n; i++) {
                if (i % 2 === 0) {
                    result2 += i * i;
                }
            }
            return result2

        }
    }

    console.log(solution(7));
    console.log(solution(10));

