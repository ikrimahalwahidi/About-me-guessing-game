'use strict'

alert('hello student');

let feeling = confirm('are you understand lecture');
if (feeling === true) {
    console.log('thats great');
} else {
    console.log('i will repeat');

}

let favouriteTeacher = prompt('who is the best teacher?');
favouriteTeacher = favouriteTeacher.toLowerCase();
console.log(favouriteTeacher);


let favouriteSubject = prompt('what do you like Arabic || english?');
favouriteSubject = favouriteSubject.toUpperCase();
console.log(favouriteSubject);



let major = confirm('do you like a software');
if (major === true) {
    console.log('thats great');
} else {
    console.log('why your here?');

}

let goal = confirm('are you sure to be in 401');
if (goal === true) {
    console.log('i hope so');
} else {
    console.log('do the best');

}

let bmw = confirm('is bmw  fastest car');
if (bmw === true) {
    console.log('great');
} else {
    console.log('search about it');

}

let time = confirm('are you prefere 9 am to take a lecture ?');
if (time === true) {
    console.log('very early');
} else {
    console.log('thats great');

}

// let time = prompt('are you prefere 9 am to take a lecture ?');


// switch (time.toLowerCase()) {
//     case '9 am':
//         console.log('very early');
//         break;
//     case '11 am':
//     case '12 am':
//         console.log('thats good ');
//         break;

//     default:
//         console.log('sorry we cant');
//         break;
// }
