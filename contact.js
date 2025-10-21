const form = document.getElementById('contactForm');
const messageBox = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
	e.preventDefault(); // Prevent page reload

	const name = form.name.value.trim();
	const email = form.email.value.trim();
	const subject = form.subject.value.trim();
	const message = form.message.value.trim();

	// Basic validation
	if (!name || !email || !subject || !message) {
		showMessage('Please fill out all fields.', 'error');
		return;
	}

	// Regular expression for more realistic email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

	if (!emailRegex.test(email)) {
		showMessage('Please enter a valid email address.', 'error');
		return;
	}

	// Simulate sending message (fake async)
	setTimeout(() => {
		showMessage('✅ Your message was sent successfully!', 'success');
		form.reset();
	}, 500);
});

function showMessage(text, type) {
	messageBox.textContent = text;
	messageBox.className = 'message ' + type + ' show'; // applies "success" or "error" style

	setTimeout(() => {
		messageBox.className = 'message'; // Hide message box
	}, 4000); // Hide message after 4 seconds
}
