// add more prompt
const leapYear = (year) =>  {

  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

};

let r = checkLeapYear(year);
alert(r);

//// Check

// Ver 1
// const checkLeapYear = (year) => {
//     if (year % 100 === 0){
//         if (year % 400 === 0){
//             return true;
//         }
//         return false;
//     }  if (year % 4 === 0){
//         return true;
//     } else{
//     return false;
//     }
// };

// Ver 2 
// if (year % 100 === 0){
// 
}


