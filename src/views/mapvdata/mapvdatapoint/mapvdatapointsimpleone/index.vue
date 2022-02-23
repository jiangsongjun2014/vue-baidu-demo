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
      simplePointLayer: null
    };
  },
  components: {},
  computed: {},
  mounted () {
    this.InitMap()
  },
  methods: {
    // 初始化地球
    InitMap(){

      // 创建地球
      this.map = initMap({
        tilt: 60,
        heading: 0,
        center: [106.510141,29.544868],
        zoom: 13,
        style: purpleStyle
      });

      // 创建视图
      this.view = new mapvgl.View({
        map: this.map
      });

      // 创建图层
      this.simplePointLayer = new mapvgl.PointLayer({
        blend: 'lighter',
        shape: 'circle',
        color: 'rgba(255, 71, 26, 1)',
        size: 1
      });

      this.getData()
    },
    // 加载数据
    getData(){
      fetch('https://mapv.baidu.com/gl/examples/static/car.csv').then(res => {
        return res.text();
      }).then(res => {
        var dataSet = mapv.csv.getDataSet(res);
        var data = dataSet.get();
        var list = []
        for (let i in data) {
          var item = data[i];
          var coordinates = item.geometry.coordinates;
          for (let j in coordinates) {
            list.push({
              geometry: { type: 'POINT', coordinates: coordinates[j] },
            })
          }
        }
        
        // 数据加入图层
        this.simplePointLayer.setData(list)

        // 图层加入视图
        this.view.addLayer(this.simplePointLayer)

      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>