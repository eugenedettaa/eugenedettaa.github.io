//*********************************Responsive menu toggle script******************************************

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const topMenu = document.querySelector('.topmenu');
  
  mobileMenuIcon.addEventListener('click', function () {
    topMenu.classList.toggle('show-menu');
    
    if (mobileMenuIcon.classList.contains('active')) {
      mobileMenuIcon.classList.remove('active');
    } else {
      mobileMenuIcon.classList.add('active');
    }
  });
});

  // Nav Links Activation

  document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentPage = window.location.href;
  
    // Get all navigation links
    var navLinks = document.querySelectorAll('#home li a');
  
    // Loop through each link
    navLinks.forEach(function(link) {
      // Check if the link's href matches the current page URL
      if (link.href === currentPage) {
        // Add active class to the matching link
        link.classList.add('active');
      }
    });
  });
  

// Check if the current URL ends with .html and redirect without .html if necessary
if (location.pathname.endsWith('.html')) {
  var newPath = location.pathname.slice(0, -5); 
  history.replaceState({}, document.title, newPath);
}
