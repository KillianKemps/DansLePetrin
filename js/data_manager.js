
/******************************************************/
/* Importing data and putting name on marker          */




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



$.getJSON("./data/musees.geojson")

    .done(function(musees) {
        Game.museesLayer = L.geoJson(musees, {
            onEachFeature: onEachFeatureMusees
        }).addTo(map);

        console.log('musees: ' + musees);
        console.log('museesLayer (data): ' + Game.museesLayer);

        function museesOnClick(){
            Game.museesLayer.on('click', function(){
                window.ref="A002";
                story_manager();
            });

        }

        function onEachFeatureMusees(features, layer) {
        //link name to the popup of the marker
            layer.bindPopup(features.properties.nom_du_musee);

            layer.on({
                click: museesOnClick
            });
        }
        console.log('museesLayer (data): ' + Game.museesLayer);


    });



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
    "Musees": Game.museesLayer 
};

L.control.layers(baseMaps, overlayMaps).addTo(map);