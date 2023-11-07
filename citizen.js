export class Citizen{

    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    setAddress(address){
        this.address = address;
    }

    getInfo(){
        console.log(`Resident ${this.name} ID(${this.id}) resides at ${this.address}`);
    }
}