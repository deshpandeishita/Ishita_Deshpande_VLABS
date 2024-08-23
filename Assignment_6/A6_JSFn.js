/*function Areat(){
    var s1= (document.getElementById("side1")).valueAsNumber;
    console.log('Side 1 length: '+ s1);
    var s2= (document.getElementById("side2")).valueAsNumber;
    console.log('Side 2 length: '+ s2);
    var s3= (document.getElementById("side3")).valueAsNumber;
    console.log('Side 3 length: '+ s3);

    var s=(s1+s2+s3)/2;
    //console.log(s)
    var temp= s*(s-s1)*(s-s2)*(s-s3);
    //console.log(temp);
    var areatrian= Math.sqrt(temp);
    console.log('Area of Triangle is: ' + areatrian);
    
}

function Areac(){
    var r= (document.getElementById("r")).valueAsNumber;
    console.log('Radius of Circle: '+ r);
    var pi=3.142; 

    var areacircle= pi*r*r;
    console.log('Area of Triangle is: ' + areacircle);
} 

function vowel(){
    var str=(document.getElementById("str")).valueAsString;
    let count=0;
    for (let i=0; i < str.length; i++)
    {
        if (str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u')
        {
            count=count+1;
        }
    }
    // return number of vowels
    console.log(`There are ${count} vowels in ${str}.`);
}

function simpinterest(){
    var p= (document.getElementById("p")).valueAsNumber;
    console.log('Initial Principle Cost: '+ p);
    var t= (document.getElementById("t")).valueAsNumber;
    console.log('Time (in years): '+ t);
    var r=0.03;
    console.log('Annual Interest rate: '+ r);

    var ir= r*t;
    //console.log(ir)
    var temp= 1+ir;
    //console.log(temp);
    var simpinterest= p*temp;
    console.log('Simple Interest is: ' + simpinterest);
} 

function prime() {
var number= (document.getElementById("number")).valueAsNumber;
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
} 

function factorial(){
    var num = (document.getElementById("num")).valueAsNumber;
    if (num < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    
    // if number is 0
    else if (num === 0) {
        console.log(`The factorial of ${num} is 1.`);
    }
    
    // if number is positive
    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }
} */

