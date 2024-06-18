import React from 'react'
import questions from '../../question'; 
import Play1 from '../Play'

const QuizSummary = ()=> {
    const score = 0;
    const numberofQuestionns =0;
    const numberOfAnswerQuestion=0;
    const correctAnswer =0;
    const wrongAnswer =0;
    const usedHints= 0;
    const usedfiftyfifty =0
    return(
    <>
    <div>
    <h1>Congratulations you made it!</h1>
</div>
<div>
<h3>You Can do better</h3>
<h2> Your Score:67%</h2>
<div>
    <p>{`Total Number of Questions ${questions.length}`}</p>
    <p>{`Number of attmpted questions  ${Play1.currentQuestion}`}</p>
    <p>{`Number of Correct Answer ${Play1.correctAnswer}`}</p>
    <p>{`Number of Wrong Answers ${Play1.Wronganswer}`}</p>
    <p>{`Hint used ${Play1.hints}`}</p>
    <p>{`50-5o used ${Play1.fiftyFifty}`}</p>



</div>
</div>
</>
    )
}
export default QuizSummary;