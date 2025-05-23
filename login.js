document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    
    // Auto-fill demo credentials when clicking on the demo text
    const demoCredentials = document.querySelector('.demo-credentials');
    demoCredentials.addEventListener('click', function() {
        document.getElementById('email').value = 'demo@example.com';
        document.getElementById('password').value = 'password';
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|;':",.<>/?-]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters');
            return;
        }
        
        // Check if using demo credentials
        if (email === 'demo@example.com' && password === 'password') {
            alert('Login successful with demo account!');
            // Redirect to dashboard or home page
            // window.location.href = 'dashboard.html';
        } else {
            // In a real application, you would send this to your server for authentication
            // For demo purposes, we'll just show a success message
            alert('Login attempt registered. In a real app, this would verify credentials with a server.');
        }
    });
    
    // Social login buttons (placeholder functionality)
    document.querySelector('.google').addEventListener('click', function() {
        alert('Google login clicked');
    });
    
    document.querySelector('.facebook').addEventListener('click', function() {
        alert('Facebook login clicked');
    });
});