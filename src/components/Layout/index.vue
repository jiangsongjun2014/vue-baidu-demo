<template>
  <div class="layout_container">
    <div class="sidebr_container">
      <SideBar></SideBar>
    </div>
    <div class="appmain_container">
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import SideBar from "../SideBar/index"
import AppMain from "../AppMain/index"

export default {
  data(){
    return {

    }
  },
  components: {
    SideBar,
    AppMain
  }
}
</script>

<style lang="less" scoped>
.layout_container{
  display: flex;
  .sidebr_container{
    height: 100vh;
    width: 250px;
    background: #545c64;
    overflow: auto;
    &::-webkit-scrollbar{
      width: 5px;
      background: #545c64;
    }
    &::-webkit-scrollbar-thumb{
      background: #ffd04b;
      border: 1px solid #ffd04b;
    }
  }
  .appmain_container{
    width: calc(100vw - 250px);
    height: 100vh;
    background: #e2e2e2;
  }
}
</style>