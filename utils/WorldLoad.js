import values from "./values";
import { getArea } from "./skyblock";
register("WorldLoad", () => {
    setTimeout(() => {
        values.area = getArea();
        if (Area.includes("Crystal Hollows")){
            values.inCH = true
            ChatLib.chat("&b[&4Bal&6Addons&b]&r You are in the &eCrystal Hollows&r. &4Bal&r features enabled.")
        }
        else values.inCH = false
        values.save();
    },3000)
    if(values.tempswap){
        setTimeout(() => {
            ChatLib.command(`warp ${values.tempswap}`);
            values.tempswap = null;
            values.save();
        },3000)
    }
}
)

register("WorldLoad", () => {
    values.balSpawning = false
    values.balAlive = false 
    values.balSpawnPosX = null;
    values.balSpawnPosY = null;
    values.balSpawnPosZ = null;
    values.balAlivePosX = null;
    values.balAlivePosY = null;
    values.balAlivePosZ = null;
    values.area = null;
    values.inCH = null;
    values.balSpawnOverlayToggle = false;
    values.bal75Overlaytoggle = false;
    values.bal50Overlaytoggle = false;
    values.bal33OverlayToggle = false;
    values.balDeathOverlayToggle = false;
    values.save();
})