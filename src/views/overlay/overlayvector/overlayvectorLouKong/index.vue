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
        enableDblclickZoom: false,
        displayOptions: {
          building: false
        }
      });
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12);
      this.map.enableScrollWheelZoom(true);

      this.handleAddOverlay()
    },
    handleAddOverlay(){
      const that = this
      const bd = new BMapGL.Boundary();
      bd.get('顺义区', function (rs) {
        if (rs.boundaries.length > 0) {
          var hole = new BMapGL.Polygon(rs.boundaries, {
            fillColor: 'blue',
            fillOpacity: 0.2
          });
          that.map.addOverlay(hole);
        } else {
          that.$message.info('没有获取到行政区')
        }
      });
    }
  }
}
</script>

<style lang='less' scoped>

</style>