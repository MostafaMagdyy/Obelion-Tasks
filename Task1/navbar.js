document.addEventListener("scroll", function () {
    const navbar1 = document.getElementById("navbar1");
    const navbar2 = document.getElementById("navbar2");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      navbar2.classList.add("bg-changed");
      navbar1.classList.add("hidden");
    } else {
      navbar2.classList.remove("bg-changed");
      navbar1.classList.remove("hidden");
    }
  });
  