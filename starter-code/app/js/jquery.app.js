$( document ).ready(function() {
    console.log( "ready!" );

    //get the information from the cats API and log in the console
    $.get('https://ga-cat-rescue.herokuapp.com/api/cats', function(data){
    	$('body')
    		.append("name: " + data.name, "note: " + data.note, "image: " + data.image);
    }, "json");
    	//.done(function(data){
    	//	console.log(data);
    	//});


});
//TO DO:
//Make a list of existing cats appear underneath the form.
	//append the list of cats API to the DOM
//Make the form work (i.e. it will add a cat, and you can verify the cat was added by refreshing).
	//refer to forms lab to make the form work
//Get your app to add to the list of cats without refreshing the page, using the information from the newly created cat.
	//append each new cat as they are added and add to API

