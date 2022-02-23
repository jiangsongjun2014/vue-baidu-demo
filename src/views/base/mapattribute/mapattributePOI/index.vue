<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-button size="small" type="primary" @click="handleShowPOIText">显示POI文字</el-button>
      <el-button size="small" type="primary" @click="handleClosePOIText">隐藏POI文字</el-button>
      <el-button size="small" type="primary" @click="handleShowPOIIcon">显示POI图标</el-button>
      <el-button size="small" type="primary" @click="handleClosePOIIcon">隐藏POI图标</el-button>
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
      this.map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);
      this.map.enableScrollWheelZoom(true);
      this.map.setDisplayOptions({
        poi: true 
      })
    },
    handleShowPOIText(){
      this.map.setDisplayOptions({ poiText: true })
    },
    handleClosePOIText(){
      this.map.setDisplayOptions({ poiText: false })
    },
    handleShowPOIIcon(){
      this.map.setDisplayOptions({ poiIcon: true })
    },
    handleClosePOIIcon(){
      this.map.setDisplayOptions({ poiIcon: false })
    }
  }
}
</script>

<style lang='less' scoped>

</style>