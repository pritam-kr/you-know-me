//How well do you know my friend about Pritam Kumar
var readlineSync = require('readline-sync')
const chalk = require('chalk');
var score = 0;
let userName = readlineSync.question('Enter your name please? ')
console.log(`Welcome! Mr/Mrs.${userName}
\n`);


 var quizs = [{question: chalk.bgBlue('The real name of Pritam Kumar is?  \n\n') ,answer: 'Shubham Kumar'
 },
 {
   question:chalk.bgBlue('Where does Shubham live in india? \n\n '),
   answer: 'Ranchi'
 },
 {question: chalk.bgBlue('Favourite food for Shubham? \n\n '),
 answer: 'Dhosa'},
 {
   question: chalk.bgBlue('Favourite tv series? \n\n '),
   answer: 'Game of throne'
 },{
   question: chalk.bgBlue('Favourite cartoon? \n\n '),
   answer: 'Tom and Jerry'
 }];

function askQuestion(myQuestions, myAnswers){
    // console.log(myQuestions, myAnswers)

    var askMyAnswer = readlineSync.question(myQuestions);

    if(askMyAnswer.toUpperCase() === myAnswers.toUpperCase()){
      score = score + 1
      console.log(`\n Wow! You are right...your score is ${score} \n`)
    }else{
      score = score-1 
      console.log(`\n ohh! you are worng...you socre is ${score} \n`)
    }


}

 
for(i=0; i<quizs.length; i++){
  var currentQuestion = quizs[i]
  // console.log(currentQuestion.question)
  askQuestion(currentQuestion.question, currentQuestion.answer)
}


 console.log(`\n Thank you for playing Mr/Mrs. ${userName} your total score is ${score} \n`)