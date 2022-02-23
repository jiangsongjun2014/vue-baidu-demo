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
      this.map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);
      this.map.enableScrollWheelZoom(true);
      this.map.setHeading(64.5);
      this.map.setTilt(73);
    }
  }
}
</script>

<style lang='less' scoped>

</style>