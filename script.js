// Smooth scroll for navigation links & active link highlight
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetID = link.getAttribute('href').slice(1);
    document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });

    // Update active class
    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});
