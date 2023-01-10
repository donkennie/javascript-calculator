// const addSubtractMultiply= (a, b)=>{
//    let add= a+ b
//    let subtract= a-b
//    let multiply=a*b
   
   
// if(a > b) { // a= 2, b = 3

// return add;

// }else if(a>b) {
//    return subtract;

// }else if(a<b) {
//    return multiply;
// }

// }
// let result= prompt("input an addition");
//    alert(`"the result is ${9}`);
// console.log(addSubtractMultiply(4,5));

// const prompt=require("prompt-sync")({sigint:true});

// let firstNumber = prompt("Enter your first number: " )
// firstNumber = Number(firstNumber)
// let secondNumber = prompt("Enter your second number: " )
// secondNumber = Number(secondNumber)

// let operator = prompt("Select one of these operators (+, -, *, /): " );

// let result = 0;

// switch(operator){
//     case '+': 
//     result = firstNumber + secondNumber; 
//     break;
//     case '-': 
//     result = firstNumber - secondNumber;
//     break;
//     case '*': 
//     result = firstNumber * secondNumber;
//     break;
//     case '/': 
//     result = firstNumber / secondNumber;
//     break;

//     default:
//         console.log('Invalid operator'); 
// }

// console.log(`Your result is: ${result}`);

// const callback=(n)=>{
//     return n**2
//  }
//  console.log(callback(4));
 
//  function cube(n1, n2){
//  return n1*n2
//  }
//  console.log(cube(5, 4));
 
 //Returning function
 //high order fuction returning another function
//  const higherOrder= n=>{
//    const doSomething= m => {
//     const doWhatEver = t =>{
//       return 2 * n + 3 * m + t;
//     }
//     return doWhatEver;
//    }
//    return doSomething;
//  }
//  console.log(higherOrder(2)(3)(4))
 
 //callback used in the forEach method
 const numbers=[1, 2, 3, 4, 5]
 const sumArray= (arr)=>{
    let sum= 0
    const callback=function(item){
    //    sum+=element
        sum = sum + item;  //15 = 10 + 5
    }
    arr.forEach(callback)
    return sum;
 }
 console.log(sumTotal(numbers));

const sumTotal = (param) => {
    let sum = 0;  
    param.forEach(element => {
        sum += element
    });
    return sum;
}