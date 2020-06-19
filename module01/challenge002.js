//
//  Retirement calculation

const name = 'Example'
const sex = 'M'
const age = 65
const contribution = 35

if (sex === 'M') {
    if (contribution >= 35 && (age + contribution) >= 95) {
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you still can't retire!`)
    }
} else if (sex ==='F') {
    if (contribution >= 30 && (age + contribution) >= 85) {
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you still can't retire!`)
    }
}