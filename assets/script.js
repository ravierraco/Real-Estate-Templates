// Sidebar functions
function openSidebar() {
  const sb = document.getElementById('sidebar');
  if (!sb) return console.error('sidebar element missing');
  sb.style.left = '0';
}

function closeSidebar() {
  const sb = document.getElementById('sidebar');
  if (!sb) return console.error('sidebar element missing');
  sb.style.left = '-260px';
}

// Close sidebar and modal on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeSidebar();
    closeModal();
  }
});

// Modal functionality
function openModal(imageSrc, title, description, buttonLink) {
  const modal = document.getElementById('templateModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalBtn = document.getElementById('modalBtn');
  
  if (!modal) return console.error('Modal element missing');
  
  modalImg.src = imageSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalBtn.href = buttonLink;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  const modal = document.getElementById('templateModal');
  if (!modal) return;
  
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('templateModal');
  if (event.target === modal) {
    closeModal();
  }
}

// Initialize cards with click handlers after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't trigger if clicking the button directly
      if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        return;
      }
      
      const img = this.querySelector('img');
      const title = this.querySelector('h4');
      const description = this.querySelector('p');
      const btn = this.querySelector('.btn');
      
      if (img && btn) {
        const imageSrc = img.src;
        const titleText = title ? title.textContent : 'Template';
        const descriptionText = description ? description.textContent : 'Click "Use Template" below to open this template in Canva and customize it for your real estate business.';
        const buttonLink = btn.href;
        
        openModal(imageSrc, titleText, descriptionText, buttonLink);
      }
    });
  });
});
