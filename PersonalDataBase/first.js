var firstName; 
var lastName; 
var age; 
var job;
var birthYear;       
 
let tempAge = ageCalc(birthYear);
birthYear = prompt("Enter Your Birth Year");

console.log("Age : " + tempAge + " " + "years old");
let familyMember = new Array();
//number of family 
let numberOfFamily;
numberOfFamily = prompt("Number of Family  ? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}
console.log("Family Members ");
//Displaying the family member with foreach
familyMember.forEach(function(member) {
   console.log("Family Member  " + (index + 1) + " : " + member);
});

// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");
// Display  the result on console from input 
console.log("Here is your Profile ");
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");
  
let tempAge; 
let isEligibleToVote;
tempAge = parseInt(age);
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}
console.log("Is Eligible to Vote : " + isEligibleToVote);

