console.log("script.js connected!");

// Object to track selected answers
const userAnswers = {};

// Select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

// For each question block, add event listeners to answer buttons
questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'selected' style from other buttons in this block
      buttons.forEach(btn => btn.classList.remove("btn-primary"));
      buttons.forEach(btn => btn.classList.add("btn-outline-primary"));

      // Add 'selected' style to clicked button
      button.classList.remove("btn-outline-primary");
      button.classList.add("btn-primary");

      // Store the user's selected answer
      userAnswers[`question-${index + 1}`] = button.getAttribute("data-answer");
      console.log("Current answers:", userAnswers);
    });
  });
});

// Function to calculate and display the result
function displayResult() {
      // Count occurrences of A, P, R, F
  const counts = { A: 0, P: 0, R: 0, F: 0 };

  

  Object.values(userAnswers).forEach(answer => {
    if (counts.hasOwnProperty(answer)) {
      counts[answer]++;
    }
  });

  console.log("Answer counts:", counts);

  // Determine the highest-scoring letter
  const highest = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  // Map letters to cybersecurity roles
  const roles = {
    A: {
      title: "Security Analyst",
      description:
        "You have a sharp eye for detail and a passion for defending systems from attacks. Analysts thrive on studying threats, monitoring networks, and ensuring data safety."
    },
    P: {
      title: "Penetration Tester (Ethical Hacker)",
      description:
        "You love breaking things to make them stronger. As a Pen Tester, you think like a hacker to expose weaknesses and help organizations stay one step ahead of attackers."
    },
    R: {
      title: "Incident Responder",
      description:
        "You stay calm in the storm. As an Incident Responder, you jump into action during security breaches, analyze incidents, and help contain and recover from cyberattacks."
    },
    F: {
      title: "Digital Forensic Investigator",
      description:
        "You're methodical, logical, and curious. As a Forensic Investigator, you collect and analyze digital evidence to uncover what really happened after a cybercrime."
    }
  };

  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");

  // Handle case where not all questions are answered
  if (Object.keys(userAnswers).length < 5) {
    resultText.textContent = "Please answer all questions before viewing your result.";
    resultContainer.style.display = "block";
    return;
  }

  // Display result
  const role = roles[highest];
  resultText.innerHTML = `<strong>${role.title}</strong><br>${role.description}`;
  resultContainer.style.display = "block";

  

  // Reset quiz function
function resetQuiz() {
  // Clear stored answers
  for (let key in userAnswers) {
    delete userAnswers[key];
  }

  // Remove selected styles from buttons
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(button => {
    button.classList.remove("btn-primary");
    button.classList.add("btn-outline-primary");
  });

  // Hide result section again
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");

  resultText.textContent = "";
  resultContainer.style.display = "none";

  

  console.log("Quiz reset complete.");
}

// Add event listener for Reset button
document.getElementById("reset-quiz").addEventListener("click", resetQuiz);
// Attach event listener to the “Show Results” button
document.getElementById("show-result").addEventListener("click", displayResult);

