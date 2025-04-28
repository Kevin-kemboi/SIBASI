document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit-btn');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const togglePassword = document.getElementById('toggle-password');
    const form = document.getElementById('login-form');
    const progressFill = document.getElementById('progress-fill');
    const toast = document.getElementById('toast');
  
    function showToast(message, type) {
      toast.textContent = message;
      toast.className = `toast ${type}`;
      setTimeout(() => toast.className = 'toast hidden', 3000);
    }
  
    function validateForm() {
      const email = emailInput.value;
      const password = passwordInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      let isValid = true;
      let progress = 0;
  
      if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email';
        emailInput.classList.add('error');
        isValid = false;
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
        progress += 50;
      }
  
      if (password.length <= 8) {
        passwordError.textContent = 'Password must be more than 8 characters';
        passwordInput.classList.add('error');
        isValid = false;
      } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('error');
        progress += 50;
      }
  
      progressFill.style.width = `${progress}%`;
      submitBtn.disabled = !isValid;
    }
  
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      togglePassword.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
  
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      submitBtn.querySelector('.btn-text').classList.add('hidden');
      submitBtn.querySelector('.btn-loader').classList.remove('hidden');
      await new Promise(resolve => setTimeout(resolve, 1500));
      showToast('Login successful!', 'success');
      setTimeout(() => window.location.href = 'dashboard.html', 1000);
    });
  });