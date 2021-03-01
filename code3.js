gdjs.Winner_33Code = {};
gdjs.Winner_33Code.GDWinTextObjects1= [];
gdjs.Winner_33Code.GDWinTextObjects2= [];
gdjs.Winner_33Code.GDBackgroundObjects1= [];
gdjs.Winner_33Code.GDBackgroundObjects2= [];
gdjs.Winner_33Code.GDFinalScoreObjects1= [];
gdjs.Winner_33Code.GDFinalScoreObjects2= [];

gdjs.Winner_33Code.conditionTrue_0 = {val:false};
gdjs.Winner_33Code.condition0IsTrue_0 = {val:false};
gdjs.Winner_33Code.condition1IsTrue_0 = {val:false};


gdjs.Winner_33Code.eventsList0 = function(runtimeScene) {

{


gdjs.Winner_33Code.condition0IsTrue_0.val = false;
{
gdjs.Winner_33Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Winner_33Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.Winner_33Code.GDFinalScoreObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\you_win.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Winner_33Code.GDFinalScoreObjects1.length ;i < len;++i) {
    gdjs.Winner_33Code.GDFinalScoreObjects1[i].setString("Final Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"))));
}
}}

}


{


gdjs.Winner_33Code.condition0IsTrue_0.val = false;
{
gdjs.Winner_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Winner_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


};

gdjs.Winner_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Winner_33Code.GDWinTextObjects1.length = 0;
gdjs.Winner_33Code.GDWinTextObjects2.length = 0;
gdjs.Winner_33Code.GDBackgroundObjects1.length = 0;
gdjs.Winner_33Code.GDBackgroundObjects2.length = 0;
gdjs.Winner_33Code.GDFinalScoreObjects1.length = 0;
gdjs.Winner_33Code.GDFinalScoreObjects2.length = 0;

gdjs.Winner_33Code.eventsList0(runtimeScene);
return;

}

gdjs['Winner_33Code'] = gdjs.Winner_33Code;
