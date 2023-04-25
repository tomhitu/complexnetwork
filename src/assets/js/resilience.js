let chartbefore = document.getElementById('degree-before');
let debeChart = echarts.init(chartbefore);
let optionbefore, optionafter;

let distbefore = document.getElementById('dist-before');
let distbChart = echarts.init(distbefore);
let opdistbefore, opdistafter;

let autopage = document.getElementById('auto-evolution');
let autoChart = echarts.init(autopage);
let opauto, opauto2;


let degreelocalchina = {"degree_list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 37, 38, 39, 43, 44],
  "count_list": [57, 1099, 352, 301, 217, 182, 142, 80, 76, 49, 25, 22, 19, 10, 11, 12, 7, 8, 6, 6, 4, 4, 3, 6, 2, 2, 2, 1, 1, 3, 3, 2, 1, 1, 1, 1, 1]}

let degreelocalparis = {"degree_list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "count_list": [33320, 6490, 1528, 390, 168, 92, 36, 24, 8, 1]}

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
    data: ['railway'],
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
      data: degreelocalchina['degree_list']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'railway',
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
      data: degreelocalchina['count_list']
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
    data: ['route'],
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
      data: degreelocalparis['degree_list']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'route',
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
      data: degreelocalparis['count_list']
    },
  ]
};

optionbefore && debeChart.setOption(optionbefore);


let distlocalchina = {"degree_count": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
  "degree_distribution": [57, 1099, 352, 301, 217, 182, 142, 80, 76, 49, 25, 22, 19, 10, 11, 12, 7, 8, 6, 6, 4, 4, 3, 6, 2, 2, 2, 1, 1, 3, 3, 2, 1, 1, 1, 1, 1]}

let distlocalparis = {"degree_count": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "degree_distribution": [33320, 6490, 1528, 390, 168, 92, 36, 24, 8, 1]}


// prettier-ignore
let dataAxis = distlocalchina['degree_list'];
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
    data: ['railway'],
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    data: distlocalchina['degree_count'],
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
      name: 'railway',
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
      data: distlocalchina['degree_distribution']
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
    data: ['route'],
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    data: distlocalparis['degree_count'],
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
      name: 'route',
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
      data: distlocalparis['degree_distribution']
    }
  ]
};

opdistbefore & distbChart.setOption(opdistbefore);


let attackchinalocal = {"Attack_Ratio": [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  "relative_size": [1, 1.0, 0.7826406767193821, 0.6204486943729313, 0.4795880838543582, 0.38322912835601325, 0.2302317028319235, 0.11327694005148951, 0.036778227289444645, 0.010297903641044501, 0.002206693637366679],
  "relative_size_deg": [1, 1.0, 0.029054799558661273, 0.0158146377344612, 0.013975726369988967, 0.009562339095255609, 0.009562339095255609, 0.009562339095255609, 0.009562339095255609, 0.009562339095255609, 0.009562339095255609],
  "relative_size_betw": [1, 1.0, 0.18168444280985657, 0.018389113644722323, 0.011769032732622288, 0.007723427730783376, 0.005884516366311144, 0.0025744759102611253, 0.002206693637366679, 0.0018389113644722325, 0.0011033468186833395],
  "relative_size_kshell": [1, 1.0, 0.7705038617138654, 0.14380286870172856, 0.07944097094520045, 0.038249356381022434, 0.023905847738139023, 0.009562339095255609, 0.009562339095255609, 0.009562339095255609, 0.004781169547627804],
  "relative_size_ci": [1, 1.0, 0.08973887458624494, 0.05038617138653917, 0.03751379183523354, 0.025744759102611255, 0.018389113644722323, 0.010665685913938948, 0.010665685913938948, 0.008826774549466716, 0.008091210003677823]};
let attackparislocal = {"Attack_Ratio": [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  "relative_size": [1, 1.0, 0.9090909090909091, 1.0, 0.9090909090909091, 0.9090909090909091, 0.8181818181818182, 0.8181818181818182, 0.9090909090909091, 0.8181818181818182, 0.8181818181818182, 0.6363636363636364, 0.6363636363636364, 0.6363636363636364, 0.5454545454545454, 0.45454545454545453, 0.45454545454545453, 0.5454545454545454, 0.45454545454545453, 0.36363636363636365, 0.36363636363636365],
  "relative_size_deg": [1, 1.0, 0.36363636363636365, 0.2727272727272727, 0.2727272727272727, 0.2727272727272727, 0.18181818181818182, 0.18181818181818182, 0.18181818181818182, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091],
  "relative_size_kshell": [1, 1.0, 1.0, 1.0, 1.0, 0.9090909090909091, 0.9090909090909091, 0.9090909090909091, 0.6363636363636364, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091],
  "relative_size_ci": [1, 1.0, 0.36363636363636365, 0.2727272727272727, 0.2727272727272727, 0.2727272727272727, 0.18181818181818182, 0.18181818181818182, 0.18181818181818182, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091, 0.09090909090909091]};


$(document).ready(function() {
  axios.get('https://tomhitu.pythonanywhere.com/attack_network?attack=1')
      .then(function (response) {
        let status = response.data.status
        if (status === 0) {
          let attack_china = response.data.attack_china;
          // console.log(attack_china);
          let attack_paris = response.data.attack_paris;
          // console.log(attack_paris);
        }
      })
      .catch(function () {
        alert("Something Error!");
      });
})
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
    data: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
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
      data: attackchinalocal['relative_size']
    },
    {
      name: 'Degree Attack',
      type: 'line',
      data: attackchinalocal['relative_size_deg']
    },
    {
      name: 'Betweenness Attack',
      type: 'line',
      data: attackchinalocal['relative_size_betw']
    },
    {
      name: 'Kshell Attack',
      type: 'line',
      data: attackchinalocal['relative_size_kshell']
    },
    {
      name: 'Collective Influence Attack',
      type: 'line',
      data: attackchinalocal['relative_size_ci']
    }
  ]
}
opauto2 = {
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
    data: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
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
      data: attackparislocal['relative_size']
    },
    {
      name: 'Degree Attack',
      type: 'line',
      data: attackparislocal['relative_size_deg']
    },
    {
      name: 'Betweenness Attack',
      type: 'line',
      data: attackparislocal['relative_size_betw']
    },
    {
      name: 'Kshell Attack',
      type: 'line',
      data: attackparislocal['relative_size_kshell']
    },
    {
      name: 'Collective Influence Attack',
      type: 'line',
      data: attackparislocal['relative_size_ci']
    }
  ]
};

opauto & autoChart.setOption(opauto);