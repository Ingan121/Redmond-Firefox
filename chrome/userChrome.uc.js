// userChrome.js

function load_js_script(js_file_name) {
   Services.scriptloader.loadSubScript(Components.stack.filename.substring(0,
	Components.stack.filename.lastIndexOf("/") + 1) + js_file_name, window);
}

load_js_script("./userChrome/addonbar.uc.js");
load_js_script("./userChrome/move_bars.uc.js");
load_js_script("./userChrome/editbookmarkspopup_expanded.uc.js");
load_js_script("./userChrome/alternative_searchbar.uc.js");
load_js_script("./userChrome/restart_item_in_menu.uc.js");
load_js_script("./userChrome/search_engine_icon_in_searchbar.uc.js");
load_js_script("./userChrome/space_and_separator_restorer.uc.js");
load_js_script("./userChrome/additional_top_toolbars.uc.js");