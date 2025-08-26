document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.abstract-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      const abstractContent = this.nextElementSibling; // The div.abstract-content is the next sibling
      if (abstractContent && abstractContent.classList.contains('abstract-content')) {
        if (abstractContent.style.display === 'none' || abstractContent.style.display === '') {
          abstractContent.style.display = 'block';
          this.textContent = '[-] Abstract';
        } else {
          abstractContent.style.display = 'none';
          this.textContent = '[+] Abstract';
        }
      }
    });
  });
});