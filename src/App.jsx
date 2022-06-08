import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
const App = () => {
  // const [dummy, setDummy] = useState(false);
  const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   console.log("Use effect running");
  //   console.log(dummy);
  // }, []);

  // useEffect(() => {
  //   console.log("Dummy State Change");
  //   console.log(dummy);
  // }, [dummy]);

  useEffect(() => {
    // Calling API using async await
    // const fetchQuestions = async () => {
    //   const res = await axios.get("http://localhost:4000/questions")
    //   setQuestions(res.data)
    // }
    // fetchQuestions()

    // Calling API using axios
    axios.get("http://localhost:4000/questions").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  return (
    <div>
      <h1>React App</h1>
      {/* <button onClick={() => setDummy(!dummy)}>setDummy</button> */}
      {/* <QuestionCard title={"Judul pertanyaan"} detail={"Detail pertanyaan"} /> */}
      {questions.map(({ title, detail }) => {
        return <QuestionCard title={title} detail={detail} />;
      })}
    </div>
  );
};

export default App;
