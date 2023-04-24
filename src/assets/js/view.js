/**
 * change view
 */

let ifrun = true;
let cluster_type = ['state_num', 'cluster_degree', 'cluster_Degree_Centrality', 'cluster_Clustering_Coefficients', 'cluster_Closeness_Centrality', 'cluster_Betweenness_Centrality', 'cluster_Eigenvector_Centrality']
let cluster_state_type = ['stat_num', 'cluster_state_degree', 'cluster_state_Degree_Centrality', 'cluster_state_Clustering_Coefficients', 'cluster_state_Closeness_Centrality', 'cluster_state_Betweenness_Centrality', 'cluster_state_Eigenvector_Centrality']
let cluster_edge_type = ['train', 'cluster_speed', 'cluster_across', 'cluster_overnight', 'cluster_distance']

let paris_cluster_type = ['cluster_lat_lon', 'cluster_degree', 'cluster_Degree_Centrality', 'cluster_Clustering_Coefficients', 'cluster_Closeness_Centrality', 'cluster_Betweenness_Centrality', 'cluster_Eigenvector_Centrality']
let paris_cluster_edge_type = ['cluster_type', 'cluster_across', 'cluster_distance']

let cluchinanode = {"state_num": 30, "cluster_degree": 29, "cluster_state_degree": 29, "cluster_Degree_Centrality": 29, "cluster_state_Degree_Centrality": 29, "cluster_Clustering_Coefficients": 27, "cluster_state_Clustering_Coefficients": 27, "cluster_Closeness_Centrality": 1, "cluster_state_Closeness_Centrality": 1, "cluster_Betweenness_Centrality": 1, "cluster_state_Betweenness_Centrality": 1, "cluster_Eigenvector_Centrality": 1, "cluster_state_Eigenvector_Centrality": 1}
let cluchinaedge = {"cluster_speed": 4, "cluster_across": 1, "cluster_overnight": 1, "cluster_distance": 2}
let cluparisnode = {"cluster_lat_lon": 5, "cluster_degree": 1, "cluster_Degree_Centrality": 1, "cluster_Clustering_Coefficients": 8, "cluster_Closeness_Centrality": 1, "cluster_Betweenness_Centrality": 1, "cluster_Eigenvector_Centrality": 2}
let cluparisedge = {"cluster_across": 1, "cluster_type": 5, "cluster_distance": 2}


function getRandomColor(i) {
  var startR = 255, startG = 32, startB = 29;
  var endR = 66, endG = 195, endB = 83;

  var gapcolor = colornumber - 1;

  var stepR = (endR - startR) / gapcolor;
  var stepG = (endG - startG) / gapcolor;
  var stepB = (endB - startB) / gapcolor;

    var r = Math.floor(startR + i * stepR);
    var g = Math.floor(startG + i * stepG);
    var b = Math.floor(startB + i * stepB);

    var hexR = r.toString(16).padStart(2, '0');
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');

    var hexColor = '#' + hexR + hexG + hexB;

  return hexColor;
}


let colorslist = [];
let colornumber = 30;

for (let i = 0; i < colornumber; i++) {
  let color = getRandomColor(i);
  colorslist.push(color);
}

function recolor(maxnumcolor) {
  colornumber = maxnumcolor + 1
  colorslist = []
  for (let i = 0; i < colornumber; i++) {
    let color = getRandomColor(i);
    colorslist.push(color);
  }
}


function getstateRandomColor(existingColors) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var hexR = r.toString(16).padStart(2, '0');
  var hexG = g.toString(16).padStart(2, '0');
  var hexB = b.toString(16).padStart(2, '0');

  var hexColor = '#' + hexR + hexG + hexB;

  if (existingColors.includes(hexColor)) {
    return getstateRandomColor(existingColors);
  }
  return hexColor;
}

let statecolorslist = [];

for (let i = 0; i < 30; i++) {
  let color = getstateRandomColor(statecolorslist);
  statecolorslist.push(color);
}


function showtype(isshow, num) {
  let typetrain = document.getElementById('typeoftrian');
  let noedge = document.getElementById('noedge');
  let noother = document.getElementById('noother');
  let lefttop = document.getElementById('lefttop');
  let sdmenu = document.getElementById('sdmenu');
  let pemenu = document.getElementById('pemenu');
  let nrmenu = document.getElementById('nrmenu');
  let clmenu = document.getElementById('clmenu');
  let hemenu = document.getElementById('hemenu');
  let cluster = document.getElementById('clustertype');
  if (isshow) {
    shortesttype = 0;
    if (oneortwo === 0) {
      typetrain.style.display = 'block';
    }
    else {
      typetrain.style.display = 'none';
    }
    noother.style.display = 'block';
    noedge.style.display = 'none';
  } else {
    shortesttype = 1;
    typetrain.style.display = 'none';
    noother.style.display = 'none';
  }
  switch(num) {
    case 0:
      defaultcolor();
      lefttop.innerHTML = 'Shortest Path';
      mapboard.style.display = 'block';
      dashboard.style.display = 'none';
      autoboard.style.display = 'none';
        sdmenu.style.display = 'block';
        pemenu.style.display = 'none';
        nrmenu.style.display = 'none';
        clmenu.style.display = 'none';
        hemenu.style.display = 'none';
        noedge.style.display = 'none';
        cluster.style.display = 'none';
      break;
    case 1:
      lefttop.innerHTML = 'New Pred Egde';
      nonepe.style.display = 'block';
      resultpe.style.display = 'none';
        mapboard.style.display = 'block';
        dashboard.style.display = 'none';
        autoboard.style.display = 'none';
        sdmenu.style.display = 'none';
        pemenu.style.display = 'block';
        nrmenu.style.display = 'none';
        clmenu.style.display = 'none';
        hemenu.style.display = 'none';
        noedge.style.display = 'none';
        cluster.style.display = 'none';
        myChart.setOption({
            series: [{
              name: "Nodes",

              itemStyle: {
                opacity: 0.3,
                color: 'white',
                z: 1
              },
            }, {
              name: "Edges",

              data: datalocal.edges.map(function (e) {
                const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
                const targetNode = datalocal.nodes.find((node) => node.name === e.target);
                const color = 'white';
                return {
                  coords: [sourceNode.value, targetNode.value],
                  lineStyle: {
                    color: color
                  }
                };
              }),
            },]
        })
          break;
      case 2:
        lefttop.innerHTML = 'Network Resilience';
        let radio1_button = document.getElementById("value-1");
        radio1_button.checked = true;
        let radio2_button = document.getElementById("value-2");
        radio2_button.checked = false;
        showdelete();
        sdmenu.style.display = 'none';
        pemenu.style.display = 'none';
        nrmenu.style.display = 'block';
        clmenu.style.display = 'none';
        hemenu.style.display = 'none';
        noedge.style.display = 'none';
        cluster.style.display = 'none';
        noother.style.display = 'block';
        break;
      case 3:
        lefttop.innerHTML = 'Clustering';
        mapboard.style.display = 'block';
        dashboard.style.display = 'none';
        autoboard.style.display = 'none';
        sdmenu.style.display = 'none';
        pemenu.style.display = 'none';
        nrmenu.style.display = 'none';
        clmenu.style.display = 'block';
        hemenu.style.display = 'none';
        noedge.style.display = 'block';
        cluster.style.display = 'flex';
        ifrun = true;
        cltype(3);
        pariscltype(0);
        break;
      case 4:
        lefttop.innerHTML = 'Hidden Edge';
        mapboard.style.display = 'block';
        dashboard.style.display = 'none';
        autoboard.style.display = 'none';
        sdmenu.style.display = 'none';
        pemenu.style.display = 'none';
        nrmenu.style.display = 'none';
        clmenu.style.display = 'none';
        hemenu.style.display = 'block';
        noedge.style.display = 'none';
        cluster.style.display = 'none';
        myChart.setOption({
            series: [{
              name: "Nodes",
              itemStyle: {
                opacity: 0.3,
                color: 'white',
                z: 1
              },
            }, {
              name: "Edges",
              data: datalocal.edges.map(function (e) {
                const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
                const targetNode = datalocal.nodes.find((node) => node.name === e.target);
                const color = 'white';
                return {
                  coords: [sourceNode.value, targetNode.value],
                  lineStyle: {
                    color: color
                  }
                };
              }),
            },]
        })
        break;
      default:
          break;
  }
}

function animation() {
  ifrun = !ifrun;
  myChart.setOption({
    series: [{
      name: "Edges",
      effect: {
        show: ifrun
      }
    }]
  })
  myChart2.setOption({
    series: [{
      name: "Edges",
      effect: {
        show: ifrun
      }
    }]
  })
}

// updata map
function updateView(view) {
  myChart.setOption({
    geo3D: {
      viewControl: {
        alpha: view.alpha,
        beta: view.beta
      }
    }
  });
}

// default
function defaultcolor() {
  myChart.setOption({
    series: [
        {
          name: "Nodes",
          type: "scatter3D",
          coordinateSystem: "geo3D",
          symbolSize: 8,
          data: datalocal.nodes,
          itemStyle: {
            color: 'royalblue',
            opacity: 0.3,
            z: 1
          },
          emphasis: { // hover node color
            itemStyle: {
              color: 'rgba(0, 255, 0, 1)' // 绿色
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
            show: ifrun,
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
          data: datalocal.edges.map(function (e) {
            const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
            const targetNode = datalocal.nodes.find((node) => node.name === e.target);
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
  let tmoption = myChart.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
  myChart.setOption(predOption);
}


function are_numbers_adjacent_in_list(n1, n2, lst) {
  for (let i = 0; i < lst.length - 1; i++) {
    if ((lst[i] === n1 && lst[i + 1] === n2) || (lst[i] === n2 && lst[i + 1] === n1)) {
      return true;
    }
  }
  return false;
}


// show the shortest path on map
function showshortestpath(routeless, routesd) {
  routesd = routesd.map(num => parseInt(num, 10));
  routeless = routeless.map(num => parseInt(num, 10));
  myChart.setOption({
    series: [
        {
          name: "Nodes",
          type: "scatter3D",
          coordinateSystem: "geo3D",
          symbolSize: 8,
          itemStyle: {
            z: 1
          },
          emphasis: { // hover node color
            itemStyle: {
              color: 'rgba(0, 255, 0, 1)' // 绿色
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
          data: datalocal.nodes.map(function (node) {
            const ifin = routeless.includes(node.name) || routesd.includes(node.name);
            const color = ifin ? 'royalblue' : 'grey';
            const opcity = ifin ? 1 : 0.1;
            return {
                name: node.name,
                value: node.value,
                itemStyle: {
                  color: color,
                  opacity: opcity,
                }
            }
          }),
        },
        {
          name: "Edges",
          type: "lines3D",
          coordinateSystem: "geo3D",
          effect: {
            show: ifrun,
            trailWidth: 1,
            trailOpacity: 0.5,
            trailLength: 0.2,
            constantSpeed: 5,
          },
          blendMode: "lighter",
          lineStyle: {
            curveness: 0.3,
            width: 1,
            z: 2
          },
          data: datalocal.edges.map(function (e) {
            const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
            const targetNode = datalocal.nodes.find((node) => node.name === e.target);
            const ifless = are_numbers_adjacent_in_list(e.source, e.target, routeless);
            const ifsd = are_numbers_adjacent_in_list(e.source, e.target, routesd);
            const color = ifless ? '#0033ff' : ifsd ? '#ff0000' : 'grey';
            const opacity = ifless ? 1 : ifsd ? 1 : 0;

            return {
              coords: [sourceNode.value, targetNode.value],
              lineStyle: {
                color: color,
                opacity: opacity,
              }
            };
          }),
        },
    ],
  })
  let tmoption = myChart.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
  myChart.setOption(predOption);
}

function showparisshortestpath(routesd) {
  routesd = routesd.map(num => parseInt(num, 10));
  myChart2.setOption({
    series: [
      {
        name: "Nodes",
        type: "scatter3D",
        coordinateSystem: "geo3D",
        symbolSize: 8,
        itemStyle: {
          z: 1
        },
        emphasis: { // hover node color
          itemStyle: {
            color: 'rgba(0, 255, 0, 1)' // 绿色
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
        data: datalocal2.nodes.map(function (node) {
          const ifin = routesd.includes(node.name);
          const color = ifin ? 'royalblue' : 'grey';
          const opcity = ifin ? 1 : 0.1;
          return {
            name: node.name,
            value: node.value,
            itemStyle: {
              color: color,
              opacity: opcity,
            }
          }
        }),
      },
      {
        name: "Edges",
        type: "lines3D",
        coordinateSystem: "geo3D",
        effect: {
          show: ifrun,
          trailWidth: 1,
          trailOpacity: 0.5,
          trailLength: 0.2,
          constantSpeed: 5,
        },
        blendMode: "lighter",
        lineStyle: {
          curveness: 0.3,
          width: 1,
          z: 2
        },
        data: datalocal2.edges.map(function (e) {
          const ifsd = are_numbers_adjacent_in_list(e.source, e.target, routesd);
          const color = ifsd ? '#ff0000' : 'grey';
          const opacity = ifsd ? 1 : 0;

          return {
            coords: [e.value[0], e.value[1]],
            lineStyle: {
              color: color,
              opacity: opacity,
            }
          };
        }),
      },
    ],
  })
  let tmoption = myChart2.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
  myChart2.setOption(predOption);
}


// show the prediction edges on map
function showprededges(newnode, newedges) {
  if (oneortwo === 0) {
    let tmoption = myChart.getOption();
    let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
    let predOption = {
      ...tmoption,
      series: predSeries,
    };

    predOption.series.push({
      name: "Nodes2",
      type: "scatter3D",
      coordinateSystem: "geo3D",
      symbolSize: 8,
      itemStyle: {
        z: 1
      },
      emphasis: { // hover node color
        itemStyle: {
          color: 'rgba(0, 255, 0, 1)' // 绿色
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
      data: newnode.map(function (node) {
        return {
          name: node.name,
          value: node.value,
          itemStyle: {
            color: 'royalblue',
            opacity: 1,
          }
        }
      }),
    })
    predOption.series.push({
      name: "Edges2",
      type: "lines3D",
      coordinateSystem: "geo3D",
      effect: {
        show: ifrun,
        trailWidth: 1,
        trailOpacity: 0.5,
        trailLength: 0.2,
        constantSpeed: 5,
      },
      blendMode: "lighter",
      lineStyle: {
        curveness: 0.3,
        width: 3,
        z: 2
      },
      data: newedges.map(function (e) {
        const sourceNode = newnode.find((node) => node.name === e.source);
        const targetNode = datalocal.nodes.find((node) => node.name === e.target);
        return {
          coords: [sourceNode.value, targetNode.value],
          lineStyle: {
            color: '#ff0000',
            opacity: 1,
          }
        };
      }),
    })
    myChart.setOption(predOption);
  }
  else {
    // console.log(newnode, newedges);
    myChart2.setOption({
      series: [
        {
          name: "Nodes",
          itemStyle: {
            opacity: 0.1
          }
        },
        {
          name: "Edges",
          lineStyle: {
            opacity: 0.1
        }
        }
      ]
    })
    let tmoption = myChart2.getOption();
    let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
    let predOption = {
      ...tmoption,
      series: predSeries,
    };

    predOption.series.push({
      name: "Nodes2",
      type: "scatter3D",
      coordinateSystem: "geo3D",
      symbolSize: 8,
      itemStyle: {
        z: 1
      },
      emphasis: { // hover node color
        itemStyle: {
          color: 'rgba(0, 255, 0, 1)' // 绿色
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
      data: newnode.map(function (node) {
        // console.log('newnode.name', node.name)
        // console.log('newnode.value', node.value)
        return {
          name: node.name,
          value: node.value,
          itemStyle: {
            color: 'royalblue',
            opacity: 1,
          }
        }
      }),
    })
    predOption.series.push({
      name: "Edges2",
      type: "lines3D",
      coordinateSystem: "geo3D",
      effect: {
        show: ifrun,
        trailWidth: 1,
        trailOpacity: 0.5,
        trailLength: 0.2,
        constantSpeed: 5,
      },
      blendMode: "lighter",
      lineStyle: {
        curveness: 0.3,
        width: 3,
        z: 2
      },
      data: newedges.map(function (e) {
        // console.log('newnode[0].value', newnode[0].value)
        const targetNode = datalocal2.nodes.find((node) => node.name === e.target);
        // console.log(targetNode);
        return {
          coords: [newnode[0].value, targetNode.value],
          lineStyle: {
            color: '#ff0000',
            opacity: 1,
          }
        }
      }),
    })
    myChart2.setOption(predOption);
  }
}

// show the hidden edges on map
function showhidedges(hiddennodes, hiddenedges) {
  myChart.setOption({
    series: [{
          name: "Nodes",
          type: "scatter3D",
          coordinateSystem: "geo3D",
          symbolSize: 8,
          itemStyle: {
            z: 1
          },
          emphasis: { // hover node color
            itemStyle: {
              color: 'rgba(0, 255, 0, 1)' // 绿色
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
          data: datalocal.nodes.map(function (node) {
            const ifin = hiddennodes.includes(node.name);
            const color = ifin ? 'royalblue' : 'grey';
            const opcity = ifin ? 1 : 0.1;
            return {
                name: node.name,
                value: node.value,
                itemStyle: {
                  color: color,
                  opacity: opcity,
                }
            }
          }),
        }]});
  let tmoption = myChart.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
  predOption.series.push({
          name: "Edges2",
          type: "lines3D",
          coordinateSystem: "geo3D",
          effect: {
            show: ifrun,
            trailWidth: 1,
            trailOpacity: 0.5,
            trailLength: 0.2,
            constantSpeed: 5,
          },
          blendMode: "lighter",
          lineStyle: {
            curveness: 0.3,
            width: 1,
            z: 2
          },
          data: hiddenedges.map(function (e) {
            console.log(e);
            const sourceNode = datalocal.nodes.find((node) => node.name === e[0]);
            const targetNode = datalocal.nodes.find((node) => node.name === e[1]);
            return {
              coords: [sourceNode.value, targetNode.value],
              lineStyle: {
                color: '#ff0000',
                opacity: 1,
              }
            };
          }),
        })
    myChart.setOption(predOption);
}

// show the cluster of nodes on map
function clusternodes(param) {
  recolor(cluchinanode[param])
  myChart.setOption({
    series: [
        {
          name: "Nodes",
          type: "scatter3D",
          coordinateSystem: "geo3D",
          symbolSize: 8,
          itemStyle: {
            z: 1
          },
          emphasis: { // hover node color
            itemStyle: {
              color: 'rgba(0, 255, 0, 1)' // 绿色
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
          data: datalocal.nodes.map(function (node) {
            const type = param
            let color = colorslist[node[type]]
            if (param === 'state_num') {
              color = statecolorslist[node[type]]
            }
            return {
                name: node.name,
                value: node.value,
                itemStyle: {
                  color: color,
                  opacity: 0.5,
                }
            }
          }),
        },
        {
            name: "Edges",
            type: "lines3D",
            data: datalocal.edges.map(function (e) {
              const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
              const targetNode = datalocal.nodes.find((node) => node.name === e.target);
              return {
                coords: [sourceNode.value, targetNode.value],
                lineStyle: {
                  opacity: 0,
                }
              };
            }),
        }
        ]});
  let tmoption = myChart.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
    myChart.setOption(predOption);
}

// show the cluster of nodes on map2
function clusterparisenodes(param) {
  recolor(cluparisnode[param])
  myChart2.setOption({
    series: [
      {
        name: "Nodes",
        type: "scatter3D",
        coordinateSystem: "geo3D",
        symbolSize: 8,
        itemStyle: {
          z: 1
        },
        emphasis: { // hover node color
          itemStyle: {
            color: 'rgba(0, 255, 0, 1)' // 绿色
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
        data: datalocal2.nodes.map(function (node) {
          const type = param
          let color = colorslist[node[type]];
          if (param === 'cluster_lat_lon') {
            color = statecolorslist[node[type]];
          }
          return {
            name: node.name,
            value: node.value,
            itemStyle: {
              color: color,
              opacity: 0.5,
            }
          }
        }),
      },
      {
        name: "Edges",
        type: "lines3D",
        data: datalocal2.edges.map(function (e) {
          return {
            coords: [e.value[0], e.value[1]],
            lineStyle: {
              opacity: 0,
            }
          };
        }),
      }
    ]});
  let tmoption = myChart2.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
  myChart2.setOption(predOption);
}

// if meet limitation, show the cluster of nodes on map
function ifmeetlimit(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  }
  return false;
}

// show the cluster of nodes on map with limitation
function setlimit(min, max, type) {
  console.log(type, parisclustertype);
  if (type === 0) {
    if (clustertype <= 6) {
      myChart.setOption({
        series: [
          {
            name: "Nodes",
            type: "scatter3D",
            data: datalocal.nodes.map(function (node) {
              const type = netorpro === 0 ? cluster_type[clustertype] : cluster_state_type[clustertype];
              // const color = colorslist[node[type]];
              const color = ifmeetlimit(node[type], min, max) ? '#ff0000' : 'white';
              const opacity = ifmeetlimit(node[type], min, max) ? 1 : 0.1;
              return {
                name: node.name,
                value: node.value,
                itemStyle: {
                  color: color,
                  opacity: opacity,
                }
              }
            }),
          }
        ]
      });
    }
    else {
      myChart.setOption({
        series: [
          {
            name: "Edges",
            type: "lines3D",
            data: datalocal.edges.map(function (e) {
              const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
              const targetNode = datalocal.nodes.find((node) => node.name === e.target);
              const type = cluster_edge_type[clustertype - 7];
              let color, opacity, width;
              if (type === 'train') {
                color = /\d/.test(e.train[0]) ? '#ff0000' : tcolor[e.train[0]];
                opacity = 0.5;
                width = 1;
              }
              else {
                // color = colorslist[e[type]];
                color = ifmeetlimit(e[type], min, max) ? '#ff0000' : 'white';
                opacity = ifmeetlimit(e[type], min, max) ? 1 : 0.1;
                width = ifmeetlimit(e[type], min, max) ? 5 : 1;
              }
              return {
                coords: [sourceNode.value, targetNode.value],
                lineStyle: {
                  color: color,
                  opacity: opacity,
                  width: width
                }
              };
            }),
          }
        ]
      });
    }
    let tmoption = myChart.getOption();
    let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
    let predOption = {
      ...tmoption,
      series: predSeries,
    };
    myChart.setOption(predOption);
  }
  else {
    if (parisclustertype <= 6) {
      myChart2.setOption({
        series: [
          {
            name: "Nodes",
            type: "scatter3D",
            data: datalocal2.nodes.map(function (node) {
              const type = paris_cluster_type[parisclustertype];
              // const color = colorslist[node[type]];
              const color = ifmeetlimit(node[type], min, max) ? '#ff0000' : 'white';
              const opacity = ifmeetlimit(node[type], min, max) ? 0.5 : 0;
              return {
                name: node.name,
                value: node.value,
                itemStyle: {
                  color: color,
                  opacity: opacity,
                }
              }
            }),
          }
        ]
      });
    }
    else {
      myChart2.setOption({
        series: [
          {
            name: "Edges",
            type: "lines3D",
            data: datalocal2.edges.map(function (e) {
              const type = paris_cluster_edge_type[parisclustertype - 7];
              let color, opacity, width;
              // color = colorslist[e[type]];
              color = ifmeetlimit(e[type], min, max) ? '#ff0000' : 'white';
              opacity = ifmeetlimit(e[type], min, max) ? 0.5 : 0;
              width = ifmeetlimit(e[type], min, max) ? 3 : 1;
              return {
                coords: [e.value[0], e.value[1]],
                lineStyle: {
                  color: color,
                  opacity: opacity,
                  width: width
                }
              };
            }),
          }
        ]
      });
    }
    let tmoption = myChart2.getOption();
    let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
    let predOption = {
      ...tmoption,
      series: predSeries,
    };
    myChart2.setOption(predOption);
  }
}

// reset the cluster
function resetcluster() {
  if (clustertype <= 6) {
    myChart.setOption({
    series: [
      {
        name: "Nodes",
        type: "scatter3D",
        data: datalocal.nodes.map(function (node) {
          const type = cluster_type[clustertype];
          const color = colorslist[node[type]];
          return {
              name: node.name,
              value: node.value,
              itemStyle: {
                color: color,
                opacity: 0.5,
              }
          }
        }),
      }
    ]
  });
  }
  else {
    myChart.setOption({
      series: [
          {
            name: "Edges",
            type: "lines3D",
            data: datalocal.edges.map(function (e) {
              const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
              const targetNode = datalocal.nodes.find((node) => node.name === e.target);
              const type = cluster_edge_type[clustertype - 7];
              let color;
              if (type === 'train') {
                color = /\d/.test(e.train[0]) ? '#ff0000' : tcolor[e.train[0]];
              }
              else {
                color = colorslist[e[type]];
              }
              return {
                coords: [sourceNode.value, targetNode.value],
                lineStyle: {
                  color: color,
                  opacity: 0.5,
                }
              };
            }),
        }
      ]
    });
  }
  let tmoption = myChart.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
    myChart.setOption(predOption);
}

function clusteredges(param) {
  recolor(cluchinaedge[param])
  myChart.setOption({
    series: [
        {
          name: "Nodes",
          type: "scatter3D",
          coordinateSystem: "geo3D",
          symbolSize: 8,
          data: datalocal.nodes.map(function (node) {
            return {
                name: node.name,
                value: node.value,
                itemStyle: {
                  color: 'royalblue',
                  opacity: 0,
                }
            }
          }),
        },
        {
            name: "Edges",
            type: "lines3D",
            data: datalocal.edges.map(function (e) {
              const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
              const targetNode = datalocal.nodes.find((node) => node.name === e.target);
              const type = param;
              let color;
              if (type === 'train') {
                color = /\d/.test(e.train[0]) ? '#ff0000' : tcolor[e.train[0]];
              }
              else {
                color = colorslist[e[type]];
              }
              return {
                coords: [sourceNode.value, targetNode.value],
                lineStyle: {
                  color: color,
                  opacity: 0.5,
                }
              };
            }),
        }
        ]});
  let tmoption = myChart.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
    myChart.setOption(predOption);
}

function clusterpariseedges(param) {
  recolor(cluparisedge[param])
  myChart2.setOption({
    series: [
      {
        name: "Nodes",
        type: "scatter3D",
        coordinateSystem: "geo3D",
        symbolSize: 8,
        data: datalocal2.nodes.map(function (node) {
          return {
            name: node.name,
            value: node.value,
            itemStyle: {
              color: 'royalblue',
              opacity: 0,
            }
          }
        }),
      },
      {
        name: "Edges",
        type: "lines3D",
        data: datalocal2.edges.map(function (e) {
          const type = param;
          let color = colorslist[e[type]];
          return {
            coords: [e.value[0], e.value[1]],
            lineStyle: {
              color: color,
              opacity: 0.5,
            }
          };
        }),
      }
    ]});
  let tmoption = myChart2.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
  myChart2.setOption(predOption);
}

function hiddendelnode(nodeid){
  myChart.setOption({
    series: [
      {
        name: "Nodes",
        type: "scatter3D",
        coordinateSystem: "geo3D",
        symbolSize: 8,
        itemStyle: {
          z: 1
        },
        emphasis: { // hover node color
          itemStyle: {
            color: 'rgba(0, 255, 0, 1)' // 绿色
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
        data: datalocal.nodes.map(function (node) {
          const ifin = node.name === nodeid;
          const color = ifin ? 'grey' : 'royalblue';
          const opcity = ifin ? 0 : 0.8;
          return {
            name: node.name,
            value: node.value,
            itemStyle: {
              color: color,
              opacity: opcity,
            }
          }
        }),
      },
      {
        name: "Edges",
        type: "lines3D",
        coordinateSystem: "geo3D",
        effect: {
          show: ifrun,
          trailWidth: 1,
          trailOpacity: 0.5,
          trailLength: 0.2,
          constantSpeed: 5,
        },
        blendMode: "lighter",
        lineStyle: {
          curveness: 0.3,
          width: 1,
          z: 2
        },
        data: datalocal.edges.map(function (e) {
          const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
          const targetNode = datalocal.nodes.find((node) => node.name === e.target);
          const ifdel = sourceNode.name === nodeid || targetNode.name === nodeid;
          const color = ifdel ? 'grey': '#fff000';
          const opacity = ifdel ? 0 : 0.5;

          return {
            coords: [sourceNode.value, targetNode.value],
            lineStyle: {
              color: color,
              opacity: opacity,
            }
          };
        }),
      },
    ],
  })
  let tmoption = myChart.getOption();
  let predSeries = tmoption.series.slice(0, 2); // only keep the initial option
  let predOption = {
    ...tmoption,
    series: predSeries,
  };
  myChart.setOption(predOption);
}