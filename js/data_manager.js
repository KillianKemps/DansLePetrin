
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
/*var museesLayer = L.geoJson(musees, {
    onEachFeature: onEachFeatureMusees
});*/

var hotelsLayer = L.geoJson(hotels, {
    onEachFeature: onEachFeatureHotels
});

var hopitauxLayer = L.geoJson(hopitaux, {
    onEachFeature: onEachFeatureHopitaux
});

var commissariatsLayer = L.geoJson(commissariats, {
    onEachFeature: onEachFeatureCommissariats
});

var baseMaps = {
};

var overlayMaps = {
    "Commissariats": commissariatsLayer,
    "Hopitaux": hopitauxLayer, 
    "Hotels": hotelsLayer/*,
    "Musees": museesLayer */
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

var markerMusees = [];
var markerCommissariats = [];

/** Alternative import of museums*/
for (var i = 0; i < musees.features.length; i++) {
    /*console.log('ok');*/
            markerMusees[i] = new L.marker([musees.features[i].properties.wgs84[0],musees.features[i].properties.wgs84[1]])
                .bindPopup(musees.features[i].properties.nom_du_musee);
                /*.addTo(map);*/
}

for (var i = 0; i < commissariats.features.length; i++) {
    /*console.log('ok');*/
            markerCommissariats[i] = new L.marker([commissariats.features[i].properties.coordinates[0],commissariats.features[i].properties.coordinates[1]])
                .bindPopup("Commissariat");
                /*.addTo(map);*/
                console.log(markerCommissariats[i]);
    console.log('coordinates: ' + commissariats.features[i].properties.coordinates[0] + ' | '+commissariats.features[i].properties.coordinates[1] )
}

/*console.log('musees: ' + musees);
*/
/*console.log('coords: ' + L.geoJson(commissariats, {
    onEachFeature: onEachFeatureCommissariats
}).coordsToLatLngs(commissariats, 1, 0) );*/

