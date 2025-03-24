<template>
  <ContextMenu :menuItems>
    <div style="width: 200px; height:200px; background-color: pink;">hello</div>  </ContextMenu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContextMenu from "./components/ContextMenu.vue";
const menuItems = ref([
  [
    { label: "Share", icon: "corner-up-right", action: "share" },
    { label: "Rename", icon: "edit-2", action: "rename" },
  ],
  [
    {
      label: "No status",
      icon: "circle",
      color: "black",
      checked: true,
      children: [
        {
          label: "Needs review",
          icon: "square",
          color: "orange",
          action: "review",
        },
        {
          label: "In progress",
          icon: "octagon",
          color: "purple",
          action: "progress",
        },
        {
          label: "Approved",
          icon: "triangle",
          color: "green",
          action: "approve",
        },
        {
          label: "No status",
          icon: "circle",
          color: "black",
          checked: true,
          action: "nostatus",
        },
      ],
    },
    { label: "Copy Link Address", icon: "link", action: "copy-link" },
    { label: "Move to", icon: "folder-plus", action: "move" },
    { label: "Copy to", icon: "copy", action: "copy" },
    { label: "Make Private", icon: "lock", action: "private" },
    { label: "Download", icon: "download", action: "download" },
  ],
  [{ label: "Delete", icon: "trash-2", color: "red", action: "delete" }],
]);
</script>
