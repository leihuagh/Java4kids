$.ajaxSetup ({
    cache: false
});

$(function() { 
    $.getJSON(dataPath + pathToData, function(json) { 
        init_menu(json);
        $("span[id^='menu_']").click(onMenuClick)
        //$("#menu_1_1").click(onMenuClick);
        
    });
});

function init_menu(json) { 
    for (i in json.menu) { 
        var menuitem = new Array();
        menuitem["menu_id"] = json.menu[i].menu_id;   
        menuitem["submenu_id"] = json.menu[i].submenu_id;   
        menuitem["title"] = json.menu[i].title; 
        menuitem["datapath"] = json.menu[i].datapath; 
        menuitem["url"] = json.menu[i].url;
        if (menu[json.menu[i].menu_id]===null) {
            menu[json.menu[i].menu_id] = new A
        }
        menu[json.menu[i].menu_id][json.menu[i].submenu_id] = menuitem;
    }
}

function onMenuClick(evt) {
    var menu_id = $(this).prop("id").split("_")[1];
    var submenu_id = $(this).prop("id").split("_")[2];
    
    //$("#main_contents").load(dataPath+"views/ch01/install.html");
}

