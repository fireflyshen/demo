<template>
  <div>
    <!-- <h2>普通函数</h2>
    <p>{{ normalMessage }}</p> -->
    <button @click="changeName">改变名字</button>

    <h2>使用 computed</h2>
    <p>{{ greeting }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import normalFunction from "@/components/button";
import computedFunction from '@/components/button2'

const name = ref('Alice')

// 使用普通函数
let normalMessage = normalFunction(name.value);

// 使用 computed 封装
const { greeting } = computedFunction(name.value)

const changeName = () => {
  name.value = name.value === 'Alice' ? 'Bob' : 'Alice'

  // name.value = "Alice"

  // 手动更新普通函数
  // normalMessage = normalFunction(name.value);
}
</script>
