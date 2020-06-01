// userChrome.js

function load_js_script(js_file_name) {
   Services.scriptloader.loadSubScript(Components.stack.filename.substring(0,
	Components.stack.filename.lastIndexOf("/") + 1) + js_file_name, window);
}

load_js_script("./userChrome/addonbar.uc.js");
load_js_script("./userChrome/move_bars.uc.js");
load_js_script("./userChrome/space_and_separator_restorer.uc.js");
load_js_script("./userChrome/additional_top_toolbars.uc.js");