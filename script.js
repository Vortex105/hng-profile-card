// Time logic
const timeEl = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
	timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// Avatar upload logic
const avatarInput = document.querySelector('#avatarUpload');
const avatarImg = document.querySelector('#userAvatar');

avatarImg.addEventListener('click', () => avatarInput.click());

avatarInput.addEventListener('change', (e) => {
	const file = e.target.files[0];
	if (!file) return;

	const reader = new FileReader();
	reader.onload = (event) => {
		avatarImg.src = event.target.result;
	};

	reader.readAsDataURL(file);
});
