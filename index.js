//How well do you know my friend about Pritam Kumar
var readlineSync = require('readline-sync')
var score = 0;
let userName = readlineSync.question('Enter your name please? ')
console.log(`Welcome! Mr/Mrs.${userName}`);

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

 var quizs = [{question: 'The real name of Pritam Kumar is?  ',answer: 'Shubham Kumar'
 },
 {
   question:'Where does Shubham live in india ',
   answer: 'Ranchi'
 },
 {question: 'Favourite food for Shubham ',
 answer: 'Dhosa'},
 {
   question: 'Favourite tv series ',
   answer: 'Game of throne'
 },{
   question: 'Favourite cartoon ',
   answer: 'Tom and Jerry'
 }];

 
for(i=0; i<quizs.length; i++){
  var currentQuestion = quizs[i]
  // console.log(currentQuestion.question)
  askQuestion(currentQuestion.question, currentQuestion.answer)
}


 console.log(`\n Than you for playing Mr/Mrs. ${userName} your total score is ${score} \n`)