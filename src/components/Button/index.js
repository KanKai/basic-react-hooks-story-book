import React from "react";

function Button() {
  return (
    <div>
      <button onClick={() => alert("Click my Button")}>
        Click me to please!
      </button>
    </div>
  );
}

export default Button;
