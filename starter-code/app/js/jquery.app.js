$( document ).ready(function() {
    console.log( "ready!" );

    



    //get the information from the cats API and log in the console
   $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    	.done(function(data){
    		//console.log(data);
    	//var allCats = JSON.stringify(data);
    	//console.log(allCats);
    	var allCats = JSON.parse(data);
    	console.log(allCats);
    	for( i=0; i < allCats.length; i++){
			$('#cats').append('<li>' + allCats[i].name + ' - ' + allCats[i].note + '</li>');
			//$('#cats').append(allCats[i].note);
			//$('#cats').append(allCats[i].image);
		}	
    });

    	//+ " " + allCats[i].image + 
    	//for (i=0; i<allCats.length; i++){
    	//var cats = allCats.responseText;
		//var jsonResponse = JSON.parse(cats);
		//console.log(jsonResponse["cats"]);
    	//$('ul').append(allCats.responseText);
});
//TO DO:
//Make a list of existing cats appear underneath the form.
	//append the list of cats API to the DOM
//Make the form work (i.e. it will add a cat, and you can verify the cat was added by refreshing).
	//refer to forms lab to make the form work
//Get your app to add to the list of cats without refreshing the page, using the information from the newly created cat.
	//append each new cat as they are added and add to API

