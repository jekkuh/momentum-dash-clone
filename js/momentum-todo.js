// Adds the completed effect
$("#to-do-list").on("click", "li", function () {
    $(this).toggleClass('completed');
});

// Removing todo
$("#to-do-list").on("click", "li span", function (e) {
    e.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    })
});

// Adding the todo
$("#new-task").keypress(function (e) {
    if (e.which === 13) {
        var task = $(this).val();
        $(this).val("");
        $("#to-do-list").append(" <li><span class='fa fa-close'></span> " + task + " </li>");

    }
});
