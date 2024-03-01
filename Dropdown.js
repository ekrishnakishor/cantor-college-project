const informationsLinks = document.querySelectorAll('header .right nav .dropdown > a');

informationsLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const dropdownOptions = link.nextElementSibling;
    dropdownOptions.classList.toggle('show');
  });
});
