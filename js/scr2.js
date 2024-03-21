const subHeadings = [
  "Coding and debugging",
  "Paper presentation",
  "Type Racer",
  "Aptitude test",
  "Short film",
  "Memory master",
];

let index = 0;
let textIndex = 0;
let interval;
let isDeleting = false;

function typeText() {
  const subHeading = document.getElementById("sub-heading");
  const text = subHeadings[index];
  let newText;

  if (isDeleting) {
    newText = text.substring(0, textIndex - 1);
  } else {
    newText = text.substring(0, textIndex + 1);
  }

  subHeading.innerHTML = newText + "<span class='cursor'></span>";

  if (!isDeleting && textIndex === text.length) {
    isDeleting = true;
  } else if (isDeleting && textIndex === 0) {
    isDeleting = false;
    index = (index + 1) % subHeadings.length;
  }

  textIndex = isDeleting ? textIndex - 1 : textIndex + 1;
}

function changeSubHeading() {
  interval = setInterval(typeText, 200);
}

changeSubHeading();
