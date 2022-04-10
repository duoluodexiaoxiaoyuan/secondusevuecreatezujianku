<template>
  <div id="#app">
    <div class="container">
      <Selector
        :data="slectorData"
        placeholder="请选择框架"
        @setItemValue="setItemValue"
      />
    </div>
  </div>
</template>

<script >

import slectorData from "./components/data/selector.js"


export default {
  name: "App",
  setup(){
    const setItemValue = (value) => {
      console.log(value);
    }
    return {
     slectorData,
     setItemValue
    }
  }
  
}
</script>


<style  lang="scss" scoped>
  
</style>
