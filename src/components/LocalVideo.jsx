import React from "react";
import AndrewTate from "../assets/video/AndrewTate.mp4";
import ReactPlayer from "react-player";

const LocalVideo = () => {
  return (
    <>
      <div className="video-container">
        <h1>Local Video</h1>
        {/* <video src={AndrewTate} muted={true} autoPlay={true} controls /> */}


        {/* Mathod 2 using react player */}
        <ReactPlayer className="react-player" url={AndrewTate}  playing={false} volume={0.5} controls />
      </div>
    </>
  );
};

export default LocalVideo;
