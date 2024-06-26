$(document).ready(function () {
  function i() {
    $("#sparkline1").sparkline([20, 40, 30], {
      type: "pie",
      height: "200",
      resize: !0,
      sliceColors: ["#45cb85", "#388A1C", "#e9ecef"],
    }),
      $("#sparkline2").sparkline(
        [5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10, 4, 7, 10],
        {
          type: "bar",
          height: "200",
          barWidth: 10,
          barSpacing: 7,
          barColor: "#eeb902",
        }
      ),
      $("#sparkline3").sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
        type: "bar",
        height: "200",
        barWidth: "10",
        resize: !0,
        barSpacing: "7",
        barColor: "#45cb85",
      }),
      $("#sparkline3").sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
        type: "line",
        height: "200",
        lineColor: "#388A1C",
        fillColor: "transparent",
        composite: !0,
        lineWidth: 2,
        highlightLineColor: "rgba(108, 120, 151, 0.1)",
        highlightSpotColor: "rgba(108, 120, 151, 0.2)",
      }),
      $("#sparkline4").sparkline(
        [0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10],
        {
          type: "line",
          width: "100%",
          height: "200",
          lineColor: "#556ee6",
          fillColor: "transparent",
          spotColor: "#556ee6",
          lineWidth: 2,
          minSpotColor: void 0,
          maxSpotColor: void 0,
          highlightSpotColor: void 0,
          highlightLineColor: void 0,
        }
      ),
      $("#sparkline5").sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
        type: "line",
        width: "100%",
        height: "200",
        chartRangeMax: 50,
        resize: !0,
        lineColor: "#388A1C",
        fillColor: "rgba(59, 93, 231, 0.3)",
        highlightLineColor: "rgba(108, 120, 151, 0.1)",
        highlightSpotColor: "rgba(108, 120, 151, 0.2)",
      }),
      $("#sparkline5").sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
        type: "line",
        width: "100%",
        height: "200",
        chartRangeMax: 40,
        lineColor: "#45cb85",
        fillColor: "rgba(69, 203, 133, 0.3)",
        composite: !0,
        resize: !0,
        highlightLineColor: "rgba(108, 120, 151, 0.1)",
        highlightSpotColor: "rgba(108, 120, 151, 0.2)",
      }),
      $("#sparkline6").sparkline(
        [
          4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1,
          5, 6, 4, 3, 7,
        ],
        { type: "discrete", width: "280", height: "200", lineColor: "#ffffff" }
      ),
      $("#sparkline7").sparkline([10, 12, 12, 9, 7], {
        type: "bullet",
        width: "280",
        height: "80",
        targetColor: "#556ee6",
        performanceColor: "#f46a6a",
      }),
      $("#sparkline8").sparkline(
        [4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100],
        {
          type: "box",
          width: "280",
          height: "80",
          boxLineColor: "#45cb85",
          boxFillColor: "#f1f1f1",
          whiskerColor: "#45cb85",
          outlierLineColor: "#45cb85",
          medianColor: "#45cb85",
          targetColor: "#45cb85",
        }
      ),
      $("#sparkline9").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        height: "80",
        width: "100%",
        type: "tristate",
        posBarColor: "#388A1C",
        negBarColor: "#45cb85",
        zeroBarColor: "#ff715b",
        barWidth: 8,
        barSpacing: 3,
        zeroAxis: !1,
      });
  }
  var r;
  $(window).resize(function (e) {
    clearTimeout(r), (r = setTimeout(i, 500));
  }),
    i();
});
