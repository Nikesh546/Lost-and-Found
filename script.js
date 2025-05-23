document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        
        // Basic validation
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|;':",.<>/?-]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters');
            return;
        }
        
        if (!terms) {
            alert('Please agree to the Terms and Conditions');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If all validations pass
        alert('Registration successful!');
        form.reset();
    });
    
    // Social login buttons (placeholder functionality)
    document.querySelector('.google').addEventListener('click', function() {
        alert('Google registration clicked');
    });
    
    document.querySelector('.facebook').addEventListener('click', function() {
        alert('Facebook registration clicked');
    });
});