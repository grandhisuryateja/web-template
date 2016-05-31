$(document).ready(function() {
    // body...
    // console.log("hello");
    var total = 0;
    $('.a').on('click', function(event) {
        // $('#total').html('$'+total);
        ID = $(this).attr('id');
        $(this).toggleClass("select-1");
        var self = this;
        $.getJSON('price.json', function(result) {
            var Data = result.prices;
            // console.log("qwertyuio");
            for (var i in Data) {
                if (Data[i].id === ID) {
                    // console.log(Data[i].value, "------");
                    total = total + parseInt(Data[i].value);
                    whiteImage = Data[i].imageWhite;
                    image = Data[i].image;
                }
            }
            if($(self).hasClass("select-1")){
            	// console.log($(self).children(".imagecontainer").children('.imgclass').attr("src"));
            	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
            }
             else{
             $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
             }   
        });
    });

    $('.b').on('click', function(event) {
    	console.log("bbbbbbbbbbbbbbbb");
    	//ID = $(this).attr('id');
        $('.b').removeClass("select-1");
        $(this).addClass("select-1");	
         var self = this;
         var mainId = $(this).parent().attr('id')
         console.log(mainId,"parentid");
         count = $('#three .b').length;
         for(i = 0 ; i < count ; i++)
         {
		
			ID = $('#three .b').eq(i).attr('id');
			self = $('#three .b').eq(i);
			// console.log(self,"self[i]");        	
    //       $('#'+mainId).each(function () {
    //       	console.log("insideeach");	
    //         console.log($(this).attr('id'),"onetwothree");
    // });	
        $.getJSON('price.json', function(result) {
            var Data = result.prices;
            // console.log("qwertyuio");
            for (var i in Data) {
                if (Data[i].id === ID) {
                    // console.log(Data[i].value, "------");
                    total = total + parseInt(Data[i].value);
                    whiteImage = Data[i].imageWhite;
                    image = Data[i].image;
                }
            }
            if($(self).hasClass("select-1")){
            	console.log("111111111111");
            	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
            }
             else{
             	console.log("2222222222222222");
             $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
             }   
        });
    }
    });
    $('#total1').html('$' + total);
    console.log("total :", total);
});