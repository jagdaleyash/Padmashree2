const gameContainer = document.getElementById("game-container");
const introContainer = document.getElementById("intro-container");
const storyTextElement = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");

let currentStoryElement = 0; // Start from the intro
let experiencePoints = 0;

function startAdventure() {
  introContainer.style.display = "none";
  gameContainer.style.display = "block";
  updateGame();
}

function updateGame() {
  console.log("Updating game. Current story element:", currentStoryElement);
  const storyElement = storyElements[currentStoryElement];
  console.log("Story element:", storyElement);

  storyTextElement.textContent = storyElement.text;
  choicesElement.innerHTML = ""; // Clear previous choices

  storyElement.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.classList.add("choice-button");
    button.textContent = choice.text;
    button.addEventListener("click", () => makeChoice(index));
    choicesElement.appendChild(button);
  });
}

function makeChoice(choiceIndex) {
  const storyElement = storyElements[currentStoryElement];
  console.log("Making choice. Current story element:", currentStoryElement);
  console.log("Chosen choice:", storyElement.choices[choiceIndex]);
  const chosenChoice = storyElement.choices[choiceIndex];

  experiencePoints += chosenChoice.experiencePoints;

  if (chosenChoice.death) {
    endGame(false);
  } else {
    currentStoryElement = chosenChoice.nextElement;
    if (currentStoryElement >= storyElements.length) {
      endGame(true);
    } else {
      updateGame();
    }
  }
}

function endGame(isVictorious) {
  const endingMessage = isVictorious
    ? "Congratulations! You won!"
    : "Game Over. Try again.";
  alert(endingMessage);
  location.reload(); // Restart the game
}

// Story elements
const storyElements = [
  {
    text: "You and Yash, once inseparable, share a mysterious past that binds you together.",
    choices: [
      {
        text: "Continue the journey with Yash.",
        experiencePoints: 5,
        nextElement: 2,
      },
      {
        text: "Challenge Yash to uncover the truth.",
        experiencePoints: 10,
        death: true,
      },
    ],
  },
  {
    text: "You and Yash, once inseparable, share a mysterious past that binds you together.",
    choices: [
      {
        text: "Continue the journey with Yash.",
        experiencePoints: 5,
        nextElement: 2,
      },
      {
        text: "Challenge Yash to uncover the truth.",
        experiencePoints: 10,
        death: true,
      },
    ],
  },
  {
    text: "A magical artifact surfaces, triggering a clash between you and Yash. Secrets are revealed, leading to a fallout.",
    choices: [
      { 
        text: "Accept defeat and die.", 
        experiencePoints: -50, 
        death: true, 
      },
      {
        text: "Fight for survival and discover the artifact's origin.",
        experiencePoints: 10,
        nextElement: 3,
      },
    ],
  },
  {
    text: "Yash, consumed by darkness, leaves you on the brink of death. The world blurs as you fight to stay alive.",
    choices: [
      {
        text: "Summon the strength to survive.",
        experiencePoints: 10,
        nextElement: 4,
      },
      {
        text: "Embrace the darkness and succumb to unconsciousness.",
        experiencePoints: -30,
        death: true,
      },
    ],
  },
  {
    text: "Pranjal, a wandering healer with a mysterious past, discovers you on the brink of death. Bound by destiny, you embark on a quest together.",
    choices: [
      {
        text: "Express gratitude and continue the journey.",
        experiencePoints: 5,
        nextElement: 6,
      },
      {
        text: "Question Pranjal's motives and unravel a shared destiny.",
        experiencePoints: 0,
        nextElement: 5,
      },
    ],
  },
  {
    text: "You and Pranjal, both carrying burdens from the past, share tales of adventures and dreams for the future, forging a deep bond.",
    choices: [
      {
        text: "Share your own stories and strengthen the bond.",
        experiencePoints: 10,
        nextElement: 6,
      },
      {
        text: "Keep your past a secret, preserving a sense of mystery.",
        experiencePoints: 5,
        nextElement: 6,
      },
    ],
  },
  {
    text: "As companions, you and Pranjal embark on adventures, facing challenges and discovering hidden treasures.",
    choices: [
      {
        text: "Overcome challenges together, deepening your friendship.",
        experiencePoints: 15,
        nextElement: 10,
      },
      {
        text: "Face challenges individually, testing the strength of your bond.",
        experiencePoints: 5,
        nextElement: 10,
      },
    ],
  },
  {
    text: "During a lighthearted moment, Pranjal suggests taking a break to go fishing by a serene lake. The peaceful interlude allows the team to relax and bond.",
    choices: [
      {
        text: "Join Pranjal for a day of fishing, strengthening your friendship.",
        experiencePoints: 10,
        nextElement: 8,
      },
      {
        text: "Decline the fishing trip, choosing to focus on the mission.",
        experiencePoints: 5,
        nextElement: 12,
      },
    ],
  },
  {
    text: "As the sun sets on a successful fishing day, the team stumbles upon a hidden cave. Curiosity sparks, and an exploration ensues.",
    choices: [
      {
        text: "Embark on a cave exploration, discovering ancient runes and artifacts.",
        experiencePoints: 15,
        nextElement: 9,
      },
      {
        text: "Avoid the cave, prioritizing the main quest over potential distractions.",
        experiencePoints: 5,
        nextElement: 9,
      },
    ],
  },
  {
    text: "During the exploration, you encounter a band of mischievous creatures. A comedic encounter ensues, adding levity to the journey.",
    choices: [
      {
        text: "Engage with the creatures in a playful manner, forging unexpected alliances.",
        experiencePoints: 10,
        nextElement: 17,
      },
      {
        text: "Navigate away cautiously, avoiding potential trouble with the creatures.",
        experiencePoints: 5,
        nextElement: 17,
      },
    ],
  },
  {
    text: "As you continue your quest, you stumble upon a bustling marketplace. An opportunity arises for some much-needed shopping.",
    choices: [
      {
        text: "Indulge in shopping, finding unique items and bonding over shared interests.",
        experiencePoints: 10,
        nextElement: 11,
      },
      {
        text: "Prioritize the mission, avoiding distractions in the lively marketplace.",
        experiencePoints: 5,
        nextElement: 12,
      },
    ],
  },
  {
    text: "While shopping, a mischievous thief attempts to steal your belongings. A chase through the market ensues, testing your agility and teamwork.",
    choices: [
      {
        text: "Catch the thief and teach them a lesson, showcasing your teamwork.",
        experiencePoints: 15,
        nextElement: 12,
      },
      {
        text: "Let the thief go, prioritizing the mission over personal grievances.",
        experiencePoints: 5,
        nextElement: 12,
      },
    ],
  },
  {
    text: "During your journey, you encounter Yashi, a mage seeking redemption. Uncover Yashi's past and forge a new friendship.",
    choices: [
      {
        text: "Befriend Yashi and explore her magical abilities.",
        experiencePoints: 10,
        nextElement: 13,
      },
      {
        text: "Distrust Yashi and continue the journey cautiously.",
        experiencePoints: 5,
        nextElement: 14,
      },
    ],
  },
  {
    text: "The trio faces challenges, growing stronger together. Yashi's magical prowess becomes an invaluable asset.",
    choices: [
      {
        text: "Deepen your bond with Yashi by sharing personal stories.",
        experiencePoints: 10,
        nextElement: 14,
      },
      {
        text: "Keep your personal stories to yourself, maintaining a sense of mystery.",
        experiencePoints: 5,
        nextElement: 14,
      },
    ],
  },
  {
    text: "Misba, a rogue with a map to hidden treasures, crosses paths with the group, seeking companionship after a lifetime of solitude.",
    choices: [
      {
        text: "Welcome Misba and explore the hidden treasures.",
        experiencePoints: 15,
        nextElement: 16,
      },
      {
        text: "Reject Misba's offer and continue the journey cautiously.",
        experiencePoints: 5,
        nextElement: 15,
      },
    ],
  },
  {
    text: "Embark on a fantastic adventure, facing challenges and growing closer as a team.",
    choices: [
      {
        text: "Overcome challenges together, strengthening the team's unity.",
        experiencePoints: 15,
        nextElement: 7,
      },
      {
        text: "Face challenges individually, testing the team's resilience.",
        experiencePoints: 5,
        nextElement: 7,
      },
    ],
  },
  {
    text: "During a quiet night by the campfire, Misba shares her solitude-filled past, adding depth to her character.",
    choices: [
      {
        text: "Comfort Misba and strengthen the bonds of friendship.",
        experiencePoints: 10,
        nextElement: 15,
      },
      {
        text: "Maintain a distance, prioritizing personal space over emotional connection.",
        experiencePoints: 5,
        nextElement: 15,
      },
    ],
  },
  {
    text: "In a dense forest, the team encounters a mystical creature. A choice arises between peaceful coexistence and a potential battle for survival.",
    choices: [
      {
        text: "Embrace peaceful coexistence, learning valuable lessons from the mystical creature.",
        experiencePoints: 20,
        nextElement: 18,
      },
      {
        text: "Engage in a battle, testing the team's combat skills against the mystical creature.",
        experiencePoints: 10,
        nextElement: 18,
      },
    ],
  },
  {
    text: "As the journey progresses, the team faces a moral dilemma. A village plagued by bandits seeks your help.",
    choices: [
      {
        text: "Help the villagers, showcasing your team's commitment to justice.",
        experiencePoints: 20,
        nextElement: 19,
      },
      {
        text: "Ignore the plea, prioritizing the main quest over local issues.",
        experiencePoints: 10,
        nextElement: 19,
      },
    ],
  },
  {
    text: "The team faces betrayals, sacrifices, and confrontations with dark forces.",
    choices: [
      {
        text: "Stand united against the dark forces, proving your resilience.",
        experiencePoints: 20,
        nextElement: 20,
      },
      {
        text: "Doubt your companions and consider going solo.",
        experiencePoints: 5,
        nextElement: 20,
      },
    ],
  },
  {
    text: "In a climactic battle, Padmashree confronts Yash, seeking revenge for the past.",
    choices: [
      {
        text: "Engage in a fierce one-on-one battle, settling old scores.",
        experiencePoints: 20,
        nextElement: 21,
      },
      {
        text: "Seek assistance from the team for the final battle.",
        experiencePoints: 10,
        nextElement: 21,
      },
    ],
  },
  {
    text: "Yash, consumed by darkness, challenges you to a brutal battle. The ground shakes as magic clashes and swords collide.",
    choices: [
      {
        text: "Tap into your inner strength and continue the solo fight.",
        experiencePoints: 20,
        nextElement: 23,
      },
      {
        text: "Call upon the team for support in the intense battle.",
        experiencePoints: 15,
        nextElement: 22,
      },
    ],
  },
  {
    text: "Misba's rogue instincts and Yashi's arcane powers contribute to the fierce battle. Each moment is a dance between life and death.",
    choices: [
      {
        text: "Utilize Misba and Yashi's skills strategically, turning the tide.",
        experiencePoints: 25,
        nextElement: 24,
      },
      {
        text: "Rely on your own strength, risking exhaustion in the brutal fight.",
        experiencePoints: 10,
        nextElement: 23,
      },
    ],
  },
  {
    text: "As the battle intensifies, Yash reveals vulnerabilities, adding layers to the complex relationship.",
    choices: [
      {
        text: "Exploit Yash's vulnerabilities, pushing for victory.",
        experiencePoints: 20,
        nextElement: 25,
      },
      {
        text: "Show mercy, seeking a resolution beyond violence.",
        experiencePoints: 15,
        nextElement: 25,
      },
    ],
  },
  {
    text: "Misba, sensing an opportunity, unveils a hidden technique that could turn the tide in the battle.",
    choices: [
      {
        text: "Encourage Misba to unleash the hidden technique.",
        experiencePoints: 20,
        nextElement: 28,
      },
      {
        text: "Discourage Misba, fearing the consequences of the unknown.",
        experiencePoints: 10,
        nextElement: 26,
      },
    ],
  },
  {
    text: "The final clash between you and Yash unfolds, each strike echoing with the weight of past grievances.",
    choices: [
      {
        text: "Land the decisive blow, ending the battle with finality.",
        experiencePoints: 30,
        nextElement: 28,
      },
      {
        text: "Pause, allowing Yash a chance for redemption.",
        experiencePoints: 20,
        nextElement: 27,
      },
    ],
  },
  {
    text: "Yash, defeated but not destroyed, acknowledges the complexity of your shared history.",
    choices: [
      {
        text: "Accept Yash's acknowledgment, offering a chance for redemption.",
        experiencePoints: 25,
        nextElement: 28,
      },
      {
        text: "Reject Yash's acknowledgment, emphasizing the consequences of actions.",
        experiencePoints: 15,
        nextElement: 28,
      },
    ],
  },
  {
    text: "In the aftermath, the team reflects on the journey, grappling with the consequences of revenge and the meaning of redemption.",
    choices: [
      {
        text: "Share insights with the team, fostering understanding.",
        experiencePoints: 30,
        nextElement: 29,
      },
      {
        text: "Retreat into silence, leaving unresolved tensions lingering.",
        experiencePoints: 15,
        nextElement: 29,
      },
    ],
  },
  {
    text: "The journey concludes, leaving behind memories of friendship, challenges, and personal growth.",
    choices: [
      {
        text: "Reflect on the transformative journey, embracing the lessons learned.",
        experiencePoints: 50,
        nextElement: 30,
      },
      {
        text: "Move forward without reflection, potentially repeating past mistakes.",
        experiencePoints: 30,
        nextElement: 30,
      },
    ],
  },
];

// Start the game
console.log(storyElements);
updateGame();
