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

      var cr = new BMapGL.CopyrightControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        offset: new BMapGL.Size(20, 20)
      }); 
	    this.map.addControl(cr);
      var bs = this.map.getBounds();
	    cr.addCopyright({
        id: 1, 
        content: "<a href='#' style='font-size:16px;color:#000'>@我是第三方版权控件呀</a>", 
        bounds: bs
      });
    }
  }
}
</script>

<style lang='less' scoped>

</style>