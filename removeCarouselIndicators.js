$('#productCarousel').carousel({
    interval: false,
})

$(document).ready(function () {             
    checkitem();
});

$('#productCarousel').on('slid.bs.carousel', checkitem);
$('#productCarousel').on('slid.bs.carousel', changeDescription);

function checkitem() {
    var $this = $('#productCarousel');
    if ($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').hide();
        $this.children('.right.carousel-control').hide();
        $('.carousel-indicators').show();
    } else {
        $('.carousel-indicators').hide();
        $this.children('.carousel-control').show();
        $("#backToFirst").css('visibility', 'visible');

        if ($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.right.carousel-control').prop('disabled', true);
        
        }
    }
}

function changeDescription() {
 var activeImgId = $('#productCarousel .carousel-inner .active').attr('id');
 $(".productDescription .active").removeClass('active');
 $("."+activeImgId).addClass('active');
}

$("#backToFirst").click(function(){
    $('#productCarousel .carousel-inner .active').removeClass('active');
    $('#productCarousel .carousel-inner .item:first').addClass('active');
    changeDescription();
});