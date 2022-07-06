import React, { useEffect, useState } from "react";

function Hooks() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black");
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    useEffect(() => {
      const changeColorOnClick = () => {
        if(color === "black") {
          setColor("red");
        } else {
          setColor("black");
        }
      };
  
      document.addEventListener("click", changeColorOnClick);
  
      return () => {
        document.removeEventListener("click", changeColorOnClick);
      };
    }, [color]);
  
    return (
      <div>
        <div>{count}</div>
        <button onClick={incrementCount}>Increment</button>
  
        <div
          id="myDiv"
          style={{
            color: "white",
            width: "100px",
            height: "100px",
            backgroundColor: color,
          }}
        >Change Color</div>
      </div>
    );
}

export default Hooks
