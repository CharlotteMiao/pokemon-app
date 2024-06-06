import "./App.css";

import { useEffect, useState } from "react";
function App() {
  /* 
    1. Using any API consumption tool (ex. Axios, Fetch), make a request to the URL provided from a button labeled,
        'Get Question'.
    2. Parse the returned object for the 1st TRUE/FALSE (boolean) question; feel free to copy-paste the link into
        a browser or console log it to understand the return object.
    3. Display the question
    4. On a second button, "Display Answer", display the answer.
    5. Using any *imagineable means, implement a user-actioned event to go through the above steps and
    get a new question.
    
    *Make use of as many React hook/built-in methods for demonstration of skills, knowledge*    
    **Don't worry about CSS/stylization.**
    
    
*/

  const [firstBoolean, setFirstBoolean] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy";

  const getData = async () => {
    const result = await fetch(apiUrl);
    const data = await result.json();
    const questions = data.results;
    if (questions && questions.length > 0) {
      let q = questions.filter((item) => item.type === "boolean")[0];
      setFirstBoolean(q);
    }
  };

  const handleShowQuestion = () => {
    getData();
    setShowQuestion(true);
  };
  console.log(firstBoolean);

  return (
    <>
      <div>
        <h1>Trivia Bot </h1>
        <button onClick={handleShowQuestion}>Get Question</button>
        <div>
          {showQuestion &&
            (firstBoolean
              ? firstBoolean.question
              : "question is not available, get question again")}
        </div>

        {showQuestion && (
          <button onClick={() => setShowAnswer(true)}>Show Result</button>
        )}
        <div>
          {showAnswer &&
           (firstBoolean &&
            firstBoolean.correct_answer
              ? firstBoolean.correct_answer
              : "answer is not available")}
        </div>
      </div>
    </>
  );
}
export default App;
