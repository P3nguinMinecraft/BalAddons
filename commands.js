import settings from "./utils/config"
register('command', () => {
    ChatLib.chat('&b[&cBal&6Addons&b]&r Opening BalAddons Config Gui...')
    settings.openGUI();
}).setName('baladdons').setAliases('ba','bal','balconfig')