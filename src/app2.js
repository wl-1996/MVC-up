import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

// 监听$tabBar对象里的li标签的点击事件：
$tabBar.on("click", "li", e => {
  const $li = $(e.currentTarget); //获取被点击的li元素
  $li
    .addClass("selected") //添加类：selected，这样app2.css里的样式就会生效
    .siblings()
    .removeClass("selected"); //获取兄弟姐妹，去掉她们的类：selected，这样他们身上的css样式就会失效
  const index = $li.index(); //获取被点击li的索引
  $tabContent
    .children()
    .eq(index) //将匹配元素的集合减少为指定索引处的元素。说白点就是获取指定索引的元素。
    .addClass("active")
    .siblings()
    .removeClass("active");
});
// 没有点击事件发生时默认展现内容1：
$tabBar
  .children()
  .eq(0) //将匹配元素的集合减少为指定索引处的元素。说白点就是获取指定索引的元素。
  .trigger("click"); //触发click事件
