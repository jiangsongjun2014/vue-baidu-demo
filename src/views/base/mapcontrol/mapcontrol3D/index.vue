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

      var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
      this.map.addControl(navi3DCtrl);
    }
  }
}
</script>

<style lang='less' scoped>

</style>