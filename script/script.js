var clignotement = function(){
   if (document.getElementById('blink').style.visibility=='visible'){
      document.getElementById('blink').style.visibility='hidden';
   }
   else{
   document.getElementById('blink').style.visibility='visible';
   }
};
periode = setInterval(clignotement, 400);

function displayMe(){
  subTitle.innerHTML = "Axel DE LA FUENTE";
  document.getElementById("me").style.textDecoration = 'underline';
  document.getElementById("about").style.textDecoration = 'none';
  text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.";
}

function displayAbout(){
  subTitle.innerHTML = "Links & informations";
  document.getElementById("about").style.textDecoration = 'underline';
  document.getElementById("me").style.textDecoration = 'none';
  text.innerHTML = "<a href=\"https://github.com/axdelafuen\">My GitHub</a><span>My e-mail : axel.dlf@free.fr</span>";
}
