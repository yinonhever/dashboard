/* Switching theme when toggler is clicked */

$("#toggler").change(function () {
    $("body").toggleClass("light");
})


/* Switching theme when arrow keys are pressed */

$("body").keydown(function (event) {
    if (event.keyCode === 37 && $("#toggler").prop("checked") === true) {
        $("#toggler").prop("checked", false);
        $("body").removeClass("light");
    }
    
    if (event.keyCode === 39 && $("#toggler").prop("checked") === false) {
        $("#toggler").prop("checked", true);
        $("body").addClass("light");
    }
})