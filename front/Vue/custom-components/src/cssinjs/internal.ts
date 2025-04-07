import type { AliasToken } from "./AliasMap";
import type { ConponentMap } from "./componentMap";
import { computed, ref, type CSSProperties, type Ref, type VNode } from "vue";
import type * as CSS from 'csstype';
import { useToken } from "./token";


export type OverrideComponentMap = ConponentMap;

export type OverrideComponentMapKeys = keyof OverrideComponentMap;


const SKIP_CHECK = '_skip_check_';
const MULTI_VALUE = '_multi_value_';

export type CSSPropertiesWithMultiValues = {

  [K in keyof CSSProperties]:
  | CSSProperties[K]
  | readonly Extract<CSSProperties[K], string>[]
  | {
    [SKIP_CHECK]?: boolean;
    [MULTI_VALUE]?: boolean;
    value: CSSProperties[K] | CSSProperties[K][];
  };
}

// 伪元素
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

type ArrayCSSInterpolation = readonly CSSInterpolation[];

export type InterpolationPrimitive = null | undefined | boolean | number | string | CSSObject;

// 自定义属性
export type CSSOthersObject = Record<string, CSSInterpolation>;

export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos, CSSOthersObject { };

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;

export type UseComponentStyleResult = [(node: VueNode) => VueNode, Ref<string>];
export type VueNode = VNodeChildAtom | VNodeChildAtom[] | VNode;

// 组件样式Hook
export default function getComponentStyleHook<ComponentName extends OverrideComponentMapKeys>(
  // @ts-ignore
  componentName: ComponentName,
  // @ts-ignore
  callback: (token: AliasToken) => CSSInterpolation
) {

  return (_prefixCls?: Ref<string>): void => {
    const prefixCls = computed(() => _prefixCls?.value);

    const [theme,token,hashId] = useToken();

  }
}
