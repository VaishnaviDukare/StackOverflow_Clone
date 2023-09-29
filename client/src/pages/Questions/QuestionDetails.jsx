import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";
import upVote from "../../assets/sort-up.svg";
import downVote from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar.jsx";
import "./Questions.css";
import { postAnswer } from "../../actions/questions";
import DisplayAnswer from "./DisplayAnswer";
import { deleteQuestion ,voteQuestion} from "../../actions/questions";
const QuestionDetails = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "http://localhost:3000";
  const { id } = useParams();
  const questionList = useSelector((state) => state.questionsReducer);
  const [Answer, setAnswer] = useState(" ");
  const User = useSelector((state) => state.currentUserReducer);
  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer");
      Navigate("/Auth");
    } else {
      if (Answer === " ") {
        alert("Enter the answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId:User.result._id
          })
        );
      }
    }
  };
  const handleshare = () => {
    copy(url + location.pathname);
    alert("Copied url :" + url + location.pathname);
  };

  const handleDelete =()=>{
    dispatch(deleteQuestion(id,Navigate));
  }

  const handleDownVote=()=>{
    dispatch(voteQuestion(id,'downVote',User.result._id));
  }
  const handleUpVote=()=>{
    dispatch(voteQuestion(id,'upVote',User.result._id));
  }
  return (
    <div className="question-details-page">
      {questionList?.data === null ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {questionList?.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upVote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}
                      ></img>
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downVote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      ></img>
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button
                            type="button"
                            className="edit-question-btn"
                            onClick={handleshare}
                          >
                            Share
                          </button>
                          {
                            User?.result?._id === question?.userId && (
                            <button type="button" className="edit-question-btn" onClick={handleDelete}>
                            Delete
                          </button>
                            )
                          }
                          
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#008d68" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleshare={handleshare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      onChange={(e) => {
                        setAnswer(e.target.value);
                      }}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your answer"
                    ></input>
                    <p>
                      Browser other question Tagged
                      {question.questionTags.map((tag) => (
                        <Link to="/Tags" key={tag} className="ans-tags">
                          {tag}
                        </Link>
                      ))}{" "}
                      or
                      {
                        <Link
                          to="/AskQuestion"
                          style={{ textDecoration: "none", color: "#009dff" }}
                        >
                          ask your own question
                        </Link>
                      }
                    </p>
                  </form>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
