

class Animal {

    constructor(name){
        this.name = name;
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} is running with the speed of ${this.speed} km/s!`)
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} is stopping`);
    }
}

export {Animal};