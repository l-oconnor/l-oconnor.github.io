gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverTextObjects1= [];
gdjs.Game_32OverCode.GDGameOverTextObjects2= [];
gdjs.Game_32OverCode.GDOuchObjects1= [];
gdjs.Game_32OverCode.GDOuchObjects2= [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\you_lose.ogg", false, 100, 1);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverTextObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverTextObjects2.length = 0;
gdjs.Game_32OverCode.GDOuchObjects1.length = 0;
gdjs.Game_32OverCode.GDOuchObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
