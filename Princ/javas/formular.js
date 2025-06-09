function validateForm() {
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    const name = document.getElementById('name').value.trim();
    const namePattern = /^[^\d]+$/;
    if (!name) {
        document.getElementById('nameError').textContent = 'Introduceti numele.';
        isValid = false;
    }else if (!namePattern.test(name)) {
        document.getElementById('nameError').textContent = 'Numele nu poate contine cifre.';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Introduceti email-ul.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Introduceti un email valid.';
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').textContent = 'Introduceti mesajul.';
        isValid = false;
    }

    if (isValid) {
        alert('Formularul a fost trimis!');
        document.getElementById('contactForm').reset();
    }
}