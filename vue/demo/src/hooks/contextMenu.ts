import type { Ref } from "vue";
import { onMounted, onUnmounted, nextTick, ref } from "vue";

export function useContextMenu(container: Ref<HTMLElement | null>) {
  const visible = ref(false);
  const x = ref(0);
  const y = ref(0);

  onMounted(() => {
    console.log(container,"container111");
    if (container.value) {
      console.log(container.value,"container");
      
      container?.value.addEventListener("contextmenu", showMenu);
      window.addEventListener("contextmenu",hideMenu,true);
      window.addEventListener("click",hideMenu)
    }
  });

  onUnmounted(() => {
    if (container.value) {
      container.value.removeEventListener("contextmenu", showMenu);
      
    }
  });

  function showMenu(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    visible.value = true;

    nextTick(() => {
      // 获取鼠标坐标
      const { clientX, clientY } = e;

      const menuContainer = document.querySelector(".menu");

      if (menuContainer instanceof HTMLElement) {
        const { clientWidth: menuWidth, clientHeight: menuHeight } =
          menuContainer;

        const isOverPortWidth: Boolean =
          clientX + menuWidth > window.innerWidth;
        const isOverPortHeight: Boolean =
          clientY + menuHeight > window.innerHeight;

        if (isOverPortWidth) {
          x.value = clientX - menuWidth;
          y.value = clientY;
        }

        if (isOverPortHeight) {
          x.value = clientX;
          y.value = clientY - menuHeight;
        }

        if (!isOverPortHeight && !isOverPortWidth) {
          x.value = clientX;
          y.value = clientY;
        }
      }
    });
  }

  function hideMenu(e:Event) {
    visible.value = false;
  }

  return { visible, x, y };
}
