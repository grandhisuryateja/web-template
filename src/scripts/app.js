$(document).ready(function() {
    // body...
    console.log("hello");
    var total = 0;
    var jsonUrl = null;
    $('.a').on('click', function(event) {
    	var self = this;
        // $('#total').html('$'+total);
        ID = $(this).attr('id');
        // console.log(ID);
       
        console.log($(this).children('.imagecontainer').prop('id'));
        // console.log($(this).children(".imagecontainer").children('.imgclass').prop('src'));

        // $(this).children(".imagecontainer").children('.imgclass').css("content", 'url(' + jsonUrl + ')');
        // $(this).toggle(function () {
        // 	// body...
        // 	$(this).children(".imagecontainer").children('.imgclass').css("content", "url(/img/Assets/Landing%20Page/Step-1/iOS_white.png)");
        // });
        $(this).toggleClass("select-1");
        $.getJSON('price.json', function(result) {
            var Data = result.prices;
            console.log("qwertyuio");
            // console.log(Data,"qwe");
            for (var i in Data) {
                if (Data[i].id === ID) {
                    // console.log(Data[i].value, "------");
                    total = total + parseInt(Data[i].value);
                    jsonUrl = Data[i].url;
                }
            }
            $(self).children(".imagecontainer").children('.imgclass').css("content", 'url(' + jsonUrl + ')').toggle();
        });
        console.log("jsonUrl : ",jsonUrl);
        // $(self).children(".imagecontainer").children('.imgclass').css("content", 'url(' + jsonUrl + ')');

    });
    $('#total1').html('$' + total);
    console.log("total :", total);
});