import React from "react";
import CamVIdeo from "../assets/video/CameraVideo.mp4";

const Video = ({ children }) => {
  return (
    <div className="relative h-full rounded-xl overflow-hidden bg-[#e5e7eb]">

      {/* VIDEO BACKGROUND */}
      <video
        src={CamVIdeo}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY CONTENT */}
      {/* <div className="relative z-10 h-full">
        {children}
      </div> */}

    </div>
  );
};

export default Video;
