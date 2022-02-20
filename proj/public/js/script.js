function tabableElements(modal) {
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    var firstTabStop = focusableElements[0];
    var lastTabStop = focusableElements[focusableElements.length-1];
    focusableElements[0].focus();
    modal.addEventListener('keydown', function (e) {
        if (e.keyCode === 9) {
            if (e.shiftKey) {
                if (document.activeElement === firstTabStop) {
                    e.preventDefault();
                    lastTabStop.focus();
                }
            } else {
                if (document.activeElement === lastTabStop) {
                    e.preventDefault();
                    firstTabStop.focus();
                }
            }
        }
    })
};

var div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

function blockBodyScroll(){
    $('body').css('padding-right',scrollWidth );
    $('body').css('overflow','hidden');
}
function unBlockodyScroll(){
    $('body').removeAttr('style')
}
$('.header__menu_dextop').on('click',function(){
    $(this).toggleClass('header__menu_active');
    $('.header__menu').toggle(300);
});
var loginCondition = true;
function openLogIn(){
    $('.popUp-logIn__wrapper').css('display','flex');
    blockBodyScroll();
    $('.header__menu_dextop').removeClass('header__menu_active');
    $('.header__menu').hide(300);
    tabableElements(document.getElementById('login-popup'))
    loginCondition = false;
    $('header').css('display','none')
    $(document).mouseup((e) => {
            var container = $(".popUp-logIn__contaner");
            if (container.has(e.target).length === 0) {
                closeLogIn();
            }
        });
    

}
function closeLogIn(){
    $('.popUp-logIn__wrapper').removeAttr('style');
    unBlockodyScroll();
    $('header').removeAttr('style')
    loginCondition = true
}
$('.menu__lk').on('click',function(){
    openLogIn();
});
$('.popUp-logIn__exit').on('click',function(){
    closeLogIn();
});
$(document).keydown(function(eventObject){
	if( eventObject.which == 27 ){
		closeLogIn();
        $('.header__menu_dextop').removeClass('header__menu_active');
        $('.header__menu').hide(300);
	};
});






$('.navigation-info__link').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 300,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });
    return false;
});
