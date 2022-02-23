<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-button size="small" type="primary" @click="handleSetCenter">设置中心点</el-button>
      <el-button size="small" type="primary" @click="handleGetCenter">获取中心点</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null
    };
  },
  components: {},
  computed: {},
  mounted () {
    this.InitMap()
  },
  methods: {
    InitMap(){
      this.map = new BMapGL.Map('container');
      this.map.centerAndZoom(new BMapGL.Point(116.514, 39.915), 10);
      this.map.enableScrollWheelZoom(true);
    },
    handleSetCenter(){
      var lng = 116.514 + Math.floor(Math.random() * 589828) / 1e6;
      var lat = 39.416 + Math.floor(Math.random() * 514923) / 1e6;
      var point = new BMapGL.Point(lng, lat);
      this.map.setCenter(point);
    },
    handleGetCenter(){
      this.$message.info('当前中心点：' + this.map.getCenter().lng + ',' + this.map.getCenter().lat)
    }
  }
}
</script>

<style lang='less' scoped>

</style>