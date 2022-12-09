let checkPrime =(num) => {
    let isPrime = true;
    if(num <= 1 ) return false;
    if(num === 2 ) return true;
    for (let divider = 2; divider < num; divider++){
    
        if (num % divider === 0) isPrime = false;
    
    }
    return isPrime;
};
    
    //declare
    // function printPrime(max) {
    //     for (let i = 2; i<= max; i++){
    //         if(checkPrime(i)) console.log(i);
    //     }
    // }

    // printPrime(20);