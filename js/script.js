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

});