
/*****************************************************************/
/* Creating custom markers and forms                             */

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

var herosIcon = L.icon({
            iconUrl: 'img/digsby.png',
            iconSize: [32, 37],
            iconAnchor: [16, 25],
            popupAnchor: [0, -28]
        });

var heros = L.marker([48.83478, 2.3679], {title:'Heros', icon:herosIcon, draggable: true}).addTo(map);


/* Generating circle around the heros */

var circle = L.circle(heros.getLatLng(), 1400, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

function onEachFeatureCommissariats(features, layer) {
    //link name to the popup of the marker
        layer.bindPopup("Commissariat");
}


var commissariatsLayer = L.geoJson(commissariats, {
    onEachFeature: onEachFeatureCommissariats
}).addTo(map);

if(circle.getBounds().contains(commissariatsLayer)){
    console.log('contains');
}
else{
    console.log('not contains');
}