// Add dark mode toggle functionality
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.textContent = 'Toggle Theme';
document.querySelector('header').appendChild(themeToggle);

// Default theme setup
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save preference
});
