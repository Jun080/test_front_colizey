window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
});


const element = document.getElementById("btn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("balloon").style.width = "300px";
  document.getElementById("balloon").style.height = "300px";
  document.getElementById("balloon").style.transition = "all 2s";
}
