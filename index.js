let username;

document.getElementById("myButton").onclick = function(){
  username = document.getElementById("myText").value;
  console.log(username);
}

let surpriseClick;

document.getElementById("surpriseClick").onclick = function(){
  document.getElementById("surpriseClick").html = window.prompt("Give ur credit card details for free robux...")
}