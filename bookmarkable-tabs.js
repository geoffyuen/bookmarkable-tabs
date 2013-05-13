$(function(){ // run when jquery is loaded

    // tab initialization: 
    // show tab content or article onload
    var tabwrapper = "#newsletter-contents", // select the element which holds your tab content
      hashpipe = window.location.hash; //save hash url which is an id on the page
    

    $(tabwrapper).children().hide(); // hide all content
    if (!hashpipe.length) { // if no hash...
        $(tabwrapper).find('> :first').show(); // show first tab content
    } else if ($(hashpipe).parent().is(tabwrapper)) { // show the id if it's tab content
        $(hashpipe).show();
        $(".active").removeClass("active"); // remove active class from all tabs and...
        $("a[href=" + hashpipe + "]").parent().addClass("active"); //active class puts the tab in front
        $("html,body").animate({ scrollTop: 0 }, 1); // scroll to the top
    } else if ($(tabwrapper + ' ' + hashpipe).length > 0) { // if hash is in tabwrapper show tabcontent
        $(hashpipe).parent().show(); // this is pretty iffy - rewite
         window.location.hash = hashpipe; //scroll to the link - not sure why we have to do this...
    } else { // if no hash...
        $(tabwrapper).find('> :first').show(); // show first tab content
    }

    // tab functionality
    // show tab content when tab is clicked
    $('#nav-main a').click(function(event){ //capture tab click event
        // save window position asap or webkit no likey
        var scr = $(window).scrollTop(); //save window position or else click will make window scroll
        event.preventDefault(); //don't jump to anchor - doesn't work with webkit in come cases

        var $anchor = $(this); //save the link that was clicked
        $(".active").removeClass("active");
        $anchor.parent().addClass("active"); //make tab visually active/"in front"

        $(tabwrapper).children().hide(); // hide all content
        $($anchor.attr("href")).fadeIn(500); //show element in the href anchor

        window.location.hash = $anchor.attr("href"); // change url so it's bookmarkable
        $(window).scrollTop(scr); //restore saved window position
        return false;

        // e.stopPropagation(); //don't look at nested elements
    });


        // function: if link is in hidden tab, who the tab and scroll to link
        $("#newsletter-contents a[href*=#]").click(function(event){


		    var tabwrapper = "#newsletter-contents"; // select the element which holds your tab content
		    var hashpipe = $(this).attr("href"); //save hash url which is an id on the page
            console.log('1:'+hashpipe);
            console.log(tabwrapper + ' ' + hashpipe + ':' + $(tabwrapper + ' ' + hashpipe).length);

		    if ($(tabwrapper + ' ' + hashpipe).length > 0) { // if hash is in tabwrapper show tabcontent


		        $(tabwrapper).children().hide(); // hide all content
		        
		        $(".active").removeClass("active");
		        var url = $(hashpipe).parent().attr("id");// get id of section
		        $('#nav-main a[href="#'+url+'"]').parent().addClass("active"); //add active class to tab

		        $(hashpipe).parent().show(); // this is pretty iffy - rewite
		        
		        event.preventDefault(); //prevent default browser behaviour of jumping to link
		        $('html,body').animate({scrollTop:(($(this.hash).offset().top)-0)}, 300); //scroll to the link
		        
                window.location.hash = hashpipe;
                console.log('2:'+hashpipe);

		    }

            $('html,body').animate({scrollTop:(($(this.hash).offset().top)-0)}, 300); //scroll to the link

	    });
});
