// plugins/chart.js

import Chart from "chart.js/auto";

const ChartPlugin = {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  },
};

export default ChartPlugin;
