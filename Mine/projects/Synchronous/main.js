//1. Synchronous Console Logging

// console.log('start');
// console.log('middle');
// console.log('end');

///////////////////////////////////////////////////

// 2. Using setTimeout with Delayed Output

// console.log('start');
// setTimeout(function() {
//     console.log('end');
    
// }, 1000)

///////////////////////////////////////////////////

//3. Delayed Logging with setTimeout

// setTimeout(function(){
//     console.log('waiting...');
    
// }, 2000)

///////////////////////////////////////////////////

//4. Loop with setTimeout

// for (let i = 1; i <= 3; i ++){
//     setTimeout(() => {
//         console.log(i);
        
//     }, 1000);
// }

///////////////////////////////////////////////////

//5. Correcting Loop with setTimeout and Closure