import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import QuestionCard from "../components/QuestionCard";
import SearchBar from "../components/SearchBar";

const QuestionListPage = ({ searchQuery }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("http://localhost:4000/questions");
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  const renderQuestionList = () => {
    let questionList = questions;
    if (searchQuery) {
      questionList = questionList.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return questionList.map(({ title, detail, id }) => {
      return <QuestionCard title={title} detail={detail} id={id} key={id} />;
    });
  };

  return (
    <>
      <SearchBar />
      <div className="list">{renderQuestionList()}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchQuery: state.search.searchQuery,
  };
};

export default connect(mapStateToProps)(QuestionListPage);
