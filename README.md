# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

- 使用轮播图组件的写法

```bash
<template>
  <div class="container">
    <carousel
      :autoplay="true"
      :duration="3000"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
      dotBgColor="#000"
    >
      <car-item v-for="(item,index) of carData" :key="index">
        <img :src="getImgUrl(item.img_name)">
      </car-item>
    </carousel>
  </div>
</template>

<script >
import carData from "./components/data/carousel.js"


export default {
  name: "App",
  setup(){
    let dianji = () => {
      console.log("shabi");
    }

    let getImgUrl = (url) => {
      return new URL(`./assets/img/${url}`, import.meta.url).href;
    }
    return {
      carData,
      dianji,
      getImgUrl
    }
  }

}
</script>


<style  lang="scss" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 520px;
  height: 280px;
  margin-left: 350px;
}
img {
    width: 520px;
    height: 280px;
}
</style>

```

- 使用多级菜单

```bash
<template>
  <div class="side-bar">
      <tree-menu>
        <template v-for="item of menuData">
          <menu-item
            v-if="!item.children"
            :key="item.id"
          >{{item.title}}</menu-item>
          <re-sub-menu :key="item.id" :data="item" v-else></re-sub-menu>
        </template>
      </tree-menu>

  </div>
</template>

<script >
import carData from "./components/data/carousel.js"
import menuData from "./components/data/menu.js"


export default {
  name: "App",
  setup(){


    let getImgUrl = (url) => {
      return new URL(`./assets/img/${url}`, import.meta.url).href;
    }
    return {
      carData,
      menuData,
      getImgUrl
    }
  }

}
</script>


<style  lang="scss" scoped>
  .side-bar {
    width:300px
  }
</style>

```
