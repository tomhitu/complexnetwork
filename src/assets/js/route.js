function swap(){
    let start_node = document.getElementById("startpoint").value;
    let end_node = document.getElementById("endpoint").value;
    document.getElementById("startpoint").value = end_node;
    document.getElementById("endpoint").value = start_node;
}

function spath(){
    let start_node = document.getElementById("startpoint").value;
    let end_node = document.getElementById("endpoint").value;
    axios.post('https://tomhitu.pythonanywhere.com/shortest_path', {
        startnode: start_node,
        endnode: end_node
    })
    .then(function (response) {
        let status = response.data.status;
        let route = response.data.route;
        let si_distance = response.data.distance;
        let less_route = response.data.less_route;
        let less_distance = response.data.less_distance;
        let less_time = response.data.less_time;
        let sd_route = response.data.shortest_route;
        let sd_distance = response.data.shortest_distance;
        if (status === 0) {
            console.log(route);
            console.log(less_route);
            console.log(sd_route);
            document.getElementById("shortest_path").innerHTML = route;
            document.getElementById("short-interval-distance").innerHTML = si_distance;
            document.getElementById("arrive_early").innerHTML = less_route;
            document.getElementById("less-transfer-distance").innerHTML = less_distance;
            document.getElementById("arrive-time").innerHTML = less_time;
            document.getElementById("shortest_distance_path").innerHTML = sd_route;
            document.getElementById("short-distance-distance").innerHTML = sd_distance;
            showshortestpath(route, less_route, sd_route);
        } else {
            alert("No route found!");
        }
    })
    .catch(function (error) {
        alert("Error!");
    });
}


function stime() {
    alert('waiting');
}

function stransfer() {
    alert('waiting');
}