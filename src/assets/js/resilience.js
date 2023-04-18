let chartbefore = document.getElementById('degree-before');
let debeChart = echarts.init(chartbefore);
let chartafter = document.getElementById('degree-after');
let deafChart = echarts.init(chartafter);
let optionbefore, optionafter;

let distbefore = document.getElementById('dist-before');
let distbChart = echarts.init(distbefore);
let distafter = document.getElementById('dist-after');
let distaChart = echarts.init(distafter);
let opdistbefore, opdistafter;

let autopage = document.getElementById('auto-evolution');
let autoChart = echarts.init(autopage);
let opauto;

optionbefore = {
  color: ['#80FFA5'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['before'],
    textStyle: {
      color: '#fff'
    }
  },
  toolbox: {
    show: false
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '1', '2', '3', '4', '5', '6']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'before',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
  ]
};

optionafter = {
  color: ['#FFBF00'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['after'],
    textStyle: {
      color: '#fff'
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    },
    show: false
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '1', '2', '3', '4', '5', '6']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'after',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
  ]
};

optionbefore && debeChart.setOption(optionbefore);

optionafter && deafChart.setOption(optionafter);

// prettier-ignore
let dataAxis = Array.from(Array(100).keys());
// prettier-ignore
let dataYbe = [];
for (let i = 0; i < 100; i++) {
  dataYbe.push(Math.floor(Math.random() * 100) + 1);
}
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < dataYbe.length; i++) {
  dataShadow.push(yMax);
}
opdistbefore = {
  color: ['#80FFA5'],
  legend: {
    data: ['before'],
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      name: 'before',
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      data: dataYbe
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize = 6;
distbChart.on('click', function (params) {
  console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  distbChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, dataYbe.length - 1)]
  });
});

// prettier-ignore
let dataAxis2 = Array.from(Array(100).keys());
// prettier-ignore
let dataYbe2 = [];
for (let i = 0; i < 100; i++) {
  dataYbe2.push(Math.floor(Math.random() * 100) + 1);
}
let yMax2 = 500;
let dataShadow2 = [];
for (let i = 0; i < dataYbe2.length; i++) {
  dataShadow2.push(yMax2);
}
opdistafter = {
  color: ['#80FFA5'],
  legend: {
    data: ['after'],
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      name: 'after',
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#f68383' },
          { offset: 0.5, color: '#f05918' },
          { offset: 1, color: '#f05918' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#f77b23' },
            { offset: 0.7, color: '#f77b23' },
            { offset: 1, color: '#f68383' }
          ])
        }
      },
      data: dataYbe
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize2 = 6;
distaChart.on('click', function (params) {
  console.log(dataAxis2[Math.max(params.dataIndex - zoomSize2 / 2, 0)]);
  distaChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis2[Math.max(params.dataIndex - zoomSize2 / 2, 0)],
    endValue:
      dataAxis2[Math.min(params.dataIndex + zoomSize2 / 2, dataYbe2.length - 1)]
  });
});

opdistbefore & distbChart.setOption(opdistbefore);
opdistafter & distaChart.setOption(opdistafter);

opauto = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Random Attack', 'Degree Attack', 'Betweenness Attack', 'Kshell Attack', 'Collective Influence Attack'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    show: false,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2],
    axisTick: {
      alignWithLabel: true,
      interval: 1
    },
    axisLabel: {
      interval: 0,
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Random Attack',
      type: 'line',
      data: [1, 1, 0.12, 0.11, 0.08, 0.06, 0.02]
    },
    {
      name: 'Degree Attack',
      type: 'line',
      data: [1, 1, 0.2, 0.11, 0.08, 0.06, 0.02]
    },
    {
      name: 'Betweenness Attack',
      type: 'line',
      data: [1, 1, 0.7, 0.18, 0.1, 0.08, 0.02]
    },
    {
      name: 'Kshell Attack',
      type: 'line',
      data: [1, 1, 0.15, 0.11, 0.08, 0.06, 0.02]
    },
    {
      name: 'Collective Influence Attack',
      type: 'line',
      data: [1, 1, 0.8, 0.62, 0.4, 0.35, 0.02]
    }
  ]
};

opauto & autoChart.setOption(opauto);