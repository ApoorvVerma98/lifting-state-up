import React, { useState } from "react";
import ChildComponent from "./ChildComponent.js";

function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} setMessage={setMessage} />
    </div>
  );
}

export default ParentComponent;
