console.log("script.js connected!");

//Track responses
const scores = {A: 0, P: 0, R: 0, F: 0 };

//Handle button clicks
document.querySelectorAll(".answer-btn".forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.getAttribute("data-answer");
        scores[answer]++;
        button.closest(".question-block").querySelectorAll(".answer-btn").forEach(btn => {
            btn.disabled = true;
            btn.classList.remove("btn-outline-primary");
            btn.classList.add("btn-secondary");
        });
        button.classList.remove("btn-secondary");
    button.classList.add("btn-primary");
    });
}));

// Show result

document.getElementById("show-result").addEventListener("click", () => {
  const totalAnswered = Object.values(scores).reduce((a, b) => a + b, 0);
  if (totalAnswered < 5) {
    alert("Please answer all 5 questions before seeing your result.");
    return;
}

  const maxScore = Math.max(...Object.values(scores));
  const role = Object.keys(scores).find(key => scores[key] === maxScore);

  let roleName = "";
  let roleDesc = "";

  switch (role) {
    case "A":
      roleName = "Security Analyst";
      roleDesc = "You have a sharp eye for detail and a love for solving complex problems. Analysts monitor systems, identify threats, and keep data safe.";
      break;
    case "P":
      roleName = "Security Engineer / Penetration Tester";
      roleDesc = "You're a builder and problem-solver who loves to test limits. Engineers and pentesters strengthen defenses and find vulnerabilities before attackers do.";
      break;
    case "R":
      roleName = "Incident Responder";
      roleDesc = "You thrive in high-pressure situations. Responders act fast when security incidents happen, investigating and neutralizing threats.";
      break;
    case "F":
      roleName = "Cybersecurity Policy & Compliance Specialist";
      roleDesc = "You value structure and integrity. Compliance specialists develop and enforce security policies to ensure organizations stay safe and legal.";
      break;
  }

  const resultContainer = document.getElementById("result-container");
  document.getElementById("result-text").innerHTML = `<strong>${roleName}</strong><br>${roleDesc}`;
  resultContainer.style.display = "block";

});