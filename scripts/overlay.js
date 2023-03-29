/* I created this function with the help
of this website: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
because I could not get it working on my own.
*/

openNav = () => {
  document.getElementById("overlay").classList.add("active");
  document.getElementById("overlay").style.height = "100%";
  setTimeout(() => {
    document.querySelector(".about-container").style.opacity = "1"; /* Set opacity to 1 after 0.5s delay */
  }, 300);
}

closeNav = () => {
  document.querySelector(".about-container").style.opacity = "0";
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("overlay").style.height = "0%";
}
