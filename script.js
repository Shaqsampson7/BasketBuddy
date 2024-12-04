document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky navigation bar
  window.onscroll = function() {stickyNav()};
  
  var navbar = document.querySelector('nav');
  var sticky = navbar.offsetTop;
  
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
 
  <script>
  document.addEventListener("DOMContentLoaded", function() {
    const createBudgetBtn = document.getElementById("create-budget-btn");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("close-modal");

    createBudgetBtn.addEventListener("click", function() {
      modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  });
</script>
  