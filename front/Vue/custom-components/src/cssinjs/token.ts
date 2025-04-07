import { computed, inject, shallowRef, version, type ComputedRef, type InjectionKey } from "vue";
import type { MapToken } from "./maps";
import type { SeedToken } from "./SeedToken";
import type Theme from "./Theme";
import type { AliasToken, GlobalToken, OverrideToken } from ".";
import defaultSeedToken from './themes/seed';
import createTheme from "./_util/createTheme";
import defaultDerivative from "./themes/index"
import useCacheToken from "./_util/useCacheToken";
import formatToken from "./themes/alias";
export interface DesignTokenContext {
  token: Partial<AliasToken>;
  theme?: Theme<SeedToken, MapToken>;
  components?: OverrideToken;
  hashed?: string | boolean;
}

export const globalDesignTokenApi = shallowRef<DesignTokenContext>();

export const defaultConfig = {
  token: defaultSeedToken,
  hashed: true,
};

const DesignTokenContextKey: InjectionKey<ComputedRef<DesignTokenContext>> =
  Symbol('DesignTokenContext');
const defaultTheme = createTheme(defaultDerivative);

// const designTokenContext = inject<ComputedRef<DesignTokenContext>>(
//   DesignTokenContextKey,
//   computed(() => globalDesignTokenApi.value || defaultConfig),
// );

export function useToken(): [
  ComputedRef<Theme<SeedToken, MapToken>>,
  ComputedRef<GlobalToken>,
  ComputedRef<string>
] {

  const designTokenContext = inject<ComputedRef<DesignTokenContext>>(
    DesignTokenContextKey,
    computed(() => globalDesignTokenApi.value || defaultConfig),
  );

  const salt = computed(() => `${version}-${designTokenContext.value.hashed || ''}`);


  const mergedTheme = computed(() => designTokenContext.value.theme || defaultTheme);



  const cacheToken = useCacheToken<GlobalToken, SeedToken>(
    mergedTheme,
    computed(() => [defaultSeedToken, designTokenContext.value.token]),
    computed(() => ({
      salt: salt.value,
      override: {
        override: designTokenContext.value.token,
        ...designTokenContext.value.components,
      },
      formatToken,
    })),
  );

  // Implementation here - placeholder for now
  return [
    mergedTheme,
    computed(() => cacheToken.value[0]),
    computed(() => (designTokenContext.value.hashed ? cacheToken.value[1] : '')),
  ];
}
