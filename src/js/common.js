//Aside 아코디언
function asideSlideBtn() {
    let title = $('._title');
    let slide = $('._slide');
    title.on('click', function () {
        $(this).next(slide).stop().slideToggle(300);
        $(this).toggleClass('active').parent().siblings().find(title).removeClass('active');
        $(this).parent().siblings().find(slide).slideUp(300);
    })
}


$(document).ready(function(){
    asideSlideBtn();
})