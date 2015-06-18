'use strict';
/**================================================
 JS : INITIALIZATION
 ===================================================*/
(function($){

    $().ready(function(){

        $('body').click(function(){
            $('.dropdown.is-open').removeClass('is-open');
        });

        // Set navigation behaviour
        $('.navigation').delegate('.navigation__item', 'click', function(event){
            var target = $(event.target),
                navigationItem = target.closest('.navigation__item'),
                navigationItems = navigationItem.siblings('.navigation__item');

            navigationItems.removeClass('is-active');
            navigationItem.addClass('is-active');
        });

        // Set dropdown behaviour
        $('.dropdown').delegate('.dropdown__caption', 'click', function(event){
            var target = $(event.target),
                dropdown = target.closest('.dropdown'),
                isOpened = dropdown.hasClass('is-open');

            if (!isOpened){
                dropdown.addClass('is-open');
            } else {
                dropdown.removeClass('is-open');
            }
            event.stopPropagation();
        });
    });

})(jQuery);