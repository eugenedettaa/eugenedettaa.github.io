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

//****************************** Project summaries button behavior*************************************

  document.addEventListener("DOMContentLoaded", function() {
    var summaries = document.querySelectorAll('.summary');
    var buttons = document.querySelectorAll('.show-more-button');
  
    summaries.forEach(function(summary, index) {
      var button = buttons[index];
  
      // Calculate the natural height of the summary paragraph
      var computedStyle = window.getComputedStyle(summary);
      var lineHeight = parseFloat(computedStyle.lineHeight);
      var maxHeight = 2 * lineHeight; // 6em height
  
      // Check if the actual height exceeds maxHeight
      if (summary.offsetHeight > maxHeight) {
        button.style.display = 'block'; // Display the button
      }
  
      // Function to toggle summary visibility
      function toggleSummary(button) {
        var currentSummary = button.previousElementSibling;
        if (currentSummary.style.maxHeight) {
          currentSummary.style.maxHeight = null;
          button.textContent = 'Show more';
        } else {
          currentSummary.style.maxHeight = 'none'; // Expand to show full content
          button.textContent = 'Show less';
        }
      }
  
      // Attach toggleSummary function to the button click event
      button.addEventListener('click', function() {
        toggleSummary(button);
      });
    });
  });

  // Nav Links Activation

  document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentPage = window.location.href;
  
    // Get all navigation links
    var navLinks = document.querySelectorAll('#home a');
  
    // Loop through each link
    navLinks.forEach(function(link) {
      // Check if the link's href matches the current page URL
      if (link.href === currentPage) {
        // Add active class to the matching link
        link.classList.add('active');
      }
    });
  });