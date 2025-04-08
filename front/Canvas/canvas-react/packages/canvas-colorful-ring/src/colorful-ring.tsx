import { genColorfulRing } from "@canvas/utils";

export function colorfulRing(context: CanvasRenderingContext2D | null) {
  if (!context) {
    throw new Error("Canvas context not found");
  }
  context.beginPath();
  context?.translate(400, 400);
  context?.arc(0, 0, 200, 0, Math.PI * 2, true);
  context!.lineWidth = 7;
  const colorful = genColorfulRing(context);
  context.strokeStyle = colorful;
  context?.stroke();
  let angle = 0;
  function animate() {
    context?.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // 在平移和旋转前创建渐变
    // 这样渐变会固定在绝对坐标上
    const colorful = genColorfulRing(context!);

    context!.save();
    context!.rotate(angle);
    context!.beginPath();
    context?.arc(0, 0, 200, 0, Math.PI * 2, true);
    context!.lineWidth = 7;
    context!.strokeStyle = colorful;
    context?.stroke();
    context?.restore();

    angle += 0.01;
    requestAnimationFrame(animate);
  }

  animate();
}
