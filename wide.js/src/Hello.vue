<template>
  <p id="app">
    {{this.msg}}
  </p>
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello Vu'
    }
  }
}
</script>

<style>
html{
  font-size: 10px;
  color: #3f3f3f;
}
#app {
  font: 1rem sans-serif;
  padding: 10px 10px 10px 10px;
  color: #fff;
  border-left: 20px solid #3f3f3f;
  background-color: #49f;
}
</style>
