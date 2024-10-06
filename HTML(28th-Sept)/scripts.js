const thumbnails = document.querySelectorAll('.image-thumbnails img');
const mainImage = document.querySelector('.main-image img');
let currentIndex = 0;

// Fetch image paths directly from the HTML
const images = Array.from(thumbnails).map(thumbnail => thumbnail.src);

// Function to update the main image
function setImage(index) {
    mainImage.src = images[index];
    currentIndex = index;

    // Remove active class from all thumbnails
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // Add active class to the current thumbnail
    thumbnails[index].classList.add('active');
}

// Set initial main image
setImage(currentIndex);

// Event listeners for thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        setImage(index);
    });
});

// Arrow button functionality
document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        setImage(currentIndex - 1);
    } else {
        setImage(images.length - 1); // Loop to last image if at the first
    }
});

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        setImage(currentIndex + 1);
    } else {
        setImage(0); // Loop to first image if at the last
    }
});

// Expandable content feature
document.querySelectorAll('.expandable-section h2').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling; // The content follows the header
        const isActive = content.classList.contains('active'); // Check if currently active

        // Close all other contents before opening the clicked one
        document.querySelectorAll('.expandable-section .content').forEach(c => {
            c.style.display = 'none'; // Hide all contents
            c.classList.remove('active'); // Remove active class from all
        });

        // If it wasn't already active, open this one
        if (!isActive) {
            content.style.display = 'block'; // Show content
            content.classList.add('active'); // Mark this content as active
        }
    });
});

// Optionally, you can add a way to close sections by clicking on them again
