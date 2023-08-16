//Aside UI
function asideSlideBtn() {
    let title = $('._title');
    let slide = $('._slide');
    title.on('click', function () {
        $(this).next(slide).stop().slideToggle(300);
        $(this).toggleClass('active').parent().siblings().find(title).removeClass('active');
        $(this).parent().siblings().find(slide).slideUp(300);
    })
}

//Aside open UI
function openAsideBtn(){
    let openAsideBtn = $('._btn_open_depths')
    openAsideBtn.on('click',function(){
        $(this).parent('.aside').toggleClass('on')
        $('.footer').toggleClass('on')
    })
}



//selectBox
function selectBox() {
    let selectBox = $('._select_box')
    selectBox.on('click', function () {
        $(this).toggleClass('active');
    })
    selectBox.each(function(){
        let selectBox = $(this);
        selectBox.find('.option').on('click', function () {
            let text = $(this).text();
            let value = $(this).val();
            $(this).parent().parent().find('.select_value').text(text).css({'color': '#1F1F1F'}).attr('value', value);
        });
    })

    $(document).on('click', function (event) {
        let target = $(event.target);
        selectBox.each(function() {
            if (!target.is(this) && !target.closest(this).length) {
                $(this).removeClass('active');
            }
        });
    });


}




//달력
function calender(){
    const parentElement = $('#datepickerParent');
    let dateRangePicker = $('input[name=dateRangePicker]');
    dateRangePicker.daterangepicker({
        linkedCalendars: true,
        autoApply : true,
        "locale": {
            "format": "YYYY-MM-DD",
            "separator": " ~ ",
            "applyLabel": "확인",
            "cancelLabel": "취소",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "주",
            "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        },
        "startDate": new Date(),
        "endDate": new Date(),
        "buttonClasses": "data_range_btn",
        "applyButtonClasses": "apply_range_btn",
        "cancelButtonClasses": "cancel_range_btn",
        "showCustomRangeLabelranges": false,
        "parentEl": parentElement,
    }, function (start, end, label) {
        console.log('선택된 날짜: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
    dateRangePicker.on('hide.daterangepicker', function (ev, picker) {
        let modals = $('.modal')
        modals.removeClass('fade')
        setTimeout(function () {
            modals.removeClass('show')
        }, 200)
    });

    dateRangePicker.on('showCalendar.daterangepicker', function (ev, picker) {
        const trList = $('.daterangepicker').find("tr");
        trList.each(function() {
            var offEndsAvailableCount = $(this).find(".off.ends.available").length;
            if (offEndsAvailableCount === 7) {
                $(this).hide();
            }
        });
    });

}




$(document).ready(function(){
    calender();
    asideSlideBtn();
    openAsideBtn();
    selectBox();
})