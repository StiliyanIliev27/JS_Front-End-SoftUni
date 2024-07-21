function meetings(input){
    const appointments = {};
    for(let details of input){
        const [day, name] = details.split(' ');
       
        if(!appointments[day]){
            appointments[day] = name;         
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for(let key in appointments){
        console.log(`${key} -> ${appointments[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);

