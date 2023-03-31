import React from "react";

function ChildComponent(props) {
  const handleClick = () => {
    props.setMessage("Hello from Child!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {props.message}</p>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
}

export default ChildComponent;
