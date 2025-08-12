// Enhanced JavaScript with smooth animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true,
        offset: 100
    });

    // Initialize all features
    initSmoothScrolling();
    initNavbarEffects();
    initSearchForm();
    initFloatingButton();
    initStaysCarousel();
    initParallaxEffects();
    initHoverEffects();
    initPerformanceOptimizations();
});

// Smooth scrolling functionality
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll for CTA buttons
    document.addEventListener('click', function(e) {
        if (e.target.getAttribute('href') === '#stays') {
            e.preventDefault();
            const staysSection = document.getElementById('stays');
            if (staysSection) {
                const offsetTop = staysSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Navbar scroll effects
function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollY > lastScrollY && scrollY > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Enhanced search form
function initSearchForm() {
    const searchForm = document.querySelector('.search-form');
    const searchInputs = document.querySelectorAll('.search-input');
    
    // Add focus effects
    searchInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Set minimum dates
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    const today = new Date().toISOString().split('T')[0];
    
    if (checkinInput) {
        checkinInput.setAttribute('min', today);
        checkinInput.addEventListener('change', function() {
            if (checkoutInput) {
                checkoutInput.setAttribute('min', this.value);
            }
        });
    }
    
    if (checkoutInput) {
        checkoutInput.setAttribute('min', today);
    }
    
    // Handle form submission
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = this.querySelector('.search-button');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
            submitBtn.disabled = true;
            
            // Simulate search
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                // Here you would typically redirect to search results
                alert('Search functionality would redirect to results page');
            }, 2000);
        });
    }

    // Quick action buttons
    const quickButtons = document.querySelectorAll('.quick-btn');
    quickButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const destination = document.getElementById('destination');
            if (destination) {
                destination.value = this.textContent.trim();
                destination.focus();
            }
        });
    });
}

// Stays carousel functionality
function initStaysCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track) return;
    
    // Get data from script tag
    const appData = document.getElementById('appData');
    if (!appData) return;
    
    const data = JSON.parse(appData.textContent);
    const stays = data.stays || [];
    
    if (stays.length === 0) return;
    
    // Build carousel items
    let carouselHTML = '';
    stays.forEach(stay => {
        carouselHTML += createStayCard(stay);
    });
    
    track.innerHTML = carouselHTML;
    
    // Carousel controls
    let currentIndex = 0;
    const cardWidth = getCardWidth();
    const maxIndex = Math.max(0, stays.length - getVisibleCards());
    
    function getCardWidth() {
        if (window.innerWidth >= 992) return 350 + 32; // lg
        if (window.innerWidth >= 768) return 300 + 24; // md
        return 280 + 16; // sm
    }
    
    function getVisibleCards() {
        if (window.innerWidth >= 992) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    function updateCarousel() {
        const translateX = -currentIndex * cardWidth;
        track.style.transform = `translateX(${translateX}px)`;
        
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex;
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(maxIndex, currentIndex + 1);
            updateCarousel();
        });
    }
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newMaxIndex = Math.max(0, stays.length - getVisibleCards());
            currentIndex = Math.min(currentIndex, newMaxIndex);
            updateCarousel();
        }, 250);
    });
    
    // Initialize
    updateCarousel();
    
    // Auto-play carousel
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateCarousel();
        }, 5000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start autoplay
    startAutoPlay();
    
    // Pause on hover
    const carousel = document.getElementById('staysCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
}

// Create stay card HTML
function createStayCard(stay) {
    const features = stay.features || [];
    const featuresHTML = features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');
    
    return `
        <div class="stay-card">
            <div class="stay-image">
                <img src="${stay.image}" alt="${stay.name}" loading="lazy">
                <div class="stay-badge">⭐ ${stay.rating}</div>
                <button class="stay-heart" aria-label="Add ${stay.name} to favorites">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="stay-content">
                <div class="stay-header">
                    <div>
                        <h3 class="stay-title">${stay.name}</h3>
                        <p class="stay-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${stay.location}
                        </p>
                    </div>
                    <div class="stay-rating">
                        <i class="fas fa-star" style="color: #fbbf24;"></i>
                        <span>${stay.rating} (${stay.reviews})</span>
                    </div>
                </div>
                <div class="stay-features">
                    ${featuresHTML}
                </div>
                <div class="stay-price">
                    ${stay.price} <span class="price-period">per night</span>
                </div>
            </div>
        </div>
    `;
}

// Floating button functionality
function initFloatingButton() {
    const floatingBtn = document.querySelector('.floating-btn');
    
    if (floatingBtn) {
        floatingBtn.addEventListener('click', function() {
            // Add pulse effect
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'bounce 2s infinite';
            }, 100);
            
            // Show chat message
            alert('Chat functionality would open here! 💬\n\nWe\'re here to help you find your perfect stay.');
        });
    }
}

// Parallax effects
function initParallaxEffects() {
    const floatingElements = document.querySelectorAll('.floating-element');
    let ticking = false;
    
    function updateParallax() {
        const scrollY = window.scrollY;
        
        floatingElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Interactive hover effects
function initHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-primary-custom, .search-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(this, e);
        });
    });
    
    // Heart button toggle
    document.addEventListener('click', function(e) {
        if (e.target.closest('.stay-heart')) {
            e.preventDefault();
            const heartBtn = e.target.closest('.stay-heart');
            const icon = heartBtn.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                heartBtn.style.background = '#ef4444';
                
                // Add animation
                heartBtn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    heartBtn.style.transform = 'scale(1)';
                }, 200);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                heartBtn.style.background = 'rgba(0, 0, 0, 0.2)';
            }
        }
    });

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'rotate(10deg) scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'rotate(0deg) scale(1)';
            }
        });
    });
}

// Create ripple effect
function createRipple(element, event) {
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
    
    const rect = element.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
    }, 600);
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loading');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const criticalImages = [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Add loading states to page elements
    const pageElements = document.querySelectorAll('[data-aos]');
    pageElements.forEach(el => {
        el.classList.add('loading');
    });
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 1000) {
        if (!document.querySelector('.scroll-top-btn')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-top-btn';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 6rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                background: var(--primary);
                color: white;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 999;
                box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            `;
            
            scrollBtn.addEventListener('click', scrollToTop);
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
            });
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-top-btn');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Export functions for potential external use
window.wanderlustApp = {
    scrollToTop,
    createRipple
};

// Console welcome message
console.log(`
🌍 Welcome to Wanderlust!
✈️ Your adventure starts here
🏡 Discover extraordinary places worldwide

Built with ❤️ for travelers
`);
