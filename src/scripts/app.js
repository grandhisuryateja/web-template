$(document).ready(function() {

    var total = 0,
        jsonData, data, selectedValue = 0,
        selected = 0,dict = [];
    /**
    *
    Getting the whole data from json.*/
    $.getJSON('price.json', function(result) {
        jsonData = result.prices;
    });
    /**
    *
    Converting the json to dictionary with key as id.*/
    function dictionary(jsonData) {
        data = jsonData;
        for (var i = 0; i < data.length; i++) {
            temp = [];
            temp['value'] = data[i].value;
            temp['imageWhite'] = data[i].imageWhite;
            temp['image'] = data[i].image;
            dict[data[i].id] = temp;
        }
        return dict;
    }
    var content = ['Index Page', 'Platform &emsp;', 'Size &emsp;&emsp;', 'User&emsp; Management', 'Data Type', 'Existing Data Sources',
        'Location Data', 'Third-Party Cloud API', 'User Engagement', 'Quality &emsp;', 'Security &emsp;', 'Analytics'
    ];
    var $steps = $('.step');
    var currentStep = 1,
        prevStep,
        nextStep;

    $steps.slice(1).hide(); //hide all but first
    $('#singlebutton').on('click', function() {
        $($steps.get(0)).hide();
        $($steps.get(1)).show();
        $('#diamond-1').addClass('diamond-select');
        $('.label-1').css('opacity', '1');

    });
    /***
    This function is for going to the next page on clicking the next button.
    */
    $('[id^=next]').on('click', function(e) {
        e.preventDefault();
        var stepId = parseInt($(this).parent().parent().parent().parent().attr('id').replace(/[a-z,-]/g, ''));
        if(!($('#step-' + stepId ).children().children().children().hasClass('click-selected')))
        {
        	alert("Please select one of the options below");
        	return;
        }
        for(var i = 1; i <= 15 ; i++)
        {
        	if($('#step-' + i ).children().children().children().hasClass('click-selected'))
        		$('#diamond-' + i).css('color','#0c232c');
        }
        stepId = stepId + 1;
        //console.log($('#bullet'+stepId).attr('class'),'classname');
        $('[id^=diamond]').removeClass('diamond-select');
        $('#diamond-' + stepId).addClass('diamond-select');
        $('[class^=label]').css('opacity', '0');
        $('.label-' + stepId).css('opacity', '1');
        nextStep = currentStep + 1;
        console.log(stepId, "stepId");
        if (nextStep == $steps.length) {
            alert("You reached the end");
            return;
        }
        $($steps.get(currentStep)).hide();
        $($steps.get(nextStep)).show();
        currentStep = nextStep;
    });
   /***
    This function is for going to the previous page on clicking the next button.
    */

    $('[id^=prev]').on('click', function(e) {
        console.log("entered prev click");
        e.preventDefault();
        var stepId = parseInt($(this).parent().parent().parent().parent().attr('id').replace(/[a-z,-]/g, ''));
        for(var i = 1; i <= 15 ; i++)
        {
        	if($('#step-' + i ).children().children().children().hasClass('click-selected'))
        		$('#diamond-' + i).css('color','#0c232c');
        }
        stepId = stepId - 1;
        $('[id^=diamond]').removeClass('diamond-select');
        $('#diamond-' + stepId).css('color','#fa6023');
        $('[class^=label]').css('opacity', '0');
        $('.label-' + stepId).css('opacity', '1');
        prevStep = currentStep - 1;
        console.log(prevStep);
        if (prevStep < 0) {
            alert("You reached the end");
            return;
        }
        $($steps.get(currentStep)).hide();
        $($steps.get(prevStep)).show();
        currentStep = prevStep;
    });

    /***
    This function is for calculating the total for Multiple select options.
    */
    $('.multiple-click').on('click', function(event) {
        dict = dictionary(jsonData);
        id = $(this).attr('id');
        // console.log(dict[ID]['imageWhite'],"dictionary");
        $(this).toggleClass("click-selected");
        var self = this;
        cost = dict[id]['value'];
        whiteImage = dict[id]['imageWhite'];
        image = dict[id]['image'];
        if ($(self).hasClass("click-selected")) {
            total = total + parseInt(cost);
            $(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);
        } else {
            total = total - parseInt(cost);
            $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
        }
        $(".estimated-price").html("$" + total);
    });

    /***
    This function is for calculating the total for Single select options.
    */
    $('.single-click').on('click', function(event) {
        var mainId = $(this).parent().parent().attr('id');
        console.log(mainId, "mainId");
        dict = dictionary(jsonData);
        count = $('#' + mainId).find('.single-click').length;
        for (k = 0; k < count; k++) {
            id = $('#' + mainId).find('.single-click').eq(k).attr('id');
            self = $('#' + mainId).find('.single-click').eq(k);
            cost = dict[id]['value'];
            console.log(cost, 'cost');
            if ($(self).hasClass("click-selected")) {
                selectedValue = cost;
                selected = 1;
            }
        }
        $('#' + mainId).find('.single-click').removeClass("click-selected");
        // console.log($('#'+mlainId).find('.b'),"$('#'+mainId).find('.b')");
        $(this).addClass("click-selected");
        for (j = 0; j < count; j++) {
            id = $('#' + mainId).find('.single-click').eq(j).attr('id');
            self = $('#' + mainId).find('.single-click').eq(j);
            cost = dict[id]['value'];
            whiteImage = dict[id]['imageWhite'];
            image = dict[id]['image'];
            if ($(self).hasClass("click-selected")) {
                total = total + parseInt(cost);
                $(self).children(".imagecontainer").children('.imgclass').attr("src", whiteImage);
            } else {

                $(self).children(".imagecontainer").children('.imgclass').attr("src", image);;
            }
        }
        if (selected === 1) {
            total = total - selectedValue;
        }
        selected = 0;
        console.log(total, selectedValue, "total,temp");
        $(".estimated-price").html("$" + total);
    });

});