$.ajaxSetup ({
    cache: false
});

$(function() { 
    $.getJSON(dataPath + pathToData, function(json) { 
        init_menu(json);
        $("span[id^='menu_']").click(onMenuClick);        
    });
});

function init_menu(json) {     
    for (i in json.menu) {
        var menuitem = new Array();
        menuitem["menu_id"] = json.menu[i].menu_id; 
        menuitem["datapath"] = json.menu[i].datapath; 
        menuitem["children"] = json.menu[i].children; 
        menuitem["submenu"] = new Array();
        var max = parseInt(json.menu[i].children); 
        for (var j=0; j<=max; j++) {  
            var submenu = new Array();
            submenu["submenu_id"] = json.menu[i].submenu[j].submenu_id; 
            submenu["title"] = json.menu[i].submenu[j].title;
            submenu["file"] = json.menu[i].submenu[j].file;
            menuitem["submenu"][j] = submenu;
        }
        
        menu[i] = menuitem;
    }    
    $("#main_contents").load(dataPath+menu[0]["datapath"]+menu[0]["submenu"][0]["file"]);
}

function onMenuClick(evt) {
    var menu_id = parseInt($(this).prop("id").split("_")[1]);
    var submenu_id = parseInt($(this).prop("id").split("_")[2]); 
    if(menu[menu_id]["submenu"][submenu_id]["file"] !== "") { 
        $("#main_contents").load(dataPath+menu[menu_id]["datapath"]+menu[menu_id]["submenu"][submenu_id]["file"]);
    }
    
}

