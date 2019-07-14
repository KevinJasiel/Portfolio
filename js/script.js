var nav = document.getElementById('nav');

window.onscroll = function(){

  if (window.pageYOffset >100) {

      nav.style.background = "black";
      nav.style.opacity = ".5"
      nav.style.background = "0px 4px 2px gray";
  }
  else {
    nav.style.background = "transparent";
  }
}

/* Animacion de la pagina intro */

 $(function(){
   var welcomeSection = $(".welcome-section"),
    enterButton = welcomeSection.find(".enter-button");

    setTimeout(function(){
      welcomeSection.removeClass("content-hidden");
    },800);

    enterButton.on("click", function(e){
      e.preventDefault();
      welcomeSection.addClass("content-hidden").fadeOut();
    });
 });
