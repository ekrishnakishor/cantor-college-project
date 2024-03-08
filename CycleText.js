function typeText() {
    const texts = [
      "not a destination",
      "not a race",
      "start learning"
    ];
    let currentIndex = 0;
    const spanElement = document.querySelector('.headings p span');
    let index = 0;

    function type() {
      if (index < texts[currentIndex].length) {
        spanElement.textContent += texts[currentIndex].charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed (milliseconds)
      } else {
        setTimeout(erase, 1500); // Wait before erasing
      }
    }

    function erase() {
      if (index >= 0) {
        const newText = texts[currentIndex].substring(0, index - 1);
        spanElement.textContent = newText;
        index--;
        setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
      } else {
        currentIndex = (currentIndex + 1) % texts.length;
        index = 0; // Reset index to 0 when switching to a new text
        setTimeout(type, 500); // Wait before typing new text
      }
    }

    type();
  }

  document.addEventListener('DOMContentLoaded', typeText);
