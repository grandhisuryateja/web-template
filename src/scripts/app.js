$(document).ready(function() {
    // body...
    console.log("hello");
    var total = 0;
    var jsonUrl = null;
    var flag = 0;
    $('.a').on('click', function(event) {
        // $('#total').html('$'+total);
        ID = $(this).attr('id');
        $(this).toggleClass("select-1");
        var self = this;
        $.getJSON('price.json', function(result) {
            var Data = result.prices;
            console.log("qwertyuio");
            // console.log(Data,"qwe");
            for (var i in Data) {
                if (Data[i].id === ID) {
                    // console.log(Data[i].value, "------");
                    total = total + parseInt(Data[i].value);
                    whiteImage = Data[i].imageWhite;
                    image = Data[i].image;
                }
            }
            console.log(self,"self");
            console.log($(self).hasClass("select-1"),"true or false");
            if($(self).hasClass("select-1")){
            	$(self).children(".imagecontainer").children('.imgclass').css("content", 'url(' + whiteImage + ')');	
            }
             else{
             $(self).children(".imagecontainer").children('.imgclass').css("content", 'url(' + image + ')');
             }   
        });
        console.log("jsonUrl : ",jsonUrl);
        // $(self).children(".imagecontainer").children('.imgclass').css("content", 'url(' + jsonUrl + ')');

    });

    $('.b').on('click', function(event) {


    });
    $('#total1').html('$' + total);
    console.log("total :", total);
});