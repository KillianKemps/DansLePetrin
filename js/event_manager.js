
/*****************************************************************/
/* Creating event when clicking on marker                        */

//create function that reacts for marker event click
function onMarkerClick(e) {
    alert("Hey, you clicked it right " + e.toGeoJSON);
}

//put trigger on marker that shows interface
marker.on('click', onMarkerClick);

function onMarker2Click(e) {
    var interfaceBlock = document.getElementById('interfaceBlock');
    interfaceBlock.style.display = "block";
    //Display event in interface
    var event = ['<p>Bruno vous demande un café.<p/>', '<p>Il n\'y a personne, une lettre se trouve par terre.<p/>', '<p>Antoine Beauvilain vous saute dessus en criant "SQUIRREL !"<p/>'];
    var event = event[Math.floor(Math.random()*event.length)]
    var paragraphe = document.getElementById('paragraphe');
    paragraphe.innerHTML = event;
}
//close the interface
function onClickclose() {
    var interfaceBlock = document.getElementById('interfaceBlock');
    interfaceBlock.style.display = "none";
}

function changeIcon(e) {
    console.log(e.getLatLng);
    marker.setIcon(fastfoodIcon);
}
//put trigger on marker
marker2.on('click', onMarker2Click);


//on map, popup appears with coordinates
/*var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
*/

hotelsLayer.on('click', changeIcon);

heros.on('drag', function(event){
            var coordinates = heros.getLatLng();
            circle.setLatLng(coordinates);
});