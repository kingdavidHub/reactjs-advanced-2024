import React, { useState } from "react";

const Feedback = () => {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please give proper feedback explaining why the expression is bad");
      return;
    }
    setScore(10);
    setComment("");
    console.log("Form is submited");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="field">
            <label htmlFor="range">Score: {score}</label>
            <br />
            <input
              type="range"
              min={0}
              max={10}
              value={score}
              id="range"
              onChange={(e) => setScore(e.target.value)}
            />
          </div>

          <div className="comment">
            <label htmlFor="comment">Comment</label>
            <textarea
              name=""
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button>Submit</button>
        </fieldset>
      </form>
    </>
  );
};

export default Feedback;
