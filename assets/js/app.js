



// testimonial slider jquery

$('#tmSlider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay : true,
    navText : ['<i class="fa-solid fa-circle-arrow-left fa-3x"></i>','<i class="fa-solid fa-circle-arrow-right fa-3x"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})