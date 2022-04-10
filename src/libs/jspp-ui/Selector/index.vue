<template>
  <div class="selector" v-focus>
    <selector-input 
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <selector-menu 
      :data="data" 
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    />
  </div>
</template>

<script>

import SelectorInput from "./Input.vue"
import SelectorMenu from "./Menu.vue"
import focus from "./directives/focus.js"
import { reactive, toRefs } from "vue";
export default {
  name: "Selector",
  directives: {
    focus
  },
  props: {
    placeholder: String,
    data: Array
  },
  components: {
    SelectorInput,
    SelectorMenu
  },
  setup(props, ctx){
    const state = reactive({
      inputValue: "",
      searchValue: ""
    })

    const setItemValue = (item) => {
      state.inputValue = item.text;
      ctx.emit("setItemValue", item.value);
    }

    const searchOptions = (value) => {
      state.searchValue = value;
    }
    return {
      setItemValue,
      ...toRefs(state),
      searchOptions
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector {
    position: relative;
    width: 250px;
    height: 30px;
    margin: 0 auto;
  }
</style>