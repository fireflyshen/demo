import { getCanvasElementById } from "@canvas/utils";
import { drawBoard } from "packages/_utils/src/tic-tac-toe";
import { initCanvasStyle } from "packages/style";
import { useEffect } from "react";

export function ticTacToe(context: CanvasRenderingContext2D){

  useEffect(() => {
    const canvasElement = getCanvasElementById("#canvas")
    if (!canvasElement) {
      throw new Error("Canvas element not found");
    }

    const context = canvasElement.getContext("2d")
    if (!context) {
      throw new Error("Canvas context not found");
    }
    initCanvasStyle(canvasElement, context, 800, 800, "#fff");
    drawBoard(context, 300);
  })


}
