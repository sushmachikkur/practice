var guestList= ["john","jack","jelly","jackson"];
var guestName= prompt("What is your name");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.");
}