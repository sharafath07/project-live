window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});
  
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }