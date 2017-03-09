$(function() {
    $("#menu_1_1").click(onMenuClick);
});

function onMenuClick() {
    $("#main_contents").load("./views/ch01/install.html");
}