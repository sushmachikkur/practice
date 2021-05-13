function bmiCalculator (weight, height) {
    var bmi = weight / (height*height)
        if(bmi<18.5){
        console.log("Your BMI is " +bmi + ", so you are underweight.");
    }
     else if(bmi<24.9 && bmi > 18.5){
        console.log("Your BMI is " +bmi + ", so you have a normal weight.");
    }else{
        console.log("Your BMI is "+ bmi + ", so you are overweight.");
    }
    }
    
    