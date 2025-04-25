const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });
  
