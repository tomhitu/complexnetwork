function toggleEdges(param) {
  if (datalocal) {
    console.log(param)
    let newOption = {
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
              color: 'rgba(0, 255, 0, 1)',
            }
          },
          data: datalocal.nodes.map(function (e) {
              let edge;
              if (param === 'N') {
                  edge = datalocal.edges.find((edge) => (edge.source === e.name || edge.target === e.name) && /\d/.test(edge.train[0]));
              } else {
                  edge = datalocal.edges.find((edge) => (edge.source === e.name || edge.target === e.name) && edge.train[0] === param);
              }
            if (edge !== undefined) {
                return {
                    name: e.name,
                    value: e.value,
                    itemStyle: {
                        color: 'royalblue',
                        opacity: 0.5,
                    }
                };
            }
            else {
                return {
                    name: e.name,
                    value: e.value,
                    itemStyle: {
                        color: 'grey',
                        opacity: 0.1,
                    }
                };
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
            width: 2,
            z: 2
          },
          data: datalocal.edges.map(function (e) {
            const sourceNode = datalocal.nodes.find((node) => node.name === e.source);
            const targetNode = datalocal.nodes.find((node) => node.name === e.target);
            let color, opacity;
            if (param === 'N') {
              color = /\d/.test(e.train[0]) ? '#ff0000' : 'grey';
              opacity = /\d/.test(e.train[0]) ? 1 : 0;
            }
            else {
              color = e.train[0] === param ? tcolor[e.train[0]] : 'grey';
              opacity = e.train[0] === param ? 1 : 0;
            }
            return {
              coords: [sourceNode.value, targetNode.value],
              lineStyle: {
                opacity: opacity,
                color: color,
              }
            };
          }),
        },
      ],
    }
    myChart.setOption(newOption);
  }
}

let sore = 0;

// get name of node
myChart.on('click', function (params) {
    if (params.componentType === 'series') {
        var value = params.name;

        if (sore === 0) {
            document.getElementById("startpoint").value = value;
        }
        else {
            document.getElementById("endpoint").value = value;
        }
        document.getElementById("nodepoint").value = value;
    }
});

// focus on start point
function focusstart() {
    sore = 0;
}

// focus on end point
function focusend() {
    sore = 1;
}