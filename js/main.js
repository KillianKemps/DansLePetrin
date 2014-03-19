// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([48.8567, 2.3508], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

//add marker
var marker = L.marker([48.853, 2.3835], {title:'Musée Jesaispasquoi'}).addTo(map);
//add popup on marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

//add marker
var marker2 = L.marker([48.852, 2.389], {title:'Show interface'}).addTo(map);
//add popup on marker
marker2.bindPopup("I'm showing the interface ! ");

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
}

//put trigger on marker
marker2.on('click', onMarker2Click);


//on map, popup appears with coordinates
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

/******************************************************/
/* Importing data and putting name on marker          */


function onEachFeature(features, layer) {
    //link name to the popup of the marker
        layer.bindPopup(features.properties.nom_du_musee);
}

//import museum data and put the name in the popup
var myLayer = L.geoJson(data_museum, {
    onEachFeature: onEachFeature
}).addTo(map);

var myOtherLayer = L.geoJson(onefeature, {
    onEachFeature: onEachFeature
}).addTo(map);


