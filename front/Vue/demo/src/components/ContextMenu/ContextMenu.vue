<template>
  <div ref="container" class="container">
    <slot></slot>
    <div class="menu" v-if="visible"  :style="{ top: `${y + 5}px`, left: `${x + 10}px` }">
      <ul
        class="menu-list"
        v-for="(group, groupIndex) in menuItems"
        :key="groupIndex"
       
      >
        <MenuItem
          v-for="(item, itemIndex) in group"
          :key="itemIndex"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import { useContextMenu } from "../../hooks/contextMenu";
import MenuItem from "./MenuItem.vue";
const container: Ref<HTMLElement | null> = ref<HTMLElement | null>(null);

const { x, y, visible } = useContextMenu(container);

interface Item {
  label: string;
  color?: string;
  icon: string;
  checked?: boolean;
  children?: Item[];
  action?: string;
}

// 正确定义props
const { menuItems } = defineProps<{
  menuItems: Item[][];
}>();

console.log(menuItems);
</script>

<style lang="scss">
*,
*:after,
*:before {
  box-sizing: border-box;
}

:root {
  --color-bg-primary: #d0d6df;
  --color-bg-primary-offset: #f1f3f7;
  --color-bg-secondary: #fff;
  --color-text-primary: #3a3c42;
  --color-text-primary-offset: #898c94;
  --color-orange: #dc9960;
  --color-green: #1eb8b1;
  --color-purple: #657cc4;
  --color-black: var(--color-text-primary);
  --color-red: #d92027;
}

body {
  font-family: "Inter", sans-serif;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}

.container {
  display: flex;
  width: max-content;
}

.menu {
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
}

.menu-list {
  margin: 0;
  display: block;
  width: 100%;
  padding: 8px;
  & + .menu-list {
    border-top: 1px solid #ddd;
  }
}
</style>
