import React, { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router-dom";

const emojiArray = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
];

const ErrorPage = () => {
  const error = useRouteError();
  const [emoji, setEmoji] = useState(null);

  useEffect(() => {
    setEmoji(emojiArray[Math.floor(Math.random() * emojiArray.length)]);
  }, []);

  return (
    <>
      <div className="error-page">
        <h1>
          {" "}
          {error.status} {emoji}
        </h1>
        <Link to={"/"}>
          <button>Back To Home Page</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
