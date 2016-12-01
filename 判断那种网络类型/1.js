
var connection = navigator.connection||navigator.mozConnection||navigator.webkitConnection||{tyep:'unknown'};
var type_text = ['unknown','ethernet','wifi','2g','3g','4g','none'];

alert(connection.type);
var re_el = document.getElementById("re");
var btn_el = document.getElementById("btn");
function get_status(){
    if(typeof(connection.type) == "number"){
        connection.type_text = type_text[connection.type];
    }else{
        connection.type_text = connection.type;
    }
    if(typeof(connection.bandwidth) == "number"){
        if(connection.bandwidth > 10){
            connection.type = 'wifi';
        }else if(connection.bandwidth > 2){
            connection.type = '3g';
        }else if(connection.bandwidth > 0){
            connection.type = '2g';
        }else if(connection.bandwidth == 0){
            connection.type = 'none';
        }else{
            connection.type = 'unknown';
        }
    }
    var html = 'Type : '+connection.type_text;
    html += '<br>Bandwidth : '+connection.bandwidth;
    html += '<br>isOnline : '+navigator.onLine;
    re_el.innerHTML = html;
}

btn_el.onclick = function(){
    re_el.innerHTML = 'Waiting...';
    get_status();
}

