// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Typing Animation
const typingText = document.getElementById('typing-text');
const textArray = [
    "Trainee Software Engineer | Full Stack | AWS Certified | Java | Spring Boot | React"
];
let textIndex = 0, charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); // Adjust typing speed here (100 ms)
    }
}

// Activate cards on scroll
const certificates = document.querySelectorAll('.certificate-card');
const stack = document.querySelector('.certificates-stack');

function updateActiveCard() {
    const scrollPosition = window.scrollY;
    
    certificates.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        
        if (scrollPosition > cardTop - window.innerHeight / 2 && 
            scrollPosition < cardTop + cardHeight - window.innerHeight / 2) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updateActiveCard);
window.addEventListener('resize', updateActiveCard);

// Initialize
updateActiveCard();

// Add click event to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank');
        }
    });
});

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
}

// Splash Screen Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
    }, 2500); // Fade out splash screen after 2.5 seconds
});
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("nav-active");
}


