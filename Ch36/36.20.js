const todos = [
    {id: 1, content:'Html', completed: true},
    {id: 2, content:'css', completed: false},
    {id: 3, content:'js', completed: false },
];
const [, {id}] = todos;
console.log(id);
