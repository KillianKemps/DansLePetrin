
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
    var event = event[Math.floor(Math.random()*event.length)];
    var paragraphe = document.getElementById('description');
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

map.on('click', onMapClick);
*/

//hotelsLayer.on('click', changeIcon);

hero.on('drag', function(event){
            var coordinates = hero.getLatLng();
            circle.setLatLng(coordinates);
});

hero.on('dragend', function(event){
    map.setView(hero.getLatLng(), 13);
});

function showHideInterface(){
    if (!Game.showHideInterface) {
        $('#interfaceBlock').animate({
            marginLeft: '-630px'
        }, 500);
        Game.showHideInterface = 1;
        document.getElementById('slideButton').innerHTML = ">";
        //console.log('boolean: ' + Game.showHideInterface);
    }
    else{
        $('#interfaceBlock').css('margin', '39px auto');
        Game.showHideInterface = 0;
        document.getElementById('slideButton').innerHTML = "<";
        //console.log('boolean: ' + Game.showHideInterface);
    }
    
    //console.log('Clicked');
}

//Set hero position to clicked marker
/*for (var i = 0; i < markerMusees.length; i++) {
    markerMusees[i].on('click', function(event) {*/
function moveMarkerMusees(marker){
        var position = markerMusees[marker].getLatLng();
        hero.setLatLng(position);
        circle.setLatLng(position);
        polyline.addLatLng(position);
        map.closePopup();
        displayMarker();
        map.setView(position, 15);    
        storyMusees();
}

    /*});*/
/*    markerMusees[i].on('contextmenu', function(event){
        this.bindPopup(popupMusees[i]);
        console.log(popupMusees[i]);
        this.openPopup();
        this.unbindPopup();
    });*/
/*}*/
/*for (var i = 0; i < markerCommissariats.length; i++) {
    markerCommissariats[i].on('click', function(event) {*/
function moveMarkerCommissariats(marker){
        var position = markerCommissariats[marker].getLatLng();
        hero.setLatLng(position);
        circle.setLatLng(position);
        polyline.addLatLng(position);
        map.closePopup();
        displayMarker();
        map.setView(position, 15);
        storyCommissariats();
}

    /*});*/
/*    markerCommissariats[i].on('contextmenu', function(event){
        this.bindPopup(popupCommissariats[i]);
        console.log(popupCommissariats[i]);
        this.openPopup();
        this.unbindPopup();
    });*/
/*}*/
function moveMarkerHopitaux(marker){
    //for (var i = 0; i < markerHopitaux.length; i++) {
    //markerHopitaux[i].on('click', function(event) {
        var position = markerHopitaux[marker].getLatLng();
        hero.setLatLng(position);
        circle.setLatLng(position);
        polyline.addLatLng(position);
        map.closePopup();
        displayMarker();
        map.setView(position, 15);
        storyHopitaux();
   //});
//});

/*    markerHopitaux[i].on('contextmenu', function(event){
        this.bindPopup(popupHopitaux[i]);
        console.log(popupHopitaux);
        this.openPopup();
        this.unbindPopup();
    });*/
}

function moveMarkerPub(marker){
   // for (var i = 0; i < markerPub.length; i++) {
    /*console.log("i2: " + i);*/
/*        markerPub[i].on('contextmenu', function(event){
        console.log(popupPub[240]);
        console.log('i: ' + i);
        this.bindPopup(popupPub[i]);
        
        this.openPopup();
        this.unbindPopup();
    });

*/    //markerPub[i].on('click', function(event) {
        var position = markerPub[marker].getLatLng();
        hero.setLatLng(position);
        circle.setLatLng(position);
        polyline.addLatLng(position);
        map.closePopup();
        displayMarker();
        map.setView(position, 15);
        storyPub();
    //});

//}

}
