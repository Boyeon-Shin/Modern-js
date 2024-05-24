const obj = {
    name: 'Lee',
    age : 20,
    alive: true,
    hobby:['traveling', 'tennis']
};

const json = JSON.stringify(obj);
console.log(JSON.stringify(json));

const prettyJSON = JSON.stringify(obj, null , 2 );
console.log(typeof prettyJSON , prettyJSON);

function filter(key, value){
    return typeof value === 'number' ? undefined:value;
}

const strfilteredObject = JSON.stringify(obj, filter);
console.log(typeof strfilteredObject , strfilteredObject);