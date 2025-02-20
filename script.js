// Handle splash screen
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    
    // Hide splash screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500);
        }, 2000);
    });
});

// Service categories data
const services = [
    {
        id: 1,
        name: 'Home Cleaning',
        image: 'cleaning.jpg',
        description: 'Professional home cleaning services',
        price: 'Starting from $49',
        features: ['Deep Cleaning', 'Sanitization', 'Kitchen Cleaning']
    },
    {
        id: 2,
        name: 'Plumbing',
        image: 'plumbing.jpg',
        description: 'Expert plumbing solutions',
        price: 'Starting from $39',
        features: ['Pipe Repair', 'Installation', 'Maintenance']
    },
    {
        id: 3,
        name: 'Electrical',
        image: 'electrical.jpg',
        description: 'Electrical repair and installation',
        price: 'Starting from $45',
        features: ['Wiring', 'Fixtures', 'Safety Checks']
    },
    {
        id: 4,
        name: 'Beauty Services',
        image: 'beauty.jpg',
        description: 'Professional beauty services at home',
        price: 'Starting from $29',
        features: ['Makeup', 'Hair Styling', 'Spa']
    },
    {
        id: 5,
        name: 'Appliance Repair',
        image: 'appliance.jpg',
        description: 'Expert appliance repair services',
        price: 'Starting from $55',
        features: ['AC Repair', 'Refrigerator', 'Washing Machine']
    },
    {
        id: 6,
        name: 'Pest Control',
        image: 'pest.jpg',
        description: 'Complete pest control solutions',
        price: 'Starting from $69',
        features: ['Inspection', 'Treatment', 'Prevention']
    },
    {
        id: 7,
        name: 'Painting',
        image: 'painting.jpg',
        description: 'Professional painting services',
        price: 'Starting from $199',
        features: ['Interior', 'Exterior', 'Wallpaper']
    },
    {
        id: 8,
        name: 'Carpentry',
        image: 'carpentry.jpg',
        description: 'Expert carpentry work',
        price: 'Starting from $79',
        features: ['Furniture', 'Repairs', 'Installation']
    },
    {
        id: 9,
        name: 'Gardening',
        image: 'gardening.jpg',
        description: 'Professional gardening services',
        price: 'Starting from $49',
        features: ['Maintenance', 'Landscaping', 'Plant Care']
    },
    {
        id: 10,
        name: 'Home Security',
        image: 'security.jpg',
        description: 'Complete security solutions',
        price: 'Starting from $149',
        features: ['CCTV', 'Alarms', 'Smart Locks']
    },
    {
        id: 11,
        name: 'Moving Services',
        image: 'moving.jpg',
        description: 'Professional moving assistance',
        price: 'Starting from $199',
        features: ['Packing', 'Transportation', 'Setup']
    },
    {
        id: 12,
        name: 'Computer Repair',
        image: 'computer.jpg',
        description: 'Expert tech support',
        price: 'Starting from $59',
        features: ['Hardware', 'Software', 'Network']
    }
];

// Render service cards
function renderServices() {
    const serviceGrid = document.querySelector('.service-grid');
    if (!serviceGrid) return;

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-image">
                <img src="images/${service.image}" alt="${service.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${service.name}'">
            </div>
            <div class="service-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-features">
                    ${service.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="service-price">${service.price}</div>
                <button class="btn btn-primary" onclick="handleBooking(${service.id})">Book Now</button>
            </div>
        `;
        serviceGrid.appendChild(serviceCard);
    });
}

// Handle booking
function handleBooking(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return;

    // Show booking modal
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Book ${service.name}</h2>
            <form id="bookingForm" onsubmit="submitBooking(event, ${serviceId})">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" required>
                </div>
                <div class="form-group">
                    <label for="date">Preferred Date</label>
                    <input type="date" id="date" required>
                </div>
                <div class="form-group">
                    <label for="time">Preferred Time</label>
                    <input type="time" id="time" required>
                </div>
                <button type="submit" class="btn btn-primary">Confirm Booking</button>
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.booking-modal');
    if (modal) {
        modal.remove();
    }
}

// Submit booking
function submitBooking(event, serviceId) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookingData = {
        serviceId,
        name: formData.get('name'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time')
    };
    
    // Here you would typically send this data to your backend
    console.log('Booking submitted:', bookingData);
    
    // Show success message
    alert('Booking successful! We will contact you shortly.');
    closeModal();
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav-active');
}

// Scroll to top button visibility
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
});
