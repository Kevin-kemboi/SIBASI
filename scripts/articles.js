document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;
        cards.forEach(card => {
          card.style.display = category === 'all' || card.dataset.category === category ? 'block' : 'none';
        });
      });
    });
  
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
    });
  });