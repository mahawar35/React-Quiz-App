
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Quiz from './components/Pages/Quiz/Quiz';
import Home from './components/Pages/Home/Home';
import Result from './components/Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestion = async (category = "",difficulty= "") => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    // console.log(data);
    setQuestions(data.results);
  }
  return (
    <BrowserRouter>
    <div className="app" style={{ backgroundImage: 'url("./images/ques1.png' }}>
      <Header />
      <Routes>

        <Route path="/" exact element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion} />} />
          
        <Route path="/quiz" element={<Quiz 
        name={name} 
        questions={questions} 
        score={score} 
        setQuestions={setQuestions}
        setScore={setScore} />}/>
           
        <Route path="/result" element={<Result name={name} score={score} />} />
         
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
