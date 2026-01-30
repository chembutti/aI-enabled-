function calculate() {
  let electricity = document.getElementById("electricity").value || 0;
  let travel = document.getElementById("travel").value || 0;
  let diet = document.getElementById("diet").value;

  // Emission factors (educational)
  let electricityCO2 = electricity * 0.82 * 12;
  let travelCO2 = travel * 0.21 * 365;
  let foodCO2 = diet * 1000;

  let total = electricityCO2 + travelCO2 + foodCO2;

  document.getElementById("result").innerHTML =
    `🌍 Your estimated annual carbon footprint is 
     <b>${total.toFixed(1)} kg CO₂</b>`;

  generateAITips(electricity, travel, diet, total);
}

function generateAITips(electricity, travel, diet, total) {
  let tips = "<h3>🤖 AI Suggestions</h3><ul>";

  if (electricity > 200) {
    tips += "<li>Switch to LED lighting and energy-efficient appliances.</li>";
    tips += "<li>Consider rooftop solar or green power options.</li>";
  }

  if (travel > 30) {
    tips += "<li>Use public transport, car-pooling, or work-from-home options.</li>";
    tips += "<li>Short trips can be replaced with walking or cycling.</li>";
  }

  if (diet >= 1.5) {
    tips += "<li>Reducing meat intake by even one day a week lowers emissions.</li>";
    tips += "<li>Choose locally sourced, seasonal food.</li>";
  }

  if (total > 5000) {
    tips += "<li>Your footprint is above average — small changes will make big impact.</li>";
  } else {
    tips += "<li>Your footprint is relatively low — keep going!</li>";
  }

  tips += "</ul><p><i>Technology informs. Humans decide.</i></p>";

  document.getElementById("aiTips").innerHTML = tips;
}
