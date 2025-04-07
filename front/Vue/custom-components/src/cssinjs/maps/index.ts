import type { ColorPalettes } from '../presetColor';
import type { SeedToken } from '../seed';
import type { SizeMapToken, HeightMapToken } from './size';
import type { ColorMapToken } from './colors';
import type { StyleMapToken } from './style';
import type { FontMapToken } from './font';



export * from "./font"
export * from "./colors"
export * from "./size"
export * from "./style"

export interface CommonMapToken extends StyleMapToken {
  // Motion
  motionDurationFast: string;
  motionDurationMid: string;
  motionDurationSlow: string;
}

// ======================================================================
// ==                         Map Token                         ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface MapToken
  extends SeedToken,
    ColorPalettes,
    ColorMapToken,
    SizeMapToken,
    HeightMapToken,
    StyleMapToken,
    FontMapToken,
    CommonMapToken {}
