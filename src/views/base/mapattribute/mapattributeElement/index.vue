<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-button size="small" type="primary" @click="handleShowOverlay">显示覆盖物</el-button>
      <el-button size="small" type="primary" @click="handleCloseOverlay">隐藏覆盖物</el-button>
      <el-button size="small" type="primary" @click="handleShow3D">显示3D建筑</el-button>
      <el-button size="small" type="primary" @click="handleClose3D">隐藏3D建筑</el-button>
      <el-button size="small" type="primary" @click="handleShowLayer">显示图层</el-button>
      <el-button size="small" type="primary" @click="handleCloseLayer">隐藏图层</el-button>
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

      // 添加覆盖物
      var marker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915));
      this.map.addOverlay(marker);

      // 添加图层
      var isTilesPng = true;
      var tstyle = 'pl';
      var udtVersion = '20190102';
      var tilelayer = new BMapGL.TileLayer({ transparentPng: isTilesPng });
      tilelayer.zIndex = 110;
      tilelayer.getTilesUrl = function (point, level) {
        if (!point || level < 0) {
          return null;
        }
        var row = point.x;
        var col = point.y;
        var url = '//mapsv0.bdimg.com/tile/?udt=' + udtVersion + '&qt=tile&styles=' + tstyle + '&x=' + row + '&y=' + col + '&z=' + level;
        return url;
      };
      this.map.addTileLayer(tilelayer);

      // 隐藏
      this.map.setDisplayOptions({
        overlay: false,   //是否显示覆盖物
        layer: false,     //是否显示叠加图层，地球模式暂不支持
        building: false,   //是否显示3D建筑物（仅支持WebGL方式渲染的地图）   
      })
    },
    handleShowOverlay(){
      this.map.setDisplayOptions({ overlay: true })
    },
    handleCloseOverlay(){
      this.map.setDisplayOptions({ overlay: false })
    },
    handleShow3D(){
      this.map.setDisplayOptions({ building: true })
    },
    handleClose3D(){
      this.map.setDisplayOptions({ building: false })
    },
    handleShowLayer(){
      this.map.setDisplayOptions({ layer: true })
    },
    handleCloseLayer(){
      this.map.setDisplayOptions({ layer: false })
    }
  }
}
</script>

<style lang='less' scoped>

</style>