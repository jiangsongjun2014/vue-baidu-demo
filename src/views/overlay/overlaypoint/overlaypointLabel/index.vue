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
      this.map.centerAndZoom(new BMapGL.Point(116.280, 40.049), 18);
      this.map.enableScrollWheelZoom(true);
      this.handleAddOverlay()
    },
    handleAddOverlay(){
      var label = new BMapGL.Label('这是一段文本', {
        position: new BMapGL.Point(116.2787, 40.0492),
        offset: new BMapGL.Size(30, -30)
      });
      label.setStyle({
        color: 'blue',
        borderRadius: '5px',
        borderColor: '#ccc',
        padding: '10px',
        fontSize: '16px',
        height: '30px',
        lineHeight: '30px',
        fontFamily: '微软雅黑'
      });
      this.map.addOverlay(label);
    }
  }
}
</script>

<style lang='less' scoped>

</style>