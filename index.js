const getRangeByBmi = (bmi) => {
  if (bmi < 18.5) {
    return bmiRange.UNDERWEIGHT;
  }
  if (bmi < 25) {
    return bmiRange.NORMAL;
  }
  if (bmi < 30) {
    return bmiRange.OVERWEIGHT;
  }
  return bmiRange.OBESE;
};

const getBmiButton = document.querySelector("#get-bmi");
const getInputValues = () => {
  return [
    parseFloat(document.querySelector("#weight").value),
    parseFloat(document.querySelector("#height").value),
  ];
};

const bmiRange = {
  UNDERWEIGHT: "Underweight",
  NORMAL: "Normal",
  OVERWEIGHT: "Overweight",
  OBESE: "Obese",
};
getBmiButton.addEventListener("click", () => {
  const [weight, height] = getInputValues();
  const bmi = (weight / height ** 2).toFixed(2);
  const output = document.querySelector("#output");
  const range = getRangeByBmi(bmi);
  document.querySelector("#range").textContent = range;

  document.querySelector("#bmi").textContent = bmi;
  output.className = "";
  output.classList.add(range.toLowerCase());
  output.style.display = "block";
});
