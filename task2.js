let isEditMode = false;

function toggleEdit() {
    isEditMode = !isEditMode;
    const editFields = document.querySelectorAll('.edit-field');
    const displayFields = document.querySelectorAll('.info-content p');

    editFields.forEach((field) => {
        field.style.display = isEditMode ? 'block' : 'none';
    });

    displayFields.forEach((field) => {
        field.style.display = isEditMode ? 'none' : 'block';
    });

    document.getElementById('edit-btn').textContent = isEditMode ? 'Save Profile' : 'Edit Profile';

    if (!isEditMode) {
        // Save the updated profile information
        document.getElementById('name-display').textContent = document.getElementById('name-input').value;
        document.getElementById('bio-display').textContent = document.getElementById('bio-input').value;
        document.getElementById('email-display').textContent = document.getElementById('email-input').value;
        document.getElementById('phone-display').textContent = document.getElementById('phone-input').value;
        document.getElementById('skills-display').textContent = document.getElementById('skills-input').value;
        document.getElementById('hobbies-display').textContent = document.getElementById('hobbies-input').value;
        document.getElementById('interests-display').textContent = document.getElementById('interests-input').value;
    }
}

// Load Profile Image
function loadProfileImage(event) {
    const profileImg = document.getElementById('profile-img');
    profileImg.src = URL.createObjectURL(event.target.files[0]);
}

// Load Gallery Images
function loadGalleryImages(event) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear the previous images
    Array.from(event.target.files).forEach(file => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        gallery.appendChild(img);
    });
}
