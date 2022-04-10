import Carousel from "./Carousel/index.vue";
import CarItem from "./Carousel/Item.vue";
import TreeMenu from "./TreeMenu/index.vue";
import MenuItem from "./TreeMenu/MenuItem.vue";
import SubMenu from "./TreeMenu/SubMenu.vue";
import ReSubMenu from "./TreeMenu/ReSubMenu.vue";
import Selector from "./Selector/index.vue";

let JsppUI = {};

JsppUI.install = function (Vue) {
  Vue.component(Carousel.name, Carousel);
  Vue.component(CarItem.name, CarItem);
  Vue.component(TreeMenu.name, TreeMenu);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(SubMenu.name, SubMenu);
  Vue.component(ReSubMenu.name, ReSubMenu);
  Vue.component(Selector.name, Selector);
};

export default JsppUI;
