const name= new Object();
name.firstName="kartik";
name.lastName="choudhary";
name.age = 20;
name.getDetails=function(){
    return `${this.firstName} ${this.lastName} ${this.age}`;
}
console.log(name.firstName);    
console.log(name.lastName);
console.log(name.age);
console.log(name.getDetails());
name.age= 21;
console.log(name.getDetails());
const person ={
    firstName:"kartik",
    lastName:"choudhary",
    age:20,
    fullname:function(){
        return `${this.firstName} ${this.lastName}`;
    },
    greet: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
  
}