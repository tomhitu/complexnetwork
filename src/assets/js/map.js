/**
 * set map view
 */

const spinner = document.querySelector('.spinner');


let chartDom = document.getElementById('main');
let myChart = echarts.init(chartDom);
let option;

let datalocal;

let tcolor = {
  'D': 'rgb(255, 165, 0)',
  'C': 'rgb(0, 255, 255)',
  'G': 'rgb(0, 0, 255)',
  'Z': 'rgb(128, 0, 128)',
  'T': 'rgb(255, 255, 0)',
  'K': 'rgb(126,4,4)',
  'Y': 'rgb(0, 255, 0)'
};

/*
// show loading
setTimeout(() => {
  // hidden loading
  const loading = document.getElementById("loading");
  loading.style.display = "none";
}, 3000); // suppose loading time is 3s
*/

myChart.showLoading();
$(document).ready(function() {
  axios.get('https://tomhitu.pythonanywhere.com/map_generate?type=map')
          .then(function (response) {
            myChart.hideLoading();
            let data = response.data;
            datalocal = data;
            myChart.setOption(
                    option = {
                      geo3D: {
                        map: "china",
                        boxWidth: 100,
                        boxHeight: 10,
                        boxDepth: 100,
                        shading: "realistic",
                        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: "#191919",
                          },
                          {
                            offset: 1,
                            color: "#191919",
                          },
                        ]),
                        regionHeight: 0.5,
                        groundPlane: {
                          show: true,
                          color: "#333",
                        },
                        light: {
                          main: {
                            intensity: 1,
                            shadow: false,
                            alpha: 30,
                          },
                          ambient: {
                            intensity: 0,
                          },
                        },
                        viewControl: {
                          distance: 120,
                          panMouseButton: 'left',
                          rotateMouseButton: 'right',
                          animation: true,
                          animationDurationUpdate: 100,
                          animationEasingUpdate: 'cubicInOut',
                          minDistance: 1,
                          maxDistance: 140,
                          alpha: 35,
                        },
                        silent: true,
                        roaming: true,
                        itemStyle: {
                          areaColor: '#FFFACD',
                          borderColor: '#333',
                          borderWidth: 1,
                        },
                        zoom: 1.2,
                        center: [104, 80],
                        // label: {
                        //   show: false,
                        // },
                      },
                      series: [
                        {
                          name: "Nodes",
                          type: "scatter3D",
                          coordinateSystem: "geo3D",
                          symbolSize: 8,
                          data: data.nodes,
                          itemStyle: {
                            color: 'royalblue',
                            opacity: 0.5,
                            z: 1
                          },
                          emphasis: { // hover node color
                            itemStyle: {
                              color: 'rgba(0, 255, 0, 1)', // 绿色
                              opacity: 1
                            },
                            label: {
                              show: true,
                              formatter: function(params) {
                                  return params.name;
                              },
                              textStyle: {
                                color: '#000',
                              }
                            },
                          },
                        },
                        {
                          name: "Edges",
                          type: "lines3D",
                          coordinateSystem: "geo3D",
                          effect: {
                            show: true,
                            trailWidth: 1,
                            trailOpacity: 0.5,
                            trailLength: 0.2,
                            constantSpeed: 5,
                          },
                          blendMode: "lighter",
                          lineStyle: {
                            width: 1,
                            opacity: 0.5,
                            curveness: 0.3,
                            z: 2
                          },
                          data: data.edges.map(function (e) {
                            const sourceNode = data.nodes.find((node) => node.name === e.source);
                            const targetNode = data.nodes.find((node) => node.name === e.target);
                            const color = /\d/.test(e.train[0]) ? '#ff0000' : tcolor[e.train[0]];
                            return {
                              coords: [sourceNode.value, targetNode.value],
                              lineStyle: {
                                color: color
                              }
                            };
                          }),
                        },
                      ],
                    })
          })
          .catch(function () {
            alert("Something Error on map!");
          });
})

option && myChart.setOption(option);