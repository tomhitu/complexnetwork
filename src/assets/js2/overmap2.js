/**
 * set paris map view
 */


let chartDom2 = document.getElementById('paris');
let myChart2 = echarts.init(chartDom2);
let option2;

let datalocal2;

let oneortwo = 0;
let shortesttype = 0;


myChart2.showLoading();
$(document).ready(function() {
    axios.get('https://tomhitu.pythonanywhere.com/paris_map_generate?type=paris')
        .then(function (response) {
            myChart2.hideLoading();
            let data = response.data;
            datalocal2 = data;
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
                            distance: 200,
                            panMouseButton: 'left',
                            rotateMouseButton: 'right',
                            animation: true,
                            animationDurationUpdate: 100,
                            animationEasingUpdate: 'cubicInOut',
                            minDistance: 1,
                            maxDistance: 500,
                            alpha: 70,
                            beta: 2,
                            center: [-7,12,-12]
                        },
                        silent: true,
                        roaming: true,
                        itemStyle: {
                            areaColor: '#FFFACD',
                            borderColor: '#333',
                            borderWidth: 1,
                        },
                        zoom: 1.2,
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
                            data: data.nodes.map(function (node) {
                                const type = 'cluster_degree'
                                let color = node[type] === 0 ? 'red' : 'white';
                                let opacity = node[type] === 0 ? 1 : 0.1
                                return {
                                    name: node.name,
                                    value: node.value,
                                    itemStyle: {
                                        color: color,
                                        opacity: opacity,
                                    }
                                }
                            }),
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
                                show: false,
                                trailWidth: 1,
                                trailOpacity: 0.5,
                                trailLength: 0.2,
                                constantSpeed: 5,
                            },
                            blendMode: "lighter",
                            lineStyle: {
                                width: 1,
                                opacity: 0.1,
                                curveness: 0.3,
                                z: 2,
                                color: 'white'
                            },
                            data: data.edges.map(function (e) {
                                return {
                                    coords: [e.value[0], e.value[1]]
                                };
                            }),
                        },
                    ],
                })
        })
        .catch(function () {
            alert("Something Error on map2!");
        });
})

myChart2.resize();