// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

function renderImages(images, container) {
  let imgElements = "";
  for (let i = 0; i < images.length; i++) {
    imgElements += `<img class="team-img" src="${images[i]}" alt="Employee in the company"/>`;
  };
  container.innerHTML = imgElements;
};

const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
];

const container = document.querySelector("#container");
renderImages(imgs, container);
