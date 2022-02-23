<template>
  <div>
    <div class="map" id="map_container"></div>
  </div>
</template>

<script>
import { initMap, purpleStyle } from '@/utils/common'

export default {
  data () {
    return {
      map: null,
      view: null,
      layer: null,
    };
  },
  components: {},
  computed: {},
  mounted () {
    this.InitMap();
  },
  methods: {
    // 初始化地球
    InitMap(){

      // 创建地球
      this.map = initMap({
        tilt: 50,
        heading: 0,
        center: [106.512432,29.544045],
        zoom: 13,
        style: purpleStyle
      });

      // 创建视图
      this.view = new mapvgl.View({
        map: this.map
      });

      this.view.startAnimation();
      
      // 获取数据
      this.getData()

    },
    // 获取数据
    getData(){
      fetch('https://mapv.baidu.com/gl/examples/static/car.csv').then(function (rs){
        return rs.text();
      }).then(res => {
        var dataSet = mapv.csv.getDataSet(res);
        var data = dataSet.get();
        console.log(data)
        var lineLayer = new mapvgl.LineTripLayer({
          trailLength: 21,
          color: 'rgb(0, 255, 255)'
        });
        this.view.addLayer(lineLayer);
        lineLayer.setData(data);
      })

    }
  }
}
</script>

<style lang='less' scoped>

</style>