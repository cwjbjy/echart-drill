<template>
  <div class="home" ref="echarts"></div>
</template>

<script>
import * as echarts from "echarts";
import { getJson, getCode } from "../assets/mapJson";
export default {
  name: "Home",
  data() {
    return {
      map: "china",
    };
  },
  mounted() {
    this.getModel();
  },
  methods: {
    getModel() {
      let zoom = 1;
      //对几个省进行特殊缩放处理，防止地区过大超出视图区
      switch (getCode(this.map)) {
        case "230000":
          zoom = 0.7;
          break;
        case "350000":
          zoom = 0.8;
          break;
        case "150000":
          zoom = 0.75;
          break;
        case "370000":
          zoom = 0.85;
          break;
        case "410000":
          zoom = 0.8;
          break;
        case "420000":
          zoom = 0.8;
          break;
        case "440000":
          zoom = 0.7;
          break;
        case "460000":
          zoom = 0.9;
          break;
        case "210000":
          zoom = 0.75;
          break;
        case "620000":
          zoom = 0.7;
          break;
        case "540000":
          zoom = 0.85;
          break;
        case "630000":
          zoom = 0.85;
          break;
        case "640000":
          zoom = 0.9;
          break;
        case "650000":
          zoom = 0.9;
          break;
        default:
          zoom = 1;
          break;
      }
      let _this = this;
      let echartsInstance = echarts.init(this.$refs.echarts);
      echartsInstance.clear();
      echarts.registerMap(this.map, getJson(this.map));
      let option = {
        title: {},
        tooltip: {},
        series: [
          {
            name: "地图",
            type: "map",
            roam: true,
            zoom,
            map: this.map,
            data: [], //{name,value}省份对应的数值,与业务有关
          },
        ],
      };
      echartsInstance.setOption(option);
      echartsInstance.on("click", (params) => {
        this.map = params.name;
        echarts.dispose(echartsInstance);
        _this.getModel();
      });
    },
  },
};
</script>

<style>
.home {
  height: 100vh;
  width: 100%;
}
</style>