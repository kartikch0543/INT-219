// function isVaildUser(username, password) {
//     if (username === "admin" && password === "1234") {
//         return true; 
//     }
//     return false; 
// }


// console.log(isVaildUser("admin", "1234")); 
// console.log(isVaildUser(" ", "1234"));     
// console.log(isVaildUser("admin", " "));    
// console.log(isVaildUser(" ", " "));        
// console.log(isVaildUser("admin", "admin")); 

// function isEligibleForDiscount(age, isMember) {
//     if (age >= 60 || isMember) {
//         return true; 
//     }
//     return false; 
//     console.log(iaEligiibleForDiscount(60, flase));
//     console.log(isEligibleForDiscount(60, true));
//     console.log(isEligibleForDiscount(59, false));
//     console.log(isEligibleForDiscount(59, false));
// }
// function toggle(value) {
//     return value === true ? false : true; 
// }
// console.log(toggle(true));  
// console.log(toggle(false));
function isVaildUser(str) {
    if (str.trim() === "") {
        return false; 
    }
    return true;
}
console.log(isVaildUser("Hello"));
console.log(isVaildUser(" "));
console.log(isVaildUser("Code"));
console.log(isVaildUser(" "));