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
    switch (params) {
        case 0:
            clustertype = 0;
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

function clusub() {
    let min_clu = document.getElementById("minclu").value;
    let max_node = document.getElementById("maxclu").value;
    min_clu = parseInt(min_clu);
    max_node = parseInt(max_node);
    if (min_clu > max_node) {
        alert("Invalid input!");
    }
    else {
        setlimit(min_clu, max_node);
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
    document.getElementById("nodecluster").style.display = 'flex';
    document.getElementById("edgecluster").style.display = 'none';
    clustertype = 2;
    cltype(clustertype);
}

function cluster_edge() {
    document.getElementById("nodeform").style.display = 'none';
    document.getElementById("edgeform").style.display = 'flex';
    document.getElementById("nodecluster").style.display = 'none';
    document.getElementById("edgecluster").style.display = 'flex';
    clustertype = 7;
    cltype(clustertype);
}