$(document).ready(function(){

	console.log("here it goes");
	$(window).scroll(function(){
		if(this.scrollY > 20){
			// $( ".navbar" ).classList = ['navbar', 'sticky'];
			
			$( "nav" ).addClass( "sticky" );
		}
		else if (this.scrollY < 20) {
			$( "nav" ).removeClass( "sticky" );

		}


	});


  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
   	backSpeed: 60,
   	loop: true
  });
});


//typing animation script//s
// var typed = new typed(".typing", {
// 	strings: ["graphics Desinger", "blogger", "freelancer"],
// 	typeSpeed: 100,
// 	backSpeed: 60,
// 	loop: true

// });
