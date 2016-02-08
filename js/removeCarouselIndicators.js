$(document).ready(function () {  

    var colorOptionList = document. querySelectorAll(".chooseColor label"); 
    var showcaseProductsCarousel =  $('#productCarousel');   

    setBackgroundColorForColorOptions();

    customizeCarouselNavigation();

    showcaseProductsCarousel.on('slid.bs.carousel', customizeCarouselNavigation);
    showcaseProductsCarousel.on('slid.bs.carousel', changeDescription);

    showcaseProductsCarousel.carousel({
        interval: false,
    })

    function customizeCarouselNavigation() {
        carouselBackToFirstSlideButton();
        carouselDisableRightArrowsOnLastSlide();
        carouselRemoveArrowsOnFirstSlide();
        carouselIndicatorsOnlyOnFirstSlide();
    }

    function changeDescription() {
        var activeImgId = $('#productCarousel .carousel-inner .active').attr('id');
        $(".productName.active").removeClass('active');
        $("." + activeImgId).addClass('active');
    }

    function setBackgroundColorForColorOptions() {
        for (var l = 0; l < colorOptionList.length; l++) {
            var color = (colorOptionList[l].htmlFor).split("-")[1];
            colorOptionList[l].style.background = "#" + color;
        }
    }

    function carouselIndicatorsOnlyOnFirstSlide() {
        var $this = $('#productCarousel');
        if ($('.carousel-inner .item:first').hasClass('active')) {
            $('.carousel-indicators').show();
        } else {
            $('.carousel-indicators').hide();
        }
    }

    function carouselRemoveArrowsOnFirstSlide() {
        var $this = $('#productCarousel');
        if ($('.carousel-inner .item:first').hasClass('active')) {
            $this.children('.carousel-control').hide();
        } else {
            $this.children('.carousel-control').show();
        }
    }

    function carouselDisableRightArrowsOnLastSlide() {
        var $this = $('#productCarousel');
        if ($('.carousel-inner .item:last').hasClass('active')) {
            $this.children('.carouselArrowContainer.right').prop('disabled', true);
            $this.children('.carouselArrowContainer.right').addClass('disabled');
        } else {
            $this.children('.carouselArrowContainer.right').prop('disabled', false);
            $this.children('.carouselArrowContainer.right').removeClass('disabled');
        }
    }


    function carouselBackToFirstSlideButton() {
        var $this = $('#productCarousel');
        if ($('.carousel-inner .item:first').hasClass('active')) {
             $("#backToFirst").css('visibility', 'hidden');
        } else {
            $("#backToFirst").css('visibility', 'visible');
        }
    }

    $("#backToFirst").click(function(){
        $('#productCarousel .carousel-inner .active').removeClass('active');
        $('#productCarousel .carousel-inner .item:first').addClass('active');
        $('.carousel-indicators .active').removeClass('active');
        $('.carousel-indicators li:first').addClass('active');
        changeDescription();
        customizeCarouselNavigation();
    });

});

window.onload = function() {
    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true
    })
           
}





