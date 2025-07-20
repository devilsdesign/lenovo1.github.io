// DOM Manipulation and Event Handling
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const clock = document.querySelector('.clock');
    const form = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Interactive Menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Dark/Light Mode Toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Dynamic Clock
    function updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString();
        clock.textContent = time;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Live Form Validation
    form.addEventListener('input', (e) => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        if (!email.value.includes('@') || password.value.length < 6) {
            formFeedback.textContent = 'Invalid email or password (min 6 characters)';
            formFeedback.style.color = 'red';
        } else {
            formFeedback.textContent = 'Form is valid';
            formFeedback.style.color = 'green';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formFeedback.textContent = 'Form submitted!';
    });

    // Content Filtering
    const items = ['Home', 'About', 'Contact'];
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        const filtered = items.filter(item => item.toLowerCase().includes(query));
        filtered.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            searchResults.appendChild(li);
        });
    });

    // Sliders or Tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabContents.forEach(content => content.classList.remove('active'));
            tabButtons.forEach(btn => btn.style.backgroundColor = '#ddd');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            button.style.backgroundColor = '#007bff';
        });
    });
});