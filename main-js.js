(function() {
  let $menu = document.getElementsByClassName("menu");

window.addEventListener("scroll", function(e) {

if(window.scrollY > 194){
  if(!$menu[0].classList.contains("on-top")) {
  $menu[0].className += " on-top";
  };
} else {
   if($menu[0].classList.contains("on-top")) {
      $menu[0].classList.remove("on-top")
   }
}
});
}) ();
