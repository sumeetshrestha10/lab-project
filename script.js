function validateForm() {
    // Get form elements
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;
  
    // Full Name Validation (should not be empty)
    if (fullName.trim() === "") {
      document.write("Full Name is required.");
      return false;
    }
  
    // Email Validation (must be a valid email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Phone Number Validation (must match the pattern of 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    // Password and Confirm Password Validation (must match)
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // Gender Validation (must be selected)
    if (!gender) {
      alert("Please select a gender.");
      return false;
    }
  
    // Date of Birth Validation (must be selected)
    if (dob === "") {
      alert("Please select your date of birth.");
      return false;
    }
  
    // Terms and Conditions Checkbox Validation (must be checked)
    if (!terms) {
      alert("You must agree to the terms and conditions.");
      return false;
    }
  
    // If all validations pass
    alert("Form submitted successfully!");
    return true;
  }