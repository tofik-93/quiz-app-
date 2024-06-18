import React, { Fragment,   useEffect,useState } from "react";
import '@mdi/font/css/materialdesignicons.css';
import { Helmet } from 'react-helmet';
import M from 'materialize-css'
import { useHistory } from 'react-router-dom';
import questions from '../question'; 
import correcNoification from '../assets/audio/correct.mp3'
import WrongNoification from '../assets/audio/wrong.mp3'
import buttonNotication from '../assets/audio/button.mp3'
import { useActionData } from "react-router-dom";
import {useNavigate } from 'react-router-dom';
import classnames from "classnames";
// import isEmpty from "../utilis/is-empty"; 
const Play1 = () => {
 
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [nextQuestion, setNextQuestion] = useState({});
  const [previousQuestion, setPreviousQuestion] = useState({});
  const [answer, setAnswer] = useState('');
  const [numberofQuestion, setNumberofQuestion] = useState(questions.length);
  const [numberOfAnswerQuestion, setNumberOfAnswerQuestion] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hints, setHints] = useState(5)
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongtAnswers] = useState(0);
  const[preRanNum , setPreRanNum] = useState([]) 
  const[fiftyFifty , setfiftyfifty] = useState(2) 
  const [usedfiftyfifty, setUsedFifty] = useState(false)
  const [time,setTime] = useState({minutes:0, seconds:0})
  const navigate= useNavigate();


  const [prevButDis, setPrevButDis] = useState(true)
  const [nexButDis, setNexButDis] = useState(false)
 const wrongsound = React.createRef()
 const  correctSound = React.createRef()
 const buttonsound = React.createRef()

    //  useEffect(() => {
  //   showOptions();
  // }, [currentQuestion, nextQuestion, previousQuestion, answer]);

  useEffect(() => {
    let interval
displayQuestions();
startTimer();

return () =>{
clearInterval(interval);

}

  }, []);

  
const handleOptionClick = (e) => {
 
  if(e.target.innerHTML === currentQuestion.answer){
  
  setTimeout(()=>{
  if(correctSound.current)
  {
  correctSound.current.play();}
  }, 500)
  correctAnswer()
  }
  else{
    setTimeout(()=>{
      if(wrongsound.current)
      {
      wrongsound.current.play();
    }
    }, 500)
     wrongAnswer()

  }
  }

  const handleButtonClick=()=>{
    playButtonSound();
  
  };


const playButtonSound = () => {
  buttonsound.current.play();
}
  const correctAnswer = () => {
    M.toast({
      html:'Correct Answer',
      classes:'toast-valid',
      displayLength:1500
    })

     setScore(prevCorrectAnswers=>prevCorrectAnswers  +1);
     setCorrectAnswers(precorans=>precorans +1);
     setCurrentQuestionIndex(pcqI => pcqI +1);
     setNumberOfAnswerQuestion(prfAnsQu => prfAnsQu +1);
 
     if(nextQuestion === questions.length-1 ){
      
      endGame()
    }
    else{
      displayQuestions(questions,currentQuestion, nextQuestion, previousQuestion)
    }
        }
  const wrongAnswer = () => {
    navigator.vibrate(1000)
    M.toast({
      html:'wrong Answer',
      classes:'toast-invalid',
      displayLength:1500
    })

   
      setWrongtAnswers(preWrongAnser=>preWrongAnser+1)
      setCurrentQuestionIndex(prevIndex => prevIndex +1);
      setNumberOfAnswerQuestion(prevNum=> prevNum +1)
      if(nextQuestion === questions.length-1 ){
        console.log(nextQuestion)
        endGame()
      }
      else{
        displayQuestions(questions,currentQuestion, nextQuestion, previousQuestion)
      }
        
      
  }
  const displayQuestions = () => {
      const currentQuestion = questions[currentQuestionIndex] ;
       const nextQuestion =  questions[currentQuestionIndex-1]
        const previousQuestion=questions[currentQuestionIndex+ 1]
    
    // if (isEmpty(questions)) {
    //   questions = [...questions];
    //   currentQuestion= questions[currentQuestionIndex]
    //   nextQuestion = questions[currentQuestion + 1];
    //   const answer = questions.answer 
      setCurrentQuestion(currentQuestion);
      setNextQuestion(nextQuestion);
      setPreviousQuestion(previousQuestion);
      setAnswer(answer);
      setNumberOfAnswerQuestion(questions.length)
      
      showOptions();
      
      handleDisBut();
      setPreRanNum([])
    }

    
  const  handleHints = () => {
    if(hints> 0){
      const options = Array.from(document.querySelectorAll('.option'))
      let indexOfAnswer;
      options.forEach((option, index) =>{
        if(option.innerHTML=== currentQuestion.answer){
          indexOfAnswer = index
        
        }
      })
      
      while(true){
        const randomNumber = Math.round(Math.random()* 3);
        if(randomNumber !== indexOfAnswer && !preRanNum.includes(randomNumber)){
          options.forEach((option , index)=>{
            if(index === randomNumber){
              option.style.visibility ='hidden';
              setHints(prevState=> prevState - 1);
              setPreRanNum(prevState=> prevState.concat(randomNumber))
            }
          })
          break;

        }

        if(preRanNum.length>=3) break;
      }
      }
    }
const showOptions =()=>{
  const options = Array.from(document.querySelectorAll('.option'))
  options.forEach(option =>{
    option.style.visibility ='visible'
  })
  setUsedFifty(false)
}
  const startTimer = ()=> {
  const countDowntime = Date.now() + 180000;
  const interval = setInterval(() => {
  const now = new Date();
  const distance = countDowntime - now;
  const minutes = Math.floor((distance % (1000 *60*60  ))/(1000 *60))
  const seconds = Math.floor ((distance % (1000 *60  ))/(1000))
  if(distance < 0){
  clearInterval(interval);
  setTime({minutes:0, seconds:0 },()=>{
    endGame();
  })

  }
  else{
  setTime({minutes, seconds})
  }
  }, 1000)
  }

  const handleDisBut = () => {
  if(previousQuestion === undefined || currentQuestionIndex === 0){
  setPrevButDis(true)

  }                                                                
  else{
  console.log("the previous question is here ")

  setPrevButDis(false)
  }
  if(nextQuestion === undefined || currentQuestionIndex +1 === numberOfAnswerQuestion){
  setNexButDis(true)
  }
  else{
  setNexButDis(false)
  console.log("the next question is here ")

  }

  }
  // const handlePrevQuesion = () => {
  //   const newIndex = currentQuestionIndex -1;
  //   setCurrentQuestionIndex(newIndex);
  //   setPrevButDis(newIndex === 0);
  //   setNexButDis(false);
  // }
  // const handeleNextQuestion = () => {
  //   const newIndex  = currentQuestionIndex +1;
  //   setCurrentQuestionIndex(newIndex);
  //   setPrevButDis(false);
  //   setNextQuestion(newIndex === numberofQuestion -1)
  // }
  const handleFiftyfifty =() => {
  if(fiftyFifty >0 && usedfiftyfifty === false){
  const options = document.querySelectorAll('.option')
    const randomNumbers = [];
    let indexOfAnswer;
    options.forEach((option, index) => {
      if(option.innerHTML ===answer){
      indexOfAnswer = index;
    }
  })
  let count =0;
  do {
  const randomNumber = Math.round(Math.random()*3);
  if(randomNumber !== indexOfAnswer){
    if(randomNumber.length < 2 && !randomNumbers.includes(randomNumber) &&
      !randomNumbers.includes(indexOfAnswer)){
      randomNumbers.push(randomNumber);
      count++;
    }else{
      while(true){
      const newRandomNimber = Math.round(Math.random() *3)
      if(!randomNumbers.includes(newRandomNimber) && !randomNumbers.includes(indexOfAnswer)){
        randomNumbers.push(newRandomNimber);
        count ++;
        break;
      }}
    }
    
  }
  }while(count< 2);
  options.forEach((option, index)=> {
  if(randomNumbers.includes(index)){
    option.style.visibility='hidden'
  }
  });
  setfiftyfifty(prevState => prevState -1)
  setUsedFifty(true)
  }
  }
const endGame = ()=>{
  alert('Quiz has eneded!')
  const playerStates ={
    score:score,
    numberofQuestion:numberofQuestion,
    numberOfAnswerQuestion:correctAnswer,
    wrongAnswer:wrongAnswer,
    fiftyFifty:2-fiftyFifty,
     hintused:5-hints
    
  }
  console.log(playerStates)
  setTimeout(()=>{
   navigate('/play/quizSummary', playerStates)
  }, 1000)
}
  return (
    <div>
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
  <Fragment>
    <audio ref={correctSound}controls src={correcNoification}></audio>
    <audio ref={wrongsound}controls src={WrongNoification}></audio>
    <audio ref ={buttonsound} controls src={buttonNotication}></audio>

  </Fragment>
        <div className="questions">
          <h2>Quizz Mode</h2>
          <div className="lifeline-container">
            <p>
              <span onClick ={handleFiftyfifty} className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
              <span className="lifeline">{fiftyFifty}</span>
            </p>
            <p>
              <span  onClick = {handleHints} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">
              <span className="lifeline">{hints}</span>

              </span>
            </p>
          </div>
          <div className="timer-container">
            <p>
              <span className="left" style={{ float: 'left' }}>
               {currentQuestionIndex + 1} to {numberofQuestion}
              </span>
              <span className="right"> 
                <span className="mdi mdi-clock-outline mdi-24px">{time.minutes}:{time.seconds}</span>
              </span>
            </p>
            
            <h1>{currentQuestion.questions} </h1>
          </div>
          <div className="options-container">
            <p onClick={handleOptionClick} className="option">{currentQuestion.optA}</p>
            <p onClick={handleOptionClick} className="option">{currentQuestion.optB}</p>
          </div>
          <div className="options-container">
            <p onClick={handleOptionClick} className="option">{currentQuestion.optC}</p>
            <p onClick={handleOptionClick} className="option">{currentQuestion.optD}</p>
          </div>
 
          <div className="button-container">
            <button
            className={classnames('',{'disable':prevButDis})}
            id ="previous-button"
            onClick={handleButtonClick}
            disabled={prevButDis}>
            Previous
            </button>
            <button
            
        className={classnames('',{'disable':nexButDis})}
        id= "next-button"
            onClick={handleButtonClick}
            disabled={nexButDis}
            >
              Next
              </button>
            <button 
           id ="quit-button"
            onClick={handleButtonClick}>Quit</button>
          </div>
        </div>
      </Fragment>
    </div>
  );
};


export default Play1;
