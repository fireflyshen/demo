import type { ComponentTokenMap } from './components';
import type { AliasToken } from './alias';

export type OverrideToken = {
  [key in keyof ComponentTokenMap]: Partial<ComponentTokenMap[key]> & Partial<AliasToken>;
};

/** Final token which contains the components level override */
export type GlobalToken = AliasToken & ComponentTokenMap;

export { PresetColors } from './presetColor';
export type { PresetColorType, ColorPalettes, PresetColorKey } from './presetColor';
export type { SeedToken } from './seed';
export type {
  MapToken,
  ColorMapToken,
  ColorNeutralMapToken,
  CommonMapToken,
  HeightMapToken,
  SizeMapToken,
  FontMapToken,
  StyleMapToken,
} from './maps';
export type { AliasToken } from './alias';
export type { ComponentTokenMap } from './components';
