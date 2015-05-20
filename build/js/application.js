/**================================================
JS : INITIALIZATION
===================================================*/
(function($){

    $().ready(function(){
        // Set navigation behaviour
        $('.navigation').delegate('.navigation__item', 'click', function(event){
            var target = $(event.target),
                navigationItem = target.parents('.navigation__item'),
                navigationItems = navigationItem.siblings('.navigation__item');

            navigationItems.removeClass('is-active');
            navigationItem.addClass('is-active');
        });

        // Set dropdown behaviour
        $('.dropdown').delegate('.dropdown__caption', 'click', function(event){
            var target = $(event.target),
                dropdown = target.parents('.dropdown'),
                isOpened = dropdown.hasClass('is-open');

            $('.dropdown.is-open').removeClass('is-open');
            if (!isOpened){
                dropdown.addClass('is-open');
            }
        });
    });

})($);