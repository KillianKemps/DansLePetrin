
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
});

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