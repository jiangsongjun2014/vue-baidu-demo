<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-button type="primary" size="small" @click="handleOpenUpdate">开启编辑</el-button>
      <el-button type="primary" size="small" @click="handleCloseUpdate">删除编辑</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
    };
  },
  components: {},
  computed: {},
  mounted () {
    this.initMap()
  },
  methods: {
    initMap(){
      this.map = new BMapGL.Map('container',{
        enableDblclickZoom: false,
        displayOptions: {
          building: false
        }
      });
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 15);
      this.map.enableScrollWheelZoom(true);

      this.handleAddOverlay()
    },
    handleAddOverlay(){
      // 绘制面
      this.polygon = new BMapGL.Polygon([
        new BMapGL.Point(116.387112, 39.920977),
        new BMapGL.Point(116.385243, 39.913063),
        new BMapGL.Point(116.394226, 39.917988),
        new BMapGL.Point(116.401772, 39.921364),
        new BMapGL.Point(116.41248, 39.927893)
      ], {
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 0.5
      });
      this.map.addOverlay(this.polygon);
      // 绘制线
      this.polyline = new BMapGL.Polyline([
        new BMapGL.Point(116.399, 39.910),
        new BMapGL.Point(116.405, 39.920),
        new BMapGL.Point(116.423493, 39.907445)
      ], {
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 0.5
      });
      this.map.addOverlay(this.polyline);
      // 绘制圆
      this.circle = new BMapGL.Circle(new BMapGL.Point(116.404, 39.915), 500, {
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 0.5
      });
      this.map.addOverlay(this.circle);
    },
    handleOpenUpdate(){
      this.polyline.enableEditing();
      this.polygon.enableEditing();
      this.circle.enableEditing();
    },
    handleCloseUpdate(){
      this.polygon.disableEditing();
      this.polyline.disableEditing();
      this.circle.disableEditing();
    }
  }
}
</script>

<style lang='less' scoped>

</style>