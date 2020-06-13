# IE5Fox
Modified version of Redmond-Firefox designed for IE5-like look with the use of user JS and some modifications. (WIP)

Designed for use with real classic theme on Windows. If you're using Windows newer than 8, visit [WinClassic](https://winclassic.boards.net) to apply classic theme on your desktop.

![Image Screenshot](https://github.com/Ingan121/Redmond-Firefox/blob/master/Screenshots/Screenshot.png)

[Credits (unfinished)](https://github.com/Ingan121/Redmond-Firefox/blob/master/Credits.md)

## Installation
1. Put the contents of Firefox-userchrome into the current Firefox profile directory, available in Firefox→Help→Troubleshoooting Information→Profile Folder→Open Folder
2. Put the contents of Firefox-ExecutableDir into the Firefox directory (usually in C:\Program Files\Mozilla Firefox)
3. Delete the startupCache folder in %localappdata%\Mozilla\Firefox\Profiles\\(your profile folder).
* If you use bookmarks bar, move the bookmarks toolbar items to the toolbar below address bar then disable the original bookmarks bar.

Note:
[ If you have not enabled custom user style sheets (userchrome): ]
1. Navigate to "about:config" in Firefox
2. Enter the following text in the search box: toolkit.legacyUserProfileCustomizations.stylesheets
3. Set the option toolkit.legacyUserProfileCustomizations.stylesheets to True
4. Close all instances of Firefox and the changes will take effect when you restart Firefox

The Firefox theme should now be installed and will be activated once you close all Firefox sessions and restart Firefox.

## Limitations
* Inherit color support is not currently finished.
* Also the theme was designed with a certain color scheme in mind so it may not display correctly
with certain color schemes.
* For now it is recommended to use the "Windows Standard" (2000) color scheme.
