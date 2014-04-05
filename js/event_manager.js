
/*****************************************************************/
/* Creating event when clicking on marker                        */

//create function that reacts for marker event click
/*function onMarkerClick(e) {
    alert("Hey, you clicked it right " + e.toGeoJSON);
}
*/
//put trigger on marker that shows interface
/*marker.on('click', onMarkerClick);*/

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

/*function changeIcon(e) {
    console.log(e.getLatLng);
    marker.setIcon(fastfoodIcon);
}*/
//put trigger on marker
/*marker2.on('click', onMarker2Click);*/


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

/** Send to check story if hero is clicked on **/
hero.on('click', function(event){
    storyNext('moi');
})

/**  Moves the hero and send to storyNext to check the story **/
function moveMarker(marker, condition){
        switch(condition){
            case 'bar':
                var position = markerPub[marker].getLatLng();
            break;
            case 'hopital':
                var position = markerHopitaux[marker].getLatLng();
            break;
            case 'musee':
                var position = markerMusees[marker].getLatLng();
            break;
            case 'commissariat':
                var position = markerCommissariats[marker].getLatLng();
            break;
            case 'mairie':
                var position = markerMairies[marker].getLatLng();
            break;
            case 'fleuriste':
                var position = markerFleuristes[marker].getLatLng();
            break; 
            case 'kiosque':
                var position = markerKiosques[marker].getLatLng();
            break;
        }
        
        hero.setLatLng(position);
        circle.setLatLng(position);
        polyline.addLatLng(position);
        map.closePopup();
        displayMarker();
        map.setView(position, 15);    
        storyNext(condition);
}
