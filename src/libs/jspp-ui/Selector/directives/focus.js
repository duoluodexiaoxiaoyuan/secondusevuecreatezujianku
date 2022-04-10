export default {
  mounted(el) {
    const oSelectorInput = el.querySelector(".selector-input"),
      oSelectorMenu = el.querySelector(".selector-menu");
    console.log(oSelectorInput);
    const oInput = oSelectorInput.querySelector("input"),
      oPlaceHolder = oSelectorInput.querySelector("label"),
      oIcon = oSelectorInput.querySelector("span");
    oInput.addEventListener(
      "focus",
      function () {
        oPlaceHolder.style.display = "none";
        oIcon.className = "iconfont icon-sousuo";
        setTimeout(() => {
          oSelectorMenu.style.display = "block";
        }, 200);
      },
      false
    );

    oInput.addEventListener(
      "blur",
      function () {
        oIcon.className = "iconfont icon-xiala";
        setTimeout(() => {
          oSelectorMenu.style.display = "none";
          if (this.value.length === 0) {
            oPlaceHolder.style.display = "block";
          }
        }, 200);
      },
      false
    );
  },
};
