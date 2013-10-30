#pragma strict

function Start () {

}

function Update () {

}


var dispNumber:int=0;

function OnGUI(){
	var inputValue:int = 0;
	var answer:int = 0;
	
	inputValue = ViewButtonAndGetInputValue();
	answer = Calculate(inputValue);
	ViewNumber(answer);
}
/*
function OnGUI(){
	var inputValue:int = 0;
	
	inputValue = ViewButtonAndGetInputValue();
	ViewNumber(aCalculate(inputValue));
}
///demoiishi,
function OnGUI(){
	ViewNumber(Calculate(ViewButtonAndGetInputValue()));
}
///demoii.    demo,wakaridurakunai?
*/

function ViewButtonAndGetInputValue(){
	var inputValue:int=0;
	
	if (GUI.Button (Rect (30,40,40,40), "0")) {
		inputValue=5;
	}
	if (GUI.Button (Rect (90,40,40,40), "1")) {
		inputValue=1;
	}
	if (GUI.Button (Rect (150,40,40,40), "2")) {
		inputValue=2;
	}
	if (GUI.Button (Rect (30,90,40,40), "x2")) {
		inputValue=3;
	}
	if (GUI.Button (Rect (90,90,40,40), "clear")) {
		inputValue=4;
	}
	
	return inputValue;	
}

function Calculate(number:int){
	
	if(dispNumber==0){
		dispNumber = dispNumber + number;
	}else if(1<=number && number<=2){
		dispNumber = dispNumber*10 + number;
	}else if(number==5){
		dispNumber = dispNumber*10;
	}else if(number==3){
		dispNumber = dispNumber*2;
	}else if(number==4){
		dispNumber = 0;
	}
	return dispNumber;
}

function ViewNumber(number:int){
	GUI.Label (Rect (110,140,1000,100),dispNumber.ToString());
}

