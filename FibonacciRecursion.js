//     const fibo=[0,1];
//    for( let i=2; i<=7; i++){
//     fibo[i] = fibo[i-1] +fibo[i-2];
// }
// console.log(fibo); 

function FindFibonacci(i){

    if(i== 0){
        return 0;
    }
    if(i == 1){
        return 1;
    }
    return FindFibonacci(i-1)+FindFibonacci(i-2) ;
    

}
console.log("Fibonacci Number Series: ",FindFibonacci(6));

