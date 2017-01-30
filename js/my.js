$(function(){



var i = 1;


$(".container").click(function(){
		
		switch (i){
		case 1 :
			$(".img_1").removeClass("show");
			$(".img_2").addClass("show");
			i = 2;
			break;
		
		
		case 2 :
			$(".img_2").removeClass("show");
			$(".img_3").addClass("show");
			i = 3;
			break;
		

		case 3 :
			$(".img_3").removeClass("show");
			$(".img_1").addClass("show");
			i = 1;
			break;
		}
		
	})




});