// REVIEWS

const reviews = [
  {
    id: 1,
    name: "Maria Caprise",
    job: "web developer",
    img: "./1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem alias quidem incidunt, aut obcaecati labore reprehenderit voluptatum, facilis optio sapiente, deleniti iusto rerum minima.",
  },
  {
    id: 2,
    name: "Jonathan Smith",
    job: "web designer",
    img: "./2.jpg",
    text: "Recusandae voluptatem alias quidem incidunt, aut obcaecati labore reprehenderit voluptatum, facilis optio sapiente, deleniti iusto rerum minima.",
  },
  {
    id: 3,
    name: "Peter Parker",
    job: "intern",
    img: "./3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem alias quidem incidunt, aut obcaecati labore reprehenderit",
  },
  {
    id: 4,
    name: "Brad Pitt",
    job: "the boss",
    img: "./4.jpg",
    text: "labore reprehenderit voluptatum, facilis optio sapiente, deleniti iusto rerum minima.",
  },
];

// VARIABLES

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentPerson = 0;

// MAIN FUNCTIONALITY

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentPerson);
});

const showPerson = (personItem) => {
  const person = reviews[personItem];
  img.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
};

// EVENT LISTENERS

nextBtn.addEventListener("click", () => {
  currentPerson++;
  if (currentPerson > reviews.length - 1) {
    currentPerson = 0;
  }
  showPerson(currentPerson);
});
prevBtn.addEventListener("click", () => {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = reviews.length - 1;
  }
  showPerson(currentPerson);
});

randomBtn.addEventListener("click", () => {
  currentPerson = Math.floor(Math.random() * reviews.length);
  showPerson(currentPerson);
});
