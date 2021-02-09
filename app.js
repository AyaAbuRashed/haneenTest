'use strict';
let Name;
let score;
Name =prompt('what\'s your Name?');
let age;
age =prompt('How old are you?')
alert('Hi'+ '  '+'' +Name+ '  ' +'answer the following question  by Yes or no please');
let continents;
continents=prompt('Is the number of continents of the world 7?') 
if  (continents.toLocaleLowerCase()==='yes'||'y'){
    alert('It is Correct');
}else {
    alert('It is not Correct');
}
let num ;
num=prompt('The number of parts of the Quran is 30?')
if  (num.toLocaleLowerCase()==='yes'||'y'){
    alert('It is Correct');
}else {
    alert('It is not Correct');
}
let houer=prompt('The number of hours of the day is 30');
switch(houer.toUpperCase()){
    case 'NO':
    case 'N':
        alert('It is Correct');
        break;
    case 'YES':
    case 'Y':
        alert('It is not Correct');
        break;
    default:
        alert('It is not Correct');
}
let week=prompt('The number of days of the week is 5');
switch(week.toUpperCase()){
    case 'NO':
        case 'N':
        alert('It is Correct');
        break;
    case 'YES':
        case 'Y':
        alert('It is not Correct');
        break;
    default:
        alert('It is not Correct');
}
let sky=prompt('The Sky color is blue?');
switch(sky.toUpperCase()){
    case 'YES':
        case 'Y':
        alert('It is Correct');
        break;
    case 'NO':
        case 'N':
        alert('It is not Correct');
        break;
    default:
        alert('It is not Correct');
}
let q6=prompt('what number of finger hand?')
if(q6==5){
    alert('it is correct')
    score++;
    console.log(score);
}else{
    for(let i=0;(i<4)&&(q6!=5);i++ ){
        q6=prompt('what number of finger hand?')
    }
}alert('the correct answer is 5')
//let Drink