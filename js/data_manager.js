
/******************************************************/
/* Importing data and putting name on marker          */

var museesLayer = L.featureGroup();
var hopitauxLayer = L.featureGroup();
var commissariatsLayer = L.featureGroup();
//var hotelsLayer = L.layerGroup();
var pubsLayer = L.featureGroup();
var mairiesLayer = L.featureGroup();
var fleuristesLayer = L.featureGroup();
var kiosquesLayer = L.featureGroup();
var bijoutiersLayer = L.featureGroup();
var supermarchesLayer = L.featureGroup();

var baseMaps = {
};

var overlayMaps = {
    "Bijoutiers" : bijoutiersLayer,
    "Commissariats": commissariatsLayer,
    "Fleuristes" : fleuristesLayer,
    "Hopitaux": hopitauxLayer,
    "Kiosques" : kiosquesLayer, 
    //"Hotels": hotelsLayer,
    "Mairies": mairiesLayer,
    "Musees": museesLayer,
    "Pubs": pubsLayer,
    "Supermarchés" : supermarchesLayer
};

var markerMusees = [];
var markerCommissariats = [];
var markerHopitaux = [];
var markerPub = [];
var markerMairies = [];
var markerFleuristes = [];
var markerKiosques = [];
var markerBijoutiers = [];
var markerSupermarches = [];


museesLayer.addTo(map);
hopitauxLayer.addTo(map);
commissariatsLayer.addTo(map);
//hotelsLayer.addTo(map);
pubsLayer.addTo(map);
mairiesLayer.addTo(map);
fleuristesLayer.addTo(map);
kiosquesLayer.addTo(map);
bijoutiersLayer.addTo(map);
supermarchesLayer.addTo(map);


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
var mairieIcon = L.icon({
            iconUrl: 'img/administration.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});
var fleuristeIcon = L.icon({
            iconUrl: 'img/flowers.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});
var kiosqueIcon = L.icon({
            iconUrl: 'img/kiosk.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});
var bijoutierIcon = L.icon({
            iconUrl: 'img/jewelry.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});
var supermarcheIcon = L.icon({
            iconUrl: 'img/supermarket.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
});


/** Import of each data in an array. Binding a popup with informations concerning the data*/
for (var i = 0; i < musees.features.length; i++) {
        markerMusees[i] = new L.marker([musees.features[i].properties.wgs84[0],musees.features[i].properties.wgs84[1]], {icon: museeIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2>" + musees.features[i].properties.nom_du_musee + "</h2>"+
                "<a onclick=\"moveMarker(" + i + ", 'musee' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
}

for (var i = 0; i < commissariats.features.length; i++) {
        markerCommissariats[i] = new L.marker([commissariats.features[i].properties.coordinates[0],commissariats.features[i].properties.coordinates[1]], {icon: commissariatIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2 style=\"text-align:center;\">Commissariat</h2>"+
                "<a onclick=\"moveMarker(" + i + ", 'commissariat' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
}

for (var i = 0; i < hopitaux.features.length; i++) {

        markerHopitaux[i] = new L.marker([hopitaux.features[i].geometry.coordinates[1], hopitaux.features[i].geometry.coordinates[0]], {icon: hospitalIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2>" + hopitaux.features[i].properties.raison_sociale + "</h2>"+
                "<a onclick=\"moveMarker(" + i + ", 'hopital' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
}

for (var i = 0; i < pub.elements.length; i++) {

    if(pub.elements[i].lat && pub.elements[i].lon){ //Protect if data corrumpted

        markerPub[i] = new L.marker([pub.elements[i].lat, pub.elements[i].lon], {icon: pubIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2 style=\"text-align:center;\">Pub</h2>"+
                "<a onclick=\"moveMarker(" + i + ", 'bar' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
    }
            
}

for (var i = 0; i < mairies.records.length; i++) {

    if(mairies.records[i].fields.lat_lng){ //Protect if data corrumpted

        markerMairies[i] = new L.marker(mairies.records[i].fields.lat_lng, {icon: mairieIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2 style=\"text-align:center;\">"+ mairies.records[i].fields.nom + "</h2>"+
                "<a onclick=\"moveMarker(" + i + ", 'mairie' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
    }     
}
//To clean data, rearrange the array with a new variable j
var j = 0;
for (var i = 0; i < fleuristes.features.length; i++) {

    if(fleuristes.features[i].geometry.coordinates){ //Protect if data corrumpted
        if(fleuristes.features[i].geometry.type == "Point"){
            markerFleuristes[j] = new L.marker([fleuristes.features[i].geometry.coordinates[1], fleuristes.features[i].geometry.coordinates[0]], {icon: fleuristeIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2 style=\"text-align:center;\">"+ "Fleuriste" + "</h2>"+
                "<a onclick=\"moveMarker(" + j + ", 'fleuriste' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
            j++;
        }
        
    }     
}
//To clean data, rearrange the array with a new variable j
var j = 0;
for (var i = 0; i < kiosques.features.length; i++) {

    if(kiosques.features[i].geometry.coordinates){ //Protect if data corrumpted
        if(kiosques.features[i].geometry.type == "Point"){
            markerKiosques[j] = new L.marker([kiosques.features[i].geometry.coordinates[1], kiosques.features[i].geometry.coordinates[0]], {icon: kiosqueIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2 style=\"text-align:center;\">"+ "Kiosque" + "</h2>"+
                "<a onclick=\"moveMarker(" + j + ", 'kiosque' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
            j++;
        }
        
    }     
}
//To clean data, rearrange the array with a new variable j
var j = 0;
for (var i = 0; i < bijoutiers.features.length; i++) {

    if(bijoutiers.features[i].geometry.coordinates){ //Protect if data corrumpted
        if(bijoutiers.features[i].geometry.type == "Point"){
            markerBijoutiers[j] = new L.marker([bijoutiers.features[i].geometry.coordinates[1], bijoutiers.features[i].geometry.coordinates[0]], {icon: bijoutierIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2 style=\"text-align:center;\">"+ "Bijoutier" + "</h2>"+
                "<a onclick=\"moveMarker(" + j + ", 'bijouterie' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
            j++;
        }
        
    }     
}
//To clean data, rearrange the array with a new variable j
var j = 0;
for (var i = 0; i < supermarches.features.length; i++) {

    if(supermarches.features[i].geometry.coordinates){ //Protect if data corrumpted
        if(supermarches.features[i].geometry.type == "Point"){
            markerSupermarches[j] = new L.marker([supermarches.features[i].geometry.coordinates[1], supermarches.features[i].geometry.coordinates[0]], {icon: supermarcheIcon})
            .bindPopup("<div class='info_lieu'>"+
                "<h2 style=\"text-align:center;\">"+ "Supermarche" + "</h2>"+
                "<a onclick=\"moveMarker(" + j + ", 'supermarche' " + ")\"><img src=\"img/localisation.png\"/></a>" +
                "</div>"
                );
            j++;
        }
        
    }     
}
