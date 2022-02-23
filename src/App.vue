<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
.map{
  width: 100%;
  height: 100vh;
}
.toolbox{
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  padding: 10px;
  background: #fff;
}
</style>
