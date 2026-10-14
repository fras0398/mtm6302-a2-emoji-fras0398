// CREATE an array of at least 12 emoji codes
const emojiCodes = [
  128512, // 😀 Grinning Face
  128514, // 😂 Face with Tears of Joy
  128525, // 😍 Smiling Face with Heart-Eyes
  128526, // 😎 Smiling Face with Sunglasses
  129300, // 🤔 Thinking Face
  129321, // 🤩 Star-Struck
  129395, // 🥳 Partying Face
  129409, // 🦁 Lion
  128640, // 🚀 Rocket
  127752, // 🌈 Rainbow
  127829, // 🍕 Pizza
  127918  // 🎮 Video Game
];

// FIND the gallery container
const galleryContainer = document.getElementById('emoji-gallery');

// DEFINE showEmojis(count)
// DEFAULT count to the array's length
function showEmojis(count = emojiCodes.length) {
  // CLEAR the existing gallery
  galleryContainer.innerHTML = '';

  // Create a variable to accumulate the HTML cards
  let cardsHTML = '';

  // REPEAT count times, starting at array index zero
  for (let i = 0; i < count; i++) {
    // READ the emoji code at the current index
    const code = emojiCodes[i];

    // CREATE a card containing the emoji and its code
    cardsHTML += `
      <article class="emoji-card">
        <span class="emoji-char">&#${code};</span>
        <code class="emoji-code">${code}</code>
      </article>
    `;
  }

  // ADD the card to the gallery
  galleryContainer.innerHTML = cardsHTML;
}

// CALL showEmojis() to display all emojis
showEmojis();