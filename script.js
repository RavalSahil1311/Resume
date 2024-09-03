// script.js

document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');

    // Toggle between light and dark mode
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeButton.textContent = 'Switch to Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeButton.textContent = 'Switch to Light Mode';
    }
});
