//charAt return string at given index
var myString = 'Virtual Labs';
console.log(myString.charAt(9));

//concat adds two strings
var s1="Virtual Labs";
var final=s1.concat(" Audit"," Course");
console.log(final);

//indexOf searches for string within it
var a='Virtual Lab Audit Course 2023';
if (a.indexOf("Lab")!=-1)
    console.log('Found');

//prints the letter from to given no in brackets
var word="Trainee";
console.log(word.substring(0,4)); 
console.log(word.substring(2,4));

//replace fn replaces specific string
var str = 'Audit Course 2023-24';
console.log(str.replace(/Course/i, "Certification"));

//changes string to all uppercase letters
var c = 'Frontend Devlopment';
c = c.toUpperCase();
console.log(c);
