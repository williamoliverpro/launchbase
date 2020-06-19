//
//  BMI calculation

const name = 'William'
const weight = 90
const height = 1.90

const bmi = weight / ( height * height )

if (bmi >= 30) {
    console.log(`${bmi}, you are overweight`)
} else {
    console.log(`${bmi}, you are not overweight`)
}