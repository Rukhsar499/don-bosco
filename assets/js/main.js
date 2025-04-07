
// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }


 $(window).on('load', function() {
    setTimeout(()=>{
        $('#exampleModal').modal('show');
    },10000)
    
});


    
  
    




