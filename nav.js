function requireAuth() {
  if (!localStorage.getItem('lms_user')) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.clear();
    window.location.href = 'login.html';
  }
}

function renderNav(active) {
  if (!requireAuth()) return;

  const pages = [
    { id: 'dashboard', label: 'Dashboard', href: 'dashboard.html' },
    { id: 'tasks',     label: 'Tasks',     href: 'tasks.html' },
    { id: 'courses',   label: 'Courses',   href: 'courses.html' },
    { id: 'profile',   label: 'Profile',   href: 'profile.html' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.id === active ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('main-nav').innerHTML =
    links + '<span class="nav-spacer"></span><button onclick="logout()">Logout</button>';
}
