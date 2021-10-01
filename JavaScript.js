function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function f(){
  var randomNumber1 = Math.floor((Math.random() * 3) + 1);
  document.getElementById("demo").innerHTML = randomNumber1;
}