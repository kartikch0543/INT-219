console.log(localVar);
let localVar;

function test() {
    let x = "43.9"; 
    let y = "43 mk"; 

    
    let parsedX = parseInt(x); 
    let parsedY = parseInt(y); 

    
    let numberX = Number(x); 
    let numberY = Number(y); 

    console.log("Parsed X (parseInt):", parsedX);
    console.log("Parsed Y (parseInt):", parsedY);
    console.log("Number X (Number):", numberX);
    console.log("Number Y (Number):", numberY);

    localVar = "I am inside a function";
    console.log(localVar);
}

test();
console.log(localVar);