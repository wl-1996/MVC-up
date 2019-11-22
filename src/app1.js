import "./app1.css"; //导入样式表app1.css
import $ from "jquery"; //导入jquery变量：$

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");
const n = localStorage.getItem("n"); //获取本地缓存中的n
$number.text(n || 100); //$number的值为本地缓存的n或者是原来的100

// 监听$button1对象的点击事件：
$button1.on("click", () => {
  let n = parseInt($number.text()); //找到$number的值，并转为整型
  n += 1;
  localStorage.setItem("n", n); //n的值改变后存到本地
  $number.text(n);
});
// 监听$button2对象的点击事件：
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
// 监听$button3对象的点击事件：
$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
// 监听$button4对象的点击事件：
$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
