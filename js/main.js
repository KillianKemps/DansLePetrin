// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([48.8567, 2.3508], 13);

//set bounds so we can't look outside Paris
var southWest = new L.latLng([48.81, 2.22], map.getMaxZoom());
var northEast = new L.latLng([48.91, 2.48], map.getMaxZoom());
map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

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

var fastfoodIcon = L.icon({
            iconUrl: 'img/fastfood.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
        });


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

map.on('click', onMapClick);*/

/******************************************************/
/* Importing data and putting name on marker          */


function onEachFeatureMusees(features, layer) {
    //link name to the popup of the marker
        layer.bindPopup(features.properties.nom_du_musee);
}

function onEachFeatureHotels(features, layer) {
    //link name to the popup of the marker
        layer.bindPopup(features.properties.nom_commercial);
}

function onEachFeatureHopitaux(features, layer) {
    //link name to the popup of the marker
        layer.bindPopup(features.properties.raison_sociale);
}
function onEachFeatureCommissariats(features, layer) {
    //link name to the popup of the marker
        layer.bindPopup("Commissariat");
}

//import museum data and put the name in the popup
var museesLayer = L.geoJson(musees, {
    onEachFeature: onEachFeatureMusees
}).addTo(map);

var hotelsLayer = L.geoJson(hotels, {
    onEachFeature: onEachFeatureHotels
}).addTo(map);

var hopitauxLayer = L.geoJson(hopitaux, {
    onEachFeature: onEachFeatureHopitaux
}).addTo(map);

var commissariatsLayer = L.geoJson(commissariats, {
    onEachFeature: onEachFeatureCommissariats
}).addTo(map);


var baseMaps = {
};

var overlayMaps = {
    "Commissariats": commissariatsLayer,
    "Hopitaux": hopitauxLayer, 
    "Hotels": hotelsLayer,
    "Musees": museesLayer 
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

hotelsLayer.on('click', changeIcon);
