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
      this.map.centerAndZoom(new BMapGL.Point(113.504, 39.925), 8);
      this.map.enableScrollWheelZoom(true);

      this.handleAddOverlay()
    },
    handleAddOverlay(){
      var p1 = new BMapGL.Point(116.399,39.910)
      var p2 =  new BMapGL.Point(113.399,39.910)
      var p3 =  new BMapGL.Point(110.399,39.910)
      var cp1 = new BMapGL.Point(115.399,40.910);
      var cp2 = new BMapGL.Point(114.399,38.910);
      var cp3 = new BMapGL.Point(112.399,38.910);
      var bc = new BMapGL.BezierCurve([p1, p2, p3], [ [ cp1, cp2 ], [ cp3 ] ]);
      this.map.addOverlay(bc);
      this.map.addOverlay(new BMapGL.Marker(p1));
      this.map.addOverlay(new BMapGL.Marker(p2));
      this.map.addOverlay(new BMapGL.Marker(p3));
      this.map.addOverlay(new BMapGL.Marker(cp1));
      this.map.addOverlay(new BMapGL.Marker(cp2));
      this.map.addOverlay(new BMapGL.Marker(cp3));
    }
  }
}
</script>

<style lang='less' scoped>

</style>