$(document).ready(function() {
    // body...
    // console.log("hello");
    var total = 0;
    var Data ;
    $.getJSON('price.json', function(result) {
        	// console.log($(self),"self123");
            Data = result.prices;
   	       // console.log("qwertyuio");
             });

    $('.a').on('click', function(event) {
        // $('#total').html('$'+total);
        ID = $(this).attr('id');
        $(this).toggleClass("select-1");
        var self = this;
            // console.log("qwertyuio");
            for (var i in Data) {
                if (Data[i].id === ID) {
                    cost = Data[i].value;
                    whiteImage = Data[i].imageWhite;
                    image = Data[i].image;
                }
            }
            if($(self).hasClass("select-1")){
            	// console.log($(self).children(".imagecontainer").children('.imgclass').attr("src"));
            	total = total + parseInt(cost);
            	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
            }
             else{
             	total = total - parseInt(cost);
                $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
             } 
             console.log(total,"total-a");  
    });

    

    $('.b').on('click', function(event) {
    	//ID = $(this).attr('id');
        var mainId = $(this).parent().attr('id');
        $('#'+mainId).find('.b').removeClass("select-1");
        // console.log($('#'+mainId).find('.b'),"$('#'+mainId).find('.b')");
        $(this).addClass("select-1");	
         // console.log(mainId,"parentid");
         count = $('#'+mainId).find('.b').length;
         // console.log(count,"count");
         // console.log(Data,"Data");
         // var price_info = Call_my
        for(j = 0 ; j < count ; j++)
         {
		
			ID = $('#'+mainId).find('.b').eq(j).attr('id');
			self = $('#'+mainId).find('.b').eq(j);
			// console.log($(self),"self123");
			for (var i in Data) {
                if (Data[i].id === ID) {
                    cost = Data[i].value;
                    whiteImage = Data[i].imageWhite;
                    image = Data[i].image;
                }
            }
            if($(self).hasClass("select-1")){
            	total = total + parseInt(cost);
            	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
            }
             else{
             	total = total - parseInt(cost);	
             $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
             }   
    }  
    console.log(total,"total-b");
    });

    // $('#total1').html('$' + total);
    // console.log("total :", total);
});