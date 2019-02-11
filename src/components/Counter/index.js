import React from "react";

function Button() {
  return (
    <div>
      <button onClick={() => alert("Click my Button")}>
        Click me to hook please!
      </button>
    </div>
  );
}

export default Button;
