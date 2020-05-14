// Importing nav and footer
$.get("nav.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
});

$.get("footer.html", function (data) {
    $("#footer-placeholder").replaceWith(data);
});

// Project tags hover animation
let projectTagsWidgets = document.querySelectorAll(".project-tags-widget");
projectTagsWidgets.forEach(function (widget) {
    widget.addEventListener("mouseover", function () {
        widget.classList.add("open");
    });
    widget.addEventListener("mouseleave", function () {
        widget.classList.remove("open");
    });
});

// Changing active nav tab
window.onload = function () {
    $("#nav-projects").removeClass("active");
    $("#nav-about").removeClass("active");
    $("nav-oddsends").removeClass("active");

    let path = window.location.pathname;

    if (path === "/about.html") {
        $("#nav-about").addClass("active");
    } else if (path === "/oddsends.html") {
        $("#nav-oddsends").addClass("active");
    } else {
        $("#nav-projects").addClass("active");
    }
}