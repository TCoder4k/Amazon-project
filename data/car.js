class Car {
  model;
  brand;
  speed;
  isTrunkOpen;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.speed = carDetails.speed;
    this.isTrunkOpen = carDetails.isTrunkOpen ?? false;
  }

  go(){
    if(!this.isTrunkOpen){
    this.speed +=5;
    }
    if(this.speed > 200){
        this.speed = 200;
    }
  }
  
  brake(){
    this.speed -= 5;
    if(this.speed<0){
        this.speed =0;
  }
  }

  openTrunk(){
     if(this.speed === 0){
         this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
    return `brand: ${this.brand}, model: ${this.model}, speed: ${this.speed},trunkStatus: ${trunkStatus}`;
  }
}

class RaceCar extends Car {
    acceleration;
    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
    go(){
        this.speed += this.acceleration;
        if (this.speed >300){
            this.speed = 300;
        }
    }
    openTrunk(){}
    closeTrunk(){}
    brake(){
        super.brake();
    }
    displayInfo(){

         return `brand: ${this.brand}, model: ${this.model}, speed: ${this.speed},acceleration: ${this.acceleration}`;
    }
}
  


const car1 = new Car({ brand: "Toyota", model: "Corollar", speed: 0 ,isTrunkOpen: false});

const car2 = new Car({ brand: "Tesla", model: "Model 3", speed: 0, isTrunkOpen: false });

const raceCar = new RaceCar({ brand: "McLaren", model: "F1", speed:0 ,acceleration: 20});


car1.openTrunk();
console.log(car1.displayInfo());
car1.brake();
car2.go();
car2.go();
car2.go();
car2.brake();
console.log(car2.displayInfo());
raceCar.go();
raceCar.go();
raceCar.brake();
console.log(raceCar.displayInfo());
