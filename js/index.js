function navLeft() {
    $(".nav__right").removeClass("active");
    $(".nav__left").addClass("active");
    $(".explain").css("display", "none");
    $(".main").css("display", "block");
}

function navRight() {
    $(".nav__right").addClass("active");
    $(".nav__left").removeClass("active");
    $(".explain").css("display", "block");
    $(".main").css("display", "none");
}

function onNext() {
    $(".modal").css("display", "block");
}

function onConfirm() {
    $(".modal").css("display", "none");
}
