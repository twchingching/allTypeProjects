function calculateBMI () {
        let weight = document.getElementById("weight").value;
        let weightNumber = Number(weight)
        let feet = document.getElementById("feet").value;
        let inches = document.getElementById("inches").value;
        let heightNumber = Number(feet) * 12 + Number(inches);
        let heightByInches = heightNumber * heightNumber;
        let BMI = ((weightNumber / heightByInches) * 703).toFixed(2);
        const weightI = 18.50;
        const normalWeightMax = 25.00;
        const overweightMax = 30.00;
        const obesity = 30.01;


        if (weight === "" || feet === "" || inches === "") {
            alert("Please you must fill all the fields to calculate your BMI");
            return false
        }

        if (BMI < weightI) {
            return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI is " + BMI + " shows that your weight is uderweight.";
        } else if (BMI > weightI && BMI < normalWeightMax) {
            return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI is " + BMI + " shows that you are normal weight.";
        } else if (BMI > normalWeightMax && BMI < overweightMax ) {
            return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI is " + BMI + " shows that you are overweight.";
        } else if (BMI > obesity) {
            return BMIcontext = document.getElementById("BMIResult").innerHTML = "Your BMI is " + BMI + " shows that you are obesity.";
        }
}

function resetFields (){
    document.getElementById("clear").reset();
}

