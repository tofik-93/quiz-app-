import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Quizint from './Components/quiz/Quizinst';
import Play from './Components/Play';
import QuizSummary from './Components/quiz/QuizSummery';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play/instructions" element={<Quizint />} />
      <Route path="/play/Quiz" element={<Play />} />
      <Route path="/play/Quiz/summary" element={<QuizSummary/>} />


      </Routes>
    </Router>
  );
}

export default App;
