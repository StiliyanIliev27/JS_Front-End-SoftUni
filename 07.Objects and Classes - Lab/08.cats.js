function cats(input){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
           console.log(`${this.name}, age ${this.age} says Meow`); 
        }
    }

    const cats = [];
    input.forEach(entry => {
        const [name, age] = entry.split(' ');
        cats.push(new Cat(name, age));
    });
    cats.forEach(cat => cat.meow());
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);