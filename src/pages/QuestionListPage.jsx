import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import QuestionCard from "../components/QuestionCard";
import SearchBar from "../components/SearchBar";
import { getQuestions } from "../store/actions/question-action";

const QuestionListPage = ({ searchQuery, questions, getQuestions }) => {
  useEffect(() => {
    getQuestions();
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
    questions: state.question.questions,
  };
};

const mapDispatchToProps = {
  getQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListPage);
