// Function to open the popup
function openPopup(videoURL) {
  const videoFrame = document.querySelector('.videoFrame');
  videoFrame.src = videoURL;
  const videoPopup = document.querySelector('.videoPopup');
  videoPopup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  const videoFrame = document.querySelector('.videoFrame');
  videoFrame.src = ''; // Clear the video URL
  const videoPopup = document.querySelector('.videoPopup');
  videoPopup.style.display = 'none';
}

// Attach click event listeners to all elements with class "openVideoPopup"
const openVideoButtons = document.querySelectorAll('.openVideoPopup');
openVideoButtons.forEach((button) => {
  const videoURL = button.getAttribute('data-video-url');
  button.addEventListener('click', () => openPopup(videoURL));
});

// Attach click event listener to the close button
const closeVideoPopup = document.querySelector('.close');
closeVideoPopup.addEventListener('click', closePopup);

// Attach click event listener to close the popup when clicking outside of it
window.addEventListener('click', (event) => {
  const videoPopup = document.querySelector('.videoPopup');
  if (event.target == videoPopup) {
    closePopup();
  }
});
