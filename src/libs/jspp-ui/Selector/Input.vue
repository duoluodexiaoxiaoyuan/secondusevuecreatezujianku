<template>
  <div class="selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input 
      type="text" 
      class="input" 
      :value="value" 
      ref="inputValue"
      @input="searchOptions($event)"   
      @focus="searchOptions($event)"   
      @blur="setValue(value)"
    >
    <span class="iconfont icon-xiala"></span>
  </div>
</template>

<script>
import "../assets/css/iconfont.css"
import { getCurrentInstance } from "vue";
export default {
  name: "SelectorInput",
  props: {
    placeholder: {
      type:String,
      default: "请选择"
    },
    value: String
  },
  setup(props, ctx){
    const instance = getCurrentInstance();
    const searchOptions = (e) => {
      ctx.emit("searchOptions", e.target.value);
    }

    const setValue = (value) => {
      const _input = instance.refs.inputValue;
      if(_input.value.length > 0){
        _input.value = value;
      }
    }

    return {
      searchOptions,
      setValue
    }
  }

}
</script>

<style lang="scss" scoped>
  .selector-input {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #777;
    border-radius: 3px;
    color: #666;
    box-sizing: border-box;
    .input {
        position: absolute;
        left: 5px;
        top: 0;
        height: 100%;
        width: 85%;
        outline: none;
        border: none;
        box-sizing: border-box;
        color: #666;
        font-size: 15px;
    }
    .placeholder {
        position: absolute;
        left: 7px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        cursor: text;
    }
    .iconfont {
      display: block;
      position: absolute;
      right: 5px;
      top: 5px;
    }
  } 
</style>