document.getElementById("demo1").innerHTML="This is dynamic text message."
document.getElementById("demo2").innerHTML="Hello from JavaScript!"
document.getElementById("myButton").onclick=displayDate;

function displayDate() {
	document.getElementById("myDate").innerHTML=Date();
}