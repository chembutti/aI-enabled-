function calculate() {
  let electricity = document.getElementById("electricity").value || 0;
  let travel = document.getElementById("travel").value || 0;
  let diet = document.getElementById("diet").value;

  // Simple emission factors (educational)
  let electricityCO2 = electricity * 0.82 * 12; // kg CO2/year
  let travelCO2 = travel * 0.21 * 365;
  let foodCO2 = diet * 1000;

  let total = electricityCO2 + travelCO2 + foodCO2;

  document.getElementById("result").innerHTML =
    `🌍 Your estimated annual carbon footprint is <b>${total.toFixed(1)} kg CO₂</b><br><br>
     Technology helps us measure — responsibility helps us reduce.`;
}
