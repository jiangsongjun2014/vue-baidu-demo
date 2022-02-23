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
      var icon = new BMapGL.Icon(require('@/assets/logo.png'), new BMapGL.Size(50, 50));
      var marker1 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925), {
        icon: icon
      });
      this.map.addOverlay(marker1);
    }
  }
}
</script>

<style lang='less' scoped>

</style>