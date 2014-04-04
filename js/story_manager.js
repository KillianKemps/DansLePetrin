/*****************************************************************/
/* Importing story data and managin it                           */

window.ref = "A001"; //Init first step

function story_manager(){
    var interfaceBlock = document.getElementById('interfaceBlock');
    interfaceBlock.style.display = "block";
    //Display story in interface

    description.innerHTML = story[window.ref].description;
    title.innerHTML = story[window.ref].title;
    
    document.getElementById('conseq_ref').innerHTML = ""; // Erase the content before adding
    Game.condition = [];

    for ( var conseq in story[window.ref].conseq_ref){
    	/* Create a li element to host a choice */
    	var li = document.createElement('li');
    	document.getElementById('conseq_ref').appendChild(li);
    	var button = document.createElement('button');
    	button.setAttribute('onclick', "function update(){ window.ref = \"" + story[window.ref].conseq_ref[conseq][0] + "\"; story_manager();} update()"); 
    	button.setAttribute('data-conseq_ref',story[window.ref].conseq_ref[conseq][0]); 
    	button.setAttribute('data-location',story[window.ref].conseq_ref[conseq][2]); 
    	li.appendChild(button);

    	/* Bind a choice to the li element */
    	var choice = document.createTextNode(story[window.ref].conseq_ref[conseq][1]);
    	button.appendChild(choice);

        Game.condition[conseq] = [];
        Game.condition[conseq][0] = story[window.ref].conseq_ref[conseq][2];
        Game.condition[conseq][1] = story[window.ref].conseq_ref[conseq][0];

        /** Bind choice to marker type **/
        /*if(story[window.ref].conseq_ref[conseq][2] === "musees"){  // !! Check if correct !!
            for (var i = 0; i < musees.features.length; i++) {
                    markerMusees[i].on('click', function(){
                    window.ref = story[window.ref].conseq_ref[conseq][0];
                    //story_manager();
                });
            } 
        }*/
        /*else if(story[window.ref].conseq_ref[conseq][2] === "commissariat"){*/
           /* for (var i = 0; i < commissariats.features.length; i++) {
                    markerCommissariats[i].on('click', function(){

                    console.log('location: ' + story[window.ref].conseq_ref[conseq][2]);
                    console.log('conseq ref: ' + story[window.ref].conseq_ref[conseq][0]);
                    console.log('conseq: ' + conseq);
                    window.ref = story[window.ref].conseq_ref[conseq][0];
                    //story_manager();
                });
            }*/

           /* commissariatsLayer.on('click', function (){
                story_manager();
                console.log(story[window.ref].conseq_ref[conseq][0]);
                window.ref = story[window.ref].conseq_ref[conseq][0];
            }); 
        }*//*
        else if(story[window.ref].conseq_ref[conseq][2] === "hopitaux"){
            for (var i = 0; i < hopitaux.features.length; i++) {
                    markerHopitaux[i].on('click', function(){
                    window.ref = story[window.ref].conseq_ref[conseq][0];
                    //story_manager();
                }); 
            }
        }
        else if(story[window.ref].conseq_ref[conseq][2] === "bar"){*/
            /*for (var i = 0; i < pub.elements.length; i++) { 
                if(pub.elements[i].lat && pub.elements[i].lon){ //Protect if data corrumpted

                    markerPub[i].on('click', function(){
                    console.log('location: ' + story[window.ref].conseq_ref[conseq][2]);
                    console.log(' iflocation: ' + (story[window.ref].conseq_ref[conseq][2] === "bar"));
                    console.log('conseq ref: ' + story[window.ref].conseq_ref[conseq][0]);
                    console.log('conseq: ' + conseq);
                    window.ref = story[window.ref].conseq_ref[conseq][0];

                    console.log('Pub click');
                    //story_manager();
                    

                    }); 
                }   
            }*/

            /*pubsLayer.on('click', function (){
                window.ref = story[window.ref].conseq_ref[conseq][0];
                story_manager();
            });
        }
        else{
            
        }*/

    }
}


//pubsLayer.on('click', function (){
    //console.log(Game.condition);
    //
    //
function storyNext(inputCondition){
    for ( var i in Game.condition){
        console.log(Game.condition[i][1]);
        if(Game.condition[i][0] === inputCondition){
            console.log(Game.condition[i][1]);
                window.ref = Game.condition[i][1];
                story_manager();
        }
    //}
    }
}
