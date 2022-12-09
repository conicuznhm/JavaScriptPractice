const leapYear = (year) =>  {

    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  
  };
  

const calDayFromBirth =(birthyYear) =>{
let dayCount = 0;
    for (let year = birthYear; year<= 2022; year++){
        if (isLeapYear(year)){
            dayCount += 365
        }
    }
}

//checkmore