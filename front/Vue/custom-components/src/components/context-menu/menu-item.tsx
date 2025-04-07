import type { contextMenuItem } from "contextMenu";
import { ref, defineComponent, type PropType } from "vue";

const MenuItem = defineComponent({
  name: "MenuItem",
  props: {
    item: {
      type: Object as PropType<contextMenuItem>,
      required: true,
    },
  },
  setup({ item }) {
    const isShow = ref(false);

    return () => {
      <>
        <li>
          {/* 菜单项 */}
          <button>{item?.label}</button>
          {/* 子菜单 */}
          {item?.children && isShow ? (
            <ul>
              {item?.children.map((child) => {
                return <MenuItem item={child} />;
              })}
            </ul>
          ) : null}
        </li>
      </>;
    };
  },
});

export default MenuItem;
