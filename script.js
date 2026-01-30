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
  "So that's your final, final, *final* answer?",
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
