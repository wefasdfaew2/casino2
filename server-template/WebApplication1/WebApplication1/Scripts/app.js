//
// casino app verison 1.0
// created by tienquang 7/9/2015
//
//


(function () {

    $(document).ready(function () {


        console.log("i'm ready");

        //
        // add active in origin menu when hover in sub menu
        //
        $('.menu-origin ul').hover(function () {
            //
            // mouse over
            //
            $(this).parent().addClass('in');

        }, function () {
            //
            // mouse leave
            //
            $(this).parent().removeClass('in');            
        });

        //
        // toggle menu in mobile view
        //
        $('.menu-origin-toggle').click(function (e) {

            e.preventDefault();
            e.stopPropagation();

            var self = $(this);

            self.toggleClass('down');

            self.next('.menu-origin').slideToggle('slow', function () {
                // console.log('toggled');
                //
                // remove style for desktop view
                $(this).toggleClass('menu-expanded').css('display','');
            });

        });
    });

})();