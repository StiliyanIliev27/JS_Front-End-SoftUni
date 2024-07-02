function roadRadar(speed, area){
    const speedLimit = area === 'motorway' ? 130 :
     area === 'interstate' ? 90 : 
     area === 'city' ? 50 : 20; 

    const isMotorway = area === 'motorway' ? true : false;
    const isInterstate = area === 'interstate' ? true : false;
    const isCity = area === 'city' ? true : false;
    const isResidential = area === 'residential' ? true : false;

    if(speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else{
        const status = speed - speedLimit <= 20 ? 'speeding' :
            speed - speedLimit <= 40 ? 'excessive speeding' : 'reckless driving';
        const difference = speed - speedLimit;  

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');