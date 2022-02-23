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
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12);
      this.map.enableScrollWheelZoom(true);

      // 创建城市选择控件
      var cityControl = new BMapGL.CityListControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // 控件基于停靠位置的偏移量（可选）
        offset: new BMapGL.Size(10, 5)
      });
      // 将控件添加到地图上
      this.map.addControl(cityControl);
    },
  }
}
</script>

<style lang='less' scoped>

</style>