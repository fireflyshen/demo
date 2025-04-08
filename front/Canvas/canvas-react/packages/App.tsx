import { getCanvasElementById } from "@canvas/utils";
import "./app.scss"
import { initCanvasStyle } from "./style";
import { useEffect } from "react";
import { colorfulRing } from "./canvas-colorful-ring/src/colorful-ring";
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
    colorfulRing(context);
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
