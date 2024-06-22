import React from "react";

const Ad = ({ vertical = false }) => {
  return (
    <div
      style={{
        width: "100%",
        height: vertical ? "900px" : "300px",
        boxShadow: "0px 0px 10px 5px rgb(0,0,0,0.1)",
        marginBlock: "50px",
      }}
    >
      Ad
    </div>
  );
};

export default Ad;
