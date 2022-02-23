<template>
  <div>
    <div class="map" id="container"></div>
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

      var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
      this.map.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
      this.map.addControl(zoomCtrl);
    }
  }
}
</script>

<style lang='less' scoped>

</style>