import React from "react";
import pen from "../../assets/pen-solid.svg";
import comment from "../../assets/comment-alt-solid.svg";
import blacklogo from "../../assets/blacklogo.svg";
import "./RightSidebar.css";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog </h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18"></img>
          <p>
            Exploring the infrastructure and code behind modern edge functions
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18"></img>
          <p>Jamstack is evolving toward a composable web (Ep. 588)</p>
        </div>
      </div>
      <h4>Featured on Meta </h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18"></img>
          <p> Review queue workflows - Final release....... </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18"></img>
          <p>
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width="18"></img>
          <p>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width="18"></img>
          <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        </div>
      </div>
      <h4>Hot meta posts </h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>15</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>25</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>10</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
