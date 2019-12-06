(function($){
	"use strict";
	var THE = {};
	var plugin_track = 'static/plugin/';
	$.fn.exists = function () {
        return this.length > 0;
    };

	/* ---------------------------------------------- /*
	 * Pre load
	/* ---------------------------------------------- */
	THE.PreLoad = function() {
		document.getElementById("loading").style.display = "none"; 
	}

    /*--------------------
        * Menu Close
    ----------------------*/
    THE.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


	THE.MegaMenu = function() {
		var mDropdown = $(".px-nav-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}


	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	THE.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	/*--------------------
        * One Page
    ----------------------*/
    THE.OnePage = function(){
        $('header a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 70,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

	/* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
    // loadScript
	var _arr  = {};
	function loadScript(scriptName, callback) {
	    if (!_arr[scriptName]) {
	      _arr[scriptName] = true;
	      var body    = document.getElementsByTagName('body')[0];
	      var script    = document.createElement('script');
	      script.type   = 'text/javascript';
	      script.src    = scriptName;
	      // then bind the event to the callback function
	      // there are several events for cross browser compatibility
	      // script.onreadystatechange = callback;
	      script.onload = callback;
	      // fire the loading
	      body.appendChild(script);
	    } else if (callback) {
	      callback();
	    }
	};

	THE.HeaderHeight = function(){
		var HHeight = $('.header-height .fixed-header-bar').height()
	    $('.header-height').css("min-height", HHeight);	
	}

	// Window on Load
	$(window).on("load", function(){
		THE.PreLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		THE.HeaderFixd(),
		THE.OnePage(),
		THE.MenuClose(),
		THE.HeaderHeight(),
		THE.MegaMenu()
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		THE.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
		THE.HeaderHeight();
	});


})(jQuery);