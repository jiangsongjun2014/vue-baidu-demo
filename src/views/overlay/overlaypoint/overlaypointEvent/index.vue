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
      var marker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925));
      marker.addEventListener('click', this.markerEvent)
      this.map.addOverlay(marker);
    },
    markerEvent(e){
      this.map.openInfoWindow(new BMapGL.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', {
        width: 200,
        height: 100,
        title: '故宫博物院'
      }), new BMapGL.Point(e.latLng.lng, e.latLng.lat))
    }
  }
}
</script>

<style lang='less' scoped>

</style>