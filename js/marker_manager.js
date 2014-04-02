
/*****************************************************************/
/* Creating custom markers and forms                             */

//add marker
var marker = L.marker([48.853, 2.3835], {title:'Musée Jesaispasquoi'}).addTo(map);
//add popup on marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

//add marker
var marker2 = L.marker([48.852, 2.389], {
    title:'Show interface'
 
});

//add popup on marker
marker2.bindPopup("I'm showing the interface ! ");

var fastfoodIcon = L.icon({
            iconUrl: 'img/fastfood.png',
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
        });

var heroIcon = L.icon({
            iconUrl: 'img/digsby.png',
            iconSize: [32, 37],
            iconAnchor: [16, 25],
            popupAnchor: [0, -28]
        });

var hero = L.marker([48.83478, 2.3679], {title:'hero', icon:heroIcon, draggable: true}).addTo(map);



    
hero.on('drag',(function(e){
    var distance = marker2.getLatLng().distanceTo(hero.getLatLng());

    marker2.addTo(map);
        if (distance > 700) {

        map.removeLayer(marker2);

     }

    for (var i = 0; i < musees.features.length; i++) {
        var distanceMusees = markerMusees[i].getLatLng().distanceTo(hero.getLatLng());

        if (distanceMusees > 700) {
            map.removeLayer(markerMusees[i]);
        }
        else{
            markerMusees[i].addTo(map);
        }
    }
    for (var i = 0; i < commissariats.features.length; i++) {
            var distanceCommissariats = markerCommissariats[i].getLatLng().distanceTo(hero.getLatLng());

            if (distanceCommissariats > 700) {
                map.removeLayer(markerCommissariats[i]);
            }
            else{
                markerCommissariats[i].addTo(map);
            }
        }


}));

/* Generating circle around the hero */
var circle = L.circle(hero.getLatLng(), 700, {
    color: 'black',
    weight: 5,
    fillColor: '#f03',
    fillOpacity: 0,
}).addTo(map);