// assets/script.js
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

// Optional: close on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeSidebar();
});
