const a = prompt("enter number");
if (a%3===0 && a%5!==0) {
    console.log("Fizz")
}else if(a%5===0 && a%3!==0) {
    console.log("Buzz")
}else if (a%15===0) {
    console.log("FizzBuzz")
}else if(a%1===0){
    console.log(a)
}else{
    console.log("Please Input number")
}

//exercise2
const x1 = prompt(), x2 = prompt(), x3 = prompt(), x4 = prompt(), x5=prompt();
if (x1>x2 && x1>x3 && x1>x4 && x1>x5){
    console.log(x1)
}else if (x2>x3 && x2>x4 && x2>x5){
    console.log(x2)
}else if (x3>x4 && x3>x5){
    console.log(x3)
}else if (x4>x5){
    console.log(x4)
}else {
    console.log(x5)
}

//exercise3
const num1 = prompt();
const num2 = prompt();
if (num1>num2){
    console.log(num1)
}else if (num2>num1) {
    console.log(num2)
}

//exercise 4
const number1 =prompt()
const number2 =prompt()
const number3 =prompt()
if (number1+number2+number3>0) {
    console.log("+")
}else{
    console.log("-")
}

//exercise5
const x = prompt();
const y = prompt();
if (x>y){
    console.log(true)
}else if (x===y) {
    console.log(false)
}else if(x!==y) {
    console.log("Not sure")
}

//exercise6
const dun = prompt();
if (dun <=100 && dun >= 90) {
    console.log("A")
}else if (dun<90 && dun>79) {
    console.log("B")
}else if (dun<80 && dun>69) {
    console.log("C")
}else if (dun<70 && dun>59) {
    console.log("D")
}else{
    console.log("F")
}

//exercise10
const str1 = prompt();
const lenght1= str1.length;
if (lenght1>10) {
    console.log('The string more than 10 charcters')
}else if (lenght1>5) {
    console.log("The string more than 5 charecters")
}else if (lenght1<1) {
    console.log("Nothing")
}else{
    console.log(lenght1)
}

//exercise7a
const crewStatus = prompt()
if (crewStatus=="true") {
    console.log("Crew ready")
}else{
    console.log("Crew Not Ready")
}

//7b
const computerStatusCode = prompt()
if (computerStatusCode==200) { 
    console.log("Please stand by. Computer is rebooting")
}else if (computerStatusCode==400) {
    console.log("Succes! Computer onilne")
}else{
    console.log("ALERT:Computer offline!")
}

//7c
const shuttleSpeed = prompt();
if (shuttleSpeed>17500) {
    console.log("ALERT:Espace velocity reached")
}else if (shuttleSpeed<8000){
    console.log("ALERT: Cannot maintain ornit") 
}else{
    console.log("Stable speed")
}

//odd or even
const number7 = prompt();
if (number7%2===0) {
    console.log("odd number")
}else{
    console.log("Even number")
}

//exercise8
const bill = prompt()
if (bill>=5000 && bill<=30000) {
    let pay = bill*1.15
    console.log(pay)
}else{
    let pay = bill*1.2
    console.log(pay)
}

//exercise8 
const role = prompt();
if (role=="Employee") {
    console.log("Hello")
}else if (role=="Director") {
    console.log("Greetings")
}else if (role ==""){
    console.log("Please provide role")
}else{
    console.log("Hi")
}

