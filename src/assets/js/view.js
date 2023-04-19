/**
 * change view
 */

let ifrun = true;
let cluster_type = ['state_num', 'cluster_degree', 'cluster_Degree_Centrality', 'cluster_Clustering_Coefficients', 'cluster_Closeness_Centrality', 'cluster_Betweenness_Centrality', 'cluster_Eigenvector_Centrality']
let cluster_state_type = ['stat_num', 'cluster_state_degree', 'cluster_state_Degree_Centrality', 'cluster_state_Clustering_Coefficients', 'cluster_state_Closeness_Centrality', 'cluster_state_Betweenness_Centrality', 'cluster_state_Eigenvector_Centrality']
let cluster_edge_type = ['train', 'cluster_speed', 'cluster_across', 'cluster_overnight', 'cluster_distance']

function getRandomColor(existingColors) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var hexR = r.toString(16).padStart(2, '0');
  var hexG = g.toString(16).padStart(2, '0');
  var hexB = b.toString(16).padStart(2, '0');

  var hexColor = '#' + hexR + hexG + hexB;

  if (existingColors.includes(hexColor)) {
    return getRandomColor(existingColors);
  }
  return hexColor;
}

let colorslist = [];

for (let i = 0; i < 30; i++) {
  let color = getRandomColor(colorslist);
  colorslist.push(color);
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
function showshortestpath(route, routeless, routesd) {
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
            const ifin = route.includes(node.name) || routeless.includes(node.name) || routesd.includes(node.name);
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
            const ifin = are_numbers_adjacent_in_list(e.source, e.target, route);
            const ifless = are_numbers_adjacent_in_list(e.source, e.target, routeless);
            const ifsd = are_numbers_adjacent_in_list(e.source, e.target, routesd);
            const color = ifless ? '#0033ff' : ifsd ? '#ffb700' : ifin ? '#ff0000' : 'grey';
            const opacity = ifless ? 1 : ifsd ? 1 : ifin ? 1 : 0;

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


// show the prediction edges on map
function showprededges(newnode, newedges) {
  // console.log(newnode, newedges);
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
            width: 1,
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

// if meet limitation, show the cluster of nodes on map
function ifmeetlimit(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  }
  return false;
}

// show the cluster of nodes on map with limitation
function setlimit(min, max) {
  if (clustertype <= 6) {
    myChart.setOption({
      series: [
        {
          name: "Nodes",
          type: "scatter3D",
          data: datalocal.nodes.map(function (node) {
            const type = netorpro === 0 ? cluster_type[clustertype] : cluster_state_type[clustertype];
            const color = colorslist[node[type]];
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
    myChart.setOption({
      series: [
          {
            name: "Edges",
            type: "lines3D",
            data: datalocal.edges.map(function (e) {
              const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
              const targetNode = datalocal.nodes.find((node) => node.name === e.target);
              const type = cluster_edge_type[clustertype - 7];
              let color, opacity;
              if (type === 'train') {
                color = /\d/.test(e.train[0]) ? '#ff0000' : tcolor[e.train[0]];
                opacity = 0.5;
              }
              else {
                color = colorslist[e[type]];
                opacity = ifmeetlimit(e[type], min, max) ? 0.5 : 0;
              }
              return {
                coords: [sourceNode.value, targetNode.value],
                lineStyle: {
                  color: color,
                  opacity: opacity,
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