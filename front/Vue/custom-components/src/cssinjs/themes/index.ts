import { generate } from '@ant-design/colors';
import genControlHeight from './shared/genControlHeight';
import genSizeMapToken from './shared/genSizeMapToken';
import type { ColorPalettes, MapToken, PresetColorType, SeedToken } from '../index';
import { defaultPresetColors } from './seed';
import genColorMapToken from './shared/genColorMapToken';
import genCommonMapToken from './shared/genCommonMapToken';
import { generateColorPalettes, generateNeutralColorPalettes } from './colors';
import genFontMapToken from './shared/genFontMapToken';

export default function derivative(token: SeedToken): MapToken {
  const colorPalettes = (Object.keys(defaultPresetColors) as Array<keyof PresetColorType>)
    .map((colorKey) => {
      const colors = generate(token[colorKey]);
      return new Array(10).fill(1).reduce((prev, _, i) => {
        prev[`${colorKey}-${i + 1}`] = colors[i];
        return prev;
      }, {}) as ColorPalettes;
    })
    .reduce((prev, cur) => {
      return {
        ...prev,
        ...cur,
      };
    }, {} as ColorPalettes);


  return {
    ...token,
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes,
      generateNeutralColorPalettes,
    }),
    // Font
    ...genFontMapToken(token.fontSize),
    // Size
    ...genSizeMapToken(token),
    // Height
    ...genControlHeight(token),
    // Others
    ...genCommonMapToken(token),
  };
}
