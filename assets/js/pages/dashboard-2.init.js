var options = {
    series: [70],
    chart: { height: 120, type: "radialBar" },
    plotOptions: {
      radialBar: {
        offsetY: -12,
        hollow: {
          margin: 5,
          size: "60%",
          background: "rgba(59, 93, 231, .25)",
        },
        dataLabels: {
          name: { show: !1 },
          value: { show: !0, fontSize: "12px", offsetY: 5 },
          style: { colors: ["#fff"] },
        },
      },
    },
    colors: ["#388A1C"],
  },
  chart = new ApexCharts(document.querySelector("#radial-chart-1"), options);
chart.render();
options = {
  series: [81],
  chart: { height: 120, type: "radialBar" },
  plotOptions: {
    radialBar: {
      offsetY: -12,
      hollow: { margin: 5, size: "60%", background: "rgba(69, 203, 133, .25)" },
      dataLabels: {
        name: { show: !1 },
        value: { show: !0, fontSize: "12px", offsetY: 5 },
        style: { colors: ["#fff"] },
      },
    },
  },
  colors: ["#45CB85"],
};
(chart = new ApexCharts(
  document.querySelector("#radial-chart-2"),
  options
)).render();
options = {
  series: [
    {
      name: "Series A",
      type: "column",
      data: [23, 11, 53, 27, 13, 19, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Series B",
      type: "area",
      data: [36, 47, 33, 41, 22, 37, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "Series C",
      type: "line",
      data: [46, 57, 43, 51, 32, 47, 53, 31, 51, 66, 37, 53],
    },
  ],
  chart: { height: 275, type: "line", stacked: !1, toolbar: { show: !1 } },
  stroke: { width: [0, 2, 2], curve: "smooth", dashArray: [0, 0, 4] },
  plotOptions: { bar: { columnWidth: "15%", endingShape: "rounded" } },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: !1,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  colors: ["#388A1C", "#eeb902", "#5fd195"],
  markers: { size: 0 },
};
(chart = new ApexCharts(
  document.querySelector("#mixed-chart"),
  options
)).render();
options = {
  series: [
    { name: "Series A", data: [24, 66, 42, 88, 62, 24, 45, 12, 36, 10] },
  ],
  chart: {
    height: 100,
    type: "line",
    sparkline: { enabled: !0 },
    toolbar: { show: !1 },
  },
  dataLabels: { enabled: !1 },
  stroke: { curve: "smooth", width: 3 },
  colors: ["#388A1C"],
};
(chart = new ApexCharts(
  document.querySelector("#sales-report-chart"),
  options
)).render();
options = {
  series: [{ data: [3, 6, 4, 7, 9, 4] }],
  chart: { type: "bar", height: 250, toolbar: { show: !1 } },
  plotOptions: {
    bar: { horizontal: !0, barHeight: "24%", endingShape: "rounded" },
  },
  dataLabels: { enabled: !1 },
  colors: ["#556ee6"],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    title: { text: "thousands" },
  },
};
(chart = new ApexCharts(
  document.querySelector("#bar-chart"),
  options
)).render();
options = {
  series: [
    { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
    { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
    { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
  ],
  chart: {
    height: 250,
    type: "radar",
    dropShadow: { enabled: !0, blur: 1, left: 1, top: 1 },
    toolbar: { show: !1 },
  },
  stroke: { width: 0 },
  fill: { opacity: 0.4 },
  markers: { size: 0 },
  colors: ["#388A1C", "#5fd195", "#eeb902"],
  xaxis: { categories: ["2014", "2015", "2016", "2017", "2018", "2019"] },
};
(chart = new ApexCharts(
  document.querySelector("#radar-chart"),
  options
)).render();
