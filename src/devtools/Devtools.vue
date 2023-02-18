<script setup>
import { ref } from 'vue'

const crx = ref('create-chrome-ext')

console.log(crx.value, '-----crx')
chrome.devtools.panels.create('superPanel', 'img/icon.png', 'panel.html', function (panel) {
  console.log('自定义面板创建成功！') // 注意这个log一般看不到

  // alert(JSON.stringify(panel))
})
// 创建自定义侧边栏
chrome.devtools.panels.elements.createSidebarPane('Images', function (sidebar) {
  // sidebar.setPage('../sidebar.html'); // 指定加载某个页面

  console.log(sidebar, '----sidebar')
  // alert(123)
  sidebar.setExpression('document.querySelectorAll("img")', 'All Images') // 通过表达式来指定
  // sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象
})
</script>

<template>
  <main>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>
    <h3>devtools Page</h3>

    <h3>devtools Page</h3>
  </main>
</template>

<style>
main {
  text-align: center;
  padding: 1em;
  margin: 0 auto;
}

h3 {
  color: #42b983;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.2rem;
  margin: 2rem auto;
}

h6 {
  font-size: 0.5rem;
  color: #999999;
  margin: 0.5rem;
}

a {
  font-size: 0.5rem;
  margin: 0.5rem;
  color: #cccccc;
  text-decoration: none;
}

@media (min-width: 480px) {
  h3 {
    max-width: none;
  }
}

@media (prefers-color-scheme: light) {
  a:hover {
    color: #747bff;
  }

  h6 {
    color: #333333;
  }
}
</style>
