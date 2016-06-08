$(document).ready(function() {
    // body...
    var total = 0;
    var jsonData ;
    var dict = [];
    var data;
    var selectedValue = 0;
    var selected = 0;

    /**
    *
    Getting the whole data from json.*/
    $.getJSON('price.json', function(result) {
            jsonData = result.prices;
             });
    /**
    *
    Converting the json to dictionary with key as id.*/
     function dictionary(jsonData)
    {
    	data = jsonData;
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

  var $steps = $('.step');
  var currentStep = 0,
      nextStep;
  
  $steps.slice(1).hide(); //hide all but first
  
  $('#singlebutton , #next').on('click', function(e) {
    e.preventDefault();
    //console.log(e,"e");
    nextStep = currentStep + 1;
    // console.log(nextStep,"next");
    if (nextStep == $steps.length) {
      alert("You reached the end");
      return;
    }
    $($steps.get(currentStep)).hide();
    $($steps.get(nextStep)).show();
    currentStep = nextStep;
  });

text ="";
for(var i=1; i <= 14; i++)
{
	text = text +"<span id=\"bullet"+ i +"\" class=\"bullet\">&#9670;&emsp;&emsp;&emsp;</span>";
}
text = text+"<span id=\"bullet"+ 15 +"\" class=\"bullet\">&#9670;</span>";
$('.background').append(text);
var w= $(window).width();
var ww=parseInt($('.background').css('width'));
var marginLeft=w/2-ww/2;
$('.background').css('margin-left',marginLeft + "px");
console.log(ww);
// console.log(text,"text");

$('.bullet').click(function(){
	var myid=parseInt($(this).attr('id').replace(/[a-z]/g, ''))
	console.log("This is id "+ myid);
	$("step-"+myid).css('margin-left','0px');
});

 $('.multiple-click').on('click', function(event) {
       dict =  dictionary(jsonData);
        id = $(this).attr('id');
        // console.log(dict[ID]['imageWhite'],"dictionary");
        $(this).toggleClass("click-selected");
        var self = this;
        cost = dict[id]['value'];
        whiteImage = dict[id]['imageWhite'];
        image = dict[id]['image'];
        if($(self).hasClass("click-selected")){
        	total = total + parseInt(cost);
        	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
        }
         else{
         	total = total - parseInt(cost);
            $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
         }
        console.log(total,"total");     	
    });

 $('.single-click').on('click', function(event) {
        var mainId = $(this).parent().parent().attr('id');
        console.log(mainId,"mainId");
        dict =  dictionary(jsonData);
        count = $('#'+mainId).find('.single-click').length;
         for(k = 0 ; k < count ; k++)
         {
			id = $('#'+mainId).find('.single-click').eq(k).attr('id');
			self = $('#'+mainId).find('.single-click').eq(k);
   			cost = dict[id]['value'];
   			console.log(cost,'cost');
            if($(self).hasClass("click-selected"))
            {
            	selectedValue = cost;
            	selected = 1;
            }   
    }
        $('#'+mainId).find('.single-click').removeClass("click-selected");
         // console.log($('#'+mlainId).find('.b'),"$('#'+mainId).find('.b')");
        $(this).addClass("click-selected");	
         // console.log(mainId,"parentid");
        for(j = 0 ; j < count ; j++)
         {
			id = $('#'+mainId).find('.single-click').eq(j).attr('id');
			self = $('#'+mainId).find('.single-click').eq(j);
   			cost = dict[id]['value'];
        	whiteImage = dict[id]['imageWhite'];
        	image = dict[id]['image'];
            if($(self).hasClass("click-selected")){
            	total = total + parseInt(cost);
            	$(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);	
            }
             else{

             $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
             }   
    }
             if(selected === 1){
             	total = total-selectedValue;
             } 
             selected = 0; 
              console.log(total,selectedValue,"total,temp");
    });

//console.log(total,"total");

});

