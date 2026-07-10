// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        navMenu.classList.remove('active');
    });
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
    setTimeout(() => preloader.style.display = 'none', 500);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.98)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.95)';
    }
});

// Hero typewriter
if (Typed) {
    new Typed('.hero-tagline', {
        strings: ['Trusted Construction Material Suppliers in Hyderabad', 'Quality Sand & Bricks with Honesty', 'Direct Delivery - No Middlemen'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });
}

// Stats counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        updateCounter();
    });
}

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.getElementById('stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Auto slide
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Particles.js - antigravity dots on mouse hover
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100
    },
    "color": {
      "value": ["#FFD700","#FFA500","#FF6347"]
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#FFD700",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
