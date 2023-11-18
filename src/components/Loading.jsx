import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="border-t-4 border-purple-500 border-solid rounded-full animate-spin w-16 h-16"></div>
      </div>
    </div>
  );
};

export default Loading;
