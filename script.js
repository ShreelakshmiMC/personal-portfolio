// --- Typewriter Effect Implementation ---
const textElement = document.getElementById('typewriter');
const phrases = ["Web Developer.", "MuleSoft Developer."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
   const currentPhrase = phrases[phraseIndex];

   if (isDeleting) {
      // Deleting phase
      charIndex--;
   } else {
      // Typing phase
      charIndex++;
   }

   // Update the display
   textElement.textContent = currentPhrase.substring(0, charIndex);

   let typingSpeed = 150; // Standard typing speed

   if (isDeleting) {
      typingSpeed /= 2; // Faster deletion
   }

   if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at the end of the phrase, then start deleting
      typingSpeed = 2000; // Pause for 2 seconds
      isDeleting = true;
   } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Short pause before typing next
   }

   setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect on load
window.onload = function () {
   typeWriter();
};

// --- Contact Form Submission ---
function handleFormSubmission(event) {
   event.preventDefault();

   const form = document.getElementById('contactForm');
   const successMessage = document.getElementById('success-message');

   successMessage.style.display = 'block';

}