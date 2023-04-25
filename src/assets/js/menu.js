/**
 * Menu for functions
 */

let morebut = false;
let mapboard = document.getElementById('mapdata');
let dashboard = document.getElementById('dashdata');
let autoboard = document.getElementById('autodata');
let resmorebut = document.getElementById('resmore');
let reslessbut = document.getElementById('resless');

let deboard = document.getElementById('nrinput');
let auboard = document.getElementById('nrmenuhidden');


let nonepe = document.getElementById("none-pe");
let resultpe = document.getElementById("result-pe");

let clustertype = 2;
let parisclustertype = 0;
let netorpro = 0;

function showdelete() {
    if (morebut === true) {
        mapboard.style.display = 'none';
        dashboard.style.display = 'block';
        resmorebut.style.display = 'none';
        reslessbut.style.display = 'flex';
    }
    else {
        mapboard.style.display = 'block';
        dashboard.style.display = 'none';
        resmorebut.style.display = 'flex';
        reslessbut.style.display = 'none';
    }
    autoboard.style.display = 'none';
    deboard.style.display = 'flex';
    auboard.style.display = 'none';
}

function showauto() {
    mapboard.style.display = 'none';
    dashboard.style.display = 'none';
    autoboard.style.display = 'block';
    deboard.style.display = 'none';
    auboard.style.display = 'flex';
}

function prededge() {
    let lon_node = document.getElementById("lonpoint").value;
    let lat_node = document.getElementById("latpoint").value;
    nonepe.style.display = 'none';
    resultpe.style.display = 'block';
    if (oneortwo === 0) {
        axios.post('https://tomhitu.pythonanywhere.com/pred_edges', {
            longitude: lon_node,
            latitude: lat_node
        })
            .then(function (response) {
                let status = response.data.status;
                let n_degree = response.data.n_degree;
                let new_neighbor_node = response.data.new_neighbor_node;
                let new_edges_distance = response.data.new_edges_distance;
                let new_edges_travel_time = response.data.new_edges_travel_time;
                let new_edges_train_speed = response.data.new_edges_train_speed;
                let new_node_id = response.data.new_node_id;
                console.log(new_node_id);
                if (status === 0) {
                    console.log(n_degree);
                    let n_degree_str = n_degree.toString();
                    document.getElementById("pred-edge").innerHTML = "-N degree: &nbsp" + n_degree_str;
                    let new_node = [{
                        "name": new_node_id,
                        "value": [parseFloat(lon_node), parseFloat(lat_node)]
                    }]
                    console.log(new_neighbor_node);
                    console.log(new_edges_distance);
                    console.log(new_edges_travel_time);
                    console.log(new_edges_train_speed);
                    let new_edges_data = [];
                    let new_edges = [];
                    for (let i = 0; i < new_edges_train_speed.length; i++) {
                        let item = {
                            index: i + 1,
                            neighborNode: new_neighbor_node[i],
                            distance: new_edges_distance[i],
                            time: new_edges_travel_time[i],
                            speed: new_edges_train_speed[i]
                        };
                        let edge = {
                            "source": new_node_id,
                            "target": new_neighbor_node[i],
                            "train": ""
                        }
                        new_edges_data.push(item);
                        new_edges.push(edge);
                    }

                    let tableBody = document.getElementById("pred-edge-info");
                    for (let i = 0; i < new_edges_data.length; i++) {
                        let row = `
                <tr>{
                  <td><p>index: &nbsp ${new_edges_data[i].index},</p></td>
                  <td><p>neighbor_node: &nbsp ${new_edges_data[i].neighborNode},</p></td>
                  <td><p>distance: &nbsp ${new_edges_data[i].distance},</p></td>
                  <td><p>time: &nbsp ${new_edges_data[i].time},</p></td>
                  <td><p>speed: &nbsp ${new_edges_data[i].speed}</p></td>
                  }
                </tr>
              `;

                        if (i === 0) {
                            tableBody.innerHTML = row
                        }
                        else {
                            tableBody.innerHTML += row;
                        }
                    }

                    showprededges(new_node, new_edges);

                } else {
                    alert("No route found!");
                }
            })
            .catch(function (error) {
                alert("Error!");
            });
    }
    else {
        axios.post('https://tomhitu.pythonanywhere.com/pred_paris_edges', {
            longitude: lon_node,
            latitude: lat_node
        }).then(function (response) {
            console.log(response)
                let status = response.data.status;
                let n_paris_degree = response.data.n_degree;
                console.log('n_paris_degree', n_paris_degree);
                let new_paris_neighbor_node = response.data.new_neighbor_node;
                console.log(new_paris_neighbor_node);
                let new_paris_edges_distance = response.data.new_edges_distance;
                console.log(new_paris_edges_distance);
                let new_paris_edges_type = response.data.new_edges_type_num;
                console.log(new_paris_edges_type);
                let new_paris_node_id = 'xxxxx';
                if (status === 0) {
                    console.log(n_paris_degree);
                    let n_paris_degree_str = n_paris_degree.toString();
                    document.getElementById("pred-edge").innerHTML = "-N degree: &nbsp" + n_paris_degree_str;
                    let new_paris_node = [{
                        "name": new_paris_node_id,
                        "value": [parseFloat(lat_node), parseFloat(lon_node)]
                    }]
                    let new_paris_edges_data = [];
                    let new_paris_edges = [];
                    for (let i = 0; i < new_paris_edges_distance.length; i++) {
                        let item_paris = {
                            index: i + 1,
                            neighborNode: new_paris_neighbor_node[i],
                            distance: new_paris_edges_distance[i],
                            type: new_paris_edges_type[i]
                        };
                        let edge_paris = {
                            "source": new_paris_node_id,
                            "target": new_paris_neighbor_node[i],
                        }
                        new_paris_edges_data.push(item_paris);
                        new_paris_edges.push(edge_paris);
                    }
                    console.log('hellow');

                    let tableBody = document.getElementById("pred-edge-info");
                    for (let i = 0; i < new_paris_edges_data.length; i++) {
                        let row = `
                <tr>{
                  <td><p>index: &nbsp ${new_paris_edges_data[i].index},</p></td>
                  <td><p>neighbor_node: &nbsp ${new_paris_edges_data[i].neighborNode},</p></td>
                  <td><p>distance: &nbsp ${new_paris_edges_data[i].distance},</p></td>
                  <td><p>type: &nbsp ${new_paris_edges_data[i].type},</p></td>
                  }
                </tr>
              `;
                        if (i === 0) {
                            tableBody.innerHTML = row
                        }
                        else {
                            tableBody.innerHTML += row;
                        }
                    }

                    console.log('success');

                    showprededges(new_paris_node, new_paris_edges);

                } else {
                    alert("No route found!");
                }
            })
            .catch(function (error) {
                alert("Error!");
            });
    }
}

function showhidden() {
    axios.get('https://tomhitu.pythonanywhere.com/hidden_edges?keywords=none')
        .then(function (response) {
        let status = response.data.status;
        let hnodes = response.data.hiddennodes;
        let hedges = response.data.hiddenedges;
        console.log(hnodes);
        console.log(hedges);
        if (status === 0) {
            showhidedges(hnodes, hedges)
        } else {
            alert("No route found!");
        }
    })
    .catch(function (error) {
        alert("Error!");
    });
}

function ressub() {
    let node_index = document.getElementById("nodepoint").value;
    axios.post('https://tomhitu.pythonanywhere.com/delete_nodes', {
        nodeid: node_index,
        type: oneortwo
    }).then(function (response) {
        console.log(response)
        let status = response.data.status;
        let beforedel = response.data.beforedel;
        let afterdel = response.data.afterdel;
        showdeletenetwork(beforedel, afterdel);
    })
    hiddendelnode(parseInt(node_index));
}

function changewrapper(res) {
    if (res === true) {
        mapboard.style.display = 'none';
        dashboard.style.display = 'block';
        resmorebut.style.display = 'none';
        reslessbut.style.display = 'flex';
    }
    else {
        mapboard.style.display = 'block';
        dashboard.style.display = 'none';
        resmorebut.style.display = 'flex';
        reslessbut.style.display = 'none';
    }
}

function resmore() {
    morebut = true;
    changewrapper(morebut);
}

function resless() {
    morebut = false;
    changewrapper(morebut);
}

function cltype(params) {
    let gradientbar = document.getElementById('gradientbar');
    gradientbar.style.display = 'block';
    switch (params) {
        case 0:
            clustertype = 0;
            gradientbar.style.display = 'none';
            clusternodes('state_num')
            break;
        case 1:
            clustertype = 1;
            if (netorpro === 0) {
                clusternodes('cluster_degree')
            }
            else {
                clusternodes('cluster_state_degree')
            }
            break;
        case 2:
            clustertype = 2;
            if (netorpro === 0) {
                clusternodes('cluster_Degree_Centrality')
            }
            else {
                clusternodes('cluster_state_Degree_Centrality')
            }
            break;
        case 3:
            clustertype = 3;
            if (netorpro === 0) {
                clusternodes('cluster_Clustering_Coefficients')
            }
            else {
                clusternodes('cluster_state_Clustering_Coefficients')
            }
            break;
        case 4:
            clustertype = 4;
            if (netorpro === 0) {
                clusternodes('cluster_Closeness_Centrality')
            }
            else {
                clusternodes('cluster_state_Closeness_Centrality')
            }
            break;
        case 5:
            clustertype = 5;
            if (netorpro === 0) {
                clusternodes('cluster_Betweenness_Centrality')
            }
            else {
                clusternodes('cluster_state_Betweenness_Centrality')
            }
            break;
        case 6:
            clustertype = 6;
            if (netorpro === 0) {
                clusternodes('cluster_Eigenvector_Centrality')
            }
            else {
                clusternodes('cluster_state_Eigenvector_Centrality')
            }
            break;
        case 7:
            clustertype = 7;
            gradientbar.style.display = 'none';
            clusteredges('train');
            break;
        case 8:
            clustertype = 8;
            clusteredges('cluster_speed');
            break;
        case 9:
            clustertype = 9;
            clusteredges('cluster_across');
            break;
        case 10:
            clustertype = 10;
            clusteredges('cluster_overnight');
            break;
        case 11:
            clustertype = 11;
            clusteredges('cluster_distance')
            break;
        default:
            break;
    }
}
function pariscltype(params) {
    let gradientbar = document.getElementById('gradientbar');
    gradientbar.style.display = 'block';
    switch (params) {
        case 0:
            parisclustertype = 0;
            gradientbar.style.display = 'none';
            clusterparisenodes('cluster_lat_lon')
            break;
        case 1:
            parisclustertype = 1;
            clusterparisenodes('cluster_degree')
            break;
        case 2:
            parisclustertype = 2;
            clusterparisenodes('cluster_Degree_Centrality')
            break;
        case 3:
            parisclustertype = 3;
            clusterparisenodes('cluster_Clustering_Coefficients')
            break;
        case 4:
            parisclustertype = 4;
            clusterparisenodes('cluster_Closeness_Centrality')
            break;
        case 5:
            parisclustertype = 5;
            clusterparisenodes('cluster_Betweenness_Centrality')
            break;
        case 6:
            parisclustertype = 6;
            clusterparisenodes('cluster_Eigenvector_Centrality')
            break;
        case 7:
            parisclustertype = 7;
            gradientbar.style.display = 'none';
            clusterpariseedges('cluster_type');
            break;
        case 8:
            parisclustertype = 8;
            clusterpariseedges('cluster_across');
            break;
        case 9:
            parisclustertype = 9;
            clusterpariseedges('cluster_distance');
            break;
        default:
            break;
    }
}

function clusub() {
    let min_clu = document.getElementById("minclu").value;
    let max_node = document.getElementById("maxclu").value;
    min_clu = parseInt(min_clu);
    max_node = parseInt(max_node);
    if (min_clu > max_node) {
        alert("Invalid input!");
    }
    else {
        setlimit(min_clu, max_node, oneortwo);
    }
}

function clureset() {
    document.getElementById("minclu").value = '';
    document.getElementById("maxclu").value = '';
    resetcluster();
}

function shownet() {
    netorpro = 0;
    cltype(clustertype);
}

function showpro() {
    netorpro = 1;
    cltype(clustertype);
}

function cluster_node() {
    document.getElementById("nodeform").style.display = 'flex';
    document.getElementById("edgeform").style.display = 'none';
    document.getElementById("node2form").style.display = 'flex';
    document.getElementById("edge2form").style.display = 'none';

    document.getElementById("nodecluster").style.display = 'flex';
    document.getElementById("edgecluster").style.display = 'none';
    clustertype = 2;
    parisclustertype = 0;
    cltype(clustertype);
    pariscltype(parisclustertype);
}

function cluster_edge() {
    document.getElementById("nodeform").style.display = 'none';
    document.getElementById("edgeform").style.display = 'flex';
    document.getElementById("node2form").style.display = 'none';
    document.getElementById("edge2form").style.display = 'flex';

    document.getElementById("nodecluster").style.display = 'none';
    document.getElementById("edgecluster").style.display = 'flex';
    clustertype = 7;
    parisclustertype = 7;
    cltype(clustertype);
    pariscltype(parisclustertype);
}

function shownodecluster() {
    let gradientbar = document.getElementById('gradientbar');
    if (clustertype !== 0 && pagetype == 3) {
        gradientbar.style.display = 'block';
    }
    else {
        gradientbar.style.display = 'none';
    }
    let lesstrans = document.getElementById('lesstransfer');
    lesstrans.style.display = 'block';
    chartDom.style.display = 'block';
    chartDom2.style.display = 'none';
    oneortwo = 0;
    let typetrain = document.getElementById('typeoftrian');
    if (shortesttype === 0) {
        typetrain.style.display = 'block';
    }
    autoChart.setOption(opauto);
    debeChart.setOption(optionbefore);
    distbChart.setOption(opdistbefore)

    let clunodework = document.getElementById('nodecluster');
    let cluedgework = document.getElementById('edgecluster');

    let resultdom = document.getElementById('nrresult')
    resultdom.innerHTML = `<p>-Number of nodes: 2719</p>
    <p>-Number of edges: 6168</p>
    <p>-Number of connected components: 1</p>
    <p>-Size of the largest connected component: 2719</p>
    <p>-k-core: Graph with 14 nodes and 64 edges</p>
    <p>-Network density: 0.0016692281524745738</p>
    <p>-Diameter: 47</p>
    <p>-Average shortest path length: 8.789288902853249</p>
    <p>-Efficiency: 0.13798191658642248</p>`

    let clusterbut = document.getElementById('clusterchina');
    clusterbut.style.display = 'flex';
    let clusterparisbut = document.getElementById('clusterparis');
    clusterparisbut.style.display = 'none';
    console.log('clustertype', clustertype)
    if (clustertype < 7) {
        clunodework.style.display = 'flex';
        cluedgework.style.display = 'none';
        document.getElementById("nodeform").style.display = 'flex';
        document.getElementById("edgeform").style.display = 'none';
        document.getElementById("node2form").style.display = 'none';
        document.getElementById("edge2form").style.display = 'none';
    }
    else {
        clunodework.style.display = 'none';
        cluedgework.style.display = 'flex';
        document.getElementById("nodeform").style.display = 'none';
        document.getElementById("edgeform").style.display = 'flex';
        document.getElementById("node2form").style.display = 'none';
        document.getElementById("edge2form").style.display = 'none';
    }
}

function showedgecluster() {
    let gradientbar = document.getElementById('gradientbar');
    if (parisclustertype !== 0 && pagetype === 3) {
        gradientbar.style.display = 'block';
    }
    else {
        gradientbar.style.display = 'none';
    }
    if (parisclustertype < 7) {
        document.getElementById("nodeform").style.display = 'none';
        document.getElementById("edgeform").style.display = 'none';
        document.getElementById("node2form").style.display = 'flex';
        document.getElementById("edge2form").style.display = 'none';
    }
    else {
        document.getElementById("nodeform").style.display = 'none';
        document.getElementById("edgeform").style.display = 'none';
        document.getElementById("node2form").style.display = 'none';
        document.getElementById("edge2form").style.display = 'flex';
    }
    let lesstrans = document.getElementById('lesstransfer');
    lesstrans.style.display = 'none';
    chartDom.style.display = 'none';
    chartDom2.style.display = 'block';

    let clunodework = document.getElementById('nodecluster');
    let cluedgework = document.getElementById('edgecluster');
    clunodework.style.display = 'none';
    cluedgework.style.display = 'flex';

    oneortwo = 1;

    let typetrain = document.getElementById('typeoftrian');
    typetrain.style.display = 'none'

    autoChart.setOption(opauto2);
    debeChart.setOption(optionafter);
    distbChart.setOption(opdistafter)


    let resultdom = document.getElementById('nrresult')
    resultdom.innerHTML = `<p>-Number of nodes: 42057</p>
                        <p>-Number of edges: 27181</p>
                        <p>-Number of connected components: 14876</p>
                        <p>-Size of the largest connected component: 11</p>
                        <p>-Number of edges in the largest connected component: 11</p>
                        <p>-k-core of the largest connected component: Graph with 11 nodes and 10 edges</p>
                        <p>-Network density of the largest connected component: 0.18181818181818182</p>
                        <p>-Diameter of the largest connected component: 2</p>
                        <p>-Average shortest path length of the largest connected component: 1.8181818181818181</p>
                        <p>-Efficiency of the largest connected component: 0.5909090909090909</p>`


    let clusterbut = document.getElementById('clusterchina');
    let clusterparisbut = document.getElementById('clusterparis');
    clusterbut.style.display = 'none';
    clusterparisbut.style.display = 'flex';

    console.log(myChart2.getOption());
}