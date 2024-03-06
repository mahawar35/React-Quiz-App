import React, { useEffect, useState } from 'react'
import './Quiz.css';
import { CircularProgress } from '@mui/material';
import Question from '../../Question/Question';

const Quiz = ({name,questions,score,setQuestions,setScore}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions && 
      handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
  ])
  );
  },[currQues, questions]);

  // console.log(options);
  
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
           <span>{questions[currQues].category}</span>
            <span>{score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  )
}

export default Quiz