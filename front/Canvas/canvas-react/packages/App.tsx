import { getCanvasElementById } from "packages/_utils";
import "./app.scss"
import { initCanvasStyle } from "./style";
import { useEffect } from "react";
import { ticTacToe } from "./canvas-colorful-ring/src/tic-tac-toe";

// import { dynamicClock } from "./canvas-colorful-ring/src/dynamic-clock";
function App() {

  useEffect(() => {
    const canvasElement = getCanvasElementById("#canvas");
    const context = canvasElement.getContext("2d");
    if (!context) {
      throw new Error("Canvas context not found");
    }
    initCanvasStyle(canvasElement,context);

    // dynamicClock(context);
    // colorfulRing(context);
    ticTacToe(context);
  });
  return (
    <>
     <div className="app-container">
        <canvas id="canvas"></canvas>
     </div>
    </>
  )
}

export default App
