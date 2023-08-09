function asideSlideBtn(){
    let title = $('._title');
    let slide = $('._slide');

    title.on('click',function(){
        $(this).next(slide).stop().slideToggle(300);
        $(this).toggleClass('active').parent().siblings().removeClass('active');
        console.log($(this).parent().siblings().find(title).removeClass('active'));
        $(this).parent().siblings().find(slide).slideUp(300);
    })




    $(this).next(".anw").siblings(".anw").slideUp(300);
}

$(document).ready(function(){
    asideSlideBtn();
})