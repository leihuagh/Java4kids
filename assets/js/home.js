$.ajaxSetup ({
    cache: false
});

$(function() { 
    $.getJSON(dataPath + pathToData, function(json) { 
        init_menu(json);
        //$("span[id^='menu_']").click(onMenuClick)
        //$("#menu_1_1").click(onMenuClick);
        
    });
});

function init_menu(json) { 
    for (i in json.menu) {
        menu["menu_id"] = json.menu[i].menu_id; 
        var max = parseInt(json.menu[i].children); 
        for (var j=0; j<=max; j++) {
            var submenu = new Array();
            submenu["submenu_id"] = json.menu[i].submenu[j].submenu_id; 
            submenu["title"] = json.menu[i].submenu[j].title;
            submenu["datapath"] = json.menu[i].submenu[j].datapath;
        }
    }
}

function onMenuClick(evt) {
    var menu_id = $(this).prop("id").split("_")[1];
    var submenu_id = $(this).prop("id").split("_")[2];
    
    //$("#main_contents").load(dataPath+"views/ch01/install.html");
}

