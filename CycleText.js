function typeText() {
    const texts = [
      "not a destination",
      "not a race",
      "start learning"
    ];
    let currentIndex = 0;
    const spanElement = document.querySelector('.headings p span');
    const text = texts[currentIndex];
    let index = 0;

    function type() {
      if (index < text.length) {
        spanElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed (milliseconds)
      } else {
        setTimeout(erase, 1500); // Wait before erasing
      }
    }

    function erase() {
      if (index >= 0) {
        const newText = text.substring(0, index - 1);
        spanElement.textContent = newText;
        index--;
        setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
      } else {
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Wait before typing new text
      }
    }

    type();
  }

  document.addEventListener('DOMContentLoaded', typeText);