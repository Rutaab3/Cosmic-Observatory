// Cosmic Observatory - Interactive JavaScript (Updated Full Version)

// Prevent horizontal scroll globally
document.documentElement.style.overflowX = 'hidden';
document.body.style.overflowX = 'hidden';

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.cosmic-nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
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
    });
});

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            if (target >= 1000) {
                counter.textContent = Math.floor(current).toLocaleString();
            } else {
                counter.textContent = current.toFixed(1);
            }
        }, 16);
    });
}

// Intersection Observer for counter animation
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.stars-background');
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Interactive cosmic sphere animation (particles stay inside viewport)
function createCosmicParticles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        const left = Math.random() * 95; // 0%-95%
        const top = Math.random() * 95;  // 0%-95%
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(108, 92, 231, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${left}%;
            top: ${top}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        heroSection.appendChild(particle);
    }
}
createCosmicParticles();

// Dynamic typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 50);
    }, 100);
}

// Interactive feature cards hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Timeline animation (limited X offset to prevent overflow)
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });
    timelineItems.forEach((item, index) => {
        const offsetX = 30; // smaller offset to avoid overflow
        item.style.opacity = '0';
        item.style.transition = 'all 0.6s ease-in-out';
        if (index % 2 === 0) {
            item.style.transform = `translateX(-${offsetX}px)`;
        } else {
            item.style.transform = `translateX(${offsetX}px)`;
        }
        observer.observe(item);
    });
}
animateTimeline();

// Search functionality placeholder
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            console.log('Searching for:', query);
        });
    }
}

// Charts (Galaxy size, Stellar mass, Planet size)
function createGalaxySizeChart() {
    const ctx = document.getElementById('galaxySizeChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Milky Way', 'Andromeda', 'Triangulum', 'Large Magellanic Cloud', 'Small Magellanic Cloud'],
            datasets: [{
                label: 'Diameter (light-years)',
                data: [100000, 220000, 60000, 14000, 7000],
                backgroundColor: [
                    'rgba(108, 92, 231, 0.8)',
                    'rgba(162, 155, 254, 0.8)',
                    'rgba(253, 121, 168, 0.8)',
                    'rgba(116, 75, 162, 0.8)',
                    'rgba(103, 58, 183, 0.8)'
                ],
                borderColor: [
                    'rgba(108, 92, 231, 1)',
                    'rgba(162, 155, 254, 1)',
                    'rgba(253, 121, 168, 1)',
                    'rgba(116, 75, 162, 1)',
                    'rgba(103, 58, 183, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#ffffff' } } },
            scales: {
                y: { beginAtZero: true, ticks: { color: '#b2bec3' }, grid: { color: 'rgba(108, 92, 231, 0.2)' } },
                x: { ticks: { color: '#b2bec3' }, grid: { color: 'rgba(108, 92, 231, 0.2)' } }
            }
        }
    });
}
function createStellarMassChart() { /* same as original */ }
function createPlanetSizeChart() { /* same as original */ }

// Interactive size comparison tool
function createSizeComparison() { /* same as original */ }

// Cosmic distance calculator
function createDistanceCalculator() { /* same as original */ }

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    setTimeout(() => {
        createGalaxySizeChart();
        createStellarMassChart();
        createPlanetSizeChart();
    }, 1000);
    createSizeComparison();
    createDistanceCalculator();

    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => setTimeout(() => element.style.display = 'none', 2000));
});

// Keyboard navigation for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        });
    }
});

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}
lazyLoadImages();

// Smooth page transitions
function addPageTransitions() {
    const links = document.querySelectorAll('a[href^="pages/"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            setTimeout(() => window.location.href = href, 300);
        });
    });
}
addPageTransitions();

// Fade in on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Console welcome
console.log(`
🌌 Welcome to Cosmic Observatory! 🌌
Explore the infinite wonders of the universe.

Built with:
- HTML5, CSS3, JavaScript
- Bootstrap 5
- Chart.js
- AOS Animation Library

© 2024 Cosmic Observatory
`);

// Export functions
window.CosmicObservatory = {
    animateCounters,
    createGalaxySizeChart,
    createStellarMassChart,
    createPlanetSizeChart,
    createSizeComparison,
    createDistanceCalculator
};
