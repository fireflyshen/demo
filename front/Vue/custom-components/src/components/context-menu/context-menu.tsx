import { defineComponent, type PropType } from "vue";
type User = {
  name:string,
  age:number,
  address:string,
  phone:string,
  email:string,
}



export default defineComponent({
  name: "ContextMenu",
  props: {
    item: {
      type: Object as PropType<User>,
      required: false,
    }
  },
  setup() {

    return () => {};
  },
});
