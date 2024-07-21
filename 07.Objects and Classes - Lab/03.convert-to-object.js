function convertToObject(input){
    const object = JSON.parse(input);
    const entries = Object.entries(object);
    for(let [key, value] of entries){
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');