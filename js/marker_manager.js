
/*****************************************************************/
/* Creating custom markers and forms                             */

//add marker
/*var marker = L.marker([48.853, 2.3835], {title:'Musée Jesaispasquoi'}).addTo(map);*/
//add popup on marker
/*marker.bindPopup("<b>Hello world!</b><br>I am a popup.");*/

//add marker
/*var marker2 = L.marker([48.852, 2.389], {
    title:'Show interface'
 
});*/

//add popup on marker
/*marker2.bindPopup("I'm showing the interface ! ");*/

var heroIcon = L.icon({
            iconUrl: 'img/digsby.png',
            iconSize: [32, 37],
            iconAnchor: [16, 25],
            popupAnchor: [0, -28]
        });

var hero = L.marker([48.839, 2.327], {title:'hero', icon:heroIcon, draggable: true, zIndexOffset: 1000}).addTo(map);
map.setView([48.839, 2.327], 14);

function displayMarker(){
    /*var distance = marker2.getLatLng().distanceTo(hero.getLatLng());

    marker2.addTo(map);
        if (distance > 700) {

        map.removeLayer(marker2);

     }*/

    for (var i = 0; i < markerMusees.length; i++) {
        var distanceMusees = markerMusees[i].getLatLng().distanceTo(hero.getLatLng());

        if (distanceMusees > 700) {
            //map.removeLayer(markerMusees[i]);
            //map.removeLayer(museesLayer);
            museesLayer.removeLayer(markerMusees[i]);
            
        }
        else{
            //markerMusees[i].addTo(map);
            markerMusees[i].addTo(museesLayer);
        }
    }
    for (var i = 0; i < markerCommissariats.length; i++) {
        var distanceCommissariats = markerCommissariats[i].getLatLng().distanceTo(hero.getLatLng());

        if (distanceCommissariats > 700) {
            //map.removeLayer(markerCommissariats[i]);
            commissariatsLayer.removeLayer(markerCommissariats[i]);
        }
        else{
            //markerCommissariats[i].addTo(map);
            markerCommissariats[i].addTo(commissariatsLayer);
        }
    }
    for (var i = 0; i < markerHopitaux.length; i++) {
        var distanceHopitaux = markerHopitaux[i].getLatLng().distanceTo(hero.getLatLng());

            if (distanceHopitaux > 700) {
                //map.removeLayer(markerHopitaux[i]);
                hopitauxLayer.removeLayer(markerHopitaux[i]);
            }
            else{
                //markerHopitaux[i].addTo(map);
                markerHopitaux[i].addTo(hopitauxLayer);
            }
    }
    for (var i = 0; i < markerPub.length; i++) {
        if(pub.elements[i].lat && pub.elements[i].lon){ //Protect if data corrumpted
        var distancePub = markerPub[i].getLatLng().distanceTo(hero.getLatLng());

            if (distancePub > 700) {
                //map.removeLayer(markerPub[i]);
                pubsLayer.removeLayer(markerPub[i]);
            }
            else{
                //markerPub[i].addTo(map);
                markerPub[i].addTo(pubsLayer);
            }
        }
    }
    for (var i = 0; i < markerMairies.length; i++) {

        var distanceMairie = markerMairies[i].getLatLng().distanceTo(hero.getLatLng());

            if (distanceMairie > 700) {
                //map.removeLayer(markerPub[i]);
                mairiesLayer.removeLayer(markerMairies[i]);
            }
            else{
                //markerPub[i].addTo(map);
                markerMairies[i].addTo(mairiesLayer);
            }
    }
    for (var i = 0; i < markerFleuristes.length; i++) {
        var distanceFleuriste = markerFleuristes[i].getLatLng().distanceTo(hero.getLatLng());

            if (distanceFleuriste > 700) {
                //map.removeLayer(markerPub[i]);
                fleuristesLayer.removeLayer(markerFleuristes[i]);
            }
            else{
                //markerPub[i].addTo(map);
                markerFleuristes[i].addTo(fleuristesLayer);
            }
    }
}
 
//Display data when site is opened    
displayMarker();    

//Display data when hero is moving
hero.on('drag', displayMarker);

/* Generating circle around the hero */
var circle = L.circle(hero.getLatLng(), 700, {
    color: 'black',
    weight: 5,
    fillColor: '#f03',
    fillOpacity: 0,
}).addTo(map);

/* Generate a path that will be completed with visited locations */
var polyline = L.polyline([]).addTo(map);