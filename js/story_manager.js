/*****************************************************************/
/* Importing story data and managin it                           */

console.log(story.A001.title);
console.log(story.A001.description);
for ( var conseq in story.A001.conseq_ref)
console.log(conseq.ref);


window.ref = "A001"; //Init first step

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
    	button.setAttribute('onclick', "function update(){ window.ref = \"" + story[window.ref].conseq_ref[conseq][0] + "\"; story_manager();} update()"); 
    	button.setAttribute('data-conseq_ref',story[window.ref].conseq_ref[conseq][0]); 
    	button.setAttribute('data-location',story[window.ref].conseq_ref[conseq][2]); 
    	li.appendChild(button);

    	/* Bind a choice to the li element */
    	var choice = document.createTextNode(story[window.ref].conseq_ref[conseq][1]);
    	button.appendChild(choice);

        /** Bind choice to marker type **/
        if(story[window.ref].conseq_ref[conseq][2] === "musees"){  // !! Check if correct !!
                   museesLayer.on('click', function(){
                    window.ref = story[window.ref].conseq_ref[conseq][0];
                    story_manager();
                }); 
        }
        else if(story[window.ref].conseq_ref[conseq][2] === "commissariat"){
                   commissariatsLayer.on('click', function(){
                    window.ref = story[window.ref].conseq_ref[conseq][0];
                    story_manager();
                }); 
        }
        else if(story[window.ref].conseq_ref[conseq][2] === "hopitaux"){
                   hopitauxLayer.on('click', function(){
                    window.ref = story[window.ref].conseq_ref[conseq][0];
                    story_manager();
                }); 
        }
        else{
            
        }

    }
}

