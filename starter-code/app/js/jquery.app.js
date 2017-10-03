$( document ).ready(function() {
    console.log( "ready!" );

    



    //get the information from the cats API and log in the console
   $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    	.done(function(data){
    	var allCats = JSON.parse(data);
    	console.log(allCats);
    	for( i=0; i < allCats.length; i++){
			$('#cats').append('<li>' + allCats[i].name + ' - ' + allCats[i].note + '</li>');
			//$('#cats').append(allCats[i].note);
			//$('#cats').append(allCats[i].image);
		}
		
    });

   	$('#new-cat').on("submit", function (e) {
		e.preventDefault();
		var catName = ($('#cat-name').val());
		var catNote = ($('#cat-note').val());
		var newCat = ['<li>' + catName + ' ' + catNote + '</li>'];
		$('#cats').append(newCat);

		newCat = {
			name: catName,
			note: catNote
		};
		$.ajax ({
   		type: "POST",
   		data: JSON.stringify(newCat),
   		url: ('https://ga-cat-rescue.herokuapp.com/api/cats')
   		//contentType: "application/json"
   		});
	});	

   	
});
//TO DO:
//Make a list of existing cats appear underneath the form.
	//append the list of cats API to the DOM
//Make the form work (i.e. it will add a cat, and you can verify the cat was added by refreshing).
	//refer to forms lab to make the form work
//Get your app to add to the list of cats without refreshing the page, using the information from the newly created cat.
	//append each new cat as they are added and add to API

