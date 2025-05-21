const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const header = document.getElementById('headerBar');

if (sidebar.classList.contains('hidden')) {
  toggleBtn.classList.add('open');
} else {
  toggleBtn.classList.remove('open');
}

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  header.classList.toggle('expanded');
  toggleBtn.classList.toggle('open');
});
