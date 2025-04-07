import { defineComponent, type PropType } from "vue";
import type { contextMenuItem } from "contextMenu";
import MenuItem from "./menu-item";

defineComponent({
  props: {
    menuItems: {
      type: Array as PropType<contextMenuItem[]>,
    },
  },



  setup({ menuItems }) {
    return () => {
      <>
        <div>
          <slot></slot>
          <div>
            <ul>
              {menuItems?.map((item) => {
                return <MenuItem item={item} />;
              })}
            </ul>
          </div>
        </div>
      </>;
    };
  },
});
