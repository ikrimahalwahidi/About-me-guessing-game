'use strict'

let score = 0;


function question7() {

    let userName = prompt("what's your name please?");
    alert('welcome to my page ' + userName);
    confirm('please answer the question below');

    alert('please answer with only yes/y or no/n');

}

question7();

function question1() {

    let fruite = prompt("do i like a mango?");
    fruite = fruite.toLowerCase();
    if (fruite === 'yes' || fruite === 'y') {

        alert("right i like it much");

    } else if (fruite === 'no' || fruite === 'n') {
        alert("try it its a Delicious");

    }

}
    question1();


    function question2() {


        let time = prompt("do i prefere 9 am to take a lecture ?");
        time = time.toLowerCase();
        if (time === 'yes' || time === 'y') {

            alert("very early");

        } else if (time === 'no' || time === 'n') {
            alert("that's much good");

        }
    }
        question2();


        function question3() {

            let placeOfBirth = prompt("are i born in amman ?");
            placeOfBirth = placeOfBirth.toLowerCase();
            if (placeOfBirth === 'yes' || placeOfBirth === 'y') {

                alert("that's right");

            } else if (placeOfBirth === 'no' || placeOfBirth === 'n') {
                alert("that's wrong");

            }
        }
        question3();

        function question4() {

            let travel = prompt("doi like a travel ?");
            travel = travel.toLowerCase();
            if (travel === 'yes' || travel === 'y') {

                alert("that's right");

            } else if (travel === 'no' || travel === 'n') {
                alert("you should to try traviling");

            }
        }
            question4();






            alert('Welcome to guess num 6');

            alert("you have 4 tries only");

            function question5() {

                let guess = 0;

                let currectNumber = 5;

                for (let i = 0; i < 4; i++) {


                    guess = prompt("let's play with guesses a number between (1-10)");
                    guess = parseInt(guess);
                    if (guess === currectNumber) {
                        alert("yes , you are right ");
                        break;
                    }
                    else if (guess < currectNumber) {
                        alert("too low try again please ");

                    } else if (guess > currectNumber) {
                        alert("too high try again please ");
                    }

                    if (i === 3) {
                        alert(`you out of tries , the currect answer is ${currectNumber} !`);
                    }

                }

            }

            question5();



            // var counter = 1;
            // if (counter === 5) {
            //     alert('Sorry you run out of guesses');
            // }




            /*
            while (counter < 5 && number !== 10) {
                var number = prompt('Guess my favorite number');
                if (number > 10) {
                    alert(' too high! try again please');
                    counter++;
                } else if (number < 10) {
                    alert(' too low! try again please');
                    counter++;
                }
            }
            if (number === 10) {
                alert('That is correct! My favorite number is 10!');
                score++;
                counter = 5;
            } else if (number != 10) {
                alert('the correct answer is 10');
            }
            
            */

            function question6() {

                alert('Welcome to guess num 7');

                let userFavPlayers = ['pirlo', "messi", "ronaldo", "zidan"];



                let exitOutLoops = false;
                let userAnsw;

                let myFavP = "";
                for (let i = 0; i < 6; i++) {
                    userAnsw = prompt('Can you guess my favourite player?');
                    userAnsw = userAnsw.toLowerCase();

                    for (let j = 0; j < userFavPlayers.length; j++) {
                        if (userAnsw === userFavPlayers[j]) {

                            //score++;
                            myFavP = userFavPlayers[j];
                            exitOutLoops = true;
                            alert(`great you got it right ${myFavP} one of my favourite player and all these ${userFavPlayers}  !`);
                            break;
                        }

                    } if (exitOutLoops) {
                        break;
                    }

                    userAnsw = prompt("Sorry , try again");
                    if (i === 0) {
                        alert("sorry you ran out of tries");
                    }
                }

                alert('My favorite player is : pirlo');

            }
        
        question6();
        alert('Good Job!, You got ' + score + ' correct answers!');