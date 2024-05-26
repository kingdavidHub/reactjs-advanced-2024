import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [score, setScore] = useState("5");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceHolder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters"
    : "Optional Feedback";

  const formHandler = (e) => {
    e.preventDefault();
    onSubmit({score, comment});
    setScore("5");
    setComment("");
  };

  const labelStyles = {
    color: "black",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="feedback-form">
        <form onSubmit={formHandler}>
          <fieldset>
            <h3>Feedback Form</h3>
            <label
              htmlFor="score"
              style={
                Number(score) < 5 ? { color: "red" } : { color: "limeGreen" }
              }
            >
              <span style={labelStyles}>Score :</span> <b>{score}</b> ⭐
            </label>
            <input
              type="range"
              id="score"
              min="1"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />

            <div className="comment">
              <label htmlFor="comment" style={labelStyles}>
                Comment :
              </label>
              <textarea
                name="comment"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={textAreaPlaceHolder}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isDisabled}
              // style={{ backgroundColor: isDisabled ? "gray" : null }}
              // style={{ backgroundColor: isDisabled ? "darkGray": null}}
              style={
                isDisabled
                  ? {
                      backgroundColor: "darkGray",
                      color: "#fff",
                      cursor: "not-allowed",
                    }
                  : null
              }
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
