
/******************************************************/
/* Importing data and putting name on marker          */

var museesLayer = L.featureGroup();
var hopitauxLayer = L.featureGroup();
var commissariatsLayer = L.featureGroup();
//var hotelsLayer = L.layerGroup();
var pubsLayer = L.featureGroup();

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

var fastfoodIcon = L.icon({             //Unused
            iconUrl: 'img/fastfood.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});
var pubIcon = L.icon({
            iconUrl: 'img/bar.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});
var hospitalIcon = L.icon({
            iconUrl: 'img/hospital-building.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});

var commissariatIcon = L.icon({
            iconUrl: 'img/police.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});
var museeIcon = L.icon({
            iconUrl: 'img/museum_art.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});


/** Alternative import of museums*/
for (var i = 0; i < musees.features.length; i++) {
        markerMusees[i] = new L.marker([musees.features[i].properties.wgs84[0],musees.features[i].properties.wgs84[1]], {icon: museeIcon})
            .bindPopup("<a onclick=\"moveMarkerMusees(" + i + ")\">" + musees.features[i].properties.nom_du_musee + "</a>");
}

for (var i = 0; i < commissariats.features.length; i++) {
        markerCommissariats[i] = new L.marker([commissariats.features[i].properties.coordinates[0],commissariats.features[i].properties.coordinates[1]], {icon: commissariatIcon})
            .bindPopup("<a onclick=\"moveMarkerCommissariats(" + i + ")\">Commissariat</a>");
}

for (var i = 0; i < hopitaux.features.length; i++) {

        markerHopitaux[i] = new L.marker([hopitaux.features[i].geometry.coordinates[1], hopitaux.features[i].geometry.coordinates[0]], {icon: hospitalIcon})
            .bindPopup("<a onclick=\"moveMarkerHopitaux(" + i + ")\">" + hopitaux.features[i].properties.raison_sociale + "</a>");
}

for (var i = 0; i < pub.elements.length; i++) {

    if(pub.elements[i].lat && pub.elements[i].lon){ //Protect if data corrumpted

        markerPub[i] = new L.marker([pub.elements[i].lat, pub.elements[i].lon], {icon: pubIcon})
            .bindPopup("<a onclick=\"moveMarkerPub(" + i + ")\">Pub</a>");
    }
            
}
