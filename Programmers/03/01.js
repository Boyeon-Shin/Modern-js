function min(a, b, c) {
    let arr = [a, b, c];
    let minNumber = a;

    for (let i = 0; i < arr.length; i++) {
        if (minNumber > arr[i]) {
            minNumber = arr[i];
        }
    }
    return minNumber;
}

console.log(min(1, 3, 2));
