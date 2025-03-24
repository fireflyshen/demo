<template>
  <li class="menu-item">
    <button
      class="menu-button"
      :class="[
        item.color ? `menu-button--${item.color}` : '',
        item.checked ? 'menu-button--checked' : '',
        item.action === 'delete' ? 'menu-button--delete' : '',  // 这里根据 item.action 判断是否绑定 --delete

      ]"
    >
      <i :data-feather="item.icon"></i>
      {{ item.label }}
      <i v-if="item.children" data-feather="chevron-right"></i>
      <i v-if="item.checked && !item.children" data-feather="check"></i>
    </button>

    <!-- 子菜单 -->
    <ul v-if="item.children && showSub" class="menu-sub-list">
      <MenuItem
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        
      />
    </ul>
  </li>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import feather from "feather-icons";

// 定义 Props 接口
interface ItemProps {
  item: Item;
}

interface Item {
  label: string;
  color?: string;
  icon: string;
  checked?: boolean;
  children?: Item[];
  action?: string;
}

// 使用 defineProps 来接收 item
const { item } = defineProps<ItemProps>();

// 控制是否显示子菜单
const showSub = ref<boolean>(true);

onMounted(() => {
  feather.replace()
});
</script>

<style scoped lang="scss">
.menu-item {
  position: relative;
}

.menu-sub-list {
  display: none;
  padding: 8px;
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  position: absolute;
  left: 100%;
  right: 0;
  z-index: 100;
  width: 100%;
  top: 0;
  flex-direction: column;
  // &:after {
  //   content: "";
  //   position: absolute;
  //   left: -12px;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   display: block;
  //   outline: 2px solid hotpink;
  // }
  &:hover {
    display: flex;
  }
}

.menu-button {
  font: inherit;
  border: 0;
  padding: 8px 8px;
  padding-right: 36px;
  width: 100%;
  border-radius: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--color-bg-secondary);
  &:hover {
    background-color: var(--color-bg-primary-offset);
    & + .menu-sub-list {
      display: flex;
    }
    svg {
      stroke: var(--color-text-primary);
    }
  }

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    stroke: var(--color-text-primary-offset);

    &:nth-of-type(2) {
      margin-right: 0;
      position: absolute;
      right: 8px;
    }
  }

  &--delete {
    &:hover {
      color: var(--color-red);
      svg:first-of-type {
        stroke: var(--color-red);
      }
    }
  }

  &--orange {
    svg:first-of-type {
      stroke: var(--color-orange);
    }
  }

  &--green {
    svg:first-of-type {
      stroke: var(--color-green);
    }
  }
  &--purple {
    svg:first-of-type {
      stroke: var(--color-purple);
    }
  }
  &--black {
    svg:first-of-type {
      stroke: var(--color-black);
    }
  }

  &--checked {
    svg:nth-of-type(2) {
      stroke: var(--color-purple);
    }
  }
}
</style>
