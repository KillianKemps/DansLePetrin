/*****************************************************************/
/* Importing story data and managin it                           */

console.log(story.A1.title);
console.log(story.A1.description);
for ( var conseq in story.A1.conseq_ref)
console.log(conseq.ref);


window.ref = "A1"; //Init first step

function story_manager(){
    var interfaceBlock = document.getElementById('interfaceBlock');
    interfaceBlock.style.display = "block";
    //Display story in interface

    description.innerHTML = story[window.ref].description;
    title.innerHTML = story[window.ref].title;
    
    document.getElementById('conseq_ref').innerHTML = ""; // Erase the content before adding
    for ( var conseq in story[window.ref].conseq_ref){
    	/* Create a li element to host a choice */
    	var li = document.createElement('li');
    	document.getElementById('conseq_ref').appendChild(li);
    	var button = document.createElement('button');
    	button.setAttribute('data-conseq_ref',story[window.ref].conseq_ref[conseq][0]); 
    	button.setAttribute('data-location',story[window.ref].conseq_ref[conseq][2]); 
    	li.appendChild(button);

    	/* Bind a choice to the li element */
    	var choice = document.createTextNode(story[window.ref].conseq_ref[conseq][1]);
    	button.appendChild(choice);
    }

}

museesLayer.on('click', function(){window.ref="A2";story_manager();});