function showCategory(category) {
    const categories = ['projects', 'arts', 'photography',];
    categories.forEach(cat => {
        document.getElementById(cat).style.display = cat === category ? 'grid' : 'none';
    });
}
function showProjectDetails(title, images, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    if (!title || !images || images.length === 0 || !description) {
        return; // Stop execution if data is missing
    }

    let modalImagesContainer = document.getElementById('modalImagesContainer');
    modalImagesContainer.innerHTML = ""; // Clear previous images

    images.forEach(imageSrc => {
        let imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = title;
        modalImagesContainer.appendChild(imgElement);
    });

    document.getElementById('projectModal').style.display = "block";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
};
