function calculateBMI() {
    const female = document.getElementById("female").value;
    const male = document.getElementById("male").value;
    let weight = document.getElementById("weight").value;
    let feet = document.getElementById("feet").value;
    let inches = document.getElementById("inches").value;
    let height = (feet * 12) + inches;
    let heightForBMI = height * height;
    let BMI = (((weight / (heightForBMI)) * 703) * 100).toFixed(2);
    const underWeight = 16;
    const normalWeightMin = 18.50;
    const normalWeightMax = 25.00;
    const overweightMin = 25.01;
    const overweightMax = 30.00;
    const obesity = 30.01

    
    if (BMI < underWeight) {
        return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI: " + BMI + " shows that you are under weight.";
    } else if (BMI > normalWeightMin && BMI < normalWeightMax) {
        return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI: " + BMI + " shows that your weight is normal.";
    } else if (BMI > overweightMin && BMI < overweightMax) {
        return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI: " + BMI + " shows that you are over weight.";
    } else if (BMI > obesity) {
        return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI: " + BMI + " shows that you are obesity.";
    }
    


}
