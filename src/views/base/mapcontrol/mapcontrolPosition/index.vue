<template>
  <div>
    <div class="map" id="container"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locationControl: null,
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

      this.locationControl = new BMapGL.LocationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        offset: new BMapGL.Size(20, 20)
      });
      this.map.addControl(this.locationControl);

      this.handlePosition()
    },
    // 定位
    handlePosition(){
      this.locationControl.addEventListener('locationSuccess', e => {
        console.log(e)
      })
      this.locationControl.addEventListener('locationError', e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>