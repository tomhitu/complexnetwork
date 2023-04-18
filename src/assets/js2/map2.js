/**
 * set paris map view
 */


let chartDom2 = document.getElementById('paris');
let myChart2 = echarts.init(chartDom2);
let option2;

let datalocal2;


// show loading
/*
setTimeout(() => {
    // hidden loading
    const loading = document.getElementById("loading");
    loading.style.display = "none";
}, 3000); // suppose loading time is 3s
*/

myChart2.showLoading();
$(document).ready(function() {
    axios.get('http://127.0.0.1:8000/paris_map_generate?type=paris')
        .then(function (response) {
            myChart.hideLoading();
            let data = response.data;
            datalocal2 = data;
            console.log(datalocal2);
            myChart2.setOption(
                option2 = {
                    geo3D: {
                        map: "France",
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
                            minDistance: 10,
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
                                color: 'white',
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
                                const color = '#fff';
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
            alert("Something Error!");
        });
})


option2 && myChart2.setOption(option2);