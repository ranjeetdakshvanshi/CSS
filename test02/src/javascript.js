document.querySelectorAll(".pic").forEach(function (pic) {
    pic.addEventListener("click", function () {
      document.querySelectorAll(".pic").forEach(function (pic) {
        pic.classList.toggle("away"); // Toggle 'away' class on all elements with 'pic' class
      });
      this.classList.remove("away"); // Remove 'away' class from the clicked element
      this.classList.toggle("active"); // Toggle 'active' class on the clicked element
    });
  });
  