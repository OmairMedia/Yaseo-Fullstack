$(function(){

    // $('.volume-btn .icon-volume-on').css('display','none');
    // $('.volume-btn .icon-volume-off').css('display','block'); 

    $('.volume-btn').on('click', function() {
        let isMuted = false;
        const video = $('.homepage-video').prop('muted')

        if(video) {
            isMuted = true;
            // $('.volume-btn .volume-icon').removeClass('fa-volume');
            // $('.volume-btn .volume-icon').addClass('fa-volume-slash');
        } else {
            isMuted = false;
            // $('.volume-btn .volume-icon').removeClass('fa-volume-slash');
            // $('.volume-btn .volume-icon').addClass('fa-volume');
        }
        

        if(isMuted) {
            $('.homepage-video').prop('muted', false);
        } else {
            $('.homepage-video').prop('muted', true);
        }
    })


    function volumeOn() {
        $('.homepage-video').prop('muted',true)
        $('.volume-icon').removeClass('fa-volume');
        $('.volume-icon').addClass('fa-volume-slash');
    }
    function volumeOff() {
        $('.homepage-video').prop('muted',false)
        $('.volume-icon').removeClass('fa-volume-slash');
        $('.volume-icon').addClass('fa-volume');
    }


    const date = new Date();
    const currentYear = date.getFullYear();
    $('#current-year').html(currentYear)

    
});


