<template>
  <div>
    <div class="map" id="container"></div>
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
      this.map = new BMapGL.Map('container');
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 15);
      this.map.enableScrollWheelZoom(true);
      this.handleAddOverlay()
    },
    handleAddOverlay(){
      // 创建点标记
      var marker1 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925));
      var marker2 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915));
      var marker3 = new BMapGL.Marker(new BMapGL.Point(116.395, 39.935));
      var marker4 = new BMapGL.Marker(new BMapGL.Point(116.415, 39.931));
      // 在地图上添加点标记
      this.map.addOverlay(marker1);
      this.map.addOverlay(marker2);
      this.map.addOverlay(marker3);
      this.map.addOverlay(marker4);
    }
  }
}
</script>

<style lang='less' scoped>

</style>