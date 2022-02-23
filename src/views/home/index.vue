<template>
  <div>
    <div class="map" id="map_container"></div>
  </div>
</template>



<script>
import { initMap, purpleStyle } from '@/utils/common'

export default {
  data(){
    return {

    }
  },
  computed: {
   
  },
  mounted() {
    var map = initMap({
      tilt: 0,
      heading: 0,
      center: [116.389756,39.852666],
      zoom: 11,
      style: purpleStyle
    });

    var view = new mapvgl.View({
      map: map
    });

    var data = [{
      geometry: {
        type: 'Point',
        coordinates: [12952243.94, 4802582.55]
      },
      properties: {
        count: 100
      }
    }];

    var fanLayer = new mapvgl.FanLayer({
      color: '#009900',
      data: data,
      size: function (data) {
        return data.properties.count * 200;
      }
    });
    view.addLayer(fanLayer);
  }
}
</script>

<style lang="less" scoped>

</style>