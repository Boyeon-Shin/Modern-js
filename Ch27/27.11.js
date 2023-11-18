const arr = [];
console.time('Array performance Test');
for(let i = 0; i <10000000; i++ ) {
    arr[i] = i;
}
console.timeEnd('Array Performance Test');

const obj = {};
console.time('object Performance');

for (let i = 0; i < 1000000; i++){
    obj[i] = i;
}
console.timeEnd('Object Performance Test');
