<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-button type="primary" size="small" @click="handleAddLuwang">添加路网</el-button>
      <el-button type="primary" size="small" @click="handleDelLuwang">删除路网</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    };
  },
  components: {},
  computed: {},
  mounted () {
    this.initMap()
  },
  methods: {
    initMap(){
      this.map = new BMapGL.Map('container');
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12);
      this.map.enableScrollWheelZoom(true);
      this.map.setMapType(BMAP_EARTH_MAP);   
      this.map.setTilt(73);
    },
    handleAddLuwang(){
      this.map.setDisplayOptions({ street: true })
    },
    handleDelLuwang(){
      this.map.setDisplayOptions({ street: false })
    }
  }
}
</script>

<style lang='less' scoped>

</style>