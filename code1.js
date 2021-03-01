gdjs.IntroCode = {};
gdjs.IntroCode.GDSplashScreenObjects1= [];
gdjs.IntroCode.GDSplashScreenObjects2= [];
gdjs.IntroCode.GDIntroTextObjects1= [];
gdjs.IntroCode.GDIntroTextObjects2= [];
gdjs.IntroCode.GDAlignedControlsObjects1= [];
gdjs.IntroCode.GDAlignedControlsObjects2= [];
gdjs.IntroCode.GDLegendObjects1= [];
gdjs.IntroCode.GDLegendObjects2= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gaming", true);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDSplashScreenObjects1.length = 0;
gdjs.IntroCode.GDSplashScreenObjects2.length = 0;
gdjs.IntroCode.GDIntroTextObjects1.length = 0;
gdjs.IntroCode.GDIntroTextObjects2.length = 0;
gdjs.IntroCode.GDAlignedControlsObjects1.length = 0;
gdjs.IntroCode.GDAlignedControlsObjects2.length = 0;
gdjs.IntroCode.GDLegendObjects1.length = 0;
gdjs.IntroCode.GDLegendObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
