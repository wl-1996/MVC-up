import $ from "jquery";
import "./app4.css";

const $circle = $("#app4 .circle");

$circle
  // 鼠标进入时添加类：active，那么css里给类active设置的样式就会生效：
  .on("mouseenter", () => {
    $circle.addClass("active");
  })
  // 鼠标离开时删除类：active，那么css里给类active设置的样式就会失效：
  .on("mouseleave", () => {
    $circle.removeClass("active");
  });
