$(function() {
    $("#menu_1_0").click(onMenuClick);
});

function onMenuClick() {
    $("#main_contents").load("./views/ch01/install.html");
}