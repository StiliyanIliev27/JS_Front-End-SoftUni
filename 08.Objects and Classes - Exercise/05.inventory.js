function registerHeroes(input){
    const heroes = [];
    input.reduce((acc, curr) => {
        const [name, level, items] = curr.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items
        }
        heroes.push(hero)
        return acc;
    }, [])
    heroes.sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);