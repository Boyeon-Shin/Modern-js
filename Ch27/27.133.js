const arr = ['hello', 'world'];

arr.map(x => x.split('')).flat();
//  ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

arr.flatMap(x => x.split(''));
//  ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

