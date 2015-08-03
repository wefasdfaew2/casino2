(function () {

	$(document).ready(function () {

		console.log('Welcome to fun89');

		//
		// active tooltip
		//
		$('[data-toggle=tooltip]').tooltip();

		//
	    // mix live casino
	    //
		$('.game-preview').mixItUp();

	    //
        //mix game
	    //
		$('.games-all').mixItUp();

		//
		// button toggle menu
		//
		$('.btn-toggle-menu').click(function () {

			var self = $(this);
			var menu = self.next('#main-menuv2');

			self.toggleClass('clicked');

			menu.slideToggle('400', function () {
				$(this).toggleClass('menu-expanded').css('display', '');
			});

		});
			
		//
		// hover on sub menu to keep main menu open
		//
		$('#main-menu ul').hover(function () {			
			//
			// mouse over
			$(this).parent('li').addClass('hover');
		}, function () {
			//
			// mouse leave
			$(this).parent('li').removeClass('hover');
		});

		//
		// button toggle promo detail
		//
		$('.btn-promo-detail').click(function (e) {

			e.preventDefault();

			var self = $(this);

			self.closest('.row').find('.promo-detail').slideToggle();

		});

	    //
	    // scrollspy
	    //
		$('[data-scroll]').click(function (e) {

		    e.preventDefault();

		    var self = $(this);

		    var scroll = self.data('scroll');

		    if (scroll === undefined || scroll === null || scroll === '') {
		        return;
		    }

		    var target = $('#'+scroll);

		    $('html, body').animate({scrollTop: target.offset().top},500);

		});

	    //
	    // scroll n fix
	    //

        /*
		$(window).scroll(function () {
		    return;
		    var contents = $('.tab-pane');

		    var h = contents.offset().top;

		    console.log(contents,contents.length);
		    
		    if ($(window).scrollTop() > h) {

		        $(contents).each(function (i, content) {
		            $(content).addClass('fix-content');
		        });
		    } else {

		        $(contents).each(function (i, content) {
		            $(content).removeClass('fix-content');
		        });
		    }

		});
        */

		$("#myNav").affix({
		    offset: {
		        top: 260
		    }
		});
		$("#myNav").on('affixed.bs.affix', function () {
		   // alert("The left navigation menu has been affixed. Now it doesn't scroll with the page.");
		});


		$('.button-checkbox').each(function () {

		    // Settings
		    var $widget = $(this),
                $button = $widget.find('button'),
                $checkbox = $widget.find('input:checkbox'),
                color = $button.data('color'),
                settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
                };

		    // Event Handlers
		    $button.on('click', function () {
		        $checkbox.prop('checked', !$checkbox.is(':checked'));
		        $checkbox.triggerHandler('change');
		        updateDisplay();
		    });
		    $checkbox.on('change', function () {
		        updateDisplay();
		    });

		    // Actions
		    function updateDisplay() {
		        var isChecked = $checkbox.is(':checked');

		        // Set the button's state
		        $button.data('state', (isChecked) ? "on" : "off");

		        // Set the button's icon
		        $button.find('.state-icon')
                    .removeClass()
                    .addClass('state-icon ' + settings[$button.data('state')].icon);

		        // Update the button's color
		        if (isChecked) {
		            $button
                        .removeClass('btn-default')
                        .addClass('btn-' + color + ' active');
		        }
		        else {
		            $button
                        .removeClass('btn-' + color + ' active')
                        .addClass('btn-default');
		        }
		    }

		    // Initialization
		    function init() {

		        updateDisplay();

		        // Inject the icon if applicable
		        if ($button.find('.state-icon').length == 0) {
		            $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
		        }
		    }
		    init();
		});
	});
	   
          
	   

})();

