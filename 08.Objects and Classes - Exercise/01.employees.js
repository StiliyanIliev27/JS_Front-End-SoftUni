function solve(input){
    const entries = input.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});
    for(let entry in entries){
        console.log(`Name: ${entry} -- Personal Number: ${entries[entry]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
);