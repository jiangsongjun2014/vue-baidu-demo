<template>
  <div>
    <div class="map" id="map_container"></div>
  </div>
</template>

<script>
import { initMap, whiteStyle } from '@/utils/common'

export default {
  data () {
    return {
      map: null,
      view: null,
    };
  },
  components: {},
  computed: {},
  mounted () {
    this.InitMap()
  },
  methods: {
    InitMap(){
      this.map = initMap({
        tilt: 60,
        heading: 0,
        center: [116.305354,40.055018],
        zoom: 17,
        style: whiteStyle,
        skyColors: [
          // 地面颜色
          'rgba(226, 237, 248, 0)',
          // 天空颜色
          'rgba(186, 211, 252, 1)'
        ]
      });

      this.view = new mapvgl.View({
        effects: [new mapvgl.BloomEffect({
          threshold: 0.7,
          blurSize: 2
        })],
        map: this.map
      });

      this.getData()
    },
    // 加载数据
    getData(){
      var data = [
        {geometry: {type: 'Point', coordinates: [12946640.9, 4846560.26]}, properties: {count: 40}},
        {geometry: {type: 'Point', coordinates: [12946231.31, 4846400.12]}, properties: {count: 100}},
        {geometry: {type: 'Point', coordinates: [12946200.00, 4846422.77]}, properties: {count: 100}},
        {geometry: {type: 'Point', coordinates: [12947392.81, 4846374.69]}, properties: {count: 50, color: [1, 0.8, 0.1, 0.6]} },
        {geometry: {type: 'Point', coordinates: [12948199.31, 4846418.29]}, properties: {count: 10}},
        {geometry: {type: 'Point', coordinates: [12947907.69279, 4846745.90766]}, properties: {size: 10}},
        {geometry: {type: 'Point', coordinates: [12947819.42551, 4845828.57226]}, properties: {size: 20}},
        {geometry: {type: 'Point', coordinates: [12947844.91889, 4845828.57226]}},
        {geometry: {type: 'Point', coordinates: [12947823.10181, 4845798.18993]}, properties: {count: 30}},
        {geometry: {type: 'Point', coordinates: [12946312.53368, 4846347.18185]}, properties: {count: 50}},
        {geometry: {type: 'Point', coordinates: [12946333.55, 4846333.88]}, properties: {count: 50}},
        {geometry: {type: 'Point', coordinates: [12946348.50099, 4846401.1496]}, properties: {count: 70}}
      ];

      // 创建图层
      var pointLayer = new mapvgl.PointLayer({
        size: function (data) {
          if (data.properties) {
            return data.properties.size * 10 || 100;
          }
          return 100;
        },
        // size: 120,
        color: '#ac3370aa',
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中数据项索引
        selectedColor: '#ff0000', // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        onClick: (e) => { // 点击事件
          console.log(e);
        },
      });

      // 加载图层
      this.view.addLayer(pointLayer);

      // 加载图层数据
      pointLayer.setData(data);
      
      // 更改图层
      setTimeout(() => {
        pointLayer.setOptions({
          size: 50,
          blend: 'lighter',
          color: 'rgba(255, 0, 102, 0.7)',
          borderWidth: 5,
          borderColor: 'rgba(20, 22, 44, 0.7)'
        });
      }, 5000);
    }
  }
}
</script>

<style lang='less' scoped>

</style>