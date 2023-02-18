<template>
  <div style="width: 800px"><canvas ref="bar" id="acquisitions"></canvas></div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    (async () => {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

      new Chart(this.$refs.bar, {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    })();
  },
};
</script>

<style></style>
