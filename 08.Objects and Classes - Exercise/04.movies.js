function solve(input){
    function processMovie(command, curr){
        const commandInfo = curr.split(` ${command} `);
        const name = commandInfo.shift();
        const property = commandInfo.pop();
        if(movies.some(m => m.name === name)){
            const movie = movies.find(m => m.name === name);
            command === 'directedBy' ? movie.director = property
                : movie.date = property;
        }
    }
    const movies = [];
    input.reduce((acc, curr) => {
        if(curr.startsWith('addMovie')){
            const name = curr.split('addMovie ')[1];
            const movie = { name };
            movies.push(movie);
        } else if(curr.includes('directedBy')){
            processMovie('directedBy', curr)
        } else if(curr.includes('onDate')){
            processMovie('onDate', curr)
        }
        return acc;
    }, [])
    movies.forEach(m => {
        if(m.name && m.director && m.date){
            console.log(JSON.stringify(m));
        }
    })
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
);

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
);