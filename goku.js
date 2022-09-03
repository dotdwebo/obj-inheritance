import {Animal} from './animal.js';
import {obj} from './object.js';


class Pet extends Animal {

    info(){
        console.log(`${obj.name}'s age is ${obj.age} years old.`);
        console.log(`${obj.name}'s animal is ${this.name}`);
        if(!obj.human) console.log(`${obj.name} is not a human`);
    }
}
let gokupet = new Pet('monkey');
gokupet.run(100); // monkey is running with the speed of 100 km/s!
gokupet.info(); // Goku's age is 100 years old. Goku's animal is monkey. Goku is not a human
