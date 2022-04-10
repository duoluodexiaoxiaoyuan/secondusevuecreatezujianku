<template>
  <div 
    class="carousel"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"  
  >
    <div class="inner">
       <CarDot 
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
       />
       <CarDirector
          dir="prev"
          @dirClick="dirClick"
       />
        <CarDirector
          dir="next"
          @dirClick="dirClick"
       />
       <slot></slot>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, onBeforeUnmount, getCurrentInstance } from "vue"
import CarDot from "./Dot.vue"
import CarDirector from "./Director.vue"
export default {
  name: "Carousel",  
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial:{
      type: Number,
      default:0
    },
    hasDot:{
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: String
  },
  setup(props){
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex : props.initial,
      itemLen:0
    });

    let t = null;
    const autoplay = () => {
      if(props.autoplay){
        t = setInterval(() => {
          setIndex("next")
        }, props.duration);
      }
    }

    const setIndex = (dir) => {
      switch(dir) {
        case "next":
          state.currentIndex +=1;
          if(state.currentIndex === state.itemLen){
            state.currentIndex = 0;
          }
          break
        case "prev":
          state.currentIndex -=1;
          if(state.currentIndex === -1){
            state.currentIndex = state.itemLen - 1;
          } 
          break;
        default:
          break;
      }
    }
    const dotClick = (index) => {
      state.currentIndex = index;
    }

    const dirClick = (dir) => {
      setIndex(dir);
    }

    const mouseenter = () => {
      _clearIntervalFn();
    }

    const mouseleave = () => {
      autoplay();
    }

    const _clearIntervalFn = () => {
      clearInterval(t);
      t = null;
    }
    
    onMounted(()=>{
      state.itemLen = instance.slots.default()[0].children.length;
      autoplay();
    })

    onBeforeUnmount(()=>{
      _clearIntervalFn();
    })


    return {
      ...toRefs(state),
      dotClick,
      dirClick,
      mouseenter,
      mouseleave
    }
  }
}
</script>

<style lang="scss" scoped>
 .carousel {
   width:100%;
   height: 100%;
   .inner {
    position: relative;
    width:100%;
    height: 100%;
    overflow: hidden;
   }
 }
</style>