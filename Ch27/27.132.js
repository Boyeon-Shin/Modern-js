const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' }
];
users.findIndex(user => user.id === 2); // 1

users.findIndex(user => user.name === 'Park'); // 3

function predicate(key, value) {
    return item => item[key] === value;
}

users.findIndex(predicate('id', 2)); // 1

users.findIndex(predicate('name', 'Park')); // 3





