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
        tilt: 60,
        heading: 0,
        center: [109.792816,27.702774],
        zoom: 5,
        style: whiteStyle,
        skyColors: [
          // 地面颜色
          'rgba(226, 237, 248, 0)',
          // 天空颜色
          'rgba(186, 211, 252, 1)'
        ]
      });

      // 创建视图
      this.view = new mapvgl.View({
        map: this.map
      });

      // 创建图层
      this.layer = new mapvgl.IconLayer({
        width: 100 / 4,
        height: 153 / 4,
        offset: [0, -153 / 8],
        opacity: 0.8,
        icon: require('@/assets/images/marker.png'),
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: '#ff0000', // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        onClick: (e) => { // 点击事件
          console.log('click', e);
        },
        onDblClick: e => {
          console.log('double click', e);
        },
        onRightClick: e => {
          console.log('right click', e);
        }
      });

      this.getData()
    },
    // 获取数据
    getData(){
      var data = [];

      var citys = [
        '北京', '天津', '上海', '重庆', '石家庄', '太原', '呼和浩特', '哈尔滨',
        '长春', '沈阳', '济南', '南京', '合肥', '杭州', '南昌', '福州', '郑州',
        '武汉', '长沙', '广州', '南宁', '西安', '银川', '兰州', '西宁', '乌鲁木齐',
        '成都', '贵阳', '昆明', '拉萨', '海口'
      ];

      // 构造数据
      for (let i in citys) {
        var cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[i]);
        data.push({
          geometry: {
            type: 'Point',
            coordinates: [cityCenter.lng - 2 + Math.random() * 4, cityCenter.lat - 2 + Math.random() * 4]
          },
        });
      }

      this.layer.setData(data);
      this.view.addLayer(this.layer);

    }
  }
}
</script>

<style lang='less' scoped>

</style>