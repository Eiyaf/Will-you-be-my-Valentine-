const gifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJocmt4dWcwaTVxbmM0b3NxYWFhcWF2Y2hhMWg5eTBrdHcwMmF6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yPAWyc35MhDUNrzySi/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWk3MGt2YndnbzNqZmVxZHJwZWFmZ3RjODRjNGoyOWswZ245eWpvciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1tiwQhwReXrSQ66wsB/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXcxY2VzdG9oeDJva282ZWl1ZXdjdHEyd2RraGJkMno2MDRkYmozeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/754u3UNlbbc2tMg97K/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHYyNzY5NzU3M3lnNG5kamllODZjcTlxbDNyMnZzNjNlZm1qeHBhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EADTT88AK7YUNY7qaq/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGV0NGJ1bXIxemswa2ZtZmRoN3lkNWw3cnR1bjRuamRoNmxtMXp6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JCSr1AN4mNgLKAy3a0/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZzM256ZG9oeWQzOHYyazFneTg4YWQ3ZHA3N3M5MnZ3d2lxaTlqNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wYzNWKJ2jU4rNX6SAO/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJ1cHM2azF6ZXo3N2Z5MGphZXdzaGNtNWRiM2lsdWFzMW5pdm45MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wNk71OcVtOPncxNHVT/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWVkajkxazV5eXFwdm5lMjRnbzQ1amc4cndvYzRqcW5vMm9hOW0yOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fjxupFeOlzwRnhKT0b/giphy.gif",
];

function setRandomGif() {
  const img = document.getElementById("valentine-gif");
  if (img) {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    img.src = gifs[randomIndex];
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setRandomGif);
} else {
  setRandomGif();
}

const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
  "Are you absolutely certain?",
  "Like, 100% sure??",
  "Cross your heart sure?",
  "But, my darling...",
  "Take a moment and reconsider!",
  "My heart will be a little broken...",
  "I might just melt into a puddle of sadness...",
  "A puddle of eternal, inconsolable sorrow...",
  "Alright, I get it. I'll go away now...",
  "PSYCH! Give me one more chance? 🥺",
  "No doubts at all in your mind?",
  "Not even a tiny, tiny bit unsure?",
  "For me? Pretty please?",
  "Think of all the good times!",
  "You'd do that to this face? 😢",
  "The sadness would be legendary...",
  "A profound, universe-sized sadness...",
  "Okay, okay, message received. I'm gone...",
  "SIKE! Final answer? Pretty please with a cherry on top? 💖",
  "So that's your final, final, FINAL answer?",
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const randomIndex = Math.floor(Math.random() * messages.length);
  noButton.textContent = messages[randomIndex];
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.25}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
