// Cosmic Observatory - Interactive JavaScript

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
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number based on its value
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

// Interactive cosmic sphere animation
function createCosmicParticles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(108, 92, 231, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        heroSection.appendChild(particle);
    }
}

// Initialize cosmic particles
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

// Initialize typing effect
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 50);
    }, 100);
}

// Interactive feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Timeline animation
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
        item.style.opacity = '0';
        item.style.transition = 'all 0.6s ease-in-out';
        
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        
        observer.observe(item);
    });
}

// Initialize timeline animation
animateTimeline();

// Search functionality (for future implementation)
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            // Implement search logic here
            console.log('Searching for:', query);
        });
    }
}

// Galaxy size comparison chart
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
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#b2bec3'
                    },
                    grid: {
                        color: 'rgba(108, 92, 231, 0.2)'
                    }
                },
                x: {
                    ticks: {
                        color: '#b2bec3'
                    },
                    grid: {
                        color: 'rgba(108, 92, 231, 0.2)'
                    }
                }
            }
        }
    });
}

// Stellar mass comparison chart
function createStellarMassChart() {
    const ctx = document.getElementById('stellarMassChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Main Sequence', 'Red Giants', 'White Dwarfs', 'Neutron Stars', 'Brown Dwarfs'],
            datasets: [{
                data: [76, 12, 6, 4, 2],
                backgroundColor: [
                    'rgba(108, 92, 231, 0.8)',
                    'rgba(253, 121, 168, 0.8)',
                    'rgba(162, 155, 254, 0.8)',
                    'rgba(116, 75, 162, 0.8)',
                    'rgba(103, 58, 183, 0.8)'
                ],
                borderColor: [
                    'rgba(108, 92, 231, 1)',
                    'rgba(253, 121, 168, 1)',
                    'rgba(162, 155, 254, 1)',
                    'rgba(116, 75, 162, 1)',
                    'rgba(103, 58, 183, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        padding: 20
                    }
                }
            }
        }
    });
}

// Planet size comparison chart
function createPlanetSizeChart() {
    const ctx = document.getElementById('planetSizeChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Planet Sizes',
                data: [
                    { x: 0.39, y: 0.055, r: 5, label: 'Mercury' },
                    { x: 0.72, y: 0.815, r: 8, label: 'Venus' },
                    { x: 1.00, y: 1.000, r: 10, label: 'Earth' },
                    { x: 1.52, y: 0.107, r: 7, label: 'Mars' },
                    { x: 5.20, y: 317.8, r: 25, label: 'Jupiter' },
                    { x: 9.58, y: 95.2, r: 22, label: 'Saturn' },
                    { x: 19.2, y: 14.5, r: 15, label: 'Uranus' },
                    { x: 30.1, y: 17.1, r: 16, label: 'Neptune' }
                ],
                backgroundColor: 'rgba(108, 92, 231, 0.6)',
                borderColor: 'rgba(108, 92, 231, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw.label}: Distance ${context.parsed.x} AU, Mass ${context.parsed.y} Earth masses`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Distance from Sun (AU)',
                        color: '#b2bec3'
                    },
                    ticks: {
                        color: '#b2bec3'
                    },
                    grid: {
                        color: 'rgba(108, 92, 231, 0.2)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Mass (Earth = 1)',
                        color: '#b2bec3'
                    },
                    ticks: {
                        color: '#b2bec3'
                    },
                    grid: {
                        color: 'rgba(108, 92, 231, 0.2)'
                    }
                }
            }
        }
    });
}

// Interactive size comparison tool
function createSizeComparison() {
    const container = document.getElementById('sizeComparison');
    if (!container) return;
    
    const objects = [
        { name: 'Earth', size: 1, color: '#4facfe' },
        { name: 'Jupiter', size: 11, color: '#fd79a8' },
        { name: 'Sun', size: 109, color: '#fdcb6e' },
        { name: 'Betelgeuse', size: 700, color: '#e17055' },
        { name: 'VY Canis Majoris', size: 1420, color: '#a29bfe' }
    ];
    
    objects.forEach(obj => {
        const element = document.createElement('div');
        element.className = 'size-comparison-item';
        element.style.cssText = `
            display: inline-block;
            margin: 10px;
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease;
        `;
        
        const circle = document.createElement('div');
        const baseSize = 20;
        const size = Math.min(baseSize * Math.log(obj.size + 1), 200);
        
        circle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${obj.color};
            border-radius: 50%;
            margin: 0 auto 10px;
            box-shadow: 0 0 20px ${obj.color}50;
        `;
        
        const label = document.createElement('div');
        label.textContent = obj.name;
        label.style.cssText = `
            color: #ffffff;
            font-size: 12px;
            font-weight: 600;
        `;
        
        element.appendChild(circle);
        element.appendChild(label);
        
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.1)';
            circle.style.boxShadow = `0 0 30px ${obj.color}`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
            circle.style.boxShadow = `0 0 20px ${obj.color}50`;
        });
        
        container.appendChild(element);
    });
}

// Cosmic distance calculator
function createDistanceCalculator() {
    const calculator = document.getElementById('distanceCalculator');
    if (!calculator) return;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter distance in light-years';
    input.className = 'form-control mb-3';
    input.style.cssText = `
        background: rgba(26, 26, 46, 0.8);
        border: 1px solid rgba(108, 92, 231, 0.3);
        color: #ffffff;
        border-radius: 10px;
        padding: 12px;
    `;
    
    const result = document.createElement('div');
    result.className = 'calculation-result';
    result.style.cssText = `
        background: rgba(26, 26, 46, 0.8);
        border: 1px solid rgba(108, 92, 231, 0.3);
        border-radius: 10px;
        padding: 20px;
        margin-top: 15px;
        color: #ffffff;
    `;
    
    input.addEventListener('input', function() {
        const lightYears = parseFloat(this.value);
        if (isNaN(lightYears) || lightYears <= 0) {
            result.innerHTML = '<p>Please enter a valid distance in light-years.</p>';
            return;
        }
        
        const kilometers = lightYears * 9.461e12;
        const miles = lightYears * 5.879e12;
        const timeAtLightSpeed = lightYears;
        const timeAtSpaceShuttle = lightYears * 37000; // years
        
        result.innerHTML = `
            <h5 style="color: #6c5ce7; margin-bottom: 15px;">Distance Conversion</h5>
            <p><strong>Kilometers:</strong> ${kilometers.toExponential(2)} km</p>
            <p><strong>Miles:</strong> ${miles.toExponential(2)} miles</p>
            <p><strong>Travel time at light speed:</strong> ${timeAtLightSpeed.toLocaleString()} years</p>
            <p><strong>Travel time by Space Shuttle:</strong> ${timeAtSpaceShuttle.toLocaleString()} years</p>
        `;
    });
    
    calculator.appendChild(input);
    calculator.appendChild(result);
}

// Initialize all interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search
    initializeSearch();
    
    // Create charts
    setTimeout(() => {
        createGalaxySizeChart();
        createStellarMassChart();
        createPlanetSizeChart();
    }, 1000);
    
    // Create interactive tools
    createSizeComparison();
    createDistanceCalculator();
    
    // Add loading states
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        setTimeout(() => {
            element.style.display = 'none';
        }, 2000);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or overlays
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        });
    }
});

// Performance optimization: Lazy load images
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

// Initialize lazy loading
lazyLoadImages();

// Add smooth page transitions
function addPageTransitions() {
    const links = document.querySelectorAll('a[href^="pages/"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Add fade out effect
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}

// Initialize page transitions
addPageTransitions();

// Add fade in effect when page loads
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Console welcome message
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

// Export functions for use in other scripts
window.CosmicObservatory = {
    animateCounters,
    createGalaxySizeChart,
    createStellarMassChart,
    createPlanetSizeChart,
    createSizeComparison,
    createDistanceCalculator
};

