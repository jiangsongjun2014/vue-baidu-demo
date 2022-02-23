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
      pointLayer: null
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
      this.map = initMap({
        tilt: 0,
        heading: 0,
        center: [105.348145,37.976416],
        zoom: 5,
        style: purpleStyle
      });

      this.view = new mapvgl.View({
        map: this.map
      });
      
      this.getData()
    },
    // 加载数据
    getData(){
      fetch('https://mapv.baidu.com/gl/examples/data/chinalocation.json').then(res => {
        return res.json();
      }).then(res => {
        var list1 = [];
        var list2 = [];
        var list3 = [];
        // 数据1
        for (let i in res[0]) {
          var geoCoord = res[0][i].geoCoord;
          list1.push({
            geometry: {
              type: 'Point',
              coordinates: geoCoord
            },
            properties: {
              time: Math.random() * 100
            }
          })
        }
        // 数据2
        for (let i in res[1]) {
          var geoCoord = res[1][i].geoCoord;
          list2.push({
            geometry: {
              type: 'Point',
              coordinates: geoCoord
            },
            properties: {
              time: Math.random() * 10
            }
          })
        }
        // 数据3
        for (let i in res[2]) {
          var geoCoord = res[1][i].geoCoord;
          list3.push({
            geometry: {
              type: 'Point',
              coordinates: geoCoord
            },
            properties: {
              time: Math.random() * 10
            }
          })
        }

        // 加载图层1
        this.view.addLayer(new mapvgl.PointLayer({
          blend: 'lighter',
          shape: 'circle',
          color: 'rgba(255, 77, 77, 0.8)', 
          data: list1,
          size: 1
        }));

        // 加载图层2
        this.view.addLayer(new mapvgl.PointLayer({
          blend: 'lighter',
          shape: 'circle',
          color: 'rgba(255, 204, 0, 0.6)',
          data: list2,
          size: 1.5
        }));

        // 加载图层3
        this.view.addLayer(new mapvgl.PointLayer({
          blend: 'lighter',
          shape: 'circle',
          color: 'rgba(255, 255, 0, 0.6)',
          data: list3,
          size: 2
        }));

        // 加载动画
        this.view.addLayer(new mapvgl.PointTripLayer({
          blend: 'lighter',
          shape: 'circle',
          startTime: 0,
          endTime: 100,
          step: 0.1,
          trailLength: 10,
          color: 'rgba(255, 255, 153, 0.5)',
          data: list1,
          size: 1.5
        }));

      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>