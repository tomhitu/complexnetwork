/**
 * For second dataset get nodes
 * @type {number}
 */

// get name of node
myChart2.on('click', function (params) {
    console.log('get node', params);
    if (params.componentType === 'series') {
        var value = params.name;
        if (sore === 0) {
            document.getElementById("startpoint").value = value;
        }
        else {
            document.getElementById("endpoint").value = value;
        }
    }
    document.getElementById("nodepoint").value = value;
});

// focus on start point
function focusstart() {
    sore = 0;
}

// focus on end point
function focusend() {
    sore = 1;
}