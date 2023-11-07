


const Student ={
    //properties
    firstName: "Bmw",
    Age: 18,

    get getName(){
        return this.firstName;
    },

    get getDetails(){
        return [this.firstName, this.Age];
    },

    
    set setName(name){
        this.name = name;
    }


}

console.log(Student.getDetails);
