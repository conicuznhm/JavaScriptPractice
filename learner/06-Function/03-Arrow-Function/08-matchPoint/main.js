
// let calScore = (i) => {
// if (i == "win" )
// return 3;
// else if (i == "draw")
// return 1;
// else return 0;
// }


// console.log(calScore("win"));


let win = prompt ("Enter win time");
let draw = prompt ("Enter draw time");
let calScore = (win, draw, lose) => win * 3 + draw;
let result = calScore(number(w)+ number(d));
alert ("Total Score : ${result}");