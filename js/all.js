'use strict';
$(document).ready(function () {

    /*------------------CUSTOMIZE CAROUSEL NAVIGATION------------------*/
    var showcaseProductsCarousel = $('#productCarousel'); 
    
    customizeCarouselNavigation(); 

    showcaseProductsCarousel.on('slid.bs.carousel', customizeCarouselNavigation);
    showcaseProductsCarousel.on('slid.bs.carousel', changeDescription);

    showcaseProductsCarousel.carousel({
        interval: false
    });

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


    /*------------------GET WINDOW HEIGHT AND WIDTH------------------*/
    var showWindowSizeBox = $("#showWindowSize"); 

    getWindowSize();

    $( window ).resize(debounce(function (event) {
        getWindowSize();
    }, 250));

    function getWindowSize() {
        var height = $( window ).height();
        var width = $( window ).width();
        showWindowSizeBox.html(width + " x " + height);
    }

    function debounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    }
    /*------------------SET COLOR CHOICE BACKGROUND TO GIVEN COLOR------------------*/

    var colorOptionList = document.querySelectorAll(".chooseColor label");


    $.each(colorOptionList, setBackgroundColorForColorOptions);

     function setBackgroundColorForColorOptions(index) {
            var color = (colorOptionList[index].htmlFor).split("-")[1];
            colorOptionList[index].style.background = "#" + color;
    }


});


/*the images in the recommended section need to be loaded for masonry to work properly*/
window.onload = function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    })

}