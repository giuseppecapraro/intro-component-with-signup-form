$(":text").on("input", function () {
    let val = $(this).val();
    if (val.trim() === "") {
        if (!$(this).hasClass("error")) {
            $(this).addClass("error");
            $(this).siblings(".error-message").show();
            $(this).siblings(".error-svg").show();
        }
    } else {
        $(this).removeClass("error");
        $(this).siblings(".error-message").hide();
        $(this).siblings(".error-svg").hide();
    }
})

$(".email").on("input", function () {
    let val = $(this).val();
    if (val.trim() === "" || !validateEmail(val)) {
        $(this).addClass("error");
        $(this).siblings(".error-message").text("Email cannot be empty");
        $(this).siblings(".error-message").show();
        $(this).siblings(".error-svg").show();
        if (val.length >= 1) {
            $(this).siblings(".error-message").text("Looks like this is not an email");
        }
    } else {
        $(this).removeClass("error");
        $(this).siblings(".error-message").hide();
        $(this).siblings(".error-svg").hide();
    }
})



$(":password").on("input", function () {
    let val = $(this).val();
    if (val.trim() === "" || val.length < 8) {
        $(this).addClass("error");
        $(this).siblings(".error-message").text("Password cannot be empty");
        $(this).siblings(".error-message").show();
        $(this).siblings(".error-svg").show();
        if (val.length >= 1) {
            $(this).siblings(".error-message").text("Password must be at least 8 characters");
        }
    } else {
        $(this).removeClass("error");
        $(this).siblings(".error-message").hide();
        $(this).siblings(".error-svg").hide();
    }
})


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }