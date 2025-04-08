export function getCanvasElementById(id: string): HTMLCanvasElement {
  if (id[0] !== '#') {
    throw new Error('id must start with #');
  }

  const canvas = document.querySelector<HTMLCanvasElement>(id);

  if (!canvas) {
    throw new Error(`Canvas element with id ${id} not found`);
  }

  return canvas;
}

export * from "./colorful-ring"

export * from "./dynamic-clock"
