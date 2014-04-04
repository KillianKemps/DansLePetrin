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

        if(story[window.ref].conseq_ref[conseq][2] === 'reset'){
            button.setAttribute('onclick', "function update(){ window.ref = \"" + story[window.ref].conseq_ref[conseq][0] + "\"; story_manager();} update()");
        }
        else{
            button.setAttribute('onclick', "showHideInterface();"); 
            button.setAttribute('data-conseq_ref',story[window.ref].conseq_ref[conseq][0]); 
            button.setAttribute('data-location',story[window.ref].conseq_ref[conseq][2]); 
        }
    	
    	li.appendChild(button);

    	/* Bind a choice to the li element */
    	var choice = document.createTextNode(story[window.ref].conseq_ref[conseq][1]);
    	button.appendChild(choice);

        switch(story[window.ref].conseq_ref[conseq][2]){
            case 'bar':
                var image = document.createElement('img');
                image.setAttribute('src', "img/bar.png");
                button.appendChild(image); 
            break;
            case 'hopital':
                var image = document.createElement('img');
                image.setAttribute('src', "img/hospital-building.png");
                button.appendChild(image); 
            break;
            case 'musee':
                var image = document.createElement('img');
                image.setAttribute('src', "img/musee.png");
                button.appendChild(image); 
            break;
            case 'commissariat':
                var image = document.createElement('img');
                image.setAttribute('src', "img/police.png");
                button.appendChild(image); 
            break;
            case 'mairie':
                var image = document.createElement('img');
                image.setAttribute('src', "img/administration.png");
                button.appendChild(image); 
            break;

        }

        Game.condition[conseq] = [];
        Game.condition[conseq][0] = story[window.ref].conseq_ref[conseq][2];
        Game.condition[conseq][1] = story[window.ref].conseq_ref[conseq][0];

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
                showHideInterface();
        }
    //}
    }
}
