function myFunction() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  window.onresize = function() {
    var x = document.getElementById("nav");
    if (window.innerWidth > 650) {
        x.style.display = "block"; 
    } else {
        x.style.display = "none"; 
    }
};