<script setup>
import { ref } from 'vue'

const crx = ref('create-chrome-ext')

// alert(JSON.crx)
chrome.devtools.network.onRequestFinished.addListener(function (request) {
  chrome.devtools.inspectedWindow.eval(
    'console.log("request.url: " + unescape("' + escape(request.request.url) + '"))',
  )
  // alert(JSON.stringify(crx))
  console.log('zengraoli') // 不能直接输出
})
</script>

<template>
  <main>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </main>
</template>

<style scoped>
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
