$(document).ready(function() {
    // body...
    var total = 0;
    var Data ;
    var dict = [];
    var data;
    $.getJSON('price.json', function(result) {
        	// console.log($(self),"self123");
            Data = result.prices;
   	       // console.log("qwertyuio");
             });

     function dictionary(Data)
    {
    	data = Data;
    	for(var i = 0; i < data.length ; i++)
    	{
    		temp = [];
    		temp['value'] = data[i].value;
    		temp['imageWhite'] = data[i].imageWhite;
    		temp['image'] = data[i].image;
    		dict[data[i].id] = temp;
    	}
    	return dict;
    }

    $('.a').on('click', function(event) {
       dict =  dictionary(Data);
        ID = $(this).attr('id');
        // console.log(dict[ID]['imageWhite'],"dictionary");
        $(this).toggleClass("select-1");
        var self = this;
        cost = dict[ID]['value'];
        whiteImage = dict[ID]['imageWhite'];
        image = dict[ID]['image'];
        if($(self).hasClass("select-1")){
        	total = total + parseInt(cost);
        	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
        }
         else{
         	total = total - parseInt(cost);
            $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
         }
         y = (parseInt(total)/parseInt(50));
    	$(".progress-bar").each(function(){
     	each_bar_width = y;
    	 $(this).width(each_bar_width + '%');
  	}); 
           	
    });

    $('.b').on('click', function(event) {
    	//ID = $(this).attr('id');
        var mainId = $(this).parent().attr('id');
        $('#'+mainId).find('.b').removeClass("select-1");
        // console.log($('#'+mainId).find('.b'),"$('#'+mainId).find('.b')");
        $(this).addClass("select-1");	
         // console.log(mainId,"parentid");
        count = $('#'+mainId).find('.b').length;
        dict =  dictionary(Data);
        for(j = 0 ; j < count ; j++)
         {
			ID = $('#'+mainId).find('.b').eq(j).attr('id');
			self = $('#'+mainId).find('.b').eq(j);
   			cost = dict[ID]['value'];
        	whiteImage = dict[ID]['imageWhite'];
        	image = dict[ID]['image'];
            if($(self).hasClass("select-1")){
            	total = total + parseInt(cost);
            	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
            }
             else{	
             $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
             }   
    }  
    // console.log(total,"total-b");
    });
   
     var x = 50;
   	 var totalAll = 0;
   	 maxValue = 5000;
    $('#button').on('click', function(event) {
    	console.log($('#all-divs'),"#all-divs");
    	var allSelected = $('#all-divs').find('.select-1');
    	console.log(allSelected,"allSelected");
    	// console.log($('#size_small').attr("value"),"valuevalue");
    	dict =  dictionary(Data);
    	totalAll = 0;
    	for(var k = 0 ; k < allSelected.length ; k++)
    	{
    		 ID = $(allSelected[k]).attr("id")
    		 totalAll = totalAll + parseInt(cost = dict[ID]['value']);
    	}
    	console.log(totalAll,"totalAlltotalAll");
    	$('.project-estimate').show(1000);
    	$('#project-estimate-cost').html('$' + totalAll);
    	x = (parseInt(totalAll)/parseInt(50));
    	$(".progress-bar").each(function(){
     	each_bar_width = x;
    	 $(this).width(each_bar_width + '%');
  	});
   	 $('.progress-bar').find('span').attr('title','x');
  	 // $('[data-toggle="tooltip"]').tooltip();
  	 $('[data-toggle="tooltip"]').tooltip('show');

    });

});