<template>
  <div>
    <div class="map" id="container"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map:null
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.InitMap()
  },
  methods: {
    InitMap(){
      this.map = new BMapGL.Map('container');
      this.map.centerAndZoom('北京市', 12);
      this.map.enableScrollWheelZoom(true);

      // this.map = new BMapGL.Map('container');
      // this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12);
      // this.map.enableScrollWheelZoom(true);
    }
  }
}
</script>

<style lang='less' scoped>

</style>