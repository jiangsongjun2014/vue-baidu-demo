<template>
  <div>
    <div class="map" id="container"></div>

    <div class="toolbox">
      <el-button type="primary" size="small" @click="handleAddOverlay">添加覆盖物</el-button>
      <el-button type="primary" size="small" @click="handleDelOverlay">删除覆盖物</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      marker: null,
      polyline: null,
      circle: null,
      polygon: null,
      rectangle: null,
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new BMapGL.Map("container");
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 15);
      this.map.enableScrollWheelZoom(true);

      // 创建点
      this.marker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915));

      // 创建折线
      this.polyline = new BMapGL.Polyline([
        new BMapGL.Point(116.399, 39.91),
        new BMapGL.Point(116.405, 39.92),
        new BMapGL.Point(116.425, 39.9),
      ],
      {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5,
      });

      // 创建圆
      this.circle = new BMapGL.Circle(new BMapGL.Point(116.404, 39.915), 500, {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5,
      });

      // 创建多边形
      this.polygon = new BMapGL.Polygon([
        new BMapGL.Point(116.387112, 39.920977),
        new BMapGL.Point(116.385243, 39.913063),
        new BMapGL.Point(116.394226, 39.917988),
        new BMapGL.Point(116.401772, 39.921364),
        new BMapGL.Point(116.41248, 39.927893),
      ],{
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5,
      });

      // 创建矩形
      var pStart = new BMapGL.Point(116.392214, 39.918985);
      var pEnd = new BMapGL.Point(116.41478, 39.911901);
      this.rectangle = new BMapGL.Polygon([
        new BMapGL.Point(pStart.lng, pStart.lat),
        new BMapGL.Point(pEnd.lng, pStart.lat),
        new BMapGL.Point(pEnd.lng, pEnd.lat),
        new BMapGL.Point(pStart.lng, pEnd.lat),
      ],
      {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5,
      });
    },
    handleAddOverlay(){
      this.map.addOverlay(this.marker); // 增加点
      this.map.addOverlay(this.polyline); // 增加折线
      this.map.addOverlay(this.circle); // 增加圆
      this.map.addOverlay(this.polygon); // 增加多边形
      this.map.addOverlay(this.rectangle);
    },
    handleDelOverlay(){
      this.map.clearOverlays();
    }
  },
};
</script>

<style lang='less' scoped>
</style>