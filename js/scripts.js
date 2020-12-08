// Add Your Scripts here
$(document).ready(function(){

    // modal

    $('.navbar-toggle').click(function(){
        $('.modal').modal({
            backdrop:"static"
        })
        $('.navbar-toggle span').addClass('change');
    });

    // navbar hamburger
    $('.modal-head button').click(function(){
        $('.navbar-toggle span').removeClass('change');
    })
    //  navbar line
    $('ul li').hover(function(){
      $($(this).children().last()).addClass('line');
    },
    function(){
        $($(this).children().last()).removeClass('line');
    });
    
});