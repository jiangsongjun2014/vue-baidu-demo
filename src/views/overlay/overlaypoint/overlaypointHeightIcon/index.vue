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
      var icon = new BMapGL.Icon(require('@/assets/logo.png'), new BMapGL.Size(40, 40));
      var marker = new BMapGL.Marker3D(new BMapGL.Point(118.6614, 36.2190), Math.round(Math.random()) * 130000, {
        size: 80,
        fillColor: '#454399',
        icon: icon
      });
      this.map.addOverlay(marker)
    }
  }
}
</script>

<style lang='less' scoped>

</style>