<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-button size="small" type="primary" @click="handleGetLevel">当前级别</el-button>
      <el-button size="small" type="primary" @click="handleSetLevelLimit">设置级别限制</el-button>
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
      this.map = new BMapGL.Map('container',{
        minZoom: 5,
        maxZoom: 20
      });
      this.map.centerAndZoom(new BMapGL.Point(116.514, 39.915), 10);
      this.map.enableScrollWheelZoom(true);
    },
    handleGetLevel(){
      this.$message.info(' 当前地图级别：' + this.map.getZoom())
    },
    handleSetLevelLimit(){
      this.map.setMinZoom(4);
      this.map.setMaxZoom(20);
    }
  }
}
</script>

<style lang='less' scoped>

</style>