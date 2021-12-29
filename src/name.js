import React from "react";

const Name = (props) => {
  return (
    <>
      <div className={`name ${props.class}`}>
        <p>My name is {props.name}</p>
      </div>
    </>
  );
};

export default Name;
