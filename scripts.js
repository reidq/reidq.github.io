// Function to load header and footer
function loadHeaderFooter() {
    // Header HTML content
    const headerHtml = `
      <div class="container-main">
    <img class="main-logo" src="img/fgcu-logo.svg">
    <div class="home-banner"></div>
    <!-- Navigation -->
    <div id="navbar">
        <ul>
            <li><a target="_blank" href="index.html">Home</a></li>
            <li><a target="_blank" href="table-of-contents.html">Table of Contents</a></li>
            <li><a target="_blank" href="#contact">Placeholder #3</a></li>
        </ul>
    </div>
   
</div>`;
  
    // Footer HTML content
    const footerHtml = `
     <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        © Florida Gulf Coast University. All Rights Reserved.
                    </p>
                    <a href="https://www.fgcu.edu/"">fgcu.edu</a>
                </div>
            </footer>
      `;
  
    // Inserting the header and footer into the DOM
    document.getElementById('header-placeholder').innerHTML = headerHtml;
    document.getElementById('footer-placeholder').innerHTML = footerHtml;
  }
  
  // Call the function when the window loads
  window.onload = function() {
    loadHeaderFooter();
  };

// Back to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Checbox Scripts for State
document.addEventListener('DOMContentLoaded', (event) => {
    // Load saved checkbox states
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      const isChecked = localStorage.getItem(checkbox.id) === 'true';
      checkbox.checked = isChecked;
    });
  
    // Save checkbox state on change
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        localStorage.setItem(checkbox.id, checkbox.checked);
      });
    });
  });