// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked (on mobile)
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('open');
        }
    });
});

// Location status click handler
function handleLocationClick() {
    alert('Location box clicked!');
}

// Detect location button click handler
function handleDetectLocation() {
    alert('Detect location button clicked!');
}

// --- Menu Tabs and Categories ---
// Handle tab click
function handleTabClick(tab) {
    // Remove active from all tabs
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    // Add active to clicked tab
    document.getElementById('tab-' + tab).classList.add('active');
    // Show alert for demonstration
    alert('Tab selected: ' + tab.charAt(0).toUpperCase() + tab.slice(1));
}

// Handle menu category click
function handleMenuCategoryClick(category) {
    alert('Menu category selected: ' + category);
}

// Handle 'Order Now' button in What's New section
function handleWhatsNewOrder(item) {
    alert('Order Now clicked for: ' + item);
}

// Handle Add button in Bestsellers section
function handleAdd(item) {
    alert('Add clicked for: ' + item);
}

// Handle Customise button in Bestsellers section
function handleCustomise(item) {
    alert('Customise clicked for: ' + item);
} 