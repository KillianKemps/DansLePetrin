
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

/*var hotelsLayer = L.geoJson(hotels, {
    onEachFeature: onEachFeatureHotels
});

var hopitauxLayer = L.geoJson(hopitaux, {
    onEachFeature: onEachFeatureHopitaux
});

var commissariatsLayer = L.geoJson(commissariats, {
    onEachFeature: onEachFeatureCommissariats
});*/

var museesLayer = L.layerGroup();
var hopitauxLayer = L.layerGroup();
var commissariatsLayer = L.layerGroup();
//var hotelsLayer = L.layerGroup();
var pubsLayer = L.layerGroup();

var baseMaps = {
};

var overlayMaps = {
    "Commissariats": commissariatsLayer,
    "Hopitaux": hopitauxLayer, 
    //"Hotels": hotelsLayer,
    "Musees": museesLayer,
    "Pub": pubsLayer
};

var markerMusees = [];
var markerCommissariats = [];
var markerHopitaux = [];
var markerPub = [];

museesLayer.addTo(map);
hopitauxLayer.addTo(map);
commissariatsLayer.addTo(map);
//hotelsLayer.addTo(map);
pubsLayer.addTo(map);

L.control.layers(baseMaps, overlayMaps).addTo(map);


/** Alternative import of museums*/
for (var i = 0; i < musees.features.length; i++) {
            markerMusees[i] = new L.marker([musees.features[i].properties.wgs84[0],musees.features[i].properties.wgs84[1]])
                .bindPopup(musees.features[i].properties.nom_du_musee);
}

for (var i = 0; i < commissariats.features.length; i++) {
            markerCommissariats[i] = new L.marker([commissariats.features[i].properties.coordinates[0],commissariats.features[i].properties.coordinates[1]])
                .bindPopup("Commissariat");
}

for (var i = 0; i < hopitaux.features.length; i++) {

            markerHopitaux[i] = new L.marker([hopitaux.features[i].geometry.coordinates[1], hopitaux.features[i].geometry.coordinates[0]])
                .bindPopup(hopitaux.features[i].properties.raison_sociale);
}

for (var i = 0; i < pub.elements.length; i++) {
    /*console.log('ok');*/
    if(pub.elements[i].lat && pub.elements[i].lon){ //Protect if data corrumpted

        /*if(pub.elements[i].tags.name){//If there is a name
            markerPub[i] = new L.marker([pub.elements[i].lat, pub.elements[i].lon])
                .bindPopup(pub.elements[i].tags.name);
        }
        else{*/
            markerPub[i] = new L.marker([pub.elements[i].lat, pub.elements[i].lon])
                .bindPopup("Pub");
        /*}*/
       
                /*.addTo(map);*/
               // console.log(markerPub[i]);
        //console.log('coordinates: ' + pub.elements[i].lat + pub.elements[i].lon);
    }
            
}
/*    if(!pub.elements[i].lat  || !pub.elements[i].lon)
    {
        console.log('Found');
    }*/


/*console.log('musees: ' + musees);
*/
/*console.log('coords: ' + L.geoJson(commissariats, {
    onEachFeature: onEachFeatureCommissariats
}).coordsToLatLngs(commissariats, 1, 0) );*/

