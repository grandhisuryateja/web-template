$(document).ready(function() {
    // body...
    var total = 0;
    var Data ;
    var dict = [];
    var data;
    $.getJSON('price.json', function(result) {
            Data = result.prices;

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
for(var i=0; i < 15; i++)
{
	text = text +"<span id=\"bullet"+ i +"\" class=\"bullet\">&#9670;&emsp;&emsp;&emsp;</span>";
}
$('.x').append(text);
var w= $(window).width();
var ww=parseInt($('.x').css('width'));
var marginLeft=w/2-ww/2;
$('.x').css('margin-left',marginLeft + "px");
$('#bullet1').css('color','orange');
console.log(ww);
console.log(text,"text");

$('.bullet').click(function(){
	var myid=parseInt($(this).attr('id').replace(/[a-z]/g, ''))
	console.log("This is id "+ myid);
	$("step-"+myid).css('margin-left','0px');
});
});

