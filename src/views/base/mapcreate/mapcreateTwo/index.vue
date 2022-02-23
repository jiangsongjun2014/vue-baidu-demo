<template>
  <div>
    <div class="map_one" id="map_one"></div>
    <div class="map_two" id="map_two"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      map_one: null,
      map_two: null,
    }
  },
  mounted(){
    this.InitMap()
  },
  methods: {
    InitMap(){
      this.map_one = new BMapGL.Map('map_one');
      this.map_one.centerAndZoom( new BMapGL.Point(116.404, 39.915), 9);
      this.map_one.enableScrollWheelZoom();

      this.map_two = new BMapGL.Map('map_two');
      this.map_two.centerAndZoom( new BMapGL.Point(116.404, 39.915), 15);
      this.map_two.enableScrollWheelZoom();
    }
  }
}
</script>

<style>
.map_one, .map_two{
  height: 50vh;
  width: 100%;
}
</style>