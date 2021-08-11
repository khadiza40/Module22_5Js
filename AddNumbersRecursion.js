// 1+2+3+4+5+6+......+n
function AddSummetion(number){
   if (number== 1){
       return 1;
   }
    return number+ AddSummetion(number-1);

}
function AddFactorial(number){
    if (number== 1){
       return 1;
   }
    return number* AddFactorial(number-1);

}


console.log("Summetion of number series: ",AddSummetion(6));
console.log("Summetion of Fibonacci series: ",AddFactorial(6));



