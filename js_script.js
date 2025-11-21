// CS360 Dashboard JavaScript - Main Script

document.addEventListener('DOMContentLoaded', function() {
    // Update last updated timestamp
    updateLastUpdated();
    
    // Set up auto-refresh
    setInterval(updateLastUpdated, 60000); // Update every minute
    
    // Initialize dynamic data if needed
    initializeDashboard();
});

function updateLastUpdated() {
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        const now = new Date();
        lastUpdateElement.textContent = now.toLocaleTimeString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

function initializeDashboard() {
    console.log('CS360 Dashboard Initialized');
    // Add any initialization logic here
}

// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Utility function to format numbers
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Utility function to get QoE status
function getQoEStatus(score) {
    if (score >= 4.0) return 'excellent';
    if (score >= 3.0) return 'good';
    if (score >= 2.0) return 'fair';
    if (score >= 1.0) return 'poor';
    return 'critical';
}

// Refresh data function
function refreshData() {
    console.log('Refreshing dashboard data...');
    // Add API calls here to fetch latest data
}