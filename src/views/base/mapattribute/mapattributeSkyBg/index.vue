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
      this.map.setHeading(64.5);
      this.map.setTilt(73);
      this.map.setDisplayOptions({
        skyColors: ['rgba(186, 0, 255, 0)','rgba(186, 0, 255, 0.2)']
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>