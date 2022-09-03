import {Animal} from './animal.js';

class Cat extends Animal {
    hide(){
        console.log(`this ${this.name} is hidding at somewhere.`);
    }
}


let cat = new Cat('cat');

cat.run(1);
cat.hide();
cat.stop();


