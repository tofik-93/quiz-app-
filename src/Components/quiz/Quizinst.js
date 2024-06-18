import React, {Component, Fragment} from 'react'
import {Link } from 'react-router-dom'
// import {Helmet} from 'react-helmet'



const Quizint = () => (
<Fragment>
    {/* <Helmet><title>Quiz Instruction -Quiz App</title></Helmet> */}
    <div className="inst containter">
        <h1>How to play the Game</h1>
        <p>Ensure  you read this gudide from to fininsh</p>
        <ul className="browser-default" id ="main-list">
            <li>The game has duration of 15 minutes and end as soon as your time is elapses</li>
        <li>Each game consists of 15 questions.</li>
            <li>Every question contains 4 options</li>
      <li> Select the option which best answers the question by clicking or(it selecting) it
      </li>
     <li> Each game has 2 lifelines namely :
        <ul id ="sublist">
            <li>2 50-50 chances</li>
            <li>5 Hints </li>
        </ul>
     </li>
     <li> Selecting a 50-50 lifeline by clicking the icon </li>
       <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
       will remve 2 wrong answers, leaving correct answer and one wrong answers
       <li> Using a hint by clicking the icon
        <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
        will remove one wrong answer leaving two wrong answers and one correct answer and You can use as many hints as possible on single question
       </li>
       <li> Feel free to quit (or retrie from) the game at any time.In that case your score will be reveal</li>
       <li> The timer start as soon as the game loads</li>
       <li>Let's do this if you think you've got what it takes?</li>
        </ul>
        <span className="left"><Link to="/">No take me back</Link></span>
        <span className="right"><Link to="/play/quiz">Okay , Let's do this</Link></span>
        <span className="left"><Link to="/"></Link></span>
    </div>
</Fragment>
    )


export default Quizint;