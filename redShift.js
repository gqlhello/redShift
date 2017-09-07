function getStatus(array){
    if(array.length == 1){
        document.getElementById("arrowIdFive").classList.add("arrowFive");
    }
    for(var i = 0; i < array.length; i++){
        var o = array[i];
        if(o.isShadowed == true){
            console.log("green");
            if(o.isCurrentStatus == true){
                console.log("blue");
            }
        }
    }
}

var array = [{"name":"待接单","status":"WAIT_ACCEPT","isShadowed":true},{"name":"待发货","status":"WAIT_DELIVER","isShadowed":true,"isCurrentStatus":true},{"name":"验货入库","status":"STOCK_IN"},{"name":"已完成","status":"DELIVERED"}];

var result = getStatus(array);
