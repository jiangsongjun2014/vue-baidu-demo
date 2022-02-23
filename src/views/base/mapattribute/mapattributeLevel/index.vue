<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-input v-model="level" style="width: 150px;margin-right:10px;" size="small"></el-input>
      <el-button size="small" type="primary" @click="handleSetLevel">设置级别</el-button>
      <el-button size="small" type="primary" @click="handleBigLevel">放大一级</el-button>
      <el-button size="small" type="primary" @click="handleSmallLevel">缩小一级</el-button>
      <el-button size="small" type="primary" @click="handleGetLevel">当前级别</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
      level: 10,
    };
  },
  components: {},
  computed: {},
  mounted () {
    this.InitMap();
  },
  methods: {
    InitMap(){
      this.map = new BMapGL.Map('container');
      this.map.centerAndZoom(new BMapGL.Point(116.514, 39.915), 10);
      this.map.enableScrollWheelZoom(true);
    },
    handleSetLevel(){
      this.map.setZoom(this.level);
    },
    handleBigLevel(){
      this.map.zoomIn()
    },
    handleSmallLevel(){
      this.map.zoomOut()
    },
    handleGetLevel(){
      this.$message.info(' 当前地图级别：' + this.map.getZoom())
    },
  }
}
</script>

<style lang='less' scoped>

</style>