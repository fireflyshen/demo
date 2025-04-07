import { useStyleInject } from '../StyleContext';
import type { KeyType } from '../Cache';
import type { ShallowRef, Ref } from 'vue';
import { onBeforeUnmount, watch, watchEffect, shallowRef } from 'vue';
export default function useClientCache<CacheType>(
  prefix: string,
  keyPath: Ref<KeyType[]>,
  cacheFn: () => CacheType,
  onCacheRemove?: (cache: CacheType, fromHMR: boolean) => void,
): ShallowRef<CacheType> {
  const styleContext = useStyleInject();
  const fullPathStr = shallowRef('');
  const res = shallowRef<CacheType>();
  watchEffect(() => {
    fullPathStr.value = [prefix, ...keyPath.value].join('%');
  });
  const clearCache = (pathStr: string) => {
    styleContext.value.cache!.update(pathStr, prevCache => {
      const [times = 0, cache] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove?.(cache, false);
        return null;
      }

      return [times - 1, cache];
    });
  };

  watch(
    fullPathStr,
    (newStr, oldStr) => {
      if (oldStr) clearCache(oldStr);
      // Create cache
      styleContext.value.cache!.update(newStr, prevCache => {
        const [times = 0, cache] = prevCache || [];

        // HMR should always ignore cache since developer may change it
        let tmpCache = cache;
        if (import.meta.env.NODE_ENV !== 'production' && cache && !styleContext.value.mock) {
          onCacheRemove?.(tmpCache, true);
          tmpCache = null;
        }
        const mergedCache = tmpCache || cacheFn();

        return [times + 1, mergedCache];
      });
      console.log(fullPathStr.value,"fullpath");

      res.value = styleContext.value.cache!.get(fullPathStr.value)![1];
    },
    { immediate: true },
  );
  onBeforeUnmount(() => {
    clearCache(fullPathStr.value);
  });
  console.log(res.value,"res");

  return res as ShallowRef<CacheType>;
}
