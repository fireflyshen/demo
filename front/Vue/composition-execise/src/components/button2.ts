// src/components/computedFunction.ts
import { computed, type Ref } from "vue";
import hello from "./button"
export default (name: string) => {
  const greeting = computed(() => hello(name));
  return { greeting };
};
