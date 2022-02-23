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
      this.map = new BMapGL.Map('container',{
        restrictCenter: false
      });
      this.map.centerAndZoom(new BMapGL.Point(118.6614, 36.2190), 8);
      this.map.enableScrollWheelZoom(true);
      this.handleAddOverlay()
    },
    handleAddOverlay(){
      var marker = new BMapGL.Marker3D(new BMapGL.Point(118.6614, 36.2190), Math.round(Math.random()) * 130000, {
        size: 50,
        shape: 'BMAP_SHAPE_CIRCLE',
        fillColor: '#454399',
        fillOpacity: 0.6
      });
      this.map.addOverlay(marker)
    }
  }
}
</script>

<style lang='less' scoped>

</style>